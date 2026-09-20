---
lesson_id: "3.10"
title: "Transformations of Graphs"
level: 3
domain: advanced_math
prereqs: ["3.4"]
est_minutes: 45
status: verified
verified_by: "math-verifier 2026-09-20"
---

# 3.10 Transformations of Graphs

!!! abstract "Why this is on the test"
    Transformations of graphs appear in about one question on a typical digital SAT. You may need to predict a graph's movement, write its new equation, or connect the same transformation across a quadratic, absolute-value, or exponential function.

**Before you start, you should be able to:** read a function equation, substitute an input, and identify a quadratic's vertex.

**By the end of this lesson you will be able to:**

- Predict the effect of shifts, stretches and reflections on a graph
- Write the transformed equation from a described change
- Recognise transformations across function families

---

## The idea

Start with the function $y=f(x)$. Changes outside $f$ affect output values, so they move or stretch the graph vertically. Changes inside $f$ affect input values, so they move or stretch it horizontally.

$$
y=a f\bigl(b(x-h)\bigr)+k
$$

Here $h$ shifts the graph right by $h$, and $k$ shifts it up by $k$. A negative $a$ reflects across the $x$-axis; $|a|>1$ gives a vertical stretch. A negative $b$ reflects across the $y$-axis; $|b|>1$ gives a horizontal compression. For the common form $f(b(x-h))$, the horizontal scale factor is $1/|b|$.

The inside sign reverses the direction: $f(x+3)=f(x-(-3))$ shifts left 3, while $f(x-3)$ shifts right 3. The safest method is to track an input-output point. If $(u,v)$ lies on $y=f(x)$, then for

$$
g(x)=a f\bigl(b(x-h)\bigr)+k
$$

the matching point satisfies $b(x-h)=u$, so $x=h+u/b$, and its output is $av+k$. This method also handles domains: transform the input interval in the same way as an $x$-coordinate.

To write an equation from words, begin with the parent function and add the horizontal change inside it. A right shift of $h$ uses $f(x-h)$; a left shift uses $f(x+h)$. Add vertical stretch or reflection outside the function, then add the vertical shift. For example, starting with $f(x)=x^2$, a reflection across the $x$-axis, a right shift of 2, and an upward shift of 5 gives $g(x)=-(x-2)^2+5$. Reading the vertex gives a quick check: it should move from $(0,0)$ to $(2,5)$ and open downward.

For a table or a stated point, do not rely on a sketch. Match the old input to the transformed input, calculate the new input, and then transform the output. This separates horizontal work from vertical work and prevents a reflection from being applied to the wrong coordinate. The same routine works for lines, parabolas, absolute-value graphs, and exponential graphs.

The rule works for every family. For instance, $|x|$ with a right shift becomes $|x-4|$, $2^x$ with a reflection and upward shift becomes $-2^x+6$, and $(x-2)^2$ with a vertical stretch becomes $3(x-2)^2$. The parent function changes, but the transformation language does not.

!!! tip "Desmos shortcut"
    Enter the original and transformed equations as separate lines when you want to check a shift or reflection. Use a known point or vertex for the exact answer; the graph window is a check, not the source of the equation.

## Worked examples

### Example 1 — routine

> The graph of $y=f(x)$ contains the point $(2,-1)$. The function $g$ is defined by $g(x)=f(x+3)-2$. What corresponding point lies on the graph of $g$?

**Thinking:** The input $x+3$ must equal the old input 2, so the new input moves left 3. The outside $-2$ moves the output down 2.

**Solution:**

1. Set the new input equal to the old input: $x+3=2$, so $x=-1$.
2. Transform the old output: $-1-2=-3$.
3. The corresponding point is $(-1,-3)$.

**Answer:** $(-1,-3)$

### Example 2 — typical test difficulty

> The parent function $f(x)=|x|$ is transformed to $g(x)=-2f(x+1)+3$. Describe the transformations and state the vertex of $g$.

**Thinking:** The inside $x+1$ shifts the graph left 1. The factor $-2$ reflects it across the $x$-axis and stretches it vertically by 2. The outside $+3$ shifts it up 3.

**Solution:**

