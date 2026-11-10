# Student-facing site copy - ENGLISH

**Scope:** ready-to-edit copy. Insert sample IDs, measured values and file names ONLY after actual datasets have been validated. All heavy-computation replays must be labeled as precomputed outputs.

## Homepage

**Molecular Microbiology 2026/2027**

### Interactive practical laboratories

Four scientific investigations, two and a half hours each. You will work with microbial data and use the tools needed to answer biological questions: from sequencing quality control and community diversity to pathogen genomics and bacteria-phage interactions.

No prior Linux or R experience is required. We will use a small number of commands because they are useful for the analysis, not as an exercise in memorizing syntax. Computationally demanding analyses are also available as **replays of completed workflows**, allowing you to inspect authentic outputs without waiting for calculations to finish.

**How it works:** read the case, inspect the evidence, run a command when requested, interpret the output and decide what to do next. Hints and explanations are intended to support scientific reasoning, not memorization.

**Evidence labels**

- **Real data:** measurements or sequences from a documented scientific source.
- **Precomputed output:** authentic analysis output generated previously and displayed immediately.
- **Teaching simulation:** an illustrative scenario, interface or generated dataset; explicitly labeled as such.

In class, you will use Linux computers with RStudio already installed. Essential Linux and R commands will be executed for real; long pipelines may be replayed using validated precomputed results. You can also complete the guided labs from home in a modern browser. When available, you may also run selected analyses in a local Linux or R environment.

**LAB 01 card:** From FASTQ to ASVs. Explore sequencing files, practice essential Linux commands and follow the AmpWrap workflow.

**LAB 02 card:** The Atlantic Microbiome. Analyze an oceanographic transect in R and interpret bacterial community diversity.

**LAB 03 card:** The Outbreak Investigation. Explore a pathogen genome, virulence, antibiotic resistance and relationships among isolates.

**LAB 04 card:** The Phage Challenge. Investigate which phages infect which bacteria and how CRISPR-Cas can affect their interactions.

**Navigation labels:** Home | Practical Labs | Resources | Setup | Language | Resume | Start over | Show hint | Check answer | Continue | Laboratory notes | Data sources.

## LAB 01 - From FASTQ to ASVs

**Opening question:** We received paired-end FASTQ files from an amplicon sequencing experiment. Are they suitable for reconstructing microbial communities?

**Learning goals:** navigate directories in Linux, identify paired-end FASTQ files, interpret quality reports, understand the main AmpWrap stages and evaluate final outputs.

**Mission 1 - What data did we receive?**

Before starting an analysis, we must know which files are available, how they are organized and which samples they represent. Open the terminal and use the suggested commands to inspect the data directory. Check whether forward and reverse reads are present for each sample. You do not need dozens of shell commands; start with `pwd`, `ls`, `cd` and the tools introduced in the guide.

**Mission 2 - Are the reads good enough?**

Inspect the FastQC/MultiQC report. Look for possible quality loss near the 3' ends of reads and for primer or adapter contamination. Decide which information you need before choosing trimming parameters.

**Mission 3 - From FASTQ to ASVs**

Start the guided AmpWrap replay using the command shown on the page. The workflow covers primer removal, parameter selection, denoising and taxonomic classification. Logs and results come from a previously completed execution; the pipeline is not being recomputed during the replay.

**Mission 4 - What did we obtain?**

Compare read counts across the workflow. Identify samples with substantial read loss, inspect the ASV table and taxonomic assignments, and assess which limitations should be reported before drawing biological conclusions.

**Final reflection:** In two or three sentences, explain whether the dataset is usable and which quality checks matter most.

## LAB 02 - The Atlantic Microbiome

**Opening question:** Do bacterial communities change along an Atlantic Ocean transect? How can we interpret associations with environmental conditions?

**Learning goals:** load microbiome data in R, distinguish composition and diversity, interpret PCoA, and understand PERMANOVA alongside the limitations of a transect sampling design.

**Mission 1 - Meet the dataset**

Open RStudio and load the provided SEA4BLUE materials and scripts. Identify samples, environmental variables and the structure of the phyloseq object. Before plotting, verify that sample metadata match the samples in the analysis object.

**Mission 2 - Who is there?**

