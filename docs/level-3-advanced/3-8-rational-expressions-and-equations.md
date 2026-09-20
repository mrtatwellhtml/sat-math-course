---
lesson_id: "3.8"
title: "Rational Expressions and Equations"
level: 3
domain: advanced_math
prereqs: ["3.7"]
est_minutes: 50
status: verified
verified_by: "math-verifier 2026-09-20"
---

# 3.8 Rational Expressions and Equations

!!! abstract "Why this is on the test"
    Rational expressions and equations appear in roughly one question on a typical digital SAT. You may need to simplify a fraction of polynomials, combine rates or expressions, solve while checking restrictions, or read an asymptote from an equation.

**Before you start, you should be able to:** factor polynomials, solve linear and quadratic equations, and interpret a function from its equation.

**By the end of this lesson you will be able to:**

- Simplify, add and divide rational expressions
- Solve rational equations and reject extraneous roots
- Identify undefined values and asymptotic behaviour

---

## The idea

A rational expression is a quotient of polynomials. Record values that make an original denominator zero. For example,

$$
\frac{x^2-9}{x+3}=\frac{(x-3)(x+3)}{x+3}=x-3,\qquad x\ne -3
$$

To add rational expressions, use a common denominator. To divide, multiply by the reciprocal of the second expression, then factor before cancelling. You may cancel factors, not terms separated by addition or subtraction.

For a rational equation, write every restriction first. Multiply by the least common denominator to remove fractions, solve the resulting equation, and substitute each candidate into the original equation. A candidate that makes an original denominator zero is an extraneous root and must be rejected.

An undefined value can describe a hole or a vertical asymptote. A cancelled factor creates a hole, not an asymptote. If the denominator still has a zero after all common factors cancel, the graph has a vertical asymptote there. For a quotient with equal numerator and denominator degrees, the horizontal asymptote is the ratio of leading coefficients. A lower numerator degree gives horizontal asymptote $y=0$.

For a reliable simplification, factor first, record original denominator restrictions, use a common denominator for addition or subtraction, combine and refactor, then cancel only common factors while keeping the restrictions.

For example, to add $\frac{1}{x-2}+\frac{2}{x+2}$, use $(x-2)(x+2)$ as the common denominator. The first numerator must be multiplied by $x+2$, and the second by $x-2$:

$$
\frac{1}{x-2}+\frac{2}{x+2}=\frac{x+2+2(x-2)}{(x-2)(x+2)}=\frac{3x-2}{x^2-4}.
$$

For division, multiply by the reciprocal of the second fraction. Factor first, cancel common factors, and retain every restriction from the original denominators. A simplified expression can hide a restriction, so always carry the domain beside the result.

When the denominator has more than one factor, clear fractions by multiplying every term by the entire least common denominator. After solving, test each candidate in the original equation. If substitution makes the original expression undefined, reject that candidate.

To read end behavior, compare degrees after factoring and cancelling. If the denominator's degree is larger, the horizontal asymptote is $y=0$. If the degrees are equal, divide the leading coefficients to get the horizontal asymptote. A vertical asymptote comes from a denominator zero that remains after cancellation. A cancelled denominator zero gives a hole instead, never an asymptote, and its coordinates come from the simplified rule.


!!! tip "Desmos shortcut"
    For a graph check, enter the function as `y=(3x+2)/(x-5)`. Desmos can reveal a missing point or an asymptote, but use the factors and degrees to justify the result because the graph does not replace domain restrictions.

---

## Worked examples

### Example 1 — routine

> Simplify $\frac{x^2-16}{x+4}$ and state the restriction on $x$.

**Thinking:** Factor the numerator first, and keep the denominator's zero as an excluded value even after a common factor cancels.

**Solution:**

1. The original denominator is zero when $x+4=0$, so $x\ne -4$.
2. Factor the difference of squares: $x^2-16=(x-4)(x+4)$.
3. Cancel the common factor: $\frac{(x-4)(x+4)}{x+4}=x-4$, with the restriction unchanged.

**Answer:** $x-4$, where $x\ne -4$

### Example 2 — typical test difficulty

> Solve $\frac{x^2-4}{x-2}=2x-3$.

**Thinking:** The original denominator forbids $x=2$. I will clear the fraction and solve the resulting equation, but a candidate equal to $2$ cannot be reported as a solution even if the algebra produces it.

**Solution:**

