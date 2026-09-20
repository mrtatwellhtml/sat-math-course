---
lesson_id: "3.7"
title: "Polynomials: Operations, Roots and Division"
level: 3
domain: advanced_math
prereqs: ["3.2"]
est_minutes: 50
status: verified
verified_by: "math-verifier 2026-09-20"
---

# 3.7 Polynomials: Operations, Roots and Division

!!! abstract "Why this is on the test"
    Polynomials appear in roughly one or two questions on a typical digital SAT. You may need to connect a factor to a root, use division to find a remainder, or read a polynomial's end behaviour from its equation.

**Before you start, you should be able to:** factor quadratics, use exponent rules, and interpret a function's zeros on the coordinate plane.

**By the end of this lesson you will be able to:**

- Relate factors, roots and x-intercepts to one another
- Divide polynomials and interpret the remainder
- Read end behaviour and multiplicity off a graph

---

## The idea

A number $r$ is a root or zero of $P(x)$ when $P(r)=0$. The same fact has three forms:

$$
P(r)=0\quad\Longleftrightarrow\quad x-r\text{ is a factor}\quad\Longleftrightarrow\quad (r,0)\text{ is an x-intercept}
$$

The Factor Theorem makes checking quick: substitute $r$ into the polynomial. A repeated factor records multiplicity. In $(x-2)^3(x+1)$, the root $2$ has multiplicity $3$ and the root $-1$ has multiplicity $1$.

Polynomial division has the same structure as integer division:

$$
P(x)=(x-r)Q(x)+R
$$

The remainder is a constant when the divisor is linear. By the Remainder Theorem, $R=P(r)$. For a divisor $x+4$, use $r=-4$, not $4$.

For end behaviour, look at the leading term. An even degree has matching directions on both ends; an odd degree has opposite directions. A positive leading coefficient sends the right end up, while a negative one sends it down. Thus a degree-five polynomial with a negative leading coefficient rises on the left and falls on the right.

Multiplicity tells you what happens at an x-intercept. Odd multiplicity means the graph crosses the x-axis. Even multiplicity means it touches and turns around. A triple root crosses with a flatter-looking turn than a single root. You do not need a picture if the factored equation gives the roots and multiplicities.

When a problem gives a table instead of a factored equation, look for inputs where the output is zero. Those rows identify x-intercepts. If a table also gives nearby outputs with opposite signs, the polynomial crosses between those inputs; equal-side signs can indicate a touch, but a factor or an explicit graph description is stronger evidence. On the SAT, the equation is usually enough to settle multiplicity without estimating from a drawing.

Division can also answer a context question. If $P(x)$ measures a quantity and $P(x)$ is divided by $x-r$, the remainder $P(r)$ is the value left after the factor is removed. A zero remainder means exact divisibility and confirms a root. A nonzero remainder means $x-r$ is not a factor, even when the quotient looks plausible. Keep the remainder attached to the quotient rather than treating it as another coefficient.

!!! tip "Desmos shortcut"
    Enter the factored equation, such as `y=-(x+2)^2(x-1)^3`, to inspect roots and directions. Use the factors and leading term to justify the answer; the graph is a check, not missing information.

---

## Worked examples

### Example 1 — routine

> The polynomial $P(x)=x^3-4x^2-x+4$ has an x-intercept at $x=4$. Find all of its x-intercepts.

**Thinking:** The given intercept tells me that $x-4$ is a factor. Grouping the remaining terms should expose the other factors.

**Solution:**

1. Group the terms: $P(x)=x^2(x-4)-1(x-4)$.
2. Factor the common binomial: $P(x)=(x-4)(x^2-1)$.
3. Use difference of squares: $P(x)=(x-4)(x-1)(x+1)$.
4. Set each factor equal to zero. The roots are $4$, $1$, and $-1$, so the x-intercepts are $(4,0)$, $(1,0)$, and $(-1,0)$.

**Answer:** $(-1,0)$, $(1,0)$, and $(4,0)$

### Example 2 — typical test difficulty

> When $2x^3-3x^2+4x-5$ is divided by $x-2$, what is the quotient and remainder?

