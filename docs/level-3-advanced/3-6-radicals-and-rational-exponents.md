---
lesson_id: "3.6"
title: "Radicals and Rational Exponents"
level: 3
domain: advanced_math
prereqs: ["0.3", "3.3"]
est_minutes: 45
status: drafted
verified_by:
---

# 3.6 Radicals and Rational Exponents

!!! abstract "Why this is on the test"
    Radicals appear in roughly one question on a typical digital SAT. You may need to rewrite a fractional exponent, simplify a nested radical, or solve an equation and reject a value created by squaring.

**Before you start, you should be able to:** use exponent rules and solve quadratic equations.

**By the end of this lesson you will be able to:**

- Convert between radical and rational-exponent notation
- Solve radical equations and check for extraneous solutions
- Simplify expressions with nested or fractional powers

---

## The idea

A radical is another way to write a fractional exponent. The index of the radical becomes the denominator, and the power on the radicand becomes the numerator:

$$
\sqrt[n]{a^m}=a^{m/n}
$$

For example, $\sqrt[3]{x^5}=x^{5/3}$ and $\sqrt{x}=x^{1/2}$. This translation lets you choose the form that makes the next step visible. A radical can be easier to read in a square-root equation; a rational exponent can be easier to simplify with exponent rules.

For a square root, simplify perfect-square factors first. Since $75=25\times3$, $\sqrt{75}=5\sqrt3$. Do not split a sum: $\sqrt{a+b}$ is not $\sqrt a+\sqrt b$.

To solve a radical equation, isolate one radical, state the domain, and then raise both sides to the matching power. Squaring can create a value that was not a solution to the original equation, so substitute every candidate into the original, not the squared equation. For $\sqrt{x+1}=x-1$, the left side is nonnegative, so the right side must also be nonnegative. That gives $x\ge1$ before any squaring.

For powers, multiply exponents when a power is raised to another power:

$$
(a^p)^q=a^{pq}
$$

Keep the base conditions in view. In this lesson, expressions involving fractional powers of a variable will state when the variable is positive or when a real-valued interpretation is intended.

You can move in both directions. To turn $x^{5/3}$ into radical notation, put the denominator on the root and leave the numerator as the power: $x^{5/3}=\sqrt[3]{x^5}$. You can also evaluate a number in stages. For $64^{2/3}$, take the cube root first, $\sqrt[3]{64}=4$, and then square: $4^2=16$. Choosing the order that uses a perfect root keeps the arithmetic exact.

When a coefficient is outside a radical, simplify the radicand before multiplying. For example, $3\sqrt{20}=3\sqrt{4\times5}=6\sqrt5$. The coefficient does not enter the radical unless you deliberately use $c\sqrt a=\sqrt{c^2a}$. Keeping the coefficient outside makes factors easier to see and reduces sign errors.

For nested radicals, work backwards from a square pattern. If $\sqrt{a+b\sqrt c}$ appears, look for $\sqrt m+\sqrt n$ whose square has $m+n=a$ and $2\sqrt{mn}=b\sqrt c$. Then square your proposed answer to confirm it. This is faster than repeatedly guessing decimal approximations, and the final check protects you from choosing the wrong signs.

!!! tip "Desmos shortcut"
    For a numerical radical equation, enter both sides as separate functions, such as `y=sqrt(x+1)` and `y=x-1`. An intersection is a candidate, not proof: substitute the coordinate into the original equation to check it.

---

## Worked examples

### Example 1 — routine

> Rewrite $\sqrt[4]{x^7}$ using a rational exponent.

**Thinking:** The root index is the denominator and the power on the radicand is the numerator. I only need to translate the notation.

**Solution:**

1. Read the index of the radical: the fourth root gives denominator $4$.
2. Read the power of the radicand: $x^7$ gives numerator $7$.
3. Combine them: $\sqrt[4]{x^7}=x^{7/4}$.

**Answer:** $x^{7/4}$

### Example 2 — typical test difficulty

> Solve $\sqrt{x+1}=x-1$ over the real numbers.

**Thinking:** The square root is nonnegative, so $x-1$ must be nonnegative. I will keep only candidates with $x\ge1$, then check the original equation after squaring.

**Solution:**

1. State the domain restriction from the right side: $x-1\ge0$, so $x\ge1$. The radicand also requires $x+1\ge0$, which is weaker.
2. Square both sides: $x+1=(x-1)^2=x^2-2x+1$.
3. Rearrange: $0=x^2-3x=x(x-3)$, so the algebra produces $x=0$ or $x=3$.
4. Reject $x=0$ because it violates $x\ge1$. Check $x=3$ in the original: $\sqrt{4}=2$ and $3-1=2$.

