# === RATIOS ===
# loc_comments: hmmm
# unresolved: edcmbone_embedding_contract
# === END RATIOS ===
"""Artifact emission and loading for vernacular floor gonols."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Iterable, Iterator, Mapping

from .assignment import FloorGonol


def gonol_to_record(gonol: FloorGonol) -> dict[str, object]:
    """Serialize a floor gonol to a JSONL-safe record."""

    return {
        "label": gonol.label,
        "r": gonol.r,
        "theta": gonol.theta,
        "z": gonol.z,
        "w_real": gonol.w.real,
        "w_imag": gonol.w.imag,
    }


def gonol_from_record(record: Mapping[str, object]) -> FloorGonol:
    """Load a floor gonol from a JSONL-safe record."""

    return FloorGonol(
        label=str(record["label"]),
        r=float(record["r"]),
        theta=float(record["theta"]),
        z=int(record["z"]),
        w=complex(float(record["w_real"]), float(record["w_imag"])),
    )


def write_floor(path: str | Path, gonols: Iterable[FloorGonol]) -> None:
    """Write a floor artifact as JSONL."""

    target = Path(path)
    lines = [json.dumps(gonol_to_record(g), sort_keys=True) for g in gonols]
    target.write_text("\n".join(lines) + ("\n" if lines else ""), encoding="utf-8")


def load_floor(path: str | Path) -> Iterator[FloorGonol]:
    """Yield floor gonols from a JSONL artifact."""

    for line in Path(path).read_text(encoding="utf-8").splitlines():
        if line.strip():
            yield gonol_from_record(json.loads(line))


def embedding_rows(gonols: Iterable[FloorGonol]) -> Iterator[tuple[str, tuple[float, float, float]]]:
    """Emit simple instrument hooks for edcmbone-style intrinsic-dimension probes."""

    for gonol in gonols:
        yield gonol.label, (gonol.r, gonol.theta, float(gonol.z))


# === RATIOS ===
# loc_comments: hmmm
# unresolved: edcmbone_embedding_contract
# === END RATIOS ===
