---
lesson_id: "1.7"
title: "Translation: Turning Words into Equations"
level: 1
domain: algebra
prereqs: ["1.5"]
est_minutes: 60
status: verified
verified_by: "math-verifier 2026-09-18"
---

# 1.7 Translation: Turning Words into Equations

!!! abstract "Why this is on the test"
    Roughly a third of the Math section arrives as a paragraph rather than an equation, and those paragraphs appear in every domain — algebra, ratios, geometry, data. Your algebra is already good enough for most of them; what costs you points is writing the wrong equation in the first ten seconds.

**Before you start, you should be able to:** solve a two-step linear equation and a two-equation system by substitution (Lesson 1.5).

**By the end of this lesson you will be able to:**

- Extract the quantities, the unknown and the relationship from a paragraph
- Build the equation before attempting any arithmetic
- Recognise the six sentence patterns the SAT reuses constantly

---

## The idea

A word problem is an equation someone has hidden inside a sentence. Your job is to find it, not to be clever.

Work in three passes, in this order, and do no arithmetic until the third.

**Pass 1 — name the unknown.** Read to the final question first. Write one line: `s = number of student tickets`. Include the units. A variable without a written definition is where most translation errors start.

**Pass 2 — list the quantities.** Every number in the paragraph is either a *rate* (goes with a variable), a *one-off* (stands alone), or a *total* (sits on the right of the equals sign). Sort them.

**Pass 3 — find the relationship.** One sentence in the paragraph says that two things are equal. That sentence is the equation. Write it, then solve.

The relationship almost always arrives in one of six shapes. Learn the shapes and the reading becomes mechanical.

| Pattern | Signal words | Mini-example | Translation |
|---|---|---|---|
| Is / equals | is, was, results in | "the total is 40" | $\text{total} = 40$ |
| More / less than | more than, less than, fewer | "5 less than $x$" | $x - 5$ (**not** $5 - x$) |
| Per / each | per, each, every, a | "\$0.60 per km" | $0.60k$ |
| Of | of, percent of | "30% of $n$" | $0.30n$ |
| Total of two things | altogether, combined, in all | "$m$ muffins and $s$ scones cost \$94.50" | $2.25m + 3.50s = 94.50$ |
| Times as many A as B | twice as many, three times as many | "twice as many pens as books" | $p = 2b$ |

Two of those six carry the traps. "Less than" reverses the order you read it in. "Twice as many A as B" puts the 2 on **B**, the smaller group — the opposite of the word order.

A general shape covers a large share of SAT setups:

$$\text{one-off} + (\text{rate}) \times (\text{unknown}) = \text{total}$$

If a paragraph seems shapeless, try to force it into that line. It usually goes.

!!! tip "Desmos shortcut"
    Once you have an equation, test it with a number you can reason about before solving. Type your equation into Desmos with a plausible value substituted in and check whether the two sides come out close. A translation error is usually wrong by a wide margin, so this catches it in seconds.

---

## Worked examples

### Example 1 — routine

> A courier charges a flat fee of \$4.00 for a delivery plus \$0.60 for each kilometre travelled. One delivery cost \$16.60. How many kilometres was that delivery?

**Thinking:** Two numbers attach to nothing (\$4.00) and to kilometres (\$0.60 per km). "Per each kilometre" marks the rate, so $0.60$ multiplies the unknown and $4.00$ stands alone. The word "cost" is the equals sign.

**Solution:**

1. Name the unknown: $k =$ kilometres travelled. The question asks for kilometres, so that is the variable.
2. Sort the numbers: $4.00$ is a one-off, $0.60$ is a rate, $16.60$ is the total. Build $4.00 + 0.60k = 16.60$ before touching the arithmetic.
3. Subtract the one-off: $0.60k = 12.60$. Divide by the rate: $k = 21$.

**Answer:** $21$ kilometres

### Example 2 — typical test difficulty

> A theatre sold 240 tickets to a concert. Adult tickets cost \$12 each and student tickets cost \$7 each. The theatre collected \$2,330 in total. How many student tickets were sold?

**Thinking:** Two unknowns, so you need two relationships, and the paragraph gives exactly two: a count sentence and a money sentence. Notice that the question asks for students, not adults — mark that now, because the substitution will hand you the adult count first if you are not careful.

**Solution:**

1. Name both unknowns: $a =$ adult tickets, $s =$ student tickets. Count sentence: $a + s = 240$.
2. Money sentence, using the per-each pattern twice: $12a + 7s = 2330$.
3. Substitute $a = 240 - s$: $12(240 - s) + 7s = 2330$, so $2880 - 5s = 2330$, giving $5s = 550$ and $s = 110$.