**Thinking:** The divisor is $x-2$, so synthetic division uses $2$. I will carry every coefficient, including the zero coefficient for a missing term if one appears.

**Solution:**

1. Use coefficients $2,-3,4,-5$ with $2$ in synthetic division.
2. Bring down $2$. Multiply by $2$ to get $4$; add to $-3$ to get $1$.
3. Multiply $1$ by $2$ to get $2$; add to $4$ to get $6$.
4. Multiply $6$ by $2$ to get $12$; add to $-5$ to get $7$.
5. The first three results give $2x^2+x+6$, and the final result is the remainder. Therefore $P(x)=(x-2)(2x^2+x+6)+7$.

**Answer:** Quotient $2x^2+x+6$, remainder $7$

### Example 3 — the hard version

> The function $g(x)=-(x+2)^2(x-1)^3$ is described by its equation. At which root does the graph touch the x-axis and turn around, and what are the end directions?

**Thinking:** The even and odd multiplicities determine touch versus cross. The degree and leading coefficient determine the two ends independently of the roots.

**Solution:**

1. The factor $(x+2)^2$ gives root $-2$ with even multiplicity, so the graph touches and turns around there.
2. The factor $(x-1)^3$ gives root $1$ with odd multiplicity, so the graph crosses there.
3. The degree is $2+3=5$, which is odd, and the leading coefficient is negative.
4. For an odd-degree polynomial with a negative leading coefficient, the left end rises and the right end falls.

**Answer:** It touches at $x=-2$; the left end rises and the right end falls.

---

## Where students go wrong

!!! warning "Common errors"
    - **Changing the sign of a root.** From $x+3=0$, the root is $-3$, not $3$. Set the factor equal to zero before naming the root.
    - **Using the divisor's constant instead of its zero.** For division by $x+2$, use $-2$ in the Remainder Theorem. Check by writing the divisor as $x-r$.
    - **Dropping a remainder.** A nonzero remainder is part of the division result. Verify it by evaluating $P(r)$.
    - **Confusing multiplicity with the number of distinct roots.** $(x-1)^2$ has one root with multiplicity $2$, not two different roots. Even multiplicity means touch; odd multiplicity means cross.
    - **Reading end behaviour from the constant term.** End directions come from degree and leading coefficient. The constant affects the y-intercept, not the far-left or far-right direction.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** Which is a factor of $p(x)=x^3-2x^2-5x+6$?

- A) $x-1$
- B) $x+1$
- C) $x-2$
- D) $x+3$

**2.** If $f(x)=(x-3)(x+2)^2$, which x-intercept has multiplicity $2$?

- A) $(-2,0)$
- B) $(0,-2)$
- C) $(3,0)$
- D) $(2,0)$

**3.** What is the remainder when $2x^3+x^2-5x+4$ is divided by $x+1$? *(student-produced response)*

**4.** Which is the fully factored form of $x^2-9$?

- A) $(x-9)(x+1)$
- B) $(x-3)(x+3)$
- C) $(x-3)^2$
- D) $(x+9)(x-1)$

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** When $x^3+2x^2-5x-6$ is divided by $x+2$, which quotient and remainder result?

- A) Quotient $x^2-5$, remainder $4$
- B) Quotient $x^2+2x-1$, remainder $-4$
- C) Quotient $x^2+4x+3$, remainder $0$
- D) Quotient $x^2-3$, remainder $0$

**6.** A polynomial $P$ has $P(4)=0$. Which statement must be true?

- A) $x+4$ is a factor of $P(x)$.
- B) $x-4$ is a factor of $P(x)$.
- C) The remainder when $P(x)$ is divided by $x+4$ is $0$.
- D) $4$ is an x-intercept only if $P$ has degree $2$.

**7.** If $q(x)=3x^4-2x^3+x-8$, what is the end behaviour of its graph?

- A) It rises to the left and rises to the right.
- B) It falls to the left and falls to the right.
- C) It falls to the left and rises to the right.
- D) It rises to the left and falls to the right.

**8.** For $h(x)=(x-1)^2(x+4)$, what is the sum of the x-intercepts? *(student-produced response)*

