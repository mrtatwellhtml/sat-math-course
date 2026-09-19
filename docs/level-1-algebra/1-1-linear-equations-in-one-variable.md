---
lesson_id: "1.1"
title: "Linear Equations in One Variable"
level: 1
domain: algebra
prereqs: ["0.5"]
est_minutes: 50
status: drafted
verified_by: ""
---

# 1.1 Linear Equations in One Variable

!!! abstract "Why this is on the test"
    Worth roughly 2-3 questions on a typical digital SAT, almost always as a
    single equation to solve or as a "for what value of $k$ does this
    equation have no solution" question. It is also the skill every later
    algebra lesson assumes you already have.

**Before you start, you should be able to:** combine like terms and solve a
basic multi-step equation (Lesson 0.5).

**By the end of this lesson you will be able to:**

- Solve any one-variable linear equation the SAT can pose
- Identify equations with no solution or infinitely many solutions
- Solve literal equations for a named variable

---

## The idea

A linear equation in one variable is any equation where the variable never
gets raised to a power, multiplied by itself, or trapped under a root — it
only gets added to, subtracted from, multiplied by, or divided by numbers.
Every equation like this reduces to the same three moves: clear fractions
and parentheses, collect the variable on one side, then undo whatever is
being done to it, in reverse order of operations.

The move that separates a confident solver from a slow one is the last
step. Once you have $ax = b$, you divide both sides by $a$ — but check what
$a$ is before you get there. If $a$ is a fraction, multiply by its
reciprocal instead of dividing. If $a$ is a variable expression rather than
a number, you are looking at a no-solution or infinite-solution question,
not a normal one.

That second case is worth naming directly, because the SAT tests it often
and most students have never been taught it as its own skill. When you
collect all the $x$ terms on one side and they cancel completely, you are
left with a statement about numbers only, and it is either always true or
never true:

$$
3(x + 2) = 3x + 6 \;\longrightarrow\; 3x + 6 = 3x + 6 \;\longrightarrow\; 6 = 6
$$

That is true for every $x$: infinitely many solutions. Change the 6 on the
right to a 7 and you get $6 = 7$, which is true for no $x$: no solution.
The SAT usually hides this behind a parameter — "for what value of $k$ does
$3(x+2) = kx + 6$ have infinitely many solutions" — and the question is
really asking you to match coefficients, not to solve for $x$ at all.

A literal equation is an equation with several letters where you are asked
to isolate one of them. It uses the same three moves; the only difference
is that the "numbers" you collect and divide by are now expressions in
other letters. Treat every other letter as a fixed number and the equation
behaves exactly like the ones you already know.

$$
\text{To isolate } x \text{ in } ax + b = c: \quad x = \frac{c - b}{a}
$$

!!! tip "Desmos shortcut"
    Solving does not need a graph, but checking does. Type both sides of
    the original equation into Desmos as $y_1 =$ left side and $y_2 =$
    right side and find their intersection — its $x$-coordinate must match
    your answer. If the two lines never meet, the equation has no solution;
    if they are the same line, it has infinitely many.

---

## Worked examples

### Example 1 — routine
> Solve for $x$: $4(x - 3) + 5 = 2x + 7$

**Thinking:** Clear the parentheses first, then get every $x$ term on one
side before touching the constants.

**Solution:**

1. Distribute the 4: $4x - 12 + 5 = 2x + 7$.
2. Combine the constants on the left: $4x - 7 = 2x + 7$.
3. Subtract $2x$ from both sides to collect the variable on the left:
   $2x - 7 = 7$.
4. Add 7 to both sides: $2x = 14$.
5. Divide both sides by 2: $x = 7$.

**Answer:** $x = 7$

### Example 2 — typical test difficulty
> A rental van costs \$45 plus \$0.60 per mile driven. A moving company has
> budgeted \$141 for a one-day rental. What is the greatest number of whole
> miles the company can drive and stay within budget?

**Thinking:** This is a linear equation in disguise — set the cost
expression equal to the budget and solve, then check whether the answer
needs rounding down since miles cost money and the budget cannot be
exceeded.

**Solution:**

1. Let $m$ be the number of miles. The total cost is $45 + 0.60m$.
2. Set the cost equal to the budget: $45 + 0.60m = 141$.
3. Subtract 45 from both sides: $0.60m = 96$.
4. Divide both sides by 0.60: $m = 160$.
5. $160$ is a whole number and costs exactly \$141, so it fits the budget
   with nothing left over — no rounding needed.

**Answer:** $160$ miles

### Example 3 — the hard version
> For what value of $k$ does the equation $\dfrac{k}{3}x + 8 = 2(x + 4)$
> have infinitely many solutions?

