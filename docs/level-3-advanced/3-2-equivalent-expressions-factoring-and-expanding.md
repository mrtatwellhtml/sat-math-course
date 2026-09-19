---
lesson_id: "3.2"
title: "Equivalent Expressions: Factoring and Expanding"
level: 3
domain: advanced_math
prereqs: ["0.4", "1.1"]
est_minutes: 55
status: verified
verified_by: "math-verifier 2026-09-19"
---

# 3.2 Equivalent Expressions: Factoring and Expanding

!!! abstract "Why this is on the test"
    Worth roughly 2-3 questions on a typical digital SAT. These questions
    rarely say "factor this" or "expand this." They show you an expression
    and ask which equivalent form is equal to it, or which form reveals a
    zero, a y-intercept, or a constant term. The algebra is only half the
    skill; the other half is knowing which direction to go.

**Before you start, you should be able to:** combine like terms and work
with variables and expressions (0.4), and solve linear equations in one
variable (1.1).

**By the end of this lesson you will be able to:**

- Factor quadratics, differences of squares and common factors fluently
- Expand and simplify polynomial products
- Choose the form of an expression the question is asking for

---

## The idea

An expression can be written in more than one form and still mean the same
thing for every value of the variable. $x^2 - 5x + 6$ and $(x - 2)(x - 3)$
are the same expression — one is easier to read for certain purposes.
That is the whole game in this lesson: the same information, arranged so
that a different fact jumps out.

Expanded (standard) form is built for reading the constant term and the
leading coefficient. Factored form is built for reading zeros — the values
of $x$ that make the expression equal to 0. If a question asks "for what
value of $x$ does this expression equal zero," you want factored form, even
if the question hands you standard form. If a question asks "what is the
value of this expression when $x = 0$," you want standard form, or you
substitute directly — factoring would be wasted effort. Before you touch a pencil,
decide what the question is actually asking for, then move toward the form
that shows it.

The two moves you need:

**Expanding** means distributing every term of one factor over every term
of the other, then collecting like terms.

$$
(x + a)(x + b) = x^2 + (a + b)x + ab
$$

**Factoring** reverses this. Three patterns cover almost everything the SAT
asks:

- **Common factor:** pull out what every term shares. $6x^2 + 9x = 3x(2x + 3)$.
- **Trinomial:** find two numbers that multiply to $ac$ and add to $b$ for
  $ax^2 + bx + c$.
- **Difference of squares:** $a^2 - b^2 = (a + b)(a - b)$. This one is
  worth memorizing on sight, because the SAT likes to disguise it — inside
  a higher power ($x^4 - 16$), with coefficients that are themselves squares
  ($9a^2 - 25b^2$), or hiding behind a common factor you have to remove
  first ($2x^2 - 50 = 2(x^2 - 25) = 2(x + 5)(x - 5)$).

!!! tip "Desmos shortcut"
    To check that two forms are equivalent, graph both. If the curves sit
    on top of each other for every $x$, the forms match. This is faster
    than re-expanding when you are checking your own work under time
    pressure, but it will not factor anything for you — use it to verify,
    not to solve.

---

## Worked examples

### Example 1 — routine
> Which expression is equivalent to $3x^2 + 12x$?
>
> - A) $3x(x + 4)$
> - B) $3(x^2 + 4x)$
> - C) $x(3x + 12)$
> - D) $3x^2(1 + 4x)$

**Thinking:** "Equivalent" with answer choices means factor and match — no
need to expand every option — pull the greatest common factor from the
given expression and see which choice already matches it fully factored.

**Solution:**

1. Find the GCF of $3x^2$ and $12x$: the coefficients share 3, and both
   terms share one factor of $x$, so the GCF is $3x$.
2. Divide each term by $3x$: $3x^2 \div 3x = x$ and $12x \div 3x = 4$.
3. Write the factored form: $3x^2 + 12x = 3x(x + 4)$.
4. Choices B and C pull out a smaller factor than possible ($3$ or $x$
   alone), leaving a common factor still trapped inside the parentheses —
   they are correct as equalities but not *fully* factored, and the
   question wants the match. D is not equivalent at all: distributing it
   gives $3x^2 + 12x^3$.

**Answer:** A

### Example 2 — typical test difficulty
> The expression $\dfrac{x^2 - 49}{x - 7}$ is equivalent to $x + k$ for
> $x \neq 7$. What is the value of $k$?

