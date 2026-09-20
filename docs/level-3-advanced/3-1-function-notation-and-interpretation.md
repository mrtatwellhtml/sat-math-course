---
lesson_id: "3.1"
title: "Function Notation and Interpretation"
level: 3
domain: advanced_math
prereqs: ["1.3"]
est_minutes: 50
status: verified
verified_by: "math-verifier 2026-09-20"
---

# 3.1 Function Notation and Interpretation

!!! abstract "Why this is on the test"
    Function notation is worth about 2-3 questions on its own on a typical
    digital SAT, but every other Advanced Math lesson in Level 3 assumes you
    can read $f(x)$ fluently. Get this lesson solid and the rest of the
    domain opens up; skip it and every later lesson fights you twice.

**Before you start, you should be able to:** say in words what a number in a
linear model represents, the way you did with $y = 25x + 40$ in Lesson 1.3.

**By the end of this lesson you will be able to:**

- Evaluate $f(a)$, solve $f(x) = k$, and read both off a graph or table
- Handle composition such as $f(g(x))$
- Interpret a function's meaning in a real context

---

## The idea

A function is a machine: you feed it an input, it hands back exactly one
output. $f(x)$ is not "$f$ times $x$" — it is the name of the machine, $f$,
applied to the input $x$. The letter can be anything; $f$, $g$, and $h$ are
the usual ones, the way $x$ and $y$ are the usual names for numbers.

The notation carries two completely different questions, and the SAT builds
wrong answers out of students who swap them.

**"Evaluate $f(a)$"** means: you know the input, find the output. Put $a$
into the machine, get a number out.

**"Solve $f(x) = k$"** means: you know the output, find the input. You are
told what comes out of the machine and have to work backward to what went
in — and there may be more than one answer.

$$
f(a) \text{ asks "what comes out?"} \qquad f(x) = k \text{ asks "what went in?"}
$$

On a graph, this split becomes a physical direction. To evaluate $f(a)$, you
start on the x-axis at $a$, go up (or down) to the curve, then read across to
the y-axis. To solve $f(x) = k$, you start on the y-axis at $k$, go across to
the curve, then read down to the x-axis. Same graph, opposite direction of
travel — and if the curve crosses that height more than once, $f(x) = k$ has
more than one solution even though $f(a)$ only ever has one output.

**Composition**, $f(g(x))$, means the output of $g$ becomes the input of
$f$. You work from the inside out: evaluate $g(x)$ first, then feed that
result into $f$. $f(g(x))$ and $g(f(x))$ are built from the same two
machines run in opposite order, and they almost never give the same answer.

In context, $f(x)$ usually names a real quantity — the cost, the height, the
population — as a function of another one. Reading a statement like
"$f(30) = 8$" means translating it back into English before you do anything
else: here, an input of 30 produces an output of 8, in whatever units the
problem set up.

!!! tip "Desmos shortcut"
    To check a composition or an evaluation, type the function definitions
    directly into Desmos — `f(x)=...` then `g(x)=...` — and evaluate
    `f(g(2))` on its own line. Desmos will compute it instantly, which is a
    fast way to check your by-hand work, though on the test you must still
    show the reasoning.

---

## Worked examples

### Example 1 — routine
> The function $f$ is defined by $f(x) = 2x^2 - 5x + 1$. What is the value
> of $f(-2)$?

**Thinking:** This is a pure evaluation — the input is given, so substitute
and simplify. No solving required.

**Solution:**

1. Substitute $x = -2$ into the definition: $f(-2) = 2(-2)^2 - 5(-2) + 1$.
2. Evaluate the square first: $2(4) - 5(-2) + 1$.
3. Multiply through: $8 + 10 + 1$.
4. Add: $19$.

**Answer:** $f(-2) = 19$

### Example 2 — typical test difficulty
> The table below gives values of the function $g$ for several inputs.

| $x$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $g(x)$ | 5 | 3 | 1 | 3 | 9 |

> A second function is defined by $h(x) = g(x) + 1$. Part (a): what is
> $g(3)$? Part (b): for what value of $x$ shown in the table does
> $g(x) = 1$? Part (c): what is $h(g(1))$?

**Thinking:** Three sub-questions test the same table three different ways —
read across for a known input, read backward for a known output, then
compose. Keep straight which direction each part asks for before touching
the table.

**Solution:**

1. Part (a) is a direct evaluation: find $x = 3$ in the top row and read the
   value beneath it. $g(3) = 3$.
2. Part (b) is the reverse: scan the bottom row for the output 1, then read
   the input above it. That output appears under $x = 2$, so $g(x) = 1$ when
   $x = 2$.
