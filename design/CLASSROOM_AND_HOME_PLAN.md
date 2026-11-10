# Classroom, browser and offline delivery plan

## Available infrastructure

- The computer room provides student PCs with **Linux and RStudio installed**.
- Labs run for **150 min each** (4 sessions, 10 practical hours in a 24-meeting course).
- The teacher's project already lives in `/media/shared2/Lapo_micro_mol_2026` on their machine. Do not assume this path exists in remote CI/Binder, and do not overwrite that checkout.
- No exam page or mock exam content on the website.

## Preferred principle: real fundamentals, replayed expensive computations

| Tool/task | In class | From home on website |
|---|---|---|
| Directory/file inspection | Actual Linux terminal (`pwd`, `ls`, `cd`, `head`, `wc` only when useful) | A minimal browser terminal with a small explicitly virtual filesystem |
| AmpWrap/FastQC/Cutadapt/DADA2 | Show authentic command; expensive steps return recorded logs/data | Same command and reports via transparent replay |
| Read CSV, inspect data, simple plots | **Real RStudio**, small supplied input data | Download R script and dataset; interactive browser figure plus verified static fallback |
| Phyloseq/SEA4BLUE analyses | Real where feasible, otherwise provided precomputed R objects/figures | Guided browser evidence; optional remote R after compatibility checks |
| Genome QC/assembly/annotation | Command replay with precomputed genuine results | Same replay results, browser genome viewer |
| Genomic epidemiology & phage experiments | Browser-based interactive evidence + selective real R analyses | Same pages and scientific decision path |

**Avoid forcing simulated output when a small real command can run instantly**, and avoid waiting for 15-minute analyses inside a 150-minute teaching slot. A terminal simulator is a narrow teaching interface, not a full shell emulator; make that visible.

## Website experience

1. Bilingual homepage with four lab cards and estimated time **2 h 30 min** each.
2. Each lab starts with a case and an optional 'In class: Linux/RStudio' vs 'At home: Browser-guided' guide, without duplicating scientific questions.
3. At most 5 essential missions per lab, alternating concrete task, evidence, question and feedback.
4. Provide a downloadable result bundle and scripts from a stable versioned data folder when redistribution is permitted.
5. Save notes locally in browser if enabled, with a clear reset/export, no mandatory student account or instructor tracking.
6. Include images/data provenance and labels `Real data`, `Precomputed output`, `Teaching simulation` in both languages.

## Tests and dependencies

- Classroom smoke test: confirm `R`, `RStudio`, required R packages (`phyloseq`, `vegan`, graphing packages), simple file utilities, and file paths. If packages unavailable, provide a self-contained lightweight route and precomputed results. Do not assume root privileges.
- Browser test: mission sequence works without terminal, without user login, including all figures, questions and fallbacks.
- If Binder is built later, test cold-start, memory constraints and reproducibility separately; do not make it mandatory.
- Visual assets: select and credit now; verify permissions before public repository publication. Noncommercial teaching context and source attribution alone do not guarantee redistribution rights.