**Thinking:** The numerator is a difference of squares in disguise —
$x^2 - 49 = x^2 - 7^2$. Once you see that, the denominator cancels a whole
factor, not a lone term, and the answer falls out without polynomial
long division.

**Solution:**

1. Recognize $x^2 - 49$ as a difference of squares:
   $x^2 - 7^2 = (x + 7)(x - 7)$.
2. Rewrite the fraction: $\dfrac{(x + 7)(x - 7)}{x - 7}$.
3. Cancel the common factor $(x - 7)$, valid since $x \neq 7$ keeps the
   denominator nonzero: the expression simplifies to $x + 7$.
4. Match to $x + k$: $k = 7$.

**Answer:** $k = 7$

### Example 3 — the hard version
> An expression is given in factored form as $2x^2 - 8$, where the
> constant term of its fully expanded form is needed for a table entry.
> A student is also told the same expression, when fully factored over the
> integers, is $2(x - a)(x + a)$ for a positive constant $a$. What is the
> value of the constant term when $2x^2 - 8$ is written in the form
> $2(x - h)^2 + k$?

**Thinking:** Three forms, three different pieces of information, one
expression. This is exactly the "which form do I need" decision the whole
lesson is about. The question does not want the factored form (that gives
zeros) or the plain expanded form (that gives the constant term directly);
it wants vertex-style form, so completing the square is unavoidable here —
factoring will not get you $k$.

**Solution:**

1. Confirm the factored description first, since it is given as context:
   $2x^2 - 8 = 2(x^2 - 4) = 2(x - 2)(x + 2)$, so $a = 2$. This step is a
   check, not the answer — the question asks for $k$, not $a$.
2. Start from $2x^2 - 8$ and factor 2 out of the $x$-terms only:
   $2x^2 - 8 = 2(x^2) - 8$.
3. Since there is no linear $x$-term, completing the square is simpler
   than usual: $x^2 = (x - 0)^2$, so $2x^2 - 8 = 2(x - 0)^2 - 8$.
4. Match to $2(x - h)^2 + k$: $h = 0$ and $k = -8$.
5. Sanity check by expanding: $2(x - 0)^2 - 8 = 2x^2 - 8$. It matches the
   original expression, so the constant term $k = -8$ is confirmed without
   needing a linear term to complete the square around.

**Answer:** $k = -8$

---

## Where students go wrong

!!! warning "Common errors"
    - **Sign slip when expanding a product with a negative.** Distributing
      $-(x - 5)$ as $-x - 5$ instead of $-x + 5$ is the single most common
      error in this lesson. The SAT builds a distractor by expanding your
      expression with exactly this slip, so the wrong answer is sitting
      right there in the choices, waiting for you.
    - **Losing a factor when cancelling.** In
      $\dfrac{(x + 7)(x - 7)}{x - 7}$, some students cancel the $x - 7$ but
      also cross out a term from $(x + 7)$, or cancel an $x$ that appears
      inside a sum rather than as a whole factor — you can only cancel
      factors that multiply the entire numerator and denominator, never
      terms inside a sum. The SAT distractor for this is the expression
      with one leftover piece missing, such as $7$ instead of $x + 7$.
    - **Only recognizing difference of squares in its plainest form.**
      Students spot $x^2 - 9$ instantly but miss $x^4 - 16$ (which is
      $(x^2)^2 - 4^2$), $9a^2 - 25b^2$ (which is $(3a)^2 - (5b)^2$), and
      $2x^2 - 50$, where a common factor of 2 has to come out first before
      the difference of squares appears underneath.
    - **Factoring when the question wanted standard form, or vice versa.**
      A student who automatically factors every expression they see will
      waste time on a question that only asked for the constant term, and
      a student who never factors will miss a zero that is only visible in
      factored form. Read the question before picking up the pencil.
    - **Stopping at a partially factored answer.** Pulling out $3$ from
      $3x^2 + 12x$ and stopping at $3(x^2 + 4x)$ leaves a common factor of
      $x$ still trapped inside — always check whether what remains in the
      parentheses can be factored again.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** Which expression is $10x^2 - 15x$ written in fully factored form?

- A) $5x(2x - 3)$
- B) $5(2x^2 - 3x)$
- C) $x(10x - 15)$
- D) $5x^2(2 - 3x)$

**2.** When $(x + 6)(x - 4)$ is expanded and written in the form
$x^2 + bx + c$, what is the value of $b$? *(student-produced response)*

**3.** Which expression is equivalent to $x^2 - 64$?

