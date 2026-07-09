#!/usr/bin/env python3
"""Minimal MODULE_BUILD validator for the repository."""
from __future__ import annotations

import re
import sys
from pathlib import Path

REQUIRED = {"id", "module_name", "module_kind", "summary", "owner", "public_surface", "internal_surface", "tests", "rollout", "rollback", "auth_boundary", "storage_boundary", "network_boundary", "user_data_boundary", "admin_only"}
BLOCK = re.compile(r"^# === MODULE_BUILD ===$(.*?)^# === END MODULE_BUILD ===$", re.M | re.S)
FIELD = re.compile(r"^#\s{0,3}(?:id|[a-z_]+):", re.M)


def main() -> int:
    failures = []
    seen = 0
    for path in Path("zfae").rglob("*.py"):
        text = path.read_text(encoding="utf-8")
        for match in BLOCK.finditer(text):
            seen += 1
            fields = set()
            for line in match.group(1).splitlines():
                cleaned = line.removeprefix("#").strip()
                if ":" in cleaned:
                    fields.add(cleaned.split(":", 1)[0].strip())
            missing = REQUIRED - fields
            if missing:
                failures.append(f"{path}: missing {', '.join(sorted(missing))}")
    if failures:
        print("\n".join(failures))
        return 1
    print(f"MODULE_BUILD blocks valid: {seen}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
