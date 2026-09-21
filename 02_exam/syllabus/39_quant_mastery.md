# 39_quant_mastery.md: Complete Quantitative Aptitude & Technical Numerical Ability Master Compendium

---

## 1. Executive Section Blueprint & Time Management

| Parameter | Quantitative / Technical Ability Metric |
| :--- | :--- |
| **Number of Questions** | **10 Questions** |
| **Sectional Time Limit** | **35 Minutes** |
| **Average Time per Question** | **3.5 Minutes (210 Seconds)** *(Highest time per question in any Indian IT recruitment test!)* |
| **Cutoff Benchmark** | **70% (7 out of 10 correct)** |
| **Calculator Availability** | **STRICTLY NONE (No onscreen virtual or physical calculator)** |
| **Primary Elimination Vector** | High calculation volume in Data Interpretation + multi-layered algebraic word problems. Speed math and shortcut approximations are mandatory. |

---

## 2. Topic-by-Topic Theoretical Foundations & Shortcut Formulas

### Module 2.1: Data Interpretation (DI) — The Heavyweight Core (4–5 Questions)
Infosys DI sets are multi-variable and require converting complex graphic data into percentages, ratios, and averages under strict mental-math constraints.

#### 1. Pie Chart Dynamics
* **Total Angle of a Circle:** $360^\circ \equiv 100\%$
* **Fundamental Conversion Identity:**
  $$\text{Angle } (\theta) = \frac{\text{Percentage } (P)}{100} \times 360^\circ = P \times 3.6^\circ$$
  $$\text{Percentage } (P) = \frac{\text{Angle } (\theta)}{360^\circ} \times 100\% = \frac{\theta}{3.6}\%$$
* **Quick Reference Table:**
  | Percentage | Angle in Degrees | Fractional Equivalent |
  | :---: | :---: | :---: |
  | $10\%$ | $36^\circ$ | $1/10$ |
  | $12.5\%$ | $45^\circ$ | $1/8$ |
  | $16.66\%$ | $60^\circ$ | $1/6$ |
  | $20\%$ | $72^\circ$ | $1/5$ |
  | $25\%$ | $90^\circ$ | $1/4$ |
  | $33.33\%$ | $120^\circ$ | $1/3$ |
  | $50\%$ | $180^\circ$ | $1/2$ |

* **Dual Pie Chart Shortcut:**
  When comparing Pie Chart 1 (Total Population = $N_1$) with Pie Chart 2 (Total Educated = $N_2$):
  $$\text{Ratio of Sector } A = \frac{P_{1A} \times N_1}{P_{2A} \times N_2}$$
  *Do NOT calculate actual raw figures first; cancel common factors between $N_1$ and $N_2$ before multiplying!*

#### 2. Radar / Spider Web DI
* **Reading Mechanics:** Concentric polygons represent coordinate values increasing radially from origin ($0$) to outer perimeter ($Max$).
* **Common Trap:** Uneven polygon step increments. Verify step gap:
  $$\text{Step Gap} = \frac{\text{Perimeter Value} - \text{Center Value}}{\text{Number of Ring Intersections}}$$

#### 3. Missing Data Interpretation
* Requires setting up simultaneous algebraic equations to compute missing tabular cells before answering individual sub-questions:
  $$\text{Missing Value} = \text{Total} - \sum (\text{Known Values})$$
  $$\text{Weighted Average} = \frac{w_1 x_1 + w_2 x_2 + \dots + w_n x_n}{w_1 + w_2 + \dots + w_n}$$

---

### Module 2.2: Commercial Arithmetic & Financial Math

#### 1. Percentages & Fraction Conversion
* **Fraction-to-Percentage Multiplication Bank:**
  $$\frac{1}{2}=50\%,\quad \frac{1}{3}=33.33\%,\quad \frac{1}{4}=25\%,\quad \frac{1}{5}=20\%,\quad \frac{1}{6}=16.67\%$$
  $$\frac{1}{7}=14.28\%,\quad \frac{1}{8}=12.5\%,\quad \frac{1}{9}=11.11\%,\quad \frac{1}{11}=9.09\%,\quad \frac{1}{12}=8.33\%$$
  $$\frac{1}{13}=7.69\%,\quad \frac{1}{14}=7.14\%,\quad \frac{1}{15}=6.67\%,\quad \frac{1}{16}=6.25\%,\quad \frac{1}{20}=5\%$$
* **Successive Percentage Change Formula:**
  $$\text{Net Change} = \left( a + b + \frac{ab}{100} \right)\%$$
  *(Use $+a$ for increase and $-a$ for decrease).*
