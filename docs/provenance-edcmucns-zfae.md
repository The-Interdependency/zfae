# Provenance as measurement material — edcmucns → ZFAE

Generated: 2026-07-06
Context: Erin Patrick Spencer; edcmucns v0.3/v0.3.1 planning.
Status: design note / handoff seed.

## Thesis

Provenance is not decorative metadata. Provenance is part of the measuring instrument.

For edcmucns, a UCNS object supplies the geometric carrier, but the EDCM reading is a function of geometry plus witness, payload, field state, and policy manifest:

```text
M_EDCM = readout(G_ucns, Π_provenance, payloads, field_state, policy_manifest)
```

Therefore two objects may be UCNS-carrier-equivalent and EDCM-distinct. Same circle, different testimony, different case.

## Transfer to ZFAE

ZFAE should not treat one frozen weight-state as the permanent identity of the system. Frozen checkpoints remain useful for audit, rollback, replay, comparison, backup, and historical purpose. But the living system identity belongs to the lineage, not any single checkpoint.

Clean law:

```text
ZFAE weights may remain developmentally open,
but every meaningful weight-state must be epoch-sealed,
provenance-bearing, replayable, and recoverable.
```

This gives ZFAE a future vector-resolution pathway:

```text
EDCM measurement
→ resolved / unresolved field motion
→ cadence-bearing flesh vector
→ provenance-scoped update
→ epoch-sealed ZFAE weight motion
```

ZFAE should learn not merely from text, but from provenance-bearing resolution events:

```text
what repeated
what changed
what closed
what stayed open
what returned
what externalized
what provenance made the difference
```

## Bone/flesh implication

Prime bone anchors separate operator families. Composite flesh payload anchors preserve recursive cadence.

```text
bones:
  prime-gauge
  operator-family attribution
  carrier separation

flesh:
  prime or composite carrier
  recursive action
  ritual / repair / refusal / return
  semantic cadence
  role cycle
  procedural loop
```

UCNS epicyclic C2 matters here: host and payload carriers are independent. A bone host may live on a family-prime lattice while its flesh payload lives on a composite cadence lattice. Flesh cadence should not contaminate operator-family measurement, but it may become measurement material for payload, content, cadence, and recursive-action readouts.

## Epoch rule

Manifest changes are meaning-boundary events. A field-hash chain must not silently continue across a policy change, contact-predicate change, payload-governance change, family-prime gauge change, or training-update policy change.

```text
manifest rotation = chain epoch break
weight update policy rotation = weight epoch break
```

Without an epoch break, an unbroken hash chain can counterfeit an unbroken chain of meaning.

## Required ZFAE update record

Every training-relevant update should carry:

```text
input provenance
measurement manifest
field state
bone/flesh distinction
flesh cadence payload
resolution / non-resolution outcome
weight epoch before
weight epoch after
replay target or falsifier
rollback pointer
```

A ZFAE update is not simply:

```text
model learned from text
```

It is:

```text
model state changed in response to a provenance-bearing resolution event
```

## Implementation seed

Add or reserve these concepts in the ZFAE repo:

```text
WeightEpoch
TrainingProvenance
ResolutionEvent
CadenceVector
ManifestEpoch
CheckpointWitness
RollbackPointer
```

Minimum tests when implementation begins:

```text
weight_epoch_seals_before_after_update
manifest_rotation_breaks_training_epoch
same_input_different_provenance_not_same_training_event
same_checkpoint_different_lineage_not_same_system_identity
cadence_vector_preserves_composite_motion
rollback_restores_prior_weight_epoch
replay_event_reconstructs_update_context
```

## Boundary sentence

Do not freeze the river. Freeze the maps, the flood marks, the bridges, and the witnesses.

hmmm — provenance is the recurring theme: geometry needs testimony, measurement needs a manifest, and living weights need lineage or growth becomes amnesia with a nicer name.