1. The vertex $(0,0)$ moves to $(-1,0)$ from the inside shift.
2. Reflection and vertical stretch keep the input $-1$ fixed and send output 0 to $-2(0)=0$.
3. Adding 3 sends the vertex to $(-1,3)$.

**Answer:** left 1, reflection across the $x$-axis, vertical stretch by 2, up 3; vertex $(-1,3)$

### Example 3 — the hard version

> The function $f$ has domain $[-2,4]$ and contains the point $(1,5)$. Define $g(x)=3f\left(\frac{x-6}{2}\right)-4$. State the domain of $g$ and the corresponding point from $(1,5)$.

**Thinking:** The input of $f$ is $(x-6)/2$. I will transform the domain endpoints and solve that input equation for the new location of the known point.

**Solution:**

1. For the domain, require $-2\le (x-6)/2\le4$. Multiplying by 2 gives $-4\le x-6\le8$, so $2\le x\le14$.
2. For the known point, set $(x-6)/2=1$. Then $x-6=2$, so $x=8$.
3. Transform the output: $3(5)-4=11$.
4. Therefore the new point is $(8,11)$.

**Answer:** domain $[2,14]$; corresponding point $(8,11)$

## Where students go wrong

!!! warning "Common errors"
    - **Reading $f(x+3)$ as a right shift.** The input must equal the old input, so $x+3=u$ gives a new input $u-3$: the graph moves left.
    - **Treating an outside number as horizontal.** In $3f(x)$, the 3 changes outputs. In $f(3x)$, it changes inputs and compresses horizontally.
    - **Forgetting the order of a composite input.** In $f((x-6)/2)$, solve $(x-6)/2=u$ rather than moving a point by 6 and then dividing its output.
    - **Moving a domain like an output.** Domain endpoints are input values, so horizontal transformations apply to them; vertical changes do not.
    - **Assuming every family transforms differently.** The parent function changes, but input transformations remain horizontal and outside transformations remain vertical.

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** Let $f(x)=x^2$. The function $g$ is defined by $g(x)=f(x-3)+2$. Which statement describes the transformation from $f$ to $g$?

- A) left 3 and up 2
- B) right 3 and down 2
- C) right 3 and up 2
- D) left 3 and down 2

**2.** Let $f(x)=x^2-2x$. Which equation reflects the graph of $f$ across the $x$-axis and then shifts it up 4 units?

- A) $g(x)=-f(x)-4$
- B) $g(x)=f(-x)+4$
- C) $g(x)=-f(x)+4$
- D) $g(x)=f(x+4)$

**3.** The graph of $y=f(x)$ contains the point $(2,-1)$. If $g(x)=f(x+3)-2$, what is the $y$-coordinate of the corresponding point on $g$? *(student-produced response)*

**4.** A table gives $f(0)=1$, $f(1)=3$, and $f(2)=5$. If $g(x)=f(x-2)+1$, what is $g(2)$?

- A) $1$
- B) $2$
- C) $3$
- D) $6$

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** Let $p(x)=|x|$ and $q(x)=-2p(x+1)+3$. Which description is correct?

- A) left 1, reflection across the $x$-axis, vertical stretch by 2, up 3
- B) right 1, reflection across the $y$-axis, horizontal stretch by 2, up 3
- C) left 1, vertical stretch by 2, down 3
- D) right 1, reflection across the $x$-axis, vertical stretch by 2, down 3

**6.** The domain of $f$ is $[-2,5]$. What is the domain of $g(x)=f(x-4)+1$?

- A) $[-6,1]$
- B) $[-2,9]$
- C) $[2,9]$
- D) $[2,6]$

**7.** The graph of $y=3^x$ is transformed to $y=3^{x-2}-4$. Which change occurs?

- A) left 2 and up 4
- B) right 2 and down 4
- C) right 4 and down 2
- D) horizontal compression by 2 and down 4

**8.** The graph of $y=f(x)$ contains the point $(-2,6)$. The function $g$ is defined by $g(x)=-f(x-4)+1$. What corresponding point lies on $g$?

- A) $(-6,-5)$
- B) $(2,-5)$
- C) $(2,7)$
- D) $(-2,7)$

