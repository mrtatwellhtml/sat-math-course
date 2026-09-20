---
lesson_id: "3.9"
title: "Nonlinear Systems"
level: 3
domain: advanced_math
prereqs: ["1.5", "3.4"]
est_minutes: 50
status: verified
verified_by: "math-verifier 2026-09-20"
---

# 3.9 Nonlinear Systems

!!! abstract "Why this is on the test"
    Nonlinear systems appear in roughly one challenging question on a typical digital SAT. You may need to find where a line and a parabola meet, decide how many solutions exist, or identify the parameter that makes a line tangent to a parabola.

**Before you start, you should be able to:** solve systems by substitution, solve quadratic equations, and read a parabola from its equation.

**By the end of this lesson you will be able to:**

- Solve a linear-quadratic system algebraically and graphically
- Determine the number of intersection points
- Use the discriminant to find a tangency condition

---

## The idea

A system asks for points that satisfy both equations. When one equation is a line and the other is a quadratic, substitute the line's expression for $y$ into the quadratic. The result is a quadratic equation in $x$. Each valid $x$ gives a point by substitution back into either original equation.

The number of intersection points is the number of real roots of that quadratic. For $ax^2+bx+c=0$, use the discriminant

$$
\Delta=b^2-4ac
$$

If $\Delta>0$, there are two intersection points. If $\Delta=0$, there is one intersection point: the line is tangent to the parabola. If $\Delta<0$, there are no real intersection points.

Graphically, enter both equations in Desmos as `y=...`. The crossing points are the solutions. For a precise answer, use substitution or the discriminant; a graph is a check, not a replacement for the algebra.

For a tangency condition, reduce the system to a quadratic containing the parameter, set its discriminant equal to zero, and solve for the parameter. Do not set the quadratic itself equal to zero unless the question asks for the tangency point.

The graph gives the same three cases a visual meaning. A line that crosses the parabola twice gives two solutions. A line that touches it at its vertex or another point gives one solution. A line that stays entirely above or below it gives no real solution. The algebra is more dependable when a graph is crowded or the intersection coordinates are not neat.

When the equations are written in different forms, move them into a common $y$-description before comparing them. For example, a system with $2y=4x+6$ has the line $y=2x+3$. Missing this division changes the line and changes every intersection.

A dependable routine is: isolate or identify $y$, set the two expressions equal, collect the quadratic in standard form, and then choose the shortest finish. Solve the quadratic when coordinates are requested. Use the discriminant when the question asks only for a count or a tangency condition. Finally, substitute a root into an original equation and check it if the question asks for a point. This routine prevents a graphing shortcut from hiding an algebra error.

The repeated root in a tangent case is also useful. If $ax^2+bx+c=0$ has $\Delta=0$, its only root is $x=-\frac{b}{2a}$. That value is the horizontal location where the line and parabola touch. You still need an original equation to find the corresponding $y$-coordinate.

---

## Worked examples

### Example 1 — routine

> Solve the system $y=x^2$ and $y=2x+3$.

**Thinking:** Both equations already give $y$, so set their right sides equal. The two roots will give the two possible $x$-coordinates.

**Solution:**

1. Set the expressions for $y$ equal: $x^2=2x+3$.
2. Rearrange: $x^2-2x-3=0$.
3. Factor: $(x-3)(x+1)=0$, so $x=3$ or $x=-1$.
4. Use $y=2x+3$. At $x=3$, $y=9$; at $x=-1$, $y=1$.

**Answer:** $(3,9)$ and $(-1,1)$

### Example 2 — typical test difficulty

> How many points of intersection are there between $y=x^2+2x+5$ and $y=-2x+1$?

**Thinking:** The question asks for a count, so I do not need to solve for the roots. I only need the discriminant after substitution.

**Solution:**

1. Set the equations equal: $x^2+2x+5=-2x+1$.
2. Rearrange: $x^2+4x+4=0$.
3. Here $a=1$, $b=4$, and $c=4$, so $\Delta=4^2-4(1)(4)=0$.
4. A zero discriminant means one real root and therefore one intersection point. The line is tangent to the parabola.

**Answer:** 1 intersection point

### Example 3 — the hard version

