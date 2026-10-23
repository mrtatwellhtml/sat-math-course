const {mk}=require('./common.js');
const A=mk('Systems and Inequalities - Session 3');
const {p,t,C}=A; const {NAVY,INK,MUTE,ICE,PAPER,RED,GREEN,HEAD,W,M}=C;

/* 1 */ A.title(A.plain(),'Systems\n& Inequalities','Look before you solve.','SAT Math  ·  Session 3  ·  11 October');

/* 2 warm-up */
{ const s=A.plain(); A.head(s,'Warm-up — eight minutes');
  t(s,'Two from the week before last, two from last week.',{x:M,y:1.3,w:11.9,h:0.4,fontSize:17,color:MUTE,margin:0});
  A.strip(s,[
   {label:'SIGNS',body:'−4 − (−9)  ='},
   {label:'SIGNS',body:'g(x) = x² − 5x\nFind g(−2).'},
   {label:'LINES',body:'Slope through\n(−1, 4) and (3, −4)?'},
   {label:'LINES',body:'In P = 250 + 12w,\nwhat does 250 mean?'},
  ],1.9,2.4,{fs:17});
  A.banner(s,4.7,'Both threads still running. Neither gets dropped because we moved on.');
}

/* 3 section */ A.dark('Three ways to solve a system','And the three seconds that decide which one.');

/* 4 look before you solve */
{ const s=A.plain(); A.head(s,'Look at it before you touch it');
  t(s,'Most students start substituting on reflex and meet ugly fractions a minute later.',
    {x:M,y:1.3,w:11.9,h:0.4,fontSize:17,color:INK,margin:0});
  const end=A.rows(s,[
   {label:'A variable is already alone',value:'Substitute',col:NAVY},
   {label:'Coefficients match, or are opposites',value:'Eliminate',col:NAVY},
   {label:'Neither, and the numbers are ugly',value:'Graph it on Desmos',col:NAVY},
   {label:'It asks only for x + y, or 2x − y',value:'Add or subtract, then stop',col:GREEN},
  ],1.85,{rh:0.95,gap:0.18,lw:5.6,vfs:23});
  A.banner(s,end+0.4,'The choice is the lesson. The algebra after it is the part you can already do.');
  s.addNotes('Spend real time on the last row. It is the one most students have never been shown.');
}

/* 5 substitution */
{ const s=A.plain(); A.numhead(s,1,'Substitute — when a variable is already alone');
  t(s,'y = 2x − 1   and   3x + y = 14',{x:M,y:1.4,w:11.9,h:0.45,fontSize:20,bold:true,fontFace:HEAD,color:INK,margin:0});
  const end=A.rows(s,[
   {label:'y is already by itself',value:'put 2x − 1 where y was',col:NAVY},
   {label:'One equation, one letter',value:'3x + (2x − 1) = 14',col:NAVY},
   {label:'Solve',value:'5x = 15,  so x = 3',col:NAVY},
   {label:'Back-substitute for the other',value:'y = 2(3) − 1 = 5',col:GREEN},
  ],2.0,{rh:0.92,gap:0.16,lw:5.4,vfs:22});
  A.banner(s,end+0.35,'Brackets round what you substitute. Every time, exactly as last fortnight.');
}

/* 6 elimination */
{ const s=A.plain(); A.numhead(s,2,'Eliminate — when the coefficients line up');
  t(s,'2x + 3y = 12   and   x − y = 1',{x:M,y:1.4,w:11.9,h:0.45,fontSize:20,bold:true,fontFace:HEAD,color:INK,margin:0});
  const end=A.rows(s,[
   {label:'Make one pair match',value:'double the second:  2x − 2y = 2',col:NAVY},
   {label:'Subtract to kill the x',value:'5y = 10',col:NAVY},
   {label:'Solve',value:'y = 2',col:GREEN},
  ],2.0,{rh:1.0,gap:0.2,lw:5.4,vfs:22});
  A.banner(s,end+0.4,'This is diagnostic question 8. You put 3.',
           'Subtracting equations is where a sign goes missing. Write the second row out in full before you subtract it.');
}

