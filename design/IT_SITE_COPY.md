# Testi per il sito - ITALIANO

**Destinazione:** testi rivolti agli studenti. I numeri di campioni, risultati e nomi dei file devono essere aggiunti SOLO dopo aver validato i dataset effettivi. Per ogni LAB la pagina dovrebbe riportare i testi seguenti, le figure e i controlli interattivi.

## Homepage

**Molecular Microbiology 2026/2027**

### Laboratori pratici interattivi

Quattro indagini scientifiche, due ore e mezza ciascuna. Partiremo da dati microbiologici e utilizzeremo gli strumenti necessari per rispondere a domande reali: dal controllo qualità delle sequenze alla diversità microbica, dalla genomica dei patogeni alle interazioni tra batteri e fagi.

Non serve conoscere già Linux o R. Useremo pochi comandi, scelti perché utili all'analisi, e li riprenderemo durante le diverse attività. Le operazioni computazionalmente lunghe sono disponibili anche come **riproduzioni di analisi già eseguite**, con file e risultati consultabili senza attesa.

**Come funziona:** leggi il caso, esamina i dati, esegui un comando quando richiesto, interpreta il risultato e scegli come proseguire. I suggerimenti e le spiegazioni servono a capire il ragionamento, non a memorizzare risposte.

**Legenda sui risultati**

- **Dati reali:** dati provenienti da un esperimento, con fonte documentata.
- **Output precalcolato:** risultato autentico di un'analisi eseguita in precedenza, mostrato immediatamente.
- **Simulazione didattica:** scenario, interfaccia o dati costruiti per spiegare un concetto; sono identificati come tali.

In aula lavoreremo sui PC Linux con RStudio già installato. I comandi Linux e R essenziali verranno eseguiti realmente; le pipeline più lunghe potranno essere riprodotte da output verificati già calcolati. I laboratori sono utilizzabili anche a casa. Per le attività guidate è sufficiente un browser moderno; quando disponibile, puoi scegliere di ripetere alcune analisi nel tuo ambiente Linux o R.

**Card LAB 01:** From FASTQ to ASVs. Esplora file di sequenziamento, usa i comandi fondamentali di Linux e segui il workflow AmpWrap.

**Card LAB 02:** The Atlantic Microbiome. Analizza un transetto oceanografico in R e interpreta la diversità delle comunità batteriche.

**Card LAB 03:** The Outbreak Investigation. Esamina il genoma di un patogeno, la virulenza, la resistenza agli antibiotici e le relazioni tra isolati.

**Card LAB 04:** The Phage Challenge. Analizza quali fagi infettano quali batteri e scopri come il sistema CRISPR-Cas può influire sulle interazioni.

**Etichette di navigazione:** Home | Laboratori pratici | Materiali | Configurazione | Lingua | Riprendi | Ricomincia | Mostra suggerimento | Verifica risposta | Prosegui | Note di laboratorio | Fonti dei dati.

## LAB 01 - From FASTQ to ASVs

**Domanda iniziale:** Abbiamo ricevuto file FASTQ paired-end di un esperimento di metabarcoding. Possiamo utilizzarli per ricostruire le comunità microbiche?

**Obiettivi:** orientarsi nelle cartelle Linux, identificare FASTQ paired-end, leggere i report di qualità, comprendere i principali passaggi di AmpWrap e valutare gli output finali.

**Missione 1 - Quali dati abbiamo ricevuto?**

Prima di lanciare un'analisi, dobbiamo sapere quali file abbiamo, come sono organizzati e a quali campioni appartengono. Apri il terminale e usa i comandi indicati per esplorare la cartella dei dati. Verifica che per ciascun campione siano presenti le letture forward e reverse. Non serve conoscere decine di comandi: inizia da `pwd`, `ls`, `cd` e dagli strumenti proposti nella guida.

**Missione 2 - Le letture sono di qualità sufficiente?**

Esamina il report FastQC/MultiQC. Individua eventuali problemi verso l'estremità 3' delle reads e verifica se compaiono primer o adattatori. Decidi quali informazioni sono necessarie prima di scegliere i parametri di trimming.

**Missione 3 - Dal FASTQ alle ASV**

Avvia la riproduzione guidata di AmpWrap utilizzando il comando riportato nella pagina. Il workflow mostra in sequenza rimozione dei primer, selezione dei parametri, denoising e classificazione tassonomica. I log e i risultati provengono da un'esecuzione precedente; non stai aspettando che la pipeline venga ricalcolata.

**Missione 4 - Cosa abbiamo ottenuto?**

Confronta il numero di reads nelle diverse fasi. Identifica eventuali campioni con forte perdita di sequenze, esamina ASV table e assegnazione tassonomica e valuta quali limiti devono essere riportati prima di interpretare differenze biologiche tra campioni.

**Conclusione:** In due o tre frasi, indica se il dataset è utilizzabile e quali controlli consideri più importanti.

## LAB 02 - The Atlantic Microbiome

**Domanda iniziale:** Le comunità batteriche cambiano lungo un transetto nell'Oceano Atlantico? E come possiamo interpretare eventuali associazioni con l'ambiente?

**Obiettivi:** caricare dati in R, distinguere composizione e diversità, interpretare una PCoA, comprendere PERMANOVA e limiti del disegno di campionamento.

**Missione 1 - Esplora il dataset**

Apri RStudio e carica il materiale SEA4BLUE attraverso gli script forniti. Identifica i campioni, le variabili ambientali e la struttura dell'oggetto phyloseq. Prima di produrre grafici, verifica che i metadati corrispondano ai campioni effettivamente analizzati.

**Missione 2 - Chi c'è nei campioni?**