1. The original denominator is zero when $x-2=0$, so $x\ne 2$.
2. Multiply both sides by $x-2$ to clear the fraction: $x^2-4=(2x-3)(x-2)$.
3. Expand the right side: $x^2-4=2x^2-7x+6$.
4. Collect terms: $0=x^2-7x+10$, which factors as $(x-2)(x-5)=0$, giving candidates $x=2$ and $x=5$.
5. Check each candidate in the original equation. Substituting $x=2$ makes the original denominator $x-2$ equal to zero, so $x=2$ is extraneous and must be rejected. Substituting $x=5$ gives $\frac{25-4}{5-2}=7$ on the left and $2(5)-3=7$ on the right, so $x=5$ checks and is valid.

**Answer:** $x=5$ (the candidate $x=2$ is extraneous and is rejected)

### Example 3 — the hard version

> Let $f(x)=\frac{x^2-2x-3}{x^2-7x+12}$. Identify the hole and the vertical asymptote of the graph of $f$.

**Thinking:** A factor that cancels between numerator and denominator produces a hole, not an asymptote; a factor that survives in the denominator after cancelling produces a vertical asymptote. I have to factor both completely before I can tell which is which.

**Solution:**

1. Factor the numerator: $x^2-2x-3=(x-3)(x+1)$.
2. Factor the denominator: $x^2-7x+12=(x-3)(x-4)$.
3. The original denominator is zero at $x=3$ and $x=4$, so both values are excluded: $x\ne 3,4$.
4. The factor $x-3$ is common to numerator and denominator, so it cancels: $f(x)=\frac{x+1}{x-4}$ for $x\ne 3$. A cancelled factor gives a hole, not an asymptote, so the graph has a hole at $x=3$, not a break that runs to infinity.
5. The factor $x-4$ does not cancel, so the denominator is still zero there after simplifying. That remaining zero is the vertical asymptote, $x=4$.
6. Find the hole's height from the simplified rule: $y=\frac{3+1}{3-4}=-4$, so the hole sits at $(3,-4)$.

**Answer:** Hole at $(3,-4)$; vertical asymptote $x=4$

---

## Where students go wrong

!!! warning "Common errors"
    - **Cancelling terms instead of factors.** In $\frac{x+2}{x+5}$, the $x$ terms cannot cancel. Factor first, then cancel only a complete common factor.
    - **Forgetting the original restriction.** Simplifying $\frac{(x-3)(x+3)}{x+3}$ does not make $x=-3$ legal. Record denominator zeros before cancelling.
    - **Using the wrong reciprocal when dividing.** For $\frac{a}{b}\div\frac{c}{d}$, rewrite it as $\frac{a}{b}\times\frac{d}{c}$.
    - **Keeping every root after clearing denominators.** Multiplication can introduce a value that was excluded in the original equation. Substitute every candidate back before reporting it.
    - **Confusing a hole with a vertical asymptote.** A cancelled denominator factor creates a hole; a denominator zero that remains after cancellation creates a vertical asymptote.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** For $x\ne -5$, which expression is equivalent to $\frac{x^2-25}{x+5}$?

- A) $x-5$
- B) $x+5$
- C) $x^2-10$
- D) $\frac{x-5}{x+5}$

**2.** Which expression is equivalent to $\frac{2}{x+1}+\frac{3}{x+1}$?

- A) $\frac{5}{x+1}$
- B) $\frac{5}{2x+1}$
- C) $\frac{6}{x+1}$
- D) $\frac{5}{2x+2}$

**3.** What is the value of $x$ that must be excluded from $\frac{5}{x-4}$? *(student-produced response)*

**4.** If $x=8$, what is the value of $\frac{3x}{x+2}\div\frac{6}{x+2}$?

- A) $2$
- B) $4$
- C) $6$
- D) $8$

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** What is the solution to $\frac{3}{x-1}=1$?

- A) $x=1$
- B) $x=2$
- C) $x=3$
- D) $x=4$

**6.** What is the solution to $\frac{2}{x+3}+\frac{1}{x+3}=\frac{3}{5}$?

- A) $x=-1$
- B) $x=0$
- C) $x=2$
- D) $x=5$

**7.** Which expression is equivalent to $\frac{4}{x-3}+\frac{1}{x+3}$, where $x\ne 3,-3$?

- A) $\frac{5}{x^2-9}$
- B) $\frac{4x+13}{x^2-9}$
- C) $\frac{5x+9}{x^2-9}$
- D) $\frac{5x+9}{2x}$

**8.** What is the solution to $\frac{x}{x-3}=2$? *(student-produced response)*

**9.** The function $g(x)=\frac{4x-1}{x+2}$ has which horizontal and vertical asymptotes?

