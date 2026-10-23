const {mk}=require('./common.js');
const A=mk('Lines - Session 2');
const {p,t,C}=A; const {NAVY,INK,MUTE,ICE,PAPER,RED,GREEN,HEAD,W,M}=C;

/* 1 */ A.title(A.plain(),'Lines','One relationship, four costumes.','SAT Math  ·  Session 2  ·  4 October');

/* 2 warm-up */
{ const s=A.plain(); A.head(s,'Warm-up — eight minutes');
  t(s,'No calculator. Brackets on every substitution.',{x:M,y:1.3,w:11.9,h:0.4,fontSize:17,color:MUTE,margin:0});
  A.strip(s,[
   {label:'1',body:'9 − (−4)  ='},
   {label:'2',body:'−(5 − 12)  ='},
   {label:'3',body:'f(x) = 2x² − x\nFind f(−3).'},
   {label:'4',body:'Solve 6 − 3x ≥ 18'},
  ],1.9,2.4,{fs:18});
  A.banner(s,4.7,'If any of those felt slow, say so now rather than at the end.',
           'Last week was the foundation for everything today sits on.');
  s.addNotes('Time it. Under four minutes and all four right means the sign work held.');
}

/* 3 where we got to */
{ const s=A.plain(); A.head(s,'Where we got to');
  const end=A.rows(s,[
   {label:'Last week',value:'Seven of your seventeen were one error',col:NAVY},
   {label:'The habit',value:'Every substitution gets brackets',col:GREEN},
   {label:'Today',value:'Lines — about five or six questions on the test',col:NAVY},
  ],1.6,{rh:1.1,gap:0.25,lw:3.2,vfs:23});
  A.banner(s,end+0.45,'Today is not a new topic on top of last week. It is the first topic that needed last week to work.');
}

/* 4 section */ A.dark('One line, four costumes','The SAT rarely asks you to do anything hard to a line.');

/* 5 four costumes */
{ const s=A.plain(); A.head(s,'The same line, four ways');
  t(s,'A gym charges a $45 joining fee and $20 a month.',{x:M,y:1.3,w:11.9,h:0.4,fontSize:17,color:INK,margin:0});
  const items=[
   {label:'AS A SENTENCE',body:'$45 to join, then\n$20 for each month.'},
   {label:'AS A TABLE',body:'0 months → $45\n1 month  → $65\n2 months → $85'},
   {label:'AS A GRAPH',body:'Starts at 45 on the\nvertical axis, climbs\n20 for every 1 across.'},
   {label:'AS AN EQUATION',body:'C = 20m + 45'},
  ];
  A.strip(s,items,1.85,2.5,{fs:15});
  A.banner(s,4.75,'Four costumes, one relationship. The question is which costume it is wearing.',
           'The 20 and the 45 are in all four. Point at them in each before you move on.');
  s.addNotes('Make him point at the 20 and the 45 in each of the four. Do not move on until he can.');
}

/* 6 slope is the per */
{ const s=A.plain(); A.numhead(s,1,'The slope is the "per"');
  const end=A.rows(s,[
   {label:'$20 per month',value:'slope = 20',col:NAVY},
   {label:'12 litres per minute',value:'slope = 12',col:NAVY},
   {label:'loses 3 degrees each hour',value:'slope = −3',col:RED},
   {label:'8 fewer every week',value:'slope = −8',col:RED},
  ],1.6,{rh:0.95,gap:0.18,lw:5.2,vfs:24});
  A.banner(s,end+0.4,'If the sentence says "per", "each", or "every", it is telling you the slope.',
           'And if it says fewer, loses, falls or drops, the slope is negative.');
}

/* 7 intercept */
{ const s=A.plain(); A.numhead(s,2,'The intercept is the "before"');
  t(s,'What you have before anything happens. Before any months, any minutes, any miles.',
    {x:M,y:1.35,w:11.9,h:0.4,fontSize:17,color:INK,margin:0});
  A.strip(s,[
   {label:'THE JOINING FEE',body:'You pay it on day zero,\nbefore a single month.'},
   {label:'THE STARTING AMOUNT',body:'Water already in the\ntank before the tap.'},
   {label:'THE FLAT RATE',body:'The $45 on the van hire,\nbefore any miles.'},
  ],1.9,2.1,{fs:16});
  A.banner(s,4.4,'In C = 20m + 45, put m = 0. Everything with an m in it disappears, and 45 is what is left.',
           'That is all an intercept is: the value when the other thing is zero.');
}

/* 8 slope from two points */
{ const s=A.plain(); A.numhead(s,3,'Slope from two points');
  t(s,'Through (3, −2) and (7, 6):',{x:M,y:1.35,w:11.9,h:0.4,fontSize:17,color:INK,margin:0});
  const end=A.rows(s,[
   {label:'The change in y, on top',value:'6 − (−2)  =  8',col:NAVY},
   {label:'The change in x, underneath',value:'7 − 3  =  4',col:NAVY},
   {label:'Divide',value:'8 ÷ 4  =  2',col:GREEN},
  ],1.85,{rh:1.0,gap:0.2,lw:5.0,vfs:24});
  A.banner(s,end+0.4,'Both points in the same order, top and bottom. Brackets round every coordinate.',
           'This is diagnostic question 4. The formula was never the problem.');
}

