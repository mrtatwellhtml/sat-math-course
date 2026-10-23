// Slides cannot render LaTeX, so turn the bank's TeX into readable unicode.
const SUP={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴',
           '5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','n':'ⁿ'};
function tex(s){
  if(s==null) return '';
  let t=String(s);
  t=t.replace(/\$\$?/g,'');
  t=t.replace(/\\d?frac\{([^{}]+)\}\{([^{}]+)\}/g,(m,a,b)=>`${a}/${b}`);
  t=t.replace(/\\sqrt\{([^{}]+)\}/g,(m,a)=>`√(${a})`);
  t=t.replace(/\^\{(\d+)\}/g,(m,d)=>[...d].map(c=>SUP[c]||c).join(''));
  t=t.replace(/\^(\d)/g,(m,d)=>SUP[d]||('^'+d));
  const map={'\\\\ge':'≥','\\\\leq':'≤','\\\\le':'≤','\\\\geq':'≥',
    '\\\\neq':'≠','\\\\times':'×','\\\\cdot':'·','\\\\div':'÷',
    '\\\\pm':'±','\\\\approx':'≈','\\\\rightarrow':'→','\\\\to':'→',
    '\\\\infty':'∞','\\\\pi':'π','\\\\%':'%','\\\\\\$':'\\$','\\\\,':' ','\\\\ ':' '};
  for(const k in map) t=t.replace(new RegExp(k,'g'),map[k]);
  t=t.replace(/\\\\left|\\\\right/g,'');
  t=t.replace(/\\\\text\{([^{}]*)\}/g,'$1');
  t=t.replace(/\\\\mathrm\{([^{}]*)\}/g,'$1');
  t=t.replace(/[{}]/g,'');
  t=t.replace(/\\\\[a-zA-Z]+/g,'');
  t=t.replace(/-/g,'−').replace(/−−/g,'−');
  t=t.replace(/\s+/g,' ');
  // readable spacing: binary operators and relations get air around them
  t=t.replace(/([0-9a-zA-Z\)\u00b2\u00b3])\s*([+\u2212])\s*/g,'$1 $2 ');
  t=t.replace(/\s*([=<>\u2264\u2265\u2260])\s*/g,' $1 ');
  t=t.replace(/\s+/g,' ').trim();
  return t;
}
const bank=require('./bank.json');
const byId={}; bank.questions.forEach(q=>byId[q.id]=q);
function get(id){ const q=byId[id]; if(!q) throw new Error('no question '+id); return q; }
module.exports={tex,get,bank};
