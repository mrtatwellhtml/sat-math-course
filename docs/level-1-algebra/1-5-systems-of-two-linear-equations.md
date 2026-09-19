---
lesson_id: "1.5"
title: "Systems of Two Linear Equations"
level: 1
domain: algebra
prereqs: ["1.4"]
est_minutes: 55
status: verified
verified_by: "math-verifier 2026-09-19"
---

# 1.5 Systems of Two Linear Equations

!!! abstract "Why this is on the test"
    Worth roughly 2-3 questions on a typical digital SAT. Most are a
    substitution or elimination question wrapped in a short context, but the
    hardest one usually asks what makes a system have no solution or
    infinitely many solutions instead of asking you to solve it at all.

**Before you start, you should be able to:** write and rearrange a linear
equation in two variables, including slope-intercept and standard form.

**By the end of this lesson you will be able to:**

- Solve by substitution, elimination and graphing, and choose well
- Recognise the coefficient conditions for no or infinite solutions
- Set up a system from a word problem

---

## The idea

A system of two linear equations is two constraints on the same pair
of variables. Solving it means finding the point $(x, y)$ that makes both
equations true at once — the point where the two lines cross.

You have three ways in. **Substitution** solves one equation for a
variable and drops that expression into the other equation. It is fastest
when one equation is already solved for a variable, or can be with one
step. **Elimination** adds or subtracts multiples of the two equations so
one variable cancels. It is fastest when both equations are in standard
form, $ax + by = c$, and a variable's coefficients are equal, opposite, or
close to it. **Graphing** — usually on Desmos rather than by hand on test
day — shows the answer as the intersection point, and is most useful for
checking a solution you already found or for reading off the number of
solutions at a glance.

Every system falls into exactly one of three cases, and the SAT tests all
three:

- **One solution.** The lines have different slopes. They cross exactly
  once.
- **No solution.** The lines have the same slope but different
  $y$-intercepts. They are parallel and never meet.
- **Infinitely many solutions.** The lines have the same slope and the
  same $y$-intercept. They are the same line written two different ways.

Write both equations in standard form, $a_1x + b_1y = c_1$ and
$a_2x + b_2y = c_2$. Compare the ratios of corresponding coefficients:

$$
\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2} \implies \text{no solution} \qquad\qquad \frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2} \implies \text{infinitely many}
$$

If those two ratios of coefficients are unequal, there is exactly one
solution, and you never need to find it to answer a question that only
asks about the number of solutions.

!!! tip "Desmos shortcut"
    Typing both equations into Desmos shows the intersection point
    directly, and if the lines fail to cross, it shows you that too —
    two parallel lines, or one line drawn on top of the other. Use it to
    check an answer you found algebraically, not as your first move on a
    question that gives you an unknown coefficient instead of a graph.

---

## Worked examples

### Example 1 — routine
> Solve the system for $x$:
> $$
> y = 2x - 3 \\
> 3x + y = 12
> $$

**Thinking:** The first equation is already solved for $y$, so substitution
is faster here than lining up both equations for elimination.

**Solution:**

1. Substitute $2x - 3$ for $y$ in the second equation, since both
   expressions equal $y$.
   $$
   3x + (2x - 3) = 12
   $$
2. Combine like terms and solve for $x$.
   $$
   5x - 3 = 12 \implies 5x = 15 \implies x = 3
   $$

**Answer:** $x = 3$

### Example 2 — typical test difficulty
> A school is ordering shirts and hats for a fundraiser. Shirts cost \$12
> each and hats cost \$8 each. The school orders 40 items in total and
> spends \$392. How many hats did the school order?

**Thinking:** Two unknowns, two facts given — a total count and a total
cost — so this is a system to set up before it is a system to solve.
Standard form and elimination suit it well because both equations will
naturally come out as $a_1x + b_1y = c$.

**Solution:**

1. Let $s$ be the number of shirts and $h$ be the number of hats. Translate
   each sentence into an equation.
   $$
   s + h = 40 \\
   12s + 8h = 392
   $$
2. Multiply the first equation by 12 so the $s$-coefficients match, which
   sets up elimination.
   $$
   12s + 12h = 480
   $$
3. Subtract the second original equation from this new one to eliminate
   $s$.
   $$
   (12s + 12h) - (12s + 8h) = 480 - 392 \implies 4h = 88
   $$
4. Divide both sides by 4.
   $$
   h = 22
   $$

**Answer:** 22 hats

