/* Shared teaching-site navigation, language selection and information dialogs. */
(() => {
 'use strict';
 const en=window.siteLanguage==='en';
 const tr=(fr,english)=>en?english:fr;
 document.documentElement.lang=en?'en':'fr';
 document.title=tr('Python pour la chimie · XLG2CE814','Python for chemistry · XLG2CE814');
 const descriptions=document.querySelector('meta[name="description"]');
 if(descriptions)descriptions.content=tr('Apprendre Python pour modéliser et analyser des données en chimie. Cours, TP et projets avec Basthon.','Learn Python to model chemical systems and analyse data. Lessons, practicals and projects with Basthon.');
 if(en){
  const texts={
   'Aller au contenu':'Skip to content','Python pour la chimie':'Python for chemistry','Accueil':'Home','Cours':'Course','TP':'Practicals','Projets':'Projects','Ressources':'Resources','Contact':'Contact',
   'XLG2CE814 · Apprendre, essayer, comprendre.':'XLG2CE814 · Learn, try, understand.',
   'ATELIER PYTHON':'PYTHON WORKSPACE','Mon notebook':'My notebook','En attente':'Waiting',
   'Télécharger mon notebook':'Download my notebook','Ouvrir un notebook':'Open a notebook','Importer des données':'Import data','Redémarrer Python':'Restart Python',
   'Sauvegarde locale par espace':'Work saved locally for each workspace','Mes fichiers':'My files',
   'Choisissez une séquence pour commencer.':'Choose a lesson to begin.','Maj':'Shift','Entrée':'Enter',
   ' pour exécuter une cellule · Téléchargez votre travail en fin de séance.':' to run a cell · Download your work at the end of each session.'
  };
  const walk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
  while((node=walk.nextNode())){if(node.parentElement.closest('script,style'))continue;const v=node.nodeValue;if(Object.hasOwn(texts,v))node.nodeValue=texts[v];else if(Object.hasOwn(texts,v.trim()))node.nodeValue=v.replace(v.trim(),texts[v.trim()]);}
  const attributes={'Navigation principale':'Main navigation','Cours et énoncés':'Lessons and instructions','Largeur du panneau de lecture':'Reading pane width','Espace Python':'Python workspace'};
  document.querySelectorAll('[aria-label]').forEach(el=>{const v=el.getAttribute('aria-label');if(attributes[v])el.setAttribute('aria-label',attributes[v]);});
 }
 const langNav=document.createElement('div');langNav.className='language-switch';langNav.setAttribute('role','group');langNav.setAttribute('aria-label',tr('Langue du site','Site language'));
 for(const lang of ['fr','en']){
  const a=document.createElement('a');const u=new URL(location.href);u.searchParams.set('lang',lang);a.href=u.href;a.lang=lang;a.hreflang=lang;a.textContent=lang.toUpperCase();a.dataset.siteLanguage=lang;a.setAttribute('aria-label',lang==='fr'?'Version française':'English version');
  if(lang===window.siteLanguage)a.setAttribute('aria-current','true');
  a.addEventListener('click',async e=>{
   if(e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
   e.preventDefault();if(lang===window.siteLanguage)return;
   try{if(window.persistForLanguageSwitch)await window.persistForLanguageSwitch();}
   catch(error){window.alert(tr('La sauvegarde a échoué. Téléchargez votre notebook avant de changer de langue.','Saving failed. Download your notebook before switching languages.'));return;}
   try{localStorage.setItem('chimie-language',lang)}catch(error){}
   const target=new URL(location.href);target.searchParams.set('lang',lang);location.assign(target.href);
  });if(lang==='en'){const separator=document.createElement('span');separator.className='language-separator';separator.textContent='/';separator.setAttribute('aria-hidden','true');langNav.append(separator)}langNav.append(a);
 }
 document.querySelector('header').append(langNav);
 const updateLanguageLinks=()=>langNav.querySelectorAll('a').forEach(a=>{const u=new URL(location.href);u.searchParams.set('lang',a.dataset.siteLanguage);a.href=u.href});
 window.addEventListener('hashchange',updateLanguageLinks);
 const skip=document.querySelector('.skip');if(skip)skip.addEventListener('click',e=>{e.preventDefault();document.getElementById('reading').focus()});
 const footer=document.createElement('footer');footer.className='teaching-footer';
 footer.innerHTML=`<div class="footer-identity"><a class="footer-home" href="#accueil"><strong>${tr('Python pour la chimie · Licence','Python for chemistry · Undergraduate course')}</strong></a><button class="design-credit" type="button" data-dialog="design-dialog" aria-haspopup="dialog" aria-controls="design-dialog">${tr('Conception :','Created by:')} Lénaïc Lartigue</button><a class="footer-license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer"><img src="assets/images/cc-by-nc-nd.png" width="88" height="31" alt="CC BY-NC-ND 4.0"></a></div><div class="footer-links"><button type="button" data-dialog="sharing-dialog" aria-haspopup="dialog" aria-controls="sharing-dialog">${tr('Partage et citation','Sharing and citation')}</button><button type="button" data-dialog="audience-dialog" aria-haspopup="dialog" aria-controls="audience-dialog">${tr('Mesure d’audience','Audience measurement')}</button></div>`;
 document.body.append(footer);
 const commonURL='https://lenaiclartigue.github.io/python-chimie/';
 const sharing=`<h2 id="sharing-title">${tr('Partage et citation','Sharing and citation')}</h2><h3>CC BY-NC-ND 4.0</h3><p>${tr('Les contenus pédagogiques originaux de ce site sont proposés par Lénaïc Lartigue sous licence Creative Commons Attribution — Pas d’utilisation commerciale — Pas de partage des adaptations 4.0 International.','The original teaching materials on this site are provided by Lénaïc Lartigue under the Creative Commons Attribution–NonCommercial–NoDerivatives 4.0 International licence.')}</p><p><a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">${tr('Consulter la licence CC BY-NC-ND 4.0','Read the CC BY-NC-ND 4.0 licence')} ↗</a></p><h3>${tr('Citer le site','Cite this site')}</h3><p>Lartigue, L. (2026). <em>Python pour la chimie — XLG2CE814.</em> <a href="${commonURL}">${commonURL}</a> (${tr('consulté le [date]','accessed [date]')}). CC BY-NC-ND 4.0.</p><p>${tr('Pour citer une activité précise, ajoutez son titre et son adresse.','To cite a specific activity, include its title and URL.')}</p><p>${tr('Basthon, Python, les bibliothèques et les ressources tierces conservent leurs licences propres.','Basthon, Python, third-party libraries and external resources retain their own licences.')} <a href="assets/NOTICE.txt" target="_blank" rel="noopener">${tr('Notices des composants','Component notices')}</a>.</p><div class="dialog-actions"><button type="button" id="copy-page-link">${tr('Copier le lien de cette page','Copy the link to this page')}</button></div><p id="copy-link-status" role="status"></p>`;
 const audience=`<h2 id="audience-title">${tr('Mesure d’audience','Audience measurement')}</h2><p>${tr('Comme sur le site de thermochimie, Simple Analytics est utilisé pour comptabiliser les consultations du site public. Selon le prestataire, cette mesure fonctionne sans cookies et ne conserve pas les adresses IP.','As on the thermochemistry site, Simple Analytics is used to count visits to the public site. According to the provider, this measurement uses no cookies and does not store IP addresses.')}</p><p>${tr('Seules les consultations des pages et des activités sont mesurées. Vos notebooks, votre code, vos résultats, vos fichiers importés, vos notes et les informations de votre groupe ne sont pas envoyés au service de mesure d’audience.','Only visits to pages and activities are measured. Your notebooks, code, results, imported files, notes and group information are not sent to the analytics service.')}</p><p>${tr('Votre travail et votre progression restent enregistrés dans ce navigateur. Téléchargez vos notebooks et vos notes pour en conserver une copie sur votre ordinateur.','Your work and progress remain stored in this browser. Download your notebooks and notes to keep a copy on your computer.')}</p><p><a href="https://docs.simpleanalytics.com/what-we-do-and-dont-collect" target="_blank" rel="noopener noreferrer">${tr('Informations sur les données collectées','Information about the data collected')} ↗</a></p>`;
 const design=`<h2 id="design-title">${tr('Conception et choix pédagogiques','Design and teaching choices')}</h2><h3>${tr('Références','References')}</h3><p>${tr('Ces références ont guidé la conception du site.','These references informed the design of the site.')}</p><ul class="design-references">${[
 ['Nielsen Norman Group — 5 Principles of Visual Design','https://www.nngroup.com/articles/principles-visual-design/'],
 ['The Learning Scientists — Dual Coding','https://www.learningscientists.org/blog/2016/9/1-1'],
 ['CESE — Managing cognitive load through effective presentations','https://education.nsw.gov.au/about-us/education-data-and-research/cese/publications/practical-guides-for-educators/managing-cognitive-load-through-effective-presentations'],
 ['IBM Carbon — Progress indicator','https://www.carbondesignsystem.com/building-blocks/core/components/progress-indicator/specifications'],
 ['W3C WAI — Accessibility principles','https://www.w3.org/WAI/fundamentals/accessibility-principles/']
 ].map(([title,url])=>`<li><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></li>`).join('')}</ul>`;
 for(const [id,label,body] of [['sharing-dialog','sharing-title',sharing],['audience-dialog','audience-title',audience],['design-dialog','design-title',design]]){
  const dialog=document.createElement('dialog');dialog.id=id;dialog.className='teaching-dialog';dialog.setAttribute('aria-labelledby',label);dialog.innerHTML=`<button type="button" class="dialog-close" aria-label="${tr('Fermer','Close')}">×</button>${body}`;document.body.append(dialog);
  dialog.querySelector('.dialog-close').onclick=()=>dialog.close();
  dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
 }
 document.addEventListener('click',e=>{
  const trigger=e.target.closest('[data-dialog],a[href="licence.html"]');if(!trigger)return;e.preventDefault();const dialog=document.getElementById(trigger.dataset.dialog||'sharing-dialog');dialog.showModal();dialog.addEventListener('close',()=>{if(trigger.isConnected)trigger.focus()},{once:true});
 });
 const copyStatus=document.getElementById('copy-link-status');
 document.getElementById('copy-page-link').onclick=async()=>{
  // Share only the public activity and language, never local files or notes.
  const u=new URL(commonURL);u.searchParams.set('lang',window.siteLanguage);u.hash=location.hash;
  try{await navigator.clipboard.writeText(u.href);copyStatus.textContent=tr('Lien copié.','Link copied.');}
  catch(error){copyStatus.textContent=tr('Lien à copier : ','Link to copy: ')+u.href;}
 };
 // Do not count internal previews, local files or the embedded Python runtime.
 if(location.hostname==='lenaiclartigue.github.io'&&location.pathname.startsWith('/python-chimie/')){
  const analytics=document.createElement('script');analytics.async=true;analytics.dataset.mode='hash';analytics.src='https://scripts.simpleanalyticscdn.com/latest.js';document.head.append(analytics);
 }
})();
