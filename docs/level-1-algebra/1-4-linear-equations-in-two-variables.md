---
lesson_id: "1.4"
title: "Linear Equations in Two Variables"
level: 1
domain: algebra
prereqs: ["1.2"]
est_minutes: 50
status: verified
verified_by: "math-verifier 2026-09-19"
---

# 1.4 Linear Equations in Two Variables

!!! abstract "Why this is on the test"
    Roughly two to three questions on every digital SAT ask you to build,
    identify, or test a linear equation directly, without graphing or
    solving a system around it. These are fast points once the forms are
    automatic.

**Before you start, you should be able to:** find the slope of a line and
read a linear function in slope-intercept form.

**By the end of this lesson you will be able to:**

- Write the equation of a line from varied given information
- Determine whether a point lies on a line
- Handle parallel and perpendicular slope conditions

---

## The idea

A line in the $xy$-plane is completely determined by two pieces of
information: how steep it is, and where it sits. Slope gives you the first.
A single point gives you the second. The SAT tests this in three
directions, and you need to move between them without hesitation.

**Writing the equation.** If you know the slope $m$ and one point
$(x_1, y_1)$, use point-slope form:

$$
y - y_1 = m(x - x_1)
$$

Distribute and isolate $y$ to land in the more familiar slope-intercept
form, $y = mx + b$. If you're given two points instead of a slope, find the
slope first — $m = \dfrac{y_2 - y_1}{x_2 - x_1}$ — then proceed exactly the
same way. Every "write the equation" question is really this same move,
dressed up with different starting information.

**Testing a point.** A point lies on a line exactly when its coordinates
make the equation true. You rarely need the full equation to check this.
Often the faster move is to compare slopes: if the slope from the candidate
point to a known point on the line matches the line's slope, the point is
on the line. No equation-building required.

**Parallel and perpendicular lines.** Parallel lines share the same slope.
Perpendicular lines have slopes that are negative reciprocals of each
other — multiply them together and you get $-1$. If one line has slope
$m$, a line perpendicular to it has slope $-\dfrac{1}{m}$. These conditions
show up constantly wrapped around the skills above: find a slope, flip and
negate it, then write an equation from a point.

Watch the form a question gives you. An equation like $Ax + By = C$ is
standard form, not slope-intercept form — its slope is $-\dfrac{A}{B}$, not
$A$. Rearrange before you read off a slope from it.

!!! tip "Desmos shortcut"
    To check whether a point lies on a line without redoing your algebra,
    graph the equation and add the point as a second entry, e.g.
    `(10, -17)`. If the dot lands exactly on the line, you're confirmed.
    This is a verification tool, not a solving shortcut — build the
    equation by hand first.

---

## Worked examples

### Example 1 — routine
> A line in the $xy$-plane has a slope of $\dfrac{3}{4}$ and passes through
> the point $(8, 2)$. What is the equation of this line, in
> slope-intercept form?

**Thinking:** You have a slope and a point — that's point-slope form,
then simplify.

**Solution:**

1. Substitute $m = \dfrac{3}{4}$ and $(x_1, y_1) = (8, 2)$ into point-slope
   form: $y - 2 = \dfrac{3}{4}(x - 8)$.
2. Distribute the $\dfrac{3}{4}$ across $(x - 8)$: $y - 2 = \dfrac{3}{4}x - 6$.
3. Add $2$ to both sides to isolate $y$: $y = \dfrac{3}{4}x - 4$.

**Answer:** $y = \dfrac{3}{4}x - 4$

### Example 2 — typical test difficulty
> A line in the $xy$-plane passes through the points $(-2, 7)$ and
> $(4, -5)$. Does the point $(10, -17)$ lie on this line?

**Thinking:** You don't need the full equation here — a point lies on a
line exactly when it keeps the slope consistent. Compare the slope from
$(4, -5)$ to $(10, -17)$ against the line's known slope.

**Solution:**

1. Find the line's slope from the two given points: $m = \dfrac{-5 - 7}{4 - (-2)} = \dfrac{-12}{6} = -2$.
2. Find the slope from $(4, -5)$ to the candidate point $(10, -17)$:
   $m = \dfrac{-17 - (-5)}{10 - 4} = \dfrac{-12}{6} = -2$.
