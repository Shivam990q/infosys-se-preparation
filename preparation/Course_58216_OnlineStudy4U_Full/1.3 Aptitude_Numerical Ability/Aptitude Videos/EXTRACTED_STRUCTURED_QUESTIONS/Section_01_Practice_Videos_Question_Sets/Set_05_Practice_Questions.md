# Practice Questions Set 05: Quantitative Aptitude & Numerical Ability

## Document Metadata
- **Source File:** `PRATICE QUESTIONS-5.pdf` (and duplicate `PRATICE QUESTIONS-5_49629046.pdf`)
- **Total Questions:** 10
- **Topics Covered:** Surds & Radicals, Unit Digit / Number Properties, Percentage (Income, Expenditure & Savings), Simple Interest & Alligation, Number Theory (Sum of Divisors/Factors), BODMAS & Algebraic Fractions, Exponent Laws & Radicals, Profit, Loss & Marked Price / Discount, Averages (Replacement Method), Systems of Linear Equations & Cost Averages.
- **Verification Status:** 100% Formally Verified with Exact Mathematical Derivations.

---

### Question 1
**Topic:** Surds & Radicals  
**Difficulty:** Moderate  

#### Question Stem:
What is the value of the following expression?
$$\frac{5 + \sqrt{10}}{5\sqrt{5} - 2\sqrt{20} - \sqrt{32} + \sqrt{50}}$$

#### Options:
- (a) $5$
- (b) $5\sqrt{2}$
- (c) $5\sqrt{5}$
- (d) $\sqrt{5}$

#### Formally Proved Answer:
**(d) $\sqrt{5}$**

#### Step-by-Step Mathematical Derivation:
1. **Simplify the terms in the denominator:**
   - Term 1: $5\sqrt{5}$
   - Term 2: $-2\sqrt{20} = -2\sqrt{4 \times 5} = -2(2\sqrt{5}) = -4\sqrt{5}$
   - Term 3: $-\sqrt{32} = -\sqrt{16 \times 2} = -4\sqrt{2}$
   - Term 4: $+\sqrt{50} = +\sqrt{25 \times 2} = +5\sqrt{2}$

2. **Combine like terms in the denominator:**
   $$\text{Denominator} = (5\sqrt{5} - 4\sqrt{5}) + (-4\sqrt{2} + 5\sqrt{2}) = \sqrt{5} + \sqrt{2}$$

3. **Simplify the numerator by factoring:**
   $$\text{Numerator} = 5 + \sqrt{10} = (\sqrt{5} \times \sqrt{5}) + (\sqrt{5} \times \sqrt{2}) = \sqrt{5}(\sqrt{5} + \sqrt{2})$$

4. **Compute the quotient:**
   $$\frac{\text{Numerator}}{\text{Denominator}} = \frac{\sqrt{5}(\sqrt{5} + \sqrt{2})}{\sqrt{5} + \sqrt{2}} = \sqrt{5}$$

Therefore, option **(d)** is the exact, correct answer.

---

### Question 2
**Topic:** Number Properties — Units Digit  
**Difficulty:** Easy  

#### Question Stem:
What is the digit in the units place of the resulting number from the expression:
$$(234)^{100} + (234)^{101}$$

#### Options:
- A. 6
- B. 4
- C. 2
- D. 0

#### Formally Proved Answer:
**D. 0**

#### Step-by-Step Mathematical Derivation:
1. **Analyze the cyclicity of the units digit of powers of 4:**
   - $4^1 = 4$ (odd power $\implies$ ends in 4)
   - $4^2 = 16$ (even power $\implies$ ends in 6)
   - $4^3 = 64$ (odd power $\implies$ ends in 4)
   - $4^4 = 256$ (even power $\implies$ ends in 6)
   - In general, for base ending in 4:
     $$4^{\text{even}} \equiv 6 \pmod{10}$$
     $$4^{\text{odd}} \equiv 4 \pmod{10}$$

2. **Evaluate each term:**
   - For $(234)^{100}$: The exponent $100$ is an even number.
     $$\text{Units digit of } (234)^{100} = 6$$
   - For $(234)^{101}$: The exponent $101$ is an odd number.
     $$\text{Units digit of } (234)^{101} = 4$$

3. **Sum the units digits:**
   $$\text{Units digit} = (6 + 4) \pmod{10} = 10 \pmod{10} = 0$$

Therefore, option **D** is the exact, correct answer.

---

### Question 3
**Topic:** Percentage — Income, Expenditure & Savings  
**Difficulty:** Easy-Moderate  

#### Question Stem:
A man spends $75\%$ of his income. His income is increased by $20\%$ and he increased his expenditure by $10\%$. His savings are increased by:

#### Options:
- a. $10\%$
- b. $25\%$
- c. $37.5\%$
- d. $50\%$

#### Formally Proved Answer:
**d. $50\%$**

#### Step-by-Step Mathematical Derivation:
1. **Initial state:**
   - Let initial Income $I_1 = 100$.
   - Expenditure $E_1 = 75\%$ of $100 = 75$.
   - Savings $S_1 = I_1 - E_1 = 100 - 75 = 25$.

2. **Updated state:**
   - Income increases by $20\%$:
     $$I_2 = 100 \times 1.20 = 120$$
   - Expenditure increases by $10\%$:
     $$E_2 = 75 + (10\% \text{ of } 75) = 75 + 7.5 = 82.5$$
   - New Savings:
     $$S_2 = I_2 - E_2 = 120 - 82.5 = 37.5$$

3. **Calculate percentage increase in savings:**
   $$\Delta S = S_2 - S_1 = 37.5 - 25 = 12.5$$
   $$\text{Percentage Increase} = \frac{\Delta S}{S_1} \times 100\% = \frac{12.5}{25} \times 100\% = 50\%$$

Therefore, option **d** is the exact, correct answer.

---

### Question 4
**Topic:** Simple Interest & Alligation  
**Difficulty:** Moderate  

#### Question Stem:
A sum of Rs. $5,000$ is divided into two parts such that the first part is invested at $4\%$ p.a. and the second part at $5\%$ p.a. simple interest. The total interest earned from both investments after one year is Rs. $235$. Find the amount invested in the first part.

#### Options:
- a. $1200$
- b. $1500$
- c. $1000$
- d. $1800$

#### Formally Proved Answer:
**b. $1500$**

#### Step-by-Step Mathematical Derivation:
- **Method 1: Algebraic Solution:**
  1. Let the amount invested in the first part (at $4\%$) be $x$.
  2. The remaining amount invested in the second part (at $5\%$) is $5000 - x$.
  3. Total interest after 1 year:
     $$\frac{x \times 4 \times 1}{100} + \frac{(5000 - x) \times 5 \times 1}{100} = 235$$
  4. Clear the denominator:
     $$4x + 25000 - 5x = 23500$$
     $$-x + 25000 = 23500$$
     $$x = 25000 - 23500 = 1500$$

- **Method 2: Rule of Alligation:**
  1. Average effective rate of interest on the entire sum:
     $$R_{\text{avg}} = \frac{235}{5000} \times 100\% = 4.7\%$$
  2. Apply alligation between $4\%$ and $5\%$:
     $$\begin{aligned}
     \text{Part 1 } (4\%) & \quad & \text{Part 2 } (5\%) \\
     & 4.7\% & \\
     (5 - 4.7) = 0.3 & : & (4.7 - 4) = 0.7
     \end{aligned}$$
     $$\text{Ratio of Investments} = 0.3 : 0.7 = 3 : 7$$
  3. Amount of Part 1:
     $$\text{Part 1} = \frac{3}{3 + 7} \times 5000 = \frac{3}{10} \times 5000 = 1500$$

Therefore, option **b** is the exact, correct answer.

---

### Question 5
**Topic:** Number Theory — Sum of Divisors / Factors  
**Difficulty:** Moderate  

#### Question Stem:
If $a, b,$ and $c$ are the sum of the factors of the numbers $25, 36,$ and $48$ respectively, then the value of $(a + b)c$ is:

#### Options:
- a. $19235$
- b. $17864$
- c. $15128$
- d. $13634$

#### Formally Proved Answer:
**c. $15128$**

#### Step-by-Step Mathematical Derivation:
1. **Find sum of factors of 25 ($a$):**
   - Factors of $25 = 5^2$: $1, 5, 25$.
   - Sum $a = 1 + 5 + 25 = 31$.

2. **Find sum of factors of 36 ($b$):**
   - Prime factorization: $36 = 2^2 \times 3^2$.
   - Sum of factors formula:
     $$\sigma(36) = (1 + 2 + 2^2)(1 + 3 + 3^2) = (1 + 2 + 4)(1 + 3 + 9) = 7 \times 13 = 91$$
   - Explicit list check: $1 + 2 + 3 + 4 + 6 + 9 + 12 + 18 + 36 = 91$.
   - Thus, $b = 91$.

3. **Find sum of factors of 48 ($c$):**
   - Prime factorization: $48 = 2^4 \times 3^1$.
   - Sum of factors formula:
     $$\sigma(48) = (1 + 2 + 4 + 8 + 16)(1 + 3) = 31 \times 4 = 124$$
   - Explicit list check: $1 + 2 + 3 + 4 + 6 + 8 + 12 + 16 + 24 + 48 = 124$.
   - Thus, $c = 124$.