3. Part (c) is a composition, so work inside out. First find the inner
   value: $g(1) = 3$, from the table.
4. Now use that result as the input to $h$: $h(g(1)) = h(3) = g(3) + 1$.
5. From part (a), $g(3) = 3$, so $h(3) = 3 + 1 = 4$.

**Answer:** (a) $g(3) = 3$   (b) $x = 2$   (c) $h(g(1)) = 4$

### Example 3 — the hard version
> A company's software tracks the number of active users of an app, in
> thousands, $n$ days after a marketing campaign launches. The number of
> active users is modeled by $u(n) = 40 + 6n$. The average revenue per
> active user, in dollars, is modeled by $r(n) = 12 - 0.1n$
> for $0 \le n \le 60$. The company's daily revenue, in dollars, is given by
> $R(n) = u(n) \cdot r(n) \cdot 1000$, since $u(n)$ is measured in thousands
> of users.
>
> Part (a): what does $r(u^{-1}(70))$ represent in this context, and can it
> be evaluated using only the information given? Part (b): what is
> $R(10)$?

**Thinking:** Part (a) is a trap dressed as composition — it introduces
$u^{-1}$, an inverse, which nothing in the setup defines or makes possible
to build from a linear model without more care, and the honest move is to
recognize what the expression would mean before deciding whether it can be
computed. Part (b) is a real composition-flavored evaluation: $R$ is built
from two other functions multiplied together, so evaluate each piece at
$n = 10$ first, then combine.

**Solution:**

1. For part (a), read the expression from the inside out in words:
   $u^{-1}(70)$ would be "the number of days $n$ at which active users
   equal 70 thousand," and $r$ applied to that would be "the average
   revenue per user on that day." That is a meaningful quantity in
   principle.
2. Check whether it can actually be found from what is given: $u(n) = 40 + 6n$
   is linear and one-to-one, so $u^{-1}(70)$ does exist and can be found by
   solving $40 + 6n = 70$, giving $n = 5$.
3. So the expression can be evaluated:
   $r(u^{-1}(70)) = r(5) = 12 - 0.1(5) = 12 - 0.5 = 11.5$. It represents the
   average revenue per active user, in dollars, on the day the app reaches
   70,000 active users.
4. For part (b), evaluate each piece at $n = 10$ separately before
   combining. First, $u(10) = 40 + 6(10) = 40 + 60 = 100$.
5. Next, $r(10) = 12 - 0.1(10) = 12 - 1 = 11$.
6. Combine using the definition of $R$:
   $R(10) = u(10) \cdot r(10) \cdot 1000 = 100 \times 11 \times 1000$.
7. Multiply: $R(10) = 1{,}100{,}000$.

**Answer:** (a) $r(u^{-1}(70)) = 11.5$, the average revenue per user, in
dollars, on the day active users reach 70,000. (b) $R(10) = \$1{,}100{,}000$

---

## Where students go wrong

!!! warning "Common errors"
    - **Confusing $f(a)$ with $f(x) = k$.** A student asked to solve
      $f(x) = 5$ substitutes 5 in for $x$ and evaluates $f(5)$ instead —
      exactly backward. The SAT writes this distractor into nearly every
      graph-reading question about function values, because the two
      questions look similar in words but move in opposite directions on
      the graph. Before touching the graph or table, say out loud which
      axis you are starting from.
    - **Computing $g(f(x))$ when the question asks for $f(g(x))$.** Reading
      left to right, it is natural to evaluate whichever function is
      written first, but composition always works inside out. Underline
      the innermost function first and evaluate that one alone before
      touching the outer one.
    - **Treating $f(x)$ as $f$ times $x$.** This shows up most with single
      letters like $f$, $g$, $h$ — a student distributes or cancels the
      letter as if it were a coefficient. $f(x)$ is a name attached to an
      input, never a product.
    - **Losing a second solution to $f(x) = k$.** When a graph crosses a
      given height twice, students report only the first crossing they
      spot. Scan the entire graph, not only the first intersection, before
      finalizing an answer.
    - **Answering with a number instead of a sentence in interpretation
      questions.** Asked what $f(30) = 8$ means, a student restates the
      equation rather than translating it into the problem's units and
      context. Practice finishing the sentence "an input of ___ produces an
      output of ___, meaning..." every time.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** The function $f$ is defined by $f(x) = 3x - 4$. What is the value of
$f(5)$?

- A) 19
- B) 3
- C) 11
- D) 15

**2.** The function $g$ is defined by $g(x) = x^2 - 2x$. What is the value
of $g(-3)$? *(student-produced response)*