**Thinking:** This looks like a normal equation to solve for $x$, but the
question asks for a value of $k$ instead — that is the signal that the
real task is matching the equation to itself on both sides, not isolating
$x$. Expand the right side first so both sides are in the same form, then
compare coefficients.

**Solution:**

1. Distribute the right side: $\dfrac{k}{3}x + 8 = 2x + 8$.
2. The constant terms already match (8 on both sides), so this equation has
   infinitely many solutions exactly when the coefficients of $x$ also
   match — otherwise the $x$ terms would not cancel and no single value of
   $k$ could fix that.
3. Set the coefficients equal: $\dfrac{k}{3} = 2$.
4. Multiply both sides by 3: $k = 6$.
5. Check: with $k = 6$, the equation reads $2x + 8 = 2x + 8$, true for
   every $x$.

**Answer:** $k = 6$

---

## Where students go wrong

!!! warning "Common errors"
    - **Distributing a negative sign only to the first term.** In
      $5 - 2(x - 3)$, students often write $5 - 2x - 6$ instead of
      $5 - 2x + 6$. The minus sign in front of the parentheses multiplies
      every term inside, including the sign of the second term.
    - **Stopping at "no solution" or "infinitely many" without checking
      both the coefficients and the constants.** Matching coefficients
      alone is not enough — if the coefficients of $x$ match but the
      constants do not, the equation has no solution, not infinitely many.
      Both conditions have to be checked.
    - **Dividing only one side of the equation, or only one term of a
      side.** After $2x = 14$, some students divide the left by 2 to get
      $x$ but forget to divide the right, or divide only one of several
      added terms. Whatever you do, you do to the entire left side and the
      entire right side.
    - **Forgetting that "solve for $x$" in a literal equation still needs
      isolation, not simplification.** Given $ax + by = c$ solved for $x$,
      students sometimes stop at $ax = c - by$ without the final division
      by $a$. The variable being solved for must end up completely alone.
    - **Treating a fraction coefficient by clearing denominators
      incorrectly.** In $\dfrac{x}{4} + \dfrac{x}{3} = 7$, multiplying
      only the left side by 12, or multiplying by 12 but forgetting one of
      the two fractions, leaves an equation that no longer matches the
      original. Every term on both sides gets multiplied by the same
      common denominator.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** Solve for $x$: $5x - 8 = 27$ *(student-produced response)*

**2.** Solve for $x$: $3(x + 4) = 2x + 19$

- A) $x = 7$
- B) $x = -7$
- C) $x = 15$
- D) $x = 31$

**3.** Solve for $x$: $\dfrac{x}{4} + 3 = 10$ *(student-produced response)*

**4.** The formula for the perimeter of a rectangle is $P = 2l + 2w$, where
$l$ is the length and $w$ is the width. Which expression gives $w$ in terms
of $P$ and $l$?

- A) $w = P - 2l$
- B) $w = \dfrac{P - 2l}{2}$
- C) $w = \dfrac{P + 2l}{2}$
- D) $w = \dfrac{P - 2l}{4}$

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** A phone plan charges a \$20 base fee plus \$0.05 per text message
sent. In one month, the total bill was \$34.50. How many text messages were
sent that month? *(student-produced response)*

**6.** How many solutions does the equation $4x + 6 = 4(x + 2) - 2$ have?

- A) No solution
- B) Exactly one solution
- C) Infinitely many solutions
- D) Exactly two solutions

**7.** The formula $F = \dfrac{9}{5}C + 32$ converts a temperature $C$ in
degrees Celsius to a temperature $F$ in degrees Fahrenheit. What is the
value of $C$, in degrees Celsius, when $F = 98.6$?
*(student-produced response)*

**8.** Solve for $x$: $\dfrac{2x - 1}{3} = x - 5$

- A) $x = 4$
- B) $x = -16$
- C) $x = 16$
- D) $x = 14$

**9.** A gym charges a one-time \$40 sign-up fee plus a fixed monthly
membership fee. After 5 months, a member has paid \$190 in total. What is
the monthly membership fee?

- A) \$30
- B) \$25
- C) \$38
- D) \$46

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** For what value of $k$ does the equation $k(x + 2) = 5x - 6$ have no
solution?

- A) $k = -3$
- B) $k = 5$
- C) $k = -5$
- D) $k = 3$

**11.** The equation $\dfrac{1}{2}(4x - 6) + 5 = 2x + c$ is true for every
value of $x$. What is the value of $c$? *(student-produced response)*

**12.** Solve for $y$ in terms of $x$ and $z$: $\dfrac{x(y - z)}{2} = 3y + z$