> The line $y=6x+b$ is tangent to the parabola $y=x^2-2x+20$. What are the value of $b$ and the $x$-coordinate of the tangency point?

**Thinking:** The parameter changes the line's vertical position. Tangency means the two possible $x$-values merge, so the reduced quadratic must have discriminant zero. After finding $b$, I can use the repeated root to locate the touch point.

**Solution:**

1. Set the equations equal: $x^2-2x+20=6x+b$.
2. Rearrange into standard quadratic form: $x^2-8x+(20-b)=0$.
3. Set the discriminant equal to zero: $(-8)^2-4(1)(20-b)=0$.
4. Solve: $64-80+4b=0$, so $4b=16$ and $b=4$.
5. With $b=4$, the quadratic is $x^2-8x+16=0$, or $(x-4)^2=0$. The repeated root is $x=4$.

**Answer:** $b=4$; the tangency point has $x$-coordinate $4$

---

## Where students go wrong

!!! warning "Common errors"
    - **Counting the roots of one original equation.** The parabola has many points, but only roots of the reduced equation satisfy both equations. Set the two $y$-values equal first.
    - **Using $b^2-4ac$ with the wrong $b$.** After substitution, collect every term before identifying $a$, $b$, and $c$. A sign error in the linear term can change two intersections into none.
    - **Calling two curves tangent because they look close.** Tangency requires one real solution, so verify that $\Delta=0$. A graph window can make a narrow crossing look like a touch.
    - **Finding an $x$-coordinate and stopping.** A system solution is a point, so substitute $x$ into an original equation to find $y$ when coordinates are requested. Use the equation that gives cleaner arithmetic.
    - **Forgetting which discriminant case matches the wording.** Two intersections means $\Delta>0$, one intersection means $\Delta=0$, and no real intersections means $\Delta<0$.
    - **Assuming a parameter must have a solution.** If the parameter cancels or the discriminant cannot equal zero, report that no parameter produces tangency. State the algebraic reason rather than guessing a value.

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** The graphs of $y=x^2$ and $y=3x+4$ intersect at two points. What is the larger $x$-coordinate of an intersection?

- A) $-1$
- B) $2$
- C) $3$
- D) $4$

**2.** Which pair gives the $x$-coordinates of the intersections of $y=x^2$ and $y=x+2$?

- A) $-2$ and $1$
- B) $-1$ and $2$
- C) $1$ and $2$
- D) $-1$ and $-2$

**3.** The graphs of $y=x^2$ and $y=4x-3$ intersect at two points. What is the larger $x$-coordinate? *(student-produced response)*

**4.** How many points of intersection are there between $y=x^2-6x+10$ and $y=2x+1$?

- A) 0
- B) 1
- C) 2
- D) 3

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** What are the intersection points of $y=x^2-2x+6$ and $y=4x$?

- A) $(3-\sqrt{3},12-4\sqrt{3})$ and $(3+\sqrt{3},12+4\sqrt{3})$
- B) $(2-\sqrt{3},8-4\sqrt{3})$ and $(2+\sqrt{3},8+4\sqrt{3})$
- C) $(3-\sqrt{2},12-4\sqrt{2})$ and $(3+\sqrt{2},12+4\sqrt{2})$
- D) $(3-\sqrt{3},4-2\sqrt{3})$ and $(3+\sqrt{3},4+2\sqrt{3})$

**6.** How many points of intersection are there between $y=x^2+3x+10$ and $y=-3x+1$?

- A) 0
- B) 1
- C) 2
- D) 4

**7.** The line $y=2x+1$ is tangent to the parabola $y=x^2+4x+k$. What is the value of $k$? *(student-produced response)*

**8.** The line $y=2x+b$ is tangent to the parabola $y=x^2-4x+5$. What is the value of $b$?

- A) $-8$
- B) $-4$
- C) $4$
- D) $8$

**9.** How many points of intersection are there between $y=(x-1)^2+2$ and $y=3$?

- A) 0
- B) 1
- C) 2
- D) 3

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** For the system $y=x^2-4x+q$ and $y=2x+1$, what is the least integer value of $q$ for which the graphs have no real points of intersection?

- A) $9$
- B) $10$
- C) $11$
- D) $12$