**Answer:** $110$ student tickets

### Example 3 — the hard version

> A tank holds $T$ litres of water when full. A drain removes water at a constant 6 litres per minute while a hose adds water at a constant $r$ litres per minute, where $r < 6$. Starting from full, the tank is empty after 40 minutes. What is $r$ in terms of $T$?

**Thinking:** The letters are frightening; the structure is not. Two rates act at the same time in opposite directions, so what matters is the *net* rate: $6 - r$ litres leave each minute. The condition $r < 6$ is there to tell you the net rate is positive, which is the setup confirming your direction. The answer is an expression, so nothing will resolve to a number, and that is fine.

**Solution:**

1. Name the relationship in words before symbols: net rate out $\times$ time $=$ volume emptied. The volume emptied is the whole tank, $T$.
2. Net rate out is $6 - r$ litres per minute, so $(6 - r) \times 40 = T$.
3. Solve for $r$: divide by 40 to get $6 - r = \dfrac{T}{40}$, then $r = 6 - \dfrac{T}{40}$.

**Answer:** $r = 6 - \dfrac{T}{40}$

---

## Where students go wrong

!!! warning "Common errors"
    - **Reversing "less than".** "Seven less than three times $n$" becomes $7 - 3n$ because that is the reading order. It is $3n - 7$. Build the habit of writing the main quantity first and *then* attaching the "less than" amount behind it.
    - **Putting the multiplier on the wrong group.** "Three times as many pens as books" becomes $3p = b$ because "pens" is read first. Test it with a number: if there are 2 books there are 6 pens, so $p = 3b$. One sanity number settles the direction every time.
    - **Solving before the equation is finished.** Students start dividing as soon as they see two numbers, then discover a third number later and patch it in. Write the full equation, read it back against the paragraph, and only then compute.
    - **Answering for the wrong variable.** In a two-unknown problem, substitution usually delivers the variable you did *not* define first. Circle the requested quantity in the question before you solve.
    - **Treating a rate as a one-off.** In "\$30 per month plus \$0.12 per minute", the \$30 is a one-off for a single month's bill. Ask of each number: does it repeat with the unknown, or happen once?

---

## Practice

<div class="practice" markdown>

**Set A — build fluency** <span class="chip chip-easy">easy</span>

**1.** Which equation represents "seven less than three times a number $n$ is 26"?
   A) $7 - 3n = 26$
   B) $3n - 7 = 26$
   C) $3(n - 7) = 26$
   D) $3n + 7 = 26$

**2.** A gym charges a one-time joining fee of \$25 plus \$18 for each month of membership. A member has paid \$187 in total. For how many months has the member belonged to the gym? *(student-produced response)*

**3.** A bakery sells muffins for \$2.25 each and scones for \$3.50 each. On one morning it sold $m$ muffins and $s$ scones and took \$94.50 in total. Which equation represents this?
   A) $2.25m + 3.50s = 94.50$
   B) $2.25s + 3.50m = 94.50$
   C) $5.75(m + s) = 94.50$
   D) $2.25m = 3.50s + 94.50$

**4.** A club has 48 members. Every member is either a first-year or a second-year, and there are 3 times as many second-years as first-years. How many first-years are in the club? *(student-produced response)*

**Set B — test level** <span class="chip chip-medium">medium</span>

**5.** A phone plan costs \$30 per month plus \$0.12 for each minute used beyond the monthly limit. One month's bill was \$43.44. How many minutes beyond the limit were used that month?
   A) 112
   B) 362
   C) 13.44
   D) 612

**6.** The length of a rectangle is 4 cm less than twice its width. The perimeter of the rectangle is 52 cm. What is the width, in centimetres, of the rectangle? *(student-produced response)*

**7.** A community pool sold 120 passes on one day. Day passes cost \$6 each and evening passes cost \$4 each, and the pool collected \$608 in total. How many evening passes were sold?
   A) 56
   B) 64
   C) 112
   D) $-56$

**8.** A printing service charges a one-time setup fee of $c$ dollars plus \$0.40 for each flyer printed. An order of 250 flyers cost \$118 in total. Which equation could be used to find $c$?
   A) $c + 100 = 118$
   B) $250c + 0.40 = 118$
   C) $c + 0.40 = 118$
   D) $250(c + 0.40) = 118$

