---
lesson_id: "5.2"
title: "Desmos as a Weapon"
level: 5
domain: strategy
prereqs: ["3.4", "1.5"]
est_minutes: 50
status: verified
verified_by: "math-verifier 2026-09-18"
---

# 5.2 Desmos as a Weapon

!!! abstract "Why this is on the test"
    The Bluebook app has a full Desmos graphing calculator built in, and you can open it on any question in either math module. Most students leave it closed and grind through algebra by hand, which costs them time on questions a graph would have answered in ten seconds.

**Before you start, you should be able to:** solve a linear system and find the roots and vertex of a quadratic by hand, so you can tell when a graph agrees with you.

**By the end of this lesson you will be able to:**

- Solve systems, find roots and locate vertices by graphing
- Verify an algebraic answer in under fifteen seconds
- Recognise the question types where graphing beats algebra outright

---

## The idea

Desmos does not make you better at mathematics. It does something narrower and more useful: it converts certain algebra problems into graph-reading problems. Reading a graph is faster than manipulating symbols, and much harder to get wrong. There is no sign error to make on a screen.

So the skill is not "know Desmos". The skill is recognition, and you need a decision rule that fires before you pick up your pencil.

Here is the rule. **If the question asks where something happens, graph it. If it asks you to rearrange something, do the algebra.** "Where do these meet", "what is the maximum", "for what value of $x$" — those are locations, and locations live on graphs.

| Question looks like | Type this | Read this |
|---|---|---|
| Two equations, find $x$ or $y$ | Both equations, one per line | Click the intersection point |
| Solve $f(x)=0$, or "the solutions are" | The function as `y=...` | Click each $x$-intercept |
| Maximum, minimum, vertex | The quadratic as `y=...` | Click the turning point |
| "Which value satisfies..." | Both sides as separate lines | Look for a crossing at the candidate |
| A letter you cannot solve for | The equation with a slider letter | Drag until the picture is right |

The fourth row is the one students skip. Finished a problem by hand with eight seconds spare? Graph both sides of the original equation and check they cross where you said. That is a full verification, faster than redoing your work.

The fifth row is the escape hatch. Desmos offers a slider the moment you type an undefined letter, so a parameter question becomes one you can drag.

!!! tip "Type it exactly like this"
    - **A system.** Type `0.45x+1.6y=9.55` on line 1, `2.8x-0.35y=18.2` on line 2. Desmos graphs equations, not only functions, so you rearrange nothing. Click the crossing dot for the coordinates.
    - **Roots and vertex.** Type `y=2x^2-11x+12`. The caret makes an exponent; the right arrow brings you back out of it. Click the $x$-intercepts, or the turning point, which Desmos labels "minimum" or "maximum".
    - **A slider.** Type `y=x^2+kx+9`. A box appears offering `k`; click **all**, then drag until the question's condition is met.
    - **A window fix.** Scroll to zoom out, or use the wrench to set bounds by hand. Do this before concluding two curves never meet.

---

## Worked examples

### Example 1 — routine

> $$0.45x + 1.6y = 9.55$$
> $$2.8x - 0.35y = 18.2$$
>
> If $(x, y)$ is the solution to the system above, what is the value of $x + y$?

**Thinking:** Two equations, two unknowns, and coefficients that will produce fractions at every step if you eliminate by hand. The question asks where the lines meet. That is a location, so it is a graphing question.

**Solution:**

1. Type `0.45x+1.6y=9.55` on line 1. Type `2.8x-0.35y=18.2` on line 2.
2. Click the dot where the two lines cross. Desmos prints $(7, 4)$.
3. $x + y = 7 + 4 = 11$.

**Answer:** $11$

### Example 2 — typical test difficulty

> The function $f$ is defined by $f(x) = -2x^2 + 14x - 9$. What is the maximum value of $f$?

**Thinking:** "Maximum value" is the $y$-coordinate of the vertex. Completing the square here means dividing by $-2$ and carrying a fraction. The graph hands you the same number with one click, and it also protects you from the most common slip on this question type, which is reporting the $x$-coordinate.

**Solution:**

1. Type `y=-2x^2+14x-9`.
2. Click the top of the parabola. Desmos labels the point and shows $(3.5,\ 15.5)$.
3. The maximum **value** of $f$ is the output, so read the second coordinate.

**Answer:** $15.5$

### Example 3 — the hard version

> In the $xy$-plane, the graph of $y = x^2 - 6x + c$ intersects the graph of $y = 2x - 11$ at exactly one point. What is the value of the constant $c$?