**3.** The table below gives values of the function $h$ for five values of
$x$.

| $x$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $h(x)$ | 9 | 6 | 3 | 0 | -3 |

What is the value of $h(2)$?

- A) 3
- B) 9
- C) 6
- D) 0

**4.** A bike rental's total cost, in dollars, is modeled by
$C(t) = 5t + 20$, where $t$ is the number of hours rented. What does
$C(3) = 35$ mean in this context?

- A) The cost increases by \$35 every hour.
- B) After 35 hours, the cost is \$3.
- C) After 5 hours, the cost is \$3.
- D) After 3 hours, the cost is \$35.

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** Two functions are defined by $f(x) = x + 3$ and $g(x) = 2x$. What is
the value of $f(g(2))$?

- A) 9
- B) 5
- C) 10
- D) 7

**6.** The table below gives values of the function $p$ for five values of
$x$.

| $x$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $p(x)$ | 10 | 6 | 2 | 6 | 13 |

What is the value of $p(4)$?

- A) 13
- B) 6
- C) 2
- D) 10

**7.** Using the table of values for $p$ in question 6, the equation
$p(x) = 6$ has more than one solution among the values shown. For how many
values of $x$ in the table is $p(x) = 6$? *(student-produced response)*

**8.** A tank's volume, in liters, after $t$ minutes of filling is modeled
by $V(t) = 150 + 12t$ for $0 \le t \le 20$. What does $V(5) = 210$ mean in
this context?

- A) The tank fills at a rate of 210 liters per minute.
- B) After 210 minutes, the tank contains 5 liters.
- C) After 5 minutes, the tank contains 210 liters.
- D) After 12 minutes, the tank contains 150 liters.

**9.** A moving company charges a \$45 flat fee plus \$15 per day to rent a
trailer. The total cost is modeled by $C(x) = 45 + 15x$, where $x$ is the
number of days rented. For what value of $x$ does $C(x) = 150$?
*(student-produced response)*

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** The function $f$ is defined by $f(x) = ax + b$, where $a$ and $b$
are constants. In this function, $f(2) = 9$ and $f(5) = 21$. What is the
value of $f(3)$?

- A) 15
- B) 13
- C) 7
- D) 12

**11.** Two functions are defined by $f(x) = x^2 - 1$ and $g(x) = x + k$,
where $k$ is a constant. Given that $f(g(1)) = 8$, what is the positive
value of $k$? *(student-produced response)*

**12.** A factory's hourly production is modeled by $n(t) = 25t$, the
number of parts produced after $t$ hours. The cost to produce $n$ parts is
modeled by $c(n) = 200 + 3n$, in dollars. Which statement correctly
interprets $c(n(4))$?

- A) The cost, in dollars, of producing 4 parts.
- B) The number of hours required to produce 4 parts.
- C) The cost, in dollars, of producing the parts made in 4 hours of
  production.
- D) The number of parts produced after 4 hours of production.

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | C |
    | 2 | 15 |
    | 3 | A |
    | 4 | D |
    | 5 | D |
    | 6 | B |
    | 7 | 2 |
    | 8 | C |
    | 9 | 7 |
    | 10 | B |
    | 11 | 2 |
    | 12 | C |

