---
lesson_id: "3.3"
title: "Solving Quadratic Equations"
level: 3
domain: advanced_math
prereqs: ["3.2"]
est_minutes: 60
status: verified
verified_by: "math-verifier 2026-09-20"
---

# 3.3 Solving Quadratic Equations

!!! abstract "Why this is on the test"
    Worth roughly 2-3 questions on a typical digital SAT, appearing as a
    direct "solve for x" prompt, a word problem that ends in a quadratic, or
    a question that never asks for a root at all but asks how many exist.
    The slow way — the formula, always, on every equation — works, but it
    costs time you will not get back. This lesson is longer than the others
    in this level because choosing correctly is a skill in itself.

**Before you start, you should be able to:** factor a quadratic with
integer coefficients and expand a product of two binomials (3.2).

**By the end of this lesson you will be able to:**

- Solve by factoring, square roots, completing the square and formula
- Choose the fastest method for a given equation
- Use the discriminant to count real solutions

---

## The idea

Every quadratic equation can be solved by the quadratic formula, which is
also the slowest method almost every time. The real skill here is not the
four methods — you will pick those up fast — it is the five seconds of
looking at an equation before you touch your pencil.

Use this decision rule, in order:

1. **No $x$ term?** The equation is $ax^2 + c = 0$. Isolate $x^2$ and take
   square roots. Nothing is faster.
2. **Small integer coefficients, leading coefficient 1 (or a common factor
   pulled out)?** Try factoring. If integer factor pairs of $c$ that add
   to $b$ jump out inside a few seconds, factor.
3. **Otherwise, use the quadratic formula.** It works on every quadratic,
   including ugly or irrational coefficients. Once factoring stops being
   fast, stop hunting and write the formula down.
4. **Asked for the vertex, not the roots?** That is when completing the
   square earns its place — see 3.4 for the full treatment.

For $ax^2 + bx + c = 0$, the formula is

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

**Square roots**, when $b = 0$: solve $3x^2 - 27 = 0$ by dividing to get
$x^2 = 9$, then $x = \pm 3$. Do not expand or factor an equation with no
linear term — that only rebuilds the work you are about to undo.

**Factoring** turns $x^2 - x - 12 = 0$ into $(x-4)(x+3) = 0$, giving
$x = 4$ or $x = -3$ from the zero product property — fastest exactly when
it is fast. Past a few seconds of testing pairs, switch to the formula.

**Completing the square** rewrites $x^2 + bx$ so $x$ appears once, inside
a squared bracket: adding $(b/2)^2$ makes it a perfect square, because
$\left(x + \frac{b}{2}\right)^2$ expands to exactly $x^2 + bx + (b/2)^2$ —
the constant matches what that expansion produces, and this identity is
where the formula itself comes from. The SAT rarely forces the full
process to find a root, since the formula is always faster; save this
method for 3.4, where it produces vertex form.

**The discriminant**, $b^2 - 4ac$, is the part of the formula under the
root sign. Its sign gives the number of real solutions:

| Discriminant | Real solutions |
|---|---|
| $b^2 - 4ac > 0$ | two |
| $b^2 - 4ac = 0$ | one (a repeated root) |
| $b^2 - 4ac < 0$ | none |

Its more valuable use is running that table backward: if a parameter must
give *exactly one solution*, that is a tangency condition — set
$b^2 - 4ac = 0$ and solve for the parameter. The same move returns in 3.9,
for a line tangent to a parabola.

!!! tip "Desmos shortcut"
    Graphing $y = ax^2 + bx + c$ shows the roots as x-intercepts instantly
    — useful for checking an answer, but on a no-calculator-needed mental
    check it is often slower than applying the decision rule above.

---

## Worked examples

### Example 1 — routine
> Solve for all real values of $x$: $2x^2 - 3x - 20 = 0$.

**Thinking:** There is a linear term, so square roots are out. The leading
coefficient is not 1, but $2x^2 - 3x - 20$ still splits into integer
factors quickly — try factoring before reaching for the formula.

**Solution:**

1. Look for factors of $2x^2 - 3x - 20$: try $(2x + 5)(x - 4)$, since
   $2x \cdot x = 2x^2$ and $5 \cdot(-4) = -20$.
2. Check the middle term: $2x\cdot(-4) + 5\cdot x = -8x + 5x = -3x$. It
   matches, so $2x^2 - 3x - 20 = (2x+5)(x-4)$.
