# === RATIOS ===
# loc_comments: hmmm
# unresolved: operator_graph_registration
# === END RATIOS ===
"""Binding between surface character names and atomic transformation operators."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Mapping, Sequence, Tuple


@dataclass(frozen=True)
class OperatorName:
    """Atomic operator with a spelled name and an independent selection domain."""

    name: str
    selection_prefixes: Tuple[str, ...] = ()
    relation_edges: Tuple[str, ...] = ()

    def accepts(self, root: str) -> bool:
        """Return True when the root is in this operator's explicit domain."""

        return not self.selection_prefixes or root.startswith(self.selection_prefixes)


def recognize(surface: str, operators: Sequence[OperatorName], roots: Sequence[str]) -> tuple[str, tuple[OperatorName, ...]]:
    """Recognize a surface word as root plus atomic operator sequence."""

    for operator in operators:
        if surface.startswith(operator.name):
            candidate = surface[len(operator.name):]
            if candidate in roots and operator.accepts(candidate):
                return candidate, (operator,)
    if surface in roots:
        return surface, ()
    raise ValueError(f"cannot recognize {surface!r} with declared operators and roots")


def emit(root: str, operators: Sequence[OperatorName], orthography: Mapping[str, str] | None = None) -> str:
    """Emit a surface form from a root and atomic operators."""

    surface = root
    for operator in reversed(tuple(operators)):
        if not operator.accepts(surface):
            raise ValueError(f"operator {operator.name!r} rejects root {surface!r}")
        surface = f"{operator.name}{surface}"
    if orthography and surface in orthography:
        return orthography[surface]
    return surface


def round_trip(surface: str, operators: Sequence[OperatorName], roots: Sequence[str]) -> bool:
    """Check recognize followed by emit on a declared lexicon surface."""

    root, ops = recognize(surface, operators, roots)
    return emit(root, ops) == surface


# === RATIOS ===
# loc_comments: hmmm
# unresolved: operator_graph_registration
# === END RATIOS ===
