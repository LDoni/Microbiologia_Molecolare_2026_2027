# Molecular Microbiology 2026/2027 - Interactive Labs

**Design and content handoff for Codex.** Course: 24 meetings, 20 already scheduled (19 theory + 1 visit), plus **4 practical labs of 150 minutes (2.5 hours)**. Course website in Italian and English. The exam is separate and must NOT appear on this site.

## Intended existing local project

`/media/shared2/Lapo_micro_mol_2026`

Codex already reports adding `lab-01-fastq-asv.qmd`, `lab-02-atlantic-microbiome.qmd`, `lab-03-interactive-investigation.qmd`, `lab-04-virtual-experiment.qmd`, a redesigned `index.qmd`, `_quarto.yml`, `lab-components.js`, responsive CSS and a deployment workflow. **Do not discard or recreate this work. Inspect current files before editing.** This package cannot access the user's machine and has not modified that working tree.

## Delivery and computing constraints

- **24 meetings overall**: 19 theory meetings, 1 departmental laboratory visit, and 4 interactive computer labs.
- Each computer lab lasts **150 minutes**; the four labs total **10 hours**.
- **In-class default**: the teaching computer room already has **Linux and RStudio**. Run useful shell and R operations for real. Simulate/replay only computationally expensive pipelines, always from authentic recorded outputs where possible.
- **At-home route**: browser-based virtual commands and precomputed outputs for equivalent scientific tasks; Binder/Jupyter is optional and may be introduced after testing, not a dependency.
- Preserve the existing **Quarto bilingual pages** and course materials in the user's existing local checkout.
- No exam section, mock exam or assessment page: the actual exam is organized separately.

## Four labs

1. **From FASTQ to ASVs** - Linux essentials + AmpWrap; reuse existing Bash/AmpWrap tutorials and real precomputed outputs.
2. **The Atlantic Microbiome** - R + the existing SEA4BLUE phyloseq workflow; retain scientifically justified analyses.
3. **The Outbreak Investigation** - WGS QC, assembly, annotated genome, virulence, AMR and genomic epidemiology. Prefer the documented 2016 all-purpose-flour *E. coli* case from NCBI Pathogen Detection; validate isolate-specific outputs before writing answer keys.
4. **The Phage Challenge** - host-range data, a short R task, viral genome exploration and a second, clearly distinguished CRISPR-Cas case study. *Klebsiella* PhageHostLearn and *P. aeruginosa* PA14/DMS3 are different experimental systems.

## Included documents

- `SITE_ARCHITECTURE.md`: website, language, interaction, technical and QA specifications.
- `CLASSROOM_AND_HOME_PLAN.md`: how to use real classroom Linux/RStudio with optional browser replay.
- `CODEX_NEXT_STEPS_150min.md`: paste-ready next-iteration request for Codex.
- `IT_SITE_COPY.md`, `EN_SITE_COPY.md`: ready-to-edit bilingual student-facing introductions and mission texts for all four labs.
- `STORYBOARDS.md`: objectives, 150-minute timing, evidence, and question design for each lab.
- `ASSET_AND_DATA_MANIFEST.csv`: researched data/images/software, verified URLs, licenses, and remaining validation tasks.
- `DATA_CURATION.md`: how to choose a reproducible small dataset and distinguish original data from a scenario.
- `CODEX_HANDOFF.md`: sequenced coding instructions with hard constraints.
- `questions_bilingual.json`: example interactive questions with answers and explanatory feedback in both languages, to be checked against actual dataset-specific outputs.

## Status and limits

This is a **content/research pack, not a working Quarto implementation**. Source catalog and NCBI accessions were checked on 10 Nov 2026; original FASTQ, phage genome ZIPs and third-party images were **not downloaded** in this environment. In particular, the Zenodo record displays no explicit reusable license in its public license field; schedule a rights/reuse check before the public site is published; source citation alone is not automatically a reuse permission. Codex must download, validate and document every actual source and derive output figures from those data. Do not invent scientific statistics or pretend a replay is a real computation.

Reference sources:
- PhageHostLearn data: https://zenodo.org/records/11061100
- Paper: https://doi.org/10.1038/s41467-024-48675-6
- PA14 host genome: https://www.ncbi.nlm.nih.gov/nuccore/NC_008463.1
- DMS3 phage genome: https://www.ncbi.nlm.nih.gov/nuccore/NC_008717.1
- PA14/DMS3 research: https://pmc.ncbi.nlm.nih.gov/articles/PMC7007301/
- NCBI *E. coli* outbreak example: https://www.ncbi.nlm.nih.gov/pathogens/pathogens_help/
