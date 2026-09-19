---
lesson_id: "1.6"
title: "Linear Inequalities and Systems of Inequalities"
level: 1
domain: algebra
prereqs: ["1.5"]
est_minutes: 50
status: verified
verified_by: "math-verifier 2026-09-19"
---

# 1.6 Linear Inequalities and Systems of Inequalities

!!! abstract "Why this is on the test"
    Worth roughly 1-2 questions on a typical digital SAT. They show up as a
    compound inequality to solve, a word problem with "at least" or "no more
    than" to translate, or a graph with two shaded regions where you have to
    read off the overlap.

**Before you start, you should be able to:** solve a system of two linear
equations by substitution or elimination and describe its solution as an
intersection point.

**By the end of this lesson you will be able to:**

- Solve and graph one-variable inequalities, flipping correctly
- Interpret a shaded region as a system of constraints
- Translate "at least", "no more than" and "between" precisely

---

## The idea

An inequality compares two quantities instead of setting them equal. You
solve it almost exactly like an equation: combine like terms, isolate the
variable, do the same operation to both sides. The one place it diverges
matters a great deal. When you multiply or divide both sides by a negative
number, the inequality sign reverses. $3 < 5$ is true, but multiply both
sides by $-1$ and $-3 > -5$, not $-3 < -5$. The relationship between the two
sides flips because negation flips order.

The four symbols carry exact meanings you translate word for word:

- "at least" means $\geq$ — the boundary value counts
- "no more than" or "at most" means $\leq$ — the boundary value counts
- "more than" or "greater than" means $>$ — the boundary value does not count
- "between $a$ and $b$, inclusive" gives a compound inequality $a \leq x \leq b$

A one-variable solution graphs on a number line: an open circle for a strict
inequality ($<$, $>$), a closed circle for $\leq$ or $\geq$, and an arrow
showing the direction that satisfies it.

A linear inequality in **two** variables, like $y \leq 2x + 3$, does not
have a line for a solution set — it has a half-plane. The boundary line
itself is solid if the inequality is $\leq$ or $\geq$ (the line is included)
and dashed if it is $<$ or $>$ (the line is excluded). A **system** of two
such inequalities has a solution set that is whatever region both shaded
half-planes have in common — the feasible region. Any point inside it makes
both inequalities true at once.

$$
\begin{cases} y \leq -2x + 10 \\ y \geq x - 2 \end{cases}
$$

!!! tip "Desmos shortcut"
    Type each inequality into Desmos exactly as written — `y <= -2x + 10`
    then, on the next line, `y >= x - 2`. Desmos shades each half-plane on
    its own, and the region where the two shadings overlap is your solution
    set. For a system question, this is faster and safer than solving by
    hand: you can read off boundary points, test whether a given ordered
    pair falls in the darker overlapping region, or trace the edge of the
    feasible region with your eye instead of computing intersections.

---

## Worked examples

### Example 1 — routine
> Solve the inequality $-5x + 8 \geq -12$ for $x$, and describe the solution
> on a number line.

**Thinking:** The coefficient on $x$ is negative, so isolating $x$ means
dividing by a negative number — the inequality sign has to flip when that
happens.

**Solution:**

1. Subtract 8 from both sides to isolate the $x$-term: $-5x \geq -20$.
2. Divide both sides by $-5$, and reverse the inequality sign because you
   divided by a negative number: $x \leq 4$.
3. Graph this on a number line with a closed circle at 4 (the inequality is
   $\leq$, so 4 itself is a solution) and shading extending to the left,
   toward negative infinity.

**Answer:** $x \leq 4$

### Example 2 — typical test difficulty
> A food truck spends \$150 on ingredients each day, plus \$4.50 for every
> meal it prepares. The owner wants the day's total cost to be at least
> \$168 but no more than \$375. What is the range of the number of meals,
> $m$, the truck can prepare that day?

**Thinking:** "At least" and "no more than" both include the boundary, and
together they describe a value trapped between two numbers — that is a
single compound inequality, not two separate ones to solve and compare.

**Solution:**