3. Set each factor to zero: $2x + 5 = 0$ gives $x = -\frac{5}{2}$, and
   $x - 4 = 0$ gives $x = 4$.

**Answer:** $x = -\dfrac{5}{2}$ or $x = 4$

### Example 2 — typical test difficulty
> Solve for all real values of $x$: $3x^2 + 4x - 5 = 0$. Give your
> answers to the nearest hundredth.

**Thinking:** The instruction to round is the tell — this will not factor
over the integers. Check the discriminant first to know what kind of
answer to expect, then go straight to the formula rather than losing time
testing factor pairs that were never going to work.

**Solution:**

1. Identify $a = 3$, $b = 4$, $c = -5$.
2. Compute the discriminant: $b^2 - 4ac = 16 - 4(3)(-5) = 16 + 60 = 76$.
   It is positive and not a perfect square, so there are two real
   solutions and they are irrational — confirming factoring was never
   going to work cleanly.
3. Apply the formula: $x = \dfrac{-4 \pm \sqrt{76}}{6}$.
4. Since $\sqrt{76} \approx 8.72$, this gives
   $x \approx \dfrac{-4 + 8.72}{6} \approx 0.79$ or
   $x \approx \dfrac{-4 - 8.72}{6} \approx -2.12$.

**Answer:** $x \approx 0.79$ or $x \approx -2.12$

### Example 3 — the hard version
> The equation $kx^2 + 12x + 9 = 0$, where $k$ is a nonzero constant, has
> exactly one real solution. What is the value of $k$?

**Thinking:** "Exactly one real solution" is the discriminant working
backward — a tangency condition, not a roots question at all. There is
nothing to factor or estimate here; the setup is to name $a$, $b$, $c$ in
terms of $k$ and force $b^2 - 4ac = 0$.

**Solution:**

1. Match the equation to $ax^2 + bx + c = 0$: $a = k$, $b = 12$, $c = 9$.
2. Exactly one real solution means the discriminant is zero:
   $b^2 - 4ac = 0$.
3. Substitute: $12^2 - 4(k)(9) = 0$, so $144 - 36k = 0$.
4. Solve for $k$: $36k = 144$, so $k = 4$.
5. Check: with $k = 4$, the equation is $4x^2 + 12x + 9 = 0$, which factors
   as $(2x+3)^2 = 0$ — a repeated root, confirming exactly one solution.

**Answer:** $k = 4$

---

## Where students go wrong

!!! warning "Common errors"
    - **Reaching for the formula on every equation.** It always works, so
      it feels safe, but on an equation like $x^2 = 64$ it burns thirty
      seconds finding what square roots give in three. Run the decision
      rule before picking up the pencil.
    - **Dropping the $\pm$ when taking a square root.** $x^2 = 49$ has two
      solutions, $x = 7$ and $x = -7$, not only the positive one. The SAT
      builds a distractor from exactly this slip.
    - **Sign errors substituting into the formula**, especially when $b$
      or $c$ is negative. Write $a$, $b$, $c$ down as their own line before
      substituting, so a negative sign has nowhere to hide.
    - **Computing $b^2 - 4ac$ as $(b-4ac)^2$ or a similar miscombination.**
      The discriminant is $b^2$ minus the product $4ac$ — compute each
      piece separately, then combine.
    - **Forgetting that a negative discriminant means no real solutions,
      not "no solutions to report."** If a question guarantees real
      answers, a negative discriminant means you made an earlier error,
      not that the equation has none.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** What is the positive solution to $2x^2 - 8 = 0$?

- A) 2
- B) 4
- C) -2
- D) 8

**2.** The equation $x^2 - 3x - 10 = 0$ has two solutions. What is the greater of the two?

- A) $-5$
- B) $-2$
- C) $3$
- D) $5$

**3.** How many real solutions does the equation $x^2 - 6x + 9 = 0$ have?

- A) 0
- B) 1
- C) 2
- D) It cannot be determined.

**4.** The equation $x^2 + 2x - 15 = 0$ has two solutions. What is the negative solution?

- A) -15
- B) -5
- C) -3
- D) 3

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** Which method solves $5x^2 - 45 = 0$ fastest?

- A) Factoring by grouping
- B) Taking square roots
- C) Completing the square
- D) The quadratic formula

**6.** The equation $3x^2 + 5x - 2 = 0$ has two solutions. What is the positive solution?