The check matters even though the algebra was correct. The squaring step preserves every genuine solution but can also admit a value with the wrong sign on the original right side.

**Answer:** $x=3$

### Example 3 — the hard version

> Simplify $\sqrt{7+4\sqrt3}$.

**Thinking:** The inside looks like the square of a sum, $(a+b)^2=a^2+2ab+b^2$. I need two positive terms whose squares add to $7$ and whose doubled product is $4\sqrt3$.

**Solution:**

1. Test the squares $4$ and $3$: they add to $7$, and $2\sqrt4\sqrt3=2(2)(\sqrt3)=4\sqrt3$.
2. Therefore, $7+4\sqrt3=(2+\sqrt3)^2$.
3. Take the principal square root. Because $2+\sqrt3$ is positive, $\sqrt{(2+\sqrt3)^2}=2+\sqrt3$.

The word principal means the nonnegative square root. A negative version, $-(2+\sqrt3)$, also squares to the same inside expression, but it is not the value returned by the radical symbol.

**Answer:** $2+\sqrt3$

---

## Where students go wrong

!!! warning "Common errors"
    - **Reversing the numerator and denominator.** In $\sqrt[5]{x^2}$, the $5$ is the denominator, so the result is $x^{2/5}$, not $x^{5/2}$. Say "index below, power above" before writing the exponent.
    - **Splitting a sum under a radical.** The expression $\sqrt{9+16}$ is $5$, not $3+4$ as a general rule. Only multiplication can be split: $\sqrt{ab}=\sqrt a\sqrt b$ when the real radicals are defined.
    - **Keeping every root after squaring.** Squaring removes sign information. Substitute each candidate into the original equation and check both the radicand and the unsquared side.
    - **Forgetting the sign of a principal square root.** $\sqrt{z^2}=|z|$, not always $z$. If $z$ is known to be positive, then the absolute value can be removed.
    - **Adding exponents when multiplying powers with the same base, then using that rule in the wrong place.** Add exponents for $a^p\times a^q$; multiply them for $(a^p)^q$. Identify the operation before choosing the rule.
    - **Using a decimal approximation too soon.** A calculator value such as $\sqrt3\approx1.732$ can hide an exact answer and make a later comparison unreliable. Keep radicals exact until the question asks for a decimal.
    - **Squaring both sides before isolating the radical.** If two radical terms remain on one side, the cross term created by squaring can disappear from the work. Isolate one radical first, then square and write the resulting equation line by line.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** Which expression is equivalent to $\sqrt[3]{x^5}$?

- A) $x^{3/5}$
- B) $x^{1/5}$
- C) $x^{5/3}$
- D) $x^{8/3}$

**2.** Which expression is the simplified form of $\sqrt{75}$?

- A) $5\sqrt3$
- B) $3\sqrt5$
- C) $25\sqrt3$
- D) $5\sqrt{15}$

**3.** Solve $\sqrt{x+5}=4$. *(student-produced response)*

**4.** What is the value of $16^{3/4}$?

- A) $4$
- B) $8$
- C) $12$
- D) $64$

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** What is the solution to $\sqrt{2x+3}=x+1$?

- A) $-\sqrt2$
- B) $0$
- C) $\sqrt2$
- D) $2$

**6.** For $x>0$, which expression is equivalent to $(x^{1/2})^{4/3}$?

- A) $x^{1/6}$
- B) $x^{2/3}$
- C) $x^{4/5}$
- D) $x^{7/6}$

**7.** Which expression is equivalent to $\sqrt{3+2\sqrt2}$?

- A) $1+\sqrt2$
- B) $\sqrt3+\sqrt2$
- C) $3+2\sqrt2$
- D) $2+\sqrt3$

**8.** What is the value of $\dfrac{81^{1/2}}{27^{1/3}}$? *(student-produced response)*

**9.** What is the solution to $\sqrt{x+1}=x-1$?

- A) $0$
- B) $1$
- C) $3$
- D) $4$

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** Solve $\sqrt{x+9}+\sqrt{x}=9$. *(student-produced response)*

**11.** For a positive number $a$, $a^{2/3}=9$. What is the value of $a^{1/3}$?

- A) $3$
- B) $\sqrt3$
- C) $9$
- D) $27$

**12.** Which expression is equivalent to $\sqrt{7+4\sqrt3}$?

- A) $2+\sqrt3$
- B) $4+\sqrt3$
- C) $2+2\sqrt3$
- D) $7+2\sqrt3$

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | C |
    | 2 | A |
    | 3 | 11 |
    | 4 | B |
    | 5 | C |
    | 6 | B |
    | 7 | A |
    | 8 | 3 |
    | 9 | C |
    | 10 | 16 |
    | 11 | A |
    | 12 | A |

