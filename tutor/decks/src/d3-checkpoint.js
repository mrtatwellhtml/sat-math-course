module.exports = ({ pick }) => ({
  id: 'sat-checkpoint',
  title: 'Checkpoint',
  session: 'Session 7 · 8 November',
  slides: [

    { type: 'title', eyebrow: 'Session 7 · 8 November', title: 'Checkpoint',
      sub: 'Four weeks in, four weeks to go. Today is not a new topic — it is a hard look at what has actually stuck, and a plan for the time that is left.',
      meta: [{ v: '36', k: 'questions today' }, { v: '4', k: 'weeks to the exam' }, { v: '0', k: 'new content' }],
      notes: 'Have the practice test score report and the Checkpoint Quiz results open before he arrives. This hour is wasted if you spend it finding out what he got wrong instead of fixing it.' },

    { type: 'idea', kicker: 'What today is for', title: 'Three questions, and then we drill',
      lead: 'You have now done a full practice test and a twenty-two question checkpoint quiz. Between them they tell us everything we need.',
      points: [
        'What is actually wrong — which topics lose marks, and whether it is the method or the execution.',
        'How fast you are — finishing is worth more than being clever, and we can measure it now.',
        'What the last four sessions should contain — we change the plan today if the evidence says to.'
      ],
      callout: 'The rest of the hour is questions. Thirty-six of them, mixed and in exam order, because mixed practice is the only kind that tests whether you can tell the topics apart under pressure.',
      notes: 'Be straight with him about the score. He is capable of improvement but not of a miracle, and pretending otherwise now costs trust in December.' },

    { type: 'table', kicker: 'Sorting the errors', title: 'Five reasons a mark goes missing',
      lead: 'Every wrong answer is one of these five, and each one has a different fix. Go through his marked test and put a letter beside every error before you do anything else.',
      cols: ['Type', 'What it looks like', 'The fix'],
      rows: [
        { cells: ['Sign', 'Right method, a minus went missing', 'Habit drill — the thing we fixed in week two'], flag: 'bad' },
        { cells: ['Setup', 'Translated the words into the wrong equation', 'Name the unknown, read the equation back'] },
        { cells: ['Method', 'Did not know what to do at all', 'Reteach — this is the only one that needs a lesson'] },
        { cells: ['Finish', 'Solved for $x$ when it asked for $2x$', 'Underline what is asked, before solving'] },
        { cells: ['Clock', 'Never reached the question', 'Pacing and triage — session ten'] }
      ],
      callout: 'Only the "method" row needs teaching. The other four are habits, and habits change faster than knowledge. That is good news with four weeks left.',
      notes: 'Do this sort together, out loud, with his actual paper. Ten minutes maximum. The point is that he learns to classify his own errors, because that is what the error log is for.' },

    { type: 'section', kicker: 'Part one', title: 'Mixed, in exam order',
      sub: 'Sixteen questions with no topic labels. This is the part nobody practises and everybody needs: deciding what kind of question you are looking at.' },

    { type: 'practice', kicker: 'Set one · questions 1–4', title: 'Mixed set — opening pace',
      lead: 'Give yourself about ninety seconds each. If one is taking longer than that, flag it and move on, exactly as you would in the exam.',
      questions: pick(['1.1-m-39', '1.2-m-22', '0.2-m-05', '1.3-m-30']),
      notes: 'Time this properly — six minutes on the clock. The pacing matters as much as the answers.' },

    { type: 'practice', kicker: 'Set one · questions 5–8', title: 'Mixed set — building',
      lead: 'Same rules. Decide what the question is asking before you pick up the pen.',
      questions: pick(['1.5-m-01', '3.2-m-07', '1.4-m-01', '1.7-m-01']),
      notes: 'Six minutes. Watch which ones he stalls on rather than which he gets wrong — a slow right answer is a wrong answer in module two.' },

    { type: 'worked', kicker: 'The error that keeps coming back', title: 'Solving for the thing it asked for',
      question: 'If $5(x-2)=3x+8$, what is the value of $2x+1$?',
      thinking: 'The question does not want $x$. It wants $2x+1$. That is the whole trick, and it is the single most common way a correct piece of algebra still scores zero.',
      steps: [
        'Expand the left: $5x-10=3x+8$.',
        'Take $3x$ off both sides: $2x-10=8$.',
        'Add $10$: $2x=18$, so $x=9$.',
        'Now go back and read the question again. It asked for $2x+1$.',
        '$2(9)+1=19$.'
      ],
      answer: '$19$',
      notes: 'Notice that line 3 already gave 2x = 18, so 2x+1 = 19 without ever finding x. Show him that shortcut, but the real lesson is the re-reading.' },

    { type: 'practice', kicker: 'Set two · questions 9–12', title: 'Mixed set — harder',
      lead: 'These are module-two difficulty. Two of them have a sting at the end.',
      questions: pick(['1.1-m-02', '3.3-m-13', '1.6-m-01', '1.2-m-05']),
      notes: 'Eight minutes. Ask him to underline what is being asked before he starts each one.' },

    { type: 'practice', kicker: 'Set two · questions 13–16', title: 'Mixed set — the stretch',
      lead: 'The last four. Harder than you will usually meet, which is the point.',
      questions: pick(['3.2-h-03', '1.5-h-01', '1.3-h-02', '3.3-h-15']),
      notes: 'Ten minutes. If he gets two of four here he is tracking fine.' },

    { type: 'section', kicker: 'Part two', title: 'Repairing the weak spots',
      sub: 'Four short blocks, one per topic we have covered. Do the block that matches what the sort said is broken — you do not have to do all of them today.' },

    { type: 'idea', kicker: 'How to use part two', title: 'Pick two blocks, not four',
      lead: 'There are twenty questions in the next five slides. You will not finish them in the hour, and you should not try.',
      points: [
        'Start with whichever block matches the biggest column in your error sort.',
        'Do four. If all four are right, move to the next block — that topic is fine.',
        'If two or more are wrong, stop and work out *why* before doing anything else.',
        'The rest become this week\'s homework, and they are already in the workbook.'
      ],
      callout: 'Four questions you understand afterwards beats twenty you rushed. This is the one place where doing less is the right call.',
      notes: 'Resist completionism here — his and yours. The blocks are a menu, not a worksheet.' },

    { type: 'practice', kicker: 'Repair block A', title: 'Signs and negatives',
      lead: 'The one that cost seven marks in September. Say each sign out loud as you write it.',
      questions: pick(['0.2-m-24', '0.2-m-35', '0.2-m-23', '0.2-m-36']),
      notes: 'If he is still losing these, nothing else in the plan matters as much. Spend the rest of the hour here and say so.' },

    { type: 'practice', kicker: 'Repair block B', title: 'Lines and linear equations',
      lead: 'Slope, intercepts, and rewriting between forms.',
      questions: pick(['1.2-m-01', '1.4-m-21', '1.2-m-24', '1.4-m-06']),
      notes: 'The rewriting is usually the weak part, not the slope formula.' },

    { type: 'practice', kicker: 'Repair block C', title: 'Systems and inequalities',
      lead: 'Choose your method before you write anything — substitute, eliminate, or graph it in Desmos.',
      questions: pick(['1.5-m-02', '1.6-m-20', '1.5-m-20', '1.6-m-02']),
      notes: 'Make him announce the method out loud first. That decision is the skill.' },

    { type: 'practice', kicker: 'Repair block D', title: 'Words into equations',
      lead: 'Name the unknown on the paper. Then read your equation back as a sentence and check it tells the same story.',
      questions: pick(['1.7-m-02', '1.7-m-20', '1.7-m-03', '1.7-h-01']),
      notes: 'He should be writing "let x = ..." every time. If the paper is bare, that is the finding.' },

    { type: 'practice', kicker: 'Repair block E', title: 'Quadratics',
      lead: 'Last month\'s topic. Write "two answers?" at the top of each one.',
      questions: pick(['3.3-m-19', '3.2-m-08', '3.3-m-07', '3.2-m-14']),
      notes: 'This is the freshest material, so weakness here means the lesson did not land rather than that he has forgotten.' },

    { type: 'section', kicker: 'Part three', title: 'What happens next',
      sub: 'Three sessions left after today, and the evidence from this hour decides what goes in them.' },

    { type: 'table', kicker: 'The plan from here', title: 'The remaining four Sundays',
      lead: 'This is the default. We change it today if the checkpoint says something different.',
      cols: ['Date', 'Session', 'Changes if…'],
      rows: [
        { cells: ['15 November', 'Ratios, percentages and data', 'Nothing — this is 15% of the paper and we have not touched it'] },
        { cells: ['22 November', 'Geometry and trigonometry', 'Swap for more algebra if today shows the algebra is still leaking'] },
        { cells: ['29 November', 'Test protocol and pacing', 'Never changes — this one is worth marks on its own'] },
        { cells: ['5 December', 'The exam', ''], flag: 'good' }
      ],
      callout: 'Geometry is the swappable one. It is only 15% of the test and it is mostly formula recall, so if the algebra is still costing you more than geometry ever could, we spend that Sunday on algebra instead.',
      notes: 'Say the trade-off out loud so he understands the choice is evidence-driven, not arbitrary. If his algebra accuracy is below about 60% on today\'s mixed sets, make the swap.' },

    { type: 'idea', kicker: 'The habit that matters most', title: 'The error log, properly kept',
      lead: 'One page, one line per mistake, filled in the same day. Four weeks of this is worth more than four weeks of new questions.',
      points: [
        'Write the question, not a description of it. You need to be able to redo it cold.',
        'Write which of the five types it was. Sign, setup, method, finish, clock.',
        'Write the one sentence that would have stopped it — "read the question again before answering".',
        'Every Sunday, redo three entries from the previous week without looking at the fix.'
      ],
      callout: 'If you only do one thing between now and December, do this. Repeating a mistake you have written down is much harder than repeating one you have not.',
      notes: 'Check the log is actually being kept. If it is not, that is the homework for the week and nothing else is.' },

    { type: 'recap', kicker: 'Before you go', title: 'Where we are',
      points: [
        'Mixed practice is now the default — the exam does not label its topics, so neither should your revision.',
        'Every error has a type, and only one of the five types needs new teaching.',
        'Underline what the question asks for before you solve. Half the lost marks live in that one line.',
        'Ninety seconds a question is the pace. Flag and move on is a skill, not a failure.',
        'The error log is the single highest-value hour of the week, and it is not spent with me.'
      ],
      notes: 'Ask him to name the one thing he is taking away. Whatever he says is what you open with on the 15th.' },

    { type: 'close', small: 'This week',
      big: 'Finish part two, and keep the log.',
      foot: 'The twenty questions from the repair blocks you did not reach are in the workbook under the matching topics. One more full practice test is posted for the weekend of 22 November, not before — you need the material from the next two sessions first.',
      notes: 'Confirm the next practice test date with him so he plans around it.' }
  ]
});
