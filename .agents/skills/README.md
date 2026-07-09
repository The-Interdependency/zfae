# Repo-local agent skills

This repo consumes The Interdependency organization skill library.

Canonical source:
- Preferred: `The-Interdependency/skill-lib`
- Temporary source: `The-Interdependency/a0/skill-lib`

Installed skills:
- `msdmd/` — Module Self-Declared Metadata Markdown
- `test-build/` — test contract metadata blocks
- `meta-module-build/` — metadata-first module scaffolding
- `ratios/` — module composition ratios (single-line `ratios:` seal)

Source commit: `The-Interdependency/skill-lib` @ `d0f6209`. The `ratios/` skill
and the `msdmd/` parser/SKILL were vendored/refreshed from that commit so
`ratios/ratios_check.py` can import `parse_ratios`/`ratios_placement` from the
msdmd universal parser (the previously vendored parser predated them).

Agents working in this repo should read `meta-module-build/SKILL.md` before
creating new modules, routes, services, schemas, adapters, workers, engines,
UI panels, migrations, or experiments.

The `zfae/vernacular_floor/` scaffold records its composition ratios in the
canonical single-line form; verify with:

```bash
python .agents/skills/ratios/ratios_check.py --root zfae/vernacular_floor
```
