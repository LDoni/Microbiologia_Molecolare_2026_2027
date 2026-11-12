/* Formative assessment: all state stays in this browser. */
document.addEventListener('DOMContentLoaded', () => {
 const host=document.querySelector('[data-investigation]'); if(!host)return;
 const lab=host.dataset.investigation, key='mm-formative-v2-'+lab;
 const en=()=>document.documentElement.classList.contains('lang-en');
 const t=(a,b)=>en()?b:a;
 let titles=lab==='03'?['Il fascicolo del caso|The case file','Dalle reads ai genomi|From reads to genomes','Qualità e identità|Genome quality and identity','Evidenza genomica|Following genomic evidence','Rapporto finale|Final investigation report']:['Evidenza sperimentale|Experimental evidence','Analisi in RStudio|RStudio analysis','Copertura e genomi|Coverage and genomes','CRISPR-Cas|CRISPR-Cas','Proposta motivata|Defensible proposal'];
 let times=lab==='03'?[15,35,30,45,25]:[20,35,30,40,25];
 // Each answer earns 10 first-attempt points. Practice does not rewrite history.
 let questions=lab==='03'?[
 ['La somiglianza genomica prova la fonte?|Does genomic similarity prove the source?', ['No|No','Sì|Yes'],0,'Servono dati epidemiologici indipendenti.|Independent epidemiological evidence is required.'],
 ['Quale documento consulti prima?|Which document comes first?', ['Registro campioni|Sample register','Solo albero|Tree only'],0,'Il registro collega identificatori e contesto del caso.|The register links identifiers to case context.'],
 ['Le FASTQ sintetiche hanno prodotto gli assembly?|Did synthetic FASTQ generate these assemblies?', ['No|No','Sì|Yes'],0,'Il replay consegna assembly già preparati.|Replay delivers prepared assemblies.'],
 ['Dove trovi i contig SPAdes?|Where are SPAdes contigs?', ['contigs.fasta|contigs.fasta','report.tsv|report.tsv'],0,'La directory scelta contiene contigs.fasta.|The selected directory contains contigs.fasta.'],
 ['N50 da solo prova correttezza?|Does N50 alone establish correctness?', ['No|No','Sì|Yes'],0,'Continuità e correttezza sono proprietà diverse.|Contiguity and correctness are different properties.'],
 ['ST11 prova trasmissione diretta?|Does ST11 prove direct transmission?', ['No|No','Sì|Yes'],0,'MLST ha risoluzione limitata.|MLST has limited resolution.'],
 ['Distanza P01–F01 (SNP)?|P01–F01 distance (SNP)?',2,2,'La matrice validata riporta 2.|The validated matrix reports 2.'],
 ['Distanza P02–F01 (SNP)?|P02–F01 distance (SNP)?',0,0,'La matrice riporta zero differenze core; i genomi completi possono differire.|The matrix reports zero core differences; complete genomes may differ.'],
 ['0 SNP core significa genomi necessariamente identici?|Does 0 core SNP mean necessarily identical genomes?', ['No|No','Sì|Yes'],0,'Il filtraggio può escludere differenze.|Filtering can exclude differences.'],
 ['Quale conclusione è difendibile?|Which conclusion is defensible?', ['Compatibilità da verificare con metadati|Compatibility to assess with metadata','Direzione certa|Certain transmission direction'],0,'Genomica e metadati devono essere interpretati insieme.|Interpret genomics and metadata together.']
 ]:[
 ['Quante osservazioni nel pannello?|How many panel observations?',64,64,'8 × 8 = 64.'],['Cella vuota nella fonte completa?|A blank in the full source?', ['Non testata|Untested','Negativa|Negative'],0,'Assenza di misura non significa assenza di interazione.|Missing measurement is not a negative interaction.'],
 ['Quanti positivi?|How many positives?',12,12,'Il subset verificato contiene 12 positivi.|The verified subset contains 12 positives.'],['Quanti negativi?|How many negatives?',52,52,'64 − 12 = 52.'],
 ['Massima copertura di una coppia?|Maximum hosts covered by a pair?',4,4,'La tabella delle coppie riporta massimo 4/8.|The pairs table reports a maximum of 4/8.'],['Quanti ID hanno un match genomico esatto?|How many IDs have an exact genome match?',5,5,'Solo cinque nomi sono verificati nell’archivio.|Only five names are verified in the archive.'],
 ['PA14/DMS3 e Klebsiella sono lo stesso esperimento?|Are PA14/DMS3 and Klebsiella one experiment?', ['No|No','Sì|Yes'],0,'I sistemi sperimentali sono separati.|These experimental systems are separate.'],['Una corrispondenza spacer basta a provare immunità?|Does a spacer match alone prove immunity?', ['No|No','Sì|Yes'],0,'Contano PAM, seed e contesto funzionale.|PAM, seed and functional context matter.'],
 ['Numero minimo di fagi per coprire il subset?|Minimum phages covering the subset?',6,6,'Le combinazioni minime verificate contengono sei fagi.|Verified minimum combinations contain six phages.'],['Host range dimostra efficacia clinica?|Does host range prove clinical efficacy?', ['No|No','Sì|Yes'],0,'Il saggio misura interazioni nelle condizioni osservate.|The assay records interactions under observed conditions.']];
 const config=window.MM_LABS?.[lab]; if(config){titles=config.titles;times=config.times;questions=config.questions;}
 const split=s=>s.split('|')[en()?1:0]||s.split('|')[0];
 let state; try{state=JSON.parse(localStorage.getItem(key))}catch{}; state=state||{name:'',answers:{},note:'',open:0};
 const save=()=>{try{localStorage.setItem(key,JSON.stringify(state))}catch{}};
 const score=i=>state.answers[i]?.firstCorrect?10:0;
 function draw(){
 document.title=`LAB ${lab} — ${config?split(config.title):lab==='03'?t('Indagine del focolaio','Outbreak investigation'):t('La sfida dei fagi','The Phage Challenge')}`;
 host.innerHTML=`<label>${t('Nickname','Nickname')} <input id="nickname" autocomplete="off"></label><p>${t('Autovalutazione formativa locale; non è un verbale d’esame.','Browser-local formative self-assessment; not an official examination record.')}</p><p>${t('Primo tentativo','First attempt')}: <strong>${questions.reduce((s,_,i)=>s+score(i),0)}/100</strong></p><div id="missions"></div><label>${t('Rapporto scientifico (non valutato automaticamente)','Scientific report (not automatically graded)')}<textarea id="final-note" rows="7"></textarea></label><button id="export">${t('Scarica rapporto JSON','Download JSON report')}</button> <button id="reset">${t('Azzera laboratorio','Reset laboratory')}</button>`;
 host.querySelector('#nickname').value=state.name;host.querySelector('#nickname').oninput=e=>{state.name=e.target.value;save()};
 titles.forEach((title,m)=>{
 const section=document.createElement('section');section.className='mission-card';section.innerHTML=`<h2>${m+1}. ${split(title)} · ${times[m]} min</h2><p>${t('Primo tentativo missione','Mission first attempt')}: ${score(m*2)+score(m*2+1)}/20</p><button class="reveal">${t('Apri evidenze e attività','Open evidence and activity')}</button><div class="mission-body" ${m>state.open?'hidden':''}></div>`;
 section.querySelector('.reveal').onclick=()=>{section.querySelector('.mission-body').hidden=false;state.open=Math.max(state.open,m);save()};
 const body=section.querySelector('.mission-body'); const evidence=document.querySelector(`[data-evidence="${m}"]`); if(evidence) body.append(evidence.content.cloneNode(true));
 if(lab==='03'&&m===4){const interview=document.createElement('p');interview.textContent=t('Nuova testimonianza: entrambi avevano mangiato F01; solo P01 aveva consumato F02. Mancano dati sistematici sugli altri clienti e i campioni ambientali sono stati raccolti giorni dopo. Scrivi 120–180 parole, includendo un’ipotesi alternativa.','New interview evidence: both people ate F01; only P01 consumed F02. Systematic data on other diners are unavailable and environmental samples were taken days later. Write 120–180 words, including an alternative hypothesis.');body.prepend(interview)}
 [m*2,m*2+1].forEach(i=>{const q=questions[i], f=document.createElement('form');f.className='formative-question';const numeric=typeof q[1]==='number'; f.innerHTML=`<fieldset><legend>${split(q[0])}</legend>${numeric?'<input type="number" step="any" required aria-label="'+t('Risposta numerica','Numerical answer')+'">':q[1].map((v,j)=>`<label><input required type="radio" name="answer" value="${j}"> ${split(v)}</label><br>`).join('')}<button>${t('Verifica / riprova','Check / practise')}</button><p role="status"></p></fieldset>`;
 const feedback=()=>{const a=state.answers[i]; if(a) f.querySelector('[role=status]').textContent=(a.lastCorrect?t('Corretto. ','Correct. '):t('Rivedi le evidenze. ','Review the evidence. '))+split(q[3])+` ${t('Primo tentativo','First attempt')}: ${score(i)}/10; ${t('tentativi','attempts')}: ${a.attempts}`};feedback();
 f.onsubmit=e=>{e.preventDefault();const v=numeric?Number(f.querySelector('input').value):Number(f.querySelector('input:checked').value);const correct=v===q[2];const prev=state.answers[i];state.answers[i]={firstCorrect:prev?prev.firstCorrect:correct,lastCorrect:correct,attempts:(prev?.attempts||0)+1};save();draw()};body.append(f)});
 host.querySelector('#missions').append(section)});
 host.querySelector('#final-note').value=state.note;host.querySelector('#final-note').oninput=e=>{state.note=e.target.value;save()};
 host.querySelector('#reset').onclick=()=>{state={name:'',answers:{},note:'',open:0};save();draw()};
 host.querySelector('#export').onclick=()=>{const blob=new Blob([JSON.stringify({lab,nickname:state.name,firstAttemptScore:questions.reduce((s,_,i)=>s+score(i),0),missions:titles.map((v,m)=>({mission:split(v),score:score(m*2)+score(m*2+1),maximum:20})),answers:state.answers,scientificReport:state.note,assessment:'formative self-assessment'},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`lab${lab}-report.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
 }
 draw();new MutationObserver(draw).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
});
