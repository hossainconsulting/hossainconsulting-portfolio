const { chromium } = require('playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const cp = require('node:child_process');
(async () => {
 const before = cp.execFileSync('git',['show','origin/main:src/lib/site.ts'],{encoding:'utf8'});
 const after = fs.readFileSync('src/lib/site.ts','utf8');
 assert.equal(after.replace(/^  \{ label: "Reddit", href: "https:\/\/www\.reddit\.com\/user\/(?:hemayetAI|hossainconsulting)\/" \},\n/gm,''),before);
 const browser = await chromium.launch({executablePath:'/usr/bin/chromium',headless:true,args:['--no-sandbox','--no-proxy-server','--host-resolver-rules=MAP hemayethossain.com 127.0.0.1, MAP hossainconsulting.com 127.0.0.1']});
 for(const [host,user,other] of [['hemayethossain.com','hemayetAI','hossainconsulting'],['hossainconsulting.com','hossainconsulting','hemayetAI']]) {
  for(const [name,width,height] of [['desktop',1440,1000],['mobile',390,844]]) {
   const page=await browser.newPage({viewport:{width,height}});
   const response=await page.goto(`http://${host}:3107/`);
   assert.equal(response.status(),200);
   const footer=page.locator('footer');
   const reddit=footer.getByRole('link',{name:'Reddit ↗',exact:true});
   assert.equal(await reddit.count(),1);
   assert.equal(await reddit.getAttribute('href'),`https://www.reddit.com/user/${user}/`);
   assert.equal(await reddit.getAttribute('target'),'_blank');
   assert.equal(await reddit.getAttribute('rel'),'noopener noreferrer me');
   assert.equal(await footer.locator(`a[href="https://www.reddit.com/user/${other}/"]`).count(),0);
   assert.equal(await footer.locator('.footer-social a').count(),9);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
   for(const link of await footer.locator('.footer-social a').all()) {
    const box=await link.boundingBox(); assert(box && box.x>=0 && box.x+box.width<=width && box.height>=44);
   }
   await footer.screenshot({path:`evidence/2026-10-09/reddit-footer/${user}-${name}.png`});
   console.log(`PASS ${host} ${name}: correct isolated Reddit link; 9 social links; safe new-tab attributes; no horizontal overflow; social targets >=44px.`);
   await page.close();
  }
 }
 await browser.close(); console.log('PASS source comparison: all pre-existing content preserved byte-for-byte.');
})().catch(e=>{console.error(e);process.exit(1)});