1. Translate each phrase: "at least \$168" means the cost is $\geq 168$;
   "no more than \$375" means the cost is $\leq 375$. The daily cost itself
   is $150 + 4.5m$, so combine both bounds into one compound inequality:
   $168 \leq 150 + 4.5m \leq 375$.
2. Subtract 150 from all three parts to isolate the term with $m$:
   $18 \leq 4.5m \leq 225$.
3. Divide all three parts by 4.5. This is a positive number, so the
   inequality signs do not change direction: $4 \leq m \leq 50$.

**Answer:** The truck can prepare between 4 and 50 meals that day,
inclusive.

### Example 3 — the hard version
> A system of inequalities is graphed on the coordinate plane:
>
> $$y \leq -2x + 10, \qquad y \geq x - 2, \qquad x \geq 1$$
>
> For a point $(x, y)$ in the solution region, where $x$ and $y$ are both
> integers, what is the greatest possible value of $x + y$?

**Thinking:** The three boundary lines box in a triangular feasible region.
For real-valued $x$ and $y$, a linear expression like $x + y$ reaches its
extreme values at the corners of that region, never somewhere in the
middle — so start with the vertices. But $x$ and $y$ are restricted to
integers here, so a vertex only settles the answer if it lands on a lattice
point; otherwise the best integer point sits nearby, inside the region.

**Solution:**

1. Find where each pair of boundary lines crosses. Line $y = -2x + 10$ meets
   line $y = x - 2$: set them equal, $-2x + 10 = x - 2$, so $12 = 3x$ and
   $x = 4$, giving $y = 2$. That vertex is $(4, 2)$.
2. Line $y = x - 2$ meets the vertical line $x = 1$: substitute
   $x = 1$ to get $y = -1$. That vertex is $(1, -1)$.
3. Line $y = -2x + 10$ meets $x = 1$: substitute $x = 1$ to get $y = 8$.
   That vertex is $(1, 8)$.
4. Evaluate $x + y$ at all three vertices: $(4,2)$ gives 6, $(1,-1)$ gives
   0, and $(1, 8)$ gives 9. Check that $(1, 8)$ satisfies all three
   original inequalities: $8 \leq -2(1) + 10 = 8$ holds (with equality,
   which is allowed since the inequality is $\leq$), $8 \geq 1 - 2 = -1$
   holds, and $1 \geq 1$ holds.
5. The largest value, 9, occurs at $(1, 8)$, and that vertex already has
   integer coordinates — it is itself a lattice point in the feasible
   region, so no nearby integer point can beat it.

**Answer:** 9

---

## Where students go wrong

!!! warning "Common errors"
    - **Forgetting to flip the inequality.** Multiplying or dividing both
      sides by a negative number reverses the direction of the inequality,
      and it is the single most common way this topic gets lost. The SAT
      builds its wrong answers directly from this slip: solve the
      inequality correctly and the un-flipped version of your answer is
      almost always sitting right there as one of the four choices, so
      getting a match does not mean you got it right. Make flipping a
      checkpoint you say out loud every time you divide by a negative, not
      something you remember only when it feels necessary.
    - **Reading "at least" and "no more than" backwards.** "At least"
      opens upward ($\geq$); "no more than" closes downward ($\leq$).
      Swap them and every step afterward is solving the mirror-image
      problem, with a clean-looking wrong answer at the end.
    - **Using the wrong boundary line style on a graph.** A strict
      inequality ($<$ or $>$) needs a dashed boundary because points on the
      line are not solutions; $\leq$ or $\geq$ needs a solid boundary
      because they are. Mixing these up makes you accept or reject boundary
      points that the question is not actually asking about.
    - **Shading the wrong half-plane.** Without testing a point (the
      origin, when it is not on the boundary line, is the easiest choice),
      you can end up shading the side that looks right rather than the side
      that is right. Substitute the test point into the original
      inequality — if it makes the inequality true, shade the side that
      contains it.
    - **Treating a system's solution as one point instead of a region.**
      Two linear equations intersect at a single point; two linear
      inequalities overlap in an entire region. A student used to solving
      systems of equations will sometimes stop at the intersection of the
      two boundary lines and report it as "the answer," when the question
      is really asking about every point in the shaded overlap.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** Solve for $x$: $-3x + 5 \geq 20$.

