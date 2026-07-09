# === RATIOS ===
# loc_comments: hmmm
# unresolved: word_membership_rule, affix_type_system, twist_fiber_action, homology_template
# === END RATIOS ===
"""Manifest and membership predicate stub for the English vernacular floor."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Callable, Mapping, Optional

# === MODULE_BUILD ===
# id: vernacular_floor_gonol_set
#   module_name: vernacular_floor
#   module_kind: instrument
#   summary: derives the English base-vernacular gonol set from OEWN relational position over the imported public glyph codebook so specialized strata can attach to a floor
#   owner: Erin Spencer (build agent: Codex)
#   public_surface: load_floor, FloorGonol, floor_manifest
#   internal_surface: oewn_ingest, relation_graph, angular_assignment, codebook_import
#   auth_boundary: none
#   storage_boundary: write
#   network_boundary: external
#   user_data_boundary: none
#   admin_only: false
#   tests: zfae.vernacular_floor.tests
#   rollout: hmmm
#   rollback: delete floor artifact + loader export; codebook untouched (upstream)
#   requires: a0_public_gonol_codebook
#   feature_flag: hmmm
#   unresolved: word_membership_rule, affix_type_system, twist_fiber_action, homology_template
# === END MODULE_BUILD ===

MembershipPredicate = Callable[[str, Mapping[str, object]], bool]


@dataclass(frozen=True)
class FloorManifest:
    """Declared, swappable facts for a vernacular floor build."""

    id: str = "vernacular_floor_gonol_set"
    source_dictionary: str = "Open English WordNet 2025"
    codebook_source: str = "a0_public_gonol_codebook"
    membership_rule: str = "hmmm"
    twist_period: str = "R/4πZ"
    chirality_gauge: str = "origin-planted-relative-sense"


def floor_manifest() -> FloorManifest:
    """Return the in-code manifest used by scaffolded loaders and tests."""

    return FloorManifest()


def unresolved_membership_rule(lemma: str, metadata: Optional[Mapping[str, object]] = None) -> bool:
    """Refuse to guess vernacular membership until Erin pins the rule.

    The predicate exists so callers wire membership as a declared dependency
    instead of smuggling a word list into the module.  It intentionally raises:
    hmmm is a boundary object, not a boolean.
    """

    raise NotImplementedError(
        f"vernacular membership for {lemma!r} is hmmm; provide a pinned predicate"
    )


# === RATIOS ===
# loc_comments: hmmm
# unresolved: word_membership_rule, affix_type_system, twist_fiber_action, homology_template
# === END RATIOS ===