- A) Horizontal $y=4$ and vertical $x=-2$
- B) Horizontal $y=-2$ and vertical $x=4$
- C) Horizontal $y=-1$ and vertical $x=-2$
- D) Horizontal $y=0$ and vertical $x=2$

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** What is the solution to $\frac{2}{x-1}-\frac{3}{x+2}=\frac{1}{x^2+x-2}$?

- A) $x=-6$
- B) $x=-2$
- C) $x=0$
- D) $x=6$

**11.** The function $r(x)=\frac{x^2+bx-12}{x-3}$, where $b$ is a constant, has a hole at $x=3$. What is the value of $b$? *(student-produced response)*

**12.** The equation $\frac{x^2-36}{x-6}=2x-2$ has exactly one valid solution; a second algebraic candidate is extraneous. What is the valid solution?

- A) $x=2$
- B) $x=6$
- C) $x=8$
- D) $x=14$

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | A |
    | 2 | A |
    | 3 | 4 |
    | 4 | B |
    | 5 | D |
    | 6 | C |
    | 7 | C |
    | 8 | 6 |
    | 9 | A |
    | 10 | D |
    | 11 | 1 |
    | 12 | C |

??? success "Show full solutions"
    **1.** Factor the numerator: $x^2-25=(x-5)(x+5)$. Since $x\ne -5$, cancel $x+5$ to get $x-5$. The answer is **A**.

    **2.** The denominators match, so add the numerators: $\frac{2+3}{x+1}=\frac{5}{x+1}$. The answer is **A**.

    **3.** The denominator cannot be zero. Solve $x-4=0$, so the excluded value is $4$.

    **4.** Rewrite the division as multiplication by the reciprocal: $\frac{3x}{x+2}\times\frac{x+2}{6}=\frac{x}{2}$. At $x=8$, the value is $4$. The answer is **B**.

    **5.** The restriction is $x\ne 1$. Multiply by $x-1$: $3=x-1$, so $x=4$, which is allowed. The answer is **D**.

    **6.** Combine the left side: $\frac{3}{x+3}=\frac{3}{5}$. Since $x\ne -3$, cross-multiply to get $15=3x+9$, so $x=2$. The answer is **C**.

    **7.** The common denominator is $(x-3)(x+3)=x^2-9$. The numerator is $4(x+3)+1(x-3)=5x+9$, giving $\frac{5x+9}{x^2-9}$. The answer is **C**.

    **8.** The restriction is $x\ne 3$. Multiply by $x-3$: $x=2x-6$. Thus $x=6$, which is allowed.

    **9.** The denominator is zero at $x=-2$, so the vertical asymptote is $x=-2$. The degrees match, so the horizontal asymptote is the ratio of leading coefficients, $y=4$. The answer is **A**.

    **10.** Factor the third denominator: $x^2+x-2=(x-1)(x+2)$, the same least common denominator as the first two terms, so $x\ne 1,-2$. Multiply every term by $(x-1)(x+2)$: $2(x+2)-3(x-1)=1$. Distributing gives $2x+4-3x+3=1$, so $-x+7=1$ and $x=6$. This is allowed since $6\ne 1,-2$. The answer is **D**. (Dropping the negative sign while distributing $-3(x-1)$ gives the distractor $x=-6$; a sign error on the other term gives $x=0$; mistaking an excluded value for a solution gives $x=-2$.)

    **11.** A hole at $x=3$ means the numerator must also equal zero there, so $(x-3)$ is a factor of $x^2+bx-12$. Substitute $x=3$: $9+3b-12=0$, so $3b=3$ and $b=1$.

    **12.** The restriction is $x\ne 6$. Multiply both sides by $x-6$: $x^2-36=(2x-2)(x-6)$. Expanding the right side gives $2x^2-14x+12$, so $0=x^2-14x+48=(x-6)(x-8)$, giving candidates $x=6$ and $x=8$. Substituting $x=6$ makes the original denominator zero, so it is extraneous and must be rejected. Substituting $x=8$ gives $\frac{64-36}{8-6}=14$ on the left and $2(8)-2=14$ on the right, so $x=8$ checks and is the valid solution. The answer is **C**.

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** the student cancelling a denominator factor and then accepting the cancelled value.
    - **Diagnostic question:** Before solving $\frac{x}{x-3}=2$, which value is forbidden, and what happens if your algebra produces it?
    - **If they are struggling:** return to Lesson 3.7 for factoring polynomials and Lesson 1.1 for solving equations step by step.
    - **If they are flying:** ask them to explain why a cancelled factor creates a hole rather than a vertical asymptote.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`.

---

*Previous: [3.7 Polynomials: Operations, Roots and Division](3-7-polynomials-operations-roots-and-division.md) · Next: [3.9 Nonlinear Systems](3-9-nonlinear-systems.md)*