- A) $-2$
- B) $-1/3$
- C) $1/3$
- D) $2$

**7.** The equation $x^2 + 4x + 1 = 0$ has two solutions. To the nearest tenth, what is the lesser of the two solutions?

- A) -4.0
- B) -3.7
- C) -0.3
- D) 3.7

**8.** How many real solutions does the equation $2x^2 - 4x + 5 = 0$ have?

- A) 0
- B) 1
- C) 2
- D) Infinitely many

**9.** A rectangular garden has a width of $x$ feet and a length of $x + 3$ feet. Its area is 40 square feet. What is the width, in feet, of the garden? *(student-produced response)*

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** The equation $x^2 - kx + 16 = 0$, where $k$ is a positive constant, has exactly one real solution. What is the value of $k$? *(student-produced response)*

**11.** The equation $2x^2 - 7x - 15 = 0$ has two solutions. What is the sum of the two solutions? *(student-produced response)*

**12.** For how many integer values of $k$ from 1 through 10, inclusive, does the equation $kx^2 + 6x + 3 = 0$ have two distinct real solutions? *(student-produced response)*

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | A |
   | 2 | D |
    | 3 | B |
    | 4 | B |
    | 5 | B |
   | 6 | C |
    | 7 | B |
    | 8 | A |
    | 9 | 5 |
    | 10 | 8 |
    | 11 | 3.5 |
    | 12 | 2 |

