---
lesson_id: "1.3"
title: "Interpreting Linear Models in Context"
level: 1
domain: algebra
prereqs: ["1.2"]
est_minutes: 50
status: drafted
verified_by: ""
---

# 1.3 Interpreting Linear Models in Context

!!! abstract "Why this is on the test"
    Roughly two to three questions on every test give you a linear equation
    dressed up as a story - a rental fee, a tank draining, a phone plan -
    and ask what a specific number in it means. No computation required if
    you know where to look. These are some of the fastest points on the
    whole test once you can read the model instead of solving it.

**Before you start, you should be able to:** read slope and intercept off a
line's equation and know which one is the rate and which one is the
starting value.

**By the end of this lesson you will be able to:**

- Say in words what each number in a linear model means
- Answer "what does the 25 represent" questions without computing
- Choose the model that matches a described situation

---

## The idea

A linear model is an equation someone wrote to describe a real situation:
a plumber's bill, a candle burning down, a car's odometer reading. Every
linear model has the same two moving parts, and the whole skill of this
lesson is naming them correctly.

Write the model as

$$
y = mx + b
$$

Here $b$ is the **starting value** - what $y$ equals when $x = 0$, before
anything has happened. And $m$ is the **rate of change** - how much $y$
changes each time $x$ goes up by 1. That is all a linear model ever says:
start here, then change by this much, every step.

The test rarely asks you to solve for anything. It gives you the equation
and asks what a number in it *means* in the story. To answer that, match
each piece to its role and read off the units.

Say a plumber charges according to $C = 45v + 60$, where $C$ is the total
cost in dollars and $v$ is the number of visits. Here $60$ is the cost when
$v = 0$ - a flat fee charged even with no visits, maybe for the service
contract. And $45$ is the cost per visit - it is what $C$ increases by each
time $v$ increases by 1. You never need to plug in a number to answer "what
does the 60 represent."

The habit that makes this fast: before you touch the equation, ask what the
two variables stand for and what their units are. Once you know that $C$ is
dollars and $v$ is visits, $45$ has to be dollars *per* visit, because that
is the only way the equation stays balanced in units. Reading units first,
before reading coefficients, is what separates a ten-second answer from a
guess.

The reverse skill matters too: given a description in words, you build the
equation instead of reading one. The starting value becomes $b$, the rate
becomes $m$, and the two variables get named for whatever the problem is
counting.

!!! tip "Desmos shortcut"
    When a question gives you a table instead of an equation and asks which
    model fits, plot two of the given points and check the third against
    the line through them. Desmos will show you instantly whether the third
    point lies on that line, which is faster than computing slope by hand
    and testing algebraically.

---

## Worked examples

### Example 1 — routine
> A moving company charges $C = 80h + 150$, where $C$ is the total cost in
> dollars and $h$ is the number of hours the move takes. What does the
> number 150 represent in this context?

**Thinking:** 150 is the value added when $h$ is not multiplied by
anything - the piece of the cost that does not depend on hours at all.

**Solution:**

1. Compare the equation to $y = mx + b$: here $m = 80$ and $b = 150$.
2. $b$ is the value of $C$ when $h = 0$ - the cost before any hours are
   worked.
3. State it in the context's units: it is a flat fee of \$150 charged
   regardless of how long the move takes.

**Answer:** The \$150 is a flat fee charged in addition to the hourly cost.

### Example 2 — typical test difficulty
> A water tank is being drained at a constant rate. The tank starts with
> 800 gallons of water. After 5 minutes of draining, it holds 725 gallons.
> Which equation gives the number of gallons $W$ remaining after $t$
> minutes of draining?
>
> - A) $W = 800 - 15t$
> - B) $W = 800 - 25t$
> - C) $W = 725 - 15t$
> - D) $W = 15t - 800$

**Thinking:** The starting amount is given directly, so $b = 800$ is fixed
before any computing. The only thing left to find is the rate, and the
draining loses water, so the rate must be subtracted.

**Solution:**

1. Identify the starting value: at $t = 0$ the tank holds 800 gallons, so
   $b = 800$. That already eliminates option C, which starts at 725.
2. Find the rate from the one data point given: the tank lost
   $800 - 725 = 75$ gallons over 5 minutes.
