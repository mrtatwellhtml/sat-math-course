---
lesson_id: "3.4"
title: "Quadratic Functions: Forms and Graphs"
level: 3
domain: advanced_math
prereqs: ["3.3"]
est_minutes: 55
status: verified
verified_by: "math-verifier 2026-09-18"
---

# 3.4 Quadratic Functions: Forms and Graphs

!!! abstract "Why this is on the test"
    Roughly 2 to 3 questions per test hand you a quadratic in one form and ask for something a different form shows. Most often: give the vertex form, find the minimum value; or give the standard form, find where the graph crosses an axis.

**Before you start, you should be able to:** factor a quadratic and solve $ax^2 + bx + c = 0$ (lesson 3.3).

**By the end of this lesson you will be able to:**

- Move between standard, factored and vertex form, and say what each reveals
- Find vertex, axis of symmetry and intercepts
- Solve maximum and minimum problems in context

---

## The idea

Every quadratic graph is a parabola. The three forms are the same parabola wearing different clothes. Nothing about the curve changes when you rewrite it. What changes is which fact you can read without doing any work.

| Form | Looks like | What it reveals instantly |
|---|---|---|
| Standard | $f(x) = ax^2 + bx + c$ | the $y$-intercept, at $(0, c)$ |
| Factored | $f(x) = a(x - r)(x - s)$ | the $x$-intercepts, at $x = r$ and $x = s$ |
| Vertex | $f(x) = a(x - h)^2 + k$ | the vertex, at $(h, k)$ |

In all three, $a$ is the same number. If $a > 0$ the parabola opens upward and the vertex is the lowest point. If $a < 0$ it opens downward and the vertex is the highest point.

Read the question backwards. The words tell you which form you want.

- "Maximum value", "minimum value", "greatest height" $\rightarrow$ you want the vertex.
- "Crosses the $x$-axis", "zeros", "solutions" $\rightarrow$ you want the factors.
- "Value when $x = 0$", "starting amount", "initial height" $\rightarrow$ you want the constant in standard form.

You do not always need to rewrite. From standard form, the vertex sits at

$$x = -\frac{b}{2a}$$

That $x$ is also the axis of symmetry, the vertical line $x = -\dfrac{b}{2a}$ that the parabola folds onto itself across. To get the $y$-coordinate of the vertex, substitute that $x$ back into the function. Two steps, no completing the square.

Watch the sign in vertex form. In $f(x) = a(x - h)^2 + k$ the vertex is at $x = h$, and $h$ is the opposite of the number you see. So $f(x) = 2(x + 5)^2 - 3$ has its vertex at $(-5, -3)$.

One more habit worth building. A maximum or minimum **value** is the $y$-coordinate. The $x$-coordinate tells you *where* it happens, not *what* it is. Test writers price that confusion into the answer choices.

!!! tip "Desmos shortcut"
    Type the function into a blank line. Click the curve near its turning point and Desmos labels the vertex; click where it meets the axes and it labels the intercepts. For a max-value question, read the second number in the bracket. Faster than algebra when the coefficients are ugly.

---

## Worked examples

### Example 1 — routine

> The function $f$ is defined by $f(x) = x^2 - 8x + 11$. Write $f$ in vertex form and state the minimum value of $f$.

**Thinking:** The question asks for a minimum, so I want the vertex, not the roots. Since $a = 1 > 0$, the parabola opens upward and the vertex is the lowest point. Completing the square gives both things at once.

**Solution:**

1. Take half of $b$ and square it: half of $-8$ is $-4$, and $(-4)^2 = 16$. That is the constant needed to build a perfect square.
2. Add and subtract it: $f(x) = (x^2 - 8x + 16) - 16 + 11$, because adding $16$ and removing $16$ leaves the function unchanged.
3. Compress and tidy: $f(x) = (x - 4)^2 - 5$.
4. Read the vertex: $h = 4$, $k = -5$, so the vertex is $(4, -5)$. The minimum **value** is the $y$-coordinate.

**Answer:** $f(x) = (x - 4)^2 - 5$, minimum value $-5$.

### Example 2 — typical test difficulty