3. The slopes match, so $(10, -17)$ keeps the same steepness as the rest of
   the line — it lies on the line.

**Answer:** Yes, $(10, -17)$ lies on the line.

### Example 3 — the hard version
> In the $xy$-plane, line $p$ is defined by $3x + 2y = 18$. Line $q$ is
> perpendicular to line $p$ and passes through the origin and the point
> $(a, a+1)$, where $a$ is a constant. What is the value of $a$?

**Thinking:** Nothing here is solvable until you build it. You need line
$p$'s slope, flip and negate it for line $q$, then set that equal to the
slope between $q$'s two given points and solve.

**Solution:**

1. Rearrange line $p$ into slope-intercept form to read its slope:
   $3x + 2y = 18 \Rightarrow y = -\dfrac{3}{2}x + 9$, so $m_p = -\dfrac{3}{2}$.
2. Line $q$ is perpendicular to line $p$, so its slope is the negative
   reciprocal: $m_q = \dfrac{2}{3}$.
3. Write the slope of line $q$ using its two points, the origin $(0, 0)$
   and $(a, a+1)$: $\dfrac{a + 1 - 0}{a - 0} = \dfrac{2}{3}$.
4. Cross-multiply and solve: $3(a + 1) = 2a \Rightarrow 3a + 3 = 2a \Rightarrow a = -3$.

**Answer:** $a = -3$

---

## Where students go wrong

!!! warning "Common errors"
    - **Reading the slope straight off standard form.** In $Ax + By = C$,
      the slope is $-\dfrac{A}{B}$, not $A$ or $\dfrac{A}{B}$. Rearrange to
      $y = mx + b$ before trusting any coefficient as a slope.
    - **Flipping the slope but forgetting to negate it (or the reverse).**
      Perpendicular means both: reciprocal *and* opposite sign. A slope of
      $\dfrac{2}{5}$ gives a perpendicular slope of $-\dfrac{5}{2}$, not
      $\dfrac{5}{2}$ and not $-\dfrac{2}{5}$.
    - **Mixing up which point goes where in point-slope form.** $y - y_1 = m(x - x_1)$
      uses subtraction in a fixed order. Swapping the point's coordinates,
      or subtracting in the wrong direction, shifts the whole line. The SAT
      builds distractors from exactly this slip.
    - **Assuming parallel means "looks similar" instead of checking the
      slope precisely.** Two lines with slopes $\dfrac{1}{2}$ and
      $0.5$ are the same line's slope written two ways and are genuinely
      parallel; a slope of $2$ is not close enough.
    - **Building an entire new equation to test a point, when comparing
      slopes is faster and less error-prone.** The full-equation method
      still works, but it costs an extra step and an extra chance to slip
      on arithmetic.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** A line in the $xy$-plane has a slope of $5$ and passes through the
point $(2, 3)$. What is the equation of this line in slope-intercept form?

- A) $y = 5x - 13$
- B) $y = 5x + 1$
- C) $y = 5x - 7$
- D) $y = 5x + 7$

**2.** A line has a slope of $-3$ and passes through the point $(4, -1)$.
If the equation of the line is written as $y = mx + b$, what is the value
of $b$? *(student-produced response)*

**3.** Line $\ell$ is defined by $5x + 2y = 20$. What is the slope of
line $\ell$?

- A) $-\dfrac{5}{2}$
- B) $5$
- C) $\dfrac{5}{2}$
- D) $-\dfrac{2}{5}$

**4.** The line $y = 2x - 3$ passes through the point $(a, 7)$. What is
the value of $a$? *(student-produced response)*

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** A line in the $xy$-plane passes through the points $(1, -2)$ and
$(4, 7)$. What is the equation of this line in slope-intercept form?

- A) $y = 3x - 1$
- B) $y = -3x + 1$
- C) $y = \dfrac{1}{3}x - \dfrac{7}{3}$
- D) $y = 3x - 5$

**6.** Line $p$ is defined by $4x + 3y = 12$. Line $q$ is perpendicular
to line $p$ and passes through the point $(0, 5)$. What is the slope of
line $q$? *(student-produced response)*