/* 7 desmos */
{ const s=A.plain(); A.numhead(s,3,'Graph it — when the numbers are ugly');
  t(s,'7x + 4y = 51   and   3x − 5y = −8',{x:M,y:1.4,w:11.9,h:0.45,fontSize:20,bold:true,fontFace:HEAD,color:INK,margin:0});
  A.strip(s,[
   {label:'TYPE',body:'Type both equations\ninto Desmos exactly\nas they are written.\nNo rearranging.'},
   {label:'CLICK',body:'Click where the two\nlines cross. Desmos\nlabels the point.'},
   {label:'READ',body:'That point is (x, y).\nThat is the answer.'},
  ],2.05,2.2,{fs:16});
  A.banner(s,4.6,'About twelve seconds, against two minutes of elimination with those coefficients.',
           'The calculator is built into the test app and it is available on every single question.');
  s.addNotes('Run this live with Bluebook open. Do not describe it — show it, then make him do it.');
}

/* 8 the shortcut */
{ const s=A.plain(); A.head(s,'When they do not ask for x or y');
  t(s,'3x + 5y = 17   and   5x + 3y = 23.   What is x + y?',
    {x:M,y:1.35,w:11.9,h:0.45,fontSize:20,bold:true,fontFace:HEAD,color:INK,margin:0});
  A.strip(s,[
   {label:'THE LONG WAY',body:'Eliminate to find x.\nBack-substitute for y.\nAdd them together.\n\nAbout two minutes.',fill:'FBEEEC',lc:RED},
   {label:'WHAT THEY WANTED',body:'Add the two equations:\n8x + 8y = 40.\nDivide by 8:  x + y = 5.\n\nYou never find x or y.',fill:'EAF5EE',lc:GREEN},
  ],1.95,null,{fs:16,gap:0.6});
  A.banner(s,0,'This works because the coefficients are mirrored: 3 and 5, then 5 and 3.',
           'Adding gives 8x + 8y, the same number of each, which is why it collapses to x + y. Check that before you reach for it.');
  s.addNotes('Make him check the mirror condition first. Adding 4x+3y and 2x+5y gives 6x+8y, which is NOT a multiple of x+y \u2014 the shortcut only exists when the two coefficients swap.');
}

/* 8b when the shortcut does NOT exist */
{ const s=A.plain(); A.head(s,'When the shortcut is not there');
  t(s,'The trap is reaching for it when the coefficients do not mirror.',
    {x:M,y:1.3,w:11.9,h:0.4,fontSize:17,color:MUTE,margin:0});
  const end=A.rows(s,[
   {label:'3x + 5y = 17  and  5x + 3y = 23',value:'add gives 8x + 8y.  Mirrored, so x + y works',col:GREEN},
   {label:'4x + 3y = 19  and  2x + 5y = 13',value:'add gives 6x + 8y.  Not mirrored, no shortcut',col:RED},
   {label:'11x \u2212 3y = 7  and  \u22123x + 11y = 49',value:'add gives 8x + 8y.  Mirrored, x + y works',col:GREEN},
  ],1.9,{rh:1.05,gap:0.22,lw:5.6,vfs:20});
  A.banner(s,end,'Add the x-coefficients, add the y-coefficients. Equal? The shortcut is there.',
           'Not equal? Solve the system properly \u2014 there is nothing to save.');
}

/* 9 no solution / infinite */
{ const s=A.plain(); A.head(s,'When there is no answer, or every answer');
  A.strip(s,[
   {label:'PARALLEL — NO SOLUTION',body:'Same slope, different\nintercept.\n\nThe lines never meet,\nso there is nothing\nthat satisfies both.',fill:'FBEEEC',lc:RED},
   {label:'IDENTICAL — EVERY SOLUTION',body:'Same slope, same\nintercept.\n\nOne line drawn twice.\nEvery point on it\nworks.',fill:'EAF5EE',lc:GREEN},
  ],1.5,2.9,{fs:16,gap:0.6});
  A.banner(s,4.7,'Picture the two lines before you reach for the coefficient test.',
           'Under pressure you will recall the picture. You will not recall the condition.');
}