- A) $y = \dfrac{z(x + 1)}{x - 3}$
- B) $y = \dfrac{z(x - 2)}{x - 6}$
- C) $y = \dfrac{z(x + 2)}{x - 6}$
- D) $y = \dfrac{z(2 - x)}{x - 6}$

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | 7 |
    | 2 | A |
    | 3 | 28 |
    | 4 | B |
    | 5 | 290 |
    | 6 | C |
    | 7 | 37 |
    | 8 | D |
    | 9 | A |
    | 10 | B |
    | 11 | 2 |
    | 12 | C |

??? success "Show full solutions"
    **1.** Add 8 to both sides: $5x = 35$. Divide both sides by 5: $x = 7$.
    Check: $5(7) - 8 = 35 - 8 = 27$. **Answer: 7.**

    **2.** Distribute the 3: $3x + 12 = 2x + 19$. Subtract $2x$ from both
    sides to collect the variable on the left: $x + 12 = 19$. Subtract 12
    from both sides: $x = 7$, choice **A**. Choice B, $x = -7$, comes from a
    sign error when moving the $2x$ term, subtracting $3x$ instead of $2x$
    to get $-x + 12 = 19$. Choice C, $x = 15$, comes from distributing the 3
    onto the $x$ but forgetting to distribute it onto the 4, leaving
    $3x + 4 = 2x + 19$. Choice D, $x = 31$, comes from adding 12 to 19
    instead of subtracting it. Check: $3(7 + 4) = 3(11) = 33$, and
    $2(7) + 19 = 14 + 19 = 33$. **Answer: A.**

    **3.** Subtract 3 from both sides: $\dfrac{x}{4} = 7$. Multiply both
    sides by 4: $x = 28$. Check: $\dfrac{28}{4} + 3 = 7 + 3 = 10$.
    **Answer: 28.**

    **4.** Subtract $2l$ from both sides: $P - 2l = 2w$. Divide both sides
    by 2: $w = \dfrac{P - 2l}{2}$, choice **B**. Choice A, $w = P - 2l$,
    subtracts $2l$ correctly but never divides by 2. Choice C,
    $w = \dfrac{P + 2l}{2}$, adds $2l$ instead of subtracting it. Choice D,
    $w = \dfrac{P - 2l}{4}$, divides by 4 instead of 2. Check with
    $P = 20$, $l = 3$: $w = \dfrac{20 - 6}{2} = 7$, and
    $2(3) + 2(7) = 6 + 14 = 20$. **Answer: B.**

    **5.** Let $m$ be the number of text messages sent. The \$20 is a
    one-time monthly charge; the \$0.05 is a rate charged per message, so
    the equation is $20 + 0.05m = 34.50$. Subtract 20 from both sides:
    $0.05m = 14.50$. Divide both sides by 0.05: $m = 290$. Check:
    $20 + 0.05(290) = 20 + 14.50 = 34.50$. **Answer: 290.**

    **6.** Distribute the right side: $4(x + 2) - 2 = 4x + 8 - 2 = 4x + 6$.
    The equation becomes $4x + 6 = 4x + 6$, the same expression on both
    sides. Subtracting $4x$ from both sides leaves $6 = 6$, a statement
    that is always true, so every value of $x$ is a solution: infinitely
    many solutions, choice **C**. Choice A is what a student reaches by
    seeing the $x$-terms cancel and assuming that cancellation always means
    no solution, without checking whether the remaining constants also
    match. Choice B treats the equation as an ordinary one to solve for a
    single value of $x$, missing that the variable cancels entirely. Choice
    D is not possible for a linear equation, which never has exactly two
    solutions. **Answer: C.**

    **7.** Substitute $F = 98.6$: $98.6 = \dfrac{9}{5}C + 32$. Subtract 32
    from both sides: $66.6 = \dfrac{9}{5}C$. Multiply both sides by
    $\dfrac{5}{9}$: $C = 66.6 \times \dfrac{5}{9} = 37$. Check:
    $\dfrac{9}{5}(37) + 32 = 66.6 + 32 = 98.6$. **Answer: 37.**

    **8.** Multiply both sides by 3 to clear the fraction:
    $2x - 1 = 3(x - 5) = 3x - 15$. Subtract $2x$ from both sides:
    $-1 = x - 15$. Add 15 to both sides: $x = 14$, choice **D**. Choice A,
    $x = 4$, comes from distributing the 3 onto the $x$ but forgetting to
    distribute it onto the $-5$, leaving $2x - 1 = 3x - 5$. Choice B,
    $x = -16$, comes from a sign error, treating $-1 = x - 15$ as
    $x = -1 - 15$ instead of adding 15 to both sides. Choice C, $x = 16$,
    comes from a sign error while combining the constants, giving
    $-x = -16$ instead of correctly isolating $x = 14$. Check:
    $\dfrac{2(14) - 1}{3} = \dfrac{27}{3} = 9$, and $14 - 5 = 9$.
    **Answer: D.**

    **9.** Let $f$ be the monthly fee in dollars. The \$40 sign-up fee is
    paid once; the monthly fee is paid each of the 5 months, so the
    equation is $40 + 5f = 190$. Subtract 40 from both sides: $5f = 150$.
    Divide both sides by 5: $f = 30$, choice **A**. Choice B, \$25, comes
    from dividing the \$150 left after subtracting the fee by 6 months
    instead of 5. Choice C, \$38, comes from dividing the full \$190 by 5
    without first subtracting the sign-up fee. Choice D, \$46, comes from
    adding the sign-up fee to the total instead of subtracting it before
    dividing. Check: $40 + 5(30) = 40 + 150 = 190$. **Answer: A.**

    **10.** Distribute the left side: $kx + 2k = 5x - 6$. For the equation
    to have no solution, the coefficients of $x$ must match — otherwise
    there is exactly one solution — while the constant terms must not
    match, since matching constants would make the equation true for every
    $x$. Setting the coefficients equal: $k = 5$. Checking the constants
    with $k = 5$: the left side's constant is $2k = 10$, and the right
    side's constant is $-6$; since $10 \neq -6$, the equation truly has no
    solution when $k = 5$, choice **B**. Choice A, $k = -3$, comes from
    setting the constant terms equal instead, $2k = -6$ — the condition for
    matching, not for a mismatch. Choice C, $k = -5$, comes from a sign
    error while equating the coefficients of $x$. Choice D, $k = 3$, comes
    from distributing the left side with the wrong sign, $kx - 2k = 5x - 6$,
    then setting the resulting constants equal, $-2k = -6$. **Answer: B.**

    **11.** Distribute the $\dfrac{1}{2}$: $\dfrac{1}{2}(4x - 6) = 2x - 3$.
    The left side becomes $2x - 3 + 5 = 2x + 2$, so the equation is
    $2x + 2 = 2x + c$. The coefficients of $x$ already match, so the
    equation is true for every $x$ exactly when the constant terms also
    match: $c = 2$. Check: with $c = 2$, the equation reads
    $2x + 2 = 2x + 2$, true for every $x$. **Answer: 2.**

    **12.** Multiply both sides by 2 to clear the fraction:
    $x(y - z) = 2(3y + z) = 6y + 2z$. Distribute the left side:
    $xy - xz = 6y + 2z$. Collect every term with $y$ on one side:
    $xy - 6y = 2z + xz$. Factor $y$ out of the left side and $z$ out of the
    right side: $y(x - 6) = z(x + 2)$. Divide both sides by $x - 6$:
    $y = \dfrac{z(x + 2)}{x - 6}$, choice **C**. Choice A comes from
    forgetting to multiply the right side by 2 when clearing the fraction,
    leaving the equation $x(y - z) = 3y + z$ instead. Choice B comes from a
    sign error while factoring, writing $x - 2$ instead of $x + 2$ in the
    numerator. Choice D comes from a sign error while moving the $-xz$
    term, writing $2z - xz$ instead of $2z + xz$ before factoring. Check
    with $x = 10$, $z = 4$: $y = \dfrac{4(12)}{4} = 12$, and the original
    equation gives $\dfrac{10(12 - 4)}{2} = \dfrac{80}{2} = 40$, which
    equals $3(12) + 4 = 40$. **Answer: C.**

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** the sign error on distributing a negative — it is the
      single most common slip in this lesson and it silently produces a
      wrong answer that still "looks" like a clean solve.
    - **Diagnostic question:** ask them to solve
      $5 - 2(x - 3) = 3x + 1$ out loud. If they distribute the $-2$
      correctly to both terms and still land on the right answer, they have
      the core skill; if they stumble at the distribution step, go back to
      the negative-distribution error above before moving on.
    - **If they are struggling:** return to Lesson 0.5, Solving
      One-Variable Linear Equations, and rebuild the four-step process
      without the added no-solution and literal-equation layer.
    - **If they are flying:** jump to Example 3's style directly — give
      them a parameter equation and ask for the value that makes it have no
      solution instead of infinitely many, since that flips which condition
      must fail.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`.

---

*Previous: [0.5 Solving One-Variable Linear Equations](../level-0-foundations/0-5-solving-one-variable-linear-equations.md) · Next: [1.2 Slope and Linear Functions](1-2-slope-and-linear-functions.md)*