- A) $(x - 8)(x + 8)$
- B) $(x - 8)^2$
- C) $(x - 32)(x + 32)$
- D) $x(x - 64)$

**4.** What is the constant term when $(x - 9)(x - 2)$ is written in
standard form $x^2 + bx + c$? *(student-produced response)*

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** The function $f$ is defined by $f(x) = x^2 - 5x - 24$. Which
equivalent form of $f(x)$ shows the zeros of the function as constants in
the expression?

- A) $(x - 8)(x + 3)$
- B) $x(x - 5) - 24$
- C) $(x + 8)(x - 3)$
- D) $(x - 4)(x - 6)$

**6.** A function is given by $g(x) = 2(x + 3)(x + 5)$. What is the value
of $g(0)$? *(student-produced response)*

**7.** Which expression is equivalent to $3x^2 - 48$?

- A) $3(x - 4)(x + 4)$
- B) $3(x - 16)(x + 16)$
- C) $(3x - 4)(x + 12)$
- D) $3(x - 4)^2$

**8.** When $(2x + 5)(3x - 4)$ is expanded and written in the form
$ax^2 + bx + c$, what is the value of $a + b$?
*(student-produced response)*

**9.** A company's cost function is $C(x) = x^2 - 14x + 45$ dollars, where
$x$ is the number of units produced. Which equivalent form of $C(x)$ shows
the values of $x$ for which the cost is \$0?

- A) $(x - 5)(x - 9)$
- B) $(x - 14)(x + 45)$
- C) $(x - 5)(x + 9)$
- D) $(x + 5)(x - 9)$

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** For all $x$, $x^2 + 5x - 36 = (x + p)(x + q)$, where $p$ and $q$
are integers and $p > q$. What is the value of $p - q$?
*(student-produced response)*

**11.** Which expression is equivalent to $(x + 4)^2 - 9$?

- A) $(x + 1)(x + 7)$
- B) $(x + 7)(x - 1)$
- C) $(x - 1)(x + 9)$
- D) $(x + 13)(x - 5)$

**12.** For $x \neq 3$ and $x \neq -3$, the expression
$\dfrac{x^2 - 9}{x - 3} \cdot \dfrac{2}{x + 3}$ simplifies to a constant.
What is that constant? *(student-produced response)*

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | A |
    | 2 | $b = 2$ |
    | 3 | A |
    | 4 | $c = 18$ |
    | 5 | A |
    | 6 | $g(0) = 30$ |
    | 7 | A |
    | 8 | $a + b = 13$ |
    | 9 | A |
    | 10 | $p - q = 13$ |
    | 11 | A |
    | 12 | $2$ |

