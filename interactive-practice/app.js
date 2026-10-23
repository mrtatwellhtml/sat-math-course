const studyBank = [
  {
    id: 'foundation',
    title: 'Level 0 · Foundations',
    description: 'Arithmetic fluency, fractions, signed numbers, percentage reasoning, and order of operations.',
    questions: [
      {
        type: 'multiple',
        difficulty: 'Foundational',
        bloom: 'Remember',
        timeSec: 20,
        prompt: 'Evaluate: 3/4 + 1/8.',
        options: ['7/8', '1/2', '5/8', '9/8'],
        answer: '7/8',
        explanation: '3/4 = 6/8, so 6/8 + 1/8 = 7/8.'
      },
      {
        type: 'text',
        difficulty: 'Foundational',
        bloom: 'Apply',
        timeSec: 30,
        prompt: 'What is 35% of 80?',
        answer: '28',
        explanation: '0.35 × 80 = 28.'
      },
      {
        type: 'multiple',
        difficulty: 'Core',
        bloom: 'Analyze',
        timeSec: 45,
        prompt: 'Which expression is equal to -3(5 - 8)?',
        options: ['-9', '-15', '9', '15'],
        answer: '9',
        explanation: '5 - 8 = -3, so -3 × (-3) = 9.'
      },
      {
        type: 'text',
        difficulty: 'Stretch',
        bloom: 'Evaluate',
        timeSec: 60,
        prompt: 'If a number is increased by 25% and then decreased by 20%, what is the net percent change?',
        answer: '0',
        explanation: 'A 25% increase multiplies by 1.25; a 20% decrease multiplies by 0.8; 1.25 × 0.8 = 1.00, so there is no net change.'
      }
    ]
  },
  {
    id: 'algebra',
    title: 'Level 1 · Core Algebra',
    description: 'Linear equations, inequalities, slope, systems, and translating words into equations.',
    questions: [
      {
        type: 'text',
        difficulty: 'Foundational',
        bloom: 'Apply',
        timeSec: 30,
        prompt: 'Solve for x: 3x - 7 = 20.',
        answer: '9',
        explanation: '3x = 27, so x = 9.'
      },
      {
        type: 'multiple',
        difficulty: 'Core',
        bloom: 'Understand',
        timeSec: 35,
        prompt: 'A line has slope 3 and passes through (2, 5). Which equation is correct?',
        options: ['y = 3x - 1', 'y = 3x + 5', 'y = 2x + 3', 'y = 5x - 3'],
        answer: 'y = 3x - 1',
        explanation: 'Using y - 5 = 3(x - 2) gives y = 3x - 1.'
      },
      {
        type: 'multiple',
        difficulty: 'Core',
        bloom: 'Analyze',
        timeSec: 55,
        prompt: 'Solve the system: x + y = 8 and x - y = 2.',
        options: ['(5, 3)', '(6, 2)', '(4, 4)', '(3, 5)'],
        answer: '(5, 3)',
        explanation: 'Add the equations: 2x = 10, so x = 5 and y = 3.'
      },
      {
        type: 'text',
        difficulty: 'Stretch',
        bloom: 'Create',
        timeSec: 75,
        prompt: 'A gym charges a $20 membership fee plus $15 per month. After m months, the total cost is C. Write an equation for C in terms of m.',
        answer: 'C=15m+20',
        explanation: 'The total is monthly fee times m plus the fixed annual membership cost.'
      }
    ]
  },
  {
    id: 'data',
    title: 'Level 2 · Problem Solving and Data Analysis',
    description: 'Ratios, percent change, probability, statistics, and reading data carefully.',
    questions: [
      {
        type: 'multiple',
        difficulty: 'Foundational',
        bloom: 'Apply',
        timeSec: 25,
        prompt: 'A recipe uses 2 cups of flour for every 3 cups of sugar. If 12 cups of flour are used, how many cups of sugar are needed?',
        options: ['15', '18', '20', '24'],
        answer: '18',
        explanation: '2:3 = 12:18.'
      },
      {
        type: 'text',
        difficulty: 'Core',
        bloom: 'Analyze',
        timeSec: 40,
        prompt: 'A price increases from $40 to $52. What is the percent increase?',
        answer: '30',
        explanation: 'Difference is 12, and 12/40 = 0.30, or 30%.'
      },
      {
        type: 'multiple',
        difficulty: 'Core',
        bloom: 'Understand',
        timeSec: 35,
        prompt: 'A bag contains 3 red, 4 blue, and 3 green marbles. What is the probability of choosing a blue marble?',
        options: ['1/3', '2/5', '4/10', '3/10'],
        answer: '2/5',
        explanation: 'There are 10 marbles total, and 4 are blue, so 4/10 = 2/5.'
      },
      {
        type: 'text',
        difficulty: 'Stretch',
        bloom: 'Evaluate',
        timeSec: 65,
        prompt: 'The mean of five numbers is 12. If four of the numbers are 10, 12, 14, and 8, what is the fifth number?',
        answer: '16',
        explanation: 'Total sum is 5 × 12 = 60. The known four sum to 44, so the fifth is 16.'
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Level 3 · Advanced Math',
    description: 'Function notation, quadratics, exponential change, radicals, rational expressions, and systems.',
    questions: [
      {
        type: 'multiple',
        difficulty: 'Foundational',
        bloom: 'Understand',
        timeSec: 30,
        prompt: 'If f(x) = 3x - 4, what is f(5)?',
        options: ['11', '15', '19', '21'],
        answer: '11',
        explanation: '3(5) - 4 = 15 - 4 = 11.'
      },
      {
        type: 'text',
        difficulty: 'Core',
        bloom: 'Apply',
        timeSec: 40,
        prompt: 'Solve: x^2 - 6x + 8 = 0.',
        answer: 'x=2 or x=4',
        explanation: 'The expression factors as (x - 2)(x - 4), so the solutions are 2 and 4.'
      },
      {
        type: 'multiple',
        difficulty: 'Stretch',
        bloom: 'Analyze',
        timeSec: 60,
        prompt: 'Which function shows exponential growth?',
        options: ['y = 4x + 2', 'y = 2x^2', 'y = 3(2)^x', 'y = x^3 - 4'],
        answer: 'y = 3(2)^x',
        explanation: 'Only the exponential model has a constant multiplicative factor.'
      },
      {
        type: 'text',
        difficulty: 'Challenge',
        bloom: 'Evaluate',
        timeSec: 75,
        prompt: 'The graph of y = x^2 + kx + 36 touches the x-axis at exactly one point. If k is positive, what is k?',
        answer: '12',
        explanation: 'Discriminant zero: k^2 - 4(1)(36) = 0 => k^2 = 144 => k = ±12. Positive gives 12.'
      }
    ]
  },
  {
    id: 'geometry',
    title: 'Level 4 · Geometry and Trigonometry',
    description: 'Angles, triangles, circles, coordinate geometry, and trigonometric relationships.',
    questions: [
      {
        type: 'multiple',
        difficulty: 'Foundational',
        bloom: 'Remember',
        timeSec: 20,
        prompt: 'The sum of the interior angles of a triangle is:',
        options: ['90°', '180°', '270°', '360°'],
        answer: '180°',
        explanation: 'Triangles always sum to 180°.'
      },
      {
        type: 'text',
        difficulty: 'Core',
        bloom: 'Apply',
        timeSec: 35,
        prompt: 'A right triangle has legs of length 6 and 8. What is the hypotenuse?',
        answer: '10',
        explanation: '6² + 8² = 36 + 64 = 100, so the hypotenuse is 10.'
      },
      {
        type: 'multiple',
        difficulty: 'Stretch',
        bloom: 'Analyze',
        timeSec: 55,
        prompt: 'The radius of a circle is 5. What is the circumference?',
        options: ['5π', '10π', '15π', '25π'],
        answer: '10π',
        explanation: 'Circumference is 2πr = 2π(5) = 10π.'
      },
      {
        type: 'text',
        difficulty: 'Challenge',
        bloom: 'Create',
        timeSec: 85,
        prompt: 'A 30-60-90 triangle has a short leg of length 7. What is the hypotenuse?',
        answer: '14',
        explanation: 'In a 30-60-90 triangle, the hypotenuse is twice the short leg: 2 × 7 = 14.'
      }
    ]
  },
  {
    id: 'testcraft',
    title: 'Level 5 · Test Craft',
    description: 'Backsolving, plugging in, elimination, and strategic decision-making under time pressure.',
    questions: [
      {
        type: 'multiple',
        difficulty: 'Core',
        bloom: 'Apply',
        timeSec: 35,
        prompt: 'Which is the best first move when a question gives answer choices and asks for a value?',
        options: ['Solve symbolically from the start', 'Work backward from the options', 'Guess randomly', 'Skip it'],
        answer: 'Work backward from the options',
        explanation: 'Backsolving is often faster and reduces algebraic errors.'
      },
      {
        type: 'multiple',
        difficulty: 'Stretch',
        bloom: 'Analyze',
        timeSec: 50,
        prompt: 'To test whether a statement is true, the best strategy is usually to:',
        options: ['Use the most complicated method', 'Plug in a value that makes sense', 'Write a proof', 'Ignore units'],
        answer: 'Plug in a value that makes sense',
        explanation: 'Testing a value can expose the hidden structure and reduce risk.'
      },
      {
        type: 'text',
        difficulty: 'Challenge',
        bloom: 'Evaluate',
        timeSec: 70,
        prompt: 'A multiple-choice question gives a decimal answer. Which is the best test-taking move before computing the exact value?',
        answer: 'Estimate and eliminate unreasonable choices',
        explanation: 'Estimation often narrows choices and avoids long arithmetic.'
      },
      {
        type: 'text',
        difficulty: 'Challenge',
        bloom: 'Create',
        timeSec: 90,
        prompt: 'Describe one strategy you would use when a question seems to demand algebra but the answer choices are convenient numbers.',
        answer: 'Backsolve from the choices',
        explanation: 'Testing answer choices often saves time and reduces algebraic mistakes.'
      }
    ]
  }
];

const difficultyOrder = ['All', 'Foundational', 'Core', 'Stretch', 'Challenge'];
const bloomOrder = ['All', 'Remember', 'Understand', 'Apply', 'Analyze', 'Evaluate', 'Create'];

const state = {
  selectedTopic: 'foundation',
  selectedDifficulty: 'All',
  selectedBloom: 'All',
  index: 0,
  score: 0
};

const topicListEl = document.getElementById('topicList');
const difficultyFiltersEl = document.getElementById('difficultyFilters');
const bloomFiltersEl = document.getElementById('bloomFilters');
const topicTitleEl = document.getElementById('topicTitle');
const topicMetaEl = document.getElementById('topicMeta');
const questionCardEl = document.getElementById('questionCard');
const questionNumberEl = document.getElementById('questionNumber');
const bloomBadgeEl = document.getElementById('bloomBadge');
const difficultyBadgeEl = document.getElementById('difficultyBadge');
const timeBadgeEl = document.getElementById('timeBadge');
const questionTextEl = document.getElementById('questionText');
const answerAreaEl = document.getElementById('answerArea');
const feedbackEl = document.getElementById('feedback');
const submitBtn = document.getElementById('submitBtn');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const currentScoreEl = document.getElementById('currentScore');
const totalQuestionsEl = document.getElementById('totalQuestions');

function normalizeString(value) {
  return String(value).trim().replace(/\s+/g, '').toLowerCase();
}

function normalizeNumeric(value) {
  const clean = String(value).trim();
  if (!clean) return null;
  if (clean.includes('/')) {
    const [a, b] = clean.split('/');
    const numerator = Number(a);
    const denominator = Number(b);
    if (!Number.isNaN(numerator) && !Number.isNaN(denominator) && denominator !== 0) {
      return numerator / denominator;
    }
  }
  const number = Number(clean);
  return Number.isNaN(number) ? null : number;
}

function currentTopic() {
  return studyBank.find((topic) => topic.id === state.selectedTopic);
}

function visibleQuestions() {
  const topic = currentTopic();
  return topic.questions.filter((question) => {
    const matchesDifficulty = state.selectedDifficulty === 'All' || question.difficulty === state.selectedDifficulty;
    const matchesBloom = state.selectedBloom === 'All' || question.bloom === state.selectedBloom;
    return matchesDifficulty && matchesBloom;
  });
}

function renderTopicList() {
  topicListEl.innerHTML = '';
  studyBank.forEach((topic) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'topic-button' + (state.selectedTopic === topic.id ? ' is-active' : '');
    button.textContent = topic.title;
    button.addEventListener('click', () => {
      state.selectedTopic = topic.id;
      state.index = 0;
      state.score = 0;
      render();
    });
    topicListEl.appendChild(button);
  });
}

function renderFilters() {
  difficultyFiltersEl.innerHTML = '';
  difficultyOrder.forEach((value) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'filter-chip' + (state.selectedDifficulty === value ? ' is-active' : '');
    chip.textContent = value;
    chip.addEventListener('click', () => {
      state.selectedDifficulty = value;
      state.index = 0;
      state.score = 0;
      render();
    });
    difficultyFiltersEl.appendChild(chip);
  });

  bloomFiltersEl.innerHTML = '';
  bloomOrder.forEach((value) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'filter-chip' + (state.selectedBloom === value ? ' is-active' : '');
    chip.textContent = value;
    chip.addEventListener('click', () => {
      state.selectedBloom = value;
      state.index = 0;
      state.score = 0;
      render();
    });
    bloomFiltersEl.appendChild(chip);
  });
}