**Thinking:** The algebraic route is to set the two expressions equal, collect to $x^2 - 8x + (c + 11) = 0$, and force the discriminant to zero. That works, but it is three lines of careful algebra under time pressure. A slider turns it into a picture: drag $c$ until the line is tangent to the parabola.

**Solution:**

1. Type `y=x^2-6x+c`. When the slider box appears, click **all**.
2. Type `y=2x-11` on the next line.
3. Drag the $c$ slider. At large $c$ the parabola sits above the line and there are no crossings. Lower $c$ and two crossings appear. The changeover is the tangent case. Set the slider's step to $1$ and land on $c = 5$; the two curves touch at a single point, $(4, -3)$.

**Answer:** $c = 5$

---

## Where students go wrong

!!! warning "Common errors"
    - **Typing a problem that was already finished.** Opening the calculator for $5x + 3 = 23$ costs more time than the one line of arithmetic. Before you type, ask whether the algebra is a single step. If it is, do the step.
    - **Handing in a decimal when the answer is exact.** Desmos will show you $1.5$ where the question wants $\tfrac{3}{2}$, or $0.333$ where it wants $\tfrac{1}{3}$. Student-produced responses accept either form, but a rounded decimal like $0.333$ can fall outside the accepted range. Enter the fraction, or fill all the available character spaces.
    - **Declaring "no solution" from a bad window.** The default view is roughly $-10$ to $10$. Curves that meet at $x = 47$ or $y = -300$ are off screen. Zoom out once before you conclude anything is empty.
    - **Trusting a clicked point that is not exact.** Desmos rounds the label it prints. A point shown as $(2.999,\ 5.001)$ is telling you $(3, 5)$. When the coordinates look almost-round, substitute back and confirm rather than transcribing the display.
    - **Reading the wrong coordinate.** On vertex questions, "maximum value" means the $y$-coordinate and "the value of $x$ at the maximum" means the $x$-coordinate. Underline which one the question asked for before you click.

!!! warning "When NOT to use it"
    Skip the calculator when the question is one step of arithmetic, when it is purely symbolic (rearrange this formula for $r$), when it gives you a word problem you have not yet turned into equations, and when it asks for a structural fact you can see — the number of solutions to $(x-4)^2 = 0$, or the $y$-intercept of $y = 3x + 7$. Typing is not free. Roughly five seconds per line is the cost, and on a question you could finish in eight, that is a loss.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** A question reads: "If $7x - 4 = 24$, what is the value of $x$?" Which approach is best?

A) Graph `y=7x-4` and `y=24` and click the crossing
B) Add $4$ and divide by $7$ by hand
C) Graph `y=7x-4-24` and click the $x$-intercept
D) Make a table of values for `y=7x-4`

**2.** $$3x + 2y = 16$$ $$5x - 4y = 12$$
If $(x, y)$ is the solution to the system above, what is the value of $x + y$?

A) $2$
B) $4$
C) $6$
D) $8$

**3.** What is the greater of the two solutions to $2x^2 - 11x + 12 = 0$? *(student-produced response)*

**4.** Which of these four questions is the strongest candidate for the graphing calculator?

A) "The formula $A = P(1 + r)^t$ gives... Solve for $r$."
B) "For what value of $x$ does $x^2 - 3x - 28 = 0$ and $x > 0$?"
C) "What is the $y$-intercept of the line $y = -6x + 11$?"
D) "If $3a = 12$, what is the value of $9a$?"

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** The function $f$ is defined by $f(x) = 3x^2 - 18x + 11$. What is the minimum value of $f$?

A) $-70$
B) $-16$
C) $3$
D) $11$

**6.** $$y = x^2 - 4x + 7$$ $$y = 2x + 2$$
The system above has two solutions. What is the greater of the two $y$-values? *(student-produced response)*

**7.** A student solves $3(x - 2)^2 = 48$ and writes $x = 6$. She then graphs `y=3(x-2)^2` and `y=48` to check. Which statement is true?

A) $x = 6$ is the only solution.
B) There is a second solution, $x = -2$.
C) There is a second solution, $x = -6$.
D) $x = 6$ is not a solution.

**8.** How many real solutions does the equation $x^2 + 1 = 2^x$ have?

A) $0$
B) $1$
C) $2$
D) $3$