**7.** Line $\ell$ is defined by the equation $3x - 2y = 12$. Which of the
following points lies on line $\ell$?

- A) $(2, 3)$
- B) $(-3, 2)$
- C) $(2, -3)$
- D) $(2, 9)$

**8.** A line in the $xy$-plane passes through the points $(0, -2)$ and
$(3, 7)$. If the point $(6, k)$ lies on this line, what is the value of
$k$? *(student-produced response)*

**9.** A moving company charges a flat booking fee plus a fee per mile
driven. A 20-mile job costs \$130 total, and a 50-mile job costs \$220
total. If $C$ is the total charge in dollars for a job of $m$ miles,
which equation represents this relationship?

- A) $C = 3m + 70$
- B) $C = 3m + 130$
- C) $C = 3m$
- D) $C = 3m - 70$

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** In the $xy$-plane, line $p$ is defined by $2x - 3y = 6$. Line $q$
is perpendicular to line $p$ and passes through the origin and the point
$(a, a - 10)$, where $a$ is a constant. What is the value of $a$?

- A) $a = -20$
- B) $a = 6$
- C) $a = 30$
- D) $a = 4$

**11.** Line $p$ is defined by $kx + 4y = 8$, where $k$ is a constant.
Line $q$ is defined by $6x + 8y = 16$. Lines $p$ and $q$ are parallel.
What is the value of $k$? *(student-produced response)*

**12.** In the $xy$-plane, line $p$ passes through the points $(3, 1)$
and $(7, k)$, where $k$ is a constant. Line $p$ is perpendicular to line
$q$, defined by $x + 2y = 10$. What is the value of $k$?

- A) $k = -1$
- B) $k = -7$
- C) $k = 9$
- D) $k = 3$

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | C |
    | 2 | $b = 11$ |
    | 3 | A |
    | 4 | $a = 5$ |
    | 5 | D |
    | 6 | $\dfrac{3}{4}$ |
    | 7 | C |
    | 8 | $k = 16$ |
    | 9 | A |
    | 10 | D |
    | 11 | $k = 3$ |
    | 12 | C |

