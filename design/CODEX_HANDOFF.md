# Codex handoff: implement the interactive 4-lab Quarto site, adjusted to 150-minute classroom sessions

**Working directory already prepared by Codex:** `/media/shared2/Lapo_micro_mol_2026`. Do not fork again or regenerate this repository. First inspect `git status`, `_quarto.yml`, `index.qmd`, `lab-components.js`, the four `lab-*.qmd` files, `styles.css`, existing source tutorials, and the current language-switch implementation.

## Phase A - Integrate content without breaking existing science

1. Read `SITE_ARCHITECTURE.md`, both copy documents, `STORYBOARDS.md`, the manifest and `DATA_CURATION.md`.
2. Adjust existing pages **in place**, preserving Bash, AmpWrap, Intro R, SEA4BLUE, scripts, environment files, published credits and current working quizzes. Enforce 150-minute duration on all four labs, and adapt exercises to make meaningful use of classroom Linux and RStudio.
3. Replace placeholder LAB3/LAB4 landing material with mission outlines and student-facing copy in both languages. LAB1/LAB2 should link to the original code lessons rather than duplicating them.
4. Navigation: Home / Practical Labs / Resources / Setup, language switch IT/EN, four cards, no exam materials.
5. Each page labels precomputed data/replay and cites the actual source.

## Phase B - Acquire and validate materials

1. Follow `DATA_CURATION.md`. Download source datasets if permitted, record exact filenames, versions, checksums and rights. Separate the Klebsiella dataset from the PA14/DMS3 mechanistic demonstration. No invented data or falsified phylogenies.
2. For LAB3, freeze real *E. coli* example isolate IDs and SNP cluster version; do not assume gene content/assembly statistics without verifying them.
3. For LAB4, derive a validated host-range submatrix from *actual assayed pairs* and visually cross-check it; distinguish not-tested from negative. Include one or two real phage genome files if licensing permits.
4. Obtain the licensed images in `ASSET_AND_DATA_MANIFEST.csv`, keep authors and license text alongside files. Replace generic external image queries with credited local images only when rights allow.

## Phase C - Build minimal reusable interactions

1. Extend existing `lab-components.js` rather than introducing a redundant second framework.
2. One mission JSON schema with locale strings, evidence assets, a question, options, answer key and explanation, plus optional student notebook.
3. Teach only essential commands: in class students use the real Linux terminal; the home browser fallback should implement commands needed to explore the example filesystem. Replay heavy pipelines with actual recorded logs. Require no real job to finish for the student.
4. Real R code should be short and runnable in classroom RStudio using locally available CSVs/phyloseq objects. Include a plot/output fallback for browser-only learners.
5. For genomics, embed JBrowse2 or CGView.js only if it is feasible on GitHub Pages with local files; otherwise use a documented static view and optional external link. Verify any functional gene annotation.
6. Preserve mobile, keyboard accessibility, hints, reset and optional local progress. No ranking, exam page, scoring export to instructor, or external student tracking.

## Phase D - Validation and reporting

- `quarto render` all pages in both languages; check broken links/images, language parity and science/alt text.
- Browser test on mobile + desktop including quiz states, navigation, README download, all four lab pages and dataset figures.
- Confirm all runs and results have correct provenance labels. If critical dataset/license/accession validation is blocked, show a clearly flagged placeholder and list the blocker. Do **not** fill it with fabricated measurements.
- Do not push or publish until explicitly authorized. Provide `git diff --stat`, screenshots of the key pages if browser available, and a prioritized outstanding-work list.

## Important scientific cautions

- A phage-host interaction dataset is not equivalent to proof of clinical efficacy.
- A CRISPR spacer match is not evidence of an immune phenotype without contextual validation.
- PhageHostLearn Klebsiella and PA14/DMS3 are independent, complementary case studies, not an experimentally matched combined system.
- Virulence gene presence, antimicrobial-resistance determinants and SNP similarity need careful interpretation.
- Site contains **formative learning prompts**; the actual exam is entirely separate.
