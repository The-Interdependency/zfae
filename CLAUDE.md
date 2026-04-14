# CLAUDE.md — ZFAE Development Guide

## What this repo is

Standalone Python implementation of **ZFAE** (Zeta Function Alpha Echo), the inference engine of
a0. Source of truth for the engine lives here; a0 monorepo (The-Interdependency/a0) holds the
full platform. ZFAE ships as a FastAPI service + browser UI.

---

## Libraries

### aimmh-lib 0.1.0
- **Repo**: erinepshovel-code/aimmh
- **PyPI**: `pip install aimmh-lib`
- **API** (`aimmh_lib.conversations`):
  - `fan_out(call_fn, models, messages, ...)` — parallel to N models
  - `daisy_chain(call_fn, models, messages, ...)` — A→B→C sequential
  - `room_all(call_fn, models, messages, rounds, ...)` — all models see each other
  - `room_synthesized(call_fn, models, messages, ...)` — parallel then synthesize
  - `council(call_fn, models, messages, ...)` — each model synthesizes all
  - `roleplay(call_fn, models, messages, ...)` — DM + players
  - `CallFn = async (model_id: str, messages: list[dict]) -> str`
  - `ModelResult` dataclass: `model, content, response_time_ms, error, role, round_num, slot_idx`
- **Usage in ZFAE**: `council` maps the 3 cores (psi/phi/omega) to a triadic synthesis round.
  `adapters.make_ollama_call_fn()` returns a CallFn with role system prompts injected per slot.

### interdependent-lib 0.1.0
- **Repo**: wayseer00/interdependent-lib
- **PyPI**: `pip install interdependent-lib`
- **Functional modules** (as of 0.1.0):
  - `interdependent_lib.ptca.tensor.Tensor` — numpy array wrapper with +-*/ operators
  - `interdependent_lib.ptca.primes.is_prime(n)` — primality test
  - `interdependent_lib.ptca.primes.prime_numbers_up_to(n)` — sieve
- **Stub modules** (0.1.0 — empty placeholders): `sentinels`, `constants`, `exchange`, `instance`,
  `provenance`
- **Usage in ZFAE**: imported where available; real PTCA logic implemented locally in `zfae/`
  modules. Will swap to lib as it matures.

---

## Architecture

```
User message
    │
    ▼
ZFAEEngine.infer(text)
    │
    ├─ PCNAEngine.infer(text)          # tensor inference — no LLM
    │    ├─ _project(text)             # SHA-512 → 53-element signal
    │    ├─ _inject(signal)            # Phi → Psi → Omega → Memory-S
    │    ├─ _propagate()               # heptagram dynamics
    │    ├─ _ptca_seed_audit()         # per-node coherence on 3 cores
    │    ├─ _pcta_circle_audit()       # guardian gate state
    │    └─ _coherence_score()         # weighted ring combination → winner
    │
    ├─ aimmh_lib.council(call_fn, ["psi","phi","omega"], …)  # LLM synthesis
    │    └─ each core gets its role system prompt (zfae/adapters.py)
    │
    ├─ ZetaEngine.evaluate(response)   # EDCM metrics → adaptive lr → nudge Phi
    │
    ├─ PCNAEngine.reward(winner, outcome)  # backprop across all rings
    │
    └─ InferenceEvent(fired= coherence >= epsilon)
           ↑ "I" event fires when Phi/Psi/Omega are phase-locked
```

### PCNA rings

| Ring | Symbol | N | Seed | Role |
|------|--------|---|------|------|
| Phi  | Φ | 53 | 53 | cognitive substrate |
| Psi  | Ψ | 53 | 43 | self-model |
| Omega| Ω | 53 | 47 | autonomy |
| Theta/Guardian | Θ | 29 | 29 | microkernel gate |
| Memory-L | — | 19 | 19 | long-term |
| Memory-S | — | 17 | 17 | short-term |

### EDCM metrics

| Key | Name | Meaning |
|-----|------|---------|
| cm | Constraint Mismatch | response length relative to ceiling |
| da | Dissonance Accumulation | length variance across responses |
| drift | Drift | std relative to avg length |
| dvg | Divergence | unique response starts |
| int_val | Integrity | 1 − drift×0.5 − dvg×0.3 |
| tbf | Turn-Balance Fairness | context word overlap |