function renderQuestion() {
  const topic = currentTopic();
  const questions = visibleQuestions();

  if (!questions.length) {
    questionCardEl.classList.add('hidden');
    topicMetaEl.textContent = `No questions match this filter combination. Select a broader difficulty or Bloom level.`;
    return;
  }

  if (state.index >= questions.length) {
    state.index = 0;
  }

  const question = questions[state.index];
  questionCardEl.classList.remove('hidden');
  topicTitleEl.textContent = topic.title;
  topicMetaEl.textContent = `${topic.description} • ${questions.length} question${questions.length === 1 ? '' : 's'} in view.`;

  questionNumberEl.textContent = `Q${state.index + 1}`;
  bloomBadgeEl.textContent = question.bloom;
  difficultyBadgeEl.textContent = question.difficulty;
  timeBadgeEl.textContent = `${question.timeSec}s`;
  questionTextEl.textContent = question.prompt;
  answerAreaEl.innerHTML = '';
  feedbackEl.className = 'feedback';
  feedbackEl.textContent = '';
  submitBtn.disabled = false;
  nextBtn.classList.add('hidden');

  if (question.type === 'multiple') {
    question.options.forEach((option) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'option-button';
      button.textContent = option;
      button.addEventListener('click', () => {
        document.querySelectorAll('.option-button').forEach((btn) => btn.classList.remove('is-selected'));
        button.classList.add('is-selected');
      });
      answerAreaEl.appendChild(button);
    });
  } else {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'text-answer';
    input.placeholder = 'Type your answer';
    input.setAttribute('aria-label', 'Type your answer');
    answerAreaEl.appendChild(input);
  }

  totalQuestionsEl.textContent = String(questions.length);
  currentScoreEl.textContent = String(state.score);
}

