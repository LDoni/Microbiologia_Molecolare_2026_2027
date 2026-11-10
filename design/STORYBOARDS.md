# Mission storyboards - four 150-minute labs

Each meeting lasts **150 minutes (2.5 hours)**. Classroom PCs run Linux and RStudio. Do not fill added time with disconnected commands. The website guides student decisions and feedback; students execute short commands for real, while resource-intensive pipelines replay verified outputs. The examination is separate from the website.

## LAB 01 - From FASTQ to ASVs (Linux + AmpWrap)

**Scientific question:** Can these paired-end amplicon reads yield interpretable ASVs? Preserve the authentic dataset, current command syntax and existing PhD course tutorials.

| Time | Mission | Student activity and evidence |
|---|---|---|
| 0-25 min | M1. Inspect the files | Use real Linux `pwd`, `ls`, `cd`, `head` or an appropriate compressed-file preview; recognize FASTQ structure and pair R1/R2; compare sample inventory with metadata. |
| 25-55 min | M2. Check read quality | Open real FastQC/MultiQC reports, examine read quality and primer/adapter signals, decide which checks are needed before filtering. |
| 55-105 min | M3. Follow AmpWrap | Issue the **actual documented AmpWrap command**; replay previously captured Cutadapt, FIGARO, DADA2 and classification outputs. Pause for decisions on overlap and retention. |
| 105-135 min | M4. Evaluate processed data | Inspect real read-retention tables, ASV table and taxonomic assignments; identify samples that deserve scrutiny. |
| 135-150 min | Synthesis | Write a brief QC verdict and its limitations; compare decisions in the class. |

**Home variant:** virtual filesystem + command replay + the identical reports and questions, no heavy computation required.

## LAB 02 - The Atlantic Microbiome (R + SEA4BLUE)

**Scientific question:** How does bacterial community composition vary along an Atlantic transect? Treat geographic, temporal and environmental covariation explicitly.

| Time | Mission | Student activity and evidence |
|---|---|---|
| 0-25 min | M1. Inspect data in R | Open classroom RStudio; load the existing SEA4BLUE phyloseq object and metadata, inspect dimensions, sample IDs and variables. |
| 25-60 min | M2. Composition and diversity | Make a simple taxonomic plot; inspect richness or diversity; distinguish relative abundance from absolute abundance. |
| 60-105 min | M3. Between-sample differences | Compute or load Bray-Curtis dissimilarities and PCoA; interpret axes and groupings without assigning causes. |
| 105-135 min | M4. Test and qualify | PERMANOVA with a dispersion diagnostic; discuss confounding of longitude, sampling date and environment. Use a short verified script. |
| 135-150 min | Synthesis | Formulate a supported ecological interpretation, plus one key limitation. |

**Home variant:** downloadable scripts, compatible small precomputed files, and browser-rendered figures; optional remote R environment after testing. Avoid heavy installs as a condition of completing the guided activity.

## LAB 03 - The Outbreak Investigation (genomics, virulence, AMR)

**Real-world anchor:** NCBI Pathogen Detection flour-associated *E. coli* example, cluster `PDS000003441`. Freeze exact accessions and version before publishing; only present isolate-specific AMR/virulence results once actually verified. Relatedness alone is not proof of transmission direction or contamination source.

| Time | Mission | Student activity and evidence |
|---|---|---|
| 0-20 min | M1. Introduce the case and inspect reads | Read case files, use basic terminal commands to list files, open an authentic QC report and decide whether the data warrant additional checks. |
| 20-50 min | M2. From reads to assembly | Replay the documented assembler/QUAST steps; interpret contig counts, N50, coverage and possible limitations using genuine output. |
| 50-85 min | M3. Explore the annotated genome | Use interactive genome viewer (or tested local view); identify annotated features, inspect gene neighborhood and avoid unsupported plasmid/prophage claims. |
| 85-115 min | M4. Virulence and AMR | Inspect vetted virulence and AMRFinderPlus results; compare genomic prediction with phenotypic evidence when available. |
| 115-145 min | M5. Reconstruct the outbreak | Explore SNP/phylogenetic tree and case metadata; evaluate which isolates may be linked and which evidence is missing. |
| 145-150 min | Synthesis | One evidence-based hypothesis and one limitation. |

**Home variant:** replay QC/assembly/search tools + browser genome viewer and interactive metadata/tree; no mandatory assembler run.

## LAB 04 - The Phage Challenge (host range + CRISPR-Cas)

**Two independent research systems:** A = experimental *Klebsiella*-phage host-range data; B = *Pseudomonas aeruginosa* PA14 / DMS3 CRISPR case. Never imply CRISPR results from B were measured in A.

| Time | Mission | Student activity and evidence |
|---|---|---|
| 0-20 min | M1. Choose evidence | Present the *Klebsiella* problem. Open observed host-range table; distinguish tested positives, tested negatives and untested pairs. |
| 20-55 min | M2. Analyze host range in R | In RStudio import a verified CSV submatrix, inspect rows/columns, create a heatmap and compare coverage across phages or combinations. |
| 55-90 min | M3. Explore phage genomes | View one or two real annotated genomes; locate genuinely supported structural/RBP annotations and discuss what cannot be inferred from sequence alone. |
| 90-125 min | M4. Investigate bacterial defense | Switch **explicitly** to PA14 and DMS3. Inspect locus/genome evidence, compare documented CRISPR-positive vs defective outcomes, temperate DMS3 vs DMS3vir and alternatives such as surface resistance. |
| 125-140 min | M5. Make and defend a choice | Discuss host specificity vs bacterial defense and choose a plausible next experiment, without implying clinical readiness. |
| 140-150 min | Synthesis | Record one conclusion, two supporting observations and one unresolved question. |

**Home variant:** virtual table/heatmap tools, reproducible R script as optional download, genome snapshots or embedded viewer, documented data outputs. Basic R remains real in class.

## Common scientific caveats

Do not invent FastQC/QUAST values, reads, phylogenies, phage-host observations, resistance phenotypes or gene coordinates. Clearly label precomputed outputs. Missing host-range pairs are **unknown**, not negative. Phage adsorption/lysis/plaques are not equivalent to successful treatment. CRISPR spacer matches do not alone demonstrate functional immunity. Keep an evidence/provenance manifest. Questions in the site are formative, not exam questions.
