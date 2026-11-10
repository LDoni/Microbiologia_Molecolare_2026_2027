# Site architecture and pedagogical design

## Primary navigation

- **Home** - course introduction, four lab cards, estimated time, teaching mode legend.
- **Practical Labs** - single overview plus dedicated lab landing pages (LAB 01-04).
- **Resources** - existing Bash, AmpWrap, R and biostatistics tutorials; glossary; software; references.
- **Setup** - two routes: in-class real Linux/RStudio with precomputed long-pipeline steps, and browser-based guided/replay for home; optional Binder/Jupyter only when validated.
- **Language IT / EN** - explicit switch retaining lab and mission location. All scientific questions, feedback, alt text, navigation, and onboarding in both languages.

**Do not add a mock exam, exam preparation mode, exam questions, rankings, student accounts, grading or submission backend.** Study questions inside labs are formative only.

## Layout of each lab

1. Case introduction, scientific question, time, 3-4 learning outcomes.
2. Dataset card: origin, what is real, what is precomputed, what is simulated, rights/citation.
3. Four or five sequential **missions** (ideally 15-40 min each) with this common micro-layout:
   - `Question`: specific scientific problem to solve.
   - `Evidence`: figure, metadata, file preview or genome browser.
   - `Action`: terminal command, R code, decision, or virtual lab request.
   - `Interpretation`: one data-driven question with 3-4 answer choices.
   - `Feedback`: precise reason why an answer is justified or not.
   - `Notebook`: 1-2 sentences written by student, saved locally or exported.
4. Final summary card: student-written biological conclusion + limitations; no grade.
5. Reference section: data provenance, tools and citations.

## Page mapping (existing pages)

| Proposed use | Existing file as reported by Codex |
|---|---|
| Homepage | `index.qmd` |
| LAB1 landing/story | `lab-01-fastq-asv.qmd` |
| LAB2 landing/story | `lab-02-atlantic-microbiome.qmd` |
| LAB3 landing/story | `lab-03-interactive-investigation.qmd` |
| LAB4 landing/story | `lab-04-virtual-experiment.qmd` |
| Read-only background material | `bash.qmd`, `ampwrap.qmd`, `intro-r.qmd`, `biostatistica.qmd` |
| Shared behavior | existing `lab-components.js` (extend, do not replace blindly) |

Place processed evidence/data in `materials/lab03/`, `materials/lab04/` or existing appropriate paths, with `provenance.yml` for each. Avoid version-controlling full raw read archives or large bacterial-genome ZIPs.

## Virtual command experience

- **Basic Linux**: in class use the real Linux terminal. For home learners let students issue basic *meaningful* commands in a small virtual filesystem; only support `pwd`, `ls`, `cd`, `cat`, `head`, and similar operations actually needed by missions. Error handling should teach users about paths, without pretending to be a full Linux environment.
- **Heavy bioinformatics**: show the **actual command from a previously completed analysis** and play back truthful stdout/log snippets. Load QC plots/reports, CSVs and genome files generated beforehand. Every replay clearly labeled `Precomputed output / Output precomputato`.
- **R**: prefer a few real commands on the classroom RStudio computers (read table, inspect dimensions, filter, plot). If using webR, confirm actual package availability and browser performance. A static R output fallback is required; do not claim a simulated command executed R.
- **Decisions**: branching only when alternative outcomes exist and are scientifically justified by real precomputed analyses. Otherwise show alternative reasoning/feedback without fabricating different biological data.
- **Optional full analysis**: on classroom Linux or Binder/Jupyter if resource-tested. The guided browser/replay mode must work offline after initial load of site files if practical; no mandatory third-party sign-in.

## State, accessibility and scientific transparency

- Store local learning progress in `localStorage` optionally; provide Reset and export as JSON/plain text. The storage should be declared *device/browser-local*, not an official record.
- One reusable JSON mission schema, translated fields `it` and `en`, scientific values stored only once. Accessible keyboard interactions, semantic labels, no information distinguished only by color.
- Image source and alt text next to scientific data; sensible figure enlargement, mobile responsive (plots horizontally scrollable).
- Show legends `REAL DATA / DATI REALI`, `PRECOMPUTED / PRECALCOLATI`, `TEACHING SIMULATION / SIMULAZIONE DIDATTICA`. A *scenario* is not necessarily an authentic event.
- No generative fake screenshots, invented FastQC/QUAST numbers or invented phage sequences disguised as measured.
- Standalone site pages should render without an R kernel. No external API call required for essential content.

## Student learning goals across labs

| Lab | Main tool | Core skill |
|---|---|---|
| 1 | Linux terminal | inspect file formats + critically assess FASTQ/pipeline QC |
| 2 | R | interpret microbial community composition and multivariate analyses |
| 3 | virtual Linux + genome browser | connect sequence quality, assembly, gene content and phylogenetic relatedness |
| 4 | simple R + interactive genome viewer | reason about host range, phage specificity, and CRISPR-associated resistance |
