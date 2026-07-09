#!/usr/bin/env python3
"""Check that new Python files are bookended by byte-identical RATIOS blocks."""
from __future__ import annotations

import re
import sys
from pathlib import Path

BLOCK = re.compile(r"# === RATIOS ===\n.*?# === END RATIOS ===", re.S)


def main() -> int:
    failures = []
    for path in Path("zfae/vernacular_floor").rglob("*.py"):
        text = path.read_text(encoding="utf-8")
        blocks = BLOCK.findall(text)
        if len(blocks) < 2 or blocks[0] != blocks[-1] or not text.startswith(blocks[0]):
            failures.append(str(path))
    if failures:
        print("RATIOS bookend failures:")
        print("\n".join(failures))
        return 1
    print("RATIOS bookends valid")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
