---
lesson_id: "1.8"
title: "Absolute Value on the SAT"
level: 1
domain: algebra
prereqs: ["1.6"]
est_minutes: 30
status: verified
verified_by: "math-verifier 2026-09-19"
---

# 1.8 Absolute Value on the SAT

!!! abstract "Why this is on the test"
    Absolute value earns you at most one question on a typical digital SAT, and it almost always shows up in one of two costumes: a distance statement translated into an equation, or a tolerance statement translated into an inequality. Learn those two costumes and this lesson pays for itself in ten minutes of test time.

**Before you start, you should be able to:** solve and graph one-variable inequalities, including flipping the inequality sign when you multiply or divide by a negative number (Lesson 1.6).

**By the end of this lesson you will be able to:**

- Solve basic absolute-value equations and inequalities
- Read absolute value as distance on a number line

---

## The idea

Absolute value strips away direction and leaves size. $|x|$ is the distance from $x$ to 0 on the number line, so it is never negative: $|5| = 5$ and $|-5| = 5$.

The SAT almost never asks you to evaluate $|x|$ on its own. It asks you to solve an equation or inequality that contains it, and every one of those problems reduces to the same move: split the absolute value into two ordinary cases, one for each direction.

$$
|x - a| = b \quad \Longrightarrow \quad x - a = b \ \text{ or } \ x - a = -b
$$

Read $|x - a|$ as "the distance from $x$ to $a$." That reading is doing real work, not decoration: it is the reason the equation splits into two cases in the first place. A point $b$ units from $a$ could sit above $a$ or below it, and the equation has to capture both.

The same reading extends to inequalities, and this is the form that actually appears on the test.

$$
|x - a| \le b \quad \Longrightarrow \quad a - b \le x \le a + b
$$

This says: $x$ is within $b$ units of $a$. That sentence is worth memorizing word for word, because the SAT's favorite version of this topic is a tolerance problem dressed in context — a measurement that must stay within some margin of a target value. You will see the pattern again in Lesson 2.7 on margin of error; this lesson is where you learn to read it.

One direction matters as much as the algebra: before you split anything, check whether $b$ is negative. $|x - a| = -3$ has no solution, because a distance cannot equal a negative number. $|x - a| \ge -3$ is true for every real $x$, for the same reason. A strong test-taker checks the sign of $b$ first and sometimes finishes the problem right there.

!!! tip "Desmos shortcut"
    To check a solved absolute-value equation, graph $y = |x - a|$ and the horizontal line $y = b$ in Desmos. The two intersection points are your two solutions — a fast way to catch a sign error before you commit to an answer.

---

## What the SAT does *not* ask

Skip anything that goes beyond the two costumes above. A general algebra textbook will walk you through graphing $y = |x|$ and its transformations (shifts, stretches, reflections), nested absolute values like $\big||x - 2| - 5\big| = 3$, and absolute value combined with other functions. None of that appears on the digital SAT. If a review resource sends you down one of those paths, close it and come back here — that time is better spent on a domain that is actually scored.

---

## Worked examples

### Example 1 — routine

> Solve for all values of $x$: $|x - 4| = 9$.

**Thinking:** This is the distance reading directly: $x$ is 9 units from 4. That gives two points, one on each side of 4.

**Solution:**

1. Split into two cases, since a distance of 9 can point in either direction: $x - 4 = 9$ or $x - 4 = -9$.
2. Solve the first case by adding 4 to both sides: $x = 13$.
3. Solve the second case by adding 4 to both sides: $x = -5$.

**Answer:** $x = 13$ or $x = -5$

### Example 2 — typical test difficulty

> A machine fills bottles with a target volume of 500 millilitres. A bottle passes inspection if its volume is within 15 millilitres of the target. Which inequality describes the volume $v$, in millilitres, of a bottle that passes inspection, and what is the least volume that passes?

**Thinking:** "Within 15 millilitres of the target" is a distance statement: the distance from $v$ to 500 is at most 15. That translates directly to $|v - 500| \le 15$, and the two cases give the range of acceptable volumes.

**Solution:**

1. Translate "within 15 mL of 500" as distance: $|v - 500| \le 15$.
2. Split into two cases and solve each, since the inequality means $v$ is no more than 15 above 500 and no more than 15 below it: $v - 500 \le 15$ gives $v \le 515$, and $v - 500 \ge -15$ gives $v \ge 485$.
3. Combine the two cases into one range: $485 \le v \le 515$. The least volume that still passes is the lower bound of that range.

**Answer:** $|v - 500| \le 15$; the least passing volume is $485$ mL

### Example 3 — the hard version

