// ── Dataset (50 dokumen) ──
const DOCS = [
  {id:0,text:"Konsep green economy merupakan suatu konsep yang relatif baru, namun konsep ini sejatinya pengembangan dari sustainable development."},
  {id:1,text:"Penerapan dan pelaksanaan green economy yang terarah dan menyeluruh di Indonesia harus ditunjang oleh kebijakan pemerintah untuk menjamin keberhasilan penerapannya."},
  {id:2,text:"Seperti yang telah ditetapkan oleh Kabinet Indonesia Bersatu II dalam Rencana Pembangunan Jangka Menengah Nasional melalui aplikasi green budgeting untuk menata kelola keuangan anggaran pemerintah."},
  {id:3,text:"Konsep pembangunan berkelanjutan di Indonesia telah diamanatkan dalam pembukaan Undang-Undang Dasar 1945 sebagai dasar negara."},
  {id:4,text:"Hal ini sejalan dengan hasil Konferensi PBB tentang Lingkungan Hidup yang menyepakati prinsip dalam pengambilan keputusan pembangunan harus memperhatikan dimensi lingkungan."},
  {id:5,text:"Implementasi dari green budgeting antara lain melalui penerapan green procurement dan belanja publik yang ramah lingkungan."},
  {id:6,text:"Dalam rangka mengembangkan green economy, BKF kini tengah mengembangkan berbagai instrumen dan kebijakan fiskal hijau untuk evaluasi program."},
  {id:7,text:"Green economy merupakan suatu model pendekatan pembangunan ekonomi yang lebih efisien tanpa eksploitasi berlebihan terhadap sumber daya alam."},
  {id:8,text:"Green economy merupakan suatu lompatan besar untuk meninggalkan praktik-praktik ekonomi lama yang tidak berkelanjutan."},
  {id:9,text:"Peranan Kementerian Keuangan dalam mengimplementasikan konsep green economy melalui instrumen fiskal dan kebijakan lahan terbarukan."},
  {id:10,text:"Ekonomi hijau mengandalkan pada tiga strategi inti yang meliputi pengurangan emisi karbon, efisiensi penggunaan energi dan sumber daya alam, serta perlindungan terhadap ekosistem dan keanekaragaman hayati."},
  {id:11,text:"Kebijakan ekonomi hijau di Indonesia mencakup insentif fiskal untuk investasi energi terbarukan dan pertanian berkelanjutan."},
  {id:12,text:"Penelitian ini menggunakan pendekatan kualitatif dengan metode Systematic Literature Review untuk menganalisis strategi pembangunan pertanian berkelanjutan berbasis green economy di Indonesia."},
  {id:13,text:"Green economy dapat mendorong pertumbuhan ekonomi sekaligus mengurangi risiko lingkungan dan kelangkaan ekologis melalui pengelolaan sumber daya alam yang berkelanjutan."},
  {id:14,text:"Konsep ekonomi hijau meliputi cakupan yang luas dan merupakan pendekatan holistik terhadap pembangunan berkelanjutan yang ramah lingkungan."},
  {id:15,text:"Implementasi utama Ekonomi Hijau di Indonesia adalah komitmen pengurangan emisi gas rumah kaca melalui kebijakan nasional perubahan iklim."},
  {id:16,text:"Selain itu, green economy juga didasarkan pada pengetahuan ecological economics yang membahas tentang ketergantungan manusia terhadap ekosistem alam."},
  {id:17,text:"Indonesia memiliki sumber daya alam yang melimpah dan dapat dimanfaatkan untuk pengembangan energi terbarukan seperti bioenergi, tenaga surya, dan angin."},
  {id:18,text:"Strategi green economy berfokus pada peningkatan kesejahteraan masyarakat dan keadilan sosial melalui pengelolaan alam yang berkelanjutan."},
  {id:19,text:"Penerapan green economy di sektor pertanian Indonesia dapat meningkatkan produktivitas lahan sekaligus menjaga keseimbangan ekosistem."},
  {id:20,text:"Implementasi kebijakan ekonomi hijau memerlukan sinergi antara pemerintah pusat dan daerah dalam perencanaan pembangunan wilayah."},
  {id:21,text:"Sektor pertanian berkelanjutan berbasis green economy menjadi prioritas dalam rencana pembangunan nasional jangka menengah Indonesia."},
  {id:22,text:"Implementasi green economy di Indonesia yang terarah dan secara menyeluruh diharapkan mampu menciptakan lapangan kerja hijau dan mengurangi kemiskinan."},
  {id:23,text:"Program reforestasi dan rehabilitasi lahan kritis merupakan bagian penting dari strategi green economy Indonesia untuk menjaga daya dukung lingkungan."},
  {id:24,text:"Pengembangan energi terbarukan termasuk tenaga surya, angin, dan panas bumi menjadi tulang punggung transisi menuju ekonomi hijau Indonesia."},
  {id:25,text:"Temuan kajian ini menunjukkan bahwa implementasi ekonomi hijau di Indonesia memberikan dampak positif terhadap pertumbuhan ekonomi jangka panjang."},
  {id:26,text:"Penelitian ini menunjukkan bahwa penerapan ekonomi hijau di sektor pertanian meningkatkan efisiensi penggunaan air dan mengurangi pencemaran."},
  {id:27,text:"Implementasi utama Ekonomi Hijau di Indonesia adalah komitmen pengurangan emisi gas rumah kaca melalui kebijakan nasional perubahan iklim."},
  {id:28,text:"Kebijakan pemerintah merupakan faktor utama pendorong implementasi ekonomi hijau di Indonesia terutama melalui regulasi dan insentif fiskal."},
  {id:29,text:"Implementasi ekonomi hijau di Indonesia menunjukkan dampak positif terhadap pertumbuhan ekonomi dan pelestarian lingkungan hidup."},
  {id:30,text:"Ekonomi hijau di Indonesia merupakan paradigma pembangunan yang berorientasi pada kesejahteraan sosial dan kelestarian lingkungan alam."},
  {id:31,text:"Penerapan kebijakan ekonomi hijau memerlukan dukungan dari berbagai sektor termasuk swasta, masyarakat sipil, dan lembaga internasional."},
  {id:32,text:"Implementasi green economy di Indonesia yang terarah dan secara menyeluruh diharapkan mampu menciptakan pertumbuhan inklusif."},
  {id:33,text:"Penerapan kebijakan ekonomi hijau memiliki pengaruh positif dan signifikan terhadap penurunan emisi karbon dan peningkatan kualitas lingkungan."},
  {id:34,text:"Investasi dalam energi terbarukan dan pertanian berkelanjutan semakin meningkat di Indonesia seiring kebijakan green economy yang konsisten."},
  {id:35,text:"Transisi menuju green economy memerlukan perubahan paradigma dalam sistem produksi dan konsumsi nasional Indonesia secara fundamental."},
  {id:36,text:"Kebijakan fiskal hijau termasuk green bonds dan pajak karbon menjadi instrumen penting dalam mendanai transisi ekonomi hijau Indonesia."},
  {id:37,text:"Penerapan pertanian organik dan agroforestri merupakan praktik berkelanjutan yang sejalan dengan prinsip green economy di Indonesia."},
  {id:38,text:"Sektor energi menjadi kunci dalam transisi green economy melalui pengembangan sumber energi terbarukan yang berkelanjutan."},
  {id:39,text:"Pengelolaan sampah dan daur ulang berbasis circular economy merupakan bagian integral dari implementasi green economy Indonesia."},
  {id:40,text:"Kolaborasi antarnegara dalam pertukaran teknologi hijau sangat penting untuk mempercepat transisi menuju ekonomi berkelanjutan."},
  {id:41,text:"Pembangunan infrastruktur hijau seperti transportasi publik ramah lingkungan mendukung implementasi green economy di perkotaan Indonesia."},
  {id:42,text:"Pendidikan lingkungan hidup dan peningkatan kesadaran masyarakat menjadi fondasi penting dalam keberhasilan implementasi green economy."},
  {id:43,text:"Monitoring dan evaluasi implementasi green economy perlu dilakukan secara berkala menggunakan indikator pembangunan berkelanjutan yang terukur."},
  {id:44,text:"Kemitraan antara pemerintah dan sektor swasta sangat penting dalam membiayai investasi green economy skala besar di Indonesia."},
  {id:45,text:"Penerapan standar lingkungan internasional dalam industri Indonesia mendukung daya saing produk hijau di pasar global."},
  {id:46,text:"Pengembangan ekowisata berbasis komunitas menjadi alternatif mata pencaharian yang sejalan dengan prinsip green economy."},
  {id:47,text:"Teknologi informasi dan digitalisasi berperan penting dalam monitoring implementasi green economy dan pelaporan keberlanjutan."},
  {id:48,text:"Penguatan regulasi lingkungan hidup dan penegakan hukum menjadi fondasi penting dalam menjamin keberhasilan green economy Indonesia."},
  {id:49,text:"Penelitian dan inovasi teknologi hijau perlu terus didorong untuk menciptakan solusi berkelanjutan bagi tantangan lingkungan dan ekonomi."},
];

