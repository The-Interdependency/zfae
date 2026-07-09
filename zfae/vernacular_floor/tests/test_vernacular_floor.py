# ratios: loc_comments=45:1 imports_exports=9:1 calls_definitions=28:7
"""Contract tests for the vernacular floor scaffold."""

from __future__ import annotations

import inspect
import tempfile
import unittest

from zfae.vernacular_floor.assignment import FloorGonol, assign_from_relations, compose_sentence, identity_holds, origin
from zfae.vernacular_floor.codebook_import import EXPECTED_PUBLIC_GLYPH_COUNT, is_prime, validate_codebook
from zfae.vernacular_floor.floor_artifact import load_floor, write_floor
from zfae.vernacular_floor.manifest import floor_manifest, unresolved_membership_rule
from zfae.vernacular_floor.transformation_assembly import OperatorName, emit, recognize, round_trip


class VernacularFloorTests(unittest.TestCase):
    def test_manifest_keeps_membership_hmmm(self) -> None:
        self.assertEqual(floor_manifest().membership_rule, "hmmm")
        with self.assertRaises(NotImplementedError):
            unresolved_membership_rule("run")

    def test_codebook_count_and_primality_are_asserted_after_import(self) -> None:
        glyphs = tuple(chr(0x2500 + i) for i in range(157))
        validate_codebook(glyphs)
        self.assertEqual(EXPECTED_PUBLIC_GLYPH_COUNT, 157)
        self.assertTrue(is_prime(len(glyphs)))

    def test_static_membership_path_has_no_literal_count(self) -> None:
        source = inspect.getsource(unresolved_membership_rule)
        self.assertNotIn("157", source)

    def test_origin_identity_and_closure(self) -> None:
        run = assign_from_relations("run", {"hypernym": ["move"], "antonym": ["stop"]})
        speak = FloorGonol("speak", 1.0, 2.0)
        self.assertTrue(identity_holds([run, speak]))
        sentence = compose_sentence([run, speak, origin()])
        self.assertIsInstance(sentence, FloorGonol)

    def test_artifact_round_trip(self) -> None:
        gonols = [FloorGonol("run", 1.0, 2.0), FloorGonol(" ", 0.0, 0.0)]
        with tempfile.NamedTemporaryFile() as handle:
            write_floor(handle.name, gonols)
            self.assertEqual(list(load_floor(handle.name)), gonols)

    def test_operator_variants_are_independent(self) -> None:
        im = OperatorName("im", selection_prefixes=("p", "b", "m"))
        il = OperatorName("il", selection_prefixes=("l",))
        self.assertEqual(emit("proper", [im]), "improper")
        with self.assertRaises(ValueError):
            emit("proper", [il])
        root, ops = recognize("improper", [im, il], ["proper"])
        self.assertEqual(root, "proper")
        self.assertEqual(ops, (im,))
        self.assertTrue(round_trip("improper", [im, il], ["proper"]))


if __name__ == "__main__":
    unittest.main()
# ratios: loc_comments=45:1 imports_exports=9:1 calls_definitions=28:7