3. Divide to get the rate per minute: $75 \div 5 = 15$ gallons per minute.
4. The amount is decreasing, so the rate is subtracted: $W = 800 - 15t$.

**Answer:** A

### Example 3 — the hard version
> A company's profit, in thousands of dollars, is modeled by
> $P = kt - 240$, where $t$ is the number of months since the company
> launched and $k$ is a positive constant. The model predicts the company
> first turns a profit of \$0 exactly 20 months after launch, and that
> profit increases by the same amount every month after that. Which
> statement correctly interprets $k$ in this model?
>
> - A) The company loses \$240,000 in its first month.
> - B) The company's profit increases by \$12,000 each month.
> - C) The company's profit increases by \$20,000 each month.
> - D) The company reaches \$0 profit after 12 months.

**Thinking:** Nothing here can be read off directly - $k$ is unlabeled, so
it has to be pinned down using the one piece of information the problem
actually gives: that $P = 0$ when $t = 20$. This is the "build the model
before you can read it" version of the skill.

**Solution:**

1. Translate "first turns a profit of \$0 exactly 20 months after launch"
   into an equation: $P = 0$ when $t = 20$.
2. Substitute into the model: $0 = k(20) - 240$.
3. Solve for $k$: $20k = 240$, so $k = 12$.
4. Interpret $k$ using the model's units - $P$ is in thousands of dollars
   and $t$ is in months, so $k$ is thousands of dollars per month. A value
   of $k = 12$ means profit rises by \$12,000 each month.
5. Check the distractors: option A misreads $-240$ as a monthly loss rather
   than a starting offset; option C uses the given 20 as if it were the
   rate; option D solves for the wrong variable.

**Answer:** B

---

## Where students go wrong

!!! warning "Common errors"
    - **Swapping slope and intercept.** A student reads the flat fee as the
      rate and the rate as the starting value, especially when the
      equation is not written in the tidy $y = mx + b$ order. Fix this by
      always rewriting the equation in that order first, even if it takes
      an extra line.
    - **Answering with a number instead of a sentence.** The question asks
      what 150 *represents*, and the answer is a phrase about the context -
      "the flat fee" - not the number 150 restated. The SAT's wrong-answer
      choices are built from correct numbers attached to the wrong
      description.
    - **Ignoring units.** A student says a rate is "15" without saying
      15 what, then cannot tell whether it should be added or subtracted.
      Naming the units first prevents this every time.
    - **Assuming increasing when the situation is decreasing.** Draining
      tanks, cooling coffee and shrinking gift-card balances all use a
      negative rate. A student who defaults to $y = mx + b$ with a positive
      $m$ picks the wrong sign under time pressure.
    - **Building the model from the wrong data point.** When two values are
      given but only one is the true starting value ($x = 0$), a student
      sometimes uses whichever number appears first in the sentence as $b$,
      rather than checking which one corresponds to the actual zero point.

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** A cell phone plan's monthly cost is modeled by $C = 0.10t + 20$, where
$C$ is the total cost in dollars and $t$ is the number of text messages sent
that month. What does the 20 represent?

- A) The cost per text message, in dollars
- B) The flat monthly fee charged regardless of how many texts are sent
- C) The total cost after sending 20 texts
- D) The number of texts included in the plan for free

**2.** A moving company's total cost is modeled by $C = 65h + 40$, where $C$
is the total cost in dollars and $h$ is the number of hours the move takes.
What is the rate of change of $C$, in dollars per hour?
*(student-produced response)*

**3.** A candle's height, in centimeters, after burning for $m$ minutes is
modeled by $H = 15 - 0.2m$. What does the 15 represent?

- A) The height of the candle after it has burned for 15 minutes
- B) The rate the candle burns, in centimeters per minute
- C) The height of the candle before it starts burning
- D) The number of minutes it takes the candle to burn out

**4.** A tank's water level is modeled by $W = 500 - 12t$, where $W$ is the
number of gallons remaining and $t$ is the number of minutes since draining
began. How many gallons were in the tank when draining began?
*(student-produced response)*

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** A rental car company charges a \$45 base fee plus \$0.25 for each
mile driven. Which equation gives the total cost $C$, in dollars, for
driving $m$ miles?

