const {mk}=require('./common.js');
const A=mk('Translation - Session 4');
const {p,t,C}=A; const {NAVY,INK,MUTE,ICE,PAPER,RED,GREEN,HEAD,W,M}=C;

/* 1 */ A.title(A.plain(),'Translation','Build the equation before you touch the arithmetic.','SAT Math  ·  Session 4  ·  18 October');

/* 2 warm-up */
{ const s=A.plain(); A.head(s,'Warm-up — eight minutes');
  t(s,'Three weeks, all still running.',{x:M,y:1.3,w:11.9,h:0.4,fontSize:17,color:MUTE,margin:0});
  A.strip(s,[
   {label:'SIGNS',body:'f(x) = x² − 4x\nFind f(−3).'},
   {label:'LINES',body:'Slope through\n(2, −5) and (6, 3)?'},
   {label:'LINES',body:'y-intercept of\n4x − 2y = 18?'},
   {label:'SYSTEMS',body:'y = 3x − 1 and\n2x + y = 9.\nFind x.'},
  ],1.9,null,{fs:16});
  A.banner(s,0,'Nothing gets dropped because we moved on. Each week keeps the one before it alive.');
}

/* 3 the case */
{ const s=A.plain(); A.head(s,'Where your marks actually go');
  const end=A.rows(s,[
   {label:'Diagnostic question 7',value:'You got it right. Two-step setup, clean.',col:GREEN},
   {label:'Diagnostic question 22',value:'Worked out 0.18 × 220, then stopped.',col:RED},
   {label:'What that tells me',value:'The arithmetic is not the problem.',col:NAVY},
  ],1.6,{rh:1.1,gap:0.25,lw:4.6,vfs:21});
  A.banner(s,end,'Word problems are decided in the first fifteen seconds, before you calculate anything.',
    'That is the part we are working on today.');
}

/* 4 section */ A.dark('The six patterns','The SAT reuses them. All of them.');

/* 5 patterns table */
{ const s=A.plain(); A.head(s,'Six patterns, over and over');
  const end=A.rows(s,[
   {label:'"the total is 94"',value:'=  94',col:NAVY},
   {label:'"7 less than x"',value:'x − 7      not  7 − x',col:RED},
   {label:'"18 dollars for each month"',value:'18m',col:NAVY},
   {label:'"15% of the price"',value:'0.15p',col:NAVY},
   {label:'"muffins and scones came to 94.50"',value:'2.25m + 3.50s = 94.50',col:NAVY},
   {label:'"twice as many apples as pears"',value:'a = 2p      not  2a = p',col:RED},
  ],1.5,{rh:0.82,gap:0.14,lw:5.4,vfs:19});
  A.banner(s,end,'The two in red are where the marks go. Both of them read backwards from how they sound.');
}

/* 6 trap 1 */
{ const s=A.plain(); A.numhead(s,1,'"Less than" runs backwards');
  t(s,'Seven less than a number. Start at the number, then go down seven.',
    {x:M,y:1.4,w:11.9,h:0.4,fontSize:17,color:INK,margin:0});
  A.strip(s,[
   {label:'WHAT IT SOUNDS LIKE',body:'7 − x\n\nYou read it left to right\nand wrote it down in\nthat order.',fill:'FBEEEC',lc:RED},
   {label:'WHAT IT MEANS',body:'x − 7\n\nStart at x. Take 7 off it.\nThe number you start\nfrom is written first.',fill:'EAF5EE',lc:GREEN},
  ],1.95,null,{fs:16,gap:0.6});
  A.banner(s,0,'Test it with a number. Seven less than 20 is 13, so it has to be 20 − 7.',
    'If your expression gives −13, you wrote it backwards.');
}

/* 7 trap 2 */
{ const s=A.plain(); A.numhead(s,2,'"Twice as many" also runs backwards');
  t(s,'Twice as many apples as pears. Let a be apples and p be pears.',
    {x:M,y:1.4,w:11.9,h:0.4,fontSize:17,color:INK,margin:0});
  A.strip(s,[
   {label:'WHAT IT SOUNDS LIKE',body:'2a = p\n\nThe 2 is next to the\napples in the sentence,\nso it went next to a.',fill:'FBEEEC',lc:RED},
   {label:'WHAT IT MEANS',body:'a = 2p\n\nThere are MORE apples.\nSo apples is the side\nthat gets multiplied.',fill:'EAF5EE',lc:GREEN},
  ],1.95,null,{fs:16,gap:0.6});
  A.banner(s,0,'Ask which one there is more of. The 2 goes with the bigger quantity.',
    'Three pears means six apples: a = 2(3) = 6. Check it with real numbers every time.');
}