Osserva la composizione tassonomica e i principali indici di diversità. Cerca di distinguere una variazione nelle abbondanze relative da una variazione nella ricchezza. Ricorda che i profili amplicon sono composizionali e non forniscono direttamente l'abbondanza assoluta dei batteri.

**Missione 3 - Quanto sono diverse le comunità?**

Calcola o visualizza la dissimilarità di Bray-Curtis e la PCoA. Descrivi i pattern osservabili senza attribuirli automaticamente a una singola variabile ambientale.

**Missione 4 - Possiamo verificare un'ipotesi?**

Esamina PERMANOVA e dispersione multivariata. Interpreta i risultati alla luce del fatto che lungo un transetto longitudine, condizioni ambientali e data di campionamento possono covariare. Non confondere un'associazione con la dimostrazione di un rapporto causale.

**Conclusione:** Riporta il pattern più evidente e un limite importante della sua interpretazione.

## LAB 03 - The Outbreak Investigation

**Domanda iniziale:** Alcuni isolati di *Escherichia coli* sono stati ottenuti da campioni clinici e alimentari. I dati genomici possono aiutarci a stabilire se sono collegati?

**Contesto del caso:** Useremo come riferimento un esempio documentato da NCBI Pathogen Detection relativo a un focolaio associato alla farina. L'interfaccia investigativa è una ricostruzione didattica, mentre i genomi e i risultati delle analisi utilizzati saranno identificati con le rispettive fonti. Nessuna correlazione genomica, da sola, dimostra l'origine della contaminazione.

**Obiettivi:** interpretare QC e assembly, esplorare un genoma annotato, distinguere marker di virulenza e determinanti di resistenza da fenotipi, interpretare relazioni genomiche insieme ai metadati.

**Missione 1 - Possiamo fidarci dell'assemblaggio?**

Hai ricevuto un set di reads e un assembly. Esamina i risultati di qualità e il riepilogo QUAST. Quali caratteristiche ti consentono di valutare la continuità dell'assemblaggio? Quali informazioni, come profondità e contaminazione, richiedono verifiche separate? I passaggi di calcolo sono riprodotti a partire da esecuzioni già completate.

**Missione 2 - Esplora il genoma**

Apri il visualizzatore genomico. Cerca i contig e osserva le annotazioni disponibili. Individua un gene di interesse, controllane la posizione e valuta se le informazioni mostrate permettono davvero di assegnarlo a un plasmide, un profago o un'altra regione mobile.

**Missione 3 - Potenziale patogeno e resistenza**

Consulta i risultati verificati dell'analisi dei fattori di virulenza e dei determinanti AMR. Quali caratteristiche del genoma possono sostenere un'ipotesi sul potenziale patogeno? Quali conclusioni non puoi ricavare senza dati di espressione, fenotipo o contesto clinico?

**Missione 4 - Gli isolati sono collegati?**

Confronta un albero filogenetico, le distanze genomiche e le informazioni sui campioni. Identifica quali relazioni sono compatibili con un collegamento epidemiologico, quali sembrano meno plausibili e quali ulteriori dati sarebbero necessari per valutare una possibile fonte.

**Conclusione:** Formulazione scientifica breve: ipotesi meglio supportata, due evidenze e una limitazione.

## LAB 04 - The Phage Challenge

**Domanda iniziale:** Abbiamo diversi fagi e diversi isolati batterici. Come scegliamo candidati promettenti e perché un batterio può risultare resistente all'infezione fagica?

**Contesto del caso:** L'esercitazione comprende due dossier indipendenti. Il primo utilizza dati sperimentali sulle interazioni fago-*Klebsiella*. Il secondo utilizza un caso di studio sul sistema CRISPR-Cas di *Pseudomonas aeruginosa* PA14 e sul fago DMS3. I risultati dei due sistemi non devono essere mescolati.

**Obiettivi:** interpretare una matrice host range, realizzare un semplice grafico in R, esplorare il genoma di un fago, distinguere riconoscimento dell'ospite e difesa CRISPR.

**Missione 1 - Quali fagi riconoscono i nostri isolati?**

Apri la tabella delle interazioni fago-ospite. Ogni riga o cella deriva da un risultato sperimentale documentato. Prima di selezionare un fago, distingui i test positivi, quelli negativi e le combinazioni non valutate. Un risultato assente non equivale a un test negativo.

**Missione 2 - Visualizza l'host range**

Importa il CSV in R, esamina i nomi delle colonne e genera la heatmap suggerita. Quale fago mostra attività verso il maggior numero degli isolati analizzati? È possibile individuare una combinazione complementare di fagi? Non confondere ampiezza dell'host range con efficacia clinica.

**Missione 3 - Cosa ci dice un genoma fagico?**

Apri la mappa genomica interattiva di uno o più fagi presenti nel dataset. Identifica regioni annotate come proteine strutturali o di riconoscimento dell'ospite, se effettivamente supportate dall'annotazione. Discuti perché il contenuto genico può suggerire una funzione ma non dimostra necessariamente host range, ciclo litico o sicurezza d'impiego.

**Missione 4 - Il batterio può difendersi?**

Passiamo a un sistema sperimentale diverso: *P. aeruginosa* PA14 e il fago DMS3. Esamina il locus CRISPR-Cas e confronta risultati pubblicati per batteri con e senza sistema CRISPR funzionante e per fagi con cicli infettivi diversi. Quali risultati supportano la resistenza mediata da CRISPR? Quali suggeriscono altri meccanismi o il ruolo della lisogenia?

**Conclusione:** Spiega perché un fago capace di infettare un isolato in laboratorio non è automaticamente un trattamento utilizzabile e indica un esperimento che vorresti eseguire per approfondire.
