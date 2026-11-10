# Data collection and reproducibility plan for Codex

## LAB 4, case A: Klebsiella phage-host specificity

Verified record: https://zenodo.org/records/11061100 (DOI 10.5281/zenodo.11061100), accompanying Boeckaerts et al. 2024, https://doi.org/10.1038/s41467-024-48675-6.

Archive published files: `phage_host_interactions.csv` (~70.3 KB), `phages_genomes.zip` (~1.8 MB), `klebsiella_genomes.zip` (~341.4 MB), `RBPbase.csv`, `Locibase.json`, `Locibase_invitro.json`. DOI and exact filenames confirmed. Not downloaded in the present environment.

**Before student page is built:**

1. Download only necessary source files in a networked development environment and verify recorded checksums / DOIs.
2. Read actual CSV columns and data dictionary. Confirm label semantics (positive, negative, untested) and experimental assay differences. Do not assume a missing pair is a negative.
3. Pick a small coherent, well-annotated submatrix with genuine tested labels. Use actual isolate and phage identifiers; store mapping in `lab04_sample_manifest.tsv` including source IDs, assay provenance, original file and version.
4. Save a small analysis table for students, preferably <= 100 rows, plus a completed optional instructor solution. Save real summary figures from these rows; use an image of a plate only as generic illustration, never as a photograph of the exact assay unless sourced from the same experiment.
5. If phage genome FASTA/GenBank records lack functional annotation, create a genuine annotation using a documented pipeline and confirm assignment. Do not invent tail/RBP coordinates or 'temperate' status.
6. Because the Zenodo page does **not display a clear license string**, verify redistribution rights before committing its sequences or CSV into a public GitHub repository. If unclear, host source download instructions and retain derived teaching values only when rights permit.

## LAB 4, case B: experimental CRISPR comparison

- Host *P. aeruginosa* PA14 RefSeq: https://www.ncbi.nlm.nih.gov/nuccore/NC_008463.1
- Phage DMS3 RefSeq: https://www.ncbi.nlm.nih.gov/nuccore/NC_008717.1
- Experimental context: https://pmc.ncbi.nlm.nih.gov/articles/PMC7007301/
- Complementary evidence: https://pmc.ncbi.nlm.nih.gov/articles/PMC3486085/

The first paper explicitly distinguishes temperate DMS3 from virulent DMS3vir; these are not interchangeable complete genome records. If a DMS3vir genome file is needed, establish the exact engineered allele/mutation and label accordingly. For the 150-minute lab, a grounded qualitative outcome table is sufficient. For a numeric chart, use underlying deposited data or digitization with disclosure/rights review, never fabricated values presented as measurements.

## LAB 3: E. coli outbreak

- Official NCBI documentation: https://www.ncbi.nlm.nih.gov/pathogens/pathogens_help/
- Cluster `PDS000003441` (the NCBI documentation specifically uses the 2016 flour-associated case); cluster **version will change**. Freeze and record a chosen snapshot/version and set of isolates.
- Pick a small set of specific isolate accession numbers with available assemblies and metadata, plus a few unrelated controls. Obtain assembly files and, if possible, small read sets for real QC/assembly replay. Check accessions and read provenance.
- Calculate actual QC, assembly metrics, virulence/AMR and phylogenetic context once in a documented pipeline; avoid invented figures. NCBI SNP tree can be linked as a live external exploration, but for reproducibility provide a frozen local view with dataset timestamp.
- The source example does not guarantee all isolates contain interesting resistance determinants. If none are present, teach a negative result; do not transplant genes from other isolates without labeling the comparison.

## Figures and licensing

Source photos or diagrams must be individually licensed and credited with author, URL, license, and modification status. Prefer own diagrams derived from real data, openly licensed Commons images, or direct links to public interactive tools. Avoid copying figures from journal articles without verifying article-specific reuse rights. Every used scientific plot must state whether it represents observed values, an adapted figure or a teaching simulation.

## Reproducibility bundle per lab

`README.md`, `sources.tsv`, `input_manifest.tsv`, `software_versions.txt`, `commands.sh` (if actually run), `results/`, `notebook_questions.json`, `LICENSES.md`, `checksums.sha256`. Test all local filenames and all student-visible figures before acceptance.
