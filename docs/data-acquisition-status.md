# Data acquisition and validation status

Updated locally on 10 November 2026. This register distinguishes verified source availability from data that are suitable to publish in a teaching activity.

## LAB 01 and LAB 02

- **SEA4BLUE:** retained in `downloads/Sea4Blue.zip` and `materials/Sea4Blue/`; the existing R workflow and figures are the course evidence source.
- **AmpWrap:** the existing Bash and AmpWrap pages remain the source for commands and workflow interpretation. No raw sequencing archive has been added to Git.

## LAB 03 — outbreak investigation

- **Anchor:** NCBI Pathogen Detection help identifies the all-purpose-flour example and its `PDS000003441` cluster.
- **Status:** no selected isolate accessions, frozen cluster timestamp, raw reads, assembly, QC report, AMRFinderPlus result, or SNP tree have been committed. These must be generated and checked together before an evidence card or answer key is published.
- **Reason:** Pathogen Detection data and analyses change over time; genomic relatedness is not evidence of transmission direction or source by itself.

## LAB 04 — phage challenge

- **PhageHostLearn source:** Zenodo record 11061100, version v2, DOI `10.5281/zenodo.11061100`. The record API currently declares **CC BY 4.0** (the initial design pack's uncertain-rights note is therefore superseded for this record).
- **Verified inspection:** `phage_host_interactions.csv` was downloaded only to a temporary directory for inspection. It has MD5 `e4f7f15779f698f3b0f76164c9d44f22`, SHA-256 `b9d8822ca73de87036bfe46c05db5e8efc1a31804a7ea07915cf1503d9d8c8c1`, 214 data rows and 133 columns. Its matrix uses 1, 0 and blank cells; a student subset must preserve blank cells as **not tested**, rather than recoding them as negative.
- **Not committed:** no PhageHostLearn table, genome archive, or derived host-range figure has been added yet. A selected subset still needs assay-semantics validation and a student manifest.
- **Separate CRISPR case:** PA14 `NC_008463.1`, DMS3 `NC_008717.1`, and the cited PA14/DMS3 literature are source references only at this stage. No DMS3vir sequence or numerical experimental chart is included.

## Required acceptance bundle before publishing LAB 03/04 evidence

For each selected case: `README.md`, `sources.tsv`, `input_manifest.tsv`, checksums, tool/database versions, commands actually run, generated results, and attribution/license notes. Do not add large raw reads or the 341 MB *Klebsiella* archive to Git.
