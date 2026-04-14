"""ZFAE FastAPI server.

Serves the frontend and exposes:
  GET  /           → index.html
  GET  /static/*   → frontend assets
  POST /chat       → run inference
  GET  /state      → guardian-sealed snapshot
  POST /config     → update epsilon / model
  WS   /ws         → push core state updates every heartbeat tick

Environment variables:
  ZFAE_OLLAMA_URL   Ollama base URL (default http://localhost:11434)
  ZFAE_MODEL        Base Ollama model (default llama3)
  ZFAE_EPSILON      Coherence threshold for I-event (default 0.45)
  ZFAE_NO_LLM       Set to 1 to run PCNA-only (no Ollama required)
"""

import asyncio
import json
import os
import time
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import FileResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles

from .routes import router, get_engine, init_engine

FRONTEND_DIR = Path(__file__).parent.parent / "frontend"
TICK_INTERVAL = 2.0  # seconds between WebSocket pushes


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: initialise engine
    ollama_url = os.environ.get("ZFAE_OLLAMA_URL", "http://localhost:11434")
    base_model = os.environ.get("ZFAE_MODEL", "llama3")
    epsilon = float(os.environ.get("ZFAE_EPSILON", "0.45"))
    no_llm = os.environ.get("ZFAE_NO_LLM", "0") == "1"
    init_engine(
        ollama_url=ollama_url,
        base_model=base_model,
        epsilon=epsilon,
        with_llm=not no_llm,
    )
    print(f"[zfae] engine ready | epsilon={epsilon} | llm={'off' if no_llm else ollama_url}")
    yield
    # Shutdown: save checkpoint
    engine = get_engine()
    if engine:
        engine.pcna.save_checkpoint()
    print("[zfae] checkpoint saved, shutting down")


app = FastAPI(title="ZFAE", lifespan=lifespan)
app.include_router(router)

# Serve frontend static files
if FRONTEND_DIR.exists():
    app.mount("/static", StaticFiles(directory=str(FRONTEND_DIR)), name="static")


@app.get("/", response_class=HTMLResponse)
async def index():
    html_file = FRONTEND_DIR / "index.html"
    if html_file.exists():
        return FileResponse(str(html_file))
    return HTMLResponse("<h1>ZFAE</h1><p>Frontend not found.</p>")


# Active WebSocket connections
_ws_clients: set[WebSocket] = set()


@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    _ws_clients.add(ws)
    try:
        while True:
            engine = get_engine()
            if engine:
                snapshot = _build_ws_snapshot(engine)
                await ws.send_text(json.dumps(snapshot))
            # Also drain any incoming messages (keep-alive pings)
            try:
                await asyncio.wait_for(ws.receive_text(), timeout=TICK_INTERVAL)
            except asyncio.TimeoutError:
                pass
    except WebSocketDisconnect:
        pass
    except Exception as e:
        print(f"[zfae:ws] error: {e}")
    finally:
        _ws_clients.discard(ws)


def _build_ws_snapshot(engine) -> dict:
    """Compact snapshot for WebSocket push — no raw tensors."""
    pcna = engine.pcna
    rings = {
        "phi":   {"coherence": round(pcna.phi.ring_coherence, 4), "steps": pcna.phi.step_count},
        "psi":   {"coherence": round(pcna.psi.ring_coherence, 4), "steps": pcna.psi.step_count},
        "omega": {"coherence": round(pcna.omega.ring_coherence, 4), "steps": pcna.omega.step_count},
        "theta": {
            "coherence": round(float(pcna.guardian.node_coherence.mean()), 4),
            "gates_open": int(pcna.guardian.gate_open.sum()),
        },
    }
    node_coherence = {
        "phi":   [round(float(v), 3) for v in pcna.phi.node_coherence],
        "psi":   [round(float(v), 3) for v in pcna.psi.node_coherence],
        "omega": [round(float(v), 3) for v in pcna.omega.node_coherence],
    }
    zeta = engine.zeta.state()
    return {
        "type": "state",
        "ts": time.time(),
        "rings": rings,
        "node_coherence": node_coherence,
        "overall_coherence": pcna.last_coherence,
        "last_winner": pcna.last_winner,
        "infer_count": pcna.infer_count,
        "i_event_count": engine.i_event_count,
        "zeta_eval_count": zeta["eval_count"],
        "echo_recent": zeta.get("echo_recent", []),
        "guardian": engine.pcna.guardian.sealed_snapshot(),
    }
