const pptxgen = require('pptxgenjs');
const NAVY='1F4E79', DEEP='14355A', INK='22303C', MUTE='6B7C8C';
const ICE='EAF0F6', PAPER='FFFFFF';
const RED='C0392B', GREEN='1D7A4C';
const HEAD='Cambria', BODY='Calibri';
const W=13.3, M=0.7;

function mk(title){
  const p = new pptxgen();
  p.layout='LAYOUT_WIDE';
  p.author='SAT Math: Foundations to Mastery';
  p.title=title;
  const t=(s,txt,o)=>s.addText(txt,Object.assign({isTextBox:true,fontFace:BODY,color:INK},o));
  const api={p,t,
    dark(title,sub){
      const s=p.addSlide(); s.background={color:DEEP};
      t(s,title,{x:M,y:2.5,w:W-2*M,h:1.6,fontSize:42,bold:true,fontFace:HEAD,color:'FFFFFF',margin:0});
      if(sub) t(s,sub,{x:M,y:4.2,w:W-2*M,h:0.9,fontSize:20,color:'CADCFC',margin:0});
      return s;
    },
    plain(){ const s=p.addSlide(); s.background={color:PAPER}; return s; },
    head(s,txt){ t(s,txt,{x:M,y:0.45,w:W-2*M,h:0.8,fontSize:32,bold:true,fontFace:HEAD,color:NAVY,margin:0}); },
    badge(s,x,y,n,col){
      s.addShape(p.ShapeType.ellipse,{x,y,w:0.55,h:0.55,fill:{color:col||NAVY}});
      t(s,String(n),{x,y,w:0.55,h:0.55,fontSize:20,bold:true,color:'FFFFFF',align:'center',valign:'middle',margin:0});
    },
    numhead(s,n,txt){
      api.badge(s,M,0.54,n);
      t(s,txt,{x:M+0.75,y:0.52,w:11.2,h:0.7,fontSize:30,bold:true,fontFace:HEAD,color:NAVY,margin:0});
    },
    card(s,x,y,w,h,fill){
      s.addShape(p.ShapeType.roundRect,{x,y,w,h,rectRadius:0.1,
        fill:{color:fill||ICE},line:{color:fill?fill:'D7E2EC',width:1}});
    },
    // a row of boxed items. `h` is ignored: each card is sized to its own
    // content (with a floor and a ceiling) so cards neither clip nor stretch.
    strip(s,items,y,_h,opts){
      const o=opts||{}; const n=items.length;
      const gap=o.gap===undefined?0.3:o.gap;
      const floor=o.bottom===undefined?5.15:o.bottom;
      const cw=(W-2*M-gap*(n-1))/n;
      const fs=o.fs||16;
      const perLine=Math.max(14,Math.floor((cw-0.5)/(fs*0.0062)));
      // longest card decides the shared height, so the row stays even
      let maxLines=1;
      items.forEach(it=>{
        let L=0;
        String(it.body).split('\n').forEach(seg=>{ L+=Math.max(1,Math.ceil(seg.length/perLine)); });
        maxLines=Math.max(maxLines,L);
      });
      const natural=0.66+maxLines*(fs*0.0178)+0.28;
      const h=Math.max(1.55,Math.min(natural,floor-y));
      items.forEach((it,i)=>{
        const x=M+i*(cw+gap);
        api.card(s,x,y,cw,h,it.fill);
        t(s,it.label,{x:x+0.25,y:y+0.2,w:cw-0.5,h:0.35,fontSize:12,bold:true,
                      color:it.lc||NAVY,charSpacing:1,margin:0});
        t(s,it.body,{x:x+0.25,y:y+0.68,w:cw-0.5,h:h-0.95,fontSize:fs,
                     color:INK,valign:'top',margin:0});
      });
      return y+h;
    },
    // stacked label | value rows. Row height is computed so the stack always
    // ends at the content floor - it never runs into the banner or off-slide.
    rows(s,data,y0,opts){
      const o=opts||{}; const n=data.length;
      const floor=o.bottom===undefined?5.15:o.bottom;
      let gap=o.gap||0.2;
      let rh=(floor-y0-gap*(n-1))/n;
      if(rh<0.72){ gap=0.1; rh=(floor-y0-gap*(n-1))/n; }
      rh=Math.max(0.6,Math.min(rh,1.3));
      const lw=o.lw||4.3;
      const vfs=Math.min(o.vfs||22, Math.round(rh*22));
      data.forEach((r,i)=>{
        const y=y0+i*(rh+gap);
        api.card(s,M,y,W-2*M,rh,r.fill);
        t(s,r.label,{x:M+0.35,y:y+0.08,w:lw,h:rh-0.16,fontSize:Math.min(o.lfs||15,vfs-4),
                     color:MUTE,valign:'middle',margin:0});
        t(s,r.value,{x:M+lw+0.6,y:y+0.08,w:W-2*M-lw-1.0,h:rh-0.16,
                     fontSize:vfs,bold:true,fontFace:HEAD,color:r.col||NAVY,
                     valign:'middle',margin:0});
      });
      return y0+n*(rh+gap)-gap;
    },
    // y is ignored: the banner always sits against the bottom margin so a
    // sparse slide does not leave a dead band and a dense one cannot clip.
    banner(s,_y,txt,sub){
      const h = sub?1.35:0.95;
      const y = 6.95 - h;
      api.card(s,M,y,W-2*M,h);
      t(s,txt,{x:M+0.45,y:y+0.2,w:W-2*M-0.9,h:0.55,fontSize:21,bold:true,color:NAVY,valign:'middle',margin:0});
      if(sub) t(s,sub,{x:M+0.45,y:y+0.76,w:W-2*M-0.9,h:0.45,fontSize:15,color:MUTE,valign:'middle',margin:0});
      return y;
    },
    // --- real SAT questions pulled straight from the verified bank ---
    qSlide(title, ids, sub){
      const {tex,get}=require('./tex.js');
      const s=api.plain(); api.head(s,title);
      if(sub) t(s,sub,{x:M,y:1.3,w:W-2*M,h:0.4,fontSize:16,color:MUTE,margin:0});
      const n=ids.length, gap=0.3, top=sub?1.85:1.55;
      const cw=(W-2*M-gap*(n-1))/n;
      const notes=[];
      // measure every card first so the row shares one height
      const fsAll=n>2?14:16;
      const cwAll=cw, perAll=Math.floor((cwAll-0.6)/(fsAll*0.0062));
      let maxLines=1;
      ids.forEach(id=>{
        const q=get(id); let L=Math.ceil(tex(q.stem).length/perAll);
        (q.choices||[]).forEach((c,j)=>{ L+=Math.ceil(('ABCD'[j]+')  '+tex(c)).length/perAll); });
        if(q.type==='spr') L+=1;
        maxLines=Math.max(maxLines,L);
      });
      const rowH=Math.min(0.75+maxLines*(fsAll*0.0182)+0.3, 5.15-top);
      ids.forEach((id,i)=>{
        const q=get(id), x=M+i*(cw+gap);
        const stem=tex(q.stem);
        const isSPR=q.type==='spr';
        const fs=n>2?14:16;
        const perLine=Math.floor((cw-0.6)/(fs*0.0062));
        let lines=Math.ceil(stem.length/perLine);
        const opts=(q.choices||[]).map((c,j)=>'ABCD'[j]+')  '+tex(c));
        opts.forEach(o=>{ lines+=Math.ceil(o.length/perLine); });
        if(isSPR) lines+=1;
        const h=rowH;
        api.card(s,x,top,cw,h);
        t(s,'QUESTION '+(i+1)+(isSPR?'  \u00b7  WRITE YOUR ANSWER':''),
          {x:x+0.28,y:top+0.18,w:cw-0.56,h:0.3,fontSize:11,bold:true,
           color:NAVY,charSpacing:1,margin:0});
        t(s,stem,{x:x+0.28,y:top+0.6,w:cw-0.56,h:Math.ceil(stem.length/perLine)*(fs*0.0182)+0.1,
                  fontSize:fs,color:INK,valign:'top',margin:0});
        if(opts.length){
          const oy=top+0.6+Math.ceil(stem.length/perLine)*(fs*0.0182)+0.22;
          t(s,opts.join('\n'),{x:x+0.28,y:oy,w:cw-0.56,h:h-(oy-top)-0.25,
                    fontSize:fs-1,color:INK,valign:'top',lineSpacingMultiple:1.25,margin:0});
        }
        notes.push(`Q${i+1} (${id}) answer: ${isSPR?q.answer:q.answer+') '+tex(q.choices['ABCD'.indexOf(q.answer)])}  \u2014  ${tex(q.solution)}`);
      });
      api.banner(s,0,'Work them on paper first. Then we check together.',
        'Answers and full solutions are in the speaker notes for this slide.');
      s.addNotes(notes.join('\n\n'));
      return s;
    },
    hw(s,rowsData,note){
      api.head(s,'This week');
      t(s,'Four short sittings. Not one long one.',{x:M,y:1.3,w:W-2*M,h:0.45,fontSize:17,color:MUTE,margin:0});
      rowsData.forEach((r,i)=>{
        const y=1.9+i*1.08;
        api.card(s,M,y,W-2*M,0.92,i%2?PAPER:ICE);
        t(s,r[0],{x:M+0.35,y:y+0.24,w:1.9,h:0.45,fontSize:17,bold:true,color:NAVY,margin:0});
        t(s,r[1],{x:M+2.35,y:y+0.24,w:1.7,h:0.45,fontSize:16,color:MUTE,margin:0});
        t(s,r[2],{x:M+4.2,y:y+0.24,w:6.0,h:0.45,fontSize:16,color:INK,margin:0});
        t(s,r[3],{x:M+10.3,y:y+0.24,w:1.3,h:0.45,fontSize:16,bold:true,color:NAVY,align:'right',margin:0});
      });
      t(s,note,{x:M,y:6.35,w:W-2*M,h:0.5,fontSize:17,italic:true,color:NAVY,margin:0});
    },
    close(s,small,big,foot){
      s.background={color:DEEP};
      const lines=big.split('\n').length;
      const hH=lines*0.78+0.2;
      const kickY=Math.max(1.5, 3.9-hH/2-0.95);
      t(s,small,{x:M,y:kickY,w:W-2*M,h:0.8,fontSize:30,fontFace:HEAD,color:'CADCFC',valign:'middle',margin:0});
      t(s,big,{x:M,y:kickY+0.95,w:W-2*M,h:hH,fontSize:44,bold:true,fontFace:HEAD,color:'FFFFFF',valign:'top',margin:0});
      t(s,foot,{x:M,y:kickY+0.95+hH+0.35,w:W-2*M,h:0.6,fontSize:20,color:'8FA6C4',margin:0});
    },
    title(s,big,sub,foot){
      s.background={color:DEEP};
      const lines=big.split('\n').length;
      const tH=lines*1.0+0.15;
      const ty=Math.max(1.5, 3.1-tH/2);
      t(s,big,{x:M,y:ty,w:10.8,h:tH,fontSize:54,bold:true,fontFace:HEAD,color:'FFFFFF',valign:'top',margin:0});
      t(s,sub,{x:M,y:ty+tH+0.35,w:10.8,h:0.8,fontSize:25,color:'CADCFC',valign:'middle',margin:0});
      t(s,foot,{x:M,y:6.4,w:10,h:0.5,fontSize:14,color:'8FA6C4',margin:0});
    },
    C:{NAVY,DEEP,INK,MUTE,ICE,PAPER,RED,GREEN,HEAD,BODY,W,M}
  };
  return api;
}
module.exports={mk};
