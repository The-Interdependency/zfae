# === RATIOS ===
# loc_comments: hmmm
# unresolved: upstream_codebook_path
# === END RATIOS ===
"""Read-only import boundary for the upstream public gonol glyph codebook."""

from __future__ import annotations

import math
from pathlib import Path
from typing import Iterable, Tuple

EXPECTED_PUBLIC_GLYPH_COUNT = (100 + 50 + 7)


def load_codebook(path: str | Path) -> Tuple[str, ...]:
    """Load glyphs verbatim from an upstream text file, one glyph per line."""

    codebook_path = Path(path)
    glyphs = tuple(line.rstrip("\n") for line in codebook_path.read_text(encoding="utf-8").splitlines())
    validate_codebook(glyphs)
    return glyphs


def validate_codebook(glyphs: Iterable[str]) -> None:
    """Assert imported glyph cardinality, uniqueness, invertibility, and primality."""

    items = tuple(glyphs)
    if len(items) != EXPECTED_PUBLIC_GLYPH_COUNT:
        raise ValueError("imported public glyph count does not match the field cardinality")
    if len(set(items)) != len(items):
        raise ValueError("imported public glyph codebook contains duplicate entries")
    if any(item == "" for item in items):
        raise ValueError("glyph entries must be explicit; use a literal space for the origin")
    if not is_prime(len(items)):
        raise ValueError("imported public glyph count is not prime")


def is_prime(n: int) -> bool:
    """Return True when *n* is prime using a small deterministic check."""

    if n < 2:
        return False
    if n in (2, 3):
        return True
    if n % 2 == 0:
        return False
    limit = int(math.isqrt(n))
    for candidate in range(3, limit + 1, 2):
        if n % candidate == 0:
            return False
    return True


# === RATIOS ===
# loc_comments: hmmm
# unresolved: upstream_codebook_path
# === END RATIOS ===
