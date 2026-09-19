---
lesson_id: "1.4"
title: "Linear Equations in Two Variables"
level: 1
domain: algebra
prereqs: ["1.2"]
est_minutes: 50
status: drafted
verified_by: ""
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

**1.** Question stem.

- A) option
- B) option
- C) option
- D) option

**2.** Question stem. *(student-produced response)*

**3.** ...

**4.** ...

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** ... through **9.**

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** ... through **12.**

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | |
    | 2 | |

??? success "Show full solutions"
    **1.** Worked solution, every step shown.

    **2.** ...

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