> A ball is thrown upward from a platform. Its height in feet after $t$ seconds is $h(t) = -16t^2 + 64t + 5$. What is the greatest height, in feet, the ball reaches?

**Thinking:** "Greatest height" means the vertex $y$-value. Here $a = -16 < 0$, so the parabola opens downward and a maximum exists. The vertex formula is quicker than completing the square with a coefficient of $-16$.

**Solution:**

1. Find the time at the vertex: $t = -\dfrac{b}{2a} = -\dfrac{64}{2(-16)} = 2$ seconds. That is when the ball turns around.
2. Substitute to get the height: $h(2) = -16(2)^2 + 64(2) + 5 = -64 + 128 + 5$.
3. Evaluate: $h(2) = 69$. The units are feet, and the question asked for a height, so this is the answer, not the time.

**Answer:** $69$ feet.

### Example 3 — the hard version

> In the $xy$-plane, the graph of $y = 4x^2 + cx + 9$, where $c$ is a constant, intersects the $x$-axis at exactly one point. What is a possible value of $c$?

**Thinking:** Nothing here is numeric enough to graph. "Exactly one point" is a statement about how many real solutions $4x^2 + cx + 9 = 0$ has, so this is a discriminant question dressed as a graph question. One solution means the discriminant is zero.

**Solution:**

1. Write the condition: one real solution means $b^2 - 4ac = 0$, with $a = 4$, $b = c$ and the constant term $9$.
2. Substitute: $c^2 - 4(4)(9) = 0$, so $c^2 - 144 = 0$.
3. Solve: $c^2 = 144$, so $c = 12$ or $c = -12$. The question asks for a possible value, so either one is accepted.

**Answer:** $12$ (or $-12$).

---

## Where students go wrong

!!! warning "Common errors"
    - **Sign flip in vertex form.** In $a(x - h)^2 + k$ the form has a minus sign built in, so $f(x) = (x + 5)^2 - 3$ has $h = -5$, not $5$. Say the form out loud as "$x$ minus $h$" every time, then ask what number makes the bracket zero. That number is the $x$-coordinate of the vertex.
    - **Giving the $x$-coordinate when asked for the value.** The maximum or minimum *value* is $k$, the $y$-coordinate; $h$ is only where it happens. Before writing your answer, reread the question and check whether it wants a time, a price, a length, or a height, a revenue, an area.
    - **Dropping the leading coefficient when completing the square.** With $3x^2 - 12x + 5$, you must factor the $3$ out of the first two terms first, and the number you add inside the bracket gets multiplied by $3$ on its way out. Write the factoring step on its own line instead of doing it in your head.
    - **Forgetting to divide by $2a$.** The vertex is at $-\dfrac{b}{2a}$, not $-b$ and not $-\dfrac{b}{a}$. When $a \neq 1$ this error is invisible in your working and fatal in your answer.
    - **Assuming the $y$-intercept is the maximum.** In a thrown-object problem, $c$ is the starting height, not the greatest height. They coincide only when the object starts at the top.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** The function $f$ is defined by $f(x) = (x - 3)(x + 5)$. At which values of $x$ does the graph of $y = f(x)$ cross the $x$-axis?

- A) $x = -5$ and $x = -3$
- B) $x = -5$ and $x = 3$
- C) $x = -3$ and $x = 5$
- D) $x = 3$ and $x = 5$

**2.** The function $g$ is defined by $g(x) = 2(x - 4)^2 + 7$. What is the minimum value of $g(x)$? *(student-produced response)*

**3.** The function $h$ is defined by $h(x) = x^2 - 6x + 11$. What is the equation of the axis of symmetry of the graph of $y = h(x)$?

- A) $x = -6$
- B) $x = -3$
- C) $x = 3$
- D) $x = 6$

**4.** The function $f$ is defined by $f(x) = (x - 1)(x - 8)$. The graph of $y = f(x)$ crosses the $y$-axis at the point $(0, k)$. What is the value of $k$? *(student-produced response)*

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** Which of the following is equivalent to $f(x) = x^2 + 10x + 21$?