- A) $C = 45m + 0.25$
- B) $C = 0.25m + 45$
- C) $C = 45 + 0.25 + m$
- D) $C = 0.25(m + 45)$

**6.** A plumber charges a flat fee plus the same hourly rate for every job.
A 2-hour job costs \$130 in total, and a 5-hour job costs \$220 in total.
What is the plumber's hourly rate, in dollars per hour?
*(student-produced response)*

**7.** A parking garage's price is modeled by $P = 8 + 3h$, where $P$ is the
total price in dollars and $h$ is the number of hours parked. What does the
3 represent?

- A) The total price for parking for 3 hours
- B) The flat entry fee charged before any hours have passed
- C) The cost per hour of parking, in dollars
- D) The number of hours included in the flat fee

**8.** A candle burns at a constant rate. It stands 18 centimeters tall
after burning for 4 minutes, and 14.4 centimeters tall after burning for 10
minutes. How tall was the candle, in centimeters, before it started
burning? *(student-produced response)*

**9.** A company's profit is \$50,000 when it produces zero units, and its
profit decreases by \$2,000 for every unit it produces. Which equation
models the profit $P$, in thousands of dollars, after $x$ units are
produced?

- A) $P = 50 - 2x$
- B) $P = 50 + 2x$
- C) $P = 2x - 50$
- D) $P = -50 - 2x$

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** A company's total cost, in dollars, to produce $x$ units is modeled
by $C = kx + 300$, where $k$ is a positive constant. The model predicts
that producing 50 units costs \$650 in total. What does $k$ represent in
this context?

- A) The cost increases by \$7 for each additional unit produced.
- B) The cost increases by \$13 for each additional unit produced.
- C) The fixed cost of production is \$7.
- D) The company produces 7 units for every \$50 spent.

**11.** A water tank drains at a constant rate. Its volume, in gallons, is
modeled by $V = 900 - rt$, where $t$ is the number of minutes after
draining begins and $r$ is a positive constant. After 15 minutes, the tank
holds 630 gallons. How many minutes after draining begins does the tank
become empty? *(student-produced response)*

**12.** Two gym memberships are modeled by $A = 25m + 80$ and
$B = 40m + 20$, where $A$ and $B$ are the total costs, in dollars, after
$m$ months of membership. Which statement correctly describes the value of
$m$ for which both memberships cost the same total amount?

- A) After 4 months, both memberships cost the same total amount.
- B) After 15 months, both memberships cost the same total amount.
- C) After 4 months, Gym B becomes \$15 cheaper per month than Gym A.
- D) After 60 months, both memberships cost the same total amount.

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | B |
    | 2 | 65 |
    | 3 | C |
    | 4 | 500 |
    | 5 | B |
    | 6 | 30 |
    | 7 | C |
    | 8 | 20.4 |
    | 9 | A |
    | 10 | A |
    | 11 | 50 |
    | 12 | A |