const STOPWORDS = new Set(['yang','dan','di','ke','dari','pada','dengan','untuk','dalam','adalah','ini','itu','atau','juga','sudah','tidak','bisa','akan','ada','oleh','bahwa','serta','dapat','telah','lebih','sebagai','para','agar','maka','sehingga','namun','tetapi','jika','karena','melalui','antara','lain','secara','maupun','selain','hal','pun','si','bagaimana','menjadi','hingga','suatu','saat','bagi','setelah','harus','sejak','atas','besar','sama','ia','mereka','kita','kami','lagi','masih','perlu','baik','saja','tiap','setiap','kepada','dimana','adapun','tapi','walaupun','meskipun','apabila','bila','sebuah','sebelum','supaya','ialah','yaitu','yakni','beberapa','semua','seluruh','berbagai','banyak','sedikit']);

function simpleClean(t){ return t.toLowerCase().replace(/\d+/g,'').replace(/[^a-z\s]/g,' ').replace(/\s+/g,' ').trim(); }
function tokenize(t){ return simpleClean(t).split(' ').filter(w=>w.length>2&&!STOPWORDS.has(w)); }
const SM={'ekonomi':'ekonomi','hijau':'hijau','green':'green','economy':'economy','kebijakan':'bijak','pemerintah':'perintah','pembangunan':'bangun','berkelanjutan':'lanjut','pertanian':'tani','energi':'energi','lingkungan':'lingkung','indonesia':'indonesia','implementasi':'implementasi','penerapan':'terap','terbarukan':'baru','emisi':'emisi','karbon':'karbon','fiskal':'fiskal','investasi':'investasi','sektor':'sektor','transisi':'transisi','strategi':'strategi','pengelolaan':'kelola','sumber':'sumber','pengembangan':'kembang','penerapan':'terap','keberhasilan':'hasil','masyarakat':'masyarakat','pelestarian':'lestar','keberlanjutan':'lanjut','perubahan':'ubah'};
function stem(w){ return SM[w]||w; }
function preprocess(q){ const raw=simpleClean(q).split(' ').filter(t=>t.length>1); const noSW=raw.filter(t=>!STOPWORDS.has(t)); const stemmed=noSW.map(stem); return {raw,noSW,stemmed}; }

