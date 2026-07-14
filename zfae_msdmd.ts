import { defineMsdmdCollection } from "./.agents/skills/msdmd/collection";

export default defineMsdmdCollection({
  "declarations": [
    {
      "block": "CONTRACTS",
      "fields": {
        "call": "tests/test_gonal_constructor.py#test_default_construct_has_reduced_phase_cycle",
        "class": "correctness",
        "given": "five sides with default labels",
        "then": "phases are reduced fractions covering one full cycle without duplicating 1/1"
      },
      "file": "src/zfae/gonal_constructor.py",
      "id": "gonal_constructor_normalizes_phase_cycle"
    },
    {
      "block": "CONTRACTS",
      "fields": {
        "call": "tests/test_gonal_constructor.py#test_preserves_provenance",
        "class": "provenance",
        "given": "an explicit provenance string",
        "then": "the immutable construct records that provenance verbatim"
      },
      "file": "src/zfae/gonal_constructor.py",
      "id": "gonal_constructor_preserves_provenance"
    },
    {
      "block": "CONTRACTS",
      "fields": {
        "call": "tests/test_gonal_constructor.py#test_rejects_degenerate_side_counts",
        "class": "correctness",
        "given": "side counts below three",
        "then": "construction raises ValueError before producing a carrier"
      },
      "file": "src/zfae/gonal_constructor.py",
      "id": "gonal_constructor_rejects_degenerate_shapes"
    },
    {
      "block": "MODULE_BUILD",
      "fields": {
        "admin_only": "false",
        "auth_boundary": "none",
        "internal_surface": "_validate_sides, _normalize_labels, _phase_for_index",
        "module_kind": "instrument",
        "module_name": "gonal_constructor",
        "network_boundary": "none",
        "owner": "Erin Patrick Spencer / Codex",
        "public_surface": "construct_gonal, GonalConstruct, GonalNode",
        "rollback": "remove src/zfae/gonal_constructor.py export and tests",
        "rollout": "importable reference utility",
        "storage_boundary": "none",
        "summary": "constructs immutable n-gonal ZFAE carrier records with normalized phase positions and provenance.",
        "tests": "tests/test_gonal_constructor.py",
        "unresolved": "runtime a0 integration remains out of scope for this repo",
        "user_data_boundary": "none"
      },
      "file": "src/zfae/gonal_constructor.py",
      "id": "zfae_gonal_constructor"
    },
    {
      "block": "MODULE_BUILD",
      "fields": {
        "admin_only": "false",
        "auth_boundary": "none",
        "feature_flag": "hmmm",
        "internal_surface": "oewn_ingest, relation_graph, angular_assignment, codebook_import",
        "module_kind": "instrument",
        "module_name": "vernacular_floor",
        "network_boundary": "external",
        "owner": "Erin Spencer (build agent: Codex)",
        "public_surface": "load_floor, FloorGonol, floor_manifest",
        "requires": "a0_public_gonol_codebook",
        "rollback": "delete floor artifact + loader export; codebook untouched (upstream)",
        "rollout": "hmmm",
        "storage_boundary": "write",
        "summary": "derives the English base-vernacular gonol set from OEWN relational position over the imported public glyph codebook so specialized strata can attach to a floor",
        "tests": "zfae.vernacular_floor.tests",
        "unresolved": "word_membership_rule, affix_type_system, twist_fiber_action, homology_template",
        "user_data_boundary": "none"
      },
      "file": "zfae/vernacular_floor/manifest.py",
      "id": "vernacular_floor_gonol_set"
    }
  ],
  "edges": [
    {
      "from": "gonal_constructor_normalizes_phase_cycle",
      "kind": "calls",
      "source_block": "CONTRACTS",
      "source_id": "gonal_constructor_normalizes_phase_cycle",
      "to": "tests/test_gonal_constructor.py#test_default_construct_has_reduced_phase_cycle"
    },
    {
      "from": "gonal_constructor_preserves_provenance",
      "kind": "calls",
      "source_block": "CONTRACTS",
      "source_id": "gonal_constructor_preserves_provenance",
      "to": "tests/test_gonal_constructor.py#test_preserves_provenance"
    },
    {
      "from": "gonal_constructor_rejects_degenerate_shapes",
      "kind": "calls",
      "source_block": "CONTRACTS",
      "source_id": "gonal_constructor_rejects_degenerate_shapes",
      "to": "tests/test_gonal_constructor.py#test_rejects_degenerate_side_counts"
    },
    {
      "from": "vernacular_floor_gonol_set",
      "kind": "owns",
      "source_block": "MODULE_BUILD",
      "source_id": "vernacular_floor_gonol_set",
      "to": "Erin Spencer (build agent: Codex)"
    },
    {
      "from": "vernacular_floor_gonol_set",
      "kind": "requires",
      "source_block": "MODULE_BUILD",
      "source_id": "vernacular_floor_gonol_set",
      "to": "a0_public_gonol_codebook"
    },
    {
      "from": "zfae_gonal_constructor",
      "kind": "owns",
      "source_block": "MODULE_BUILD",
      "source_id": "zfae_gonal_constructor",
      "to": "Erin Patrick Spencer / Codex"
    }
  ],
  "gaps": [],
  "repo": "zfae",
  "source_commit": "c9ab788"
});
