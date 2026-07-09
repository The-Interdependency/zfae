"""Native ZFAE gonal constructor.

The constructor creates an immutable, provenance-bearing n-gonal carrier that
ZFAE can use as a reference geometry for inference/specification work. It is
intentionally small and dependency-free because this repository is the
conceptual/specification home; runtime integration belongs in ``a0``.
"""

from __future__ import annotations

from dataclasses import dataclass
from fractions import Fraction
from math import gcd
from typing import Sequence

# === MODULE_BUILD ===
# id: zfae_gonal_constructor
#   module_name: gonal_constructor
#   module_kind: instrument
#   summary: constructs immutable n-gonal ZFAE carrier records with normalized phase positions and provenance.
#   owner: Erin Patrick Spencer / Codex
#   public_surface: construct_gonal, GonalConstruct, GonalNode
#   internal_surface: _validate_sides, _normalize_labels, _phase_for_index
#   auth_boundary: none
#   storage_boundary: none
#   network_boundary: none
#   user_data_boundary: none
#   admin_only: false
#   tests: tests/test_gonal_constructor.py
#   rollout: importable reference utility
#   rollback: remove src/zfae/gonal_constructor.py export and tests
#   unresolved: runtime a0 integration remains out of scope for this repo
# === END MODULE_BUILD ===

# === CONTRACTS ===
# id: gonal_constructor_rejects_degenerate_shapes
#   given: side counts below three
#   then: construction raises ValueError before producing a carrier
#   class: correctness
#   call: tests/test_gonal_constructor.py#test_rejects_degenerate_side_counts
# id: gonal_constructor_normalizes_phase_cycle
#   given: five sides with default labels
#   then: phases are reduced fractions covering one full cycle without duplicating 1/1
#   class: correctness
#   call: tests/test_gonal_constructor.py#test_default_construct_has_reduced_phase_cycle
# id: gonal_constructor_preserves_provenance
#   given: an explicit provenance string
#   then: the immutable construct records that provenance verbatim
#   class: provenance
#   call: tests/test_gonal_constructor.py#test_preserves_provenance
# === END CONTRACTS ===

DEFAULT_PROVENANCE = "zfae:gonal-constructor"


@dataclass(frozen=True, slots=True)
class GonalNode:
    """A single normalized vertex/position in an n-gonal ZFAE carrier."""

    index: int
    label: str
    phase: Fraction


@dataclass(frozen=True, slots=True)
class GonalConstruct:
    """Immutable n-gonal carrier description for ZFAE inference specs."""

    sides: int
    nodes: tuple[GonalNode, ...]
    provenance: str = DEFAULT_PROVENANCE

    @property
    def winding_step(self) -> int:
        """Smallest positive step coprime to ``sides`` for a single traversal."""

        for step in range(1, self.sides):
            if gcd(step, self.sides) == 1:
                return step
        return 1

    def labels(self) -> tuple[str, ...]:
        """Return node labels in traversal order."""

        return tuple(node.label for node in self.nodes)

    def phases(self) -> tuple[Fraction, ...]:
        """Return normalized phase positions in traversal order."""

        return tuple(node.phase for node in self.nodes)


def construct_gonal(
    sides: int,
    labels: Sequence[str] | None = None,
    *,
    provenance: str = DEFAULT_PROVENANCE,
) -> GonalConstruct:
    """Construct an immutable n-gonal carrier record.

    Args:
        sides: Number of sides/vertices. Must be at least three.
        labels: Optional labels for each node. When omitted, labels are
            generated as ``g0`` through ``g{sides - 1}``.
        provenance: Human-readable source for the constructed carrier.

    Returns:
        A :class:`GonalConstruct` with reduced fractional phase positions in
        ``[0, 1)`` and no runtime dependency on external repos.
    """

    side_count = _validate_sides(sides)
    normalized_labels = _normalize_labels(side_count, labels)
    nodes = tuple(
        GonalNode(index=index, label=label, phase=_phase_for_index(index, side_count))
        for index, label in enumerate(normalized_labels)
    )
    return GonalConstruct(sides=side_count, nodes=nodes, provenance=provenance)


def _validate_sides(sides: int) -> int:
    if not isinstance(sides, int):
        raise TypeError("sides must be an integer")
    if sides < 3:
        raise ValueError("gonal constructs require at least three sides")
    return sides


def _normalize_labels(sides: int, labels: Sequence[str] | None) -> tuple[str, ...]:
    if labels is None:
        return tuple(f"g{index}" for index in range(sides))

    normalized = tuple(str(label) for label in labels)
    if len(normalized) != sides:
        raise ValueError("labels length must match sides")
    if any(label == "" for label in normalized):
        raise ValueError("labels must not be empty")
    return normalized


def _phase_for_index(index: int, sides: int) -> Fraction:
    return Fraction(index, sides)
