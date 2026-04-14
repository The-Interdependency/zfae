"""ZetaEngine — non-LLM real-time learning engine.

Ported from The-Interdependency/a0 python/engine/zeta.py.
a0-specific imports (storage, sigma, main.get_pcna) removed.

  Z = Zeta    — observer
  F = Fun     — coherence transform
  A = Alpha   — adaptive learning rate
  E = Echo    — feedback signal

The engine evaluates each assistant response, drives PCNA reward backprop,
and maintains an echo buffer of recent evaluations.
"""

import time
from collections import deque
from typing import Optional, TYPE_CHECKING

from .edcm import compute_metrics, coherence_from_metrics

if TYPE_CHECKING:
    from .pcna import PCNAEngine

_DEFAULT_RESOLUTION = 3
_MIN_RES = 1
_MAX_RES = 5


class ZetaEngine:
    """Non-LLM real-time learning engine with per-directory resolution control."""

    AGENT_NAME = "a0(zeta fun alpha echo)"

    def __init__(self, buffer_size: int = 50):
        self.echo_buffer: deque = deque(maxlen=buffer_size)
        self.eval_count = 0
        self.created_at = time.time()
        self.resolution_config: dict = {
            "global": _DEFAULT_RESOLUTION,
            "directories": {},
        }
        self._pcna: Optional["PCNAEngine"] = None

    def bind_pcna(self, pcna: "PCNAEngine") -> None:
        """Bind a PCNAEngine for reward backpropagation."""
        self._pcna = pcna

    # ------------------------------------------------------------------
    # Resolution management
    # ------------------------------------------------------------------

    def get_resolution(self, path: str = "") -> int:
        config = self.resolution_config
        dirs = config.get("directories", {})
        if not path or not dirs:
            return config.get("global", _DEFAULT_RESOLUTION)
        normalized = path.rstrip("/")
        best_level: Optional[int] = None
        best_len = -1
        for dir_path, level in dirs.items():
            dp = dir_path.rstrip("/")
            if normalized == dp or normalized.startswith(dp + "/"):
                if len(dp) > best_len:
                    best_level = level
                    best_len = len(dp)
        return best_level if best_level is not None else config.get("global", _DEFAULT_RESOLUTION)

    def set_global_resolution(self, level: int) -> dict:
        self.resolution_config["global"] = max(_MIN_RES, min(_MAX_RES, level))
        return dict(self.resolution_config)

    def set_directory_resolution(self, path: str, level: int) -> dict:
        self.resolution_config.setdefault("directories", {})[path] = max(_MIN_RES, min(_MAX_RES, level))
        return dict(self.resolution_config)

    def load_resolution_config(self, config: dict) -> None:
        if not isinstance(config, dict):
            return
        self.resolution_config = {
            "global": max(_MIN_RES, min(_MAX_RES, int(config.get("global", _DEFAULT_RESOLUTION)))),
            "directories": {
                k: max(_MIN_RES, min(_MAX_RES, int(v)))
                for k, v in config.get("directories", {}).items()
                if isinstance(k, str) and isinstance(v, (int, float))
            },
        }

    # ------------------------------------------------------------------
    # Evaluate
    # ------------------------------------------------------------------

    def _gate_factor(self) -> float:
        if self._pcna is None:
            return 1.0
        open_frac = float(self._pcna.guardian.gate_open.mean())
        return round(0.8 + open_frac * 0.4, 4)

    async def evaluate(
        self,
        assistant_text: str,
        provider: str,
        user_text: str = "",
        path: str = "",
    ) -> dict:
        """Evaluate assistant reply, drive PCNA backprop, append to echo buffer."""
        resolution = self.get_resolution(path)
        metrics = compute_metrics(
            responses=[{"content": assistant_text}],
            context=user_text,
        )
        coherence = coherence_from_metrics(metrics)
        base_lr = 0.025
        gate_factor = self._gate_factor()
        effective_lr = base_lr * gate_factor

        if self._pcna is not None:
            self._pcna.phi.nudge(coherence, lr=effective_lr)

        self.eval_count += 1
        event = {
            "agent": self.AGENT_NAME,
            "provider": provider,
            "coherence": coherence,
            **{k: metrics.get(k) for k in ["cm", "da", "drift", "int_val"]},
            "resolution": resolution,
            "path": path or None,
            "base_lr": base_lr,
            "gate_factor": gate_factor,
            "effective_lr": round(effective_lr, 6),
            "ts": time.time(),
        }
        self.echo_buffer.append(event)
        print(
            f"[zfae:echo] provider={provider} coherence={coherence}"
            f" lr={effective_lr:.4f} gate={gate_factor}"
        )
        return event

    def state(self) -> dict:
        return {
            "agent": self.AGENT_NAME,
            "eval_count": self.eval_count,
            "echo_buffer_len": len(self.echo_buffer),
            "echo_recent": list(self.echo_buffer)[-5:],
            "uptime_s": round(time.time() - self.created_at, 1),
            "resolution": self.resolution_config,
        }