4. **Calculate $(a + b)c$:**
   $$(a + b) = 31 + 91 = 122$$
   $$(a + b)c = 122 \times 124$$
   - Using algebraic identity $(n-1)(n+1) = n^2 - 1$ where $n = 123$:
     $$122 \times 124 = (123 - 1)(123 + 1) = 123^2 - 1 = 15129 - 1 = 15128$$
   - Units digit verification: $2 \times 4 = 8$ (uniquely identifies option c).

Therefore, option **c** is the exact, correct answer.

---

### Question 6
**Topic:** BODMAS & Fractions Simplification  
**Difficulty:** Moderate  

#### Question Stem:
If:
$$2\frac{1}{4} \div \left\{ 1\frac{1}{4} - x\left( \frac{3}{4} \div \frac{2}{3} \text{ of } \frac{9}{5} \right) \right\} = \frac{3}{20}$$
Then what is the value of $x$?

#### Options:
- $16$
- $-18$
- $-22$
- $22$

#### Formally Proved Answer:
**$-22$**

#### Step-by-Step Mathematical Derivation:
1. **Convert mixed fractions into improper fractions:**
   - $2\frac{1}{4} = \frac{9}{4}$
   - $1\frac{1}{4} = \frac{5}{4}$

2. **Evaluate innermost expression using BODMAS ('of' takes precedence over '$\div$'):**
   - Precedence 1: $\frac{2}{3} \text{ of } \frac{9}{5} = \frac{2}{3} \times \frac{9}{5} = \frac{2 \times 3}{5} = \frac{6}{5}$.
   - Precedence 2: $\frac{3}{4} \div \frac{6}{5} = \frac{3}{4} \times \frac{5}{6} = \frac{1 \times 5}{4 \times 2} = \frac{5}{8}$.

3. **Substitute into the bracket:**
   $$\text{Bracket} = \frac{5}{4} - x\left(\frac{5}{8}\right) = \frac{5}{4} - \frac{5x}{8} = \frac{10 - 5x}{8}$$

4. **Solve the outer equation:**
   $$\frac{9}{4} \div \left( \frac{10 - 5x}{8} \right) = \frac{3}{20}$$
   $$\frac{9}{4} \times \frac{8}{10 - 5x} = \frac{3}{20}$$
   $$\frac{18}{10 - 5x} = \frac{3}{20}$$
   - Divide both sides by $3$:
     $$\frac{6}{10 - 5x} = \frac{1}{20}$$
   - Cross-multiply:
     $$10 - 5x = 6 \times 20 = 120$$
     $$-5x = 120 - 10 = 110$$
     $$x = \frac{110}{-5} = -22$$

Therefore, the exact value is **$-22$**.

---

### Question 7
**Topic:** Exponent Laws & Radicals  
**Difficulty:** Moderate  

#### Question Stem:
If:
$$x = \sqrt[4]{(64)^{-2}} \div \left( \frac{81}{36} \right)^{-\frac{3}{2}} \times 3^{-3}$$
Then $\sqrt{x}$ is equal to:

#### Options:
- $\frac{1}{8}$
- $\frac{1}{4}$
- $\frac{9}{4}$
- $\frac{27}{8}$

#### Formally Proved Answer:
**$\frac{1}{8}$**

#### Step-by-Step Mathematical Derivation:
1. **Evaluate each factor separately:**
   - **Factor 1:** $\sqrt[4]{(64)^{-2}}$
     $$\sqrt[4]{(64)^{-2}} = (64)^{-2 \times \frac{1}{4}} = 64^{-1/2} = \frac{1}{\sqrt{64}} = \frac{1}{8}$$
   - **Factor 2:** $\left( \frac{81}{36} \right)^{-\frac{3}{2}}$
     - Reduce fraction: $\frac{81}{36} = \frac{9}{4} = \left( \frac{3}{2} \right)^2$.
     - Apply exponent:
       $$\left( \left(\frac{3}{2}\right)^2 \right)^{-3/2} = \left(\frac{3}{2}\right)^{-3} = \left(\frac{2}{3}\right)^3 = \frac{8}{27}$$
   - **Factor 3:** $3^{-3}$
     $$3^{-3} = \frac{1}{3^3} = \frac{1}{27}$$

2. **Combine using BODMAS (left-to-right division and multiplication):**
   $$x = \frac{1}{8} \div \frac{8}{27} \times \frac{1}{27}$$
   $$x = \left( \frac{1}{8} \times \frac{27}{8} \right) \times \frac{1}{27} = \frac{27}{64} \times \frac{1}{27} = \frac{1}{64}$$

3. **Compute $\sqrt{x}$:**
   $$\sqrt{x} = \sqrt{\frac{1}{64}} = \frac{1}{8}$$

