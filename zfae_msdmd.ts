import { defineMsdmdCollectionV2, mergeMsdmdFactChunks } from "./.agents/skills/msdmd/collection";

export default defineMsdmdCollectionV2({
  "capabilities": [
    "native-facts",
    "supplemental-msdmd-blocks",
    "source-qualified-identities",
    "duplicate-id-diagnostics",
    "discovery-accounting"
  ],
  "conflicts": [],
  "coverage": {
    "block_adoption": {
      "BOUNDARIES": 0,
      "CAPABILITIES": 0,
      "CHECKS": 0,
      "CONTRACTS": 1,
      "DEPENDENCIES": 0,
      "DOCS": 0,
      "FRONTEND_META": 0,
      "LLMS": 0,
      "MODULE_BUILD": 2,
      "OWNERS": 0
    },
    "denominator": {
      "count": 24,
      "kind": "discovered-files"
    },
    "excluded_files": 0,
    "excluded_subtrees": 13,
    "information_availability": "not-evaluated-without-obligation-policy",
    "invalid_files": 0,
    "native_facts": 269,
    "partial_files": 1,
    "required_sources": [],
    "supplemental_declarations": 5,
    "supported_files": 23,
    "unreadable_files": 0,
    "unsupported_files": 0,
    "verified_behavior": "not-evaluated"
  },
  "declarations": [
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#block/CONTRACTS/gonal_constructor_normalizes_phase_cycle",
      "block": "CONTRACTS",
      "fields": {
        "call": "tests/test_gonal_constructor.py#test_default_construct_has_reduced_phase_cycle",
        "class": "correctness",
        "given": "five sides with default labels",
        "then": "phases are reduced fractions covering one full cycle without duplicating 1/1"
      },
      "file": "src/zfae/gonal_constructor.py",
      "id": "gonal_constructor_normalizes_phase_cycle",
      "origin": "msdmd-block",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "pointer": "block:CONTRACTS/id:gonal_constructor_normalizes_phase_cycle"
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared"
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#block/CONTRACTS/gonal_constructor_preserves_provenance",
      "block": "CONTRACTS",
      "fields": {
        "call": "tests/test_gonal_constructor.py#test_preserves_provenance",
        "class": "provenance",
        "given": "an explicit provenance string",
        "then": "the immutable construct records that provenance verbatim"
      },
      "file": "src/zfae/gonal_constructor.py",
      "id": "gonal_constructor_preserves_provenance",
      "origin": "msdmd-block",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "pointer": "block:CONTRACTS/id:gonal_constructor_preserves_provenance"
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared"
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#block/CONTRACTS/gonal_constructor_rejects_degenerate_shapes",
      "block": "CONTRACTS",
      "fields": {
        "call": "tests/test_gonal_constructor.py#test_rejects_degenerate_side_counts",
        "class": "correctness",
        "given": "side counts below three",
        "then": "construction raises ValueError before producing a carrier"
      },
      "file": "src/zfae/gonal_constructor.py",
      "id": "gonal_constructor_rejects_degenerate_shapes",
      "origin": "msdmd-block",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "pointer": "block:CONTRACTS/id:gonal_constructor_rejects_degenerate_shapes"
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared"
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#block/MODULE_BUILD/zfae_gonal_constructor",
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
      "id": "zfae_gonal_constructor",
      "origin": "msdmd-block",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "pointer": "block:MODULE_BUILD/id:zfae_gonal_constructor"
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared"
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#block/MODULE_BUILD/vernacular_floor_gonol_set",
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
      "id": "vernacular_floor_gonol_set",
      "origin": "msdmd-block",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "pointer": "block:MODULE_BUILD/id:vernacular_floor_gonol_set"
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared"
    }
  ],
  "diagnostics": [
    {
      "code": "unrecognized_license_text",
      "message": "license identifier remains hmmm",
      "reader_id": "license-text",
      "severity": "warning",
      "source": {
        "content_sha256": "28a9529c7d0bb4dc51f4bf5c116a3d16ef247a052f7591466768ddf563fd1cf5",
        "file": "LICENSE",
        "location": {
          "pointer": "document"
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "status": "ambiguous"
    }
  ],
  "discovery": [
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.agents/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.git/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.mypy_cache/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.pytest_cache/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.skill-lib/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.tox/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/.venv/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/__pycache__/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/build/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/dist/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/node_modules/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/target/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "subtree",
      "file": "**/venv/**",
      "reader_ids": [],
      "reason": "configured-subtree",
      "status": "excluded"
    },
    {
      "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
      "entry_kind": "file",
      "file": ".gitignore",
      "reader_ids": [
        "gitignore-lines"
      ],
      "size": 180,
      "status": "supported"
    },
    {
      "content_sha256": "6ca2844c32e468837c1bbe53fb1e62b94c0742bfd79ff2b7e043a99e1ff752b9",
      "entry_kind": "file",
      "file": "CLAUDE.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 10864,
      "status": "supported"
    },
    {
      "content_sha256": "28a9529c7d0bb4dc51f4bf5c116a3d16ef247a052f7591466768ddf563fd1cf5",
      "entry_kind": "file",
      "file": "LICENSE",
      "reader_ids": [
        "license-text"
      ],
      "size": 20138,
      "status": "partial"
    },
    {
      "content_sha256": "e0dff52ee9043087b98fb36f789f3895ee613c35d696a100f733d840b2b7ed68",
      "entry_kind": "file",
      "file": "README.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 17662,
      "status": "supported"
    },
    {
      "content_sha256": "c03583caece46b1cd2ebd221b76dea27620a6025fa62aa439412869fe5a973ff",
      "entry_kind": "file",
      "file": "docs/PLATONIC_AGENT_INFERENCE_BOUNDARY.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 5081,
      "status": "supported"
    },
    {
      "content_sha256": "244bab809559196dd5dd684028052cbb7cdfea949f9c926981816dc5bf351e12",
      "entry_kind": "file",
      "file": "docs/chapter-7.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 7350,
      "status": "supported"
    },
    {
      "content_sha256": "f099ef105dbefb96f91a3c7aa8091dbf94de2ed17dbd15c6a5d09faf3cc03ace",
      "entry_kind": "file",
      "file": "docs/icon.svg",
      "reader_ids": [
        "svg-metadata"
      ],
      "size": 1116,
      "status": "supported"
    },
    {
      "content_sha256": "1e7bddde0c9bde01d085ce09c66feabccbeff6bbed209501a04dea54b3105c09",
      "entry_kind": "file",
      "file": "docs/provenance-edcmucns-zfae.md",
      "reader_ids": [
        "markdown-frontmatter"
      ],
      "size": 4058,
      "status": "supported"
    },
    {
      "content_sha256": "634681f1e2730a282e61efba9a4725249c3a8a7beaffe1cf932cb906f20a68bf",
      "entry_kind": "file",
      "file": "docs/work-graphs/repository-plan-report.json",
      "reader_ids": [
        "json-stdlib",
        "metadata-standards"
      ],
      "size": 8368,
      "status": "supported"
    },
    {
      "content_sha256": "497ea1a790d178ec89d7ebbd8e208fd2cf5620dcbb4b4797f11e6d629d76315a",
      "entry_kind": "file",
      "file": "pyproject.toml",
      "reader_ids": [
        "toml-stdlib",
        "metadata-standards"
      ],
      "size": 358,
      "status": "supported"
    },
    {
      "content_sha256": "158ee506c0fc91c1df7e38dc7a6f6be50c10bb8036bd37092665e165ee7537ea",
      "entry_kind": "file",
      "file": "scripts/module_build_check.py",
      "reader_ids": [
        "python-ast"
      ],
      "size": 1321,
      "status": "supported"
    },
    {
      "content_sha256": "15a48b84483d0034bea2c32b84ea88fc236fe771c368420b11ef9cbacfd90e1a",
      "entry_kind": "file",
      "file": "src/zfae/__init__.py",
      "reader_ids": [
        "python-ast"
      ],
      "size": 169,
      "status": "supported"
    },
    {
      "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
      "entry_kind": "file",
      "file": "src/zfae/gonal_constructor.py",
      "reader_ids": [
        "python-ast"
      ],
      "size": 4911,
      "status": "supported"
    },
    {
      "content_sha256": "27aea43c80c5814081ca76be4ebbf754df49eeec39d070ef218bde49d972c34d",
      "entry_kind": "file",
      "file": "tests/test_gonal_constructor.py",
      "reader_ids": [
        "python-ast"
      ],
      "size": 1036,
      "status": "supported"
    },
    {
      "content_sha256": "2be2e98d2405fab3ac1abbcca9d417faf8ba0fd9b3f4da1f7a404137cd85af88",
      "entry_kind": "file",
      "file": "zfae/__init__.py",
      "reader_ids": [
        "python-ast"
      ],
      "size": 371,
      "status": "supported"
    },
    {
      "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
      "entry_kind": "file",
      "file": "zfae/vernacular_floor/__init__.py",
      "reader_ids": [
        "python-ast",
        "msdmd-ratios"
      ],
      "size": 801,
      "status": "supported"
    },
    {
      "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
      "entry_kind": "file",
      "file": "zfae/vernacular_floor/assignment.py",
      "reader_ids": [
        "python-ast",
        "msdmd-ratios"
      ],
      "size": 2670,
      "status": "supported"
    },
    {
      "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
      "entry_kind": "file",
      "file": "zfae/vernacular_floor/codebook_import.py",
      "reader_ids": [
        "python-ast",
        "msdmd-ratios"
      ],
      "size": 1744,
      "status": "supported"
    },
    {
      "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
      "entry_kind": "file",
      "file": "zfae/vernacular_floor/floor_artifact.py",
      "reader_ids": [
        "python-ast",
        "msdmd-ratios"
      ],
      "size": 1875,
      "status": "supported"
    },
    {
      "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
      "entry_kind": "file",
      "file": "zfae/vernacular_floor/manifest.py",
      "reader_ids": [
        "python-ast",
        "msdmd-ratios"
      ],
      "size": 2393,
      "status": "supported"
    },
    {
      "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
      "entry_kind": "file",
      "file": "zfae/vernacular_floor/oewn_ingest.py",
      "reader_ids": [
        "python-ast",
        "msdmd-ratios"
      ],
      "size": 1202,
      "status": "supported"
    },
    {
      "content_sha256": "8f0a81694ba7228e20348ac9839db042fa6971e951ffcca51dca592418add65f",
      "entry_kind": "file",
      "file": "zfae/vernacular_floor/tests/__init__.py",
      "reader_ids": [
        "python-ast",
        "msdmd-ratios"
      ],
      "size": 185,
      "status": "supported"
    },
    {
      "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
      "entry_kind": "file",
      "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
      "reader_ids": [
        "python-ast",
        "msdmd-ratios"
      ],
      "size": 2738,
      "status": "supported"
    },
    {
      "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
      "entry_kind": "file",
      "file": "zfae/vernacular_floor/transformation_assembly.py",
      "reader_ids": [
        "python-ast",
        "msdmd-ratios"
      ],
      "size": 2147,
      "status": "supported"
    },
    {
      "content_sha256": "hmmm",
      "entry_kind": "output",
      "file": "zfae_msdmd.ts",
      "reader_ids": [],
      "reason": "generated-collection-output",
      "status": "excluded"
    }
  ],
  "edges": [
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/pyproject.toml#subject/package/zfae",
      "kind": "depends_on:build",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-package:setuptools"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:__future__"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:pathlib"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:re"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:sys"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.gonal_constructor"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.gonal_constructor"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.gonal_constructor"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#block/CONTRACTS/gonal_constructor_normalizes_phase_cycle",
      "kind": "calls",
      "source_block": "CONTRACTS",
      "source_entry_id": "gonal_constructor_normalizes_phase_cycle",
      "source_id": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#block/CONTRACTS/gonal_constructor_normalizes_phase_cycle",
      "standing": "declared",
      "target_resolution": "external-or-unresolved",
      "to": "tests/test_gonal_constructor.py#test_default_construct_has_reduced_phase_cycle"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#block/CONTRACTS/gonal_constructor_preserves_provenance",
      "kind": "calls",
      "source_block": "CONTRACTS",
      "source_entry_id": "gonal_constructor_preserves_provenance",
      "source_id": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#block/CONTRACTS/gonal_constructor_preserves_provenance",
      "standing": "declared",
      "target_resolution": "external-or-unresolved",
      "to": "tests/test_gonal_constructor.py#test_preserves_provenance"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#block/CONTRACTS/gonal_constructor_rejects_degenerate_shapes",
      "kind": "calls",
      "source_block": "CONTRACTS",
      "source_entry_id": "gonal_constructor_rejects_degenerate_shapes",
      "source_id": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#block/CONTRACTS/gonal_constructor_rejects_degenerate_shapes",
      "standing": "declared",
      "target_resolution": "external-or-unresolved",
      "to": "tests/test_gonal_constructor.py#test_rejects_degenerate_side_counts"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#block/MODULE_BUILD/zfae_gonal_constructor",
      "kind": "owns",
      "source_block": "MODULE_BUILD",
      "source_entry_id": "zfae_gonal_constructor",
      "source_id": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#block/MODULE_BUILD/zfae_gonal_constructor",
      "standing": "declared",
      "target_resolution": "external-or-unresolved",
      "to": "Erin Patrick Spencer / Codex"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:__future__"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:dataclasses"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:fractions"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:math"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/module/tests%2Ftest_gonal_constructor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:fractions"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/module/tests%2Ftest_gonal_constructor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:pytest"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/module/tests%2Ftest_gonal_constructor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/module/tests%2Ftest_gonal_constructor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.assignment"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.assignment"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.assignment"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.assignment"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.assignment"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.floor_artifact"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.floor_artifact"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.floor_artifact"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.manifest"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.manifest"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.manifest"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.transformation_assembly"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.transformation_assembly"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.transformation_assembly"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:__future__"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:dataclasses"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:math"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:__future__"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:math"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:pathlib"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:.assignment"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:__future__"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:json"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:pathlib"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#block/MODULE_BUILD/vernacular_floor_gonol_set",
      "kind": "owns",
      "source_block": "MODULE_BUILD",
      "source_entry_id": "vernacular_floor_gonol_set",
      "source_id": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#block/MODULE_BUILD/vernacular_floor_gonol_set",
      "standing": "declared",
      "target_resolution": "external-or-unresolved",
      "to": "Erin Spencer (build agent: Codex)"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#block/MODULE_BUILD/vernacular_floor_gonol_set",
      "kind": "requires",
      "source_block": "MODULE_BUILD",
      "source_entry_id": "vernacular_floor_gonol_set",
      "source_id": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#block/MODULE_BUILD/vernacular_floor_gonol_set",
      "standing": "declared",
      "target_resolution": "external-or-unresolved",
      "to": "a0_public_gonol_codebook"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:__future__"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:dataclasses"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:__future__"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:dataclasses"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:__future__"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:inspect"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:tempfile"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:unittest"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.assignment"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.assignment"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.assignment"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.assignment"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.assignment"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.codebook_import"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.codebook_import"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.codebook_import"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.floor_artifact"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.floor_artifact"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.manifest"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.manifest"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.transformation_assembly"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.transformation_assembly"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.transformation_assembly"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:zfae.vernacular_floor.transformation_assembly"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:__future__"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:dataclasses"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    },
    {
      "from": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
      "kind": "imports",
      "standing": "syntactically-observed",
      "target_resolution": "external-or-unresolved",
      "to": "python-module:typing"
    }
  ],
  "facts": mergeMsdmdFactChunks(
  [
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A1/fact/ignore-rule/lines%3A2-2/__pycache__%2F",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": "__pycache__/",
        "value": {
          "anchored": false,
          "directory_only": true,
          "negated": false,
          "order": 1,
          "pattern": "__pycache__/"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 2,
          "start_line": 2
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A1",
        "identity": "rule:1",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A2/fact/ignore-rule/lines%3A3-3/%2A.py%5Bcod%5D",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": "*.py[cod]",
        "value": {
          "anchored": false,
          "directory_only": false,
          "negated": false,
          "order": 2,
          "pattern": "*.py[cod]"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 3,
          "start_line": 3
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A2",
        "identity": "rule:2",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A3/fact/ignore-rule/lines%3A4-4/%2A%24py.class",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": "*$py.class",
        "value": {
          "anchored": false,
          "directory_only": false,
          "negated": false,
          "order": 3,
          "pattern": "*$py.class"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A3",
        "identity": "rule:3",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A4/fact/ignore-rule/lines%3A7-7/.pytest_cache%2F",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": ".pytest_cache/",
        "value": {
          "anchored": false,
          "directory_only": true,
          "negated": false,
          "order": 4,
          "pattern": ".pytest_cache/"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A4",
        "identity": "rule:4",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A5/fact/ignore-rule/lines%3A8-8/.ruff_cache%2F",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": ".ruff_cache/",
        "value": {
          "anchored": false,
          "directory_only": true,
          "negated": false,
          "order": 5,
          "pattern": ".ruff_cache/"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A5",
        "identity": "rule:5",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A6/fact/ignore-rule/lines%3A9-9/.mypy_cache%2F",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": ".mypy_cache/",
        "value": {
          "anchored": false,
          "directory_only": true,
          "negated": false,
          "order": 6,
          "pattern": ".mypy_cache/"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 9,
          "start_line": 9
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A6",
        "identity": "rule:6",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A7/fact/ignore-rule/lines%3A12-12/.DS_Store",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": ".DS_Store",
        "value": {
          "anchored": false,
          "directory_only": false,
          "negated": false,
          "order": 7,
          "pattern": ".DS_Store"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 12,
          "start_line": 12
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A7",
        "identity": "rule:7",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A8/fact/ignore-rule/lines%3A15-15/.env",
      "convention": {
        "dialect": "gitignore",
        "namespace": "git.ignore",
        "version": "gitignore current documented grammar"
      },
      "extraction": {
        "configuration_sha256": "30d4bfb164b0a38e8bf63c67b5d8e7f8178dbae9db6e1378d8d79c4e35a0c1d6",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "gitignore-lines",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "ignore-rule",
      "native": {
        "id": ".env",
        "value": {
          "anchored": false,
          "directory_only": false,
          "negated": false,
          "order": 8,
          "pattern": ".env"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "7c10c65ed1dac5fed3beb79d2cd058732871f61c7f6d84d0fd1d8c5e024d1c90",
        "file": ".gitignore",
        "location": {
          "end_line": 15,
          "start_line": 15
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/.gitignore#subject/path-rule/rule%3A8",
        "identity": "rule:8",
        "scope": "path-rule"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/LICENSE#subject/document/LICENSE/fact/license-declaration/document",
      "convention": {
        "dialect": "license-text",
        "namespace": "license.text",
        "version": "detector v1"
      },
      "extraction": {
        "configuration_sha256": "0df88ba5528297545698e1918e76fae88a00e98aa58186fb3204604df96989b8",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "license-text",
        "reader_version": "1.0.0",
        "support": "partial"
      },
      "kind": "license-declaration",
      "native": {
        "id": null,
        "value": {
          "detection_method": "unrecognized-text",
          "expression": "hmmm",
          "legal_interpretation": "not-performed",
          "text": "source-reference"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "28a9529c7d0bb4dc51f4bf5c116a3d16ef247a052f7591466768ddf563fd1cf5",
        "file": "LICENSE",
        "location": {
          "pointer": "document"
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "derived",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/LICENSE#subject/document/LICENSE",
        "identity": "LICENSE",
        "scope": "document"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/docs/icon.svg#subject/document/docs%2Ficon.svg/fact/document-metadata/%2Fsvg",
      "convention": {
        "dialect": "xml",
        "namespace": "svg.document-metadata",
        "version": "SVG document subset v1"
      },
      "extraction": {
        "configuration_sha256": "a636d6b73590150040db1ccaaf5ce1b545664bfe42d467b39cae2cc2903dd3f2",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "svg-metadata",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "document-metadata",
      "native": {
        "id": null,
        "value": {
          "attributes": {
            "aria-label": "zfae icon",
            "height": "512",
            "role": "img",
            "viewBox": "0 0 100 100",
            "width": "512"
          },
          "description": null,
          "title": "zfae — zeta function alpha echo"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "f099ef105dbefb96f91a3c7aa8091dbf94de2ed17dbd15c6a5d09faf3cc03ace",
        "file": "docs/icon.svg",
        "location": {
          "pointer": "/svg"
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/docs/icon.svg#subject/document/docs%2Ficon.svg",
        "identity": "docs/icon.svg",
        "scope": "document"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/docs/work-graphs/repository-plan-report.json#subject/document/docs%2Fwork-graphs%2Frepository-plan-report.json/fact/structured-document/lines%3A%3F-%3F",
      "convention": {
        "dialect": "json",
        "namespace": "json.document",
        "version": "RFC 8259"
      },
      "extraction": {
        "configuration_sha256": "894d1c62fa05bbff60211e5b2d50e7557433c32ad26c40b55e701ddd904cdcaa",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "json-stdlib",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "structured-document",
      "native": {
        "id": null,
        "value": {
          "active_frontier": [
            "convert the persistent-homology prediction into a reproducible preregistered experiment with clear positive and negative controls",
            "resolve the exact sentinel partition, Phi role, and heartbeat clock semantics before encoding them as runtime facts",
            "keep the conceptual ZFAE specification synchronized with the a0 runtime without moving executable engine authority back into this repository",
            "finish the vernacular-floor membership and source-ingestion rules only when evidence can support them without guessed defaults",
            "separate speculative structural parallels from claims that have actually been tested"
          ],
          "authority": {
            "does_not_own": [
              "the executable ZFAE runtime implementation hosted by a0",
              "PTCNA tensor construction, training, or canonical layer semantics",
              "PCEA/Guardian privacy primitive semantics",
              "EDCM measurement validity or empirical authority",
              "UCNS mathematical representation canon",
              "skill-lib organization-wide build and cross-repository workflow doctrine"
            ],
            "non_transfer": [
              "documented ZFAE theory claims are not established theorems or empirical results",
              "runtime behavior in a0 does not automatically validate the conceptual consciousness claims",
              "PTCNA or PCEA implementation success does not establish ZFAE empirical validity",
              "the vernacular-floor scaffold receives no theorem, proof, or empirical status from UCNS or ZFAE theory",
              "cross-repository interoperability is not continuity of authority"
            ],
            "owns": [
              "conceptual and specification authority for ZFAE as the inference-event architecture of a0",
              "ZFAE theory claims, falsifiable hypotheses, architecture write-ups, and unresolved conceptual boundaries",
              "the experimental English base-vernacular gonol-floor scaffold located in this repository",
              "ZFAE-side declarations of what belongs in the conceptual repository versus the a0 runtime"
            ]
          },
          "blocked": [
            "empirical claims about coherence-prime stabilization are blocked on an executed, independently reviewable experiment",
            "vernacular-floor completion is blocked on an evidence-backed word-membership rule and OEWN ingestion contract"
          ],
          "contract": {
            "blob_sha": "9b347b2dff7692054b571602f30ee6d00c2e7265",
            "path": "interdependent-work-graph/repository-plan-report.schema.json",
            "repository": "The-Interdependency/skill-lib",
            "version": "1.0.0"
          },
          "cross_repository_relations": [
            {
              "authority_transfer": false,
              "relation": "hosts the executable ZFAE runtime and persistent agent integration",
              "repository": "The-Interdependency/a0"
            },
            {
              "authority_transfer": false,
              "relation": "producer of the neural/circle/seed/core tensor structures over which ZFAE inference is specified",
              "repository": "The-Interdependency/ptcna"
            },
            {
              "authority_transfer": false,
              "relation": "orthogonal Guardian privacy primitive provider for ZFAE inference-state boundaries",
              "repository": "The-Interdependency/pcea"
            },
            {
              "authority_transfer": false,
              "relation": "module-build, evidence, and cross-repository coordination doctrine",
              "repository": "The-Interdependency/skill-lib"
            }
          ],
          "delivered": [
            {
              "boundary": "conceptual specification is distinct from executable runtime and empirical confirmation",
              "status": "documented theory/specification surface",
              "surface": "ZFAE conceptual architecture"
            },
            {
              "boundary": "inference-engine implementation belongs in a0 rather than this repository",
              "status": "explicitly documented",
              "surface": "a0/ZFAE runtime ownership boundary"
            },
            {
              "boundary": "the proposed pattern is not an established empirical result or theorem",
              "status": "falsifiable theory proposal",
              "surface": "coherence-primes hypothesis and persistent-homology prediction"
            },
            {
              "boundary": "membership rule and OEWN fetch deliberately remain unimplemented rather than guessed",
              "status": "runnable experimental scaffold with contract tests",
              "surface": "English base-vernacular gonol-floor scaffold"
            },
            {
              "boundary": "ZFAE does not build or train the producer tensors and does not absorb their authority",
              "status": "documented as PTCNA producer -> ZFAE inference -> a0 runtime with PCEA orthogonal privacy",
              "surface": "prime-tensor stack boundary"
            }
          ],
          "hmmm": [
            "exact 9-sentinel partition",
            "Phi's specific functional role beyond naming",
            "faith/hope/love mapping to EDCM metrics or sentinels",
            "heartbeat clock topology and phase-lock behavior",
            "provider-wrapper role if ZFAE is the inference engine",
            "remaining conceptual specification updates identified in the repo",
            "paper authorship, venue, and publication timing",
            "independent sequence-database status and literature comparison for the coherence-prime family",
            "formal relation, if any, between ZFAE naming and the Riemann zeta function",
            "whether 53 is a substrate dimension, stabilization threshold, or one member of a larger experimentally observable ladder"
          ],
          "machine_entrypoints": {
            "agent_context": "CLAUDE.md",
            "module_build_check": "scripts/module_build_check.py",
            "repo_report": "docs/work-graphs/repository-plan-report.json",
            "system_overview": "README.md",
            "vernacular_floor": "zfae/vernacular_floor/"
          },
          "next_actions": [
            {
              "action": "freeze a persistence-homology experiment specification for the coherence-prime prediction with preregistered hypotheses, dimensions, controls, datasets, and stopping rules",
              "dependency": "test datasets and evaluation custody must be selected without tuning on outcomes",
              "owner": "The-Interdependency/zfae"
            },
            {
              "action": "reconcile the conceptual specification with current a0 runtime naming and composition while preserving repo authority boundaries",
              "dependency": "current a0 runtime and PTCNA producer identities",
              "owner": "The-Interdependency/zfae + The-Interdependency/a0"
            },
            {
              "action": "resolve or explicitly retain the sentinel, Phi, heartbeat, and provider-role hmmm before runtime implementation claims depend on them",
              "dependency": "maintainer decision or experimental evidence",
              "owner": "The-Interdependency/zfae"
            }
          ],
          "portfolio_role": {
            "downstream_contract": "a0 may implement the ZFAE runtime contract while preserving the distinction between conceptual claims, executable behavior, and empirical validation.",
            "reports_to": {
              "relation": "repo-owned conceptual-plan, hypothesis-status, and runtime-boundary input; no authority transfer",
              "repository": "The-Interdependency/skill-lib",
              "skill": "interdependent-work-graph"
            },
            "summary": "Serve as the conceptual/specification home for the a0(ZFAE) inference event and its falsifiable theory program while keeping executable runtime work in a0 and tensor/privacy primitives in their producer repositories.",
            "upstream_contract": "ZFAE consumes the declared PTCNA structural stack and PCEA privacy boundary as separate producer authorities and treats empirical evaluation as external evidence."
          },
          "repository": "The-Interdependency/zfae",
          "schema": "the-interdependency.repository-plan-report",
          "source": {
            "branch": "main",
            "commit": "8f321c660d2a550f4cabbaf2de58e4363ed6c181",
            "generated_at": "2026-08-07",
            "note": "This report describes the cited ZFAE main commit. The report commit is coordination metadata. ZFAE theory claims remain claims under development, not established scientific results or transferred proof."
          },
          "status": {
            "code_exception": "zfae/vernacular_floor is an experimental runnable scaffold; the inference engine itself is not built here",
            "current_claim": "ZFAE is the conceptual home of an emergent inference-event architecture implemented at runtime in a0; the coherence-prime and consciousness claims are theories under development with proposed falsifiable tests, not established results.",
            "runtime_location": "The-Interdependency/a0",
            "state": "active conceptual specification and falsifiability research"
          },
          "version": "1.0.0"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "634681f1e2730a282e61efba9a4725249c3a8a7beaffe1cf932cb906f20a68bf",
        "file": "docs/work-graphs/repository-plan-report.json",
        "location": {
          "pointer": ""
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/docs/work-graphs/repository-plan-report.json#subject/document/docs%2Fwork-graphs%2Frepository-plan-report.json",
        "identity": "docs/work-graphs/repository-plan-report.json",
        "scope": "document"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/pyproject.toml#subject/document/pyproject.toml/fact/structured-document/lines%3A%3F-%3F",
      "convention": {
        "dialect": "toml",
        "namespace": "python.pyproject",
        "version": "TOML 1.0.0"
      },
      "extraction": {
        "configuration_sha256": "f539a6c2f1bba5a6d34561c54b0a6cebdf0356f6330b337c57a62cd95ddd0793",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "toml-stdlib",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "structured-document",
      "native": {
        "id": null,
        "value": {
          "build-system": {
            "build-backend": "setuptools.build_meta",
            "requires": [
              "setuptools>=68"
            ]
          },
          "project": {
            "description": "Zeta Function Alpha Echo conceptual and reference utilities",
            "license": {
              "text": "CC-BY-SA-4.0"
            },
            "name": "zfae",
            "readme": "README.md",
            "requires-python": ">=3.11",
            "version": "0.1.0"
          },
          "tool": {
            "pytest": {
              "ini_options": {
                "pythonpath": [
                  "src"
                ],
                "testpaths": [
                  "tests"
                ]
              }
            }
          }
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "497ea1a790d178ec89d7ebbd8e208fd2cf5620dcbb4b4797f11e6d629d76315a",
        "file": "pyproject.toml",
        "location": {
          "pointer": ""
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/pyproject.toml#subject/document/pyproject.toml",
        "identity": "pyproject.toml",
        "scope": "document"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/pyproject.toml#subject/package/zfae/fact/dependency/%2Fbuild-system%2Frequires%2F0/setuptools",
      "convention": {
        "dialect": "toml",
        "namespace": "python.pyproject",
        "version": "TOML 1.0.0"
      },
      "extraction": {
        "configuration_sha256": "f539a6c2f1bba5a6d34561c54b0a6cebdf0356f6330b337c57a62cd95ddd0793",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "toml-stdlib",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "setuptools",
        "value": {
          "class": "build",
          "name": "setuptools",
          "requirement": "setuptools>=68"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "marker retained in requirement",
        "mapping_version": "pyproject-dependencies@1",
        "relation": "depends_on"
      },
      "source": {
        "content_sha256": "497ea1a790d178ec89d7ebbd8e208fd2cf5620dcbb4b4797f11e6d629d76315a",
        "file": "pyproject.toml",
        "location": {
          "pointer": "/build-system/requires/0"
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/pyproject.toml#subject/package/zfae",
        "identity": "zfae",
        "scope": "package"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:scripts/module_build_check.py::<module>",
          "metadata_kind": "shebang",
          "text": "!/usr/bin/env python3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "158ee506c0fc91c1df7e38dc7a6f6be50c10bb8036bd37092665e165ee7537ea",
        "file": "scripts/module_build_check.py",
        "location": {
          "end_line": 1,
          "span": {
            "end": {
              "byte": 22,
              "column": 22,
              "line": 1
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py",
        "identity": "scripts/module_build_check.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:scripts/module_build_check.py::<module>",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Minimal MODULE_BUILD validator for the repository.",
          "text": "Minimal MODULE_BUILD validator for the repository."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "158ee506c0fc91c1df7e38dc7a6f6be50c10bb8036bd37092665e165ee7537ea",
        "file": "scripts/module_build_check.py",
        "location": {
          "end_line": 2,
          "span": {
            "end": {
              "byte": 79,
              "column": 56,
              "line": 2
            },
            "start": {
              "byte": 23,
              "column": 0,
              "line": 2
            }
          },
          "start_line": 2
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py",
        "identity": "scripts/module_build_check.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "__future__:annotations:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "__future__",
          "name": "annotations"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "158ee506c0fc91c1df7e38dc7a6f6be50c10bb8036bd37092665e165ee7537ea",
        "file": "scripts/module_build_check.py",
        "location": {
          "end_line": 3,
          "start_line": 3
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py",
        "identity": "scripts/module_build_check.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "re:re:1",
        "value": {
          "alias": null,
          "kind": "import",
          "level": 0,
          "module": "re",
          "name": "re"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "158ee506c0fc91c1df7e38dc7a6f6be50c10bb8036bd37092665e165ee7537ea",
        "file": "scripts/module_build_check.py",
        "location": {
          "end_line": 5,
          "start_line": 5
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py",
        "identity": "scripts/module_build_check.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "sys:sys:2",
        "value": {
          "alias": null,
          "kind": "import",
          "level": 0,
          "module": "sys",
          "name": "sys"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "158ee506c0fc91c1df7e38dc7a6f6be50c10bb8036bd37092665e165ee7537ea",
        "file": "scripts/module_build_check.py",
        "location": {
          "end_line": 6,
          "start_line": 6
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py",
        "identity": "scripts/module_build_check.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py/fact/import/3",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "pathlib:Path:3",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "pathlib",
          "name": "Path"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "158ee506c0fc91c1df7e38dc7a6f6be50c10bb8036bd37092665e165ee7537ea",
        "file": "scripts/module_build_check.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/module/scripts%2Fmodule_build_check.py",
        "identity": "scripts/module_build_check.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/symbol/main/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "main",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:scripts/module_build_check.py::function:main",
          "decorators": [],
          "kind": "function",
          "name": "main",
          "parent_identity": null,
          "qualified_name": "main",
          "signature": "def main() -> int"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "158ee506c0fc91c1df7e38dc7a6f6be50c10bb8036bd37092665e165ee7537ea",
        "file": "scripts/module_build_check.py",
        "location": {
          "end_line": 33,
          "span": {
            "end": {
              "byte": 1262,
              "column": 12,
              "line": 33
            },
            "start": {
              "byte": 544,
              "column": 0,
              "line": 14
            }
          },
          "start_line": 14
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/scripts/module_build_check.py#subject/symbol/main",
        "identity": "main",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/__init__.py::<module>",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "ZFAE reference utilities.",
          "text": "ZFAE reference utilities."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "15a48b84483d0034bea2c32b84ea88fc236fe771c368420b11ef9cbacfd90e1a",
        "file": "src/zfae/__init__.py",
        "location": {
          "end_line": 1,
          "span": {
            "end": {
              "byte": 31,
              "column": 31,
              "line": 1
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py",
        "identity": "src/zfae/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py/fact/exports/lines%3A5-5/__all__",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "exports",
      "native": {
        "id": "__all__",
        "value": {
          "declared_names": [
            "GonalConstruct",
            "GonalNode",
            "construct_gonal"
          ],
          "names": [
            "GonalConstruct",
            "GonalNode",
            "construct_gonal"
          ],
          "resolution": "static"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "15a48b84483d0034bea2c32b84ea88fc236fe771c368420b11ef9cbacfd90e1a",
        "file": "src/zfae/__init__.py",
        "location": {
          "end_line": 5,
          "start_line": 5
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py",
        "identity": "src/zfae/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".gonal_constructor:GonalConstruct:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".gonal_constructor",
          "name": "GonalConstruct"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "15a48b84483d0034bea2c32b84ea88fc236fe771c368420b11ef9cbacfd90e1a",
        "file": "src/zfae/__init__.py",
        "location": {
          "end_line": 3,
          "start_line": 3
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py",
        "identity": "src/zfae/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".gonal_constructor:GonalNode:1",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".gonal_constructor",
          "name": "GonalNode"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "15a48b84483d0034bea2c32b84ea88fc236fe771c368420b11ef9cbacfd90e1a",
        "file": "src/zfae/__init__.py",
        "location": {
          "end_line": 3,
          "start_line": 3
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py",
        "identity": "src/zfae/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".gonal_constructor:construct_gonal:2",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".gonal_constructor",
          "name": "construct_gonal"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "15a48b84483d0034bea2c32b84ea88fc236fe771c368420b11ef9cbacfd90e1a",
        "file": "src/zfae/__init__.py",
        "location": {
          "end_line": 3,
          "start_line": 3
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/__init__.py#subject/module/src%2Fzfae%2F__init__.py",
        "identity": "src/zfae/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::<module>",
          "metadata_kind": "msdmd_block",
          "text": "=== MODULE_BUILD ===\nid: zfae_gonal_constructor\n  module_name: gonal_constructor\n  module_kind: instrument\n  summary: constructs immutable n-gonal ZFAE carrier records with normalized phase positions and provenance.\n  owner: Erin Patrick Spencer / Codex\n  public_surface: construct_gonal, GonalConstruct, GonalNode\n  internal_surface: _validate_sides, _normalize_labels, _phase_for_index\n  auth_boundary: none\n  storage_boundary: none\n  network_boundary: none\n  user_data_boundary: none\n  admin_only: false\n  tests: tests/test_gonal_constructor.py\n  rollout: importable reference utility\n  rollback: remove src/zfae/gonal_constructor.py export and tests\n  unresolved: runtime a0 integration remains out of scope for this repo\n=== END MODULE_BUILD ==="
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 33,
          "span": {
            "end": {
              "byte": 1273,
              "column": 26,
              "line": 33
            },
            "start": {
              "byte": 487,
              "column": 0,
              "line": 16
            }
          },
          "start_line": 16
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
        "identity": "src/zfae/gonal_constructor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py/fact/comment/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::<module>",
          "metadata_kind": "msdmd_block",
          "text": "=== CONTRACTS ===\nid: gonal_constructor_rejects_degenerate_shapes\n  given: side counts below three\n  then: construction raises ValueError before producing a carrier\n  class: correctness\n  call: tests/test_gonal_constructor.py#test_rejects_degenerate_side_counts\nid: gonal_constructor_normalizes_phase_cycle\n  given: five sides with default labels\n  then: phases are reduced fractions covering one full cycle without duplicating 1/1\n  class: correctness\n  call: tests/test_gonal_constructor.py#test_default_construct_has_reduced_phase_cycle\nid: gonal_constructor_preserves_provenance\n  given: an explicit provenance string\n  then: the immutable construct records that provenance verbatim\n  class: provenance\n  call: tests/test_gonal_constructor.py#test_preserves_provenance\n=== END CONTRACTS ==="
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 51,
          "span": {
            "end": {
              "byte": 2103,
              "column": 23,
              "line": 51
            },
            "start": {
              "byte": 1275,
              "column": 0,
              "line": 35
            }
          },
          "start_line": 35
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
        "identity": "src/zfae/gonal_constructor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::<module>",
          "description": "The constructor creates an immutable, provenance-bearing n-gonal carrier that\nZFAE can use as a reference geometry for inference/specification work. It is\nintentionally small and dependency-free because this repository is the\nconceptual/specification home; runtime integration belongs in ``a0``.",
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Native ZFAE gonal constructor.",
          "text": "Native ZFAE gonal constructor.\n\nThe constructor creates an immutable, provenance-bearing n-gonal carrier that\nZFAE can use as a reference geometry for inference/specification work. It is\nintentionally small and dependency-free because this repository is the\nconceptual/specification home; runtime integration belongs in ``a0``.\n"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 7,
          "span": {
            "end": {
              "byte": 334,
              "column": 3,
              "line": 7
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
        "identity": "src/zfae/gonal_constructor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "__future__:annotations:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "__future__",
          "name": "annotations"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 9,
          "start_line": 9
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
        "identity": "src/zfae/gonal_constructor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "dataclasses:dataclass:1",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "dataclasses",
          "name": "dataclass"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 11,
          "start_line": 11
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
        "identity": "src/zfae/gonal_constructor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "fractions:Fraction:2",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "fractions",
          "name": "Fraction"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 12,
          "start_line": 12
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
        "identity": "src/zfae/gonal_constructor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py/fact/import/3",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "math:gcd:3",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "math",
          "name": "gcd"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 13,
          "start_line": 13
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
        "identity": "src/zfae/gonal_constructor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py/fact/import/4",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Sequence:4",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Sequence"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 14,
          "start_line": 14
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/module/src%2Fzfae%2Fgonal_constructor.py",
        "identity": "src/zfae/gonal_constructor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct.labels/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "GonalConstruct.labels",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::method:GonalConstruct.labels",
          "decorators": [],
          "kind": "method",
          "name": "labels",
          "parent_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::class:GonalConstruct",
          "qualified_name": "GonalConstruct.labels",
          "signature": "def labels(self) -> tuple[str, ...]"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 85,
          "span": {
            "end": {
              "byte": 2969,
              "column": 55,
              "line": 85
            },
            "start": {
              "byte": 2823,
              "column": 4,
              "line": 82
            }
          },
          "start_line": 82
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct.labels",
        "identity": "GonalConstruct.labels",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct.labels/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::method:GonalConstruct.labels",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Return node labels in traversal order.",
          "text": "Return node labels in traversal order."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 83,
          "span": {
            "end": {
              "byte": 2912,
              "column": 52,
              "line": 83
            },
            "start": {
              "byte": 2868,
              "column": 8,
              "line": 83
            }
          },
          "start_line": 83
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct.labels",
        "identity": "GonalConstruct.labels",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct.phases/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "GonalConstruct.phases",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::method:GonalConstruct.phases",
          "decorators": [],
          "kind": "method",
          "name": "phases",
          "parent_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::class:GonalConstruct",
          "qualified_name": "GonalConstruct.phases",
          "signature": "def phases(self) -> tuple[Fraction, ...]"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 90,
          "span": {
            "end": {
              "byte": 3141,
              "column": 55,
              "line": 90
            },
            "start": {
              "byte": 2975,
              "column": 4,
              "line": 87
            }
          },
          "start_line": 87
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct.phases",
        "identity": "GonalConstruct.phases",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct.phases/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::method:GonalConstruct.phases",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Return normalized phase positions in traversal order.",
          "text": "Return normalized phase positions in traversal order."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 88,
          "span": {
            "end": {
              "byte": 3084,
              "column": 67,
              "line": 88
            },
            "start": {
              "byte": 3025,
              "column": 8,
              "line": 88
            }
          },
          "start_line": 88
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct.phases",
        "identity": "GonalConstruct.phases",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct.winding_step/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "GonalConstruct.winding_step",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::method:GonalConstruct.winding_step",
          "decorators": [
            "property"
          ],
          "kind": "method",
          "name": "winding_step",
          "parent_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::class:GonalConstruct",
          "qualified_name": "GonalConstruct.winding_step",
          "signature": "def winding_step(self) -> int"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 80,
          "span": {
            "end": {
              "byte": 2817,
              "column": 16,
              "line": 80
            },
            "start": {
              "byte": 2560,
              "column": 4,
              "line": 73
            }
          },
          "start_line": 73
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct.winding_step",
        "identity": "GonalConstruct.winding_step",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct.winding_step/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::method:GonalConstruct.winding_step",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Smallest positive step coprime to ``sides`` for a single traversal.",
          "text": "Smallest positive step coprime to ``sides`` for a single traversal."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 75,
          "span": {
            "end": {
              "byte": 2686,
              "column": 81,
              "line": 75
            },
            "start": {
              "byte": 2613,
              "column": 8,
              "line": 75
            }
          },
          "start_line": 75
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct.winding_step",
        "identity": "GonalConstruct.winding_step",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "class-declaration",
      "native": {
        "id": "GonalConstruct",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::class:GonalConstruct",
          "decorators": [
            "dataclass(frozen=True, slots=True)"
          ],
          "kind": "class",
          "name": "GonalConstruct",
          "parent_identity": null,
          "qualified_name": "GonalConstruct",
          "signature": "class GonalConstruct"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 90,
          "span": {
            "end": {
              "byte": 3141,
              "column": 55,
              "line": 90
            },
            "start": {
              "byte": 2333,
              "column": 0,
              "line": 65
            }
          },
          "start_line": 65
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct",
        "identity": "GonalConstruct",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::class:GonalConstruct",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Immutable n-gonal carrier description for ZFAE inference specs.",
          "text": "Immutable n-gonal carrier description for ZFAE inference specs."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 67,
          "span": {
            "end": {
              "byte": 2464,
              "column": 73,
              "line": 67
            },
            "start": {
              "byte": 2395,
              "column": 4,
              "line": 67
            }
          },
          "start_line": 67
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalConstruct",
        "identity": "GonalConstruct",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalNode/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "class-declaration",
      "native": {
        "id": "GonalNode",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::class:GonalNode",
          "decorators": [
            "dataclass(frozen=True, slots=True)"
          ],
          "kind": "class",
          "name": "GonalNode",
          "parent_identity": null,
          "qualified_name": "GonalNode",
          "signature": "class GonalNode"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 62,
          "span": {
            "end": {
              "byte": 2330,
              "column": 19,
              "line": 62
            },
            "start": {
              "byte": 2153,
              "column": 0,
              "line": 56
            }
          },
          "start_line": 56
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalNode",
        "identity": "GonalNode",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalNode/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::class:GonalNode",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "A single normalized vertex/position in an n-gonal ZFAE carrier.",
          "text": "A single normalized vertex/position in an n-gonal ZFAE carrier."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 58,
          "span": {
            "end": {
              "byte": 2279,
              "column": 73,
              "line": 58
            },
            "start": {
              "byte": 2210,
              "column": 4,
              "line": 58
            }
          },
          "start_line": 58
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/GonalNode",
        "identity": "GonalNode",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/_normalize_labels/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "_normalize_labels",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::function:_normalize_labels",
          "decorators": [],
          "kind": "function",
          "name": "_normalize_labels",
          "parent_identity": null,
          "qualified_name": "_normalize_labels",
          "signature": "def _normalize_labels(sides: int, labels: Sequence[str] | None) -> tuple[str, ...]"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 138,
          "span": {
            "end": {
              "byte": 4816,
              "column": 21,
              "line": 138
            },
            "start": {
              "byte": 4378,
              "column": 0,
              "line": 129
            }
          },
          "start_line": 129
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/_normalize_labels",
        "identity": "_normalize_labels",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/_phase_for_index/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "_phase_for_index",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::function:_phase_for_index",
          "decorators": [],
          "kind": "function",
          "name": "_phase_for_index",
          "parent_identity": null,
          "qualified_name": "_phase_for_index",
          "signature": "def _phase_for_index(index: int, sides: int) -> Fraction"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 142,
          "span": {
            "end": {
              "byte": 4910,
              "column": 33,
              "line": 142
            },
            "start": {
              "byte": 4819,
              "column": 0,
              "line": 141
            }
          },
          "start_line": 141
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/_phase_for_index",
        "identity": "_phase_for_index",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/_validate_sides/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "_validate_sides",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::function:_validate_sides",
          "decorators": [],
          "kind": "function",
          "name": "_validate_sides",
          "parent_identity": null,
          "qualified_name": "_validate_sides",
          "signature": "def _validate_sides(sides: int) -> int"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 126,
          "span": {
            "end": {
              "byte": 4375,
              "column": 16,
              "line": 126
            },
            "start": {
              "byte": 4140,
              "column": 0,
              "line": 121
            }
          },
          "start_line": 121
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/_validate_sides",
        "identity": "_validate_sides",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/construct_gonal/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "construct_gonal",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::function:construct_gonal",
          "decorators": [],
          "kind": "function",
          "name": "construct_gonal",
          "parent_identity": null,
          "qualified_name": "construct_gonal",
          "signature": "def construct_gonal(sides: int, labels: Sequence[str] | None=None, *, provenance: str=DEFAULT_PROVENANCE) -> GonalConstruct"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 118,
          "span": {
            "end": {
              "byte": 4137,
              "column": 79,
              "line": 118
            },
            "start": {
              "byte": 3144,
              "column": 0,
              "line": 93
            }
          },
          "start_line": 93
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/construct_gonal",
        "identity": "construct_gonal",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/construct_gonal/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:src/zfae/gonal_constructor.py::function:construct_gonal",
          "description": null,
          "fields": [
            {
              "arg_name": "sides",
              "args": [
                "param",
                "sides"
              ],
              "default": null,
              "description": "Number of sides/vertices. Must be at least three.",
              "is_optional": null,
              "type_name": null
            },
            {
              "arg_name": "labels",
              "args": [
                "param",
                "labels"
              ],
              "default": null,
              "description": "Optional labels for each node. When omitted, labels are\ngenerated as ``g0`` through ``g{sides - 1}``.",
              "is_optional": null,
              "type_name": null
            },
            {
              "arg_name": "provenance",
              "args": [
                "param",
                "provenance"
              ],
              "default": null,
              "description": "Human-readable source for the constructed carrier.",
              "is_optional": null,
              "type_name": null
            },
            {
              "args": [
                "returns"
              ],
              "description": "A :class:`GonalConstruct` with reduced fractional phase positions in\n``[0, 1)`` and no runtime dependency on external repos.",
              "is_generator": false,
              "return_name": null,
              "type_name": null
            }
          ],
          "format": "google",
          "metadata_kind": "documentation",
          "summary": "Construct an immutable n-gonal carrier record.",
          "text": "Construct an immutable n-gonal carrier record.\n\n    Args:\n        sides: Number of sides/vertices. Must be at least three.\n        labels: Optional labels for each node. When omitted, labels are\n            generated as ``g0`` through ``g{sides - 1}``.\n        provenance: Human-readable source for the constructed carrier.\n\n    Returns:\n        A :class:`GonalConstruct` with reduced fractional phase positions in\n        ``[0, 1)`` and no runtime dependency on external repos.\n    "
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e7f177f03b54948b4089f0e1bcd055b7a1f0a9c331be752a2da15b1ab5d9907",
        "file": "src/zfae/gonal_constructor.py",
        "location": {
          "end_line": 110,
          "span": {
            "end": {
              "byte": 3785,
              "column": 7,
              "line": 110
            },
            "start": {
              "byte": 3296,
              "column": 4,
              "line": 99
            }
          },
          "start_line": 99
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/src/zfae/gonal_constructor.py#subject/symbol/construct_gonal",
        "identity": "construct_gonal",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/module/tests%2Ftest_gonal_constructor.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "fractions:Fraction:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "fractions",
          "name": "Fraction"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "27aea43c80c5814081ca76be4ebbf754df49eeec39d070ef218bde49d972c34d",
        "file": "tests/test_gonal_constructor.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/module/tests%2Ftest_gonal_constructor.py",
        "identity": "tests/test_gonal_constructor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/module/tests%2Ftest_gonal_constructor.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "pytest:pytest:1",
        "value": {
          "alias": null,
          "kind": "import",
          "level": 0,
          "module": "pytest",
          "name": "pytest"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "27aea43c80c5814081ca76be4ebbf754df49eeec39d070ef218bde49d972c34d",
        "file": "tests/test_gonal_constructor.py",
        "location": {
          "end_line": 3,
          "start_line": 3
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/module/tests%2Ftest_gonal_constructor.py",
        "identity": "tests/test_gonal_constructor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/module/tests%2Ftest_gonal_constructor.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae:GonalConstruct:2",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae",
          "name": "GonalConstruct"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "27aea43c80c5814081ca76be4ebbf754df49eeec39d070ef218bde49d972c34d",
        "file": "tests/test_gonal_constructor.py",
        "location": {
          "end_line": 5,
          "start_line": 5
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/module/tests%2Ftest_gonal_constructor.py",
        "identity": "tests/test_gonal_constructor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/module/tests%2Ftest_gonal_constructor.py/fact/import/3",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae:construct_gonal:3",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae",
          "name": "construct_gonal"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "27aea43c80c5814081ca76be4ebbf754df49eeec39d070ef218bde49d972c34d",
        "file": "tests/test_gonal_constructor.py",
        "location": {
          "end_line": 5,
          "start_line": 5
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/module/tests%2Ftest_gonal_constructor.py",
        "identity": "tests/test_gonal_constructor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/symbol/test_default_construct_has_reduced_phase_cycle/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "test_default_construct_has_reduced_phase_cycle",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:tests/test_gonal_constructor.py::function:test_default_construct_has_reduced_phase_cycle",
          "decorators": [],
          "kind": "function",
          "name": "test_default_construct_has_reduced_phase_cycle",
          "parent_identity": null,
          "qualified_name": "test_default_construct_has_reduced_phase_cycle",
          "signature": "def test_default_construct_has_reduced_phase_cycle() -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "27aea43c80c5814081ca76be4ebbf754df49eeec39d070ef218bde49d972c34d",
        "file": "tests/test_gonal_constructor.py",
        "location": {
          "end_line": 25,
          "span": {
            "end": {
              "byte": 631,
              "column": 5,
              "line": 25
            },
            "start": {
              "byte": 238,
              "column": 0,
              "line": 13
            }
          },
          "start_line": 13
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/symbol/test_default_construct_has_reduced_phase_cycle",
        "identity": "test_default_construct_has_reduced_phase_cycle",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/symbol/test_preserves_provenance/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "test_preserves_provenance",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:tests/test_gonal_constructor.py::function:test_preserves_provenance",
          "decorators": [],
          "kind": "function",
          "name": "test_preserves_provenance",
          "parent_identity": null,
          "qualified_name": "test_preserves_provenance",
          "signature": "def test_preserves_provenance() -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "27aea43c80c5814081ca76be4ebbf754df49eeec39d070ef218bde49d972c34d",
        "file": "tests/test_gonal_constructor.py",
        "location": {
          "end_line": 32,
          "span": {
            "end": {
              "byte": 874,
              "column": 54,
              "line": 32
            },
            "start": {
              "byte": 634,
              "column": 0,
              "line": 28
            }
          },
          "start_line": 28
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/symbol/test_preserves_provenance",
        "identity": "test_preserves_provenance",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/symbol/test_rejects_degenerate_side_counts/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "test_rejects_degenerate_side_counts",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:tests/test_gonal_constructor.py::function:test_rejects_degenerate_side_counts",
          "decorators": [],
          "kind": "function",
          "name": "test_rejects_degenerate_side_counts",
          "parent_identity": null,
          "qualified_name": "test_rejects_degenerate_side_counts",
          "signature": "def test_rejects_degenerate_side_counts() -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "27aea43c80c5814081ca76be4ebbf754df49eeec39d070ef218bde49d972c34d",
        "file": "tests/test_gonal_constructor.py",
        "location": {
          "end_line": 10,
          "span": {
            "end": {
              "byte": 235,
              "column": 26,
              "line": 10
            },
            "start": {
              "byte": 98,
              "column": 0,
              "line": 8
            }
          },
          "start_line": 8
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/symbol/test_rejects_degenerate_side_counts",
        "identity": "test_rejects_degenerate_side_counts",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/symbol/test_rejects_label_count_mismatch/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "test_rejects_label_count_mismatch",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:tests/test_gonal_constructor.py::function:test_rejects_label_count_mismatch",
          "decorators": [],
          "kind": "function",
          "name": "test_rejects_label_count_mismatch",
          "parent_identity": null,
          "qualified_name": "test_rejects_label_count_mismatch",
          "signature": "def test_rejects_label_count_mismatch() -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "27aea43c80c5814081ca76be4ebbf754df49eeec39d070ef218bde49d972c34d",
        "file": "tests/test_gonal_constructor.py",
        "location": {
          "end_line": 37,
          "span": {
            "end": {
              "byte": 1035,
              "column": 50,
              "line": 37
            },
            "start": {
              "byte": 877,
              "column": 0,
              "line": 35
            }
          },
          "start_line": 35
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/tests/test_gonal_constructor.py#subject/symbol/test_rejects_label_count_mismatch",
        "identity": "test_rejects_label_count_mismatch",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/__init__.py#subject/module/zfae%2F__init__.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/__init__.py::<module>",
          "description": "Historically this repo was conceptual-only. The ``vernacular_floor`` gonol\nscaffold is the first runnable code to land here after being relocated from\n``ucns`` (where it was mistakenly built). It is an experimental scaffold, not a\nproof-backed engine — see ``vernacular_floor`` module docstrings and the\nper-file ``hmmm`` markers.",
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "ZFAE repository package root.",
          "text": "ZFAE repository package root.\n\nHistorically this repo was conceptual-only. The ``vernacular_floor`` gonol\nscaffold is the first runnable code to land here after being relocated from\n``ucns`` (where it was mistakenly built). It is an experimental scaffold, not a\nproof-backed engine — see ``vernacular_floor`` module docstrings and the\nper-file ``hmmm`` markers.\n"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "2be2e98d2405fab3ac1abbcca9d417faf8ba0fd9b3f4da1f7a404137cd85af88",
        "file": "zfae/__init__.py",
        "location": {
          "end_line": 8,
          "span": {
            "end": {
              "byte": 370,
              "column": 3,
              "line": 8
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/__init__.py#subject/module/zfae%2F__init__.py",
        "identity": "zfae/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/file/calls_definitions%5B1%5D/fact/composition-ratio/lines%3A1-1/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 1,
          "ratio": "calls_definitions",
          "value": "0:0"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/file/calls_definitions%5B1%5D",
        "identity": "calls_definitions[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/file/calls_definitions%5B2%5D/fact/composition-ratio/lines%3A25-25/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 2,
          "ratio": "calls_definitions",
          "value": "0:0"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 25,
          "start_line": 25
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/file/calls_definitions%5B2%5D",
        "identity": "calls_definitions[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/file/imports_exports%5B1%5D/fact/composition-ratio/lines%3A1-1/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 1,
          "ratio": "imports_exports",
          "value": "4:1"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/file/imports_exports%5B1%5D",
        "identity": "imports_exports[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/file/imports_exports%5B2%5D/fact/composition-ratio/lines%3A25-25/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 2,
          "ratio": "imports_exports",
          "value": "4:1"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 25,
          "start_line": 25
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/file/imports_exports%5B2%5D",
        "identity": "imports_exports[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/file/loc_comments%5B1%5D/fact/composition-ratio/lines%3A1-1/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 1,
          "ratio": "loc_comments",
          "value": "20:1"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/file/loc_comments%5B1%5D",
        "identity": "loc_comments[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/file/loc_comments%5B2%5D/fact/composition-ratio/lines%3A25-25/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 2,
          "ratio": "loc_comments",
          "value": "20:1"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 25,
          "start_line": 25
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/file/loc_comments%5B2%5D",
        "identity": "loc_comments[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/__init__.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=20:1 imports_exports=4:1 calls_definitions=0:0"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 1,
          "span": {
            "end": {
              "byte": 69,
              "column": 69,
              "line": 1
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    }
  ],
  [
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/comment/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/__init__.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=20:1 imports_exports=4:1 calls_definitions=0:0"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 25,
          "span": {
            "end": {
              "byte": 800,
              "column": 69,
              "line": 25
            },
            "start": {
              "byte": 731,
              "column": 0,
              "line": 25
            }
          },
          "start_line": 25
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/__init__.py::<module>",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "English base vernacular gonol floor scaffold.",
          "text": "English base vernacular gonol floor scaffold."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 2,
          "span": {
            "end": {
              "byte": 121,
              "column": 51,
              "line": 2
            },
            "start": {
              "byte": 70,
              "column": 0,
              "line": 2
            }
          },
          "start_line": 2
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/exports/lines%3A9-24/__all__",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "exports",
      "native": {
        "id": "__all__",
        "value": {
          "declared_names": [
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
            "write_floor"
          ],
          "names": [
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
            "write_floor"
          ],
          "resolution": "static"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 24,
          "start_line": 9
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".assignment:FloorGonol:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".assignment",
          "name": "FloorGonol"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".assignment:assign_from_relations:1",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".assignment",
          "name": "assign_from_relations"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/10",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".manifest:unresolved_membership_rule:10",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".manifest",
          "name": "unresolved_membership_rule"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 6,
          "start_line": 6
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/11",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".transformation_assembly:OperatorName:11",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".transformation_assembly",
          "name": "OperatorName"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/12",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".transformation_assembly:emit:12",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".transformation_assembly",
          "name": "emit"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/13",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".transformation_assembly:recognize:13",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".transformation_assembly",
          "name": "recognize"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".assignment:compose:2",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".assignment",
          "name": "compose"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/3",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".assignment:compose_sentence:3",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".assignment",
          "name": "compose_sentence"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/4",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".assignment:origin:4",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".assignment",
          "name": "origin"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/5",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".floor_artifact:embedding_rows:5",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".floor_artifact",
          "name": "embedding_rows"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 5,
          "start_line": 5
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/6",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".floor_artifact:load_floor:6",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".floor_artifact",
          "name": "load_floor"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 5,
          "start_line": 5
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/7",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".floor_artifact:write_floor:7",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".floor_artifact",
          "name": "write_floor"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 5,
          "start_line": 5
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/8",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".manifest:FloorManifest:8",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".manifest",
          "name": "FloorManifest"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 6,
          "start_line": 6
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py/fact/import/9",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".manifest:floor_manifest:9",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".manifest",
          "name": "floor_manifest"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6b52a6f89730fdce695a73f3db868cb3ece051310f7775273500d6bd16b948d4",
        "file": "zfae/vernacular_floor/__init__.py",
        "location": {
          "end_line": 6,
          "start_line": 6
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/__init__.py#subject/module/zfae%2Fvernacular_floor%2F__init__.py",
        "identity": "zfae/vernacular_floor/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/file/calls_definitions%5B1%5D/fact/composition-ratio/lines%3A1-1/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 1,
          "ratio": "calls_definitions",
          "value": "16:8"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/file/calls_definitions%5B1%5D",
        "identity": "calls_definitions[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/file/calls_definitions%5B2%5D/fact/composition-ratio/lines%3A84-84/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 2,
          "ratio": "calls_definitions",
          "value": "16:8"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 84,
          "start_line": 84
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/file/calls_definitions%5B2%5D",
        "identity": "calls_definitions[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/file/imports_exports%5B1%5D/fact/composition-ratio/lines%3A1-1/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 1,
          "ratio": "imports_exports",
          "value": "4:6"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/file/imports_exports%5B1%5D",
        "identity": "imports_exports[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/file/imports_exports%5B2%5D/fact/composition-ratio/lines%3A84-84/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 2,
          "ratio": "imports_exports",
          "value": "4:6"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 84,
          "start_line": 84
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/file/imports_exports%5B2%5D",
        "identity": "imports_exports[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/file/loc_comments%5B1%5D/fact/composition-ratio/lines%3A1-1/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 1,
          "ratio": "loc_comments",
          "value": "45:12"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/file/loc_comments%5B1%5D",
        "identity": "loc_comments[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/file/loc_comments%5B2%5D/fact/composition-ratio/lines%3A84-84/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 2,
          "ratio": "loc_comments",
          "value": "45:12"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 84,
          "start_line": 84
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/file/loc_comments%5B2%5D",
        "identity": "loc_comments[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=45:12 imports_exports=4:6 calls_definitions=16:8"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 1,
          "span": {
            "end": {
              "byte": 71,
              "column": 71,
              "line": 1
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
        "identity": "zfae/vernacular_floor/assignment.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py/fact/comment/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=45:12 imports_exports=4:6 calls_definitions=16:8"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 84,
          "span": {
            "end": {
              "byte": 2669,
              "column": 71,
              "line": 84
            },
            "start": {
              "byte": 2598,
              "column": 0,
              "line": 84
            }
          },
          "start_line": 84
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
        "identity": "zfae/vernacular_floor/assignment.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::<module>",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Gonol assignment scaffold for relation-derived vernacular positions.",
          "text": "Gonol assignment scaffold for relation-derived vernacular positions."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 2,
          "span": {
            "end": {
              "byte": 146,
              "column": 74,
              "line": 2
            },
            "start": {
              "byte": 72,
              "column": 0,
              "line": 2
            }
          },
          "start_line": 2
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
        "identity": "zfae/vernacular_floor/assignment.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "__future__:annotations:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "__future__",
          "name": "annotations"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
        "identity": "zfae/vernacular_floor/assignment.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "math:math:1",
        "value": {
          "alias": null,
          "kind": "import",
          "level": 0,
          "module": "math",
          "name": "math"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 6,
          "start_line": 6
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
        "identity": "zfae/vernacular_floor/assignment.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "dataclasses:dataclass:2",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "dataclasses",
          "name": "dataclass"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
        "identity": "zfae/vernacular_floor/assignment.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py/fact/import/3",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Iterable:3",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Iterable"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
        "identity": "zfae/vernacular_floor/assignment.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py/fact/import/4",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Mapping:4",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Mapping"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
        "identity": "zfae/vernacular_floor/assignment.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py/fact/import/5",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Sequence:5",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Sequence"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
        "identity": "zfae/vernacular_floor/assignment.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py/fact/import/6",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Tuple:6",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Tuple"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/module/zfae%2Fvernacular_floor%2Fassignment.py",
        "identity": "zfae/vernacular_floor/assignment.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/FloorGonol.__post_init__/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "FloorGonol.__post_init__",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::method:FloorGonol.__post_init__",
          "decorators": [],
          "kind": "method",
          "name": "__post_init__",
          "parent_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::class:FloorGonol",
          "qualified_name": "FloorGonol.__post_init__",
          "signature": "def __post_init__(self) -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 26,
          "span": {
            "end": {
              "byte": 706,
              "column": 64,
              "line": 26
            },
            "start": {
              "byte": 508,
              "column": 4,
              "line": 23
            }
          },
          "start_line": 23
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/FloorGonol.__post_init__",
        "identity": "FloorGonol.__post_init__",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/FloorGonol.compose/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "FloorGonol.compose",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::method:FloorGonol.compose",
          "decorators": [],
          "kind": "method",
          "name": "compose",
          "parent_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::class:FloorGonol",
          "qualified_name": "FloorGonol.compose",
          "signature": "def compose(self, other: 'FloorGonol') -> 'FloorGonol'"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 41,
          "span": {
            "end": {
              "byte": 1191,
              "column": 9,
              "line": 41
            },
            "start": {
              "byte": 712,
              "column": 4,
              "line": 28
            }
          },
          "start_line": 28
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/FloorGonol.compose",
        "identity": "FloorGonol.compose",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/FloorGonol.compose/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::method:FloorGonol.compose",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Compose two gonols and return a gonol of the same type.",
          "text": "Compose two gonols and return a gonol of the same type."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 29,
          "span": {
            "end": {
              "byte": 837,
              "column": 69,
              "line": 29
            },
            "start": {
              "byte": 776,
              "column": 8,
              "line": 29
            }
          },
          "start_line": 29
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/FloorGonol.compose",
        "identity": "FloorGonol.compose",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/FloorGonol/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "class-declaration",
      "native": {
        "id": "FloorGonol",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::class:FloorGonol",
          "decorators": [
            "dataclass(frozen=True)"
          ],
          "kind": "class",
          "name": "FloorGonol",
          "parent_identity": null,
          "qualified_name": "FloorGonol",
          "signature": "class FloorGonol"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 41,
          "span": {
            "end": {
              "byte": 1191,
              "column": 9,
              "line": 41
            },
            "start": {
              "byte": 308,
              "column": 0,
              "line": 13
            }
          },
          "start_line": 13
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/FloorGonol",
        "identity": "FloorGonol",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/FloorGonol/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::class:FloorGonol",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "A scale-closed floor gonol on the connected R/4πZ cover.",
          "text": "A scale-closed floor gonol on the connected R/4πZ cover."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 15,
          "span": {
            "end": {
              "byte": 417,
              "column": 66,
              "line": 15
            },
            "start": {
              "byte": 354,
              "column": 4,
              "line": 15
            }
          },
          "start_line": 15
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/FloorGonol",
        "identity": "FloorGonol",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/assign_from_relations/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "assign_from_relations",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::function:assign_from_relations",
          "decorators": [],
          "kind": "function",
          "name": "assign_from_relations",
          "parent_identity": null,
          "qualified_name": "assign_from_relations",
          "signature": "def assign_from_relations(lemma: str, relation_edges: Mapping[str, Sequence[str]]) -> FloorGonol"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 67,
          "span": {
            "end": {
              "byte": 2169,
              "column": 73,
              "line": 67
            },
            "start": {
              "byte": 1507,
              "column": 0,
              "line": 56
            }
          },
          "start_line": 56
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/assign_from_relations",
        "identity": "assign_from_relations",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/assign_from_relations/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::function:assign_from_relations",
          "description": "This is a deterministic scaffold, not the final semantic law.  It keeps the\nno hand-authored word→gonol table invariant while later work replaces the\nangular objective with the pinned constraint solver.",
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Derive a placeholder angular position from relation graph shape.",
          "text": "Derive a placeholder angular position from relation graph shape.\n\n    This is a deterministic scaffold, not the final semantic law.  It keeps the\n    no hand-authored word→gonol table invariant while later work replaces the\n    angular objective with the pinned constraint solver.\n    "
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 62,
          "span": {
            "end": {
              "byte": 1902,
              "column": 7,
              "line": 62
            },
            "start": {
              "byte": 1609,
              "column": 4,
              "line": 57
            }
          },
          "start_line": 57
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/assign_from_relations",
        "identity": "assign_from_relations",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/compose/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "compose",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::function:compose",
          "decorators": [],
          "kind": "function",
          "name": "compose",
          "parent_identity": null,
          "qualified_name": "compose",
          "signature": "def compose(left: FloorGonol, right: FloorGonol) -> FloorGonol"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 53,
          "span": {
            "end": {
              "byte": 1504,
              "column": 30,
              "line": 53
            },
            "start": {
              "byte": 1366,
              "column": 0,
              "line": 50
            }
          },
          "start_line": 50
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/compose",
        "identity": "compose",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/compose/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::function:compose",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Module-level composition helper.",
          "text": "Module-level composition helper."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 51,
          "span": {
            "end": {
              "byte": 1472,
              "column": 42,
              "line": 51
            },
            "start": {
              "byte": 1434,
              "column": 4,
              "line": 51
            }
          },
          "start_line": 51
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/compose",
        "identity": "compose",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/compose_sentence/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "compose_sentence",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::function:compose_sentence",
          "decorators": [],
          "kind": "function",
          "name": "compose_sentence",
          "parent_identity": null,
          "qualified_name": "compose_sentence",
          "signature": "def compose_sentence(words: Iterable[FloorGonol]) -> FloorGonol"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 76,
          "span": {
            "end": {
              "byte": 2376,
              "column": 14,
              "line": 76
            },
            "start": {
              "byte": 2172,
              "column": 0,
              "line": 70
            }
          },
          "start_line": 70
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/compose_sentence",
        "identity": "compose_sentence",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/compose_sentence/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::function:compose_sentence",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Fold word gonols into a sentence gonol.",
          "text": "Fold word gonols into a sentence gonol."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 71,
          "span": {
            "end": {
              "byte": 2286,
              "column": 49,
              "line": 71
            },
            "start": {
              "byte": 2241,
              "column": 4,
              "line": 71
            }
          },
          "start_line": 71
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/compose_sentence",
        "identity": "compose_sentence",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/identity_holds/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "identity_holds",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::function:identity_holds",
          "decorators": [],
          "kind": "function",
          "name": "identity_holds",
          "parent_identity": null,
          "qualified_name": "identity_holds",
          "signature": "def identity_holds(gonols: Iterable[FloorGonol]) -> bool"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 83,
          "span": {
            "end": {
              "byte": 2597,
              "column": 77,
              "line": 83
            },
            "start": {
              "byte": 2379,
              "column": 0,
              "line": 79
            }
          },
          "start_line": 79
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/identity_holds",
        "identity": "identity_holds",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/identity_holds/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::function:identity_holds",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Check the origin identity law over a finite sample.",
          "text": "Check the origin identity law over a finite sample."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 80,
          "span": {
            "end": {
              "byte": 2498,
              "column": 61,
              "line": 80
            },
            "start": {
              "byte": 2441,
              "column": 4,
              "line": 80
            }
          },
          "start_line": 80
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/identity_holds",
        "identity": "identity_holds",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/origin/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "origin",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::function:origin",
          "decorators": [],
          "kind": "function",
          "name": "origin",
          "parent_identity": null,
          "qualified_name": "origin",
          "signature": "def origin() -> FloorGonol"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 47,
          "span": {
            "end": {
              "byte": 1363,
              "column": 65,
              "line": 47
            },
            "start": {
              "byte": 1194,
              "column": 0,
              "line": 44
            }
          },
          "start_line": 44
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/origin",
        "identity": "origin",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/origin/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/assignment.py::function:origin",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Return the space/origin identity: θ=0, no rotation, invertible.",
          "text": "Return the space/origin identity: θ=0, no rotation, invertible."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "1289b0578408f8e61a69ac9de5066b1285121c6f4b458aee2b6ec44bea58b015",
        "file": "zfae/vernacular_floor/assignment.py",
        "location": {
          "end_line": 45,
          "span": {
            "end": {
              "byte": 1296,
              "column": 73,
              "line": 45
            },
            "start": {
              "byte": 1226,
              "column": 4,
              "line": 45
            }
          },
          "start_line": 45
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/assignment.py#subject/symbol/origin",
        "identity": "origin",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/file/calls_definitions%5B1%5D/fact/composition-ratio/lines%3A1-1/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 1,
          "ratio": "calls_definitions",
          "value": "14:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/file/calls_definitions%5B1%5D",
        "identity": "calls_definitions[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/file/calls_definitions%5B2%5D/fact/composition-ratio/lines%3A50-50/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 2,
          "ratio": "calls_definitions",
          "value": "14:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 50,
          "start_line": 50
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/file/calls_definitions%5B2%5D",
        "identity": "calls_definitions[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/file/imports_exports%5B1%5D/fact/composition-ratio/lines%3A1-1/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 1,
          "ratio": "imports_exports",
          "value": "4:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/file/imports_exports%5B1%5D",
        "identity": "imports_exports[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/file/imports_exports%5B2%5D/fact/composition-ratio/lines%3A50-50/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 2,
          "ratio": "imports_exports",
          "value": "4:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 50,
          "start_line": 50
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/file/imports_exports%5B2%5D",
        "identity": "imports_exports[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/file/loc_comments%5B1%5D/fact/composition-ratio/lines%3A1-1/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 1,
          "ratio": "loc_comments",
          "value": "32:4"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/file/loc_comments%5B1%5D",
        "identity": "loc_comments[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/file/loc_comments%5B2%5D/fact/composition-ratio/lines%3A50-50/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 2,
          "ratio": "loc_comments",
          "value": "32:4"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 50,
          "start_line": 50
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/file/loc_comments%5B2%5D",
        "identity": "loc_comments[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/codebook_import.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=32:4 imports_exports=4:3 calls_definitions=14:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 1,
          "span": {
            "end": {
              "byte": 70,
              "column": 70,
              "line": 1
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
        "identity": "zfae/vernacular_floor/codebook_import.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py/fact/comment/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/codebook_import.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=32:4 imports_exports=4:3 calls_definitions=14:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 50,
          "span": {
            "end": {
              "byte": 1743,
              "column": 70,
              "line": 50
            },
            "start": {
              "byte": 1673,
              "column": 0,
              "line": 50
            }
          },
          "start_line": 50
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
        "identity": "zfae/vernacular_floor/codebook_import.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/codebook_import.py::<module>",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Read-only import boundary for the upstream public gonol glyph codebook.",
          "text": "Read-only import boundary for the upstream public gonol glyph codebook."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 2,
          "span": {
            "end": {
              "byte": 148,
              "column": 77,
              "line": 2
            },
            "start": {
              "byte": 71,
              "column": 0,
              "line": 2
            }
          },
          "start_line": 2
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
        "identity": "zfae/vernacular_floor/codebook_import.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "__future__:annotations:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "__future__",
          "name": "annotations"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
        "identity": "zfae/vernacular_floor/codebook_import.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "math:math:1",
        "value": {
          "alias": null,
          "kind": "import",
          "level": 0,
          "module": "math",
          "name": "math"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 6,
          "start_line": 6
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
        "identity": "zfae/vernacular_floor/codebook_import.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "pathlib:Path:2",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "pathlib",
          "name": "Path"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
        "identity": "zfae/vernacular_floor/codebook_import.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py/fact/import/3",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Iterable:3",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Iterable"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
        "identity": "zfae/vernacular_floor/codebook_import.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py/fact/import/4",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Tuple:4",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Tuple"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/module/zfae%2Fvernacular_floor%2Fcodebook_import.py",
        "identity": "zfae/vernacular_floor/codebook_import.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/symbol/is_prime/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "is_prime",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/codebook_import.py::function:is_prime",
          "decorators": [],
          "kind": "function",
          "name": "is_prime",
          "parent_identity": null,
          "qualified_name": "is_prime",
          "signature": "def is_prime(n: int) -> bool"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 49,
          "span": {
            "end": {
              "byte": 1672,
              "column": 15,
              "line": 49
            },
            "start": {
              "byte": 1304,
              "column": 0,
              "line": 36
            }
          },
          "start_line": 36
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/symbol/is_prime",
        "identity": "is_prime",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/symbol/is_prime/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/codebook_import.py::function:is_prime",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Return True when *n* is prime using a small deterministic check.",
          "text": "Return True when *n* is prime using a small deterministic check."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 37,
          "span": {
            "end": {
              "byte": 1408,
              "column": 74,
              "line": 37
            },
            "start": {
              "byte": 1338,
              "column": 4,
              "line": 37
            }
          },
          "start_line": 37
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/symbol/is_prime",
        "identity": "is_prime",
        "scope": "symbol"
      }
    }
  ],
  [
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/symbol/load_codebook/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "load_codebook",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/codebook_import.py::function:load_codebook",
          "decorators": [],
          "kind": "function",
          "name": "load_codebook",
          "parent_identity": null,
          "qualified_name": "load_codebook",
          "signature": "def load_codebook(path: str | Path) -> Tuple[str, ...]"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 19,
          "span": {
            "end": {
              "byte": 625,
              "column": 17,
              "line": 19
            },
            "start": {
              "byte": 306,
              "column": 0,
              "line": 13
            }
          },
          "start_line": 13
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/symbol/load_codebook",
        "identity": "load_codebook",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/symbol/load_codebook/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/codebook_import.py::function:load_codebook",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Load glyphs verbatim from an upstream text file, one glyph per line.",
          "text": "Load glyphs verbatim from an upstream text file, one glyph per line."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 14,
          "span": {
            "end": {
              "byte": 440,
              "column": 78,
              "line": 14
            },
            "start": {
              "byte": 366,
              "column": 4,
              "line": 14
            }
          },
          "start_line": 14
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/symbol/load_codebook",
        "identity": "load_codebook",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/symbol/validate_codebook/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "validate_codebook",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/codebook_import.py::function:validate_codebook",
          "decorators": [],
          "kind": "function",
          "name": "validate_codebook",
          "parent_identity": null,
          "qualified_name": "validate_codebook",
          "signature": "def validate_codebook(glyphs: Iterable[str]) -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 33,
          "span": {
            "end": {
              "byte": 1301,
              "column": 68,
              "line": 33
            },
            "start": {
              "byte": 628,
              "column": 0,
              "line": 22
            }
          },
          "start_line": 22
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/symbol/validate_codebook",
        "identity": "validate_codebook",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/symbol/validate_codebook/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/codebook_import.py::function:validate_codebook",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Assert imported glyph cardinality, uniqueness, invertibility, and primality.",
          "text": "Assert imported glyph cardinality, uniqueness, invertibility, and primality."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "38cb97c89b30bbaa51c4c4e24b1c95d2957600254820e9626d5921e1d177e135",
        "file": "zfae/vernacular_floor/codebook_import.py",
        "location": {
          "end_line": 23,
          "span": {
            "end": {
              "byte": 768,
              "column": 86,
              "line": 23
            },
            "start": {
              "byte": 686,
              "column": 4,
              "line": 23
            }
          },
          "start_line": 23
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/codebook_import.py#subject/symbol/validate_codebook",
        "identity": "validate_codebook",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/file/calls_definitions%5B1%5D/fact/composition-ratio/lines%3A1-1/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 1,
          "ratio": "calls_definitions",
          "value": "13:5"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/file/calls_definitions%5B1%5D",
        "identity": "calls_definitions[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/file/calls_definitions%5B2%5D/fact/composition-ratio/lines%3A59-59/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 2,
          "ratio": "calls_definitions",
          "value": "13:5"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 59,
          "start_line": 59
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/file/calls_definitions%5B2%5D",
        "identity": "calls_definitions[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/file/imports_exports%5B1%5D/fact/composition-ratio/lines%3A1-1/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 1,
          "ratio": "imports_exports",
          "value": "5:5"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/file/imports_exports%5B1%5D",
        "identity": "imports_exports[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/file/imports_exports%5B2%5D/fact/composition-ratio/lines%3A59-59/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 2,
          "ratio": "imports_exports",
          "value": "5:5"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 59,
          "start_line": 59
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/file/imports_exports%5B2%5D",
        "identity": "imports_exports[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/file/loc_comments%5B1%5D/fact/composition-ratio/lines%3A1-1/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 1,
          "ratio": "loc_comments",
          "value": "33:6"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/file/loc_comments%5B1%5D",
        "identity": "loc_comments[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/file/loc_comments%5B2%5D/fact/composition-ratio/lines%3A59-59/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 2,
          "ratio": "loc_comments",
          "value": "33:6"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 59,
          "start_line": 59
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/file/loc_comments%5B2%5D",
        "identity": "loc_comments[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=33:6 imports_exports=5:5 calls_definitions=13:5"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 1,
          "span": {
            "end": {
              "byte": 70,
              "column": 70,
              "line": 1
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
        "identity": "zfae/vernacular_floor/floor_artifact.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py/fact/comment/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=33:6 imports_exports=5:5 calls_definitions=13:5"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 59,
          "span": {
            "end": {
              "byte": 1874,
              "column": 70,
              "line": 59
            },
            "start": {
              "byte": 1804,
              "column": 0,
              "line": 59
            }
          },
          "start_line": 59
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
        "identity": "zfae/vernacular_floor/floor_artifact.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::<module>",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Artifact emission and loading for vernacular floor gonols.",
          "text": "Artifact emission and loading for vernacular floor gonols."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 2,
          "span": {
            "end": {
              "byte": 135,
              "column": 64,
              "line": 2
            },
            "start": {
              "byte": 71,
              "column": 0,
              "line": 2
            }
          },
          "start_line": 2
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
        "identity": "zfae/vernacular_floor/floor_artifact.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "__future__:annotations:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "__future__",
          "name": "annotations"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
        "identity": "zfae/vernacular_floor/floor_artifact.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "json:json:1",
        "value": {
          "alias": null,
          "kind": "import",
          "level": 0,
          "module": "json",
          "name": "json"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 6,
          "start_line": 6
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
        "identity": "zfae/vernacular_floor/floor_artifact.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "pathlib:Path:2",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "pathlib",
          "name": "Path"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
        "identity": "zfae/vernacular_floor/floor_artifact.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py/fact/import/3",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Iterable:3",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Iterable"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
        "identity": "zfae/vernacular_floor/floor_artifact.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py/fact/import/4",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Iterator:4",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Iterator"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
        "identity": "zfae/vernacular_floor/floor_artifact.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py/fact/import/5",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Mapping:5",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Mapping"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
        "identity": "zfae/vernacular_floor/floor_artifact.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py/fact/import/6",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": ".assignment:FloorGonol:6",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 1,
          "module": ".assignment",
          "name": "FloorGonol"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 10,
          "start_line": 10
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/module/zfae%2Fvernacular_floor%2Ffloor_artifact.py",
        "identity": "zfae/vernacular_floor/floor_artifact.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/embedding_rows/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "embedding_rows",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::function:embedding_rows",
          "decorators": [],
          "kind": "function",
          "name": "embedding_rows",
          "parent_identity": null,
          "qualified_name": "embedding_rows",
          "signature": "def embedding_rows(gonols: Iterable[FloorGonol]) -> Iterator[tuple[str, tuple[float, float, float]]]"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 58,
          "span": {
            "end": {
              "byte": 1803,
              "column": 65,
              "line": 58
            },
            "start": {
              "byte": 1524,
              "column": 0,
              "line": 54
            }
          },
          "start_line": 54
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/embedding_rows",
        "identity": "embedding_rows",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/embedding_rows/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::function:embedding_rows",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Emit simple instrument hooks for edcmbone-style intrinsic-dimension probes.",
          "text": "Emit simple instrument hooks for edcmbone-style intrinsic-dimension probes."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 55,
          "span": {
            "end": {
              "byte": 1711,
              "column": 85,
              "line": 55
            },
            "start": {
              "byte": 1630,
              "column": 4,
              "line": 55
            }
          },
          "start_line": 55
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/embedding_rows",
        "identity": "embedding_rows",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/gonol_from_record/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "gonol_from_record",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::function:gonol_from_record",
          "decorators": [],
          "kind": "function",
          "name": "gonol_from_record",
          "parent_identity": null,
          "qualified_name": "gonol_from_record",
          "signature": "def gonol_from_record(record: Mapping[str, object]) -> FloorGonol"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 35,
          "span": {
            "end": {
              "byte": 956,
              "column": 5,
              "line": 35
            },
            "start": {
              "byte": 604,
              "column": 0,
              "line": 26
            }
          },
          "start_line": 26
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/gonol_from_record",
        "identity": "gonol_from_record",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/gonol_from_record/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::function:gonol_from_record",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Load a floor gonol from a JSONL-safe record.",
          "text": "Load a floor gonol from a JSONL-safe record."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 27,
          "span": {
            "end": {
              "byte": 725,
              "column": 54,
              "line": 27
            },
            "start": {
              "byte": 675,
              "column": 4,
              "line": 27
            }
          },
          "start_line": 27
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/gonol_from_record",
        "identity": "gonol_from_record",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/gonol_to_record/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "gonol_to_record",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::function:gonol_to_record",
          "decorators": [],
          "kind": "function",
          "name": "gonol_to_record",
          "parent_identity": null,
          "qualified_name": "gonol_to_record",
          "signature": "def gonol_to_record(gonol: FloorGonol) -> dict[str, object]"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 23,
          "span": {
            "end": {
              "byte": 601,
              "column": 5,
              "line": 23
            },
            "start": {
              "byte": 295,
              "column": 0,
              "line": 13
            }
          },
          "start_line": 13
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/gonol_to_record",
        "identity": "gonol_to_record",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/gonol_to_record/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::function:gonol_to_record",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Serialize a floor gonol to a JSONL-safe record.",
          "text": "Serialize a floor gonol to a JSONL-safe record."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 14,
          "span": {
            "end": {
              "byte": 413,
              "column": 57,
              "line": 14
            },
            "start": {
              "byte": 360,
              "column": 4,
              "line": 14
            }
          },
          "start_line": 14
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/gonol_to_record",
        "identity": "gonol_to_record",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/load_floor/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "load_floor",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::function:load_floor",
          "decorators": [],
          "kind": "function",
          "name": "load_floor",
          "parent_identity": null,
          "qualified_name": "load_floor",
          "signature": "def load_floor(path: str | Path) -> Iterator[FloorGonol]"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 51,
          "span": {
            "end": {
              "byte": 1521,
              "column": 53,
              "line": 51
            },
            "start": {
              "byte": 1263,
              "column": 0,
              "line": 46
            }
          },
          "start_line": 46
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/load_floor",
        "identity": "load_floor",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/load_floor/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::function:load_floor",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Yield floor gonols from a JSONL artifact.",
          "text": "Yield floor gonols from a JSONL artifact."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 47,
          "span": {
            "end": {
              "byte": 1372,
              "column": 51,
              "line": 47
            },
            "start": {
              "byte": 1325,
              "column": 4,
              "line": 47
            }
          },
          "start_line": 47
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/load_floor",
        "identity": "load_floor",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/write_floor/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "write_floor",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::function:write_floor",
          "decorators": [],
          "kind": "function",
          "name": "write_floor",
          "parent_identity": null,
          "qualified_name": "write_floor",
          "signature": "def write_floor(path: str | Path, gonols: Iterable[FloorGonol]) -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 43,
          "span": {
            "end": {
              "byte": 1260,
              "column": 83,
              "line": 43
            },
            "start": {
              "byte": 959,
              "column": 0,
              "line": 38
            }
          },
          "start_line": 38
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/write_floor",
        "identity": "write_floor",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/write_floor/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/floor_artifact.py::function:write_floor",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Write a floor artifact as JSONL.",
          "text": "Write a floor artifact as JSONL."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "b42eaa64938efdc6703b4d5b4ef790675f830e76b330f75068f6769cc09df18b",
        "file": "zfae/vernacular_floor/floor_artifact.py",
        "location": {
          "end_line": 39,
          "span": {
            "end": {
              "byte": 1074,
              "column": 42,
              "line": 39
            },
            "start": {
              "byte": 1036,
              "column": 4,
              "line": 39
            }
          },
          "start_line": 39
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/floor_artifact.py#subject/symbol/write_floor",
        "identity": "write_floor",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/file/calls_definitions%5B1%5D/fact/composition-ratio/lines%3A1-1/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 1,
          "ratio": "calls_definitions",
          "value": "3:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/file/calls_definitions%5B1%5D",
        "identity": "calls_definitions[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/file/calls_definitions%5B2%5D/fact/composition-ratio/lines%3A62-62/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 2,
          "ratio": "calls_definitions",
          "value": "3:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 62,
          "start_line": 62
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/file/calls_definitions%5B2%5D",
        "identity": "calls_definitions[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/file/imports_exports%5B1%5D/fact/composition-ratio/lines%3A1-1/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 1,
          "ratio": "imports_exports",
          "value": "3:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/file/imports_exports%5B1%5D",
        "identity": "imports_exports[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/file/imports_exports%5B2%5D/fact/composition-ratio/lines%3A62-62/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 2,
          "ratio": "imports_exports",
          "value": "3:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 62,
          "start_line": 62
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/file/imports_exports%5B2%5D",
        "identity": "imports_exports[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/file/loc_comments%5B1%5D/fact/composition-ratio/lines%3A1-1/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 1,
          "ratio": "loc_comments",
          "value": "18:28"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/file/loc_comments%5B1%5D",
        "identity": "loc_comments[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/file/loc_comments%5B2%5D/fact/composition-ratio/lines%3A62-62/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 2,
          "ratio": "loc_comments",
          "value": "18:28"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 62,
          "start_line": 62
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/file/loc_comments%5B2%5D",
        "identity": "loc_comments[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/manifest.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=18:28 imports_exports=3:3 calls_definitions=3:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 1,
          "span": {
            "end": {
              "byte": 70,
              "column": 70,
              "line": 1
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
        "identity": "zfae/vernacular_floor/manifest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py/fact/comment/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/manifest.py::<module>",
          "metadata_kind": "msdmd_block",
          "text": "=== MODULE_BUILD ===\nid: vernacular_floor_gonol_set\n  module_name: vernacular_floor\n  module_kind: instrument\n  summary: derives the English base-vernacular gonol set from OEWN relational position over the imported public glyph codebook so specialized strata can attach to a floor\n  owner: Erin Spencer (build agent: Codex)\n  public_surface: load_floor, FloorGonol, floor_manifest\n  internal_surface: oewn_ingest, relation_graph, angular_assignment, codebook_import\n  auth_boundary: none\n  storage_boundary: write\n  network_boundary: external\n  user_data_boundary: none\n  admin_only: false\n  tests: zfae.vernacular_floor.tests\n  rollout: hmmm\n  rollback: delete floor artifact + loader export; codebook untouched (upstream)\n  requires: a0_public_gonol_codebook\n  feature_flag: hmmm\n  unresolved: word_membership_rule, affix_type_system, twist_fiber_action, homology_template\n=== END MODULE_BUILD ==="
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 28,
          "span": {
            "end": {
              "byte": 1208,
              "column": 26,
              "line": 28
            },
            "start": {
              "byte": 269,
              "column": 0,
              "line": 9
            }
          },
          "start_line": 9
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
        "identity": "zfae/vernacular_floor/manifest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py/fact/comment/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/manifest.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=18:28 imports_exports=3:3 calls_definitions=3:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 62,
          "span": {
            "end": {
              "byte": 2392,
              "column": 70,
              "line": 62
            },
            "start": {
              "byte": 2322,
              "column": 0,
              "line": 62
            }
          },
          "start_line": 62
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
        "identity": "zfae/vernacular_floor/manifest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/manifest.py::<module>",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Manifest and membership predicate stub for the English vernacular floor.",
          "text": "Manifest and membership predicate stub for the English vernacular floor."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 2,
          "span": {
            "end": {
              "byte": 149,
              "column": 78,
              "line": 2
            },
            "start": {
              "byte": 71,
              "column": 0,
              "line": 2
            }
          },
          "start_line": 2
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
        "identity": "zfae/vernacular_floor/manifest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "__future__:annotations:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "__future__",
          "name": "annotations"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
        "identity": "zfae/vernacular_floor/manifest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "dataclasses:dataclass:1",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "dataclasses",
          "name": "dataclass"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 6,
          "start_line": 6
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
        "identity": "zfae/vernacular_floor/manifest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Callable:2",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Callable"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
        "identity": "zfae/vernacular_floor/manifest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py/fact/import/3",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Mapping:3",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Mapping"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
        "identity": "zfae/vernacular_floor/manifest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py/fact/import/4",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Optional:4",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Optional"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/module/zfae%2Fvernacular_floor%2Fmanifest.py",
        "identity": "zfae/vernacular_floor/manifest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/symbol/FloorManifest/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "class-declaration",
      "native": {
        "id": "FloorManifest",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/manifest.py::class:FloorManifest",
          "decorators": [
            "dataclass(frozen=True)"
          ],
          "kind": "class",
          "name": "FloorManifest",
          "parent_identity": null,
          "qualified_name": "FloorManifest",
          "signature": "class FloorManifest"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 42,
          "span": {
            "end": {
              "byte": 1669,
              "column": 58,
              "line": 42
            },
            "start": {
              "byte": 1278,
              "column": 0,
              "line": 33
            }
          },
          "start_line": 33
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/symbol/FloorManifest",
        "identity": "FloorManifest",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/symbol/FloorManifest/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/manifest.py::class:FloorManifest",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Declared, swappable facts for a vernacular floor build.",
          "text": "Declared, swappable facts for a vernacular floor build."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 35,
          "span": {
            "end": {
              "byte": 1388,
              "column": 65,
              "line": 35
            },
            "start": {
              "byte": 1327,
              "column": 4,
              "line": 35
            }
          },
          "start_line": 35
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/symbol/FloorManifest",
        "identity": "FloorManifest",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/symbol/floor_manifest/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "floor_manifest",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/manifest.py::function:floor_manifest",
          "decorators": [],
          "kind": "function",
          "name": "floor_manifest",
          "parent_identity": null,
          "qualified_name": "floor_manifest",
          "signature": "def floor_manifest() -> FloorManifest"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 48,
          "span": {
            "end": {
              "byte": 1814,
              "column": 26,
              "line": 48
            },
            "start": {
              "byte": 1672,
              "column": 0,
              "line": 45
            }
          },
          "start_line": 45
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/symbol/floor_manifest",
        "identity": "floor_manifest",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/symbol/floor_manifest/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/manifest.py::function:floor_manifest",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Return the in-code manifest used by scaffolded loaders and tests.",
          "text": "Return the in-code manifest used by scaffolded loaders and tests."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 46,
          "span": {
            "end": {
              "byte": 1786,
              "column": 75,
              "line": 46
            },
            "start": {
              "byte": 1715,
              "column": 4,
              "line": 46
            }
          },
          "start_line": 46
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/symbol/floor_manifest",
        "identity": "floor_manifest",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/symbol/unresolved_membership_rule/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "unresolved_membership_rule",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/manifest.py::function:unresolved_membership_rule",
          "decorators": [],
          "kind": "function",
          "name": "unresolved_membership_rule",
          "parent_identity": null,
          "qualified_name": "unresolved_membership_rule",
          "signature": "def unresolved_membership_rule(lemma: str, metadata: Optional[Mapping[str, object]]=None) -> bool"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 61,
          "span": {
            "end": {
              "byte": 2321,
              "column": 5,
              "line": 61
            },
            "start": {
              "byte": 1817,
              "column": 0,
              "line": 51
            }
          },
          "start_line": 51
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/symbol/unresolved_membership_rule",
        "identity": "unresolved_membership_rule",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/symbol/unresolved_membership_rule/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/manifest.py::function:unresolved_membership_rule",
          "description": "The predicate exists so callers wire membership as a declared dependency\ninstead of smuggling a word list into the module.  It intentionally raises:\nhmmm is a boundary object, not a boolean.",
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Refuse to guess vernacular membership until Erin pins the rule.",
          "text": "Refuse to guess vernacular membership until Erin pins the rule.\n\n    The predicate exists so callers wire membership as a declared dependency\n    instead of smuggling a word list into the module.  It intentionally raises:\n    hmmm is a boundary object, not a boolean.\n    "
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "faf4cc49ecfe69f18e7e40f6736f909d6b3e37716bd505d7582c9c9920ce2b47",
        "file": "zfae/vernacular_floor/manifest.py",
        "location": {
          "end_line": 57,
          "span": {
            "end": {
              "byte": 2200,
              "column": 7,
              "line": 57
            },
            "start": {
              "byte": 1922,
              "column": 4,
              "line": 52
            }
          },
          "start_line": 52
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/manifest.py#subject/symbol/unresolved_membership_rule",
        "identity": "unresolved_membership_rule",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/file/calls_definitions%5B1%5D/fact/composition-ratio/lines%3A1-1/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 1,
          "ratio": "calls_definitions",
          "value": "4:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/file/calls_definitions%5B1%5D",
        "identity": "calls_definitions[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/file/calls_definitions%5B2%5D/fact/composition-ratio/lines%3A35-35/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 2,
          "ratio": "calls_definitions",
          "value": "4:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 35,
          "start_line": 35
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/file/calls_definitions%5B2%5D",
        "identity": "calls_definitions[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/file/imports_exports%5B1%5D/fact/composition-ratio/lines%3A1-1/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 1,
          "ratio": "imports_exports",
          "value": "3:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/file/imports_exports%5B1%5D",
        "identity": "imports_exports[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/file/imports_exports%5B2%5D/fact/composition-ratio/lines%3A35-35/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 2,
          "ratio": "imports_exports",
          "value": "3:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 35,
          "start_line": 35
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/file/imports_exports%5B2%5D",
        "identity": "imports_exports[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/file/loc_comments%5B1%5D/fact/composition-ratio/lines%3A1-1/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 1,
          "ratio": "loc_comments",
          "value": "17:4"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/file/loc_comments%5B1%5D",
        "identity": "loc_comments[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/file/loc_comments%5B2%5D/fact/composition-ratio/lines%3A35-35/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 2,
          "ratio": "loc_comments",
          "value": "17:4"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 35,
          "start_line": 35
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/file/loc_comments%5B2%5D",
        "identity": "loc_comments[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/oewn_ingest.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=17:4 imports_exports=3:3 calls_definitions=4:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 1,
          "span": {
            "end": {
              "byte": 69,
              "column": 69,
              "line": 1
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
        "identity": "zfae/vernacular_floor/oewn_ingest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py/fact/comment/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/oewn_ingest.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=17:4 imports_exports=3:3 calls_definitions=4:3"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 35,
          "span": {
            "end": {
              "byte": 1201,
              "column": 69,
              "line": 35
            },
            "start": {
              "byte": 1132,
              "column": 0,
              "line": 35
            }
          },
          "start_line": 35
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
        "identity": "zfae/vernacular_floor/oewn_ingest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/oewn_ingest.py::<module>",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "OEWN relation-graph ingestion boundary.",
          "text": "OEWN relation-graph ingestion boundary."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 2,
          "span": {
            "end": {
              "byte": 115,
              "column": 45,
              "line": 2
            },
            "start": {
              "byte": 70,
              "column": 0,
              "line": 2
            }
          },
          "start_line": 2
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
        "identity": "zfae/vernacular_floor/oewn_ingest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "__future__:annotations:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "__future__",
          "name": "annotations"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
        "identity": "zfae/vernacular_floor/oewn_ingest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "dataclasses:dataclass:1",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "dataclasses",
          "name": "dataclass"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 6,
          "start_line": 6
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
        "identity": "zfae/vernacular_floor/oewn_ingest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Dict:2",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Dict"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
        "identity": "zfae/vernacular_floor/oewn_ingest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py/fact/import/3",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Iterable:3",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Iterable"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
        "identity": "zfae/vernacular_floor/oewn_ingest.py",
        "scope": "module"
      }
    }
  ],
  [
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py/fact/import/4",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Mapping:4",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Mapping"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
        "identity": "zfae/vernacular_floor/oewn_ingest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py/fact/import/5",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Tuple:5",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Tuple"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/module/zfae%2Fvernacular_floor%2Foewn_ingest.py",
        "identity": "zfae/vernacular_floor/oewn_ingest.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/symbol/RelationGraph/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "class-declaration",
      "native": {
        "id": "RelationGraph",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/oewn_ingest.py::class:RelationGraph",
          "decorators": [
            "dataclass(frozen=True)"
          ],
          "kind": "class",
          "name": "RelationGraph",
          "parent_identity": null,
          "qualified_name": "RelationGraph",
          "signature": "class RelationGraph"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 17,
          "span": {
            "end": {
              "byte": 477,
              "column": 40,
              "line": 17
            },
            "start": {
              "byte": 305,
              "column": 0,
              "line": 12
            }
          },
          "start_line": 12
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/symbol/RelationGraph",
        "identity": "RelationGraph",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/symbol/RelationGraph/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/oewn_ingest.py::class:RelationGraph",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Minimal relation graph shape consumed by angular assignment.",
          "text": "Minimal relation graph shape consumed by angular assignment."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 14,
          "span": {
            "end": {
              "byte": 420,
              "column": 70,
              "line": 14
            },
            "start": {
              "byte": 354,
              "column": 4,
              "line": 14
            }
          },
          "start_line": 14
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/symbol/RelationGraph",
        "identity": "RelationGraph",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/symbol/fetch_oewn_relation_graph/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "fetch_oewn_relation_graph",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/oewn_ingest.py::function:fetch_oewn_relation_graph",
          "decorators": [],
          "kind": "function",
          "name": "fetch_oewn_relation_graph",
          "parent_identity": null,
          "qualified_name": "fetch_oewn_relation_graph",
          "signature": "def fetch_oewn_relation_graph(lemma: str) -> RelationGraph"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 34,
          "span": {
            "end": {
              "byte": 1131,
              "column": 5,
              "line": 34
            },
            "start": {
              "byte": 844,
              "column": 0,
              "line": 29
            }
          },
          "start_line": 29
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/symbol/fetch_oewn_relation_graph",
        "identity": "fetch_oewn_relation_graph",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/symbol/fetch_oewn_relation_graph/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/oewn_ingest.py::function:fetch_oewn_relation_graph",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Placeholder for the one-time OEWN fetch; offline artifact is preferred.",
          "text": "Placeholder for the one-time OEWN fetch; offline artifact is preferred."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 30,
          "span": {
            "end": {
              "byte": 985,
              "column": 81,
              "line": 30
            },
            "start": {
              "byte": 908,
              "column": 4,
              "line": 30
            }
          },
          "start_line": 30
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/symbol/fetch_oewn_relation_graph",
        "identity": "fetch_oewn_relation_graph",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/symbol/normalize_edges/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "normalize_edges",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/oewn_ingest.py::function:normalize_edges",
          "decorators": [],
          "kind": "function",
          "name": "normalize_edges",
          "parent_identity": null,
          "qualified_name": "normalize_edges",
          "signature": "def normalize_edges(lemma: str, edges: Mapping[str, Iterable[str]]) -> RelationGraph"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 26,
          "span": {
            "end": {
              "byte": 841,
              "column": 55,
              "line": 26
            },
            "start": {
              "byte": 480,
              "column": 0,
              "line": 20
            }
          },
          "start_line": 20
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/symbol/normalize_edges",
        "identity": "normalize_edges",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/symbol/normalize_edges/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/oewn_ingest.py::function:normalize_edges",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Normalize selected OEWN relation edges into immutable tuples.",
          "text": "Normalize selected OEWN relation edges into immutable tuples."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "6d6c73e6f0fc8542892e471605b0a396b31540897926485744f4d64ac1721a97",
        "file": "zfae/vernacular_floor/oewn_ingest.py",
        "location": {
          "end_line": 21,
          "span": {
            "end": {
              "byte": 637,
              "column": 71,
              "line": 21
            },
            "start": {
              "byte": 570,
              "column": 4,
              "line": 21
            }
          },
          "start_line": 21
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/oewn_ingest.py#subject/symbol/normalize_edges",
        "identity": "normalize_edges",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/file/calls_definitions%5B1%5D/fact/composition-ratio/lines%3A1-1/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 1,
          "ratio": "calls_definitions",
          "value": "0:0"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8f0a81694ba7228e20348ac9839db042fa6971e951ffcca51dca592418add65f",
        "file": "zfae/vernacular_floor/tests/__init__.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/file/calls_definitions%5B1%5D",
        "identity": "calls_definitions[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/file/calls_definitions%5B2%5D/fact/composition-ratio/lines%3A3-3/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 2,
          "ratio": "calls_definitions",
          "value": "0:0"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8f0a81694ba7228e20348ac9839db042fa6971e951ffcca51dca592418add65f",
        "file": "zfae/vernacular_floor/tests/__init__.py",
        "location": {
          "end_line": 3,
          "start_line": 3
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/file/calls_definitions%5B2%5D",
        "identity": "calls_definitions[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/file/imports_exports%5B1%5D/fact/composition-ratio/lines%3A1-1/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 1,
          "ratio": "imports_exports",
          "value": "0:0"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8f0a81694ba7228e20348ac9839db042fa6971e951ffcca51dca592418add65f",
        "file": "zfae/vernacular_floor/tests/__init__.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/file/imports_exports%5B1%5D",
        "identity": "imports_exports[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/file/imports_exports%5B2%5D/fact/composition-ratio/lines%3A3-3/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 2,
          "ratio": "imports_exports",
          "value": "0:0"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8f0a81694ba7228e20348ac9839db042fa6971e951ffcca51dca592418add65f",
        "file": "zfae/vernacular_floor/tests/__init__.py",
        "location": {
          "end_line": 3,
          "start_line": 3
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/file/imports_exports%5B2%5D",
        "identity": "imports_exports[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/file/loc_comments%5B1%5D/fact/composition-ratio/lines%3A1-1/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 1,
          "ratio": "loc_comments",
          "value": "0:1"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8f0a81694ba7228e20348ac9839db042fa6971e951ffcca51dca592418add65f",
        "file": "zfae/vernacular_floor/tests/__init__.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/file/loc_comments%5B1%5D",
        "identity": "loc_comments[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/file/loc_comments%5B2%5D/fact/composition-ratio/lines%3A3-3/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 2,
          "ratio": "loc_comments",
          "value": "0:1"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8f0a81694ba7228e20348ac9839db042fa6971e951ffcca51dca592418add65f",
        "file": "zfae/vernacular_floor/tests/__init__.py",
        "location": {
          "end_line": 3,
          "start_line": 3
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/file/loc_comments%5B2%5D",
        "identity": "loc_comments[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2F__init__.py/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/__init__.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=0:1 imports_exports=0:0 calls_definitions=0:0"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8f0a81694ba7228e20348ac9839db042fa6971e951ffcca51dca592418add65f",
        "file": "zfae/vernacular_floor/tests/__init__.py",
        "location": {
          "end_line": 1,
          "span": {
            "end": {
              "byte": 68,
              "column": 68,
              "line": 1
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2F__init__.py",
        "identity": "zfae/vernacular_floor/tests/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2F__init__.py/fact/comment/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/__init__.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=0:1 imports_exports=0:0 calls_definitions=0:0"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8f0a81694ba7228e20348ac9839db042fa6971e951ffcca51dca592418add65f",
        "file": "zfae/vernacular_floor/tests/__init__.py",
        "location": {
          "end_line": 3,
          "span": {
            "end": {
              "byte": 184,
              "column": 68,
              "line": 3
            },
            "start": {
              "byte": 116,
              "column": 0,
              "line": 3
            }
          },
          "start_line": 3
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2F__init__.py",
        "identity": "zfae/vernacular_floor/tests/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2F__init__.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/__init__.py::<module>",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Tests for the vernacular floor scaffold.",
          "text": "Tests for the vernacular floor scaffold."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "8f0a81694ba7228e20348ac9839db042fa6971e951ffcca51dca592418add65f",
        "file": "zfae/vernacular_floor/tests/__init__.py",
        "location": {
          "end_line": 2,
          "span": {
            "end": {
              "byte": 115,
              "column": 46,
              "line": 2
            },
            "start": {
              "byte": 69,
              "column": 0,
              "line": 2
            }
          },
          "start_line": 2
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/__init__.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2F__init__.py",
        "identity": "zfae/vernacular_floor/tests/__init__.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/file/calls_definitions%5B1%5D/fact/composition-ratio/lines%3A1-1/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 1,
          "ratio": "calls_definitions",
          "value": "28:7"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/file/calls_definitions%5B1%5D",
        "identity": "calls_definitions[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/file/calls_definitions%5B2%5D/fact/composition-ratio/lines%3A60-60/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 2,
          "ratio": "calls_definitions",
          "value": "28:7"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 60,
          "start_line": 60
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/file/calls_definitions%5B2%5D",
        "identity": "calls_definitions[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/file/imports_exports%5B1%5D/fact/composition-ratio/lines%3A1-1/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 1,
          "ratio": "imports_exports",
          "value": "9:1"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/file/imports_exports%5B1%5D",
        "identity": "imports_exports[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/file/imports_exports%5B2%5D/fact/composition-ratio/lines%3A60-60/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 2,
          "ratio": "imports_exports",
          "value": "9:1"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 60,
          "start_line": 60
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/file/imports_exports%5B2%5D",
        "identity": "imports_exports[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/file/loc_comments%5B1%5D/fact/composition-ratio/lines%3A1-1/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 1,
          "ratio": "loc_comments",
          "value": "45:1"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/file/loc_comments%5B1%5D",
        "identity": "loc_comments[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/file/loc_comments%5B2%5D/fact/composition-ratio/lines%3A60-60/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 2,
          "ratio": "loc_comments",
          "value": "45:1"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 60,
          "start_line": 60
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/file/loc_comments%5B2%5D",
        "identity": "loc_comments[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=45:1 imports_exports=9:1 calls_definitions=28:7"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 1,
          "span": {
            "end": {
              "byte": 70,
              "column": 70,
              "line": 1
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/comment/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=45:1 imports_exports=9:1 calls_definitions=28:7"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 60,
          "span": {
            "end": {
              "byte": 2737,
              "column": 70,
              "line": 60
            },
            "start": {
              "byte": 2667,
              "column": 0,
              "line": 60
            }
          },
          "start_line": 60
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::<module>",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Contract tests for the vernacular floor scaffold.",
          "text": "Contract tests for the vernacular floor scaffold."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 2,
          "span": {
            "end": {
              "byte": 126,
              "column": 55,
              "line": 2
            },
            "start": {
              "byte": 71,
              "column": 0,
              "line": 2
            }
          },
          "start_line": 2
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "__future__:annotations:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "__future__",
          "name": "annotations"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "inspect:inspect:1",
        "value": {
          "alias": null,
          "kind": "import",
          "level": 0,
          "module": "inspect",
          "name": "inspect"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 6,
          "start_line": 6
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/10",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.codebook_import:is_prime:10",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.codebook_import",
          "name": "is_prime"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 11,
          "start_line": 11
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/11",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.codebook_import:validate_codebook:11",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.codebook_import",
          "name": "validate_codebook"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 11,
          "start_line": 11
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/12",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.floor_artifact:load_floor:12",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.floor_artifact",
          "name": "load_floor"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 12,
          "start_line": 12
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/13",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.floor_artifact:write_floor:13",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.floor_artifact",
          "name": "write_floor"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 12,
          "start_line": 12
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/14",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.manifest:floor_manifest:14",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.manifest",
          "name": "floor_manifest"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 13,
          "start_line": 13
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/15",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.manifest:unresolved_membership_rule:15",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.manifest",
          "name": "unresolved_membership_rule"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 13,
          "start_line": 13
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/16",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.transformation_assembly:OperatorName:16",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.transformation_assembly",
          "name": "OperatorName"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 14,
          "start_line": 14
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/17",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.transformation_assembly:emit:17",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.transformation_assembly",
          "name": "emit"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 14,
          "start_line": 14
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/18",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.transformation_assembly:recognize:18",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.transformation_assembly",
          "name": "recognize"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 14,
          "start_line": 14
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/19",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.transformation_assembly:round_trip:19",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.transformation_assembly",
          "name": "round_trip"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 14,
          "start_line": 14
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "tempfile:tempfile:2",
        "value": {
          "alias": null,
          "kind": "import",
          "level": 0,
          "module": "tempfile",
          "name": "tempfile"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/3",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "unittest:unittest:3",
        "value": {
          "alias": null,
          "kind": "import",
          "level": 0,
          "module": "unittest",
          "name": "unittest"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 8,
          "start_line": 8
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/4",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.assignment:FloorGonol:4",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.assignment",
          "name": "FloorGonol"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 10,
          "start_line": 10
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/5",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.assignment:assign_from_relations:5",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.assignment",
          "name": "assign_from_relations"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 10,
          "start_line": 10
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/6",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.assignment:compose_sentence:6",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.assignment",
          "name": "compose_sentence"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 10,
          "start_line": 10
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/7",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.assignment:identity_holds:7",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.assignment",
          "name": "identity_holds"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 10,
          "start_line": 10
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/8",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.assignment:origin:8",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.assignment",
          "name": "origin"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 10,
          "start_line": 10
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py/fact/import/9",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "zfae.vernacular_floor.codebook_import:EXPECTED_PUBLIC_GLYPH_COUNT:9",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "zfae.vernacular_floor.codebook_import",
          "name": "EXPECTED_PUBLIC_GLYPH_COUNT"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 11,
          "start_line": 11
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/module/zfae%2Fvernacular_floor%2Ftests%2Ftest_vernacular_floor.py",
        "identity": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests.test_artifact_round_trip/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "VernacularFloorTests.test_artifact_round_trip",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::method:VernacularFloorTests.test_artifact_round_trip",
          "decorators": [],
          "kind": "method",
          "name": "test_artifact_round_trip",
          "parent_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::class:VernacularFloorTests",
          "qualified_name": "VernacularFloorTests.test_artifact_round_trip",
          "signature": "def test_artifact_round_trip(self) -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 44,
          "span": {
            "end": {
              "byte": 2079,
              "column": 67,
              "line": 44
            },
            "start": {
              "byte": 1795,
              "column": 4,
              "line": 40
            }
          },
          "start_line": 40
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests.test_artifact_round_trip",
        "identity": "VernacularFloorTests.test_artifact_round_trip",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests.test_codebook_count_and_primality_are_asserted_after_import/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "VernacularFloorTests.test_codebook_count_and_primality_are_asserted_after_import",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::method:VernacularFloorTests.test_codebook_count_and_primality_are_asserted_after_import",
          "decorators": [],
          "kind": "method",
          "name": "test_codebook_count_and_primality_are_asserted_after_import",
          "parent_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::class:VernacularFloorTests",
          "qualified_name": "VernacularFloorTests.test_codebook_count_and_primality_are_asserted_after_import",
          "signature": "def test_codebook_count_and_primality_are_asserted_after_import(self) -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 27,
          "span": {
            "end": {
              "byte": 1256,
              "column": 46,
              "line": 27
            },
            "start": {
              "byte": 978,
              "column": 4,
              "line": 23
            }
          },
          "start_line": 23
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests.test_codebook_count_and_primality_are_asserted_after_import",
        "identity": "VernacularFloorTests.test_codebook_count_and_primality_are_asserted_after_import",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests.test_manifest_keeps_membership_hmmm/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "VernacularFloorTests.test_manifest_keeps_membership_hmmm",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::method:VernacularFloorTests.test_manifest_keeps_membership_hmmm",
          "decorators": [],
          "kind": "method",
          "name": "test_manifest_keeps_membership_hmmm",
          "parent_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::class:VernacularFloorTests",
          "qualified_name": "VernacularFloorTests.test_manifest_keeps_membership_hmmm",
          "signature": "def test_manifest_keeps_membership_hmmm(self) -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 21,
          "span": {
            "end": {
              "byte": 972,
              "column": 45,
              "line": 21
            },
            "start": {
              "byte": 752,
              "column": 4,
              "line": 18
            }
          },
          "start_line": 18
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests.test_manifest_keeps_membership_hmmm",
        "identity": "VernacularFloorTests.test_manifest_keeps_membership_hmmm",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests.test_operator_variants_are_independent/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "VernacularFloorTests.test_operator_variants_are_independent",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::method:VernacularFloorTests.test_operator_variants_are_independent",
          "decorators": [],
          "kind": "method",
          "name": "test_operator_variants_are_independent",
          "parent_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::class:VernacularFloorTests",
          "qualified_name": "VernacularFloorTests.test_operator_variants_are_independent",
          "signature": "def test_operator_variants_are_independent(self) -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 55,
          "span": {
            "end": {
              "byte": 2617,
              "column": 69,
              "line": 55
            },
            "start": {
              "byte": 2085,
              "column": 4,
              "line": 46
            }
          },
          "start_line": 46
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests.test_operator_variants_are_independent",
        "identity": "VernacularFloorTests.test_operator_variants_are_independent",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests.test_origin_identity_and_closure/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "VernacularFloorTests.test_origin_identity_and_closure",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::method:VernacularFloorTests.test_origin_identity_and_closure",
          "decorators": [],
          "kind": "method",
          "name": "test_origin_identity_and_closure",
          "parent_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::class:VernacularFloorTests",
          "qualified_name": "VernacularFloorTests.test_origin_identity_and_closure",
          "signature": "def test_origin_identity_and_closure(self) -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 38,
          "span": {
            "end": {
              "byte": 1789,
              "column": 51,
              "line": 38
            },
            "start": {
              "byte": 1438,
              "column": 4,
              "line": 33
            }
          },
          "start_line": 33
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests.test_origin_identity_and_closure",
        "identity": "VernacularFloorTests.test_origin_identity_and_closure",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests.test_static_membership_path_has_no_literal_count/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "VernacularFloorTests.test_static_membership_path_has_no_literal_count",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::method:VernacularFloorTests.test_static_membership_path_has_no_literal_count",
          "decorators": [],
          "kind": "method",
          "name": "test_static_membership_path_has_no_literal_count",
          "parent_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::class:VernacularFloorTests",
          "qualified_name": "VernacularFloorTests.test_static_membership_path_has_no_literal_count",
          "signature": "def test_static_membership_path_has_no_literal_count(self) -> None"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 31,
          "span": {
            "end": {
              "byte": 1432,
              "column": 39,
              "line": 31
            },
            "start": {
              "byte": 1262,
              "column": 4,
              "line": 29
            }
          },
          "start_line": 29
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests.test_static_membership_path_has_no_literal_count",
        "identity": "VernacularFloorTests.test_static_membership_path_has_no_literal_count",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "class-declaration",
      "native": {
        "id": "VernacularFloorTests",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/tests/test_vernacular_floor.py::class:VernacularFloorTests",
          "decorators": [],
          "kind": "class",
          "name": "VernacularFloorTests",
          "parent_identity": null,
          "qualified_name": "VernacularFloorTests",
          "signature": "class VernacularFloorTests(unittest.TestCase)"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "9e9765c4749e7ab3fb5845e9ad3d574820b3bc1fc59e76cf5d471813cd475c39",
        "file": "zfae/vernacular_floor/tests/test_vernacular_floor.py",
        "location": {
          "end_line": 55,
          "span": {
            "end": {
              "byte": 2617,
              "column": 69,
              "line": 55
            },
            "start": {
              "byte": 701,
              "column": 0,
              "line": 17
            }
          },
          "start_line": 17
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/tests/test_vernacular_floor.py#subject/symbol/VernacularFloorTests",
        "identity": "VernacularFloorTests",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/file/calls_definitions%5B1%5D/fact/composition-ratio/lines%3A1-1/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 1,
          "ratio": "calls_definitions",
          "value": "11:5"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/file/calls_definitions%5B1%5D",
        "identity": "calls_definitions[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/file/calls_definitions%5B2%5D/fact/composition-ratio/lines%3A55-55/calls_definitions",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "calls_definitions",
        "value": {
          "occurrence": 2,
          "ratio": "calls_definitions",
          "value": "11:5"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 55,
          "start_line": 55
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/file/calls_definitions%5B2%5D",
        "identity": "calls_definitions[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/file/imports_exports%5B1%5D/fact/composition-ratio/lines%3A1-1/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 1,
          "ratio": "imports_exports",
          "value": "3:4"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/file/imports_exports%5B1%5D",
        "identity": "imports_exports[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/file/imports_exports%5B2%5D/fact/composition-ratio/lines%3A55-55/imports_exports",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "imports_exports",
        "value": {
          "occurrence": 2,
          "ratio": "imports_exports",
          "value": "3:4"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 55,
          "start_line": 55
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/file/imports_exports%5B2%5D",
        "identity": "imports_exports[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/file/loc_comments%5B1%5D/fact/composition-ratio/lines%3A1-1/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 1,
          "ratio": "loc_comments",
          "value": "31:6"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 1,
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/file/loc_comments%5B1%5D",
        "identity": "loc_comments[1]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/file/loc_comments%5B2%5D/fact/composition-ratio/lines%3A55-55/loc_comments",
      "convention": {
        "dialect": "line-comment:#",
        "namespace": "msdmd.ratios-line",
        "version": "named ratios line v1"
      },
      "extraction": {
        "configuration_sha256": "845819620aa224e67b08544dbe57bcf9b3ae5aff62a2c67899c412579aad9a64",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "msdmd-ratios",
        "reader_version": "1.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "composition-ratio",
      "native": {
        "id": "loc_comments",
        "value": {
          "occurrence": 2,
          "ratio": "loc_comments",
          "value": "31:6"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 55,
          "start_line": 55
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/file/loc_comments%5B2%5D",
        "identity": "loc_comments[2]",
        "scope": "file"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py/fact/comment/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=31:6 imports_exports=3:4 calls_definitions=11:5"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 1,
          "span": {
            "end": {
              "byte": 70,
              "column": 70,
              "line": 1
            },
            "start": {
              "byte": 0,
              "column": 0,
              "line": 1
            }
          },
          "start_line": 1
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
        "identity": "zfae/vernacular_floor/transformation_assembly.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py/fact/comment/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.line-comment",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "comment",
      "native": {
        "id": null,
        "value": {
          "attachment": "module_convention",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::<module>",
          "metadata_kind": "msdmd_ratios",
          "text": "ratios: loc_comments=31:6 imports_exports=3:4 calls_definitions=11:5"
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 55,
          "span": {
            "end": {
              "byte": 2146,
              "column": 70,
              "line": 55
            },
            "start": {
              "byte": 2076,
              "column": 0,
              "line": 55
            }
          },
          "start_line": 55
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
        "identity": "zfae/vernacular_floor/transformation_assembly.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::<module>",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Binding between surface character names and atomic transformation operators.",
          "text": "Binding between surface character names and atomic transformation operators."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 2,
          "span": {
            "end": {
              "byte": 153,
              "column": 82,
              "line": 2
            },
            "start": {
              "byte": 71,
              "column": 0,
              "line": 2
            }
          },
          "start_line": 2
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
        "identity": "zfae/vernacular_floor/transformation_assembly.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py/fact/import/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "__future__:annotations:0",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "__future__",
          "name": "annotations"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 4,
          "start_line": 4
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
        "identity": "zfae/vernacular_floor/transformation_assembly.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py/fact/import/1",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "dataclasses:dataclass:1",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "dataclasses",
          "name": "dataclass"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 6,
          "start_line": 6
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
        "identity": "zfae/vernacular_floor/transformation_assembly.py",
        "scope": "module"
      }
    }
  ],
  [
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py/fact/import/2",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Mapping:2",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Mapping"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
        "identity": "zfae/vernacular_floor/transformation_assembly.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py/fact/import/3",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Sequence:3",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Sequence"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
        "identity": "zfae/vernacular_floor/transformation_assembly.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py/fact/import/4",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "dependency",
      "native": {
        "id": "typing:Tuple:4",
        "value": {
          "alias": null,
          "kind": "from_import",
          "level": 0,
          "module": "typing",
          "name": "Tuple"
        }
      },
      "origin": "native",
      "projection": {
        "loss": "conditions retained in source; resolution not executed",
        "mapping_version": "python-imports@2",
        "relation": "imports"
      },
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 7,
          "start_line": 7
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/module/zfae%2Fvernacular_floor%2Ftransformation_assembly.py",
        "identity": "zfae/vernacular_floor/transformation_assembly.py",
        "scope": "module"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/OperatorName.accepts/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "OperatorName.accepts",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::method:OperatorName.accepts",
          "decorators": [],
          "kind": "method",
          "name": "accepts",
          "parent_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::class:OperatorName",
          "qualified_name": "OperatorName.accepts",
          "signature": "def accepts(self, root: str) -> bool"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 21,
          "span": {
            "end": {
              "byte": 708,
              "column": 86,
              "line": 21
            },
            "start": {
              "byte": 504,
              "column": 4,
              "line": 18
            }
          },
          "start_line": 18
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/OperatorName.accepts",
        "identity": "OperatorName.accepts",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/OperatorName.accepts/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::method:OperatorName.accepts",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Return True when the root is in this operator's explicit domain.",
          "text": "Return True when the root is in this operator's explicit domain."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 19,
          "span": {
            "end": {
              "byte": 620,
              "column": 78,
              "line": 19
            },
            "start": {
              "byte": 550,
              "column": 8,
              "line": 19
            }
          },
          "start_line": 19
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/OperatorName.accepts",
        "identity": "OperatorName.accepts",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/OperatorName/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "class-declaration",
      "native": {
        "id": "OperatorName",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::class:OperatorName",
          "decorators": [
            "dataclass(frozen=True)"
          ],
          "kind": "class",
          "name": "OperatorName",
          "parent_identity": null,
          "qualified_name": "OperatorName",
          "signature": "class OperatorName"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 21,
          "span": {
            "end": {
              "byte": 708,
              "column": 86,
              "line": 21
            },
            "start": {
              "byte": 271,
              "column": 0,
              "line": 10
            }
          },
          "start_line": 10
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/OperatorName",
        "identity": "OperatorName",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/OperatorName/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::class:OperatorName",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Atomic operator with a spelled name and an independent selection domain.",
          "text": "Atomic operator with a spelled name and an independent selection domain."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 12,
          "span": {
            "end": {
              "byte": 397,
              "column": 82,
              "line": 12
            },
            "start": {
              "byte": 319,
              "column": 4,
              "line": 12
            }
          },
          "start_line": 12
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/OperatorName",
        "identity": "OperatorName",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/emit/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "emit",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::function:emit",
          "decorators": [],
          "kind": "function",
          "name": "emit",
          "parent_identity": null,
          "qualified_name": "emit",
          "signature": "def emit(root: str, operators: Sequence[OperatorName], orthography: Mapping[str, str] | None=None) -> str"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 47,
          "span": {
            "end": {
              "byte": 1812,
              "column": 18,
              "line": 47
            },
            "start": {
              "byte": 1297,
              "column": 0,
              "line": 37
            }
          },
          "start_line": 37
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/emit",
        "identity": "emit",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/emit/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::function:emit",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Emit a surface form from a root and atomic operators.",
          "text": "Emit a surface form from a root and atomic operators."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 38,
          "span": {
            "end": {
              "byte": 1469,
              "column": 63,
              "line": 38
            },
            "start": {
              "byte": 1410,
              "column": 4,
              "line": 38
            }
          },
          "start_line": 38
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/emit",
        "identity": "emit",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/recognize/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "recognize",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::function:recognize",
          "decorators": [],
          "kind": "function",
          "name": "recognize",
          "parent_identity": null,
          "qualified_name": "recognize",
          "signature": "def recognize(surface: str, operators: Sequence[OperatorName], roots: Sequence[str]) -> tuple[str, tuple[OperatorName, ...]]"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 34,
          "span": {
            "end": {
              "byte": 1294,
              "column": 87,
              "line": 34
            },
            "start": {
              "byte": 711,
              "column": 0,
              "line": 24
            }
          },
          "start_line": 24
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/recognize",
        "identity": "recognize",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/recognize/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::function:recognize",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Recognize a surface word as root plus atomic operator sequence.",
          "text": "Recognize a surface word as root plus atomic operator sequence."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 25,
          "span": {
            "end": {
              "byte": 910,
              "column": 73,
              "line": 25
            },
            "start": {
              "byte": 841,
              "column": 4,
              "line": 25
            }
          },
          "start_line": 25
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/recognize",
        "identity": "recognize",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/round_trip/fact/declaration",
      "convention": {
        "dialect": "python",
        "namespace": "python.source-metadata",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "callable-declaration",
      "native": {
        "id": "round_trip",
        "value": {
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::function:round_trip",
          "decorators": [],
          "kind": "function",
          "name": "round_trip",
          "parent_identity": null,
          "qualified_name": "round_trip",
          "signature": "def round_trip(surface: str, operators: Sequence[OperatorName], roots: Sequence[str]) -> bool"
        }
      },
      "origin": "native",
      "projection": {
        "canonical_field": "declared_surface",
        "loss": "behavior not inferred",
        "mapping_version": "python-surfaces@2"
      },
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 54,
          "span": {
            "end": {
              "byte": 2075,
              "column": 37,
              "line": 54
            },
            "start": {
              "byte": 1815,
              "column": 0,
              "line": 50
            }
          },
          "start_line": 50
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "syntactically-observed",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/round_trip",
        "identity": "round_trip",
        "scope": "symbol"
      }
    },
    {
      "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/round_trip/fact/documentation/0",
      "convention": {
        "dialect": "python",
        "namespace": "python.pep257",
        "version": "Python 3.12"
      },
      "extraction": {
        "configuration_sha256": "45ea84c96bf193e05d67adb298ecc098b45c05a9e59f0851e9b007638a16eef3",
        "implementation_sha256": "715764e2dd9656898c01284c2884abb283d270a0a8c65a4f08c71b74c5830ca6",
        "reader_id": "python-ast",
        "reader_version": "2.0.0",
        "support": "implemented-and-tested"
      },
      "kind": "documentation",
      "native": {
        "id": null,
        "value": {
          "attachment": "native_docstring",
          "attachment_identity": "python:The-Interdependency/zfae:zfae/vernacular_floor/transformation_assembly.py::function:round_trip",
          "description": null,
          "fields": [],
          "format": "rest",
          "metadata_kind": "documentation",
          "summary": "Check recognize followed by emit on a declared lexicon surface.",
          "text": "Check recognize followed by emit on a declared lexicon surface."
        }
      },
      "origin": "native",
      "source": {
        "content_sha256": "a45dafdc84495dfad6405e7282a8318291869a3ffc8614d720dcb90794284825",
        "file": "zfae/vernacular_floor/transformation_assembly.py",
        "location": {
          "end_line": 51,
          "span": {
            "end": {
              "byte": 1983,
              "column": 73,
              "line": 51
            },
            "start": {
              "byte": 1914,
              "column": 4,
              "line": 51
            }
          },
          "start_line": 51
        },
        "repository": "The-Interdependency/zfae",
        "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8"
      },
      "standing": "declared",
      "subject": {
        "address": "msdmd://The-Interdependency%2Fzfae@snapshot%3A5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8/zfae/vernacular_floor/transformation_assembly.py#subject/symbol/round_trip",
        "identity": "round_trip",
        "scope": "symbol"
      }
    }
  ]
  ),
  "gaps": [],
  "reader_manifests": [
    {
      "convention": "python.source-metadata",
      "dependencies": [
        "python-stdlib:ast",
        "python-stdlib:tokenize",
        "docstring-parser==0.18.0"
      ],
      "detection": [
        ".py",
        ".pyi",
        ".pyw"
      ],
      "entry_point": "msdmd.readers:_read_python",
      "execution_policy": "parse only; never import or evaluate",
      "feature_subset": [
        "qualified symbols and signatures",
        "AST/token comment attachment shared with module_projection",
        "ReST/Google/NumPy docstring fields",
        "lexically scoped imports",
        "literal __all__"
      ],
      "known_limitations": [
        "runtime effects and dynamic imports/exports are not executed"
      ],
      "reader_id": "python-ast",
      "scope_attachment": "module and qualified symbol",
      "specification": "https://docs.python.org/3/reference/",
      "support": "implemented-and-tested",
      "supported_versions": [
        "Python 3 syntax accepted by the running ast parser"
      ],
      "unknown_field_policy": "preserve source expression or emit dynamic-unresolved diagnostic",
      "version": "2.0.0"
    },
    {
      "convention": "msdmd.ratios-line",
      "dependencies": [
        "msdmd.parsers.universal"
      ],
      "detection": [
        "supported line-comment source containing ratios:"
      ],
      "entry_point": "msdmd.readers:_read_ratios",
      "execution_policy": "text parse only; never run ratio computers",
      "feature_subset": [
        "opening/closing placement",
        "named ratio/value preservation"
      ],
      "reader_id": "msdmd-ratios",
      "scope_attachment": "file boundary occurrence",
      "specification": "The-Interdependency/skill-lib ratios/SKILL.md",
      "support": "implemented-and-tested",
      "supported_versions": [
        "named ratios line v1"
      ],
      "unknown_field_policy": "preserve hmmm as an explicit value",
      "version": "1.0.0"
    },
    {
      "convention": "json.document",
      "dependencies": [
        "python-stdlib:json"
      ],
      "detection": [
        ".json"
      ],
      "entry_point": "msdmd.readers:_read_json",
      "execution_policy": "parse only; no reference resolution",
      "feature_subset": [
        "complete typed document tree",
        "package.json dependency classes"
      ],
      "reader_id": "json-stdlib",
      "scope_attachment": "document and JSON Pointer",
      "specification": "RFC 8259",
      "support": "implemented-and-tested",
      "supported_versions": [
        "RFC 8259 JSON"
      ],
      "unknown_field_policy": "preserve in typed document tree",
      "version": "1.0.0"
    },
    {
      "convention": "toml.document",
      "dependencies": [
        "python-stdlib:tomllib"
      ],
      "detection": [
        ".toml"
      ],
      "entry_point": "msdmd.readers:_read_toml",
      "execution_policy": "parse only; never invoke build backends",
      "feature_subset": [
        "complete typed document tree",
        "pyproject project/build dependency classes"
      ],
      "reader_id": "toml-stdlib",
      "scope_attachment": "document and TOML key path",
      "specification": "TOML 1.0.0 and Python packaging metadata specifications",
      "support": "implemented-and-tested",
      "supported_versions": [
        "TOML accepted by the running tomllib parser"
      ],
      "unknown_field_policy": "preserve in typed document tree",
      "version": "1.0.0"
    },
    {
      "convention": "markdown.yaml-frontmatter",
      "dependencies": [
        "PyYAML==6.0.3"
      ],
      "detection": [
        ".md",
        ".mdx"
      ],
      "entry_point": "msdmd.readers:_read_markdown",
      "execution_policy": "text parse only; never execute MDX",
      "feature_subset": [
        "nested frontmatter and typed values",
        "safe acyclic aliases",
        "multiline scalars"
      ],
      "reader_id": "markdown-frontmatter",
      "scope_attachment": "document",
      "specification": "https://yaml.org/spec/1.2.2/",
      "support": "implemented-and-tested",
      "supported_versions": [
        "YAML 1.2 core scalar subset with typed scalar-key preservation"
      ],
      "unknown_field_policy": "preserve typed tree; reject duplicate keys, custom tags, cyclic aliases and merge dialects",
      "version": "2.0.0"
    },
    {
      "convention": "yaml.core",
      "dependencies": [
        "PyYAML==6.0.3"
      ],
      "detection": [
        ".yml",
        ".yaml"
      ],
      "entry_point": "msdmd.readers:_read_yaml",
      "execution_policy": "text parse only; no tags, templates, actions, or includes",
      "feature_subset": [
        "typed nested mappings/sequences",
        "flow syntax",
        "acyclic aliases",
        "multiline scalars"
      ],
      "known_limitations": [
        "custom tags, merge keys and cyclic aliases rejected; keys retain lexical strings"
      ],
      "reader_id": "yaml-core",
      "scope_attachment": "document and structural path",
      "specification": "https://yaml.org/spec/1.2.2/",
      "support": "implemented-and-tested",
      "supported_versions": [
        "YAML 1.2 core with typed scalar-key preservation"
      ],
      "unknown_field_policy": "diagnose unsupported syntax; preserve raw source by digest",
      "version": "2.0.0"
    },
    {
      "convention": "typescript.source-metadata",
      "dependencies": [
        "Node.js",
        "typescript==5.8.3"
      ],
      "detection": [
        ".js",
        ".jsx",
        ".mjs",
        ".cjs",
        ".ts",
        ".tsx",
        ".mts",
        ".cts"
      ],
      "entry_point": "msdmd.readers:_read_typescript",
      "execution_policy": "trusted parser worker only; inspected code never executed",
      "feature_subset": [
        "syntax-tree symbol ownership",
        "multiline signatures",
        "imports and reexports",
        "compiler JSDoc tags with unknown tag text preserved"
      ],
      "known_limitations": [
        "not a TSDoc validator",
        "no type checking, config loading, import resolution or target execution"
      ],
      "reader_id": "typescript-compiler",
      "scope_attachment": "compiler AST module/symbol",
      "specification": "https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html",
      "support": "implemented-and-tested",
      "supported_versions": [
        "TypeScript 5.8.3 parser accepting JS/JSX/TS/TSX/MJS/MTS/CTS/CJS"
      ],
      "unknown_field_policy": "retain raw documentation tags and report parse diagnostics",
      "version": "2.0.0"
    },
    {
      "convention": "github.codeowners",
      "dependencies": [],
      "detection": [
        "CODEOWNERS",
        ".github/CODEOWNERS",
        "docs/CODEOWNERS"
      ],
      "entry_point": "msdmd.readers:_read_codeowners",
      "execution_policy": "text parse only",
      "feature_subset": [
        "ordered pattern and owner extraction"
      ],
      "reader_id": "github-codeowners",
      "scope_attachment": "ordered path rule",
      "specification": "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",
      "support": "implemented-and-tested",
      "supported_versions": [
        "GitHub CODEOWNERS line grammar"
      ],
      "unknown_field_policy": "diagnose malformed rules; do not infer operational ownership",
      "version": "1.0.0"
    },
    {
      "convention": "shell.source-metadata",
      "dependencies": [],
      "detection": [
        ".sh",
        ".bash",
        ".zsh",
        ".fish",
        "extensionless shebang scripts"
      ],
      "entry_point": "msdmd.readers:_read_shell",
      "execution_policy": "text parse only; never source or execute",
      "feature_subset": [
        "shebang",
        "ShellCheck directives"
      ],
      "reader_id": "shell-static",
      "scope_attachment": "file",
      "specification": "POSIX shebang convention and ShellCheck directives",
      "support": "implemented-and-tested",
      "supported_versions": [
        "declaration extraction only"
      ],
      "unknown_field_policy": "preserve directive text",
      "version": "1.0.0"
    },
    {
      "convention": "systemd.unit",
      "dependencies": [],
      "detection": [
        ".service",
        ".socket",
        ".timer",
        ".path",
        ".target"
      ],
      "entry_point": "msdmd.readers:_read_systemd",
      "execution_policy": "text parse only; never invoke systemd",
      "feature_subset": [
        "ordered sections",
        "repeated directives",
        "continuation lines"
      ],
      "reader_id": "systemd-unit",
      "scope_attachment": "unit section and directive occurrence",
      "specification": "https://www.freedesktop.org/software/systemd/man/latest/systemd.syntax.html",
      "support": "implemented-and-tested",
      "supported_versions": [
        "section/key/value declaration extraction"
      ],
      "unknown_field_policy": "preserve key/value and order without interpreting runtime effect",
      "version": "1.0.0"
    },
    {
      "convention": "git.ignore",
      "dependencies": [],
      "detection": [
        ".gitignore"
      ],
      "entry_point": "msdmd.readers:_read_gitignore",
      "execution_policy": "text parse only; never invoke Git matching",
      "feature_subset": [
        "pattern order",
        "negation",
        "anchoring",
        "directory-only flag"
      ],
      "reader_id": "gitignore-lines",
      "scope_attachment": "repository path rule",
      "specification": "https://git-scm.com/docs/gitignore",
      "support": "implemented-and-tested",
      "supported_versions": [
        "ordered pattern declarations"
      ],
      "unknown_field_policy": "preserve pattern text without evaluating matches",
      "version": "1.0.0"
    },
    {
      "convention": "python.requirements-file",
      "dependencies": [],
      "detection": [
        "requirements*.txt",
        "constraints*.txt"
      ],
      "entry_point": "msdmd.readers:_read_requirements",
      "execution_policy": "text parse only; never install or resolve packages",
      "feature_subset": [
        "requirement text",
        "package name",
        "options",
        "ordered source lines"
      ],
      "known_limitations": [
        "does not resolve includes, environment markers, URLs, or indexes"
      ],
      "reader_id": "python-requirements",
      "scope_attachment": "requirements document line",
      "specification": "PyPA requirements file format",
      "support": "partial",
      "supported_versions": [
        "one-line requirement and option subset"
      ],
      "unknown_field_policy": "preserve text and redact URL credentials",
      "version": "1.0.0"
    },
    {
      "convention": "license.text",
      "dependencies": [],
      "detection": [
        "LICENSE",
        "LICENSE.txt",
        "COPYING",
        "COPYING.txt"
      ],
      "entry_point": "msdmd.readers:_read_license",
      "execution_policy": "text parse only",
      "feature_subset": [
        "declared/detected expression",
        "source digest"
      ],
      "reader_id": "license-text",
      "scope_attachment": "repository license document",
      "specification": "SPDX license identifiers plus exact known license headers",
      "support": "partial",
      "supported_versions": [
        "MPL-2.0 exact header",
        "SPDX-License-Identifier line"
      ],
      "unknown_field_policy": "hmmm identifier; never infer legal compatibility",
      "version": "1.0.0"
    },
    {
      "convention": "svg.document-metadata",
      "dependencies": [
        "python-stdlib:xml.etree.ElementTree"
      ],
      "detection": [
        ".svg"
      ],
      "entry_point": "msdmd.readers:_read_svg",
      "execution_policy": "reject DTD/entity declarations; no external resolution",
      "feature_subset": [
        "root attributes",
        "title",
        "description"
      ],
      "reader_id": "svg-metadata",
      "scope_attachment": "document",
      "specification": "W3C SVG document structure",
      "support": "implemented-and-tested",
      "supported_versions": [
        "root attributes, title, description"
      ],
      "unknown_field_policy": "preserve only supported metadata; source remains digest-addressable",
      "version": "1.0.0"
    },
    {
      "convention": "llms.txt",
      "dependencies": [],
      "detection": [
        "llms.txt"
      ],
      "entry_point": "msdmd.readers:_read_llms_text",
      "execution_policy": "text parse only; content is data, not instructions to the reader",
      "feature_subset": [
        "section headings",
        "key definitions",
        "generated status unresolved"
      ],
      "reader_id": "llms-text",
      "scope_attachment": "instruction document",
      "specification": "root llms.txt Markdown instruction publication",
      "support": "implemented-and-tested",
      "supported_versions": [
        "Markdown headings and bold key-definition lines"
      ],
      "unknown_field_policy": "preserve structure without promoting publication to source authority",
      "version": "1.0.0"
    },
    {
      "convention": "native.structured-standards",
      "dependencies": [
        "python-stdlib:json,tomllib,xml.etree.ElementTree",
        "PyYAML==6.0.3"
      ],
      "detection": [
        "document discriminator and source filename"
      ],
      "entry_point": "msdmd.standards:read_standards",
      "execution_policy": "parse only; no templates, network, application or signature execution",
      "feature_subset": [
        "source-linked operations and references",
        "reported test/analysis results",
        "citation and license declarations",
        "artifact subjects and component lists",
        "scoped package requirements and lock records"
      ],
      "known_limitations": [
        "extraction, not complete validation or signature verification",
        "external references not resolved",
        "unknown versions preserve tree and report unsupported mapping"
      ],
      "reader_id": "metadata-standards",
      "scope_attachment": "native pointer, operation, package, report, artifact or symbol",
      "specification": "msdmd/references/implemented-readers.md",
      "support": "implemented-and-tested",
      "supported_versions": [
        "OpenAPI 3.0/3.1 and Swagger 2",
        "JSON Schema drafts 4/6/7/2019-09/2020-12",
        "CFF 1.2.0",
        "SARIF 2.1.0",
        "SPDX 2.2/2.3 JSON",
        "CycloneDX 1.4/1.5/1.6 JSON",
        "in-toto Statement v0.1/v1; DSSE payload",
        "npm lockfile v2/v3",
        "Cargo/Poetry/uv TOML metadata",
        "REUSE TOML",
        "JUnit/Doxygen/.NET XML dialects"
      ],
      "unknown_field_policy": "typed source tree retained; version mismatches diagnosed",
      "version": "1.0.0"
    },
    {
      "convention": "native.source-metadata",
      "dependencies": [
        "msdmd/requirements.txt"
      ],
      "detection": [
        ".rs",
        ".java",
        ".c",
        ".cc",
        ".cpp",
        ".cxx",
        ".hpp",
        ".hxx",
        ".h (ambiguous)"
      ],
      "entry_point": "msdmd.grammar_code:read_grammar",
      "execution_policy": "parse only; no compiler, macro expansion or annotation processing",
      "feature_subset": [
        "named declarations",
        "Rustdoc/Javadoc/Doxygen raw docs and repeated tags",
        "imports",
        "attributes",
        "SPDX headers"
      ],
      "reader_id": "native-grammars",
      "scope_attachment": "lexical symbols and adjacent documentation",
      "specification": "pinned tree-sitter language grammars",
      "support": "partial",
      "supported_versions": [
        "Rust grammar 0.24.2",
        "Java grammar 0.23.5",
        "C grammar 0.24.2",
        "C++ grammar 0.23.4"
      ],
      "unknown_field_policy": "preserve raw documentation and syntax; diagnose macro/conditional context",
      "version": "1.0.0"
    },
    {
      "convention": "go.source-metadata",
      "dependencies": [
        "tree-sitter==0.25.2",
        "tree-sitter-go==0.25.0"
      ],
      "detection": [
        ".go"
      ],
      "entry_point": "msdmd.go_code:read_go",
      "execution_policy": "installed grammar only; never compile, import or generate target code",
      "feature_subset": [
        "qualified declarations and receiver methods",
        "struct tag literals",
        "native comment attachment",
        "import literals",
        "inert compiler/build/generation directives",
        "SPDX headers"
      ],
      "known_limitations": [
        "Go 1.26 new(expression) forms are not fully supported by this grammar",
        "no build selection, type checking, import resolution, tag interpretation or target execution"
      ],
      "reader_id": "go-tree-sitter",
      "scope_attachment": "package, lexical symbol, declaration group or module",
      "specification": "https://go.dev/doc/comment",
      "support": "partial",
      "supported_versions": [
        "Go syntax accepted by tree-sitter-go 0.25.0"
      ],
      "unknown_field_policy": "preserve raw source spans; grammar errors invalidate required coverage",
      "version": "1.0.0"
    },
    {
      "convention": "go.module-file",
      "dependencies": [
        "python-stdlib"
      ],
      "detection": [
        "go.mod",
        "go.work",
        "go.sum"
      ],
      "entry_point": "msdmd.go_modules:read_go_modules",
      "execution_policy": "text parse only; never invoke go or network",
      "feature_subset": [
        "module identity",
        "direct/indirect requirements",
        "replacement and exclusion declarations",
        "workspace paths",
        "quoted tokens",
        "inert directives",
        "recorded checksums"
      ],
      "known_limitations": [
        "no module path/version validation, resolution, downloads, checksum verification or multiline string tokens"
      ],
      "reader_id": "go-module-files",
      "scope_attachment": "owning package/workspace file",
      "specification": "https://go.dev/ref/mod",
      "support": "partial",
      "supported_versions": [
        "line-based module/workspace directives; h1 checksum rows"
      ],
      "unknown_field_policy": "retain raw tokens and comments; unknown directives remain unsupported",
      "version": "1.0.0"
    }
  ],
  "reader_runs": [
    {
      "facts_emitted": 202,
      "files_matched": 14,
      "reader_id": "python-ast",
      "reader_version": "2.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 54,
      "files_matched": 9,
      "reader_id": "msdmd-ratios",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 1,
      "files_matched": 1,
      "reader_id": "json-stdlib",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 2,
      "files_matched": 1,
      "reader_id": "toml-stdlib",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 5,
      "reader_id": "markdown-frontmatter",
      "reader_version": "2.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "yaml-core",
      "reader_version": "2.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "typescript-compiler",
      "reader_version": "2.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "github-codeowners",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "shell-static",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "systemd-unit",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 8,
      "files_matched": 1,
      "reader_id": "gitignore-lines",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "python-requirements",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "partial"
    },
    {
      "facts_emitted": 1,
      "files_matched": 1,
      "reader_id": "license-text",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "partial"
    },
    {
      "facts_emitted": 1,
      "files_matched": 1,
      "reader_id": "svg-metadata",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "llms-text",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 2,
      "reader_id": "metadata-standards",
      "reader_version": "1.0.0",
      "status": "applied",
      "support": "implemented-and-tested"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "native-grammars",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "partial"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "go-tree-sitter",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "partial"
    },
    {
      "facts_emitted": 0,
      "files_matched": 0,
      "reader_id": "go-module-files",
      "reader_version": "1.0.0",
      "status": "not-applicable",
      "support": "partial"
    }
  ],
  "repo": "The-Interdependency/zfae",
  "requirements": [],
  "schema": "the-interdependency.msdmd-collection",
  "schema_version": "2.0.0",
  "source": {
    "dirty_worktree": "hmmm",
    "exclusion_accounting": "configured-patterns",
    "git_head": "hmmm",
    "repository": "The-Interdependency/zfae",
    "revision": "snapshot:5261eab6250bae4839e4fa97f07ff84de6f32b2271c54ed368f1de83109881b8",
    "revision_kind": "content-snapshot",
    "scope": "configured in-scope files; excluded subtrees are reported without traversing",
    "snapshot_complete": true,
    "snapshot_sha256": "63e15b7b35d26432b6ad4a6d7f8cbbcaaa904be953d4e0057984fc75672b8318"
  }
});
