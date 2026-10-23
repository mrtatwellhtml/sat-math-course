module.exports = ({ pick }) => ({
  id: 'sat-quadratics',
  title: 'Quadratics',
  session: 'Session 5 · 25 October',
  slides: [

    { type: 'title', eyebrow: 'Session 5 · 25 October', title: 'Quadratics',
      sub: 'Everything that happens once an $x^2$ shows up: how to open brackets, how to close them again, and how to find the values of $x$ that make it zero.',
      meta: [{ v: '~22%', k: 'of the exam' }, { v: '2', k: 'answers, not one' }, { v: '28', k: 'questions today' }],
      notes: 'Open by saying what fraction of the test this is. Advanced Math is ~35% of the paper and quadratics are the biggest single slice of it. This hour is worth more marks than any other hour we have left.' },

    { type: 'idea', kicker: 'Why this hour matters', title: 'The one topic you cannot skip',
      lead: 'Every quadratic question on the SAT is one of four shapes. Once you can tell them apart, you already know which tool to pick.',
      points: [
        'Open the brackets — "which expression is equivalent to $(2x-3)(x+5)$?"',
        'Close the brackets — "which expression is equivalent to $x^2-7x+12$?"',
        'Solve for $x$ — "what are the solutions to $x^2-7x+12=0$?"',
        'Read the shape — how many solutions, what is the maximum, where does it cross.'
      ],
      callout: 'The first three are the same skill pointed in different directions. Today we build that one skill and then aim it three ways.',
      notes: 'Resist the urge to teach these as four unrelated topics. Expanding and factoring are the same multiplication read forwards and backwards; solving is factoring plus one extra line.' },

    { type: 'section', kicker: 'Part one', title: 'Opening the brackets',
      sub: 'Multiply every term in the first bracket by every term in the second. There are no shortcuts worth learning, only one method done carefully.' },

    { type: 'steps', kicker: 'The method', title: 'Four multiplications, every time',
      lead: '$(a+b)(c+d)$ means four products added together. People lose marks here for exactly one reason: they forget a sign, not because they forget a product.',
      steps: [
        { label: 'Multiply the two front terms', body: 'In $(2x-3)(x+5)$ that is $2x \\times x = 2x^2$.' },
        { label: 'Multiply the outer pair', body: '$2x \\times 5 = 10x$. Write the sign that belongs to it.' },
        { label: 'Multiply the inner pair', body: '$-3 \\times x = -3x$. The minus travels with the $3$. It always does.' },
        { label: 'Multiply the two back terms', body: '$-3 \\times 5 = -15$. Negative times positive is negative.' },
        { label: 'Collect the middle', body: '$10x - 3x = 7x$, so the answer is $2x^2+7x-15$.' }
      ],
      callout: 'Write the sign onto the number before you multiply. $-3$ is a single object, not a $3$ with a mark in front of it. This is the same habit that fixed the sign errors in Session 2.',
      notes: 'This links straight back to the diagnostic. Seven of his seventeen errors were a dropped negative. Say that out loud here — it is the same mistake wearing a different hat.' },

    { type: 'compare', kicker: 'The slip that costs the mark', title: 'Where the minus goes',
      lead: 'Expand $(x-4)(x-6)$. Both brackets have a minus in them, so the middle terms are both negative and the end is positive.',
      left: { label: 'What most students write', body: 'x² − 6x − 4x − 24\n= x² − 10x − 24' },
      right: { label: 'What is actually true', body: '(−4)(−6) = +24\nx² − 6x − 4x + 24\n= x² − 10x + 24' },
      callout: 'Two negatives multiplied give a positive. The last term of $(x-4)(x-6)$ must be $+24$. If your constant came out negative, one of your brackets had a plus in it.',
      notes: 'Have him say the rule back: "minus times minus is plus." Then ask what the constant term would be for (x-4)(x+6) — answer -24 — so he hears the difference.' },

    { type: 'worked', kicker: 'Worked example', title: 'A harder expansion, slowly',
      question: 'Which expression is equivalent to $(3x-2)(2x+5)$?',
      thinking: 'The front terms are $3x$ and $2x$, so the answer starts with $6x^2$. That alone usually eliminates two of the four options before any other work.',
      steps: [
        'Front: $3x \\times 2x = 6x^2$.',
        'Outer: $3x \\times 5 = 15x$.',
        'Inner: $-2 \\times 2x = -4x$. Keep the minus with the 2.',
        'Back: $-2 \\times 5 = -10$.',
        'Middle terms: $15x - 4x = 11x$.'
      ],
      answer: '$6x^2+11x-10$',
      notes: 'Point out the elimination move explicitly: on a multiple-choice expansion, the x-squared term and the constant term are each one multiplication. Two multiplications usually leave one option standing.' },

    { type: 'idea', kicker: 'A shortcut worth having', title: 'Two patterns you should recognise on sight',
      lead: 'These two turn up constantly. Knowing them saves twenty seconds a question, and twenty seconds across a module is a question you get to finish.',
      points: [
        'Difference of two squares: $(x+a)(x-a) = x^2-a^2$. The middle term cancels — there is no $x$ term at all.',
        'So $(x+9)(x-9)=x^2-81$, and read backwards, $9x^2-25=(3x+5)(3x-5)$.',
        'Perfect square: $(x+a)^2 = x^2+2ax+a^2$. The middle is twice $a$, not $a$.',
        'So $(x+6)^2=x^2+12x+36$ — and it is **not** $x^2+36$.'
      ],
      callout: '$(x+6)^2$ means $(x+6)(x+6)$. Squaring a bracket is never "square each bit". That single misunderstanding is one of the most common wrong answers the SAT offers you.',
      notes: 'Test him: ask for (x+6)^2 and watch whether he says x^2+36. If he does, do not move on — write out the four products.' },

    { type: 'practice', kicker: 'Your turn', title: 'Expanding — warm-up',
      lead: 'Do these on paper before you reveal anything. Say each sign out loud as you write it.',
      questions: pick(['3.2-e-03', '3.2-e-07', '3.2-e-05', '3.2-e-28']),
      notes: 'Give four minutes. Circulate. The one to watch is the squared bracket.' },

    { type: 'practice', kicker: 'Your turn', title: 'Expanding — exam level',
      lead: 'These are the version the test actually asks. Same four multiplications, bigger numbers.',
      questions: pick(['3.2-m-02', '3.2-m-04', '3.2-m-03', '3.2-m-12']),
      notes: 'The last one is a difference-of-squares trick in disguise: (x+3)^2-(x-3)^2 = 12x. If he grinds it out term by term that is fine — but show the pattern after.' },

    { type: 'section', kicker: 'Part two', title: 'Closing the brackets',
      sub: 'Factoring is expanding run backwards. You are looking for the two numbers that were there before someone multiplied them out.' },

    { type: 'steps', kicker: 'The method', title: 'The two-number game',
      lead: 'To factor $x^2+bx+c$ you need two numbers that multiply to $c$ and add to $b$. That is the whole technique.',
      steps: [
        { label: 'Look at the last number first', body: 'For $x^2-7x+12$, the pair must multiply to $+12$.' },
        { label: 'List the pairs', body: '$1 \\times 12$, $2 \\times 6$, $3 \\times 4$. Only three to check.' },
        { label: 'Now use the sign of the last number', body: '$+12$ means both numbers have the same sign. $-7$ in the middle means both are negative.' },
        { label: 'Find the pair that adds to the middle', body: '$-3 + -4 = -7$. That is the pair.' },
        { label: 'Write the brackets', body: '$x^2-7x+12=(x-3)(x-4)$. Expand it back mentally to check.' }
      ],
      callout: 'The sign of the constant tells you everything. **Positive constant** → the two numbers match in sign. **Negative constant** → one is positive and one is negative, and the bigger one takes the sign of the middle term.',
      notes: 'That callout is the single most useful sentence in the topic. Make him copy it into his notes verbatim.' },

    { type: 'table', kicker: 'The sign rule in one view', title: 'Reading the signs before you guess',
      lead: 'Before you hunt for numbers, decide what signs you are hunting for. It halves the work.',
      cols: ['Expression', 'Constant', 'Middle', 'Both numbers'],
      rows: [
        { cells: ['$x^2+7x+12$', 'positive', 'positive', 'both positive → $(x+3)(x+4)$'] },
        { cells: ['$x^2-7x+12$', 'positive', 'negative', 'both negative → $(x-3)(x-4)$'] },
        { cells: ['$x^2+x-12$', 'negative', 'positive', 'mixed, bigger is positive → $(x+4)(x-3)$'] },
        { cells: ['$x^2-x-12$', 'negative', 'negative', 'mixed, bigger is negative → $(x-4)(x+3)$'] }
      ],
      callout: 'All four rows use the same pair, 3 and 4. Only the signs change. If you can place the signs, the numbers are the easy part.',
      notes: 'Cover the last column and have him fill it in himself. Thirty seconds, and it will stick better than anything you say.' },

    { type: 'worked', kicker: 'Worked example', title: 'When there is a number in front of $x^2$',
      question: 'Which expression is equivalent to $3x^2-10x+8$?',
      thinking: 'The $3$ in front means the brackets start $(3x \\ldots)(x \\ldots)$, because $3$ is prime. The constant $+8$ is positive and the middle is negative, so both numbers are negative.',
      steps: [
        'Set up the shape: $(3x\\;\\square)(x\\;\\square)$ with two negative numbers multiplying to $8$.',
        'Pairs for $8$: $1$ and $8$, or $2$ and $4$.',
        'Try $(3x-4)(x-2)$: middle is $-6x-4x=-10x$. That works.',
        'Check the ends: $3x \\times x = 3x^2$ and $(-4)(-2)=+8$. Both right.',
        'If it had failed, swap the pair around and try again — there are only a few options.'
      ],
      answer: '$(3x-4)(x-2)$',
      notes: 'The honest message: with a leading coefficient you guess and check, but the guessing is bounded. Four tries maximum. That is faster than any formal method.' },

    { type: 'practice', kicker: 'Your turn', title: 'Factoring — warm-up',
      lead: 'Signs first, numbers second.',
      questions: pick(['3.2-e-11', '3.2-e-12', '3.2-e-15', '3.2-e-13']),
      notes: 'Five minutes.' },

    { type: 'practice', kicker: 'Your turn', title: 'Factoring — exam level',
      lead: 'Two of these have a number in front of $x^2$. Set up the shape before you hunt for the pair.',
      questions: pick(['3.2-m-07', '3.2-m-08', '3.2-m-23', '3.2-h-06']),
      notes: 'These are genuinely hard for him. If he stalls, remind him that a wrong guess costs ten seconds and tells him which way to move.' },

    { type: 'section', kicker: 'Part three', title: 'Solving',
      sub: 'Finding the values of $x$ that make the whole thing equal zero. There are almost always two of them.' },

    { type: 'idea', kicker: 'The idea underneath', title: 'Why zero is the magic number',
      lead: 'If two things multiply to give zero, at least one of them must be zero. Nothing else has that property.',
      points: [
        'If $(x-3)(x-4)=0$, then either $x-3=0$ or $x-4=0$.',
        'So $x=3$ or $x=4$. Two answers, and both are correct.',
        'If $(x-3)(x-4)=2$, you can say nothing at all — the two factors could be $1$ and $2$, or $4$ and $0.5$, or anything.',
        'So the first move is always: get everything on one side so the other side is zero.'
      ],
      callout: 'Before you solve anything, write down how many answers you expect. A quadratic normally has two. If you finish with one, you are not finished.',
      notes: 'This is the habit that matters most. He lost marks on the diagnostic by stopping at one root. Make him write "2 answers?" at the top of the working.' },

    { type: 'steps', kicker: 'Choosing a tool', title: 'Four routes, and when to take each',
      lead: 'You are not supposed to use the same method every time. Spend five seconds choosing and you save a minute.',
      steps: [
        { label: 'It already factors → factor it', body: 'Best for $x^2+bx+c$ with small whole numbers. $x^2-7x+12=0 \\Rightarrow x=3,4$.' },
        { label: 'Something is squared → square-root both sides', body: '$(x-3)^2=16$ gives $x-3=\\pm 4$, so $x=7$ or $x=-1$. Do not forget the $\\pm$.' },
        { label: 'Nothing factors → the quadratic formula', body: '$x=\\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a}$. It always works. It is on the reference sheet.' },
        { label: 'You only need a number → Desmos', body: 'Type the equation in, read the crossing points. Faster than all of the above, and it is built into Bluebook.' }
      ],
      callout: 'Desmos is on every question of the exam, including the no-calculator-feel ones. For "what are the solutions to…" you can type the equation and read the answers straight off the graph.',
      notes: 'Demonstrate Desmos live for one question. He should leave today having typed a quadratic into it himself at least once.' },

    { type: 'worked', kicker: 'Worked example', title: 'The one where it is not already zero',
      question: 'What are the solutions to $x(x+4)=21$?',
      thinking: 'The right-hand side is not zero, so the factored form on the left tells us nothing yet. Expand first, move everything over, then factor.',
      steps: [
        'Expand the left: $x^2+4x=21$.',
        'Move the $21$ across: $x^2+4x-21=0$.',
        'Constant is negative, so the two numbers have mixed signs; middle is positive, so the bigger one is positive.',
        'Pairs for $21$: $1$ and $21$, $3$ and $7$. We need a difference of $4$, so $7$ and $-3$.',
        '$(x+7)(x-3)=0$, giving $x=-7$ or $x=3$.'
      ],
      answer: '$x=-7$ and $x=3$',
      notes: 'The trap answer here is x=0 and x=-4, from treating the original as if it equalled zero. Ask him why that is wrong before you show the answer.' },

    { type: 'worked', kicker: 'Worked example', title: 'When nothing factors: the formula',
      question: 'What are the solutions to $(x-4)^2=20$?',
      thinking: 'There is a perfect square sitting on its own on the left. Do not expand it — that would make the problem harder. Square-root both sides instead.',
      steps: [
        'Square-root both sides: $x-4 = \\pm\\sqrt{20}$.',
        'Simplify the root: $\\sqrt{20}=\\sqrt{4 \\times 5}=2\\sqrt{5}$.',
        'Add $4$ to both sides: $x = 4 \\pm 2\\sqrt{5}$.',
        'That is two answers: $4+2\\sqrt{5}$ and $4-2\\sqrt{5}$.',
        'Sanity check in Desmos: the graph of $y=(x-4)^2-20$ crosses near $x \\approx 8.47$ and $x \\approx -0.47$. Matches.'
      ],
      answer: '$x=4\\pm 2\\sqrt{5}$',
      notes: 'The missing ± is the classic error. If he writes only the positive root, show him on Desmos that the parabola crosses twice.' },

    { type: 'table', kicker: 'Reading the discriminant', title: 'How many solutions, without solving',
      lead: 'The part under the square root, $b^2-4ac$, decides how many real answers exist. Some questions ask only this — and then you never need the rest of the formula.',
      cols: ['$b^2-4ac$', 'Real solutions', 'What the graph does'],
      rows: [
        { cells: ['positive', 'two', 'crosses the $x$-axis twice'], flag: 'good' },
        { cells: ['zero', 'exactly one', 'just touches the $x$-axis'] },
        { cells: ['negative', 'none', 'never reaches the $x$-axis'], flag: 'bad' }
      ],
      callout: '"Exactly one solution" is the SAT\'s favourite way of saying $b^2-4ac=0$. The moment you read those words, write that equation down.',
      notes: 'He will see at least one of these. The phrase to drill is "exactly one real solution" → discriminant = 0.' },

    { type: 'practice', kicker: 'Your turn', title: 'Solving — warm-up',
      lead: 'Write "two answers?" at the top of every one before you start.',
      questions: pick(['3.3-e-01', '3.3-e-12', '3.3-e-04', '3.3-e-18']),
      notes: 'Four minutes.' },

    { type: 'practice', kicker: 'Your turn', title: 'Solving — exam level',
      lead: 'Choose your route before you write anything. Factor, square-root, formula, or Desmos.',
      questions: pick(['3.3-m-01', '3.3-m-16', '3.3-m-07', '3.3-m-19']),
      notes: 'Ask him to announce the route out loud before solving each one. The choosing is the skill.' },

    { type: 'practice', kicker: 'Your turn', title: 'Solving — the stretch',
      lead: 'These are the hardest versions you will meet. Two of them are quicker with the sum-and-product shortcut than with any solving at all.',
      questions: pick(['3.3-h-03', '3.3-h-15', '3.3-h-07', '3.3-h-04']),
      notes: 'Mention the shortcut: for ax^2+bx+c=0 the roots sum to -b/a and multiply to c/a. Several questions ask only for the sum, so you never have to solve.' },

    { type: 'idea', kicker: 'One shortcut, lots of marks', title: 'Sum and product, without solving',
      lead: 'For $ax^2+bx+c=0$, the two solutions add up to $-\\dfrac{b}{a}$ and multiply to $\\dfrac{c}{a}$. You do not need to find them.',
      points: [
        'Sum of the solutions to $2x^2-10x+3=0$ is $\\dfrac{10}{2}=5$. No working needed.',
        'Product of the solutions to $x^2-9x+20=0$ is $\\dfrac{20}{1}=20$.',
        'The SAT asks for the sum or the product far more often than you would expect.',
        'If the question says "the sum of the solutions", stop and use this.'
      ],
      callout: 'Write both formulas on the scratch paper at the start of the module, before the clock pressure starts. They are not on the reference sheet.',
      notes: 'Two or three marks a paper live here. Worth the five minutes.' },

    { type: 'recap', kicker: 'Before you go', title: 'The six things from today',
      points: [
        'Four multiplications, and the sign belongs to the number in front of it.',
        'Squaring a bracket means multiplying it by itself — never square the pieces.',
        'To factor, read the sign of the constant first; it tells you what signs to look for.',
        'Before solving, get one side to zero, and write down that you expect two answers.',
        '"Exactly one real solution" means $b^2-4ac=0$. Every time.',
        'If the question asks for the sum or product of the solutions, use $-b/a$ and $c/a$ and do not solve at all.'
      ],
      notes: 'Have him read these back and say which one he is least sure of. That is the first thing in next week\'s warm-up.' },

    { type: 'close', small: 'This week',
      big: 'Forty questions, four sittings.',
      foot: 'Workbook topics 3.2 and 3.3, twenty questions each, plus the printed sheet. Quiz 3 is due Friday. Do the practice in four short goes rather than one long one — spaced work is what makes this stick by December.',
      notes: 'Confirm he knows where the workbook link is and that the quiz is posted. Ask him to bring the error log.' }
  ]
});