* **Expenditure-Consumption Rule:**
  If the price of a commodity increases by $R\%$, consumption must decrease by:
  $$\text{Reduction in Consumption} = \left( \frac{R}{100 + R} \times 100 \right)\%$$
  If price decreases by $R\%$, consumption increases by:
  $$\text{Increase in Consumption} = \left( \frac{R}{100 - R} \times 100 \right)\%$$

#### 2. Profit, Loss & Discount
* **Core Relations:**
  $$\text{Selling Price (SP)} = \text{Cost Price (CP)} \times \left(1 + \frac{\text{Profit } \%}{100}\right) = \text{CP} \times \left(1 - \frac{\text{Loss } \%}{100}\right)$$
  $$\text{Marked Price (MP)} = \frac{\text{SP}}{1 - \frac{\text{Discount } \%}{100}}$$
* **Dishonest Merchant (False Weight Formula):**
  If a shopkeeper claims to sell at cost price but uses a false weight of $W_{\text{false}}$ instead of true weight $W_{\text{true}}$:
  $$\text{Gain } \% = \frac{W_{\text{true}} - W_{\text{false}}}{W_{\text{false}}} \times 100\% = \frac{\text{Error}}{\text{True Value} - \text{Error}} \times 100\%$$
* **Successive Discounts:**
  $$\text{Net Equivalent Discount} = \left( d_1 + d_2 - \frac{d_1 d_2}{100} \right)\%$$

#### 3. Simple & Compound Interest (SI & CI)
* **Simple Interest:** $SI = \frac{P \times R \times T}{100}$
* **Compound Interest (Annual Compounding):** $A = P \left(1 + \frac{R}{100}\right)^T,\quad CI = A - P$
* **Half-Yearly Compounding:** Rate becomes $R/2$, Time becomes $2T$:
  $$A = P \left(1 + \frac{R/2}{100}\right)^{2T}$$
* **Quarterly Compounding:** Rate becomes $R/4$, Time becomes $4T$:
  $$A = P \left(1 + \frac{R/4}{100}\right)^{4T}$$
* **Critical CI vs SI Difference Formulas (Golden Infosys Archetype):**
  * **For 2 Years:**
    $$D_2 = CI_2 - SI_2 = P \left(\frac{R}{100}\right)^2$$
  * **For 3 Years:**
    $$D_3 = CI_3 - SI_3 = P \left(\frac{R}{100}\right)^2 \times \left(3 + \frac{R}{100}\right) = D_2 \times \left(3 + \frac{R}{100}\right)$$
* **Installment Formula for CI:**
  If a loan $P$ is repaid in $n$ equal annual installments of $x$:
  $$P = \frac{x}{1 + \frac{R}{100}} + \frac{x}{\left(1 + \frac{R}{100}\right)^2} + \dots + \frac{x}{\left(1 + \frac{R}{100}\right)^n}$$

---

### Module 2.3: Ratio, Proportion & Variation
* **Compounded Ratio:** The compounded ratio of $(a:b)$ and $(c:d)$ is $(ac : bd)$.
* **Duplicate & Triplicate Ratios:** Duplicate is $a^2 : b^2$, Sub-duplicate is $\sqrt{a} : \sqrt{b}$; Triplicate is $a^3 : b^3$.
* **Partnership Profit Allocation:**
  $$\frac{\text{Profit}_A}{\text{Profit}_B} = \frac{\text{Capital}_A \times \text{Time}_A}{\text{Capital}_B \times \text{Time}_B}$$
* **Alligation & Mixtures Rule:**
  $$\frac{\text{Quantity of Cheaper } (q_c)}{\text{Quantity of Dearer } (q_d)} = \frac{d - m}{m - c}$$
  Where $c$ = price of cheaper, $d$ = price of dearer, $m$ = mean price.
* **Repeated Dilution Formula:**
  A vessel contains $V$ liters of pure liquid. If $x$ liters are drawn off and replaced with water, and this operation is repeated $n$ times:
  $$\text{Quantity of Pure Liquid Remaining} = V \left(1 - \frac{x}{V}\right)^n$$
  $$\frac{\text{Remaining Liquid}}{\text{Total Liquid}} = \left(1 - \frac{x}{V}\right)^n$$

---

### Module 2.4: Time, Speed, Distance & Work Mechanics

#### 1. Time, Speed & Distance (TSD)
* **Unit Conversion:**
  $$1 \text{ km/h} = \frac{5}{18} \text{ m/s},\quad 1 \text{ m/s} = \frac{18}{5} \text{ km/h}$$