/* 10 section */ A.dark('Inequalities','Everything you already know, with one difference.');

/* 11 the one difference */
{ const s=A.plain(); A.head(s,'Solve it exactly like an equation');
  t(s,'With one exception, which you already met.',{x:M,y:1.3,w:11.9,h:0.4,fontSize:17,color:MUTE,margin:0});
  const end=A.rows(s,[
   {label:'Add or subtract',value:'sign stays as it is',col:GREEN},
   {label:'Multiply or divide by a positive',value:'sign stays as it is',col:GREEN},
   {label:'Multiply or divide by a NEGATIVE',value:'the sign turns around',col:RED},
  ],1.85,{rh:1.05,gap:0.22,lw:5.6,vfs:22});
  A.banner(s,end+0.4,'You can already do this. Tell me the rule rather than me telling you.',
           'Then check it: pick a value your answer allows and put it back into the question.');
  s.addNotes('Do not re-teach the flip. Ask him for it. Re-using what he knows is what makes it stick.');
}

/* 12 words that cost marks */
{ const s=A.plain(); A.head(s,'The words that cost the marks');
  const end=A.rows(s,[
   {label:'at least 12',value:'x ≥ 12',col:NAVY},
   {label:'no more than 12',value:'x ≤ 12',col:NAVY},
   {label:'more than 12',value:'x > 12   — not ≥',col:RED},
   {label:'fewer than 12',value:'x < 12   — not ≤',col:RED},
   {label:'between 5 and 12',value:'5 < x < 12',col:NAVY},
  ],1.5,{rh:0.86,gap:0.15,lw:5.0,vfs:22});
  A.banner(s,end+0.35,'These lose more marks than the algebra does.',
           '"At least" and "no more than" include the number. "More than" and "fewer than" do not.');
}

/* 12b practice: systems */
A.qSlide('Practice \u2014 systems',['1.5-e-01','1.5-m-02'],'Name the method before you solve.');
/* 12c practice: the combination */
A.qSlide('Practice \u2014 spot the shortcut',['1.5-e-07','1.5-m-05'],'Both of these ask for a combination.');
/* 12d practice: inequalities */
A.qSlide('Practice \u2014 inequalities',['1.6-m-01','1.6-e-02','1.6-m-03'],'Two of these need the flip.');

/* 13 your turn */
{ const s=A.plain(); A.head(s,'Your turn — 20 minutes');
  t(s,'Bluebook open. For every system, write down which method you chose before you solve it.',
    {x:M,y:1.35,w:11.9,h:0.45,fontSize:18,color:INK,margin:0});
  A.strip(s,[
   {label:'FOUR SYSTEMS',body:'One of each kind.\nName the method first,\nthen solve it.'},
   {label:'THREE INEQUALITIES',body:'Two need the flip.\nCheck each answer by\nputting a value back in.'},
   {label:'TWO SETUPS',body:'Write the two equations\nfrom the words. Do not\nsolve them.'},
  ],2.0,2.3,{fs:16});
  A.banner(s,4.65,'Naming the method is not busywork. It is the part of this lesson worth marks.',
           'A right answer reached the slow way is still a question you may run out of time on.');
}

/* 14 homework */
{ A.hw(A.plain(),[
   ['Sunday','Part A','Retention: signs and slope.','15 min'],
   ['Tuesday','Part B','Solve the system, and name the method.','25 min'],
   ['Thursday','Part C','Inequalities, including translation.','25 min'],
   ['Saturday','Parts D, E','Build the system from words; six mixed, timed.','27 min'],
  ],'Bring the sheet and your error log next Sunday.');
}

/* 15 close */
A.close(A.plain(),'Three seconds of looking.',
        'Then the cheapest route,\nnot the first one.',
        'And read what the question actually asks for.');

p.writeFile({fileName:'systems-session-3.pptx'}).then(f=>console.log('WROTE',f));