??? success "Show full solutions"
    **1.** This is a pure evaluation: the input is given, so substitute
    $x = 5$ into the definition and simplify: $f(5) = 3(5) - 4 = 15 - 4 = 11$.
    Option A comes from a sign slip, treating $-4$ as $+4$. Option B
    comes from evaluating $3(5 - 4)$ instead of $3(5) - 4$. Option D drops
    the subtraction entirely and reports $3(5) = 15$. **Answer: C**

    **2.** Substitute $x = -3$ into $g(x) = x^2 - 2x$. First square the
    input: $(-3)^2 = 9$. Then evaluate the second term: $-2(-3) = 6$. Add
    the two pieces: $g(-3) = 9 + 6 = 15$. **Answer: 15**

    **3.** This is a direct table read: to evaluate $h(2)$, find $x = 2$
    in the top row and read the value beneath it, which is 3. Option B
    reads the value under $x = 0$, one column too far left. Option C reads
    the value under $x = 1$, one column too far left. Option D reads the
    value under $x = 3$, one column too far right. **Answer: A**

    **4.** The statement $C(3) = 35$ pairs an input with an output: an
    input of 3 (hours) produces an output of 35 (dollars). Translated into
    the context, that reads "after 3 hours, the cost is \$35." Option A
    misreads 35 as a per-hour rate rather than a total cost. Options B and
    C both swap which number is the input and which is the output.
    **Answer: D**

    **5.** This is a composition, so work from the inside out. First
    evaluate the inner function: $g(2) = 2(2) = 4$. Then use that result as
    the input to the outer function: $f(g(2)) = f(4) = 4 + 3 = 7$. Option A
    comes from adding $f(2) + g(2) = 5 + 4 = 9$ instead of composing.
    Option B reports $f(2) = 5$, skipping the inner function entirely.
    Option C is the reversed-order composition, $g(f(2))$: $f(2) = 5$, then
    $g(5) = 10$ — the right computation applied in the wrong order.
    **Answer: D**

    **6.** This is a direct table read: find $x = 4$ in the top row and
    read the value beneath it, which is 6. Option A reads the value under
    $x = 5$, one column too far right. Option C reads the value under
    $x = 3$, one column too far left. Option D reads the value under
    $x = 1$, confusing it with the first entry in the row. **Answer: B**

    **7.** This is the reverse read: scan the bottom row of the same table
    for the output 6, rather than starting from a single $x$-value.
    That output appears twice, under $x = 2$ and under $x = 4$, so the
    equation $p(x) = 6$ has two solutions among the values shown. A
    student who stops scanning after the first match would miss the second
    one and undercount. **Answer: 2**

    **8.** The statement $V(5) = 210$ pairs an input with an output: an
    input of 5 (minutes) produces an output of 210 (liters). Translated
    into context, that reads "after 5 minutes, the tank contains 210
    liters." Option A misreads 210 as a rate rather than a total volume.
    Option B swaps the input and output. Option D uses the coefficients
    from the formula directly instead of the actual input and output
    values. **Answer: C**

    **9.** This is a solve-for-input question: the output is known and the
    input is unknown, so set the model equal to 150 and solve.
    $45 + 15x = 150$. Subtract 45 from both sides: $15x = 105$. Divide by
    15: $x = 7$. **Answer: 7**

    **10.** Two conditions determine the two unknowns, so set up a system
    first. $f(2) = 9$ gives $2a + b = 9$. $f(5) = 21$ gives $5a + b = 21$.
    Subtract the first equation from the second to eliminate $b$:
    $3a = 12$, so $a = 4$. Substitute back: $2(4) + b = 9$, so $b = 1$.
    Now evaluate: $f(3) = 4(3) + 1 = 12 + 1 = 13$. Option A comes from
    averaging the two given outputs, $(9 + 21) \div 2 = 15$, which has no
    connection to $f(3)$. Option C comes from swapping the roles of $a$
    and $b$ in the final evaluation. Option D reports only the slope term,
    $4(3) = 12$, forgetting to add $b$. **Answer: B**

    **11.** Work from the inside out. First find the inner value in terms
    of $k$: $g(1) = 1 + k$. Then substitute that into $f$:
    $f(g(1)) = (1 + k)^2 - 1$. Set this equal to 8:
    $(1 + k)^2 - 1 = 8$, so $(1 + k)^2 = 9$. Taking the square root of both
    sides gives $1 + k = 3$ or $1 + k = -3$, so $k = 2$ or $k = -4$. The
    positive value is $k = 2$. **Answer: 2**

    **12.** Read $c(n(4))$ from the inside out in words before computing
    anything: $n(4)$ is "the number of parts produced after 4 hours," and
    $c$ applied to that is "the cost of producing that many parts." Put
    together, $c(n(4))$ represents the cost, in dollars, of producing the
    parts made in 4 hours of production. Option A wrongly treats the 4 as
    a number of parts rather than a number of hours passed into $n$ first.
    Option B inverts the relationship, asking for hours instead of cost.
    Option D describes only the inner function, $n(4)$, and stops there
    without applying $c$. **Answer: C**

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** the student reversing direction on graph-reading —
      going "up then across" when the question asked for "across then
      down," or vice versa. Watch their finger movement on the graph, not
      not only their final answer.
    - **Diagnostic question:** give them a graph and ask both "find $f(3)$"
      and "solve $f(x) = 3$" back to back using the same graph. If they get
      the same numeric answer to both without checking, they have not
      internalized the distinction.
    - **If they are struggling:** return to Lesson 1.3 and re-anchor what an
      input and output mean in a linear model before reintroducing function
      notation on top of it.
    - **If they are flying:** escalate to a composition problem with three
      nested functions, or one where the inner function is defined by a
      table and the outer by a formula, mixing representations.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`.

---

*Previous: [1.3 Interpreting Linear Models in Context](../level-1-algebra/1-3-interpreting-linear-models-in-context.md) · Next: [3.2 Equivalent Expressions: Factoring and Expanding](3-2-equivalent-expressions-factoring-and-expanding.md)*