function checkAnswer() {
  const questions = visibleQuestions();
  const question = questions[state.index];
  if (!question) return;

  let selectedValue = '';

  if (question.type === 'multiple') {
    const selected = document.querySelector('.option-button.is-selected');
    if (!selected) {
      feedbackEl.className = 'feedback is-error';
      feedbackEl.textContent = 'Choose an answer before checking.';
      return;
    }
    selectedValue = selected.textContent.trim();
  } else {
    const input = document.querySelector('.text-answer');
    if (!input) {
      feedbackEl.className = 'feedback is-error';
      feedbackEl.textContent = 'Type your answer first.';
      return;
    }
    selectedValue = input.value.trim();
  }

  const nActual = normalizeNumeric(question.answer);
  const nInput = normalizeNumeric(selectedValue);
  const isCorrect =
    normalizeString(selectedValue) === normalizeString(question.answer) ||
    (nActual !== null && nInput !== null && Math.abs(nInput - nActual) < 1e-9);

  submitBtn.disabled = true;
  nextBtn.classList.remove('hidden');

  if (isCorrect) {
    state.score += 1;
    currentScoreEl.textContent = String(state.score);
    feedbackEl.className = 'feedback is-success';
    feedbackEl.textContent = `Correct. ${question.explanation}`;

    if (question.type === 'multiple') {
      document.querySelectorAll('.option-button').forEach((button) => {
        button.classList.remove('is-selected');
        if (button.textContent.trim() === question.answer) {
          button.classList.add('is-correct');
        }
      });
    }
  } else {
    feedbackEl.className = 'feedback is-error';
    feedbackEl.textContent = `Not quite. ${question.explanation}`;

    if (question.type === 'multiple') {
      document.querySelectorAll('.option-button').forEach((button) => {
        if (button.textContent.trim() === question.answer) {
          button.classList.add('is-correct');
        }
        if (button.classList.contains('is-selected') && button.textContent.trim() !== question.answer) {
          button.classList.add('is-incorrect');
        }
      });
    }
  }
}

function goToNextQuestion() {
  const questions = visibleQuestions();
  if (state.index < questions.length - 1) {
    state.index += 1;
    renderQuestion();
    return;
  }

  questionCardEl.classList.add('hidden');
  topicMetaEl.textContent = `Set complete. Final score: ${state.score}/${questions.length}.`;
  currentScoreEl.textContent = String(state.score);
  totalQuestionsEl.textContent = String(questions.length);
  nextBtn.classList.add('hidden');
}

function resetSet() {
  state.index = 0;
  state.score = 0;
  renderQuestion();
}

submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', goToNextQuestion);
resetBtn.addEventListener('click', resetSet);

function render() {
  renderTopicList();
  renderFilters();
  renderQuestion();
}

render();
