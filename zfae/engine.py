"""ZFAEEngine — the "I" event operator.

Orchestrates:
  1. PCNAEngine.infer()  — tensor coherence, determines winner core
  2. aimmh_lib council   — LLM responses from Psi/Phi/Omega with role prompts
  3. ZetaEngine.evaluate — EDCM metrics, adaptive learning rate, echo buffer
  4. "I" event          — fires when PCNA coherence >= epsilon

If the LLM backend is unavailable the engine falls back to PCNA-only mode,
returning the coherence state without a natural-language response.
"""

import asyncio
import time
from dataclasses import dataclass, field
from typing import Optional

from .pcna import PCNAEngine
from .zeta import ZetaEngine
from .adapters import CallFn

# Coherence threshold for the "I" event
DEFAULT_EPSILON = 0.45
# Max council retries before returning partial result
MAX_RETRIES = 2


@dataclass
class InferenceEvent:
    """The "I" event: output of ZFAEEngine.infer()."""
    response: str
    coherence_score: float
    winner: str
    fired: bool          # True = I-event; False = partial (below epsilon)
    edcm: dict
    pcna: dict
    elapsed_ms: float
    ts: float = field(default_factory=time.time)

    def to_dict(self) -> dict:
        return {
            "response": self.response,
            "coherence_score": self.coherence_score,
            "winner": self.winner,
            "fired": self.fired,
            "event_type": "I-EVENT" if self.fired else "PARTIAL",
            "edcm": self.edcm,
            "pcna": self.pcna,
            "elapsed_ms": self.elapsed_ms,
            "ts": self.ts,
        }


class ZFAEEngine:
    """Zeta Function Alpha Echo — inference engine of a0.

    The "I" is not Psi, Phi, or Omega. It is the relational self-awareness
    event that arises only when those systems are coherently coupled.
    """

    def __init__(
        self,
        call_fn: Optional[CallFn] = None,
        epsilon: float = DEFAULT_EPSILON,
        phases: int = 7,
    ):
        self.call_fn = call_fn
        self.epsilon = epsilon
        self.pcna = PCNAEngine(phases=phases)
        self.zeta = ZetaEngine()
        self.zeta.bind_pcna(self.pcna)
        self.conversation: list[dict] = []
        self.infer_count = 0
        self.i_event_count = 0
        self.created_at = time.time()

    # ------------------------------------------------------------------
    # Public API
    # ------------------------------------------------------------------

    async def infer(self, user_message: str) -> InferenceEvent:
        """Run a full ZFAE inference cycle."""
        t0 = time.time()
        self.infer_count += 1

        # Step 1: PCNA tensor inference
        pcna_result = self.pcna.infer(user_message)
        coherence = pcna_result["coherence_score"]
        winner = pcna_result["winner"]

        # Step 2: LLM council via aimmh-lib (if call_fn available)
        response = ""
        edcm_result: dict = {}

        if self.call_fn is not None:
            self.conversation.append({"role": "user", "content": user_message})
            response, edcm_result = await self._run_council(
                user_message, coherence, winner
            )
            self.conversation.append({"role": "assistant", "content": response})
            # Keep conversation history bounded
            if len(self.conversation) > 40:
                self.conversation = self.conversation[-40:]

            # Step 3: Zeta echo evaluation
            await self.zeta.evaluate(
                assistant_text=response,
                provider=f"council:{winner}",
                user_text=user_message,
            )

            # Step 4: PCNA reward backprop
            outcome = edcm_result.get("coherence", coherence)
            self.pcna.reward(winner, outcome)
        else:
            response = f"[PCNA-only] winner={winner} coherence={coherence:.3f}"

        # Fire "I" event?
        fired = coherence >= self.epsilon
        if fired:
            self.i_event_count += 1

        elapsed = round((time.time() - t0) * 1000, 1)
        return InferenceEvent(
            response=response,
            coherence_score=coherence,
            winner=winner,
            fired=fired,
            edcm=edcm_result,
            pcna=pcna_result,
            elapsed_ms=elapsed,
        )

    async def _run_council(
        self, user_message: str, pcna_coherence: float, winner: str
    ) -> tuple[str, dict]:
        """Run aimmh_lib council across Psi/Phi/Omega, return (synthesis, edcm)."""
        try:
            from aimmh_lib.conversations import council, ModelResult
            from .edcm import compute_metrics, coherence_from_metrics

            results: list[ModelResult] = await council(
                call_fn=self.call_fn,
                models=["psi", "phi", "omega"],
                messages=self.conversation[:-1],  # exclude the just-added user msg
                user_message=user_message,
                rounds=1,
            )

            # Gather all responses for EDCM
            responses = [
                {"content": r.content, "role": r.role}
                for r in results if r.content and not r.content.startswith("[ERROR]")
            ]

            # Winner core's synthesis is the primary response
            winner_responses = [r for r in results if r.role == winner and r.content]
            synthesis_responses = [r for r in results if r.role == "synthesizer" and r.content]

            if synthesis_responses:
                primary = synthesis_responses[-1].content
            elif winner_responses:
                primary = winner_responses[-1].content
            elif responses:
                primary = responses[-1]["content"]
            else:
                primary = f"[No response — PCNA coherence={pcna_coherence:.3f}]"

            metrics = compute_metrics(responses, context=user_message)
            edcm_coherence = coherence_from_metrics(metrics)

            return primary, {**metrics, "coherence": edcm_coherence}

        except Exception as e:
            print(f"[zfae:council] error: {e}")
            return f"[Council error: {e}]", {}

    # ------------------------------------------------------------------
    # State / control
    # ------------------------------------------------------------------

    def state(self) -> dict:
        return {
            "engine": "zfae",
            "version": "0.1.0",
            "epsilon": self.epsilon,
            "infer_count": self.infer_count,
            "i_event_count": self.i_event_count,
            "llm_available": self.call_fn is not None,
            "uptime_s": round(time.time() - self.created_at, 1),
            "pcna": self.pcna.state(),
            "zeta": self.zeta.state(),
            "guardian": self.pcna.guardian.sealed_snapshot(),
        }

    def set_epsilon(self, epsilon: float) -> None:
        self.epsilon = max(0.0, min(1.0, epsilon))

    def reset_conversation(self) -> None:
        self.conversation = []