**11.** How many points of intersection are there between $y=2x^2-8x+9$ and $y=4x-3$?

- A) 0
- B) 1
- C) 2
- D) 3

**12.** The line $y=2x+b$ is tangent to the parabola $y=x^2-6x+34$. What is the value of $b$? *(student-produced response)*

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | D |
    | 2 | B |
    | 3 | 3 |
    | 4 | C |
    | 5 | A |
    | 6 | B |
    | 7 | 2 |
    | 8 | B |
    | 9 | C |
    | 10 | C |
    | 11 | C |
    | 12 | 18 |

??? success "Show full solutions"
    **1.** Set the equations equal: $x^2=3x+4$, so $x^2-3x-4=0$. Factoring gives $(x-4)(x+1)=0$, so the larger $x$-coordinate is $4$. The answer is **D**.

    **2.** Set the equations equal: $x^2=x+2$, so $x^2-x-2=0$. Factoring gives $(x-2)(x+1)=0$, so the $x$-coordinates are $-1$ and $2$. The answer is **B**.

    **3.** Set the equations equal: $x^2=4x-3$, so $x^2-4x+3=0$. Factoring gives $(x-1)(x-3)=0$. The larger $x$-coordinate is $3$.

    **4.** Set the equations equal: $x^2-6x+10=2x+1$, so $x^2-8x+9=0$. Its discriminant is $(-8)^2-4(1)(9)=28>0$, so there are 2 intersection points. The answer is **C**.

    **5.** Set the equations equal: $x^2-2x+6=4x$, so $x^2-6x+6=0$. The quadratic formula gives $x=3\pm\sqrt{3}$. Using $y=4x$ gives $y=12\pm4\sqrt{3}$ with matching signs. The answer is **A**.

    **6.** Set the equations equal: $x^2+3x+10=-3x+1$, so $x^2+6x+9=0$. The discriminant is $6^2-4(1)(9)=0$, so there is 1 intersection point. The answer is **B**.

    **7.** Set the equations equal: $x^2+4x+k=2x+1$, so $x^2+2x+(k-1)=0$. Tangency requires $\Delta=0$: $2^2-4(1)(k-1)=0$. Thus $4-4k+4=0$, so $k=2$.

    **8.** Set the equations equal: $x^2-4x+5=2x+b$, so $x^2-6x+(5-b)=0$. Tangency requires $(-6)^2-4(1)(5-b)=0$, so $36-20+4b=0$. Therefore $b=-4$, which is **B**.

    **9.** Set the equations equal: $(x-1)^2+2=3$, so $(x-1)^2=1$. Thus $x=0$ or $x=2$, giving 2 intersections. The answer is **C**.

    **10.** Set the equations equal: $x^2-4x+q=2x+1$, so $x^2-6x+(q-1)=0$. Its discriminant is $(-6)^2-4(q-1)=40-4q$. No real intersections require $40-4q<0$, so $q>10$. The least integer is $11$, the answer is **C**.

    **11.** Set the equations equal: $2x^2-8x+9=4x-3$, so $2x^2-12x+12=0$. Dividing by 2 gives $x^2-6x+6=0$, whose discriminant is $36-24=12>0$. Therefore there are 2 intersection points. The answer is **C**.

    **12.** Set the equations equal: $x^2-6x+34=2x+b$, so $x^2-8x+(34-b)=0$. Tangency requires $(-8)^2-4(1)(34-b)=0$, so $64-136+4b=0$. Therefore $4b=72$ and $b=18$.

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** the student solving the quadratic but forgetting to substitute back for $y$ when a point is requested.
    - **Diagnostic question:** After reducing a system to a quadratic, ask what the discriminant tells us before the student solves it.
    - **If they are struggling:** return to Lesson 1.5 for substitution in systems and Lesson 3.4 for quadratic graphs and equations.
    - **If they are flying:** ask them to explain why $\Delta=0$ means the line touches the parabola at one point rather than crossing it.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`.

---

*Previous: [3.8 Rational Expressions and Equations](3-8-rational-expressions-and-equations.md) · Next: [3.10 Transformations of Graphs](3-10-transformations-of-graphs.md)*