/* 9 solving: three traps */
{ const s=A.plain(); A.head(s,'Solving: the three that trip people');
  A.strip(s,[
   {label:'VARIABLES BOTH SIDES',body:'Collect them on the side\nthat keeps the number\npositive.\n\n5x − 4 = 2x + 11\n→ 3x = 15'},
   {label:'FRACTIONS',body:'Multiply EVERY term by\nthe denominator first.\nIncluding the ones with\nno fraction in them.'},
   {label:'THE VARIABLE VANISHES',body:'Not a mistake. It is the\nanswer, and the SAT\nasks for it directly.\n\nSee the next slide.'},
  ],1.5,3.2,{fs:15});
  A.banner(s,5.0,'Collecting on the positive side is not a preference. It removes a sign risk instead of managing one.');
}

/* 10 no solution vs infinite */
{ const s=A.plain(); A.head(s,'When the variable disappears');
  A.strip(s,[
   {label:'NO SOLUTION',body:'2(x + 3) = 2x + 11\n2x + 6 = 2x + 11\n6 = 11\n\nFalse. Nothing works.\nThe lines are parallel.',fill:'FBEEEC',lc:RED},
   {label:'INFINITELY MANY',body:'2(x + 3) = 2x + 6\n2x + 6 = 2x + 6\n6 = 6\n\nTrue. Everything works.\nThey are the same line.',fill:'EAF5EE',lc:GREEN},
  ],1.5,3.0,{fs:16,gap:0.6});
  A.banner(s,4.8,'Ask one question: is what is left true or false?','False means no solution. True means every number is a solution.');
}

/* 11 rule */
{ const s=A.plain(); s.background={color:C.DEEP};
  t(s,'If you remember one thing:',{x:M,y:1.9,w:11.9,h:0.6,fontSize:22,color:'CADCFC',margin:0});
  t(s,'The slope is the "per".\nThe intercept is what you\nhave before anything happens.',
    {x:M,y:2.6,w:11.9,h:2.6,fontSize:40,bold:true,fontFace:HEAD,color:'FFFFFF',margin:0});
  t(s,'C  =  20m  +  45',{x:M,y:5.5,w:11.9,h:0.7,fontSize:30,fontFace:HEAD,color:'CADCFC',margin:0});
}

/* 12 what does the number mean */
{ const s=A.plain(); A.head(s,'What does the number mean?');
  t(s,'A van costs $45 plus $0.18 a mile, so C = 0.18m + 45. A driver travels 220 miles.',
    {x:M,y:1.3,w:11.9,h:0.4,fontSize:17,color:INK,margin:0});
  A.strip(s,[
   {label:'WHAT YOU PUT',body:'Total is $39.60, and $45\nis the cost before any\nmiles are driven.',fill:'FBEEEC',lc:RED},
   {label:'WHAT IS TRUE',body:'Total is $84.60, and $45\nis the cost before any\nmiles are driven.',fill:'EAF5EE',lc:GREEN},
  ],1.85,2.2,{fs:16,gap:0.6});
  A.banner(s,4.35,'You read the 45 correctly. You worked out 0.18 × 220 = 39.60 and stopped there.',
           'The question asked for the total. The fee is part of the total.');
  s.addNotes('This is diagnostic Q22. It is a reading failure, not a maths one. Say that plainly.');
}

/* 12b practice: solving */
A.qSlide('Practice \u2014 solving',['1.1-e-02','1.1-m-04'],'The second one does not have a number for an answer.');
/* 12c practice: slope */
A.qSlide('Practice \u2014 slope',['1.2-e-01','1.2-m-06'],'Brackets round every coordinate.');
/* 12d practice: what it means */
A.qSlide('Practice \u2014 what the number means',['1.3-m-01','1.3-e-01'],'Read these. Do not calculate.');

/* 13 your turn */
{ const s=A.plain(); A.head(s,'Your turn — 20 minutes');
  t(s,'Four of each. Brackets on every substitution, and check one answer by putting it back in.',
    {x:M,y:1.35,w:11.9,h:0.45,fontSize:18,color:INK,margin:0});
  A.strip(s,[
   {label:'SOLVE',body:'Equations with the\nvariable on both sides,\nand two with fractions.'},
   {label:'FIND THE SLOPE',body:'From two points, from\na table, and from an\nequation.'},
   {label:'SAY WHAT IT MEANS',body:'Given a model, what\ndoes each number\nstand for?'},
  ],2.0,2.3,{fs:16});
  A.banner(s,4.65,'If you think you have one right, do not ask me. Put it back in and see.',
           'Stuck for ninety seconds? Then ask.');
  s.addNotes('Say nothing unless he is stuck for ninety seconds. Twenty minutes of him working beats twenty of you talking.');
}

/* 14 homework */
{ A.hw(A.plain(),[
   ['Sunday','Part A','Sign retention. No calculator.','15 min'],
   ['Tuesday','Part B','Solving linear equations.','25 min'],
   ['Thursday','Part C','Slope, four ways.','25 min'],
   ['Saturday','Parts D, E','What the number means; six mixed, timed.','27 min'],
  ],'Bring the sheet and your error log next Sunday.');
}

/* 15 close */
A.close(A.plain(),'The SAT will not ask you to do anything hard to a line.',
        'It will ask you to\nrecognise the same one\nin a different costume.',
        'Slope is the "per". Intercept is the "before".');

p.writeFile({fileName:'lines-session-2.pptx'}).then(f=>console.log('WROTE',f));
