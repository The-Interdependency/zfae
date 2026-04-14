"""PCNAEngine — six-ring inference engine.

Ported from The-Interdependency/a0 python/engine/pcna.py.
DB / storage / sigma deps removed for standalone operation.
Checkpoint persistence uses a local JSON file instead.

Rings: Phi (cognitive), Psi (self-model), Omega (autonomy),
       Theta/Guardian (microkernel), Memory-L (long-term), Memory-S (short-term).
"""

import hashlib
import json
import time
from pathlib import Path

import numpy as np

from .ptca import PTCACore
from .memory import MemoryCore
from .guardian import GuardianTensor

RING_WEIGHTS = {
    "phi": 0.30,
    "psi": 0.15,
    "omega": 0.15,
    "guardian": 0.20,
    "memory_l": 0.12,
    "memory_s": 0.08,
}

WINNER_RINGS = ["phi", "psi", "omega"]
CHECKPOINT_FILE = Path(".zfae_checkpoint.json")


class PCNAEngine:
    """PCNA six-ring inference engine — no stubs, all rings real."""

    def __init__(self, phases: int = 7):
        self.phases = phases
        self.phi = PTCACore("phi", "Φ", "cognitive", n=53, seed=53, phases=phases)
        self.psi = PTCACore("psi", "Ψ", "self_model", n=53, seed=43, phases=phases)
        self.omega = PTCACore("omega", "Ω", "autonomy", n=53, seed=47, phases=phases)
        self.memory_l = MemoryCore(n=19, seed=19, role="long_term", phases=phases)
        self.memory_s = MemoryCore(n=17, seed=17, role="short_term", phases=phases)
        self.guardian = GuardianTensor(phases=phases)
        self.infer_count = 0
        self.reward_count = 0
        self.last_coherence = 0.0
        self.last_winner = "phi"
        self.blueprint_hash = self.guardian.blueprint_hash
        self.created_at = time.time()

    def _project(self, text: str) -> np.ndarray:
        h = hashlib.sha512(text.encode("utf-8")).digest()
        arr = np.frombuffer(h, dtype=np.uint8).astype(np.float64) / 255.0
        return np.tile(arr, 4)[:53]

    def _inject(self, signal: np.ndarray) -> None:
        self.phi.inject(signal)
        self.phi._recompute_coherence()
        self.memory_s.write(signal)

        theta_nc = self.guardian.node_coherence
        theta_signal = np.full(53, float(theta_nc.mean()), dtype=np.float64)
        theta_signal[: len(theta_nc)] = theta_nc
        self.phi.inject(theta_signal)
        self.phi._recompute_coherence()

        psi_signal = np.full(53, self.phi.ring_coherence, dtype=np.float64)
        phi_node_c = self.phi.node_coherence
        psi_signal[: len(phi_node_c)] = phi_node_c
        self.psi.inject(psi_signal)

        ml_hub = self.memory_l.hub_avg
        omega_base = np.full(53, float(ml_hub.mean()), dtype=np.float64)
        omega_base[: len(ml_hub)] *= ml_hub
        self.omega.inject(np.clip(omega_base, 0.0, 1.0))

    def _propagate(self) -> None:
        self.phi.propagate(steps=10)
        self.psi.propagate(steps=8)
        self.omega.propagate(steps=6)
        self.guardian.propagate(steps=5)

    def _ptca_seed_audit(self) -> dict:
        result: dict = {}
        for name, core in [("phi", self.phi), ("psi", self.psi), ("omega", self.omega)]:
            audit = core.ptca_seed_audit()
            result[f"{name}_nodes_audited"] = len(audit)
            result[f"{name}_coherence"] = round(core.ring_coherence, 4)
            result[f"{name}_top3"] = sorted(audit, key=lambda x: x["coherence"], reverse=True)[:3]
            result[f"{name}_bottom3"] = sorted(audit, key=lambda x: x["coherence"])[:3]
        result["memory_s_hub_avg"] = self.memory_s.state()["avg_hub"]
        return result

    def _pcta_circle_audit(self) -> dict:
        g_audit = self.guardian.pcta_circle_audit()
        open_nodes = [n for n in g_audit if n["gate"]]
        return {
            "guardian_nodes": len(g_audit),
            "gates_open": len(open_nodes),
            "gates_closed": len(g_audit) - len(open_nodes),
            "avg_circles": round(sum(n["circles"] for n in g_audit) / len(g_audit), 2),
            "guardian_coherence": round(float(self.guardian.node_coherence.mean()), 4),
            "memory_l_hub_avg": self.memory_l.state()["avg_hub"],
        }

    def _coherence_score(self, seed_audit: dict, circle_audit: dict) -> dict:
        ring_scores = {
            "phi": seed_audit["phi_coherence"],
            "psi": seed_audit["psi_coherence"],
            "omega": seed_audit["omega_coherence"],
            "guardian": circle_audit["guardian_coherence"],
            "memory_l": self.memory_l.state()["avg_hub"],
            "memory_s": self.memory_s.state()["avg_hub"],
        }
        weighted = sum(RING_WEIGHTS[r] * ring_scores[r] for r in ring_scores)
        winner = max(WINNER_RINGS, key=lambda r: ring_scores[r])
        return {
            "ring_scores": {k: round(v, 4) for k, v in ring_scores.items()},
            "weighted_coherence": round(weighted, 4),
            "winner": winner,
            "confidence": round(float(np.clip(weighted, 0.0, 1.0)), 4),
        }

    def infer(self, text: str) -> dict:
        t0 = time.time()
        signal = self._project(text)
        self._inject(signal)
        self._propagate()
        seed_audit = self._ptca_seed_audit()
        circle_audit = self._pcta_circle_audit()
        coherence = self._coherence_score(seed_audit, circle_audit)
        self.infer_count += 1
        self.last_coherence = coherence["weighted_coherence"]
        self.last_winner = coherence["winner"]
        return {
            "infer_index": self.infer_count,
            "elapsed_ms": round((time.time() - t0) * 1000, 1),
            "signal_mean": round(float(signal.mean()), 4),
            "seed_audit": seed_audit,
            "circle_audit": circle_audit,
            "coherence": coherence,
            "coherence_score": coherence["weighted_coherence"],
            "winner": coherence["winner"],
            "confidence": coherence["confidence"],
        }

    def reward(self, winner: str, outcome: float) -> dict:
        self.phi.nudge(outcome, lr=0.025)
        self.psi.nudge(outcome, lr=0.020)
        self.omega.nudge(outcome, lr=0.015)
        self.guardian.apply_reward(outcome)
        flushed = self.memory_s.flush_to(self.memory_l, outcome)
        self.reward_count += 1
        return {
            "winner": winner,
            "outcome": round(outcome, 4),
            "memory_flush": flushed,
            "phi_coherence": round(self.phi.ring_coherence, 4),
            "psi_coherence": round(self.psi.ring_coherence, 4),
            "omega_coherence": round(self.omega.ring_coherence, 4),
        }

    def save_checkpoint(self) -> None:
        data: dict = {"saved_at": time.time()}
        for name, ring in [
            ("phi", self.phi), ("psi", self.psi), ("omega", self.omega),
            ("memory_l", self.memory_l), ("memory_s", self.memory_s),
        ]:
            data[f"{name}_mean"] = float(ring.tensor.mean())
        try:
            CHECKPOINT_FILE.write_text(json.dumps(data))
        except OSError as e:
            print(f"[pcna] checkpoint save failed: {e}")

    def state(self) -> dict:
        return {
            "engine": "pcna",
            "version": "2.2.0",
            "infer_count": self.infer_count,
            "reward_count": self.reward_count,
            "last_coherence": round(self.last_coherence, 4),
            "last_winner": self.last_winner,
            "rings": {
                "phi": self.phi.state(),
                "psi": self.psi.state(),
                "omega": self.omega.state(),
                "theta": self.guardian.state(),
                "memory_l": self.memory_l.state(),
                "memory_s": self.memory_s.state(),
            },
            "ring_weights": RING_WEIGHTS,
            "uptime_s": round(time.time() - self.created_at, 1),
        }
