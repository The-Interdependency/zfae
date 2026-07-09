from fractions import Fraction

import pytest

from zfae import GonalConstruct, construct_gonal


def test_rejects_degenerate_side_counts() -> None:
    with pytest.raises(ValueError, match="at least three"):
        construct_gonal(2)


def test_default_construct_has_reduced_phase_cycle() -> None:
    carrier = construct_gonal(5)

    assert isinstance(carrier, GonalConstruct)
    assert carrier.sides == 5
    assert carrier.labels() == ("g0", "g1", "g2", "g3", "g4")
    assert carrier.phases() == (
        Fraction(0, 1),
        Fraction(1, 5),
        Fraction(2, 5),
        Fraction(3, 5),
        Fraction(4, 5),
    )


def test_preserves_provenance() -> None:
    carrier = construct_gonal(3, labels=("psi", "phi", "omega"), provenance="repair-handoff")

    assert carrier.provenance == "repair-handoff"
    assert carrier.labels() == ("psi", "phi", "omega")


def test_rejects_label_count_mismatch() -> None:
    with pytest.raises(ValueError, match="labels length"):
        construct_gonal(4, labels=("a", "b", "c"))