Therefore, the exact value is **$\frac{1}{8}$**.

---

### Question 8
**Topic:** Profit, Loss & Marked Price / Discounts  
**Difficulty:** Easy  

#### Question Stem:
The selling price of an item, after offering $18\%$ discount on its marked price was Rs. $287$. What was the marked price of the item in Rs.?

#### Options:
- a. $300$
- b. $400$
- c. $350$
- d. $325$

#### Formally Proved Answer:
**c. $350$**

#### Step-by-Step Mathematical Derivation:
1. **Understand relationship between Marked Price (MP), Discount, and Selling Price (SP):**
   $$\text{SP} = \text{MP} \times \left(1 - \frac{\text{Discount}\%}{100}\right)$$
   $$287 = \text{MP} \times \left(1 - \frac{18}{100}\right) = \text{MP} \times \frac{82}{100}$$

2. **Solve for MP:**
   $$\text{MP} = \frac{287 \times 100}{82} = \frac{287 \times 50}{41}$$

3. **Divide $287$ by $41$:**
   $$41 \times 7 = 287$$
   $$\text{MP} = 7 \times 50 = 350$$

Therefore, option **c** is the exact, correct answer.

---

### Question 9
**Topic:** Averages — Replacement Method  
**Difficulty:** Easy  

#### Question Stem:
The average weight of 4 men increases by $6\text{ kg}$ when one man weighing $102\text{ kg}$ is replaced by another man. What is the weight of the new man?

#### Options:
- $126\text{ kg}$
- $120\text{ kg}$
- $128\text{ kg}$
- $122\text{ kg}$

#### Formally Proved Answer:
**$126\text{ kg}$**

#### Step-by-Step Mathematical Derivation:
1. **Apply the Average Replacement Principle:**
   $$\text{Total Change in Weight} = n \times \Delta \text{Average}$$
   Where:
   - $n = 4$ men
   - $\Delta \text{Average} = +6\text{ kg}$
   $$\text{Total Change} = 4 \times 6 = +24\text{ kg}$$

2. **Calculate the weight of the new person:**
   $$\text{Weight of New Man} = \text{Weight of Replaced Man} + \text{Total Change}$$
   $$\text{Weight of New Man} = 102\text{ kg} + 24\text{ kg} = 126\text{ kg}$$

Therefore, the exact weight is **$126\text{ kg}$**.

---

### Question 10
**Topic:** Linear Equations & Cost Averages  
**Difficulty:** Moderate  

#### Question Stem:
The average cost of articles $P, Q, R,$ and $S$ is Rs. $204$, the average cost of $P$ and $Q$ is Rs. $102$, and the average cost of $Q$ and $R$ is Rs. $132$. If the cost of article $Q$ is the average of $P$ and $R$, then what is the average cost of articles $Q$ and $S$?

#### Options:
- Rs. $204$
- Rs. $264$
- Rs. $234$
- Rs. $291$

#### Formally Proved Answer:
**Rs. $291$**

#### Step-by-Step Mathematical Derivation:
1. **Translate given average conditions into linear equations:**
   - Total cost of $P, Q, R, S$:
     $$\frac{P + Q + R + S}{4} = 204 \implies P + Q + R + S = 816 \quad \text{--- (Eq. 1)}$$
   - Total cost of $P$ and $Q$:
     $$\frac{P + Q}{2} = 102 \implies P + Q = 204 \quad \text{--- (Eq. 2)}$$
   - Total cost of $Q$ and $R$:
     $$\frac{Q + R}{2} = 132 \implies Q + R = 264 \quad \text{--- (Eq. 3)}$$
   - $Q$ is the average of $P$ and $R$:
     $$Q = \frac{P + R}{2} \implies P + R = 2Q \quad \text{--- (Eq. 4)}$$

2. **Add Eq. 2 and Eq. 3:**
   $$(P + Q) + (Q + R) = 204 + 264 = 468$$
   $$P + 2Q + R = 468$$

3. **Substitute $P + R = 2Q$ into the sum:**
   $$(P + R) + 2Q = 468$$
   $$2Q + 2Q = 468 \implies 4Q = 468 \implies Q = 117$$
   Then:
   $$P + R = 2(117) = 234$$

4. **Find $Q + S$ from Eq. 1:**
   $$P + Q + R + S = 816$$
   $$(P + R) + Q + S = 816$$
   $$234 + Q + S = 816$$
   $$Q + S = 816 - 234 = 582$$

5. **Calculate the average cost of $Q$ and $S$:**
   $$\text{Average}(Q, S) = \frac{Q + S}{2} = \frac{582}{2} = 291$$

Therefore, the exact average cost is **Rs. $291$**.
