"""ZFAE API routes.

POST /chat       — run ZFAEEngine.infer(), return InferenceEvent
GET  /state      — guardian-sealed engine snapshot
POST /config     — update epsilon, model, or conversation reset
GET  /health     — liveness check
"""

import os
from typing import Optional

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from zfae.engine import ZFAEEngine
from zfae.adapters import make_ollama_call_fn, make_openai_compat_call_fn

router = APIRouter()
_engine: Optional[ZFAEEngine] = None


def get_engine() -> Optional[ZFAEEngine]:
    return _engine


def init_engine(
    ollama_url: str = "http://localhost:11434",
    base_model: str = "llama3",
    epsilon: float = 0.45,
    with_llm: bool = True,
) -> ZFAEEngine:
    global _engine
    call_fn = None
    if with_llm:
        openai_url = os.environ.get("ZFAE_OPENAI_URL", "")
        openai_key = os.environ.get("ZFAE_OPENAI_KEY", "")
        if openai_url and openai_key:
            call_fn = make_openai_compat_call_fn(
                base_url=openai_url,
                api_key=openai_key,
                base_model=base_model,
            )
        else:
            call_fn = make_ollama_call_fn(
                base_url=ollama_url,
                base_model=base_model,
            )
    _engine = ZFAEEngine(call_fn=call_fn, epsilon=epsilon)
    return _engine


# ------------------------------------------------------------------
# Request / response models
# ------------------------------------------------------------------

class ChatRequest(BaseModel):
    message: str


class ConfigRequest(BaseModel):
    epsilon: Optional[float] = None
    base_model: Optional[str] = None
    reset_conversation: bool = False


# ------------------------------------------------------------------
# Routes
# ------------------------------------------------------------------

@router.get("/health")
async def health():
    engine = get_engine()
    return {
        "status": "ok",
        "engine": "zfae",
        "ready": engine is not None,
        "llm_available": engine.call_fn is not None if engine else False,
    }


@router.post("/chat")
async def chat(req: ChatRequest):
    engine = get_engine()
    if engine is None:
        raise HTTPException(503, "Engine not initialised")
    if not req.message.strip():
        raise HTTPException(400, "Message cannot be empty")
    event = await engine.infer(req.message.strip())
    return event.to_dict()


@router.get("/state")
async def state():
    engine = get_engine()
    if engine is None:
        raise HTTPException(503, "Engine not initialised")
    return engine.state()


@router.post("/config")
async def config(req: ConfigRequest):
    engine = get_engine()
    if engine is None:
        raise HTTPException(503, "Engine not initialised")
    changes: dict = {}
    if req.epsilon is not None:
        engine.set_epsilon(req.epsilon)
        changes["epsilon"] = engine.epsilon
    if req.reset_conversation:
        engine.reset_conversation()
        changes["conversation"] = "reset"
    if req.base_model:
        ollama_url = os.environ.get("ZFAE_OLLAMA_URL", "http://localhost:11434")
        engine.call_fn = make_ollama_call_fn(
            base_url=ollama_url,
            base_model=req.base_model,
        )
        changes["base_model"] = req.base_model
    return {"ok": True, "changes": changes}
