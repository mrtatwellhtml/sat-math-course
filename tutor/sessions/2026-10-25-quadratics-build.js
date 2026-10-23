const {mk}=require('./common.js');
const A=mk('Quadratics - Session 5');
const {p,t,C}=A; const {NAVY,INK,MUTE,ICE,PAPER,RED,GREEN,HEAD,W,M}=C;

/* 1 */ A.title(A.plain(),'Quadratics','Every squared thing has two square roots.','SAT Math  ·  Session 5  ·  25 October');

/* 2 warm-up */
{ const s=A.plain(); A.head(s,'Warm-up — eight minutes');
  t(s,'Last week. Write the equation only — do not solve.',{x:M,y:1.3,w:11.9,h:0.4,fontSize:17,color:MUTE,margin:0});
  A.strip(s,[
   {label:'SET IT UP',body:'A taxi charges 4 dollars\nplus 2 a mile. A ride\ncost 26. How many miles?'},
   {label:'SET IT UP',body:'Five less than three\ntimes a number is 31.'},
   {label:'SET IT UP',body:'A club has 60 members,\nwith three times as many\njuniors as seniors.'},
   {label:'SET IT UP',body:'Pens cost 2, pads cost 5.\nEight items cost 28 in\ntotal.'},
  ],1.9,null,{fs:15});
  A.banner(s,0,'Name the unknown first. Read each equation back as the story.');
}

/* 3 new ground */
{ const s=A.plain(); A.head(s,'Today is new ground');
  const end=A.rows(s,[
   {label:'Weeks 1 to 4',value:'Lines, systems, inequalities, word problems',col:NAVY},
   {label:'That is one domain',value:'Algebra — about 35% of the test',col:NAVY},
   {label:'Today',value:'Advanced Math — the other 35%',col:GREEN},
  ],1.6,{rh:1.1,gap:0.25,lw:4.4,vfs:21});
  A.banner(s,end,'You scored nothing on this half of the diagnostic. That was five weeks ago and you had not been taught it.',
    'Expect today to feel harder than the last four. That is the material, not you.');
  s.addNotes('Say this out loud. He will find today harder and needs to know that is expected, not a regression.');
}

/* 4 section */ A.dark('One move, two directions','Expanding and factoring are the same thing.');

/* 5 both directions */
{ const s=A.plain(); A.head(s,'You already know half of this');
  A.strip(s,[
   {label:'EXPANDING — YOU CAN DO THIS',body:'(x + 3)(x + 5)\n↓\nx² + 5x + 3x + 15\n↓\nx² + 8x + 15'},
   {label:'FACTORING — THE SAME, BACKWARDS',body:'x² + 8x + 15\n↓\nwhat two numbers\nmultiply to 15 and add to 8?\n↓\n(x + 3)(x + 5)'},
  ],1.6,null,{fs:16,gap:0.6});
  A.banner(s,0,'Factoring is not a new skill. It is the one you have, run in the other direction.',
    'Multiply to the last number, add to the middle one. That is the whole search.');
}

/* 6 three forms */
{ const s=A.plain(); A.head(s,'Three you should spot instantly');
  const end=A.rows(s,[
   {label:'Difference of squares',value:'x² − 49  =  (x + 7)(x − 7)',col:NAVY},
   {label:'Perfect square',value:'x² + 6x + 9  =  (x + 3)²',col:NAVY},
   {label:'Common factor, always first',value:'2x² − 8  =  2(x + 2)(x − 2)',col:GREEN},
  ],1.7,{rh:1.1,gap:0.24,lw:5.0,vfs:22});
  A.banner(s,end,'Check for a common factor before anything else. It makes everything after it smaller.',
    'Two squares with a minus between them always factor. Two squares with a plus never do.');
}

/* 7 section */ A.dark('Three ways to solve','Look first, then pick — same as systems.');