### Example 3 — the hard version
> The system below has no solution.
> $$
> 6x - 9y = 15 \\
> 4x + ky = 8
> $$
> What is the value of $k$?

**Thinking:** No solution means the two lines are parallel but distinct —
same slope, different intercept. That is a statement about the ratio of
coefficients, not an instruction to solve for $x$ and $y$, and there is no
point $(x, y)$ to find here. Set up the ratio condition and solve for the
parameter instead, then confirm the constants really do stay unequal.

**Solution:**

1. Write the no-solution condition for two equations already in standard
   form $a_1x + b_1y = c_1$ and $a_2x + b_2y = c_2$: the coefficient ratios
   match, but the constant ratio does not.
   $$
   \frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}
   $$
2. Substitute the $x$- and $y$-coefficients from the system and solve for
   $k$.
   $$
   \frac{6}{4} = \frac{-9}{k}
   $$
3. Cross-multiply and solve.
   $$
   6k = 4(-9) \implies 6k = -36 \implies k = -6
   $$
4. Check the constant ratio to confirm this gives no solution rather than
   infinitely many. The coefficient ratio is $\frac{6}{4} = 1.5$. The
   constant ratio is $\frac{15}{8} = 1.875$. Since $1.5 \neq 1.875$, the
   lines are parallel and distinct — no solution, as required.

**Answer:** $k = -6$

---

## Where students go wrong

!!! warning "Common errors"
    - **Adding instead of subtracting in elimination.** When two equations
      share a coefficient of the same sign, you need to subtract, not add,
      to eliminate it. Check the sign of both coefficients before picking
      the operation.
    - **Multiplying only one side of an equation.** Scaling an equation to
      set up elimination means multiplying every term, including the
      constant on the right. Dropping the constant is invisible until the
      final check fails.
    - **Solving for the wrong thing on a no-solution question.** When a
      question states the system has no solution or infinitely many, it is
      asking about a coefficient, not about $x$ and $y$. Students who
      immediately try to eliminate a variable waste time and often produce
      a contradiction they cannot interpret.
    - **Mixing up no solution and infinitely many.** Both cases start from
      equal coefficient ratios. The difference is entirely in the constant
      ratio, and skipping that check flips the answer.
    - **Forgetting the question asks for one variable, not the point.** A
      system question often asks only for $x$, or only for $y$, or for
      $x + y$. Finding the full point and then not finishing the last step
      costs the question.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** Solve the system for $x$:
$$
y = 3x - 1 \\
y = x + 5
$$

- A) $x = 2$
- B) $x = 3$
- C) $x = 8$
- D) $x = 12$

**2.** Solve the system for $y$:
$$
2x + y = 9 \\
x - y = 3
$$
*(student-produced response)*

**3.** What is the ordered pair $(x, y)$ that solves this system?
$$
x + y = 7 \\
x - y = 1
$$

- A) $(3, 4)$
- B) $(4, -3)$
- C) $(4, 3)$
- D) $(8, -1)$

**4.** Solve the system for $x$:
$$
4x - y = 5 \\
y = 2x - 1
$$
*(student-produced response)*

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** A theater sells adult tickets for \$9 and child tickets for \$6. One
night it sells 150 tickets total and collects \$1,140. How many child
tickets did it sell?

- A) 14
- B) 70
- C) 75
- D) 80

**6.** The sum of two numbers is 24. Three times the smaller number equals
the larger number minus 4. What is the smaller number?

- A) 4
- B) 5
- C) 7
- D) 19

**7.** Solve the system for $x$:
$$
3x + 2y = 12 \\
5x - 2y = 4
$$

- A) $-2$
- B) $2$
- C) $3$
- D) $16$

**8.** In the system below, what is the value of $x + y$?
$$
2x + 3y = 19 \\
x - y = 2
$$
*(student-produced response)*

**9.** How many solutions does this system have?
$$
4x - 2y = 10 \\
6x - 3y = 12
$$

- A) No solution
- B) Exactly one solution
- C) Exactly two solutions
- D) Infinitely many solutions

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** For what value of $k$ does the system below have no solution?
$$
kx + 6y = 10 \\
4x + 8y = 12
$$

- A) $3$
- B) $6$
- C) $8$
- D) $16$

**11.** For what value of $m$ does the system below have infinitely many
solutions?
$$
2x + 5y = 15 \\
6x + my = 45
$$
*(student-produced response)*

