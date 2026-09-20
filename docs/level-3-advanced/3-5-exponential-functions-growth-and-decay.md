---
lesson_id: "3.5"
title: "Exponential Functions: Growth and Decay"
level: 3
domain: advanced_math
prereqs: ["0.3", "3.1"]
est_minutes: 55
status: verified
verified_by: "math-verifier 2026-09-20"
---

# 3.5 Exponential Functions: Growth and Decay

!!! abstract "Why this is on the test"
    Exponential models appear in roughly 1-2 questions, often in a table,
    graph, or short context. The payoff is recognizing the multiplier before
    the arithmetic begins.

**Before you start, you should be able to:** use exponent rules and identify and interpret functions.

**By the end of this lesson you will be able to:**

- Build an exponential model from a described growth or decay rate
- Distinguish linear from exponential change in words, tables and graphs
- Handle compounding over different time periods

---

## The idea

An exponential function changes by the same **percentage** or multiplier over equal time periods. Its general form is

$$
f(t)=a(b)^t
$$

Here, $a$ is the starting value and $b$ is the growth factor. For a growth rate of $r$, use $b=1+r$. For a decay rate of $r$, use $b=1-r$. Write a percentage as a decimal before using it.

Linear change adds the same amount each period; exponential change multiplies by the same amount each period. In a table, constant first differences suggest linear change, while a constant ratio between consecutive positive values suggests exponential change. On a graph, a line signals linear change, while exponential growth curves upward and exponential decay falls toward zero.

If the time period changes, change the exponent or convert the rate. A 10% increase every 6 months means a factor of $1.10$ for each 6-month period. Two years contains four such periods, so the model is $a(1.10)^4$. A quantity that doubles every 3 hours has factor $2$ per 3-hour period. After 7.5 hours, the exponent is $7.5/3=2.5$.

Some questions state an **annual** rate but compound $n$ times a year. Divide the rate by $n$ for the periodic rate, and multiply the years by $n$ for the period count:

$$
A=P\left(1+\frac{r}{n}\right)^{nt}
$$

Here $r/n$ is the rate per period and $nt$ is the number of periods. The trap is doing only half the conversion: $(1+r)^{nt}$ reuses the full annual rate too many times, and $(1+r/n)^{t}$ divides the rate but never expands the exponent.

You can also work backward from data. If $f(0)=a$, that value gives the initial amount. For two consecutive values, divide the later by the earlier to find the factor: 50, 60, 72 have ratio $1.2$, so the model is $50(1.2)^t$. If the listed times aren't one period apart, use the time difference carefully: values at $t=2$ and $t=5$ are three periods apart, so their quotient is $b^3$, not $b$.

For a graph, check the scale and labels before deciding what the curve means. A horizontal stretch or non-unit starting time does not change the model's basic distinction. A decreasing exponential approaches zero but stays positive when the starting value and factor are positive. When a question asks for a first whole period, compare the nearby integer values directly; an estimate alone does not establish the first one.

!!! tip "Desmos shortcut"
    To compare models, enter `y_1=1000(1.1)^x` and `y_2=1210(1.05)^x`. Use the table or intersection to compare the values at the requested time. Keep the time units the same in both models.

---

## Worked examples

### Example 1 — routine
> A town has 18,000 residents and grows by 3% each year. Which function gives the population after $t$ years?

**Thinking:** A percentage increase multiplies the current amount, so this is exponential rather than linear. The starting value is $18{,}000$ and the growth factor is $1.03$.

**Solution:**

1. Convert the rate to a growth factor: $1+0.03=1.03$.
2. Put the starting value and factor into $f(t)=a(b)^t$: $P(t)=18{,}000(1.03)^t$.
3. The exponent counts years, matching the unit of the rate.

**Answer:** $P(t)=18{,}000(1.03)^t$

### Example 2 — typical test difficulty
> A medication sample contains 640 milligrams and loses 25% of its amount every 4 hours. How many milligrams remain after 12 hours?

**Thinking:** The sample keeps 75% each 4-hour period. Since 12 hours contains three periods, the exponent is 3.

**Solution:**

1. The decay factor is $1-0.25=0.75$.
2. The number of periods is $12/4=3$.
3. Evaluate the model: $640(0.75)^3=640(0.421875)=270$.

**Answer:** $270$ milligrams

### Example 3 — the hard version
> Model A starts at 900 and increases 8% every 2 years. Model B starts at 1,100 and increases 4% every 2 years. After how many 2-year periods will Model A first exceed Model B?