??? success "Show full solutions"
    **1.** In $\sqrt[n]{x^m}=x^{m/n}$, the index $3$ is the denominator and the power $5$ is the numerator. Therefore $\sqrt[3]{x^5}=x^{5/3}$, so the answer is C.

    **2.** Factor out the greatest perfect square: $75=25\times3$. Then $\sqrt{75}=\sqrt{25}\sqrt3=5\sqrt3$, so the answer is A.

    **3.** Square both sides: $x+5=16$. Subtract $5$ to get $x=11$. The radicand is $16$, so the original equation checks: $\sqrt{11+5}=4$. The answer is $11$.

    **4.** Rewrite the fractional exponent as a root: $16^{3/4}=(\sqrt[4]{16})^3$. Since $\sqrt[4]{16}=2$, the value is $2^3=8$. The answer is B.

    **5.** Square both sides: $2x+3=(x+1)^2=x^2+2x+1$. Thus $x^2=2$, giving $x=\sqrt2$ or $x=-\sqrt2$. The original right side $x+1$ must be nonnegative. The negative candidate fails that condition, while $x=\sqrt2$ checks in the equation. The answer is C.

    **6.** Multiply exponents when a power is raised to a power: $(x^{1/2})^{4/3}=x^{(1/2)(4/3)}=x^{4/6}=x^{2/3}$. The answer is B.

    **7.** Expand $(1+\sqrt2)^2=1+2\sqrt2+2=3+2\sqrt2$. Both sides are positive, so taking the principal square root gives $\sqrt{3+2\sqrt2}=1+\sqrt2$. The answer is A.

    **8.** Evaluate each fractional power: $81^{1/2}=\sqrt{81}=9$ and $27^{1/3}=\sqrt[3]{27}=3$. Divide to get $9/3=3$. The answer is $3$.

    **9.** The square root is nonnegative, so $x-1\ge0$ and $x\ge1$. Squaring gives $x+1=(x-1)^2=x^2-2x+1$, so $x^2-3x=0$ and $x=0$ or $x=3$. The candidate $0$ violates the domain restriction and gives $1\ne-1$ in the original equation. The candidate $3$ gives $2=2$, so the answer is C.

    **10.** The domain requires $x\ge0$. Isolate one radical: $\sqrt{x+9}=9-\sqrt x$, so the right side must also be nonnegative. Square once: $x+9=81-18\sqrt x+x$, which gives $18\sqrt x=72$ and $\sqrt x=4$. Therefore $x=16$. Check in the original: $\sqrt{25}+\sqrt{16}=5+4=9$. The answer is $16$.

    **11.** Let $b=a^{1/3}$. Because $a$ is positive, $b$ is positive. Then $a^{2/3}=(a^{1/3})^2=b^2=9$, so $b=3$ rather than $-3$. This gives $a^{1/3}=3$, so the answer is A.

    **12.** Look for a square of the form $(a+b)^2=a^2+2ab+b^2$. Taking $a=2$ and $b=\sqrt3$ gives $a^2+b^2=4+3=7$ and $2ab=4\sqrt3$. Thus $7+4\sqrt3=(2+\sqrt3)^2$, and the principal square root is $2+\sqrt3$. The answer is A.

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** the student changing a radical into a fractional exponent with the numerator and denominator reversed, or accepting every root produced after squaring.
    - **Diagnostic question:** Ask, "Before you square $\sqrt{x+1}=x-1$, what must be true about $x-1$?" A response of "$x\ge1$" shows that the domain check is active.
    - **If they are struggling:** return to 0.3 for exponent rules and 3.3 for the quadratic equation created by squaring.
    - **If they are flying:** ask them to derive $\sqrt{7+4\sqrt3}$ by matching coefficients in $(a+b\sqrt3)^2$ rather than spotting the pattern.
    - **A useful follow-up:** give the student $\sqrt{10-6\sqrt{1}}$ and ask them to explain why it is not enough to match the two visible terms without checking the square. The point is to make exact verification a habit rather than a final ritual.
    - **For radical equations:** require a three-part margin note: radicand restriction, sign restriction from an isolated radical, and substitution check. Students who write all three usually stop losing points to extraneous roots.
    - **For notation:** ask the student to translate one expression in each direction before calculating: $\sqrt[6]{p^5}=p^{5/6}$ and $q^{7/4}=\sqrt[4]{q^7}$. This reveals whether the index and power roles are stable.

---

*Previous: [3.5 Exponential Functions: Growth and Decay](3-5-exponential-functions-growth-and-decay.md) · Next: [3.7 Polynomials: Operations, Roots and Division](3-7-polynomials-operations-roots-and-division.md)*