function buildEngine(){
  const N=DOCS.length;
  const allToks=DOCS.map(d=>tokenize(d.text).map(stem));
  const vocab=[...new Set(allToks.flat())].sort();
  const df={};
  vocab.forEach(t=>{df[t]=allToks.filter(toks=>toks.includes(t)).length;});
  const idf={};
  vocab.forEach(t=>{idf[t]=df[t]>0?Math.log10(N/df[t]):0;});
  const invIdx={};
  allToks.forEach((toks,docId)=>{
    toks.forEach((t,pos)=>{
      if(!invIdx[t]) invIdx[t]={df:0,postings:{}};
      if(!invIdx[t].postings[docId]){invIdx[t].postings[docId]=[];invIdx[t].df++;}
      invIdx[t].postings[docId].push(pos);
    });
  });
  const tfidf=allToks.map(toks=>{
    const freq={};
    toks.forEach(t=>freq[t]=(freq[t]||0)+1);
    const vec={};
    vocab.forEach(t=>{const c=freq[t]||0;vec[t]=c>0?(1+Math.log10(c))*idf[t]:0;});
    return vec;
  });
  function l2(v){const s=Math.sqrt(Object.values(v).reduce((a,x)=>a+x*x,0));if(s===0)return v;const n={};Object.keys(v).forEach(k=>n[k]=v[k]/s);return n;}
  const tfidfN=tfidf.map(l2);
  const docLen=allToks.map(t=>t.length);
  return{vocab,df,idf,invIdx,tfidf,tfidfN,allToks,docLen,N};
}
const E=buildEngine();