**9.** A table gives $f(0)=2$, $f(1)=5$, and $f(2)=10$. A second table gives $g(2)=-1$, $g(3)=2$, and $g(4)=7$. Which rule connects the functions?

- A) $g(x)=f(x+2)-3$
- B) $g(x)=f(x-2)-3$
- C) $g(x)=f(x-2)+3$
- D) $g(x)=2f(x-2)+3$

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** The graph of $y=f(x)$ contains the point $(-2,5)$. If $g(x)=-f(2x+6)+4$, what is the $y$-coordinate of the corresponding point on $g$? *(student-produced response)*

**11.** The vertex of $f(x)$ is $(-2,4)$. Define $g(x)=2f(-x+3)-1$. What is the vertex of $g$?

- A) $(1,7)$
- B) $(5,7)$
- C) $(5,9)$
- D) $(-5,7)$

**12.** The tables show $f(0)=1$, $f(1)=3$, $f(2)=7$ and $g(3)=5$, $g(4)=9$, $g(5)=17$. If $g(x)=2f(x-h)+k$, what is $k$? *(student-produced response)*

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | C |
    | 2 | C |
    | 3 | $-3$ |
    | 4 | B |
    | 5 | A |
    | 6 | C |
    | 7 | B |
    | 8 | B |
    | 9 | B |
    | 10 | $-1$ |
    | 11 | B |
    | 12 | $3$ |

??? success "Show full solutions"
    **1.** The input $x-3$ shifts the graph right 3. The outside $+2$ shifts every output up 2. The answer is **C**.

    **2.** Reflection across the $x$-axis changes $f(x)$ to $-f(x)$. Adding 4 shifts the result up 4, so $g(x)=-f(x)+4$. The answer is **C**.

    **3.** The new input is found from $x+3=2$, giving $x=-1$. The new output is $-1-2=-3$.

    **4.** In $g(2)=f(2-2)+1=f(0)+1$, substitute $f(0)=1$. Thus $g(2)=2$, which is **B**.

    **5.** The input $x+1$ shifts left 1. The factor $-2$ reflects across the $x$-axis and stretches vertically by 2. The outside $+3$ shifts up 3. The answer is **A**.

    **6.** The input to $f$ must be between $-2$ and 5: $-2\le x-4\le5$. Adding 4 throughout gives $2\le x\le9$. The answer is **C**.

    **7.** Replacing $x$ by $x-2$ shifts right 2. Subtracting 4 outside the exponent shifts down 4. The answer is **B**.

    **8.** Set the new input equal to the old input: $x-4=-2$, so $x=2$. The new output is $-6+1=-5$. The point is $(2,-5)$, which is **B**.

    **9.** The input 2 in $g(2)$ matches the input 0 in $f(0)$, so the horizontal shift is right 2: use $f(x-2)$. The outputs change from $2,5,10$ to $-1,2,7$, which is subtracting 3. Thus $g(x)=f(x-2)-3$, **B**.

    **10.** Match the transformed input to the old input: $2x+6=-2$, so $2x=-8$ and $x=-4$. The new output is $-f(-2)+4=-5+4=-1$.

    **11.** The old vertex input is $-2$. Solve the transformed input equation $-x+3=-2$, giving $x=5$. The output becomes $2(4)-1=7$. The vertex is $(5,7)$, **B**.

    **12.** The input pairs show that $g(3)$ uses $f(0)$, so $h=3$. Then $g(3)=2f(0)+k$ gives $5=2(1)+k$, so $k=3$.

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** the student reversing the direction of an inside shift, especially reading $f(x+1)$ as right 1.
    - **Diagnostic question:** If $(u,v)$ is on $f$, ask the student to write the equation that finds the new input before calculating the new output.
    - **If they are struggling:** return to Lesson 3.4 for vertex form and point substitution.
    - **If they are flying:** ask them to derive the domain transformation for $f((x-h)/b)$ with an arbitrary interval.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`.

---

*Previous: [3.9 Nonlinear Systems](3-9-nonlinear-systems.md) · Next: [4.1 Lines, Angles and Parallel Lines](../level-4-geometry/4-1-lines-angles-and-parallel-lines.md)*

!!! info "Not written yet"
    This lesson is planned but not yet drafted.
    Generate it with `/build-lesson 3.10`.