??? success "Show full solutions"
    **1.** Substitute $m = 5$ and $(x_1, y_1) = (2, 3)$ into point-slope
    form: $y - 3 = 5(x - 2)$. Distribute: $y - 3 = 5x - 10$. Add $3$ to
    both sides: $y = 5x - 7$. **Answer: C.**

    **2.** Substitute the point and slope into $y = mx + b$:
    $-1 = -3(4) + b$, so $-1 = -12 + b$. Add $12$ to both sides:
    $b = 11$.

    **3.** Rearrange $5x + 2y = 20$ into slope-intercept form: subtract
    $5x$ from both sides to get $2y = -5x + 20$, then divide by $2$:
    $y = -\dfrac{5}{2}x + 10$. The slope is $-\dfrac{5}{2}$. **Answer: A.**

    **4.** Substitute the point into the line's equation: $7 = 2a - 3$.
    Add $3$ to both sides: $2a = 10$. Divide by $2$: $a = 5$.

    **5.** Find the slope from the two points:
    $m = \dfrac{7 - (-2)}{4 - 1} = \dfrac{9}{3} = 3$. Substitute
    $m = 3$ and $(x_1, y_1) = (1, -2)$ into point-slope form:
    $y - (-2) = 3(x - 1)$, so $y + 2 = 3x - 3$. Subtract $2$ from both
    sides: $y = 3x - 5$. **Answer: D.**

    **6.** Rearrange line $p$ into slope-intercept form to read its slope:
    $4x + 3y = 12 \Rightarrow y = -\dfrac{4}{3}x + 4$, so
    $m_p = -\dfrac{4}{3}$. A line perpendicular to $p$ has slope equal to
    the negative reciprocal: $m_q = \dfrac{3}{4}$. The point $(0, 5)$ is
    extra information here — it fixes line $q$'s position, but the slope
    of a perpendicular line depends only on line $p$'s slope.

    **7.** A point lies on line $\ell$ exactly when its coordinates make
    $3x - 2y = 12$ true, so substitute each option directly. For
    $(2, 3)$: $3(2) - 2(3) = 6 - 6 = 0 \neq 12$. For $(-3, 2)$:
    $3(-3) - 2(2) = -9 - 4 = -13 \neq 12$. For $(2, -3)$:
    $3(2) - 2(-3) = 6 + 6 = 12$ — this checks out. For $(2, 9)$:
    $3(2) - 2(9) = 6 - 18 = -12 \neq 12$. **Answer: C.**

    **8.** Find the slope from the two given points:
    $m = \dfrac{7 - (-2)}{3 - 0} = \dfrac{9}{3} = 3$. Write the line's
    equation using $(0, -2)$ as the $y$-intercept: $y = 3x - 2$.
    Substitute $x = 6$: $k = 3(6) - 2 = 18 - 2 = 16$.

    **9.** Find the rate per mile from the two data points:
    $m = \dfrac{220 - 130}{50 - 20} = \dfrac{90}{30} = 3$ dollars per
    mile. Substitute $m = 3$ and the point $(20, 130)$ into point-slope
    form: $C - 130 = 3(m - 20)$. Distribute: $C - 130 = 3m - 60$. Add
    $130$ to both sides: $C = 3m + 70$. **Answer: A.**

    **10.** Rearrange line $p$ into slope-intercept form:
    $2x - 3y = 6 \Rightarrow y = \dfrac{2}{3}x - 2$, so
    $m_p = \dfrac{2}{3}$. Line $q$ is perpendicular to line $p$, so
    $m_q = -\dfrac{3}{2}$. Write the slope of line $q$ using its two
    points, the origin $(0, 0)$ and $(a, a - 10)$:
    $\dfrac{a - 10 - 0}{a - 0} = -\dfrac{3}{2}$. Cross-multiply:
    $2(a - 10) = -3a$, so $2a - 20 = -3a$. Add $3a$ to both sides:
    $5a = 20$, so $a = 4$. **Answer: D.**

    **11.** Rearrange line $q$ into slope-intercept form to read its
    slope: $6x + 8y = 16 \Rightarrow y = -\dfrac{3}{4}x + 2$, so
    $m_q = -\dfrac{3}{4}$. Rearrange line $p$:
    $kx + 4y = 8 \Rightarrow y = -\dfrac{k}{4}x + 2$, so
    $m_p = -\dfrac{k}{4}$. Parallel lines share a slope, so
    $-\dfrac{k}{4} = -\dfrac{3}{4}$, which gives $k = 3$.

    **12.** Rearrange line $q$ into slope-intercept form:
    $x + 2y = 10 \Rightarrow y = -\dfrac{1}{2}x + 5$, so
    $m_q = -\dfrac{1}{2}$. Line $p$ is perpendicular to line $q$, so
    $m_p = 2$. Write the slope of line $p$ using its two points,
    $(3, 1)$ and $(7, k)$: $\dfrac{k - 1}{7 - 3} = 2$, so
    $\dfrac{k - 1}{4} = 2$. Multiply both sides by $4$: $k - 1 = 8$, so
    $k = 9$. **Answer: C.**

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** students who read the coefficient of $x$ in standard
      form ($Ax + By = C$) as the slope without rearranging first. This is
      the single most common error in this lesson.
    - **Diagnostic question:** ask for the slope of $4x + 6y = 12$ off the
      top of their head. If they say $4$ or $\dfrac{4}{6}$ instead of
      $-\dfrac{2}{3}$, go back to rearranging practice before anything else.
    - **If they are struggling:** return to 1.2 (Slope and Linear
      Functions) and drill computing slope from two points until it's
      automatic — everything here builds on that being fast.
    - **If they are flying:** escalate to problems where the line is given
      in standard form on both sides of a parallel or perpendicular
      condition, forcing two rearrangements before any solving starts.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`.

---

*Previous: [1.3 Interpreting Linear Models in Context](1-3-interpreting-linear-models-in-context.md) · Next: [1.5 Systems of Two Linear Equations](1-5-systems-of-two-linear-equations.md)*
