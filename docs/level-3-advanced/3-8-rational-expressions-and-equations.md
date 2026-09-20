---
lesson_id: "3.8"
title: "Rational Expressions and Equations"
level: 3
domain: advanced_math
prereqs: ["3.7"]
est_minutes: 50
status: drafted
verified_by: ""
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

An undefined value can describe a hole or a vertical asymptote. A cancelled factor creates a hole. If the denominator still has a zero after all common factors cancel, the graph has a vertical asymptote there. For a quotient with equal numerator and denominator degrees, the horizontal asymptote is the ratio of leading coefficients. A lower numerator degree gives horizontal asymptote $y=0$.

For a reliable simplification, factor first, record original denominator restrictions, use a common denominator for addition or subtraction, combine and refactor, then cancel only common factors while keeping the restrictions.

For example, to add $\frac{1}{x-2}+\frac{2}{x+2}$, use $(x-2)(x+2)$ as the common denominator. The first numerator must be multiplied by $x+2$, and the second by $x-2$:

$$
\frac{1}{x-2}+\frac{2}{x+2}=\frac{x+2+2(x-2)}{(x-2)(x+2)}=\frac{3x-2}{x^2-4}.
$$

For division, multiply by the reciprocal of the second fraction. Factor first, cancel common factors, and retain every restriction from the original denominators. A simplified expression can hide a restriction, so always carry the domain beside the result.

When the denominator has more than one factor, clear fractions by multiplying every term by the entire least common denominator. After solving, test each candidate in the original equation. If substitution makes the original expression undefined, reject that candidate.

To read end behavior, compare degrees after factoring and cancelling. If the denominator's degree is larger, the horizontal asymptote is $y=0$. If the degrees are equal, divide the leading coefficients. If the numerator's degree is exactly one larger, polynomial division gives an oblique asymptote. A vertical asymptote comes from a denominator zero that remains after cancellation. A cancelled denominator zero is instead a hole, whose coordinates come from the simplified rule.


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

> Solve $\frac{2}{x-1}+\frac{1}{x+1}=1$.

**Thinking:** The restrictions are $x\ne 1$ and $x\ne -1$. I will clear both denominators, then test the candidates in the original equation.

**Solution:**

1. The least common denominator is $(x-1)(x+1)$, so $x\ne 1,-1$.
2. Multiply every term by the least common denominator: $2(x+1)+(x-1)=x^2-1$.
3. Simplify: $3x+1=x^2-1$, so $x^2-3x-2=0$.
4. The quadratic formula gives $x=\frac{3+\sqrt{17}}{2}$ or $x=\frac{3-\sqrt{17}}{2}$. Neither candidate is $1$ or $-1$, so both are valid.

**Answer:** $\frac{3+\sqrt{17}}{2}$ and $\frac{3-\sqrt{17}}{2}$

### Example 3 — the hard version

> Let $f(x)=\frac{x^2-5x+6}{x-2}$. Identify any hole and the function's oblique asymptote.

**Thinking:** A common factor can create a hole, while the quotient after cancellation describes the line the graph follows. I must report the missing point as well as the asymptote.

**Solution:**

1. The original denominator gives $x\ne 2$.
2. Factor the numerator: $x^2-5x+6=(x-2)(x-3)$.
3. Cancel the common factor to get $f(x)=x-3$, still with $x\ne 2$.
4. The missing point has $x=2$ and would have $y=2-3=-1$, so the hole is $(2,-1)$.
5. The simplified line $y=x-3$ is the oblique asymptote because the numerator's degree is one greater than the denominator's degree.

**Answer:** Hole $(2,-1)$; oblique asymptote $y=x-3$

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

**1.** For $x\ne -3$, which expression is equivalent to $\frac{x^2-9}{x+3}$?

- A) $x-3$
- B) $x+3$
- C) $x^2-6$
- D) $\frac{x-3}{x+3}$

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

**7.** Which expression is equivalent to $\frac{1}{x-2}+\frac{2}{x+2}$, where $x\ne 2,-2$?

- A) $\frac{3x}{x^2-4}$
- B) $\frac{3x-2}{x^2-4}$
- C) $\frac{3x+2}{x^2-4}$
- D) $\frac{3}{2x}$

**8.** What is the solution to $\frac{x}{x-3}=2$? *(student-produced response)*

**9.** The function $g(x)=\frac{3x+2}{x-5}$ has which horizontal and vertical asymptotes?

- A) Horizontal $y=3$ and vertical $x=5$
- B) Horizontal $y=5$ and vertical $x=3$
- C) Horizontal $y=2$ and vertical $x=5$
- D) Horizontal $y=0$ and vertical $x=-5$

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** Which statement correctly solves $\frac{x-2}{x-2}=0$?

- A) $x=0$
- B) $x=2$
- C) $x=-2$
- D) There is no solution

**11.** Let $h(x)=\frac{x^2-5x+6}{x-2}$. What is the $y$-coordinate of the hole in the graph of $h$? *(student-produced response)*

**12.** The equation $-\frac{1}{x-1}+\frac{3}{x-3}=1$ has two solutions. What is the sum of the solutions?

- A) $3$
- B) $5$
- C) $6$
- D) $8$

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
    | 7 | B |
    | 8 | 6 |
    | 9 | A |
    | 10 | D |
    | 11 | -1 |
    | 12 | C |

??? success "Show full solutions"
    **1.** Factor the numerator: $x^2-9=(x-3)(x+3)$. Since $x\ne -3$, cancel $x+3$ to get $x-3$. The answer is **A**.

    **2.** The denominators match, so add the numerators: $\frac{2+3}{x+1}=\frac{5}{x+1}$. The answer is **A**.

    **3.** The denominator cannot be zero. Solve $x-4=0$, so the excluded value is $4$.

    **4.** Rewrite the division as multiplication by the reciprocal: $\frac{3x}{x+2}\times\frac{x+2}{6}=\frac{x}{2}$. At $x=8$, the value is $4$. The answer is **B**.

    **5.** The restriction is $x\ne 1$. Multiply by $x-1$: $3=x-1$, so $x=4$, which is allowed. The answer is **D**.

    **6.** Combine the left side: $\frac{3}{x+3}=\frac{3}{5}$. Since $x\ne -3$, cross-multiply to get $15=3x+9$, so $x=2$. The answer is **C**.

    **7.** The common denominator is $(x-2)(x+2)=x^2-4$. The numerator is $(x+2)+2(x-2)=3x-2$, giving $\frac{3x-2}{x^2-4}$. The answer is **B**.

    **8.** The restriction is $x\ne 3$. Multiply by $x-3$: $x=2x-6$. Thus $x=6$, which is allowed.

    **9.** The denominator is zero at $x=5$, so the vertical asymptote is $x=5$. The degrees match, so the horizontal asymptote is the ratio of leading coefficients, $y=3$. The answer is **A**.

    **10.** The expression is undefined at $x=2$, so $x=2$ cannot be a solution. For every allowed $x$, $\frac{x-2}{x-2}=1$, never $0$. There is no solution, so the answer is **D**.

    **11.** Factor: $h(x)=\frac{(x-2)(x-3)}{x-2}=x-3$, with $x\ne 2$. The missing point has $y=2-3=-1$.

    **12.** The restrictions are $x\ne 1,3$. Multiply by $(x-1)(x-3)$: $-(x-3)+3(x-1)=(x-1)(x-3)$. Simplifying gives $2x=x^2-4x+3$, or $x^2-6x+3=0$. By the sum-of-roots relationship, the two solutions have sum $6$. Neither solution is $1$ or $3$, so both are allowed. The answer is **C**.

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