* **Average Speed:**
  * For equal distance covered at speeds $x$ and $y$:
    $$S_{\text{avg}} = \frac{2xy}{x + y}$$
  * For three equal distances at speeds $x, y, z$:
    $$S_{\text{avg}} = \frac{3xyz}{xy + yz + zx}$$
  * General formula: $S_{\text{avg}} = \frac{\text{Total Distance}}{\text{Total Time}}$.
* **Relative Speed:**
  * Moving in **opposite directions:** $S_{\text{rel}} = S_1 + S_2$
  * Moving in **same direction:** $S_{\text{rel}} = |S_1 - S_2|$
* **Train Crossing Formulas:**
  * Train of length $L_1$ crossing a stationary pole/man: $\text{Time} = \frac{L_1}{S_1}$
  * Train of length $L_1$ crossing platform/bridge of length $L_2$: $\text{Time} = \frac{L_1 + L_2}{S_1}$
  * Two trains crossing each other: $\text{Time} = \frac{L_1 + L_2}{S_{\text{rel}}}$
* **Boats & Streams:**
  * Let speed of boat in still water = $u$, speed of stream = $v$.
  * **Downstream Speed ($D$):** $D = u + v$
  * **Upstream Speed ($U$):** $U = u - v$
  * **Boat Speed ($u$):** $u = \frac{D + U}{2}$
  * **Stream Speed ($v$):** $v = \frac{D - U}{2}$
* **Escalators (Steps Calculation):**
  $$\text{Total Steps } (N) = \text{Time} \times (S_{\text{person}} \pm S_{\text{escalator}})$$

#### 2. Time & Work, Pipes & Cisterns
* **Men-Days-Hours-Efficiency (Chain Rule):**
  $$\frac{M_1 \times D_1 \times H_1 \times E_1}{W_1} = \frac{M_2 \times D_2 \times H_2 \times E_2}{W_2}$$
* **Efficiency vs Time Inverse Relationship:**
  $$\frac{\text{Efficiency}_A}{\text{Efficiency}_B} = \frac{\text{Time}_B}{\text{Time}_A}$$
* **Combined Work:**
  If $A$ takes $a$ days and $B$ takes $b$ days:
  $$\text{Together} = \frac{ab}{a + b} \text{ days}$$
* **Negative Work in Pipes & Cisterns:**
  If inlet fills in $x$ hours and outlet empties in $y$ hours ($y > x$):
  $$\text{Net Rate per Hour} = \frac{1}{x} - \frac{1}{y} = \frac{y - x}{xy} \implies \text{Fill Time} = \frac{xy}{y - x} \text{ hours}$$

---

### Module 2.5: Modern Mathematics (P&C, Probability, Number Theory)

#### 1. Permutations & Combinations
* **Fundamental Counting Principle:** If event 1 can occur in $m$ ways and event 2 in $n$ ways:
  * Either event 1 **OR** event 2: $m + n$ ways.
  * Event 1 **AND** event 2 consecutively: $m \times n$ ways.
* **Permutation (Arrangement with order):**
  $$^n P_r = \frac{n!}{(n - r)!}$$
* **Combination (Selection without order):**
  $$^n C_r = \frac{n!}{r! (n - r)!},\quad ^n C_r = ^n C_{n - r}$$
* **Arrangements with Repetition:**
  Arranging $n$ objects where item 1 repeats $p$ times, item 2 repeats $q$ times:
  $$\text{Ways} = \frac{n!}{p! \cdot q! \cdot r!}$$
* **Circular Permutations:**
  * For $n$ distinct persons seated around a circular table: $(n - 1)!$
  * For $n$ beads on a necklace / flowers in a garland (where clockwise and counter-clockwise are identical):
    $$\text{Ways} = \frac{(n - 1)!}{2}$$
* **Rank of a Word (Dictionary Order Shortcut):**
  For letters without repetition, write letters alphabetically, assign factorials, and sum positional displacements.

#### 2. Probability
* **Classic Definition:** $P(E) = \frac{n(E)}{n(S)}$
* **Addition Rule:** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
  *(If mutually exclusive, $P(A \cap B) = 0 \implies P(A \cup B) = P(A) + P(B)$).*
* **Multiplication Rule (Independent Events):** $P(A \cap B) = P(A) \times P(B)$
* **At Least One Event Occurring:**
  $$P(\text{At least 1}) = 1 - P(\text{None})$$