> A quality-control rule states that a rod's length $L$, in centimetres, must satisfy $|L - k| \le t$, where $k$ is the target length and $t$ is the tolerance. Rods are accepted only if $L$ is between 62.4 cm and 68.0 cm, inclusive. What is the value of $k - t$?

**Thinking:** This runs the translation backward. Instead of turning a sentence into an inequality, you are given the solved range and have to recover the target and the tolerance that produced it. The target is the midpoint of the range, and the tolerance is the distance from the midpoint to either end.

**Solution:**

1. Recognise that $|L - k| \le t$ solves to $k - t \le L \le k + t$, so the given range's endpoints must match $k - t$ and $k + t$.
2. Match the lower endpoint directly: $k - t = 62.4$.
3. Since the question asks for exactly $k - t$, no further work is needed — but you can confirm the setup by finding $k$ and $t$ separately: the midpoint is $k = \dfrac{62.4 + 68.0}{2} = 65.2$, and the tolerance is $t = 68.0 - 65.2 = 2.8$, so $k - t = 65.2 - 2.8 = 62.4$, matching the lower endpoint as expected.

**Answer:** $k - t = 62.4$

---

## Where students go wrong

!!! warning "Common errors"
    - **Only writing one case.** A student solves $|x - 4| = 9$ as $x - 4 = 9$ and stops at $x = 13$, missing $x = -5$ entirely. Absolute-value equations almost always have two solutions; treat a single answer as a signal to check for the second case.
    - **Flipping the wrong inequality, or forgetting to flip one.** In $|x - 4| \le 9$, the case $x - 4 \ge -9$ needs the sign to stay as written once you isolate $x$, but a student who is used to always flipping when a negative is involved flips it out of habit and writes $x \le -9$. Flip the inequality only when you multiply or divide by a negative number, never because a negative number happens to appear somewhere in the line.
    - **Missing a negative distance.** A student spends a full minute solving $|2x + 1| = -6$ before noticing that a distance can never equal $-6$, so there is no solution. Check the sign of the right-hand side before splitting into cases.
    - **Translating "within" backward.** "Within 15 mL of 500" sometimes gets written as $500 - v \le 15$ alone, which only captures one side and allows volumes far below 500. Read "within" as a two-sided distance from the start: $|v - 500| \le 15$.
    - **Reaching for a graph transformation that was never needed.** Faced with $|x - 4| = 9$, a student who has studied absolute-value graphs from a general textbook starts sketching $y = |x - 4|$ shifted and reflected. The SAT version of this question is answered faster by splitting into two linear cases; save the graphing instinct for when a problem actually asks about a graph.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** Solve for $x$: $|x + 5| = 12$. What is the greater value of $x$ that
satisfies the equation?

- A) $7$
- B) $-7$
- C) $17$
- D) $-17$

**2.** On the number line, which equation states that $x$ is 6 units from
$-2$?

- A) $|x + 2| = 6$
- B) $|x - 2| = 6$
- C) $|x + 6| = 2$
- D) $|x - 6| = -2$

**3.** Solve for $x$: $|3x - 6| = 21$. What is the greater solution?
*(student-produced response)*

**4.** Which of the following gives the complete solution set of
$|x - 4| \le 5$?

- A) $-1 \le x \le 9$
- B) $-9 \le x \le -1$
- C) $-1 \le x \le 5$
- D) $x \le -1$ or $x \ge 9$

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** A recipe calls for an oven to be preheated to within 10°F of 350°F.
Which inequality describes the acceptable temperatures $T$, in degrees
Fahrenheit?

- A) $|T - 350| \le 10$
- B) $|T - 10| \le 350$
- C) $|T - 350| \ge 10$
- D) $|T + 350| \le 10$

**6.** A shipment of bolts is accepted only if each bolt's length is within
0.4 cm of the target length of 5.0 cm. What is the least length, in
centimeters, that passes inspection? *(student-produced response)*

**7.** For which equation is there no real value of $x$ that satisfies it?

- A) $|x - 3| = -4$
- B) $|x - 3| = 0$
- C) $|x + 3| = 4$
- D) $|x| = 3$

**8.** The inequality $|p - 48| \le 3$ describes the acceptable price $p$,
in dollars, of an item. Which statement is equivalent to this inequality?

- A) The price is within \$3 of \$48.
- B) The price is at least \$3 more than \$48.
- C) The price is within \$48 of \$3.
- D) The price differs from \$48 by more than \$3.