**Thinking:** Both models use the same time unit, so compare their values period by period. The starting advantage of B matters, but A has the larger multiplier.

**Solution:**

1. Write the models using $n$ 2-year periods: $A(n)=900(1.08)^n$ and $B(n)=1{,}100(1.04)^n$.
2. Check $n=5$: $A(5)=900(1.08)^5\approx1{,}322.40$, while $B(5)=1{,}100(1.04)^5\approx1{,}338.32$. A has not exceeded B.
3. Check $n=6$: $A(6)=900(1.08)^6\approx1{,}428.19$, while $B(6)=1{,}100(1.04)^6\approx1{,}391.85$. A now exceeds B.
4. Because the question asks for the first whole number of periods, the answer is 6 periods, or 12 years.

**Answer:** 6 two-year periods, or 12 years

---

## Where students go wrong

!!! warning "Common errors"
    - **Adding a percentage instead of multiplying.** A 15% decrease does not subtract 15 from every starting value; it multiplies by $0.85$ each period.
    - **Using the elapsed time as the number of periods.** If a rate is monthly, divide the elapsed time in years by $1/12$, or count the months directly.
    - **Confusing constant differences with constant ratios.** Adding 6 each time is linear; multiplying by $1.5$ each time is exponential.
    - **Using the wrong fractional exponent.** For a doubling time of 3 hours, 7.5 hours means $7.5/3=2.5$ doubling periods, not 7.5 periods.
    - **Taking a root too early when recovering a factor.** If the data are three periods apart, first write $b^3$ equal to the quotient. Take the positive cube root only after setting up that relationship.
    - **Comparing percentage rates without comparing starting values.** A model with the larger rate may still begin lower. Keep both complete expressions and compare their values at the requested time.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** A savings account starts with 250 dollars and grows by 8% each year. Which function gives the balance after $t$ years?

- A) $250+0.08t$
- B) $250(0.92)^t$
- C) $250(1.08)^t$
- D) $258^t$

**2.** A tank contains 600 liters of water and loses 15% of its water each hour. How many liters remain after 2 hours? *(student-produced response)*

**3.** The table shows a function's values.

| Time $t$ (hours) | 0 | 1 | 2 |
|---|---:|---:|---:|
| $f(t)$ | 12 | 18 | 27 |

Which statement best describes the change in $f(t)$?

- A) It is linear with a common difference of 6.
- B) It is exponential with a common factor of $\frac{2}{3}$.
- C) It is exponential with a common factor of $\frac{3}{2}$.
- D) It is linear with a common difference of 9.

**4.** A machine's output increases by 10% every 6 months. If its current output is 500 units, what will its output be after 1 year? *(student-produced response)*

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** Which situation describes exponential change?

- A) A delivery route becomes 12 miles longer each week.
- B) A savings balance increases by 4% each month.
- C) A service fee increases by 5 dollars each month.
- D) A bus travels 60 miles every hour.

**6.** A quantity is 900 when $t=0$ and 729 when $t=2$. If the quantity changes exponentially by the same factor each time unit, which function could model it?

- A) $f(t)=900(0.9)^t$
- B) $f(t)=900(0.81)^t$
- C) $f(t)=729(0.9)^t$
- D) $f(t)=900(1.1)^t$

**7.** A culture of 100 cells doubles every 3 hours. Which expression gives the number of cells after 7.5 hours?

- A) $100(2)^{7.5}$
- B) $100(2)^{2.5}$
- C) $100(2)^{3/7.5}$
- D) $100(2)^{7.5-3}$

**8.** A savings account of \$5,000 earns an annual interest rate of 8%, compounded quarterly. Using $A=P\left(1+\dfrac{r}{n}\right)^{nt}$, what is the balance after 3 years, to the nearest dollar?

- A) \$5,306
- B) \$6,200
- C) \$6,341
- D) \$12,591

**9.** A water tank contains 80 liters and loses 20% of its water every hour. How many liters remain after 3 hours? *(student-produced response)*

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** The function $f(t)=a(b)^t$ satisfies $f(2)=18$ and $f(5)=486$, where $a$ and $b$ are positive. What is the value of $b$?

- A) 2
- B) 3
- C) 4
- D) 6

**11.** A medicine has a half-life of 6 hours. If a dose begins at 240 milligrams, about how many milligrams remain after 15 hours?

- A) 30
- B) 42
- C) 60
- D) 85