**9.** The graph of $g(x)=(x+3)^3(x-2)^2$ is described by its equation. At which x-value does the graph cross the x-axis?

- A) $-3$
- B) $-2$
- C) $2$
- D) $3$

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** When $2x^3-3x^2-11x+6$ is divided by $x-3$, what is the remainder?

- A) $-12$
- B) $0$
- C) $6$
- D) $12$

**11.** A polynomial has roots $x=1$ with multiplicity $2$, $x=-2$ with multiplicity $1$, and $x=4$ with multiplicity $1$. What is the least possible degree? *(student-produced response)*

**12.** Let $F(x)=x^4-5x^2+4$. Which statement is true?

- A) $x=1$ and $x=4$ are the only roots.
- B) $x=-2,-1,1,2$ are roots and the graph crosses at each.
- C) $x=-2,-1,1,2$ are roots and the graph touches at each.
- D) $x=-4,-1,1,4$ are roots.

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | A |
    | 2 | A |
    | 3 | 8 |
    | 4 | B |
    | 5 | A |
    | 6 | B |
    | 7 | A |
    | 8 | -3 |
    | 9 | A |
    | 10 | B |
    | 11 | 4 |
    | 12 | B |

??? success "Show full solutions"
    **1.** By the Factor Theorem, test the zero of each candidate factor. $p(1)=1-2-5+6=0$, so $x-1$ is a factor. The answer is **A**.

    **2.** The factor $(x+2)^2$ gives root $x=-2$ with multiplicity $2$. Its coordinate is $(-2,0)$, so the answer is **A**.

    **3.** The divisor $x+1$ is $x-(-1)$, so use $-1$. By the Remainder Theorem, the remainder is $P(-1)=2(-1)^3+(-1)^2-5(-1)+4=-2+1+5+4=8$.

    **4.** Recognize a difference of squares: $x^2-9=x^2-3^2=(x-3)(x+3)$. The answer is **B**.

    **5.** Use synthetic division with $-2$ and coefficients $1,2,-5,-6$. Bring down $1$; multiply by $-2$ and add to get $0$; multiply by $-2$ and add to get $-5$; multiply by $-2$ and add to get $4$. The quotient is $x^2-5$ and the remainder is $4$, so the answer is **A**.

    **6.** The Factor Theorem says $P(r)=0$ exactly when $x-r$ is a factor. With $r=4$, $x-4$ is a factor. The answer is **B**.

    **7.** The leading term is $3x^4$. The degree is even, so both ends point the same way. The leading coefficient is positive, so both ends rise. The answer is **A**.

    **8.** The roots are $x=1$ and $x=-4$, so the x-intercepts have x-values $1$ and $-4$. Their sum is $1+(-4)=-3$.

    **9.** The root $x=-3$ has multiplicity $3$, which is odd, so the graph crosses there. The root $x=2$ has multiplicity $2$, so the graph touches and turns around there. The answer is **A**.

    **10.** The Remainder Theorem says the remainder from division by $x-3$ is $P(3)$. Evaluate: $2(3)^3-3(3)^2-11(3)+6=54-27-33+6=0$. The answer is **B**.

    **11.** The least degree counts multiplicities: $2+1+1=4$. A polynomial such as $(x-1)^2(x+2)(x-4)$ has that degree.

    **12.** Factor by treating the expression as a quadratic in $x^2$: $x^4-5x^2+4=(x^2-1)(x^2-4)=(x-1)(x+1)(x-2)(x+2)$. Each root has multiplicity $1$, so the graph crosses at each. The answer is **B**.

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** the student using $r$ instead of $-r$ for a divisor written as $x+r$.
    - **Diagnostic question:** If $P(5)=0$, what factor must $P(x)$ contain, and why?
    - **If they are struggling:** return to Lesson 3.2 for factoring and graphing polynomial expressions.
    - **If they are flying:** ask them to write a degree-five polynomial with a double root at $2$ and a triple root at $-1$, then predict both end directions.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`.

---

*Previous: [3.6 Radicals and Rational Exponents](3-6-radicals-and-rational-exponents.md) · Next: [3.8 Rational Expressions and Equations](3-8-rational-expressions-and-equations.md)*
