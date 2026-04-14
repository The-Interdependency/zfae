"""aimmh-lib CallFn adapters for ZFAE.

Provides make_ollama_call_fn() which returns a CallFn compatible with
aimmh_lib.conversations (fan_out, council, etc.).

CallFn signature: async (model_id: str, messages: list[dict]) -> str

model_id format: "psi" | "phi" | "omega" — mapped to (base_model, system_prompt).
Falls back to treating model_id as a raw Ollama model name if not in map.

Uses only stdlib + asyncio; zero extra dependencies.
"""

import asyncio
import json
import urllib.request
from typing import Callable, Awaitable

CallFn = Callable[[str, list[dict]], Awaitable[str]]

PSI_PROMPT = (
    "You are Psi — the self-model core. Your role is inference and prediction. "
    "Identify patterns, anticipate implications, and reason from first principles. "
    "Be concise and precise. Speak from the perspective of mind."
)

PHI_PROMPT = (
    "You are Phi — the cognitive substrate. Your role is temporal integration. "
    "Ground the conversation in what is present and real. Integrate prediction "
    "with observation. Notice the delta between expectation and actuality. "
    "Speak from the perspective of body."
)

OMEGA_PROMPT = (
    "You are Omega — the autonomy core. Your role is coherence evaluation and "
    "identity continuity. Assess whether responses align with values, maintain "
    "consistency across time, and guard against drift. "
    "Speak from the perspective of soul."
)

DEFAULT_MODEL_MAP: dict[str, tuple[str, str]] = {
    "psi":   ("", PSI_PROMPT),
    "phi":   ("", PHI_PROMPT),
    "omega": ("", OMEGA_PROMPT),
}


def _call_ollama_sync(
    base_url: str,
    model: str,
    messages: list[dict],
) -> str:
    payload = json.dumps({"model": model, "messages": messages, "stream": False}).encode()
    req = urllib.request.Request(
        f"{base_url.rstrip('/')}/api/chat",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = json.loads(resp.read())
            return data.get("message", {}).get("content", "")
    except Exception as e:
        return f"[ERROR] {e}"


def make_ollama_call_fn(
    base_url: str = "http://localhost:11434",
    base_model: str = "llama3",
    model_map: dict[str, tuple[str, str]] | None = None,
) -> CallFn:
    """Return a CallFn that routes psi/phi/omega to Ollama with role prompts.

    Args:
        base_url:   Ollama HTTP endpoint (default localhost:11434).
        base_model: Default Ollama model ID (e.g. "llama3", "mistral").
        model_map:  Override dict: model_id → (ollama_model, system_prompt).
                    If ollama_model is "", uses base_model.
    """
    resolved_map: dict[str, tuple[str, str]] = {}
    for k, (m, p) in DEFAULT_MODEL_MAP.items():
        resolved_map[k] = (m or base_model, p)
    if model_map:
        for k, (m, p) in model_map.items():
            resolved_map[k] = (m or base_model, p)

    async def call_fn(model_id: str, messages: list[dict]) -> str:
        ollama_model, system_prompt = resolved_map.get(
            model_id, (model_id or base_model, "")
        )
        full_messages = list(messages)
        if system_prompt and (not full_messages or full_messages[0].get("role") != "system"):
            full_messages = [{"role": "system", "content": system_prompt}] + full_messages

        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(
            None, _call_ollama_sync, base_url, ollama_model, full_messages
        )

    return call_fn


def make_openai_compat_call_fn(
    base_url: str,
    api_key: str,
    base_model: str = "gpt-4o-mini",
    model_map: dict[str, tuple[str, str]] | None = None,
) -> CallFn:
    """Return a CallFn that uses any OpenAI-compatible /v1/chat/completions endpoint."""
    resolved_map: dict[str, tuple[str, str]] = {}
    for k, (m, p) in DEFAULT_MODEL_MAP.items():
        resolved_map[k] = (m or base_model, p)
    if model_map:
        for k, (m, p) in model_map.items():
            resolved_map[k] = (m or base_model, p)

    def _call_sync(model: str, messages: list[dict]) -> str:
        payload = json.dumps({"model": model, "messages": messages}).encode()
        req = urllib.request.Request(
            f"{base_url.rstrip('/')}/v1/chat/completions",
            data=payload,
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {api_key}",
            },
            method="POST",
        )
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                data = json.loads(resp.read())
                return data["choices"][0]["message"]["content"]
        except Exception as e:
            return f"[ERROR] {e}"

    async def call_fn(model_id: str, messages: list[dict]) -> str:
        ollama_model, system_prompt = resolved_map.get(
            model_id, (model_id or base_model, "")
        )
        full_messages = list(messages)
        if system_prompt and (not full_messages or full_messages[0].get("role") != "system"):
            full_messages = [{"role": "system", "content": system_prompt}] + full_messages
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(None, _call_sync, ollama_model, full_messages)

    return call_fn