* **Bag and Colored Balls (Without Replacement):**
  Probability of drawing 2 red balls from a bag of 5 red and 4 blue:
  $$P = \frac{^5 C_2}{^9 C_2} = \frac{\frac{5 \times 4}{2}}{\frac{9 \times 8}{2}} = \frac{10}{36} = \frac{5}{18}$$

#### 3. Number Theory & Divisibility Mastery
* **Divisibility Rules:**
  * **$3$:** Sum of digits is divisible by 3.
  * **$4$:** Last two digits form a number divisible by 4.
  * **$6$:** Divisible by both 2 and 3.
  * **$7$:** Double the last digit and subtract from the remaining number; result divisible by 7.
  * **$8$:** Last three digits form a number divisible by 8.
  * **$9$:** Sum of digits is divisible by 9.
  * **$11$:** Difference between (sum of digits at odd places) and (sum of digits at even places) is $0$ or multiple of 11.
  * **$13$:** Multiply last digit by 4 and add to remaining number; result divisible by 13.
* **Unit Digit Cyclicity Table (Periodicity = 4):**
  | Base Digit | Cycle Length | Cyclicity Pattern |
  | :---: | :---: | :--- |
  | $0, 1, 5, 6$ | $1$ | Always ends in $0, 1, 5, 6$ respectively for any power. |
  | $4$ | $2$ | $4^1 = 4,\quad 4^2 = 6$ ($4$ if odd power, $6$ if even power). |
  | $9$ | $2$ | $9^1 = 9,\quad 9^2 = 1$ ($9$ if odd power, $1$ if even power). |
  | $2$ | $4$ | $2 \rightarrow 4 \rightarrow 8 \rightarrow 6$ |
  | $3$ | $4$ | $3 \rightarrow 9 \rightarrow 7 \rightarrow 1$ |
  | $7$ | $4$ | $7 \rightarrow 9 \rightarrow 3 \rightarrow 1$ |
  | $8$ | $4$ | $8 \rightarrow 4 \rightarrow 2 \rightarrow 6$ |
  *To find unit digit of $x^n$: Compute remainder $r = n \pmod 4$. If $r = 0$, evaluate $x^4$.*

* **Number of Factors & Sum of Factors:**
  If prime factorization of $N = p_1^{a} \times p_2^{b} \times p_3^{c}$:
  $$\text{Total Number of Factors} = (a + 1)(b + 1)(c + 1)$$
  $$\text{Sum of Factors} = \left(\frac{p_1^{a+1} - 1}{p_1 - 1}\right) \times \left(\frac{p_2^{b+1} - 1}{p_2 - 1}\right) \times \left(\frac{p_3^{c+1} - 1}{p_3 - 1}\right)$$

---

## 3. Real Infosys Exam Quantitative Questions (Forensic Step-by-Step Solutions)

### Question 1: Ratio Distribution & Algebraic Systems
**Problem (From Infosys Mock Test I):**
An amount of ₹3,000 is distributed among A, B, and C such that A gets $\frac{2}{3}$ of what B and C together get, and C gets $\frac{1}{2}$ of what A and B together get. Find B's share.

**Forensic Solution:**
1. Given: $A + B + C = 3000$
2. $A = \frac{2}{3}(B + C) \implies B + C = \frac{3}{2}A$
   Substitute into total sum:
   $$A + \frac{3}{2}A = 3000 \implies \frac{5}{2}A = 3000 \implies A = \frac{3000 \times 2}{5} = 1200$$
3. $C = \frac{1}{2}(A + B) \implies A + B = 2C$
   Substitute into total sum:
   $$2C + C = 3000 \implies 3C = 3000 \implies C = 1000$$
4. Now calculate B's share:
   $$B = 3000 - (A + C) = 3000 - (1200 + 1000) = 3000 - 2200 = \mathbf{₹800}$$
*Correct Answer:* **₹800**

---

### Question 2: Profit & Loss with Multiple Shifts
**Problem:**
An almirah was sold at a profit of 15%. If its cost price had been 5% less and it had been sold for ₹1,470 less, then the profit would have been 10%. What is the cost price of the almirah?

**Forensic Solution:**
1. Let the original Cost Price be $CP = 100x$.
   Original Selling Price: $SP_1 = 115x$.
2. New condition:
   New Cost Price: $CP_2 = 100x - 5x = 95x$.
   New Selling Price: $SP_2 = SP_1 - 1470 = 115x - 1470$.
3. New profit is $10\%$:
   $$SP_2 = CP_2 \times (1 + 0.10) = 95x \times 1.10 = 104.5x$$
