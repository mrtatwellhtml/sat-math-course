---
lesson_id: "1.2"
title: "Slope and Linear Functions"
level: 1
domain: algebra
prereqs: ["0.6", "1.1"]
est_minutes: 55
status: drafted
verified_by: ""
---

# 1.2 Slope and Linear Functions

!!! abstract "Why this is on the test"
    Slope is the single most tested idea in SAT Algebra. Expect three to
    four questions that ask you to find it, use it, or move between its
    three algebraic forms — often disguised as a graph, a table, or a
    word problem about a rate.

**Before you start, you should be able to:** plot and read points on the
coordinate plane, and solve a multi-step one-variable linear equation.

**By the end of this lesson you will be able to:**

- Compute slope from two points, a table, a graph or an equation
- Convert between slope-intercept, point-slope and standard form
- Interpret slope and intercept as rate and starting value in context

---

## The idea

A line has exactly one steepness, and slope is the number that measures it.
Slope is how much $y$ changes for every one unit that $x$ changes — rise
over run.

$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

You can pull slope from four places. From two points, subtract carefully
with the formula above. From a table, take any two rows and divide the
change in the output by the change in the input — the ratio stays constant
only when the relationship really is linear. From a graph, count grid
squares up (or down) and across between two points the line actually
passes through. From an equation, the form it is written in tells you
where to look.

A line has three equivalent forms, and you should recognise all three on
sight.

- **Slope-intercept form**, $y = mx + b$, shows the slope $m$ and the
  $y$-intercept $b$ directly. Use it when you need either value fast.
- **Point-slope form**, $y - y_1 = m(x - x_1)$, is what you get the moment
  you know one point and the slope, before any simplifying. It is the
  fastest way to *build* an equation, not to read one.
- **Standard form**, $Ax + By = C$, hides both the slope and the intercept
  behind the coefficients. To reveal them, solve the equation for $y$ and
  it collapses into slope-intercept form.

Moving between forms is ordinary algebra: isolate $y$, or distribute and
collect terms. No form is more "correct" than another — a question tells
you which one it wants.

In context, the two numbers in slope-intercept form carry meaning. The
slope $m$ is a rate — dollars per hour, gallons per minute, whatever
changes steadily. The intercept $b$ is the starting value, whatever the
quantity was when $x$ was zero.

!!! tip "Desmos shortcut"
    Type an equation into Desmos exactly as it is given — slope-intercept,
    point-slope or standard, it graphs all three without conversion. Click
    a point on the line to read its coordinates, which is the fastest way
    to check an equation you derived by hand.

---

## Worked examples

### Example 1 — routine
> A line in the $xy$-plane passes through the points $(-3, 4)$ and
> $(5, -2)$. What is the slope of the line?

**Thinking:** Two points and a slope question is the formula, nothing
more — the only risk is a sign slip when one coordinate is negative.

**Solution:**

1. Write the slope formula: $m = \dfrac{y_2 - y_1}{x_2 - x_1}$.
2. Substitute the points, keeping each subtraction in its own parentheses:
   $m = \dfrac{-2 - 4}{5 - (-3)} = \dfrac{-6}{8}$.
3. Simplify the fraction: $\dfrac{-6}{8} = -\dfrac{3}{4}$.

**Answer:** $-\dfrac{3}{4}$

### Example 2 — typical test difficulty
> The table shows the amount of water, in gallons, remaining in a tank at
> several times after a valve was opened to drain it.
>
> | Time (minutes) | 0 | 5 | 10 |
> |---|---|---|---|
> | Water (gallons) | 240 | 190 | 140 |
>
> The relationship between time and water remaining is linear. How many
> gallons remain in the tank 18 minutes after the valve was opened?

**Thinking:** A linear table means a constant rate of change — find that
rate and the starting amount before touching the question that was
actually asked.

**Solution:**

1. Find the rate from any two rows: $m = \dfrac{190 - 240}{5 - 0} = \dfrac{-50}{5} = -10$ gallons per minute. The negative sign matches a tank that is draining.
2. Read the starting amount from the $t = 0$ row: $b = 240$ gallons. This
   is the $y$-intercept.