??? success "Show full solutions"
    **1.** The GCF of $10x^2$ and $15x$ is $5x$: dividing each term by
    $5x$ gives $2x$ and $3$, so $10x^2 - 15x = 5x(2x - 3)$. Choices B and
    C pull out only part of the GCF ($5$ alone, or $x$ alone), leaving a
    common factor still trapped inside the parentheses — they are equal
    to the original but not fully factored. D distributes incorrectly:
    $5x^2(2 - 3x) = 10x^2 - 15x^3$, which is not equivalent at all.
    **Answer: A**

    **2.** Expand by distributing every term:
    $(x + 6)(x - 4) = x^2 - 4x + 6x - 24 = x^2 + 2x - 24$. Matching to
    $x^2 + bx + c$ gives $b = 2$. **Answer: $b = 2$**

    **3.** $x^2 - 64$ is a difference of squares:
    $x^2 - 8^2 = (x - 8)(x + 8)$. B applies the perfect-square-trinomial
    pattern instead, which only works when the middle term is present —
    here there is none. C takes half of 64 instead of the square root. D
    distributes $x$ across a difference that was never a common-factor
    expression, giving $x^2 - 64x$, not $x^2 - 64$. **Answer: A**

    **4.** Expand:
    $(x - 9)(x - 2) = x^2 - 2x - 9x + 18 = x^2 - 11x + 18$. The constant
    term is $18$. **Answer: $c = 18$**

    **5.** Find two numbers that multiply to $-24$ and add to $-5$: $-8$
    and $3$ work, so $x^2 - 5x - 24 = (x - 8)(x + 3)$, which displays the
    zeros $x = 8$ and $x = -3$ directly as constants. B is algebraically
    equal to the original ($x(x - 5) - 24 = x^2 - 5x - 24$) but is not
    factored, so it does not show the zeros. C swaps the signs inside
    each factor, which expands to $x^2 + 5x - 24$ — the middle term's
    sign is wrong, so it is not equivalent. D uses two numbers that
    multiply to $+24$ instead of $-24$, expanding to $x^2 - 10x + 24$.
    **Answer: A**

    **6.** The question only asks for the value at $x = 0$, so substitute
    directly instead of expanding:
    $g(0) = 2(0 + 3)(0 + 5) = 2(3)(5) = 30$. Expanding first would reach
    the same answer but wastes time the test does not give you.
    **Answer: $g(0) = 30$**

    **7.** First pull the common factor of 3:
    $3x^2 - 48 = 3(x^2 - 16)$. Then $x^2 - 16$ is a difference of
    squares: $x^2 - 4^2 = (x - 4)(x + 4)$, so
    $3x^2 - 48 = 3(x - 4)(x + 4)$. B uses 16 itself instead of its square
    root, 4. C never removes the common factor of 3 and instead tries to
    split it across two mismatched binomials, which introduces an extra
    $x$ term when expanded. D applies the perfect-square pattern instead
    of the difference-of-squares pattern, which only fits when the
    constant term is added, not subtracted. **Answer: A**

    **8.** Distribute every term:
    $(2x + 5)(3x - 4) = 6x^2 - 8x + 15x - 20 = 6x^2 + 7x - 20$. So
    $a = 6$ and $b = 7$, and $a + b = 13$. **Answer: $a + b = 13$**

    **9.** Find two numbers that multiply to $45$ and add to $-14$: $-5$
    and $-9$ work, so $x^2 - 14x + 45 = (x - 5)(x - 9)$, and the zeros
    $x = 5$ and $x = 9$ are exactly the production levels where the cost
    is \$0. B mistakes the coefficients $-14$ and $45$ themselves for the
    factors' constants. C and D each use one correct magnitude but the
    wrong sign pattern — both numbers in a product of $+45$ must have the
    same sign, and here they must both be negative since the sum is
    negative. **Answer: A**

    **10.** Find two integers that multiply to $-36$ and add to $5$: $9$
    and $-4$ work, since $9 \times (-4) = -36$ and $9 + (-4) = 5$. With
    $p > q$, that means $p = 9$ and $q = -4$, so
    $p - q = 9 - (-4) = 13$. **Answer: $p - q = 13$**

    **11.** Treat $(x + 4)^2 - 9$ as a difference of squares with
    $(x + 4)$ in place of the usual single variable:
    $(x + 4)^2 - 3^2 = \big((x + 4) - 3\big)\big((x + 4) + 3\big) = (x + 1)(x + 7)$.
    Check by expanding the original:
    $(x + 4)^2 - 9 = x^2 + 8x + 16 - 9 = x^2 + 8x + 7$, which matches
    $(x + 1)(x + 7) = x^2 + 8x + 7$. B flips the sign inside one factor,
    which changes the middle term. C and D use $4 - 9 = -5$ or $4 + 9 = 13$
    style arithmetic directly on the constants instead of taking the
    square root of 9 first, so neither is equivalent. **Answer: A**

    **12.** Factor the first numerator as a difference of squares:
    $x^2 - 9 = (x - 3)(x + 3)$. The expression becomes
    $\dfrac{(x - 3)(x + 3)}{x - 3} \cdot \dfrac{2}{x + 3}$. Since
    $x \neq 3$, the factor $(x - 3)$ cancels completely, leaving
    $(x + 3) \cdot \dfrac{2}{x + 3}$. Since $x \neq -3$, the factor
    $(x + 3)$ also cancels completely, leaving the constant $2$. Both
    cancellations are valid only because the excluded values keep every
    denominator nonzero. **Answer: $2$**

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** silent sign slips on distribution — have them say the
      sign out loud as they distribute, especially $-(x - 5)$ style terms
    - **Diagnostic question:** give them $4x^2 - 100$ and ask for the fully
      factored form; if they stop at $4(x^2 - 25)$ without finishing the
      difference of squares, that is the gap to close
    - **If they are struggling:** return to 0.4 (variables, expressions and
      like terms) to rebuild distribution before revisiting factoring
    - **If they are flying:** escalate to 3.3 (Solving Quadratic Equations),
      where these same factoring skills become the fast path to a solution
    - **Textbook cross-reference:** see `curriculum/reference-index.md`

---

*Previous: [3.1 Function Notation and Interpretation](3-1-function-notation-and-interpretation.md) · Next: [3.3 Solving Quadratic Equations](3-3-solving-quadratic-equations.md)*