- A) $x \leq -5$
- B) $x \geq -5$
- C) $x \leq 5$
- D) $x \geq 5$

**2.** What is the greatest integer value of $x$ that satisfies
$5x - 3 < 22$? *(student-produced response)*

**3.** A parking garage charges a flat \$5 entry fee plus \$2 for every
hour parked. Which inequality represents the situation where the total
charge, in dollars, after $h$ hours is no more than \$17?

- A) $5 + 2h \leq 17$
- B) $5 + 2h \geq 17$
- C) $5 + 2h < 17$
- D) $2 + 5h \leq 17$

**4.** A point $(x, y)$ satisfies the system $y > x + 1$ and
$y \leq -x + 5$. Which of the following points is a solution to the
system?

- A) $(1, 3)$
- B) $(0, 0)$
- C) $(3, 3)$
- D) $(2, 4)$

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** A caterer charges a \$120 setup fee plus \$8 per guest. For an
event's total cost to be between \$360 and \$600, inclusive, which
inequality gives the possible number of guests, $g$?

- A) $30 \leq g \leq 60$
- B) $30 < g < 60$
- C) $45 \leq g \leq 75$
- D) $60 \leq g \leq 90$

**6.** What is the least integer value of $x$ that satisfies
$-6x + 45 \leq 3$? *(student-produced response)*

**7.** A point $(x, y)$ satisfies the system $y \geq 2x - 3$ and
$y \leq -x + 7$. Which of the following points is a solution to the
system?

- A) $(2, 3)$
- B) $(6, 2)$
- C) $(0, 8)$
- D) $(8, -5)$

**8.** A moving van can carry no more than 3,800 pounds. It already
holds 800 pounds of furniture, and each box that gets added weighs
45 pounds. What is the greatest number of boxes that can still be added
to the van? *(student-produced response)*

**9.** A system of two inequalities is graphed on the coordinate plane.
One boundary line is solid, passes through $(0, 4)$, has slope $-1$, and
the shaded region lies below it. The other boundary line is dashed,
passes through $(0, -2)$, has slope $1$, and the shaded region lies
above it. Which system matches this graph?

- A) $y \leq -x + 4$ and $y > x - 2$
- B) $y \geq -x + 4$ and $y < x - 2$
- C) $y < -x + 4$ and $y \geq x - 2$
- D) $y \leq -x + 4$ and $y \geq x - 2$

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** If $a$ is a negative constant, what is the solution set of
$ax + 12 \geq 4a$ in terms of $a$?

- A) $x \leq 4 - \dfrac{12}{a}$
- B) $x \geq 4 - \dfrac{12}{a}$
- C) $x \leq 4 + \dfrac{12}{a}$
- D) $x \geq 4 + \dfrac{12}{a}$

**11.** A region in the coordinate plane is defined by the system

$$
y \leq -2x + 13, \qquad y \geq x - 1, \qquad x \geq 2
$$

For a point $(x, y)$ in this region, where $x$ and $y$ may be any real
numbers, what is the greatest possible value of $x + y$?
*(student-produced response)*

**12.** What is the solution set of $-4 < 3 - 2x < 10$?

- A) $-\dfrac{7}{2} < x < \dfrac{7}{2}$
- B) $x < -\dfrac{7}{2}$ or $x > \dfrac{7}{2}$
- C) $-\dfrac{7}{2} \leq x \leq \dfrac{7}{2}$
- D) $-\dfrac{13}{2} < x < \dfrac{1}{2}$

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | A |
    | 2 | 4 |
    | 3 | A |
    | 4 | A |
    | 5 | A |
    | 6 | 7 |
    | 7 | A |
    | 8 | 66 |
    | 9 | A |
    | 10 | A |
    | 11 | 11 |
    | 12 | A |