/* 8 the procedure */
{ const s=A.plain(); A.head(s,'The four steps, every time');
  const end=A.rows(s,[
   {label:'1',value:'Name the unknown. Write it down.',col:NAVY},
   {label:'2',value:'Find the quantities and their units.',col:NAVY},
   {label:'3',value:'Find the sentence with "is" or "total" in it.',col:NAVY},
   {label:'4',value:'Write the equation. Read it back as the story.',col:GREEN},
  ],1.7,{rh:1.05,gap:0.22,lw:0.9,vfs:22,lfs:19});
  A.banner(s,end,'Step 4 is the one you will skip. It is the one that catches a backwards equation.',
    'Read it out loud if you have to. If it does not sound like the story, it is not the story.');
}

/* 9 worked */
{ const s=A.plain(); A.head(s,'One worked all the way through');
  t(s,'A gym charges a 45 dollar joining fee plus 20 dollars a month. A member has paid 205 dollars. How many months?',
    {x:M,y:1.3,w:11.9,h:0.45,fontSize:17,color:INK,margin:0});
  const end=A.rows(s,[
   {label:'Name the unknown',value:'let m = the number of months',col:NAVY},
   {label:'Quantities and units',value:'45 dollars once, 20 dollars per month, 205 total',col:NAVY},
   {label:'The relationship',value:'"has paid 205" — that is the equals',col:NAVY},
   {label:'The equation',value:'20m + 45 = 205',col:GREEN},
   {label:'Read it back',value:'"20 a month plus the 45 fee comes to 205"',col:GREEN},
  ],1.9,{rh:0.84,gap:0.14,lw:4.4,vfs:19});
  A.banner(s,end,'Only now do you solve it. 20m = 160, so m = 8.');
}

/* 10 practice */
A.qSlide('Practice — set these up',['1.7-e-01','1.7-m-01'],'Write the equation. Do not solve them.');
A.qSlide('Practice — the traps',['1.7-e-02','1.7-m-02'],'One of these is a reversal. One is a direction.');
A.qSlide('Practice — all the way through',['1.7-m-03','1.7-h-01'],'Set up, then solve.');

/* 11 your turn */
{ const s=A.plain(); A.head(s,'Your turn — 20 minutes');
  t(s,'Ten questions. You set up all ten. You solve two of them.',
    {x:M,y:1.35,w:11.9,h:0.45,fontSize:18,color:INK,margin:0});
  A.strip(s,[
   {label:'WHY ONLY TWO',body:'The arithmetic already\nworks. Practising it is\npractising the part that\nis not broken.'},
   {label:'EVERY ONE',body:'Name the unknown first.\nOn the paper, not in\nyour head.'},
   {label:'EVERY ONE',body:'Read the equation back\nas a sentence before\nyou move on.'},
  ],2.0,null,{fs:16});
  A.banner(s,0,'Leaving them unsolved will feel wrong. Do it anyway.',
    'Ten setups teaches you more today than three full solutions would.');
  s.addNotes('Tell him WHY before he starts or he will solve them all. Say nothing unless he is stuck ninety seconds.');
}

/* 12 homework */
{ A.hw(A.plain(),[
   ['Sunday','Part A','Retention: signs, slope, systems.','15 min'],
   ['Tuesday','Part B','Setups only. Do not solve.','25 min'],
   ['Thursday','Part C','The two traps.','25 min'],
   ['Saturday','Parts D, E','Set up and solve; six mixed, timed.','27 min'],
  ],'Plus the full practice test this week — due Friday 24 October.');
}

/* 13 close */
A.close(A.plain(),'The hard part is not the arithmetic.',
        'It is deciding what\nto write down\nin the first place.',
        'Name the unknown. Read it back as the story.');

p.writeFile({fileName:'translation-session-4.pptx'}).then(f=>console.log('WROTE',f));
