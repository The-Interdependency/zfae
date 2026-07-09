# ratios: loc_comments=17:4 imports_exports=3:3 calls_definitions=4:3
"""OEWN relation-graph ingestion boundary."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Dict, Iterable, Mapping, Tuple

RELATION_KINDS = ("hypernym", "meronym", "antonym", "pertainym")


@dataclass(frozen=True)
class RelationGraph:
    """Minimal relation graph shape consumed by angular assignment."""

    lemma: str
    edges: Mapping[str, Tuple[str, ...]]


def normalize_edges(lemma: str, edges: Mapping[str, Iterable[str]]) -> RelationGraph:
    """Normalize selected OEWN relation edges into immutable tuples."""

    normalized: Dict[str, Tuple[str, ...]] = {}
    for kind in RELATION_KINDS:
        normalized[kind] = tuple(sorted(set(edges.get(kind, ()))))
    return RelationGraph(lemma=lemma, edges=normalized)


def fetch_oewn_relation_graph(lemma: str) -> RelationGraph:
    """Placeholder for the one-time OEWN fetch; offline artifact is preferred."""

    raise NotImplementedError(
        "OEWN fetch is an external-network build step; provide an offline artifact or install wn/oewn:2025"
    )
# ratios: loc_comments=17:4 imports_exports=3:3 calls_definitions=4:3