function qvec(stemmed,norm=true){
  const freq={};stemmed.forEach(t=>freq[t]=(freq[t]||0)+1);
  const vec={};E.vocab.forEach(t=>{const c=freq[t]||0;vec[t]=c>0?(1+Math.log10(c))*E.idf[t]:0;});
  if(norm){const s=Math.sqrt(Object.values(vec).reduce((a,x)=>a+x*x,0));if(s>0)Object.keys(vec).forEach(k=>vec[k]/=s);}
  return vec;
}
function dot(a,b){let s=0;Object.keys(a).forEach(t=>{if(b[t])s+=a[t]*b[t];});return s;}
function search(stemmed,k=10,norm=true){
  const qv=qvec(stemmed,norm);const dm=norm?E.tfidfN:E.tfidf;
  return DOCS.map((d,i)=>({i,score:dot(qv,dm[i])})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,k);
}

// ── UI ──
function switchTab(name){
  const tabs=['search','index','bobot','norm','eval'];
  tabs.forEach(t=>{
    document.getElementById('tab-'+t).classList.toggle('active',t===name);
  });
  document.querySelectorAll('.nav-item').forEach((el,i)=>el.classList.toggle('active',tabs[i]===name));
  document.querySelectorAll('.tab-nav-item').forEach((el,i)=>el.classList.toggle('active',tabs[i]===name));
}

function setQuery(q){document.getElementById('query-input').value=q;doSearch();}

function doSearch(){
  const q=document.getElementById('query-input').value.trim();if(!q)return;
  const {raw,noSW,stemmed}=preprocess(q);
  const trail=document.getElementById('process-trail');trail.style.display='block';
  document.getElementById('trail-raw').innerHTML=`<span class="token clean">${q}</span>`;
  document.getElementById('trail-tokens').innerHTML=raw.map(t=>`<span class="token raw">${t}</span>`).join('');
  document.getElementById('trail-nosw').innerHTML=noSW.map(t=>`<span class="token clean">${t}</span>`).join('');
  document.getElementById('trail-stem').innerHTML=stemmed.map(t=>`<span class="token stem">${t}</span>`).join('');
  const results=search(stemmed,10,true);
  document.getElementById('results-count').textContent=`— ${results.length} dokumen ditemukan`;
  document.getElementById('norm-label').textContent='Cosine Similarity (Normalized)';
  const cont=document.getElementById('results-container');
  if(!results.length){cont.innerHTML=`<div class="empty-state"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/></svg><h3>Tidak ditemukan hasil</h3><p>Coba kata kunci yang lebih umum</p></div>`;return;}
  const maxS=results[0].score;
  const rankCls=['r1','r2','r3'];
  cont.innerHTML=results.map((r,idx)=>{
    const pct=(r.score/maxS*100).toFixed(0);
    return `<div class="result-item">
      <div class="result-item-header">
        <div class="rank-no ${rankCls[idx]||''}">${idx+1}</div>
        <span class="rank-label">Peringkat ${idx+1}</span>
        <span class="doc-tag">D${r.i+1}</span>
        <span class="score-tag">CosSim: ${r.score.toFixed(5)}</span>
        <span class="len-tag">${E.docLen[r.i]} term</span>
      </div>
      <div class="result-text">${DOCS[r.i].text}</div>
      <div class="result-bar"><div class="result-bar-fill" style="width:${pct}%;"></div></div>
    </div>`;
  }).join('');
}