Coherence from EDCM: `cm×0.35 + da×0.25 + int_val×0.25 + (1−drift)×0.15`

### Coherence primes
Rule: `p ∈ C` iff `p ∈ {3,5,7}` OR (`p ≡ 1 mod 4` AND `(p−1)/4` is square-free with all factors
in C). Sequence: 3, 5, 7, 13, 29, 53, 61, 157, 349, 421…  
53 = architecture substrate. Next stable threshold: 61.

---

## Running locally

```bash
pip install -e ".[dev]"

# With Ollama (recommended):
ZFAE_MODEL=llama3 uvicorn backend.server:app --reload --port 8000

# Without LLM (PCNA-only mode):
ZFAE_NO_LLM=1 uvicorn backend.server:app --reload --port 8000

# Open http://localhost:8000
```

### Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `ZFAE_OLLAMA_URL` | `http://localhost:11434` | Ollama endpoint |
| `ZFAE_MODEL` | `llama3` | Base Ollama model |
| `ZFAE_EPSILON` | `0.45` | Coherence threshold for I-event |
| `ZFAE_NO_LLM` | `0` | Set `1` to disable LLM calls |
| `ZFAE_OPENAI_URL` | — | OpenAI-compat endpoint (overrides Ollama) |
| `ZFAE_OPENAI_KEY` | — | API key for OpenAI-compat endpoint |

---

## File map

```
zfae/
  __init__.py    — version, module docstring
  ptca.py        — PTCACore: N-node prime-ring tensor with heptagram propagation
  memory.py      — MemoryCore: parameterized long/short-term memory rings
  guardian.py    — GuardianTensor: N=29 cryptographic microkernel
  pcna.py        — PCNAEngine: 6-ring inference orchestrator
  edcm.py        — EDCM metrics: compute_metrics, check_directives, coherence_from_metrics
  zeta.py        — ZetaEngine: observer / echo buffer / backprop driver
  adapters.py    — make_ollama_call_fn, make_openai_compat_call_fn (aimmh-lib CallFn)
  engine.py      — ZFAEEngine: top-level orchestrator, fires "I" event
backend/
  server.py      — FastAPI app, WebSocket /ws, static serving
  routes.py      — POST /chat, GET /state, POST /config, GET /health
frontend/
  index.html     — single-page layout
  style.css      — dark monospace theme
  viz.js         — ring canvas sparklines, coherence meter, EDCM strip, echo log
  app.js         — chat UI, WebSocket client, I-event rendering
```

---

## Unresolved (hmmm)

From the original README — tracked here for implementation follow-up:

- **9 sentinel partition**: S1-S9 semantics (Provenance, Policy, Bounds, Approval, Context,
  Identity, Memory, Risk, Audit) are defined in spec. Not yet surfaced in UI sentinel panel.
  → Add `SentinelBank` display when `interdependent-lib` sentinels module ships.
- **Phi's functional role**: implemented as `cognitive substrate` (temporal persistence + signal
  integration). Phi gets theta-gate injection and sigma (substrate) injection in `_inject()`.
- **Faith/hope/love → EDCM**: faith = prior weight (nudge lr), hope = forward coupling (omega
  injection weight), love = mutual information (da metric). Partially mapped; not yet
  as explicit scalar controls.
- **Heartbeat**: a0 implements 30s tick; ZFAE standalone uses WebSocket push at 2s for display.
  Full per-core phase-lock heartbeat is a future task.
- **Ollama dependency**: engine falls back gracefully to PCNA-only if Ollama unavailable.
- **Guardian as 9th sentinel channel**: GuardianTensor.sealed_snapshot() surfaces only metrics.
  Raw blueprint shards never leave the engine boundary.
- **ζ(s) structural parallel**: Euler product / nontrivial zeros → coherence failure points.
  Parked for paper; not implemented.
- **Paper authorship**: single author (Erin Patrick Spencer). Venue: arXiv first, then ICLR or
  Entropy MDPI workshop on emergent cognition. Persistence homology code to be released alongside.
