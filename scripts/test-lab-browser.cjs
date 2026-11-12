// Run with NODE_PATH pointing to a Playwright installation and site served at 8765.
const {chromium}=require('playwright');const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({headless:true});const page=await browser.newPage({acceptDownloads:true});const errors=[];page.on('pageerror',e=>errors.push(e.message));
for(const lab of ['01','02','03','04']){
 const files={'01':'lab-01-fastq-asv','02':'lab-02-atlantic-microbiome','03':'lab-03-interactive-investigation','04':'lab-04-virtual-experiment'};
 await page.goto(`http://127.0.0.1:8765/${files[lab]}.html`);
 await page.locator('[data-investigation] #reset').click();
 await page.locator('#nickname').fill('test-student');
 const answers={'01':[4,0,0,0,0,0,0,0,1312,0],'02':[17,1312,15,43,1219,0,0,0,0.001,0],'03':[0,0,0,0,0,0,2,0,0,0],'04':[64,0,12,52,4,5,0,0,6,0]}[lab];
 for(let i=0;i<10;i++){
  const m=Math.floor(i/2);await page.locator('.mission-card .reveal').nth(m).click();
  const form=page.locator('.formative-question').nth(i);const num=form.locator('input[type=number]');
  if(await num.count())await num.fill(String(answers[i]));else await form.locator(`input[value="${answers[i]}"]`).check();
  await form.locator('button').click();
 }
 assert.match(await page.locator('[data-investigation] strong').innerText(),/100\/100/);
 await page.reload();assert.match(await page.locator('[data-investigation] strong').innerText(),/100\/100/);assert.equal(await page.locator('#nickname').inputValue(),'test-student');
 await page.locator('.lang-toggle[data-lang=en]').click();assert.equal(await page.locator('html').getAttribute('lang'),'en');assert.match(await page.title(),{'01':/FASTQ/,'02':/Atlantic/,'03':/Outbreak/,'04':/Phage/}[lab]);
 await page.locator('#final-note').fill('Scientific reasoning test');const download=page.waitForEvent('download');await page.locator('#export').click();assert.match((await download).suggestedFilename(),/report.json/);
 await page.setViewportSize({width:390,height:844});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1),true);await page.setViewportSize({width:1280,height:900});
 await page.locator('#reset').click();assert.match(await page.locator('[data-investigation] strong').innerText(),/0\/100/);
 // Wrong first attempt remains zero after correct practice.
 await page.locator('.mission-card .reveal').first().click();let form=page.locator('.formative-question').first();const numeric=await form.locator('input[type=number]').count();if(numeric)await form.locator('input').fill('999');else await form.locator('input[value="1"]').check();await form.locator('button').click();
 form=page.locator('.formative-question').first();if(numeric)await form.locator('input').fill(String(answers[0]));else await form.locator('input[value="0"]').check();await form.locator('button').click();assert.match(await page.locator('[data-investigation] strong').innerText(),/0\/100/);assert.match(await page.locator('.formative-question').first().innerText(),/2/);
 for(const link of await page.locator('[data-investigation] a[href]').evaluateAll(nodes=>nodes.map(a=>a.href))){if(link.startsWith('http://127.'))assert.equal((await page.request.get(link)).ok(),true,link)}
 console.log(`LAB ${lab}: answers, 100 points, persistence, first-attempt practice, locale, export, reset, mobile and resources PASS`);
}
assert.deepEqual(errors,[]);await browser.close()})().catch(e=>{console.error(e);process.exit(1)});
