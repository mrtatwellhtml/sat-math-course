module.exports = ({ pick }) => ({
  id: 'sat-testcraft',
  title: 'Test Craft',
  session: 'Session 10 · 29 November',
  slides: [

    { type: 'title', eyebrow: 'Session 10 · 29 November', title: 'Test Craft',
      sub: 'The last Sunday before the exam. No new mathematics — this hour is about the marks you lose for reasons that have nothing to do with whether you can do the maths.',
      meta: [{ v: '6', k: 'days to go' }, { v: '95s', k: 'per question' }, { v: '22', k: 'questions today' }],
      notes: 'Keep this hour calm and concrete. He does not need adrenaline six days out; he needs a protocol he can follow when he is nervous.' },

    { type: 'idea', kicker: 'Why this is a lesson', title: 'Marks you already know how to get',
      lead: 'On the September diagnostic you lost marks three ways that had nothing to do with not knowing the maths.',
      points: [
        'Questions you never reached, because earlier ones took too long.',
        'Questions you answered correctly and then typed in a form the machine does not accept.',
        'Questions you could have done in fifteen seconds with Desmos and spent two minutes on by hand.'
      ],
      callout: 'None of those need new knowledge. All three are fixed by a protocol you decide on now, in a calm room, rather than invent on Saturday morning in a hall.',
      notes: 'Anchor every point to something he actually did. Vague advice about "time management" will not survive the exam; a specific rule will.' },

    { type: 'section', kicker: 'Part one', title: 'The shape of the thing',
      sub: 'You cannot pace yourself in a room whose rules you are still working out.' },

    { type: 'table', kicker: 'What happens on the day', title: 'The maths section, start to finish',
      lead: 'Two modules. You cannot go back to module one once it is submitted, and module two is chosen for you based on how module one went.',
      cols: ['', 'Module 1', 'Module 2'],
      rows: [
        { cells: ['Questions', '22', '22'] },
        { cells: ['Time', '35 minutes', '35 minutes'] },
        { cells: ['Difficulty', 'Mixed — easy to hard', 'Easier or harder, depending on module 1'] },
        { cells: ['Can you go back?', 'Within the module, yes', 'Within the module, yes'] },
        { cells: ['Desmos', 'On every question', 'On every question'] },
        { cells: ['Reference sheet', 'On every question', 'On every question'] }
      ],
      callout: 'Of the 44 questions, four are unscored trial questions and you will never know which. That is the real reason not to let one question eat your module — it might not even count.',
      notes: 'The adaptivity point matters emotionally: module two feeling hard is a good sign, not a bad one. Tell him that now so it does not frighten him on the day.' },

    { type: 'idea', kicker: 'The clock', title: 'Ninety-five seconds, and what that actually means',
      lead: '35 minutes across 22 questions is 95 seconds each. But the questions are not equal, so the average is not a target — it is a budget.',
      points: [
        'The early questions in a module are usually quicker. Bank time there, deliberately.',
        'Spending three minutes on one question means two others get forty seconds each.',
        'Every question is worth the same mark. A hard one is a bad investment, not a challenge.',
        'Finishing with five minutes left is not wasted time — it is five minutes of checking.'
      ],
      callout: 'The hard rule: **if you are ninety seconds in and have no route, flag it and move on.** Not "nearly there" — no route. You come back with whatever time is left.',
      notes: 'Have him practise the flag-and-move this week on a timed set. It feels wrong the first few times and that is exactly why it needs rehearsing.' },

    { type: 'steps', kicker: 'The protocol', title: 'Three passes through the module',
      lead: 'Do not work through 1 to 22 in order and hope. Go through the module three times, each time doing something different.',
      steps: [
        { label: 'Pass one — the ones you can see', body: 'Answer everything that has an obvious route. Flag anything that does not within about fifteen seconds of reading it. Aim to be at the end of the module in roughly twenty minutes.' },
        { label: 'Pass two — the flagged ones', body: 'Now you know how much time you have and how many are left. Spend it on the flagged questions, hardest last.' },
        { label: 'Pass three — guard the easy marks', body: 'With whatever is left, re-read the questions you answered fast. That is where careless marks hide, not in the hard ones.' },
        { label: 'Never leave anything blank', body: 'There is no penalty for a wrong answer. In the last minute, put something in every empty box.' }
      ],
      callout: 'Pass three is the one students skip, and it is the one that pays. A question you rushed in forty seconds is far more likely to be wrong than one you flagged and thought about.',
      notes: 'Write the three passes on his scratch card. He should do his last practice test with this protocol, not without it.' },

    { type: 'section', kicker: 'Part two', title: 'Answer entry',
      sub: 'About a quarter of the maths questions ask you to type the answer rather than pick it. The machine marks what you typed, not what you meant.' },

    { type: 'steps', kicker: 'The rules', title: 'How to type a write-in answer',
      lead: 'These are the official rules. They are not guidelines — an answer that breaks them is marked wrong even when the mathematics is perfect.',
      steps: [
        { label: 'Five characters, or six if it is negative', body: 'The minus sign counts as one of the six. Anything longer will not fit.' },
        { label: 'Fractions and decimals are both fine', body: 'You never have to simplify. $\\dfrac{6}{8}$ is accepted; so is $0.75$.' },
        { label: 'Never a mixed number', body: 'Two and a half must be typed as $5/2$ or $2.5$. Typing $2\\ 1/2$ is read as twenty-one halves.' },
        { label: 'Repeating decimals: fill the space', body: '$\\dfrac{2}{3}$ can be entered as $2/3$, or as $.6666$, or as $.6667$. Entering $.66$ is marked wrong — you must round or truncate at the fourth digit, not before.' },
        { label: 'No symbols at all', body: 'No percent sign, no dollar sign, no comma, no units. One thousand two hundred and fifty is typed $1250$, never $1{,}250$ or $\\$1250$.' }
      ],
      callout: 'If the question asks "what percent" and the answer is forty-two percent, you type $42$. If it asks "what is the probability" and the answer is forty-two percent, you type $0.42$. Read which one it wants.',
      notes: 'This slide is worth two or three marks on its own. Do not rush it — make him say each rule back.' },

    { type: 'practice', kicker: 'Drill', title: 'Answer entry — would it be accepted?',
      lead: 'No mathematics here at all. Just the typing rules.',
      questions: [
        { tag: 'warm-up',
          stem: 'The answer to a write-in question is two and one half. Which of the following entries would **not** be accepted?',
          choices: ['$5/2$', '$2.5$', '$2\\ 1/2$', '$2.50$'],
          answer: 'C',
          solution: 'Mixed numbers are never accepted. The box reads $2\\ 1/2$ as twenty-one halves, which is $10.5$.',
          trap: 'A) is the improper fraction, which is exactly what you are meant to type; B) is the decimal equivalent and fits in five characters; D) is the same decimal with a trailing zero, four characters, also fine.' },
        { tag: 'warm-up',
          stem: 'The answer to a write-in question is $\\dfrac{2}{3}$. Which of the following entries would **not** be accepted?',
          choices: ['$2/3$', '$.6666$', '$.6667$', '$.66$'],
          answer: 'D',
          solution: 'A repeating decimal must be filled out to the fourth digit, either truncated or rounded. $.66$ stops two digits early, so it is marked wrong.',
          trap: 'A) is the fraction itself, always the safest entry; B) is the decimal truncated at the fourth digit; C) is the same decimal rounded at the fourth digit — both of those are accepted.' },
        { tag: 'medium',
          stem: 'A question asks for a cost in dollars and the answer is one thousand two hundred and fifty dollars. What should you type?',
          choices: ['$\\$1250$', '$1{,}250$', '$1250$', '$1250$ dollars'],
          answer: 'C',
          solution: 'Digits only. The dollar sign, the comma and the word "dollars" are all symbols or text, and none of them belong in the box.',
          trap: 'A) adds a dollar sign; B) adds a comma; D) adds the unit as a word. Each of those is read as an invalid entry even though the number is right.' },
        { tag: 'medium',
          stem: 'A question asks what percent of the members chose the first option, and the answer is forty-two percent. What should you type?',
          choices: ['$42$', '$42\\%$', '$0.42$', '$.42\\%$'],
          answer: 'A',
          solution: 'The question has already said "what percent", so the units are built into the question. You type the number alone: $42$.',
          trap: 'B) adds a percent sign, which is not allowed; C) is the decimal form, which answers "what proportion" rather than "what percent"; D) does both wrong things at once.' }
      ],
      notes: 'Four minutes. These are free marks and he should get all four — if he does not, that is a conversation worth having now rather than on Saturday.' },

    { type: 'practice', kicker: 'Drill', title: 'Answer entry — the awkward ones',
      lead: 'Negatives, long decimals, and the character limit.',
      questions: [
        { tag: 'medium',
          stem: 'The answer to a write-in question is $-\\dfrac{17}{4}$. Which of the following entries would **not** be accepted?',
          choices: ['$-17/4$', '$-4.25$', '$-4\\ 1/4$', '$-4.250$'],
          answer: 'C',
          solution: 'A mixed number is never accepted, with or without a minus sign. The other three are all five or six characters, which is within the limit for a negative answer.',
          trap: 'A) is the improper fraction, five characters; B) is the decimal, five characters; D) is the same decimal with a trailing zero, six characters, which is the limit for a negative answer and so still fits.' },
        { tag: 'medium',
          stem: 'A question\'s answer works out to $\\dfrac{3}{8}$. Written as a decimal, what would you type into the box?',
          answer: '0.375',
          solution: '$3 \\div 8 = 0.375$, which terminates and fits in five characters. Typing $3/8$ would also be accepted.' },
        { tag: 'harder',
          stem: 'The answer to a write-in question is $\\dfrac{1}{7}$. Which of the following decimal entries would be accepted?',
          choices: ['$0.14$', '$0.142$', '$.1428$', '$0.1428571$'],
          answer: 'C',
          solution: '$\\dfrac{1}{7}=0.142857\\ldots$, which does not terminate, so the entry must run to the fourth digit. $.1428$ does, and it is five characters.',
          trap: 'A) stops at the second digit and B) at the third, and both are too early for a non-terminating decimal; D) is nine characters and will not fit in the box.' },
        { tag: 'harder',
          stem: 'A question asks for the value of $x$ and your working gives $x = \\dfrac{125}{1000}$. What is the shortest entry that would be accepted?',
          answer: '0.125',
          solution: '$\\dfrac{125}{1000}$ is eight characters, too long for the box. The decimal is $0.125$, which is five characters and terminates exactly. You could also enter $1/8$, which is shorter still.' }
      ],
      notes: 'The last one is the real-world version: a correct fraction that simply will not fit. The habit is to convert, not to panic.' },

    { type: 'section', kicker: 'Part three', title: 'Desmos, and the two cheats',
      sub: 'Three tools that turn a two-minute question into a twenty-second one.' },

    { type: 'steps', kicker: 'Tool one', title: 'What Desmos is actually for',
      lead: 'It is built into Bluebook and it is available on every single question, including the ones that look like they want mental arithmetic. Use it more than feels natural.',
      steps: [
        { label: 'Solving any equation', body: 'Type $x^2-7x+12=0$ straight in. The graph crosses where the solutions are and Desmos labels the points.' },
        { label: 'Systems of two equations', body: 'Type both. Click the intersection. That is your $(x,y)$, with no algebra at all.' },
        { label: 'Checking an answer you already have', body: 'Faster than redoing the question, and it catches sign errors instantly.' },
        { label: 'Not for: word problems', body: 'Desmos cannot read. Setting up the equation is still yours — and that was always the harder half.' }
      ],
      callout: 'The habit to build this week: on every practice question, ask "could Desmos have done this?" before you move on. You are training the reflex, not the arithmetic.',
      notes: 'Watch him do two questions in Desmos live. If his typing is slow, that is this week\'s drill — speed in the tool is part of the tool.' },

    { type: 'compare', kicker: 'Tool two', title: 'Working backwards from the options',
      lead: 'When a multiple-choice question asks for a value and the four options are plain numbers, you do not have to solve anything. Test them.',
      left: { label: 'Solving it forwards', body: '3(2x + 1) − 4 = 5(x + 3)\n6x + 3 − 4 = 5x + 15\n6x − 1 = 5x + 15\nx = 16\n\n…four lines, three chances\nto drop a sign.' },
      right: { label: 'Testing the options', body: 'Start with C.\nIf x = 16:\nleft  = 3(33) − 4 = 95\nright = 5(19)    = 95\n\nEqual. Done, one line.' },
      callout: 'Start with option B or C. If the two sides come out too big, you know to try a smaller option next, so one test usually eliminates two.',
      notes: 'This is the technique that helps a weaker student most, because it replaces algebra he gets wrong with arithmetic he gets right.' },

    { type: 'idea', kicker: 'Tool three', title: 'Picking numbers',
      lead: 'When the question and all four options are written in letters rather than numbers, invent a number and see which option agrees.',
      points: [
        'Choose something easy and unusual — $x=3$ is better than $x=0$, $x=1$ or $x=2$, which make too many options accidentally agree.',
        'Work out the answer for your number.',
        'Put the same number into all four options and keep whichever matches.',
        'If two still match, try a second number and the tie breaks.'
      ],
      callout: 'This turns an abstract algebra question into arithmetic. It takes longer than the algebra when the algebra goes well — and much less time than the algebra going badly.',
      notes: 'Pair this with back-solving: between them they cover most of the multiple-choice algebra he currently loses.' },

    { type: 'practice', kicker: 'Your turn', title: 'Back-solving and picking numbers',
      lead: 'Do each of these twice — once forwards, once by testing the options — and notice which was faster for you.',
      questions: pick(['1.1-m-33', '1.1-m-01', '3.3-m-13', '1.5-m-01']),
      notes: 'The point is not the answers. It is which method he is faster and safer with, and he should leave knowing that about himself.' },

    { type: 'section', kicker: 'Part four', title: 'A final timed run',
      sub: 'Twelve questions, mixed, eighteen minutes. Three passes. Flag and move on.' },

    { type: 'practice', kicker: 'Timed run · 1–4', title: 'Pass one',
      lead: 'Six minutes. Anything without a route in fifteen seconds gets flagged.',
      questions: pick(['0.2-m-05', '1.2-m-22', '1.4-m-01', '3.2-m-07']),
      notes: 'Start the clock and say nothing until it stops.' },

    { type: 'practice', kicker: 'Timed run · 5–8', title: 'Pass one, continued',
      lead: 'Six minutes.',
      questions: pick(['1.7-m-02', '3.3-m-19', '1.6-m-01', '1.3-m-30']),
      notes: 'Six minutes.' },

    { type: 'practice', kicker: 'Timed run · 9–12', title: 'The harder end',
      lead: 'Six minutes. These are the ones you would flag in a real module.',
      questions: pick(['3.2-h-03', '1.5-h-01', '3.3-h-15', '1.1-m-02']),
      notes: 'Six minutes. Then review only the ones he got wrong, and only for the error type.' },

    { type: 'section', kicker: 'Part five', title: 'Saturday',
      sub: 'What to do with the last six days, and what to do on the morning itself.' },

    { type: 'table', kicker: 'The last week', title: 'Six days, and what each is for',
      lead: 'Cramming new topics now does not work. Consolidating does.',
      cols: ['Day', 'What to do'],
      rows: [
        { cells: ['Sunday to Tuesday', 'Twenty workbook questions a day, mixed topics, timed. Nothing new.'] },
        { cells: ['Wednesday', 'Re-do every question in your error log, cold, without the notes.'] },
        { cells: ['Thursday', 'One Bluebook module, timed, using the three-pass protocol. Last timed work.'] },
        { cells: ['Friday', 'Nothing mathematical. Check the bag. Sleep early.'], flag: 'good' },
        { cells: ['Saturday', 'Eat. Arrive early. Run the protocol.'], flag: 'good' }
      ],
      callout: 'Friday is a real instruction, not a kindness. A tired brain loses more marks than an under-revised one, and at this point the revision is done.',
      notes: 'Say this to the parents too. The Friday-night cram is the single most common way a December score comes in below the November practice tests.' },

    { type: 'recap', kicker: 'The protocol, in one page', title: 'What you do on the day',
      points: [
        'Pass one: answer what you can see, flag anything with no route after fifteen seconds, reach the end of the module in about twenty minutes.',
        'Pass two: spend the remaining time on the flagged questions, hardest last.',
        'Pass three: re-read the ones you answered fastest. That is where the careless marks are.',
        'Never leave a box empty — there is no penalty for a wrong answer.',
        'Write-in answers: five characters, six if negative, no mixed numbers, no symbols, repeating decimals filled to the fourth digit.',
        'Before you solve anything by hand, ask whether Desmos could do it, and whether the options could be tested instead.'
      ],
      callout: 'Module two feeling hard is a good sign. It means module one went well. Do not let it rattle you.',
      notes: 'Have him write these six lines out himself on a card and take it to Thursday\'s module. Reading them is not the same as writing them.' },

    { type: 'close', small: '5 December',
      big: 'You are more ready than you were.',
      foot: 'In September you scored 5 out of 22 and the single biggest cause was one sign mistake made seven times. That is fixed. The rest is pacing, entry format, and not giving a hard question more than it is worth — and you now have a rule for each of those. Go and use them.',
      notes: 'End on this. He should leave the room with a protocol and a reason to believe it works, not with a list of what he still cannot do.' }
  ]
});