??? success "Show full solutions"
    **1.** There is no linear term, so take square roots. Add 8 to both
    sides: $2x^2 = 8$. Divide by 2: $x^2 = 4$. Take square roots:
    $x = \pm 2$. The question asks for the positive solution, so
    $x = 2$. (B comes from reporting $x^2 = 4$ without finishing the
    square root; C comes from taking the negative root; D comes from
    forgetting to divide by 2 before taking the square root, then doubling
    by mistake.)

   **2.** There is a linear term, and the coefficients are small, so try
   factoring. Look for two integers that multiply to $-10$ and add to
   $-3$: those are $-5$ and $2$. So $x^2 - 3x - 10 = (x-5)(x+2)$.
   Setting each factor to zero gives $x = 5$ or $x = -2$. The greater
   solution is $x = 5$, so choice D is correct. Choice A comes from
   changing the sign while solving $x-5=0$, choice B gives the other
   root, and choice C gives the sum of the two roots instead of the
   greater root.

    **3.** Read off $a = 1$, $b = -6$, $c = 9$. The discriminant is
    $b^2 - 4ac = (-6)^2 - 4(1)(9) = 36 - 36 = 0$. A discriminant of zero
    means exactly one real solution (a repeated root). Indeed
    $x^2 - 6x + 9 = (x-3)^2$, confirming the single root $x = 3$.

    **4.** Factor: look for two integers that multiply to $-15$ and add
    to $2$: those are $5$ and $-3$. So $x^2 + 2x - 15 = (x+5)(x-3)$,
    giving $x = -5$ or $x = 3$. The negative solution is $x = -5$. (A
    comes from treating the constant term itself as a root; C comes from
    assigning the signs to the wrong factor, as if the factoring were
    $(x-5)(x+3)$; D comes from reporting the positive solution instead of
    the negative one.)

    **5.** The equation $5x^2 - 45 = 0$ has no linear term ($b = 0$), so
    taking square roots is fastest: $x^2 = 9$, so $x = \pm 3$, in two
    short steps. Factoring by grouping does not apply here (there is no
    linear term to split), completing the square rebuilds work that
    square roots skip entirely, and the quadratic formula works but is
    the slowest correct path.

   **6.** The leading coefficient is not 1, but the numbers are still
   small enough to try factoring by grouping. Multiply $a$ and $c$:
   $3 \times (-2) = -6$. Find two integers that multiply to $-6$ and add
   to $5$: those are $6$ and $-1$. Rewrite: $3x^2 + 6x - x - 2 = 0$, then
   group: $3x(x+2) - 1(x+2) = 0$, so $(3x-1)(x+2) = 0$. This gives
   $x = \frac{1}{3}$ or $x = -2$. The positive solution is
   $x = \dfrac{1}{3}$, so choice C is correct. Choice A gives the
   negative root, choice B changes the sign while solving $3x-1=0$, and
   choice D changes the sign of the negative root.

    **7.** The constant term 1 does not factor with any pair of integers
    that adds to 4, so factoring will not work cleanly — go straight to
    the formula. Here $a=1$, $b=4$, $c=1$, so
    $x = \dfrac{-4 \pm \sqrt{16-4}}{2} = \dfrac{-4 \pm \sqrt{12}}{2}$.
    Since $\sqrt{12} \approx 3.464$, the two solutions are approximately
    $x \approx \dfrac{-4+3.464}{2} \approx -0.3$ and
    $x \approx \dfrac{-4-3.464}{2} \approx -3.7$.
    The lesser solution, to the nearest tenth, is $-3.7$.
    (A comes from rounding $\sqrt{3}$ too roughly; C is the other root;
    D comes from a sign error on $b$ in the formula, which flips both
    roots positive.)

    **8.** Read off $a=2$, $b=-4$, $c=5$. The discriminant is
    $b^2-4ac = (-4)^2 - 4(2)(5) = 16 - 40 = -24$. A negative discriminant
    means there are no real solutions.

    **9.** Area is length times width: $x(x+3) = 40$, so
    $x^2 + 3x - 40 = 0$. Factor: look for two integers that multiply to
    $-40$ and add to $3$: those are $8$ and $-5$. So
    $(x+8)(x-5) = 0$, giving $x = -8$ or $x = 5$. A width cannot be
    negative, so the width is $x = 5$ feet.

    **10.** Match the equation to $ax^2+bx+c=0$: $a=1$, $b=-k$, $c=16$.
    Exactly one real solution means the discriminant is zero:
    $b^2-4ac = 0$, so $(-k)^2 - 4(1)(16) = 0$, which gives
    $k^2 - 64 = 0$, so $k^2 = 64$ and $k = \pm 8$. Since $k$ is given as
    positive, $k = 8$. Check: with $k=8$, the equation is
    $x^2 - 8x + 16 = 0$, which factors as $(x-4)^2 = 0$ — a repeated
    root, confirming exactly one solution.

    **11.** Solving in full: factor $2x^2-7x-15$ by looking for two
    integers that multiply to $2\times(-15)=-30$ and add to $-7$: those
    are $-10$ and $3$. Rewrite and group:
    $2x^2 - 10x + 3x - 15 = 2x(x-5) + 3(x-5) = (2x+3)(x-5) = 0$, giving
    $x = -\frac{3}{2}$ or $x = 5$. The sum is
    $-\frac{3}{2} + 5 = \frac{7}{2} = 3.5$. The faster route skips solving
    entirely: for $ax^2+bx+c=0$, the sum of the solutions is always
    $-\dfrac{b}{a}$, so here it is $-\dfrac{-7}{2} = \dfrac{7}{2} = 3.5$
    directly from the coefficients.

    **12.** The equation has two distinct real solutions exactly when its
    discriminant is positive: $b^2-4ac > 0$ with $a=k$, $b=6$, $c=3$, so
    $36 - 12k > 0$, which gives $k < 3$. Combined with $k \geq 1$ (a
    positive integer coefficient) and $k$ an integer from 1 through 10,
    the values that work are $k=1$ and $k=2$ — checking directly,
    $k=1$ gives discriminant $36-12=24>0$ and $k=2$ gives $36-24=12>0$,
    while $k=3$ gives exactly $0$ (one solution, not two) and every
    larger $k$ gives a negative discriminant. That is 2 values of $k$.

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** students who default to the formula on every problem
      out of habit rather than checking whether square roots or factoring
      would be faster. Time them on a square-roots-only equation to make
      the cost visible.
    - **Diagnostic question:** Example 3's style — a parameter with "exactly
      one solution" — reveals fast whether the discriminant is understood
      as a tool or only memorized as a formula.
    - **If they are struggling:** return to 3.2 (factoring fluency) before
      drilling this lesson further; a shaky sense of integer factor pairs
      makes step 2 of the decision rule unusable under time pressure.
    - **If they are flying:** move to 3.4, where the same completing-the-
      square identity produces vertex form, or preview 3.9's tangent-line
      version of the discriminant trick.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`
      (Chapter 10, Quadratics; the quadratic formula lesson).

---

*Previous: [3.2 Equivalent Expressions: Factoring and Expanding](3-2-equivalent-expressions-factoring-and-expanding.md) · Next: [3.4 Quadratic Functions: Forms and Graphs](3-4-quadratic-functions-forms-and-graphs.md)*