4. Equate the two expressions for $SP_2$:
   $$115x - 1470 = 104.5x$$
   $$115x - 104.5x = 1470$$
   $$10.5x = 1470 \implies x = \frac{1470}{10.5} = \frac{14700}{105} = 140$$
5. Original Cost Price:
   $$CP = 100x = 100 \times 140 = \mathbf{₹14,000}$$
*Correct Answer:* **₹14,000**

---

### Question 3: Time, Speed & Relative Distance (Train Meeting Point)
**Problem:**
Two stations A and B are 450 km apart. Train 1 leaves station A at 8:00 AM heading toward B at 60 km/h. Train 2 leaves station B at 9:00 AM heading toward A at 70 km/h. At what time will they cross each other?

**Forensic Solution:**
1. Align the departure times. From 8:00 AM to 9:00 AM (1 hour), Train 1 travels alone:
   $$\text{Distance covered by Train 1} = 60 \times 1 = 60 \text{ km}$$
2. Remaining distance between trains at 9:00 AM:
   $$450 - 60 = 390 \text{ km}$$
3. Since they move toward each other (opposite directions), Relative Speed:
   $$S_{\text{rel}} = 60 + 70 = 130 \text{ km/h}$$
4. Time taken to meet after 9:00 AM:
   $$\text{Time} = \frac{\text{Remaining Distance}}{S_{\text{rel}}} = \frac{390}{130} = 3 \text{ hours}$$
5. Meeting Time:
   $$9:00 \text{ AM} + 3 \text{ hours} = \mathbf{12:00 \text{ PM (Noon)}}$$
*Correct Answer:* **12:00 PM**

---

### Question 4: Compound Interest vs Simple Interest (3-Year Formula)
**Problem:**
The difference between compound interest and simple interest on a certain sum of money for 3 years at 10% per annum is ₹155. Find the principal sum.

**Forensic Solution:**
1. Use the direct 3-year difference formula:
   $$D_3 = P \left(\frac{R}{100}\right)^2 \times \left(3 + \frac{R}{100}\right)$$
2. Substitute $D_3 = 155$ and $R = 10$:
   $$155 = P \left(\frac{10}{100}\right)^2 \times \left(3 + \frac{10}{100}\right)$$
   $$155 = P \left(\frac{1}{10}\right)^2 \times (3 + 0.1) = P \times \frac{1}{100} \times 3.1$$
   $$155 = P \times \frac{3.1}{100} = P \times \frac{31}{1000}$$
3. Solve for $P$:
   $$P = \frac{155 \times 1000}{31} = 5 \times 1000 = \mathbf{₹5,000}$$
*Correct Answer:* **₹5,000**

---

### Question 5: Work & Negative Capacity (Pipes & Leakage)
**Problem:**
Pipe A can fill a tank in 12 hours, and Pipe B can fill it in 15 hours. Due to a leak in the bottom, it takes 2 hours longer to fill the tank when both pipes are open. How long will the leak alone take to completely empty the full tank?

**Forensic Solution:**
1. Efficiency of Pipes without leak:
   Rate of $A = 1/12$, Rate of $B = 1/15$.
   Combined rate:
   $$\text{Rate}_{(A+B)} = \frac{1}{12} + \frac{1}{15} = \frac{5 + 4}{60} = \frac{9}{60} = \frac{3}{20} \text{ of tank/hour}$$
   Normal fill time without leak:
   $$\text{Time} = \frac{20}{3} \text{ hours} = 6 \text{ hours } 40 \text{ minutes}$$
2. With the leak, it takes 2 hours longer:
   $$\text{Actual Fill Time} = \frac{20}{3} + 2 = \frac{26}{3} \text{ hours}$$
3. Let the leak empty the tank at rate $1/L$ per hour:
   $$\frac{1}{A} + \frac{1}{B} - \frac{1}{L} = \frac{1}{\text{Actual Fill Time}}$$
   $$\frac{3}{20} - \frac{1}{L} = \frac{3}{26}$$
4. Solve for $1/L$:
   $$\frac{1}{L} = \frac{3}{20} - \frac{3}{26} = 3 \left(\frac{1}{20} - \frac{1}{26}\right) = 3 \left(\frac{26 - 20}{520}\right) = 3 \times \frac{6}{520} = \frac{18}{520} = \frac{9}{260}$$
   $$L = \frac{260}{9} \text{ hours} = \mathbf{28 \frac{8}{9} \text{ hours (or } \approx 28 \text{ hours } 53 \text{ minutes)}}$$
*Correct Answer:* **$260/9$ hours**