/* 8 choose */
{ const s=A.plain(); A.head(s,'Look at it before you solve it');
  const end=A.rows(s,[
   {label:'It factors cleanly',value:'Factor, set each bracket to zero',col:NAVY},
   {label:'Something squared = a number',value:'Square root both sides — take BOTH signs',col:RED},
   {label:'Neither, or the numbers are ugly',value:'Quadratic formula, or graph it',col:NAVY},
   {label:'It asks only how many solutions',value:'Discriminant. Do not solve it at all',col:GREEN},
  ],1.75,{rh:0.98,gap:0.2,lw:5.8,vfs:20});
  A.banner(s,end,'Same decision you learned for systems, applied to a new shape.');
}

/* 9 the lost root */
{ const s=A.plain(); A.numhead(s,1,'The root you are going to lose');
  t(s,'Solve (x − 3)² = 16.',{x:M,y:1.4,w:11.9,h:0.45,fontSize:20,bold:true,fontFace:HEAD,color:INK,margin:0});
  A.strip(s,[
   {label:'WHAT MOST STUDENTS WRITE',body:'x − 3 = 4\nx = 7\n\nOne answer. Half the\nmarks.',fill:'FBEEEC',lc:RED},
   {label:'WHAT IS TRUE',body:'x − 3 = 4  or  x − 3 = −4\nx = 7   or   x = −1\n\nTwo answers. Both are\nreal solutions.',fill:'EAF5EE',lc:GREEN},
  ],1.95,null,{fs:16,gap:0.6});
  A.banner(s,0,'Sixteen has two square roots: 4 and −4. Four squared is 16, and so is −4 squared.',
    'This is diagnostic question 15. You put −1 and 5 — you found both roots and then slipped a sign.');
  s.addNotes('Connect this to the sign work from week 1. Same habit, new place. He has the tool already.');
}

/* 10 desmos */
{ const s=A.plain(); A.numhead(s,2,'Desmos does this faster than you do');
  A.strip(s,[
   {label:'BOTH ROOTS',body:'Type the expression as\ny = ...\n\nClick each point where\nthe curve crosses the\nx-axis.'},
   {label:'THE TURNING POINT',body:'Click the bottom (or top)\nof the curve.\n\nThat is the vertex — the\nminimum or maximum.'},
   {label:'HOW MANY SOLUTIONS',body:'Count the crossings.\n\nTwo, one, or none. No\ndiscriminant needed.'},
  ],1.55,null,{fs:15});
  A.banner(s,0,'Open Bluebook now and do one of each. It is on every single maths question in the test.');
  s.addNotes('Run this live. Make him do all three himself before moving on.');
}

/* 11 practice */
A.qSlide('Practice — expanding and factoring',['3.2-e-01','3.2-m-01'],'Check a factorisation by multiplying it back out.');
A.qSlide('Practice — solving',['3.3-e-01','3.3-m-01'],'How many answers should each of these have?');
A.qSlide('Practice — in context',['3.3-m-02','3.3-h-01'],'One root will not make sense. Say which, and why.');

/* 12 your turn */
{ const s=A.plain(); A.head(s,'Your turn — 18 minutes');
  A.strip(s,[
   {label:'FOUR TO FACTOR',body:'Check each one by\nmultiplying it back out.\nIt either matches or\nit does not.'},
   {label:'FOUR TO SOLVE',body:'Write down how many\nanswers you expect\nBEFORE you start.'},
   {label:'TWO IN CONTEXT',body:'Both roots are real.\nOnly one makes sense.\nSay which, and why.'},
  ],1.6,null,{fs:16});
  A.banner(s,0,'Predicting the number of answers first is the habit that stops you losing one.',
    'If you expected two and have one, you are not finished.');
}

/* 13 homework */
{ A.hw(A.plain(),[
   ['Sunday','Part A','Retention: translation setups.','15 min'],
   ['Tuesday','Part B','Expanding and factoring.','25 min'],
   ['Thursday','Part C','Solving quadratics.','25 min'],
   ['Saturday','Parts D, E','In context; six mixed, timed.','27 min'],
  ],'Bring the sheet and your error log on 1 November.');
}

/* 14 close */
A.close(A.plain(),'You have spent five weeks learning not to lose signs.',
        'This is the same habit,\nin a new place.',
        'Every squared thing has two square roots.');

p.writeFile({fileName:'quadratics-session-5.pptx'}).then(f=>console.log('WROTE',f));