- A) $f(x) = (x - 5)^2 - 4$
- B) $f(x) = (x + 5)^2 - 4$
- C) $f(x) = (x + 5)^2 + 4$
- D) $f(x) = (x + 10)^2 - 79$

**6.** A stone is launched upward from a ledge. Its height in feet after $t$ seconds is $h(t) = -16t^2 + 48t + 4$. What is the maximum height, in feet, the stone reaches?

- A) $1.5$
- B) $4$
- C) $40$
- D) $52$

**7.** A shop sells $80 - 2p$ scarves per week when the price is $p$ dollars each, so weekly revenue in dollars is $R(p) = p(80 - 2p)$. What price, in dollars, gives the greatest weekly revenue? *(student-produced response)*

**8.** The graph of $f(x) = a(x - 3)^2 - 8$, where $a$ is a constant, passes through the point $(1, 4)$. What is the value of $a$?

- A) $-6$
- B) $0.75$
- C) $1$
- D) $3$

**9.** A farmer uses $120$ feet of fencing to enclose a rectangular pen against a long barn wall. The wall forms one side, so the fencing covers the other three sides. What is the greatest possible area of the pen, in square feet? *(student-produced response)*

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** In the $xy$-plane, the graph of $y = x^2 + kx + 36$, where $k$ is a positive constant, touches the $x$-axis at exactly one point. What is the value of $k$?

- A) $6$
- B) $12$
- C) $36$
- D) $144$

**11.** The function $f$ is defined by $f(x) = 3x^2 - 12x + 5$ and can be written in the form $f(x) = a(x - h)^2 + k$, where $a$, $h$ and $k$ are constants. What is the value of $k$? *(student-produced response)*

**12.** The graph of $y = f(x)$ is a parabola that crosses the $x$-axis at $x = -2$ and $x = 6$ and passes through the point $(0, -36)$. What is the minimum value of $f(x)$?

- A) $-48$
- B) $-16$
- C) $2$
- D) $48$

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | B |
    | 2 | 7 |
    | 3 | C |
    | 4 | 8 |
    | 5 | B |
    | 6 | C |
    | 7 | 20 |
    | 8 | D |
    | 9 | 1800 |
    | 10 | B |
    | 11 | -7 |
    | 12 | A |

