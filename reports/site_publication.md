# Publication check — 12 November 2026

The four laboratories use the shared bilingual formative assessment component.
Each has five missions, 100 first-attempt points, local persistence, practice,
reset and JSON export. A static formative quiz necessarily delivers its checking
logic to the browser; no confidential answer-key documents or instructor/sample
mapping files are included. This is not a secure assessment system.

LAB01 AmpWrap work is paused. Authentic demonstration reads and real QC outputs
were acquired locally but are excluded from this publication. The reduced
AmpWrap run stopped at FIGARO due to a missing scipy dependency; no validated
ASV or taxonomy results from that run are claimed. Completion requires repairing
that isolated environment, finishing the benchmark and reviewing its results.

Publication excludes environments, local tools/databases, source FASTQ,
intermediate results, case archives, instructor keys and mappings. The original
SEA4BLUE archive and instructor notes remain locally but are removed from the
tracked public tree; Sea4Blue-student.zip includes only the student resources.
Previous Git history is not rewritten.

The existing main-branch publication workflow is reused without changing Pages
settings. Quarto full render and Chromium four-laboratory regression tests are
run before commit. No further scientific computations are started.

The first remote build exposed an ignored HTML include and absent R on the
runner. Includes are now explicitly tracked. The deployment workflow verifies
and publishes the committed, locally rendered `_site` instead of recomputing
course R examples on GitHub. Future source edits must be rendered locally before
commit. Pages branch and repository settings are unchanged.