Inspect taxonomic composition and diversity summaries. Distinguish differences in relative abundance from differences in richness. Remember that amplicon profiles are compositional and do not directly measure absolute bacterial abundance.

**Mission 3 - How different are the communities?**

Calculate or inspect Bray-Curtis dissimilarities and a PCoA. Describe visible patterns without automatically attributing them to one environmental driver.

**Mission 4 - Can we assess a hypothesis?**

Examine PERMANOVA alongside a multivariate dispersion diagnostic. Consider that longitude, environmental variables and sampling date may covary along a transect. An association should not be described as proof of causation.

**Final reflection:** State the strongest observable pattern and one major limitation of its interpretation.

## LAB 03 - The Outbreak Investigation

**Opening question:** *Escherichia coli* isolates were recovered from clinical and food-associated samples. Can genomic data help determine whether they may be connected?

**Case context:** Our reference is a documented NCBI Pathogen Detection example related to a flour-associated outbreak. The investigation interface is a teaching reconstruction, while genomes and analysis outputs will be explicitly linked to their original sources. Genetic relatedness alone does not establish the source of contamination.

**Learning goals:** interpret sequencing QC and assembly, navigate an annotated genome, distinguish virulence/AMR markers from observed phenotypes, and interpret genomic relatedness together with epidemiological metadata.

**Mission 1 - Can we trust the assembly?**

You have received reads and an assembly. Inspect the quality results and QUAST summary. Which values help you assess assembly continuity? What further checks, such as coverage and contamination, would be needed? Computational steps are replayed from previously completed analyses.

**Mission 2 - Explore the genome**

Open the genome browser. Examine contigs and available annotations. Find a gene of interest, inspect its genomic context and decide whether the available evidence is sufficient to identify a plasmid, prophage or other mobile element.

**Mission 3 - Virulence and antibiotic resistance**

Inspect validated virulence-factor and AMR screening results. Which genomic features support a hypothesis about pathogenic potential? Which conclusions remain unsupported without expression data, susceptibility phenotypes or clinical context?

**Mission 4 - Are the isolates linked?**

Examine a phylogenetic tree, genomic distances and sample metadata. Identify relationships compatible with epidemiological linkage, those less compatible, and the additional evidence required to investigate a possible source.

**Final reflection:** Write one supported hypothesis, two pieces of evidence and one important limitation.

## LAB 04 - The Phage Challenge

**Opening question:** We have several phages and bacterial isolates. How do we identify promising candidates, and why might a bacterium resist phage infection?

**Case context:** This lab contains two independent case files. The first uses experimental phage-*Klebsiella* interaction data. The second examines the CRISPR-Cas system of *Pseudomonas aeruginosa* PA14 and phage DMS3. Evidence from one system must not be presented as if it were measured in the other.

**Learning goals:** interpret a host-range matrix, produce a simple plot in R, explore a phage genome, and distinguish host recognition from CRISPR-mediated defense.

**Mission 1 - Which phages infect our isolates?**

Open the phage-host interaction table. Each recorded outcome comes from a documented experimental observation. Before choosing a phage, distinguish positive tests, negative tests and combinations that were not tested. A missing observation must not be treated as a negative result.

**Mission 2 - Visualize the host range**

Import the CSV in R, inspect the column names and generate the suggested heatmap. Which phage has activity against the largest number of tested isolates? Could complementary phages improve coverage? Host-range breadth does not establish clinical efficacy.

**Mission 3 - What can a phage genome tell us?**

Open the interactive genome map of one or more phages included in the data. Identify annotated structural or host-recognition proteins where the annotations actually support those functions. Discuss why gene content can suggest a role but does not by itself prove host range, a strictly lytic life cycle or suitability for treatment.

**Mission 4 - Can the bacterium defend itself?**

We now switch to a different experimental system: *P. aeruginosa* PA14 and phage DMS3. Inspect the CRISPR-Cas locus and compare published results for hosts with or without a functional CRISPR system and for phages with different infection strategies. Which observations are consistent with CRISPR-mediated resistance? Which suggest other mechanisms or a role for lysogeny?

**Final reflection:** Explain why a phage that infects an isolate in a laboratory assay is not automatically a clinically usable treatment, and propose an additional experiment that would help evaluate the candidate.