**9.** In the $xy$-plane, the graph of $y = |2x - 7|$ intersects the graph of $y = 5$ at two points. What is the sum of the $x$-coordinates of those two points? *(student-produced response)*

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** In the $xy$-plane, the graph of $y = x^2 + kx + 9$ touches the $x$-axis at exactly one point, and $k > 0$. What is the value of $k$? *(student-produced response)*

**11.** $$x^2 + y^2 = 25$$ $$y = 2x - 5$$
The graphs of the two equations above intersect at two points. One of them lies in the first quadrant. What is the $x$-coordinate of that point? *(student-produced response)*

**12.** $$2x + 3y = 12$$ $$ax - 6y = 5$$
In the system above, $a$ is a constant. If the system has no solution, what is the value of $a$?

A) $-4$
B) $-2$
C) $2$
D) $4$

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | B |
    | 2 | C |
    | 3 | 4 |
    | 4 | B |
    | 5 | B |
    | 6 | 12 |
    | 7 | B |
    | 8 | D |
    | 9 | 7 |
    | 10 | 6 |
    | 11 | 4 |
    | 12 | A |

??? success "Show full solutions"
    **1.** **B.** This is one addition and one division: $7x = 28$, so $x = 4$. Opening the panel and typing two lines costs about ten seconds; the algebra costs about four. A and C both produce the right answer, which is the trap — a method can be correct and still be the wrong choice. D is slowest of all. *Check:* $7(4) - 4 = 24$.

    **2.** **C.** Type `3x+2y=16` and `5x-4y=12`. Click the intersection: $(4, 2)$. So $x + y = 6$.
    *Algebraic check:* double the first equation to get $6x + 4y = 32$, add the second to get $11x = 44$, so $x = 4$ and $y = 2$.
    A is the $y$-value alone. B is the $x$-value alone. D is the product $xy = 8$.

    **3.** **4.** Type `y=2x^2-11x+12`. The curve crosses the $x$-axis twice; click both. Desmos gives $(1.5, 0)$ and $(4, 0)$. The greater solution is $4$.
    *Algebraic check:* $2x^2 - 11x + 12 = (2x - 3)(x - 4)$, giving $x = \tfrac{3}{2}$ and $x = 4$. Note that if the question had asked for the *lesser* solution, both `3/2` and `1.5` are exact and both are accepted. Entering the fraction is the habit worth building, because it is the form that still works when the decimal does not terminate.

    **4.** **B.** "For what value of $x$" is a location question with a quadratic in it, and the extra condition $x > 0$ is settled by looking at which intercept sits to the right of the origin. Type `y=x^2-3x-28` and click the right-hand intercept: $x = 7$. A is symbolic rearrangement, which Desmos does not do. C you read straight off the equation. D is one step of arithmetic ($a = 4$, so $9a = 36$).

    **5.** **B.** Type `y=3x^2-18x+11` and click the bottom of the parabola. Desmos labels the minimum at $(3, -16)$. The minimum *value* is the output, $-16$.
    *Algebraic check:* the vertex sits at $x = -\tfrac{b}{2a} = \tfrac{18}{6} = 3$, and $3(9) - 18(3) + 11 = 27 - 54 + 11 = -16$.
    A comes from dropping the leading $3$ and completing the square on $x^2 - 18x + 11$. C is the $x$-coordinate. D is the constant term, which is the $y$-intercept, not the minimum.

    **6.** **12.** Type `y=x^2-4x+7` on one line and `y=2x+2` on the next. Two intersections appear. Click both: $(1, 4)$ and $(5, 12)$. The greater $y$-value is $12$.
    *Algebraic check:* set them equal, $x^2 - 4x + 7 = 2x + 2$, so $x^2 - 6x + 5 = 0$ and $(x-1)(x-5) = 0$. At $x = 5$, $y = 2(5) + 2 = 12$.

    **7.** **B.** Type `y=3(x-2)^2` and `y=48`. The horizontal line cuts the parabola twice, at $(6, 48)$ and $(-2, 48)$. The student found one root and stopped.
    *Algebraic check:* $(x-2)^2 = 16$ gives $x - 2 = \pm 4$, so $x = 6$ or $x = -2$. This is the fifteen-second verification in action: the graph shows two crossings, so an answer with one root is incomplete before you have re-read a single line of work.
    C comes from negating the answer instead of the quantity inside the square. D misreads the picture.

    **8.** **D.** Type `y=x^2+1` and `y=2^x`. In the default window you see crossings at $(0, 1)$ and $(1, 2)$. Zoom out. A third crossing appears near $x \approx 4.26$, where the exponential finally overtakes the parabola. Three solutions.
    *Check:* at $x = 4$, $x^2 + 1 = 17$ and $2^x = 16$, so the parabola is still above. At $x = 5$, $26 < 32$, so the exponential has passed it. A sign change between $4$ and $5$ guarantees a root there. This is exactly the window error from the warnings above: answering C means you never zoomed out.

    **9.** **7.** Type `y=abs(2x-7)` and `y=5`. The V-shape meets the line at $(1, 5)$ and $(6, 5)$. The sum of the $x$-coordinates is $1 + 6 = 7$.
    *Algebraic check:* $2x - 7 = 5$ gives $x = 6$; $2x - 7 = -5$ gives $x = 1$.

    **10.** **6.** Type `y=x^2+kx+9` and click **all** on the slider box. Drag $k$. Near $k = 0$ the parabola floats above the axis. As $k$ grows the curve slides down and to the left until it kisses the axis, then cuts through. It touches at exactly one point when $k = 6$ (and also at $k = -6$, which the condition $k > 0$ rules out).
    *Algebraic check:* one point of contact means the discriminant is zero, so $k^2 - 4(1)(9) = 0$ and $k = \pm 6$. Take $k = 6$. The double root is at $x = -3$, since $x^2 + 6x + 9 = (x+3)^2$.

    **11.** **4.** Type `x^2+y^2=25` and `y=2x-5`. Desmos graphs the circle directly — you do not split it into two square-root halves. The line cuts the circle at $(0, -5)$ and $(4, 3)$. The first-quadrant point is $(4, 3)$, so the $x$-coordinate is $4$.
    *Algebraic check:* substitute to get $x^2 + (2x - 5)^2 = 25$, so $x^2 + 4x^2 - 20x + 25 = 25$, so $5x^2 - 20x = 0$ and $5x(x - 4) = 0$. Then $x = 0$ or $x = 4$; only $x = 4$ gives a positive $y$.

    **12.** **A.** No solution means parallel, distinct lines. Type `2x+3y=12` and `ax-6y=5`, click **all** on the $a$ slider, and drag until the two lines stop crossing anywhere. That happens at $a = -4$.
    *Algebraic check:* the first line has slope $-\tfrac{2}{3}$. The second has slope $\tfrac{a}{6}$, and setting $\tfrac{a}{6} = -\tfrac{2}{3}$ gives $a = -4$. Confirm the lines are not identical: multiplying the first equation by $-2$ gives $-4x - 6y = -24$, and $-24 \neq 5$, so they are parallel and distinct.
    B comes from using $\tfrac{-6}{3} = -2$ as $a$ directly, forgetting to multiply by the $2$ in front of $x$. C copies the $x$-coefficient from the first equation. D uses the scale factor $+2$ and ignores the sign of $-6$.

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** the student who opens Desmos for every single question. Over-use looks like mastery and is a pacing leak. Time three questions with a stopwatch and show them the cost of typing on a question they could have done in one line.
    - **Diagnostic question:** hand them a fresh problem and ask, before they touch anything, "graph or algebra, and why?" If the answer is "graph, because it asks where they meet", it landed. If the answer is "graph, because I have a calculator", it did not.
    - **If they are struggling:** go back to 1.5 for solving systems by hand and 3.4 for quadratic structure. A student who cannot solve these on paper cannot tell when the graph is answering a different question from the one that was asked.
    - **If they are flying:** escalate to question 10, then ask them to invent a slider question of their own and hand it to you. Building one proves they see the structure.
    - **Run this live:** teach this lesson with the actual Bluebook practice app open, not on paper. Every keystroke here is meant to be pressed. Install Bluebook, start a practice test, and work the examples in the real panel so the syntax and the click targets are in their fingers before test day.

---

*Sources: [College Board — SAT Calculator Policy](https://satsuite.collegeboard.org/digital/what-to-bring-do/calculator-policy), [UWorld — Digital SAT Built-In Calculator: Features, Usage, and Strategies](https://collegeprep.uworld.com/blog/digital-sat-built-in-calculator-usage-and-tips/), [The Test Advantage — How to Use Desmos on the Digital SAT](https://thetestadvantage.com/blog/how-to-use-desmos-on-the-digital-sat-complete-guide)*

*Previous: [5.1 How the Adaptive Test Actually Works](5-1-how-the-adaptive-test-actually-works.md) · Next: [5.3 Pacing and Triage](5-3-pacing-and-triage.md)*