**9.** The sum of three consecutive even integers is 8 more than twice the smallest of the three. What is the largest of the three integers? *(student-produced response)*

**Set C — stretch** <span class="chip chip-hard">hard</span>

**10.** A tank holds 900 litres of water when full. A valve drains water at a constant $d$ litres per minute while a hose adds water at a constant 11 litres per minute, where $d > 11$. Starting from full, the tank is empty after $m$ minutes. Which equation gives $d$ in terms of $m$?
    A) $d = \dfrac{900}{m} + 11$
    B) $d = \dfrac{900}{m} - 11$
    C) $d = \dfrac{900 + 11}{m}$
    D) $d = \dfrac{900}{m + 11}$

**11.** At a fair, a ride ticket costs \$3 more than a game ticket. Maya buys 4 ride tickets and 6 game tickets and pays \$52 in total. What is the cost, in dollars, of one game ticket? *(student-produced response)*

**12.** A shop's weekend sales were 25% more than its weekday sales. Over the whole week the shop took \$6,300 from weekday and weekend sales combined. What were the weekday sales, in dollars?
    A) 2,800
    B) 3,500
    C) 3,150
    D) 5,040

</div>

---

## Answers and solutions

??? success "Show answers"
    | # | Answer |
    |---|--------|
    | 1 | B |
    | 2 | 9 |
    | 3 | A |
    | 4 | 12 |
    | 5 | A |
    | 6 | 10 |
    | 7 | A |
    | 8 | A |
    | 9 | 6 |
    | 10 | A |
    | 11 | 4 |
    | 12 | A |

