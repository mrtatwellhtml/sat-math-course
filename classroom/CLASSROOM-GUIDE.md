# Google Classroom — setup and posting guide

Everything the student does between sessions, and how it reaches Classroom.

Three kinds of post, each doing a different job:

| Post type | What it is | Marked by |
|---|---|---|
| **Practice** | A topic in the online workbook, a set number of questions | Nobody — the workbook marks as he goes |
| **Worksheet** | The week's printable PDF | You, five minutes at the next session |
| **Quiz** | A Google Form, auto-graded, score lands in the gradebook | Forms |

The quizzes carry the grade. The practice and worksheets carry the learning. Keep
the quizzes short and low-stakes or he will start optimising for them.

---

## One-time setup

### 1. Build the quizzes

1. Go to [script.google.com](https://script.google.com) and start a new project. Name it `SAT Math Quizzes`.
2. Paste `BuildQuizzes.gs` over the `Code.gs` that is already there.
3. Add a file (the **+** next to Files → Script), name it `QuizData`, and paste `QuizData.gs` into it.
4. Project Settings (the gear) → tick **Show appsscript.json manifest file in editor**.
5. Open `appsscript.json`, replace its contents with the `appsscript.json` from this folder, save.
6. Back in `Code.gs`, pick `buildAllQuizzes` from the function dropdown and press **Run**.
7. Google asks you to authorise. The "Google hasn't verified this app" screen is what you
   get for any script you wrote yourself: **Advanced → Go to SAT Math Quizzes (unsafe) → Allow**.
8. View → Logs shows an edit link for each quiz. They are in a Drive folder called
   **SAT Math — Quizzes**.

Takes about five minutes. Run `buildOne('q1')` first if you want to see one before committing to all five.

### 2. Deploy the workbook

Follow `workbook/README.md`. You need the live URL before you post any practice assignment.

### 3. Set up the class

Create a class, then four topics down the left: **Practice**, **Worksheets**, **Quizzes**, **Practice tests**.
Posting under topics is what stops the stream becoming a wall by November.

---

## Attaching a quiz to Classroom

Classwork → **Create → Quiz assignment**. Classroom attaches a blank Form of its own —
**remove it**, then attach the real one from Drive.

Then turn on **Grade importing**. That is the switch that makes the score appear in the
gradebook instead of sitting inside the Form.

Set each quiz to **100 points** or leave it at the Form's own total; just be consistent.

---

## The posting schedule

### Week of 18 October — after Session 4

**Practice** · post Sunday, due Friday
> **Translation — 40 questions**
>
> Open the workbook and choose **1.7 Turning words into equations**. Set it to 20 questions
> and do two goes this week.
>
> On every one: name the unknown on the paper before you write the equation, then read the
> equation back as a sentence. If it does not sound like the story, it is not the story.
>
> [link to your workbook]

**Worksheet** · post Sunday, due next Sunday
> **Translation worksheet**
>
> Four sittings this week — Sunday, Tuesday, Thursday, Saturday. The times are on the sheet.
>
> Part B asks you to write the equations and **not** solve them. That is deliberate. Your
> arithmetic already works; the setup is what we are fixing.
>
> Bring the sheet and your error log on Sunday.
>
> *Attach: `translation-student.pdf`*

**Practice test** · post Sunday, due **Friday 24 October**
> **Full practice test — Bluebook**
>
> One full test, timed, in one sitting, in the Bluebook app. Do it at roughly the time of day
> the real test runs.
>
> Send me a screenshot of the score report when it comes through. We will look at it properly
> on 8 November, not before — this one is to find out what has moved.

**Quizzes** · post Monday, due Friday 24 October
> **Quiz 1 — Signs and Lines** · 12 questions, 20 minutes, calculator allowed
>
> Everything from the first three weeks. You will get your score and a worked solution for
> every question the moment you submit.

> **Quiz 2 — Systems and Inequalities** · 12 questions, 20 minutes
>
> Before each system, decide which method you are using. That decision is worth more marks
> than the algebra after it.

### Week of 25 October — after Session 5

**Practice** · post Sunday, due Friday
> **Quadratics — 40 questions**
>
> Two new topics in the workbook: **3.2 Equivalent expressions** and **3.3 Solving quadratic
> equations**. Twenty questions from each.
>
> Before you solve anything in 3.3, write down how many answers you expect. If you expected
> two and you have one, you are not finished.
>
> [link to your workbook]

**Worksheet** · post Sunday, due next Sunday
> **Quadratics worksheet**
>
> Same four sittings. Part C is the one that matters — four of those questions are built
> around the root most students lose.
>
> *Attach: `quadratics-student.pdf`*

**Quiz** · post Monday, due Friday 31 October
> **Quiz 3 — Translation** · 12 questions, 25 minutes
>
> Word problems. Name the unknown first. Read each equation back as the story.

### Week of 1 November — after Session 6

**Quiz** · post Monday, due Friday 7 November
> **Quiz 4 — Quadratics** · 12 questions, 25 minutes

**Quiz** · post Monday, due Friday 7 November
> **Checkpoint Quiz — Everything so far** · 22 questions, 30 minutes, one sitting, no notes
>
> Every topic we have covered. This is the one that decides what we do with the four sessions
> left, so do it properly and do it in one go.

Post the Checkpoint Quiz so it lands **before** the 8 November session. Walking into that
checkpoint with both the practice test and this quiz in hand is the difference between a
replan and a guess.

---

## What to look at, and when

**Before each session, two minutes.** Open the quiz's Responses tab. You want three things:

1. **The score.** Below 50% on a quiz covering last week's lesson means it did not land, and
   the warm-up has to repair it before you start anything new.
2. **The question-by-question summary.** Forms shows which questions the class got wrong most
   often. With one student that is simply his wrong list, already sorted.
3. **Whether he actually did it.** A missing quiz is information too, and it is better to ask
   about it at the start of the hour than to discover it in November.

**What not to do:** do not go through quiz answers in session. He has already seen the worked
solution for every question he got wrong, the moment he submitted. Use the session for the
two or three he still cannot explain back to you.

---

## When you take on more students

Everything here is per-class, not per-student, so a second student needs no new material —
add them to the same class. Two things change:

- **The question summary becomes genuinely useful.** With five students, "four of five missed
  this" tells you what to teach next week.
- **Quiz scores need a curve of their own.** A 60% from a student who started at 5/22 and a
  60% from one who started at 600 mean opposite things. Keep the diagnostic score beside the
  name.

The workbook's progress is stored in each student's own browser, so it does not follow them
between devices and you cannot see it. If that matters once you have a group, the README's
"If you extend it" section covers swapping in Firebase Auth and Firestore — it is three
functions.