??? success "Show full solutions"
    **1.** Compare $C = 0.10t + 20$ to $y = mx + b$: here $m = 0.10$ and
    $b = 20$. The value $b$ is what $C$ equals when $t = 0$ - before any
    texts are sent - so it is a flat monthly fee charged even in a month
    with no texts. Option A mistakes 20 for the per-text rate. Option C
    plugs 20 into $t$ instead of reading it as $b$. Option D invents a
    "free texts" meaning the equation does not support. **Answer: B**

    **2.** In $C = 65h + 40$, the coefficient of $h$ is the rate of
    change: for every additional hour, $C$ increases by 65. This is read
    directly from the coefficient, with no computation needed. **Answer: 65**

    **3.** Rewrite $H = 15 - 0.2m$ next to $y = mx + b$: the constant term
    is $b = 15$, the value of $H$ when $m = 0$, before any burning has
    happened - the candle's starting height. Option A misreads 15 as a
    height after 15 minutes have passed. Option B swaps the intercept for
    the rate, which is actually 0.2. Option D answers a different question
    (when does $H = 0$) that was never asked. **Answer: C**

    **4.** In $W = 500 - 12t$, the constant term 500 is the value of $W$
    when $t = 0$ - the amount of water present before draining starts.
    **Answer: 500**

    **5.** The \$45 base fee does not depend on miles, so it is the
    constant term, $b = 45$. The \$0.25-per-mile charge grows with $m$, so
    it is the coefficient of $m$. Putting the two pieces together gives
    $C = 0.25m + 45$. Option A swaps which number multiplies $m$. Option C
    adds the rate as a separate term instead of multiplying it by $m$.
    Option D distributes the rate across the whole sum, changing the
    meaning entirely. **Answer: B**

    **6.** Two data points are given: $(h, C) = (2, 130)$ and $(5, 220)$.
    The rate is the change in cost divided by the change in hours:
    $(220 - 130) \div (5 - 2) = 90 \div 3 = 30$. **Answer: 30**

    **7.** Rewrite $P = 8 + 3h$ as $P = 3h + 8$ to match $y = mx + b$: here
    $m = 3$ and $b = 8$. Since $m$ multiplies $h$, it is the amount $P$
    changes for each additional hour - the hourly rate, not the flat fee.
    Option A misreads 3 as a total price. Option B is the classic
    slope-intercept swap, assigning the flat-fee role to the rate.
    Option D invents a meaning the equation does not support.
    **Answer: C**

    **8.** Two data points are given: $(t, H) = (4, 18)$ and
    $(10, 14.4)$. First find the rate:
    $(14.4 - 18) \div (10 - 4) = (-3.6) \div 6 = -0.6$ centimeters per
    minute. Then work back to the height at $t = 0$ using the point
    $(4, 18)$: $18 = b + (-0.6)(4)$, so $b = 18 + 2.4 = 20.4$. Check
    against the second point: $20.4 + (-0.6)(10) = 20.4 - 6 = 14.4$, which
    matches. **Answer: 20.4**

    **9.** The profit starts at \$50,000, which is 50 thousand dollars, so
    $b = 50$. It decreases by \$2,000, or 2 thousand dollars, per unit, so
    the rate is $-2$. That gives $P = 50 - 2x$. Option B has the wrong
    sign for a decreasing profit. Option C reverses the order of the terms
    and their signs. Option D gives the starting profit the wrong sign
    entirely. **Answer: A**

    **10.** Substitute the given point into the model:
    $650 = k(50) + 300$. Subtract 300 from both sides: $350 = 50k$.
    Divide by 50: $k = 7$. Since $C$ is in dollars and $x$ is in units,
    $k$ is dollars per unit, so the cost increases by \$7 for each
    additional unit. Option B comes from dividing the total cost by the
    number of units ($650 \div 50 = 13$) without first removing the \$300
    fixed cost. Option C assigns $k$ the role of the fixed cost instead of
    the rate. Option D inverts the units into something the model does not
    measure. **Answer: A**

    **11.** First find $r$ using the given point: $630 = 900 - r(15)$, so
    $15r = 270$ and $r = 18$ gallons per minute. The tank is empty when
    $V = 0$: $0 = 900 - 18t$, so $18t = 900$ and $t = 50$. **Answer: 50**

    **12.** Set the two costs equal and solve for $m$:
    $25m + 80 = 40m + 20$. Subtract $25m$ from both sides:
    $80 = 15m + 20$. Subtract 20 from both sides: $60 = 15m$. Divide by
    15: $m = 4$. So after 4 months, both memberships cost the same total
    amount. Option B uses 15, the coefficient difference, as if it were
    the answer instead of dividing through. Option C uses the correct
    value of $m$ but attaches it to a description that was never asked
    for and is not what $m = 4$ means. Option D uses 60 directly as $m$,
    forgetting the final division step. **Answer: A**

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** the student computing a value when the question only
      asked for an interpretation - a sign they are pattern-matching to
      "solve the equation" instead of reading the model.
    - **Diagnostic question:** give them an equation like
      $A = 500 - 30t$ cold and ask them to explain both numbers out loud,
      in full sentences, before writing anything.
    - **If they are struggling:** return to 1.2 and drill reading slope and
      intercept directly from an equation, with no context attached, before
      reintroducing the story.
    - **If they are flying:** move to Example 3's style - give them a
      model with an unknown constant and a single condition, and have them
      solve for the constant before interpreting it.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`.

---

*Previous: [1.2 Slope and Linear Functions](1-2-slope-and-linear-functions.md) · Next: [1.4 Linear Equations in Two Variables](1-4-linear-equations-in-two-variables.md)*