**12.** Two models are $A(t)=1{,}000(1.10)^t$ and $B(t)=1{,}210(1.05)^t$, where $t$ is a whole number of years. For which value of $t$ does $A(t)$ first exceed $B(t)$?

- A) 3
- B) 4
- C) 5
- D) 6

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | C |
    | 2 | 433.5 |
    | 3 | C |
    | 4 | 605 |
    | 5 | B |
    | 6 | A |
    | 7 | B |
    | 8 | C |
    | 9 | 40.96 |
    | 10 | B |
    | 11 | B |
    | 12 | C |

??? success "Show full solutions"
    **1.** An 8% increase has factor $1+0.08=1.08$. Starting at 250 gives $250(1.08)^t$, so the answer is C.

    **2.** Losing 15% means keeping $1-0.15=0.85$. After 2 hours, the amount is $600(0.85)^2=600(0.7225)=433.5$ liters.

    **3.** The consecutive ratios are $18/12=3/2$ and $27/18=3/2$. The common ratio is constant, so the function is exponential with factor $3/2$. The answer is C.

    **4.** One year contains two 6-month periods. The output is $500(1.10)^2=500(1.21)=605$ units.

    **5.** Exponential change uses a constant percentage or multiplier. The 4% monthly increase in B has that form. The other choices add a fixed amount or describe a constant rate, so the answer is B.

    **6.** Since $900b^2=729$, divide by 900 to get $b^2=0.81$. The positive factor is $b=0.9$, so the model is $900(0.9)^t$. The answer is A.

    **7.** The number of doubling periods is elapsed time divided by doubling time: $7.5/3=2.5$. The model gives $100(2)^{2.5}$, so the answer is B.

    **8.** The account compounds quarterly, so $n=4$ and the periodic rate is $r/n=0.08/4=0.02$. Over 3 years there are $nt=4(3)=12$ periods, so the balance is $5{,}000(1.02)^{12}\approx6{,}341.21$, which rounds to \$6,341. The answer is C.

    The most tempting wrong answer is \$5,306, from $5{,}000(1.02)^3$ — using the correct periodic rate but leaving the exponent as $t=3$ instead of expanding it to $nt=12$, so the account only compounds once a year instead of four times. Choice D, \$12,591, comes from the opposite half of the same mistake, $5{,}000(1.08)^{12}$: correctly using 12 periods but applying the full annual rate each time instead of dividing it by $n$ first. Choice B, \$6,200, is simple interest, $5{,}000(1+0.08\times3)$, which adds interest instead of compounding it.

    **9.** Losing 20% means retaining 80%, or a factor of $0.8$. After 3 hours, the amount is $80(0.8)^3=80(0.512)=40.96$ liters.

    **10.** Divide the equations: $f(5)/f(2)=486/18$, so $b^3=27$. Since $b$ is positive, $b=3$. The answer is B.

    **11.** The number of half-lives is $15/6=2.5$. The remaining amount is $240(1/2)^{2.5}=30\sqrt{2}\approx42.43$. Rounded to the nearest whole milligram, this is 42. The answer is B.

    **12.** At $t=4$, $A(4)=1{,}464.1$ and $B(4)=1{,}210(1.05)^4\approx1{,}470.76$, so A is still smaller. The ratio $A(t)/B(t)$ is multiplied by $1.10/1.05>1$ each year, so once it begins increasing, checking the adjacent years identifies the first crossover. At $t=5$, $A(5)=1{,}610.51$ and $B(5)\approx1{,}544.30$, so A is greater for the first time. The answer is C.

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** the student using a percentage as an additive amount instead of converting it to a multiplier.
    - **Diagnostic question:** Ask, “What does one complete time period do to the current value?”
    - **If they are struggling:** return to 0.3 for exponent rules and 3.1 for identifying function behavior.
    - **If they are flying:** ask them to solve the crossover in Question 12 with logarithms and explain why checking consecutive integers is enough here.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`

    Before assigning a harder question, ask the student to state the units of the exponent. A correct-looking multiplier with the wrong time unit is the most common conceptual failure in this topic. For tables, have the student write both first differences and consecutive ratios rather than relying on the visual shape alone. For context questions, require the student to name the starting value, rate, and period in words before entering anything in the calculator.

---

*Previous: [3.4 Quadratic Functions: Forms and Graphs](3-4-quadratic-functions-forms-and-graphs.md) · Next: [3.6 Radicals and Rational Exponents](3-6-radicals-and-rational-exponents.md)*