**12.** The system below has infinitely many solutions. What is the value
of $k$?
$$
y = \frac{2}{3}x + 4 \\
4x - 6y = k
$$

- A) $-24$
- B) $-12$
- C) $12$
- D) $24$

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | B) $x = 3$ |
    | 2 | $y = 1$ |
    | 3 | C) $(4, 3)$ |
    | 4 | $x = 2$ |
    | 5 | B) 70 |
    | 6 | B) 5 |
    | 7 | B) $2$ |
    | 8 | $x + y = 8$ |
    | 9 | A) No solution |
    | 10 | A) $k = 3$ |
    | 11 | $m = 15$ |
    | 12 | A) $k = -24$ |

??? success "Show full solutions"
    **1.** Both equations are solved for $y$, so set the right-hand sides
    equal to each other.
    $$
    3x - 1 = x + 5
    $$
    Move $x$ to the left and $-1$ to the right.
    $$
    2x = 6 \implies x = 3
    $$
    **Answer:** B) $x = 3$. Choice A comes from moving the $-1$ with the
    wrong sign ($2x = 4$). Choice C is the value of $y$, not $x$. Choice D
    comes from multiplying instead of dividing by 2.

    **2.** Add the two equations directly — the $x$-coefficients are
    already opposite-free to combine, but it is faster to eliminate $x$ by
    first doubling the second equation. Instead, add the equations as
    given after matching $x$: from the second equation, $x = y + 3$.
    Substitute into the first equation.
    $$
    2(y + 3) + y = 9 \implies 2y + 6 + y = 9 \implies 3y = 3 \implies y = 1
    $$
    **Answer:** $y = 1$.

    **3.** Add the two equations to eliminate $y$.
    $$
    (x + y) + (x - y) = 7 + 1 \implies 2x = 8 \implies x = 4
    $$
    Substitute $x = 4$ into the first equation.
    $$
    4 + y = 7 \implies y = 3
    $$
    **Answer:** C) $(4, 3)$. Choice A swaps the coordinates. Choice B keeps
    the correct $x$ but flips the sign of $y$. Choice D comes from
    forgetting to divide $2x = 8$ by 2, using $x = 8$ and back-substituting
    to get $y = -1$.

    **4.** Substitute $2x - 1$ for $y$ in the first equation.
    $$
    4x - (2x - 1) = 5 \implies 2x + 1 = 5 \implies 2x = 4 \implies x = 2
    $$
    **Answer:** $x = 2$.

    **5.** Let $a$ be the number of adult tickets and $c$ be the number of
    child tickets.
    $$
    a + c = 150 \\
    9a + 6c = 1140
    $$
    Solve the first equation for $a$: $a = 150 - c$. Substitute into the
    second equation.
    $$
    9(150 - c) + 6c = 1140 \implies 1350 - 9c + 6c = 1140 \implies -3c = -210 \implies c = 70
    $$
    **Answer:** B) 70. Choice A comes from a sign error that distributes
    the $-9$ across both terms as if it were $-9c - 6c$, giving
    $-15c = -210 \implies c = 14$. Choice C assumes an even 75/75 split of
    the 150 tickets, ignoring the price difference entirely. Choice D is
    the number of adult tickets ($a = 80$), reported for the wrong
    variable.

    **6.** Let $s$ be the smaller number and $l$ be the larger number.
    $$
    s + l = 24 \\
    3s = l - 4
    $$
    From the second equation, $l = 3s + 4$. Substitute into the first
    equation.
    $$
    s + (3s + 4) = 24 \implies 4s + 4 = 24 \implies 4s = 20 \implies s = 5
    $$
    **Answer:** B) 5. Choice D is the larger number ($l = 19$), reported for
    the wrong variable. Choice C comes from a sign slip that reads "minus
    4" as "plus 4," solving $s + (3s - 4) = 24 \implies s = 7$. Choice A
    comes from a further arithmetic slip in that same wrong equation.

    **7.** Add the two equations to eliminate $y$, since its coefficients
    are already opposites.
    $$
    (3x + 2y) + (5x - 2y) = 12 + 4 \implies 8x = 16 \implies x = 2
    $$
    **Answer:** B) $2$. Choice A comes from a sign error that treats the
    equations as subtracted instead of added ($8x = -16$). Choice C is the
    value of $y$ (substitute $x = 2$ into $3x + 2y = 12$ to get $y = 3$),
    reported for the wrong variable. Choice D comes from forgetting to
    divide $8x = 16$ by 8.

    **8.** From the second equation, $x = y + 2$. Substitute into the first
    equation.
    $$
    2(y + 2) + 3y = 19 \implies 2y + 4 + 3y = 19 \implies 5y = 15 \implies y = 3
    $$
    Then $x = y + 2 = 5$, so $x + y = 5 + 3 = 8$.
    **Answer:** $x + y = 8$.

    **9.** Write both equations in standard form and compare coefficient
    ratios. Here $a_1 = 4$, $b_1 = -2$, $c_1 = 10$ and $a_2 = 6$,
    $b_2 = -3$, $c_2 = 12$.
    $$
    \frac{a_1}{a_2} = \frac{4}{6} = \frac{2}{3} \qquad \frac{b_1}{b_2} = \frac{-2}{-3} = \frac{2}{3} \qquad \frac{c_1}{c_2} = \frac{10}{12} = \frac{5}{6}
    $$
    The coefficient ratios match but the constant ratio does not
    ($\frac{2}{3} \neq \frac{5}{6}$), so the lines are parallel and
    distinct.
    **Answer:** A) No solution. Choice B would require checking a single
    point, which no student can do without noticing the lines never meet.
    Choice C is not possible for two distinct lines. Choice D is the
    mistake of stopping after seeing the coefficient ratios match, without
    checking the constant ratio.

    **10.** No solution requires the coefficient ratios to match while the
    constant ratio does not.
    $$
    \frac{k}{4} = \frac{6}{8}
    $$
    Cross-multiply and solve.
    $$
    8k = 24 \implies k = 3
    $$
    Check the constant ratio with $k = 3$: the system is
    $3x + 6y = 10$ and $4x + 8y = 12$, so $\frac{10}{12} = \frac{5}{6}$,
    which does not equal $\frac{6}{8} = \frac{3}{4}$. No solution is
    confirmed.
    **Answer:** A) $k = 3$. Choice B copies the $y$-coefficient of the
    first equation directly instead of solving the proportion. Choice C
    copies the $y$-coefficient of the second equation. Choice D comes from
    subtracting instead of dividing when solving $8k = 24$.

    **11.** Infinitely many solutions require all three coefficient ratios
    to match.
    $$
    \frac{a_1}{a_2} = \frac{2}{6} = \frac{1}{3} \qquad \frac{c_1}{c_2} = \frac{15}{45} = \frac{1}{3}
    $$
    Since the coefficient and constant ratios already agree at
    $\frac{1}{3}$, set the $y$-coefficient ratio equal to the same value.
    $$
    \frac{5}{m} = \frac{1}{3} \implies m = 15
    $$
    **Answer:** $m = 15$.

    **12.** Rewrite the first equation in standard form so it can be
    compared directly with the second. Multiply $y = \frac{2}{3}x + 4$ by
    3.
    $$
    3y = 2x + 12 \implies 2x - 3y = -12
    $$
    Infinitely many solutions require every coefficient ratio, including
    the constant ratio, to match between $2x - 3y = -12$ and
    $4x - 6y = k$.
    $$
    \frac{2}{4} = \frac{-3}{-6} = \frac{-12}{k}
    $$
    Since $\frac{2}{4} = \frac{1}{2}$, solve $\frac{-12}{k} = \frac{1}{2}$.
    $$
    -12 = \frac{k}{2} \implies k = -24
    $$
    **Answer:** A) $k = -24$. Choice B stops after doubling the constant
    $-12$ but forgets to account for the negative correctly a second time.
    Choice C and D drop the negative sign on $-12$ entirely, giving $12$
    and its double $24$.

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** students who immediately start solving for $x$ and
      $y$ on a no-solution or infinite-solutions question instead of
      comparing coefficient ratios.
    - **Diagnostic question:** ask them to state, without solving, whether
      $2x + 3y = 7$ and $4x + 6y = 9$ has one solution, no solution, or
      infinitely many. A student who cannot answer in ten seconds has not
      internalised the ratio test.
    - **If they are struggling:** return to 1.4 and rebuild fluency with
      slope-intercept versus standard form — most system errors are really
      rearranging errors in disguise.
    - **If they are flying:** move to 1.7, translation, where the
      bottleneck shifts from solving the system to setting it up correctly
      from a paragraph.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`

---

*Previous: [1.4 Linear Equations in Two Variables](1-4-linear-equations-in-two-variables.md) · Next: [1.6 Linear Inequalities and Systems of Inequalities](1-6-linear-inequalities-and-systems-of-inequalities.md)*