??? success "Show full solutions"
    **1.** The graph crosses the $x$-axis where $f(x) = 0$. A product is zero when a factor is zero, so $x - 3 = 0$ or $x + 5 = 0$. That gives $x = 3$ and $x = -5$. Each root is the opposite of the number inside its bracket. **B**

    **2.** The function is already in vertex form $a(x - h)^2 + k$ with $a = 2$, $h = 4$, $k = 7$. Since $a = 2 > 0$, the parabola opens upward and the vertex is the lowest point, at $(4, 7)$. The minimum value is the $y$-coordinate. Check: $g(4) = 2(0)^2 + 7 = 7$, and any other input makes $(x-4)^2$ positive, which raises the output. **7**

    **3.** Use $x = -\dfrac{b}{2a}$ with $a = 1$ and $b = -6$: $x = -\dfrac{-6}{2(1)} = 3$. The axis of symmetry is the vertical line $x = 3$. Confirm by symmetry: $h(2) = 4 - 12 + 11 = 3$ and $h(4) = 16 - 24 + 11 = 3$, equal outputs either side of $x = 3$. **C**

    **4.** The $y$-intercept is the output at $x = 0$. Substitute: $f(0) = (0 - 1)(0 - 8) = (-1)(-8) = 8$. So $k = 8$. Factored form does not show the $y$-intercept directly, so substitution is required. **8**

    **5.** Complete the square. Half of $10$ is $5$, and $5^2 = 25$. Write $f(x) = (x^2 + 10x + 25) - 25 + 21 = (x + 5)^2 - 4$. Check at $x = 0$: $(5)^2 - 4 = 21$, which matches the constant term of the original. The vertex is $(-5, -4)$. **B**

    **6.** Maximum height is the $y$-value of the vertex. Time at the vertex: $t = -\dfrac{48}{2(-16)} = 1.5$ seconds. Substitute: $h(1.5) = -16(1.5)^2 + 48(1.5) + 4 = -16(2.25) + 72 + 4 = -36 + 76 = 40$. The question asks for a height, so the answer is $40$ feet, not the time $1.5$. **C**

    **7.** Expand: $R(p) = 80p - 2p^2 = -2p^2 + 80p$. Since $a = -2 < 0$, the parabola opens downward and the vertex gives the greatest revenue. Price at the vertex: $p = -\dfrac{80}{2(-2)} = 20$. The question asks for the price, so the $x$-coordinate is what is wanted here. (The revenue there would be $R(20) = 20(80 - 40) = 800$ dollars.) **20**

    **8.** Substitute the point into the equation: $4 = a(1 - 3)^2 - 8$. Evaluate the bracket first, then square: $(1 - 3)^2 = (-2)^2 = 4$. So $4 = 4a - 8$, giving $12 = 4a$ and $a = 3$. Check: $3(1-3)^2 - 8 = 12 - 8 = 4$. **D**

    **9.** Let $x$ be the length of each of the two sides perpendicular to the barn. The remaining side uses $120 - 2x$ feet. Area is $A(x) = x(120 - 2x) = -2x^2 + 120x$. Since $a = -2 < 0$, the vertex gives the maximum. Vertex: $x = -\dfrac{120}{2(-2)} = 30$. Then the third side is $120 - 60 = 60$ feet and the area is $30 \times 60 = 1800$ square feet. **1800**

    **10.** Touching the $x$-axis at exactly one point means $x^2 + kx + 36 = 0$ has exactly one real solution, so the discriminant is zero: $k^2 - 4(1)(36) = 0$. Then $k^2 = 144$ and $k = 12$ or $k = -12$. The question says $k$ is positive, so $k = 12$. Check: $x^2 + 12x + 36 = (x + 6)^2$, which is zero only at $x = -6$. Note that $6$ is the vertex's $x$-coordinate reversed, not $k$. **B**

    **11.** Factor the leading coefficient out of the first two terms only: $f(x) = 3(x^2 - 4x) + 5$. Half of $-4$ is $-2$, and $(-2)^2 = 4$, so add and subtract $4$ inside the bracket: $f(x) = 3(x^2 - 4x + 4 - 4) + 5$. Then $f(x) = 3(x - 2)^2 - 12 + 5$, because the $-4$ inside is multiplied by the $3$ on its way out. So $f(x) = 3(x - 2)^2 - 7$ and $k = -7$. Check at $x = 0$: $3(4) - 7 = 5$, matching the original constant. **-7**

    **12.** The $x$-intercepts give factored form: $f(x) = a(x + 2)(x - 6)$. Use the point $(0, -36)$ to find $a$: $-36 = a(2)(-6) = -12a$, so $a = 3$. The vertex sits halfway between the intercepts, at $x = \dfrac{-2 + 6}{2} = 2$. Then $f(2) = 3(2 + 2)(2 - 6) = 3(4)(-4) = -48$. Since $a = 3 > 0$ the parabola opens upward, so this is the minimum value. Dropping the $a$ would give $-16$; giving the $x$-coordinate would give $2$. **A**

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** the student stating the vertex correctly and then writing the $x$-coordinate as the maximum value. Also watch question 11: if they write $k = -12 + 5$ as $-7$ without showing the $3 \times (-4)$ step, ask them where the $-12$ came from.
    - **Diagnostic question:** "Without graphing, what is the vertex of $y = -2(x + 7)^2 + 1$, and is it a maximum or a minimum?" A correct answer of $(-7, 1)$ and maximum shows both the sign rule and the role of $a$ have landed.
    - **If they are struggling:** return to 3.3 if the trouble is factoring or the discriminant; the completing-the-square work in this lesson assumes that fluency.
    - **If they are flying:** escalate to question 12, then ask them to redo it by expanding to standard form and using $-\dfrac{b}{2a}$, and to confirm both routes agree.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`

---

*Previous: [3.3 Solving Quadratic Equations](3-3-solving-quadratic-equations.md) · Next: [3.5 Exponential Functions: Growth and Decay](3-5-exponential-functions-growth-and-decay.md)*