??? success "Show full solutions"
    **1.** "Three times a number $n$" is $3n$. "Seven less than" that quantity means seven is taken away from it, so the main quantity comes first: $3n - 7$. "Is 26" gives the equals sign. The equation is $3n - 7 = 26$, choice **B**. Choice A reverses the subtraction; C attaches the 7 to $n$ before multiplying; D changes the sign. As a check, $3n - 7 = 26$ gives $n = 11$, and $3(11) - 7 = 26$.

    **2.** Let $m$ be the number of months. The \$25 happens once; the \$18 repeats with each month, so it is the rate. Equation: $25 + 18m = 187$. Subtract the one-off fee: $18m = 162$. Divide by 18: $m = 9$. Check: $25 + 18(9) = 25 + 162 = 187$. **Answer: 9.**

    **3.** This is the "total of two things" pattern. Each muffin contributes \$2.25, so $m$ muffins contribute $2.25m$. Each scone contributes \$3.50, so $s$ scones contribute $3.50s$. "Took \$94.50 in total" makes the sum equal to 94.50: $2.25m + 3.50s = 94.50$, choice **A**. Choice B attaches each price to the wrong item; C adds the two prices together and charges \$5.75 for every item sold; D turns a total into a difference. **Answer: A.**

    **4.** Let $f$ be the number of first-years. "Three times as many second-years as first-years" puts the multiplier on the first-years, the smaller group: second-years $= 3f$. Everyone is one or the other, so $f + 3f = 48$. Then $4f = 48$ and $f = 12$. Check: 12 first-years and $3(12) = 36$ second-years give $12 + 36 = 48$. **Answer: 12.**

    **5.** Let $x$ be the number of minutes beyond the limit. The \$30 is charged once for the month; \$0.12 is the rate. Equation: $30 + 0.12x = 43.44$. Subtract the monthly charge: $0.12x = 13.44$. Divide by 0.12: $x = 112$. Check: $30 + 0.12(112) = 30 + 13.44 = 43.44$. Choice B, 362, comes from dividing the whole bill by 0.12 without removing the \$30. Choice C stops at \$13.44, the overage cost rather than the minutes. Choice D adds the \$30 instead of subtracting it. **Answer: A.**

    **6.** Let $w$ be the width in centimetres. "4 cm less than twice its width" means the main quantity, $2w$, comes first: length $= 2w - 4$. Perimeter is two lengths and two widths: $2(2w - 4) + 2w = 52$. Expand: $4w - 8 + 2w = 52$, so $6w - 8 = 52$ and $6w = 60$, giving $w = 10$. Check: width 10, length $2(10) - 4 = 16$, perimeter $2(16) + 2(10) = 32 + 20 = 52$. **Answer: 10.**

    **7.** Let $d$ be day passes and $e$ be evening passes. Count sentence: $d + e = 120$. Money sentence: $6d + 4e = 608$. Substitute $d = 120 - e$: $6(120 - e) + 4e = 608$, so $720 - 6e + 4e = 608$, giving $720 - 2e = 608$ and $2e = 112$, so $e = 56$. Check: $d = 64$, and $6(64) + 4(56) = 384 + 224 = 608$. Choice B, 64, is the day passes — the wrong variable. Choice C, 112, stops at $2e$. Choice D comes from subtracting in the wrong order, $608 - 720 = -112$. **Answer: A.**

    **8.** The setup fee is charged once, so $c$ stands alone with no multiplier. The \$0.40 is a rate attached to the 250 flyers, contributing $0.40 \times 250 = 100$ dollars. Equation: $c + 100 = 118$, choice **A**. (Solving gives $c = 18$.) Choice B swaps the roles of the one-off fee and the rate. Choice C forgets to multiply the rate by 250. Choice D charges the setup fee on every flyer. **Answer: A.**

    **9.** Let $n$ be the smallest integer. Consecutive even integers step by 2, so the three are $n$, $n + 2$ and $n + 4$. Their sum is $3n + 6$. "Is 8 more than twice the smallest" gives $3n + 6 = 2n + 8$. Subtract $2n$ from both sides: $n + 6 = 8$, so $n = 2$. The largest is $n + 4 = 6$. Check: the integers are 2, 4 and 6, with sum 12; twice the smallest is 4, and $4 + 8 = 12$. **Answer: 6.**

    **10.** Water leaves at $d$ litres per minute and arrives at 11 litres per minute, so the net rate out is $d - 11$ litres per minute. Since $d > 11$, that is positive and the tank does empty. Net rate out times time equals the volume emptied: $(d - 11)m = 900$. Divide by $m$: $d - 11 = \dfrac{900}{m}$, so $d = \dfrac{900}{m} + 11$, choice **A**. Check with $m = 100$: $d = 9 + 11 = 20$, and $(20 - 11)(100) = 900$. Choice B has the sign of the hose reversed. Choice C adds a rate to a volume. Choice D adds a rate to a time. **Answer: A.**

    **11.** Let $g$ be the cost of a game ticket in dollars. "A ride ticket costs \$3 more than a game ticket" gives ride $= g + 3$. Four rides and six games cost \$52: $4(g + 3) + 6g = 52$. Expand: $4g + 12 + 6g = 52$, so $10g + 12 = 52$ and $10g = 40$, giving $g = 4$. Check: a ride ticket costs \$7, and $4(7) + 6(4) = 28 + 24 = 52$. **Answer: 4.**

    **12.** Let $w$ be the weekday sales in dollars. "25% more than" the weekday sales means the weekday amount plus 25% of it: weekend $= w + 0.25w = 1.25w$. Combined: $w + 1.25w = 6300$, so $2.25w = 6300$ and $w = 2800$. Check: weekend sales are $1.25(2800) = 3500$, and $2800 + 3500 = 6300$, with 3500 exactly 25% more than 2800. Choice B, 3,500, is the weekend figure — the wrong variable. Choice C, 3,150, splits the total evenly and ignores the 25%. Choice D, 5,040, treats \$6,300 as the weekend sales alone and divides by 1.25. **Answer: A.**

---

## Tutor notes

!!! note "For the tutor"
    - **Watch for:** a student who reads the paragraph once and immediately writes a number on the page. Ask them to show you their variable definition. If there is no written line naming the unknown with its units, the translation is being held in their head, and that is where "less than" reversals and wrong-variable answers come from.
    - **Diagnostic question:** "A basket holds 5 fewer apples than pears, and there are 3 times as many pears as plums. Write both relationships as equations." Correct is $a = p - 5$ and $p = 3m$. A student who writes $5 - p$ or $3p = m$ has not internalised the two trap patterns and should redo Set A with a sanity number substituted into every equation.
    - **If they are struggling:** return to Lesson 1.5 if the breakdown is in the solving rather than the setup — a student who cannot handle substitution will blame the translation. If the setup itself is the problem, have them do Pass 1 and Pass 2 only on all twelve questions, writing no equation and solving nothing.
    - **If they are flying:** escalate to question 10, then ask them to rewrite it with the tank volume as a letter as well, so both the volume and the time are parameters. After that, Lesson 1.8 follows naturally.
    - **Textbook cross-reference:** see `curriculum/reference-index.md`

---

*Previous: [1.6 Linear Inequalities and Systems of Inequalities](1-6-linear-inequalities-and-systems-of-inequalities.md) · Next: [1.8 Absolute Value on the SAT](1-8-absolute-value-on-the-sat.md)*
