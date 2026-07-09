# === RATIOS ===
# loc_comments: hmmm
# unresolved: public_surface_stability
# === END RATIOS ===
"""English base vernacular gonol floor scaffold."""

from .assignment import FloorGonol, assign_from_relations, compose, compose_sentence, origin
from .floor_artifact import embedding_rows, load_floor, write_floor
from .manifest import FloorManifest, floor_manifest, unresolved_membership_rule
from .transformation_assembly import OperatorName, emit, recognize

__all__ = [
    "FloorGonol",
    "FloorManifest",
    "OperatorName",
    "assign_from_relations",
    "compose",
    "compose_sentence",
    "embedding_rows",
    "emit",
    "floor_manifest",
    "load_floor",
    "origin",
    "recognize",
    "unresolved_membership_rule",
    "write_floor",
]

# === RATIOS ===
# loc_comments: hmmm
# unresolved: public_surface_stability
# === END RATIOS ===