??? success "Show full solutions"
    **1.** Subtract 5 from both sides: $-3x \geq 15$. Divide both sides by
    $-3$, and reverse the inequality because you divided by a negative
    number: $x \leq -5$. Option B comes from forgetting to flip the sign.
    Options C and D come from dropping the negative sign off the
    coefficient entirely (treating $-3x \geq 15$ as $3x \geq 15$), with D
    compounding that with an unneeded flip.

    **Answer:** $x \leq -5$

    **2.** Add 3 to both sides: $5x < 25$. Divide both sides by 5 — a
    positive number, so the inequality does not flip: $x < 5$. Because the
    inequality is strict, $x = 5$ is not itself a solution, so the
    greatest integer that works is one less than 5.

    **Answer:** 4

    **3.** The entry fee of \$5 is a flat amount and the \$2-per-hour
    charge depends on $h$, so the total charge is $5 + 2h$. "No more than
    \$17" means that total is $\leq 17$, giving $5 + 2h \leq 17$. Option B
    reverses the direction, treating "no more than" as "at least." Option
    C drops the boundary value by using a strict inequality. Option D
    swaps which number is the flat fee and which is the per-hour rate.

    **Answer:** $5 + 2h \leq 17$

    **4.** Test each point in both inequalities. For $(1, 3)$: is
    $3 > 1 + 1 = 2$? Yes. Is $3 \leq -1 + 5 = 4$? Yes. Both hold, so
    $(1, 3)$ is a solution. For $(0, 0)$: $0 > 0 + 1 = 1$ is false, so it
    fails the first inequality. For $(3, 3)$: $3 > 3 + 1 = 4$ is false and
    $3 \leq -3 + 5 = 2$ is also false, so it fails both. For $(2, 4)$:
    $4 > 2 + 1 = 3$ is true, but $4 \leq -2 + 5 = 3$ is false, so it fails
    the second inequality.

    **Answer:** $(1, 3)$

    **5.** "Between \$360 and \$600, inclusive" means the total cost $C$
    satisfies $360 \leq C \leq 600$, where $C = 120 + 8g$. Substitute:
    $360 \leq 120 + 8g \leq 600$. Subtract 120 from all three parts:
    $240 \leq 8g \leq 480$. Divide all three parts by 8 — a positive
    number, so the inequality signs stay put: $30 \leq g \leq 60$. Option
    B drops the inclusive boundary. Option C comes from dividing the raw
    total (\$360 and \$600) by 8 without ever subtracting the \$120 setup
    fee. Option D comes from adding the setup fee instead of subtracting
    it.

    **Answer:** $30 \leq g \leq 60$

    **6.** Subtract 45 from both sides: $-6x \leq -42$. Divide both sides
    by $-6$, and reverse the inequality because you divided by a negative
    number: $x \geq 7$. Because the inequality includes equality, $x = 7$
    itself works, so it is the least integer solution.

    **Answer:** 7

    **7.** Test each point in both inequalities. For $(2, 3)$: is
    $3 \geq 2(2) - 3 = 1$? Yes. Is $3 \leq -2 + 7 = 5$? Yes. Both hold. For
    $(6, 2)$: $2 \geq 2(6) - 3 = 9$ is false, and $2 \leq -6 + 7 = 1$ is
    also false — it fails both. For $(0, 8)$: $8 \geq 2(0) - 3 = -3$ is
    true, but $8 \leq -0 + 7 = 7$ is false — it fails the second
    inequality. For $(8, -5)$: $-5 \geq 2(8) - 3 = 13$ is false, but
    $-5 \leq -8 + 7 = -1$ is true — it fails the first inequality.

    **Answer:** $(2, 3)$

    **8.** The van's total weight must satisfy $800 + 45b \leq 3800$,
    where $b$ is the number of boxes. Subtract 800 from both sides:
    $45b \leq 3000$. Divide both sides by 45 — a positive number, so the
    inequality does not flip: $b \leq 66.\overline{6}$. Since $b$ must be
    a whole number of boxes, the greatest value that still satisfies the
    inequality is 66 (67 boxes would push the total weight to 3,815
    pounds, over the limit).

    **Answer:** 66

    **9.** The solid line through $(0, 4)$ with slope $-1$ has equation
    $y = -x + 4$; because it is solid, the boundary is included, and
    because the shading is below it, the inequality is $y \leq -x + 4$.
    The dashed line through $(0, -2)$ with slope $1$ has equation
    $y = x - 2$; because it is dashed, the boundary is excluded, and
    because the shading is above it, the inequality is $y > x - 2$.
    Option B has both shading directions reversed. Option C swaps which
    line is solid and which is dashed. Option D correctly places the
    shading directions but wrongly makes the dashed boundary inclusive.

    **Answer:** $y \leq -x + 4$ and $y > x - 2$

    **10.** Start with $ax + 12 \geq 4a$. Subtract 12 from both sides:
    $ax \geq 4a - 12$. Divide both sides by $a$. Since $a$ is negative,
    the inequality reverses: $x \leq \dfrac{4a - 12}{a} = 4 - \dfrac{12}{a}$.
    A quick check with $a = -2$: the original inequality becomes
    $-2x + 12 \geq -8$, which solves to $x \leq 10$, and the formula gives
    $4 - \dfrac{12}{-2} = 4 + 6 = 10$, confirming the result. Option B
    forgets to flip the inequality when dividing by the negative $a$.
    Option C keeps the correct direction but drops the sign on the
    constant term. Option D combines both mistakes.

    **Answer:** $x \leq 4 - \dfrac{12}{a}$

    **11.** The three boundary lines box in a triangular region. Find the
    vertices by intersecting each pair of boundaries. Line
    $y = -2x + 13$ meets line $y = x - 1$: setting them equal,
    $-2x + 13 = x - 1$, gives $14 = 3x$, so $x = \dfrac{14}{3}$ and
    $y = \dfrac{11}{3}$ — the vertex $\left(\frac{14}{3}, \frac{11}{3}\right)$.
    Line $y = x - 1$ meets $x = 2$: substituting
    $x = 2$ gives $y = 1$ — the vertex $(2, 1)$. Line $y = -2x + 13$ meets
    $x = 2$: substituting $x = 2$ gives $y = 9$ — the vertex $(2, 9)$.
    Because $x$ and $y$ are allowed to be any real numbers here (not
    restricted to integers), the extreme value of the linear expression
    $x + y$ over the whole region does occur at one of these vertices, so
    it is enough to evaluate $x + y$ at each: at
    $\left(\frac{14}{3}, \frac{11}{3}\right)$ it is $\frac{25}{3} \approx 8.33$;
    at $(2, 1)$ it is 3; at $(2, 9)$ it is 11. The largest of these is 11,
    at the vertex $(2, 9)$.

    **Answer:** 11

    **12.** Work on all three parts of the compound inequality at once.
    Subtract 3 from all three parts: $-7 < -2x < 7$. Divide all three
    parts by $-2$, and reverse both inequality signs because you divided
    by a negative number: $\dfrac{-7}{-2} > x > \dfrac{7}{-2}$, which
    reorders to $-\dfrac{7}{2} < x < \dfrac{7}{2}$. Option B comes from
    forgetting to flip either sign, which turns the "trapped between"
    region into two separate rays. Option C uses closed boundaries instead
    of the strict inequality the problem actually has. Option D comes from
    adding the constant instead of subtracting it when isolating the
    $-2x$ term on each side.

    **Answer:** $-\dfrac{7}{2} < x < \dfrac{7}{2}$

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** the student solving the compound inequality in
      Example 2 correctly but forgetting to flip in a one-step problem like
      Example 1 once the numbers get uglier — the flip is fresh in mind
      right after this lesson and quick to drop under time pressure later.
    - **Diagnostic question:** ask them to solve $-3x + 1 > 10$ and watch
      whether they flip the sign at the division step without being
      reminded.
    - **If they are struggling:** return to 1.1 Linear Equations in One
      Variable and rebuild the isolate-the-variable steps before
      reintroducing the flip rule on top of them.
    - **If they are flying:** escalate to a system-of-inequalities question
      that gives the shaded graph directly (no equations shown) and asks
      them to write the system from the picture — the reverse of Example 3.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`

---

*Previous: [1.5 Systems of Two Linear Equations](1-5-systems-of-two-linear-equations.md) · Next: [1.7 Translation: Turning Words into Equations](1-7-translation-turning-words-into-equations.md)*