**9.** A parking garage's ticket is valid for a parked time $t$, in hours,
satisfying $|t - 2.5| \le 1.5$. What is the greatest number of hours a
ticket is valid for? *(student-produced response)*

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** A tolerance rule requires a value $v$ to satisfy $|v - k| \le d$,
where $k$ is the target value and $d$ is the tolerance. Values are accepted
only when $v$ is between 12 and 30, inclusive. What is the value of $kd$?
*(student-produced response)*

**11.** For what value of $c$ does the equation $|x - 3| = c$ have exactly
one solution?

- A) $c = 0$
- B) $c = 3$
- C) $c = -3$
- D) There is no such value of $c$.

**12.** Sensor A measures a quantity $x$ and requires $|x - 15.0| \le 0.6$.
Sensor B independently measures the same quantity and requires
$|x - 14.8| \le 0.5$. What is the least value of $x$ that satisfies both
sensors' requirements? *(student-produced response)*

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | A |
    | 2 | A |
    | 3 | 9 |
    | 4 | A |
    | 5 | A |
    | 6 | 4.6 |
    | 7 | A |
    | 8 | A |
    | 9 | 4 |
    | 10 | 189 |
    | 11 | A |
    | 12 | 14.4 |

??? success "Show full solutions"
    **1.** Split into two cases: $x + 5 = 12$ gives $x = 7$, and
    $x + 5 = -12$ gives $x = -17$. The greater solution is $x = 7$, choice
    **A**. Choice B, $-7$, comes from solving the second case with a sign
    error, adding 5 to $-12$ instead of subtracting: $-12 + 5 = -7$. Choice
    C, $17$, comes from adding 5 to 12 instead of subtracting it in the
    first case. Choice D, $-17$, is the correct *lesser* solution, chosen
    by a student who forgets the question asks for the greater one. Check:
    $|7 + 5| = |12| = 12$. **Answer: A.**

    **2.** "$x$ is 6 units from $-2$" is a distance statement: the distance
    from $x$ to $-2$ is 6, written $|x - (-2)| = 6$, which simplifies to
    $|x + 2| = 6$, choice **A**. Choice B, $|x - 2| = 6$, comes from a sign
    error, treating the reference point as $2$ instead of $-2$. Choice C,
    $|x + 6| = 2$, swaps the reference point and the distance. Choice D,
    $|x - 6| = -2$, both swaps the values and sets the distance equal to a
    negative number, which is impossible. **Answer: A.**

    **3.** Split into two cases, since $|3x - 6| = 21$ means $3x - 6$ is 21
    units from 0 in either direction: $3x - 6 = 21$ gives $3x = 27$, so
    $x = 9$; and $3x - 6 = -21$ gives $3x = -15$, so $x = -5$. The greater
    solution is $x = 9$. Check: $|3(9) - 6| = |27 - 6| = |21| = 21$.
    **Answer: 9.**

    **4.** Read $|x - 4| \le 5$ as "$x$ is within 5 units of 4," which
    solves to $4 - 5 \le x \le 4 + 5$, or $-1 \le x \le 9$, choice **A**.
    Choice B, $-9 \le x \le -1$, comes from subtracting 4 from both ends
    instead of adding and subtracting 5 from 4. Choice C, $-1 \le x \le 5$,
    correctly finds the lower bound but replaces the upper bound $4 + 5$
    with $5$ alone. Choice D writes the solution as an "or" statement
    instead of an "and" statement, the error a student makes when they
    apply the flip-the-inequality habit from a $\ge$ problem to a $\le$
    problem, which should stay a connected range. Check with $x = 9$:
    $|9 - 4| = 5 \le 5$, true; with $x = 10$: $|10 - 4| = 6 \le 5$, false,
    confirming the range stops at 9. **Answer: A.**

    **5.** "Within 10°F of 350°F" is a distance statement: the distance
    from $T$ to 350 is at most 10, which translates directly to
    $|T - 350| \le 10$, choice **A**. Choice B swaps the target and the
    tolerance. Choice C uses $\ge$ instead of $\le$, describing
    temperatures that are *not* close to 350 instead of temperatures that
    are. Choice D uses a sign error, $T + 350$ instead of $T - 350$.
    **Answer: A.**

    **6.** Translate "within 0.4 cm of 5.0 cm" as $|L - 5.0| \le 0.4$.
    Split into two cases: $L - 5.0 \le 0.4$ gives $L \le 5.4$, and
    $L - 5.0 \ge -0.4$ gives $L \ge 4.6$. Combined, the acceptable range is
    $4.6 \le L \le 5.4$, so the least length that passes is $4.6$. Check:
    $|4.6 - 5.0| = |-0.4| = 0.4 \le 0.4$. **Answer: 4.6.**

    **7.** An absolute value can never equal a negative number, so
    $|x - 3| = -4$ has no real solution, choice **A**. Choice B,
    $|x - 3| = 0$, has exactly one solution, $x = 3$, since the distance
    from $x$ to 3 can be exactly 0. Choice C, $|x + 3| = 4$, has two
    solutions, $x = 1$ and $x = -7$. Choice D, $|x| = 3$, has two
    solutions, $x = 3$ and $x = -3$. Only choice A sets a distance equal to
    a negative number. **Answer: A.**

    **8.** $|p - 48| \le 3$ reads as "the distance from $p$ to 48 is at
    most 3," which in words is "the price is within \$3 of \$48," choice
    **A**. Choice B turns the two-sided range into a one-directional
    minimum, which is what $p - 48 \ge 3$ alone would say. Choice C swaps
    the target price and the tolerance. Choice D describes the opposite
    condition, $|p - 48| > 3$, the prices that fail rather than pass.
    **Answer: A.**

    **9.** Translate $|t - 2.5| \le 1.5$ by splitting into two cases:
    $t - 2.5 \le 1.5$ gives $t \le 4$, and $t - 2.5 \ge -1.5$ gives
    $t \ge 1$. The valid range is $1 \le t \le 4$, so the greatest valid
    time is $t = 4$. Check: $|4 - 2.5| = |1.5| = 1.5 \le 1.5$.
    **Answer: 4.**

    **10.** $|v - k| \le d$ solves to $k - d \le v \le k + d$, so the given
    range's endpoints match $k - d = 12$ and $k + d = 30$. The target $k$
    is the midpoint of the range: $k = \dfrac{12 + 30}{2} = 21$. The
    tolerance $d$ is the distance from the midpoint to either end:
    $d = 30 - 21 = 9$. So $kd = 21 \times 9 = 189$. Check: $k - d = 12$ and
    $k + d = 30$, matching the given range exactly. **Answer: 189.**

    **11.** $|x - 3| = c$ splits into $x - 3 = c$ and $x - 3 = -c$. These
    two cases give the same value of $x$ only when $c = -c$, which happens
    only at $c = 0$; then both cases give $x = 3$, a single solution,
    choice **A**. Choice B, $c = 3$, confuses the tolerance $c$ with the
    reference point 3 already in the equation — setting them equal has no
    effect on how many solutions the equation has. Choice C, $c = -3$,
    makes the equation $|x - 3| = -3$, which has *no* solution at all, not
    exactly one, since a distance cannot be negative. Choice D assumes an
    absolute-value equation always has two solutions and never considers
    the boundary case where the two cases collapse into one. Check: at
    $c = 0$, $|x - 3| = 0$ gives only $x = 3$; at any $c > 0$, the equation
    gives two distinct solutions. **Answer: A.**

    **12.** Solve each sensor's inequality separately. Sensor A:
    $|x - 15.0| \le 0.6$ splits into $x \le 15.6$ and $x \ge 14.4$, so
    $14.4 \le x \le 15.6$. Sensor B: $|x - 14.8| \le 0.5$ splits into
    $x \le 15.3$ and $x \ge 14.3$, so $14.3 \le x \le 15.3$. A value of $x$
    must satisfy both ranges at once, so take the higher of the two lower
    bounds: $\max(14.4, 14.3) = 14.4$. Check that 14.4 also satisfies
    Sensor B's range: $14.3 \le 14.4 \le 15.3$, true. **Answer: 14.4.**

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** a student who writes only one solution to an absolute-value equation, or who flips an inequality sign out of habit rather than because they divided by a negative. Both errors come from executing a memorized rule instead of tracking what "distance" actually means in the problem.
    - **Diagnostic question:** "A part is accepted if its length is within 0.3 cm of 12 cm. Write this as an inequality, then solve it for the range of acceptable lengths." A student who writes $|L - 12| \le 0.3$ and correctly solves to $11.7 \le L \le 12.3$ has the whole lesson. A student who writes only $L - 12 \le 0.3$ has the one-sided error and should redo the "within" examples from this lesson.
    - **If they are struggling:** return to Lesson 1.6 if the trouble is in solving the split inequalities themselves rather than in setting them up — the sign-flipping rule from that lesson is exactly what Example 2 and 3 depend on.
    - **If they are flying:** move on; this topic is worth very little extra drilling. Spend the saved time on a higher-value Level 1 or Level 3 lesson instead.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`

---

*Previous: [1.6 Linear Inequalities and Systems of Inequalities](1-6-linear-inequalities-and-systems-of-inequalities.md) · Next: [Level 2 - Problem Solving and Data Analysis](../level-2-data/index.md)*
