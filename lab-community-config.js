/* Questions tied to verified reports or FASTQ format and workflow semantics. */
window.MM_LABS={
'01':{title:'Da FASTQ ad ASV|From FASTQ to ASVs',titles:['Terminale e file|Terminal and files','Dati paired-end|Paired-end data','Qualità del sequenziamento|Sequencing quality','Workflow AmpWrap|AmpWrap workflow','Dalle ASV alla comunità|From ASVs to communities'],times:[25,25,30,40,30],questions:[
['Quante righe ha un record FASTQ?|How many lines in a FASTQ record?',4,4,'Ogni record ha identificatore, sequenza, separatore e qualità.|Each record has an identifier, sequence, separator and quality.'],
['Come ispezioni un gzip?|How do you inspect gzip?', ['gzip -cd file.fastq.gz | head','head sul file compresso|head on the compressed file'],0,'La decompressione in streaming permette di leggere il testo.|Streaming decompression exposes text.'],
['Quale controllo supporta il pairing?|Which check supports pairing?', ['ID dei mate e conteggi coerenti|Matching mate IDs and counts','Uguale numero di ASV|Equal ASV counts'],0,'Le ASV non verificano l’abbinamento delle reads.|ASVs do not validate read pairing.'],
['Sequenza e qualità devono avere uguale lunghezza?|Must sequence and quality lengths match?', ['Sì|Yes','No|No'],0,'Ogni base ha un carattere di qualità.|Each base has one quality character.'],
['MultiQC riassume report di più campioni?|Does MultiQC aggregate reports across samples?', ['Sì|Yes','No|No'],0,'Confronta report già prodotti dai tool.|It aggregates reports already produced by tools.'],
['Un flag FastQC implica scartare automaticamente?|Does a FastQC flag mean automatic rejection?', ['No|No','Sì|Yes'],0,'Valuta marker, primer e disegno sperimentale.|Consider marker, primers and design.'],
['Quale passaggio rimuove primer?|Which step removes primers?', ['Cutadapt|Cutadapt','PCoA|PCoA'],0,'AmpWrap usa Cutadapt prima dell’inferenza ASV.|AmpWrap uses Cutadapt before ASV inference.'],
['FIGARO aiuta a scegliere parametri di trimming?|Does FIGARO help select trimming parameters?', ['Sì|Yes','No|No'],0,'I parametri devono mantenere overlap sufficiente.|Parameters must retain sufficient overlap.'],
['Quante ASV ha l’oggetto SEA4BLUE iniziale?|How many ASVs in the initial SEA4BLUE object?',1312,1312,'Il report verificato riporta 1.312 taxa iniziali.|The verified report records 1,312 initial taxa.'],
['Abbondanza relativa dimostra abbondanza assoluta?|Does relative abundance establish absolute abundance?', ['No|No','Sì|Yes'],0,'Il denominatore è il totale del campione.|The denominator is the sample total.']
]},
'02':{title:'Il microbioma atlantico|The Atlantic Microbiome',titles:['Importazione e ispezione|Import and inspect','Metadati e profondità|Metadata and depth','Composizione e diversità alfa|Composition and alpha diversity','Bray–Curtis e PCoA|Bray–Curtis and PCoA','PERMANOVA e conclusioni|PERMANOVA and conclusions'],times:[25,25,35,35,30],questions:[
['Campioni nell’oggetto iniziale?|Samples in the original object?',17,17,'Il report registra 17 campioni inclusi i controlli.|The report records 17 samples including controls.'],
['ASV nell’oggetto iniziale?|ASVs in the original object?',1312,1312,'Controlla original_taxa nel riepilogo.|See original_taxa in the summary.'],
['Campioni ambientali dopo i filtri?|Environmental samples after filtering?',15,15,'I due controlli sono esclusi dall’analisi ecologica.|Two controls are excluded from ecological analysis.'],
['Reads del controllo negativo?|Negative-control reads?',43,43,'La tabella profondità riporta 43 reads.|The depth table reports 43 reads.'],
['ASV dopo il filtraggio?|ASVs after filtering?',1219,1219,'Il riepilogo validato riporta 1.219.|The validated summary records 1,219.'],
['Shannon misura diversità entro campione?|Does Shannon measure within-sample diversity?', ['Sì|Yes','No|No'],0,'Non è una distanza tra campioni.|It is not a between-sample distance.'],
['Bray–Curtis usa abbondanze relative nel workflow?|Does this workflow use relative abundance for Bray–Curtis?', ['Sì|Yes','No|No'],0,'Il codice normalizza entro ogni campione.|Code normalizes within each sample.'],
['La separazione PCoA dimostra causalità?|Does PCoA separation prove causation?', ['No|No','Sì|Yes'],0,'Geografia e covariate possono confondersi con Zone.|Geography and covariates can confound Zone.'],
['p PERMANOVA verificato?|Verified PERMANOVA p?',0.001,0.001,'999 permutazioni, seed 42; R² circa 0,4872.|999 permutations, seed 42; R² approximately 0.4872.'],
['p dispersione 0,090 prova dispersioni identiche?|Does dispersion p=0.090 prove identical dispersion?', ['No|No','Sì|Yes'],0,'Non significativo non equivale a equivalenza dimostrata.|Non-significance is not demonstrated equivalence.']
]}};