3. Build the equation in slope-intercept form: $g = -10t + 240$, where
   $g$ is gallons remaining and $t$ is minutes elapsed.
4. Substitute $t = 18$: $g = -10(18) + 240 = -180 + 240 = 60$.

**Answer:** 60 gallons

### Example 3 — the hard version
> In the $xy$-plane, the line given by $6x - 3y = k$, where $k$ is a
> constant, passes through the point $(4, 7)$. What is the $y$-intercept
> of the line?

**Thinking:** The constant $k$ is unknown, so nothing can be read off
directly — the point has to be used first to pin down $k$, and only then
does converting to slope-intercept form make sense.

**Solution:**

1. Substitute the point $(4, 7)$ into the equation to solve for $k$:
   $6(4) - 3(7) = k$, so $k = 24 - 21 = 3$.
2. The full equation is $6x - 3y = 3$. Solve it for $y$ to reach
   slope-intercept form: $-3y = 3 - 6x$, so $y = 2x - 1$.
3. Check against the given point: $y = 2(4) - 1 = 7$, which matches — the
   conversion is correct.
4. Read the $y$-intercept directly from $y = 2x - 1$.

**Answer:** $-1$

---

## Where students go wrong

!!! warning "Common errors"
    - **Flipping the slope formula.** Writing $\dfrac{x_2 - x_1}{y_2 - y_1}$ instead of $y$ over $x$ gives the reciprocal of the real slope
      — and that reciprocal is almost always sitting there as a wrong
      answer choice, waiting for exactly this mistake.
    - **Dropping a sign on a negative coordinate.** Subtracting $5 - (-3)$
      as $5 - 3$ instead of $5 + 3$ is the single most common arithmetic
      slip in this lesson. Put every coordinate in its own parentheses
      before subtracting.
    - **Half-dividing when clearing standard form.** Going from
      $-3y = 3 - 6x$ to $y = -1 - 6x$ divides the $x$-term correctly but
      forgets to divide the constant term too. Divide every term on both
      sides, not only the one with the variable you are chasing.
    - **Losing the distribution in point-slope form.** Writing
      $y - y_1 = mx - x_1$ drops the parentheses around $(x - x_1)$, so
      $m$ never gets multiplied by $x_1$. Keep the parentheses until the
      equation is fully expanded.
    - **Reading a table with unequal spacing as if it were one apart.**
      If the $x$-values jump by 5 instead of by 1, dividing only the
      change in $y$ — without also dividing by the change in $x$ — gives
      a slope five times too large.

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

Number questions as **bold** `**1.**`, never as a markdown ordered list — an
ordered list swallows the A-D options into the list item and breaks the
rendering. Mark student-produced responses with a trailing
`*(student-produced response)*`.

At least four of the twelve must be student-produced response format
(no answer choices), matching the roughly one-quarter share on the real test.

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

Every one of the twelve gets a full solution, not just a final value. A
student working alone needs to see where they diverged.

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** a student who can compute slope confidently from two
      points but freezes the moment a question names "point-slope form" —
      they usually already know the move, they do not recognise the label.
    - **Diagnostic question:** "Find the slope of the line through
      $(1, 4)$ and $(3, -2)$, then write its equation in slope-intercept
      form." One question, and it reveals both the arithmetic and the
      form fluency at once.
    - **If they are struggling:** go back to 0.6 for point-reading
      fluency, or to 1.1 if isolating $y$ inside an equation is the actual
      bottleneck — slope is rarely the real problem, solving for a
      variable usually is.
    - **If they are flying:** escalate to a version of Example 3 with two
      unknown constants instead of one, or move ahead to 1.3, where these
      same numbers get asked about in words rather than symbols.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`

---

*Previous: [1.1 Linear Equations in One Variable](1-1-linear-equations-in-one-variable.md) · Next: [1.3 Interpreting Linear Models in Context](1-3-interpreting-linear-models-in-context.md)*