// ── Inverted Index Table ──
function buildIndexTable(){
  const sorted=Object.entries(E.invIdx).sort((a,b)=>b[1].df-a[1].df).slice(0,10);
  const rows=sorted.map(([t,d])=>{
    const ids=Object.keys(d.postings).slice(0,5).map(x=>`D${+x+1}`).join(', ')+(Object.keys(d.postings).length>5?` +${Object.keys(d.postings).length-5}`:'');
    return `<tr><td class="mono" style="color:#1a4a75;">${t}</td><td class="mono" style="text-align:center;">${d.df}</td><td class="mono" style="text-align:center;color:#1b4d3e;">${E.idf[t]?E.idf[t].toFixed(4):'-'}</td><td style="color:#5c6d66;font-size:0.68rem;">${ids}</td></tr>`;
  }).join('');
  document.getElementById('top-terms-table').innerHTML=`<table class="data-table"><thead><tr><th>Term</th><th>DF</th><th>IDF</th><th>Doc IDs</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function searchIndex(term){
  const t=stem(term.toLowerCase().trim());
  const el=document.getElementById('idx-detail');
  if(!t||t.length<2){el.innerHTML=`<p style="font-size:0.7rem;color:#5c6d66;">Ketik kata di atas untuk melihat detail.</p>`;return;}
  const d=E.invIdx[t];
  if(!d){el.innerHTML=`<p style="font-size:0.7rem;color:#7a2a2a;padding:8px 0;">Term <code style="color:#7a591a;">"${t}"</code> tidak ditemukan dalam index.</p>`;return;}
  const iv=E.idf[t]||0;
  const rows=Object.entries(d.postings).slice(0,8).map(([docId,pos])=>{
    const tf=pos.length;const tfl=(1+Math.log10(tf)).toFixed(4);const tfidfv=(parseFloat(tfl)*iv).toFixed(4);
    return `<tr><td class="mono" style="color:#1a4a75;">D${+docId+1}</td><td class="mono" style="text-align:center;">${tf}</td><td class="mono" style="text-align:center;color:#1b4332;">${tfl}</td><td class="mono" style="text-align:center;color:#4a2c75;">${tfidfv}</td><td style="font-size:0.63rem;color:#5c6d66;">[${pos.slice(0,4).join(',')}${pos.length>4?'...':''}]</td></tr>`;
  }).join('');
  el.innerHTML=`<div class="grid-2" style="margin-bottom:8px;">
    <div class="metric-block"><div class="metric-block-label">Document Frequency</div><div class="metric-block-val" style="color:#7a591a;">${d.df}</div><div class="metric-block-sub">dari ${E.N} dokumen</div></div>
    <div class="metric-block blue"><div class="metric-block-label">IDF = log₁₀(${E.N}/${d.df})</div><div class="metric-block-val">${iv.toFixed(4)}</div></div>
  </div>
  <table class="data-table"><thead><tr><th>Doc</th><th>TF Raw</th><th>TF Log</th><th>TF-IDF</th><th>Posisi</th></tr></thead><tbody>${rows}</tbody></table>`;
}

// ── IDF Bar Chart ──
function buildIdfBars(){
  const sorted=Object.entries(E.idf).sort((a,b)=>b[1]-a[1]).slice(0,18);
  const maxV=sorted[0][1];
  document.getElementById('idf-bars').innerHTML=sorted.map(([t,v])=>{
    const pct=(v/maxV*100).toFixed(0);const df=E.df[t]||0;
    const color=v>1.2?'#1a4a75':v>0.7?'#1b4332':'#8c9d95';
    return `<div class="idf-bar-row"><span class="idf-term-name">${t}</span><span class="idf-df-label">df=${df}</span><div class="idf-bar-track"><div class="idf-bar-track-fill" style="width:${pct}%;background:${color};"></div></div><span class="idf-num">${v.toFixed(3)}</span></div>`;
  }).join('');
}

// ── Norm Comparison ──
function buildNormComparison(){
  const q='kebijakan ekonomi hijau indonesia';
  const{stemmed}=preprocess(q);
  const wN=search(stemmed,8,true);const woN=search(stemmed,8,false);
  const maxB=woN[0]?.score||1;const maxG=wN[0]?.score||1;
  const render=(res,cls,maxS)=>res.map((r,i)=>{
    const pct=(r.score/maxS*100).toFixed(0);
    return `<div class="compare-row"><span class="cr-rank">${i+1}</span><span class="cr-doc" style="color:${cls==='bad'?'#7a2a2a':'#1b4332'};">${'D'+(r.i+1)}</span><div class="cr-bar-wrap"><div class="cr-bar" style="width:${pct}%;background:${cls==='bad'?'#f8c4c4':'#1b4d3e'};"></div></div><span class="cr-score" style="color:${cls==='bad'?'#7a2a2a':'#1b4332'};">${r.score.toFixed(4)}</span><span class="cr-len">${E.docLen[r.i]}t</span></div>`;
  }).join('');
  document.getElementById('norm-bad-results').innerHTML=render(woN,'bad',maxB);
  document.getElementById('norm-good-results').innerHTML=render(wN,'good',maxG);
}

// ── Evaluation ──
function buildEvaluation(){
  const scenarios=[
    {query:'kebijakan ekonomi hijau indonesia',label:'Kueri 1 — "kebijakan ekonomi hijau indonesia"',kw:['kebijakan','ekonomi hijau','green economy','indonesia','pemerintah']},
    {query:'pertanian berkelanjutan energi terbarukan',label:'Kueri 2 — "pertanian berkelanjutan energi terbarukan"',kw:['pertanian','energi','berkelanjutan','terbarukan']},
  ];
  let sumP=0,sumR=0,sumF=0;
  const html=scenarios.map(sc=>{
    const{stemmed}=preprocess(sc.query);
    const res=search(stemmed,10,true);
    const gt=new Set(DOCS.filter(d=>sc.kw.filter(k=>d.text.toLowerCase().includes(k)).length>=2).map(d=>d.id));
    const retrieved=new Set(res.map(r=>r.i));
    const TP=new Set([...retrieved].filter(x=>gt.has(x)));
    const FP=new Set([...retrieved].filter(x=>!gt.has(x)));
    const FN=new Set([...gt].filter(x=>!retrieved.has(x)));
    const P=TP.size/(TP.size+FP.size)||0;const R=TP.size/(TP.size+FN.size)||0;const F=P+R>0?2*P*R/(P+R):0;
    sumP+=P;sumR+=R;sumF+=F;
    const rows=res.map((r,i)=>{
      const isTP=TP.has(r.i);const isFP=FP.has(r.i);
      const badge=isTP?`<span class="badge badge-green">TP</span>`:isFP?`<span class="badge badge-red">FP</span>`:`<span class="badge badge-gray">—</span>`;
      return `<tr><td class="mono">${i+1}</td><td class="mono">D${r.i+1}</td><td class="mono">${r.score.toFixed(4)}</td><td>${badge}</td><td style="max-width:320px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${DOCS[r.i].text.slice(0,80)}...</td></tr>`;
    }).join('');
    const fnRows=[...FN].slice(0,2).map(id=>`<tr style="opacity:0.5"><td class="mono">—</td><td class="mono">D${id+1}</td><td class="mono">0.0000</td><td><span class="badge badge-yellow">FN</span></td><td style="max-width:320px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${DOCS[id].text.slice(0,80)}...</td></tr>`).join('');
    return `<div class="card" style="margin-bottom:12px;">
      <div class="card-header">
        <h3>${sc.label}</h3>
      </div>
      <div class="grid-3" style="margin-bottom:10px;">
        <div class="metric-block green"><div class="metric-block-label">Precision</div><div class="metric-block-val">${P.toFixed(3)}</div><div class="metric-block-sub">TP/(TP+FP) = ${TP.size}/${TP.size+FP.size}</div></div>
        <div class="metric-block blue"><div class="metric-block-label">Recall</div><div class="metric-block-val">${R.toFixed(3)}</div><div class="metric-block-sub">TP/(TP+FN) = ${TP.size}/${TP.size+FN.size}</div></div>
        <div class="metric-block purple"><div class="metric-block-label">F-Measure</div><div class="metric-block-val">${F.toFixed(3)}</div><div class="metric-block-sub">2·P·R/(P+R)</div></div>
      </div>
      <div style="overflow-x:auto;"><table class="data-table"><thead><tr><th>Rank</th><th>Doc</th><th>CosSim</th><th>Status</th><th>Kalimat</th></tr></thead><tbody>${rows}${fnRows}</tbody></table></div>
      <p style="font-size:0.66rem;color:#4a4a54;margin-top:6px;">Ground truth: ${gt.size} dok relevan | Retrieved: ${retrieved.size} | TP=${TP.size} FP=${FP.size} FN=${FN.size}</p>
    </div>`;
  }).join('');
  document.getElementById('eval-results').innerHTML=html;
  const n=scenarios.length;
  document.getElementById('avg-p').textContent=(sumP/n).toFixed(3);
  document.getElementById('avg-r').textContent=(sumR/n).toFixed(3);
  document.getElementById('avg-f').textContent=(sumF/n).toFixed(3);
}

// ── Init ──
document.addEventListener('DOMContentLoaded',()=>{buildIndexTable();buildIdfBars();buildNormComparison();buildEvaluation();});
