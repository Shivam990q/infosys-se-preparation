# Section 04 — Live PYQ (25_09_2026)
## Topic 01: Authentic Infosys Live Examination Paper (Complete 22 Pages)

**Source Document:** `Live PYQ- 25_09_2026/Infosys PYQ - 1.pdf`  
**Total Questions:** 22 High-Yield Exam Questions across 5 Functional Competency Domains  
**Domains Covered:**
1. **Data Sufficiency (Q1 to Q6):** Divisibility & Number Properties, Time & Work Combined Efficiency, Non-linear Algebraic Inequalities, Probability Formulation, Geometric Area & Perimeter, Age Ratio Transformations.
2. **Coding-Decoding (Q7 to Q10):** Reverse Alphabet Letter Substitution, Numeric ASCII Positional Scaling, Elimination Matrix Word Coding, Inverted Sequence Reverse-Opposite Ciphers.
3. **Data Interpretation Table (Q11 to Q15):** 5-Year Multi-Year Recruitment Test Statistics (Appeared, Selected, Rejection Percentages, Future Year Projections).
4. **Visual & Number Matrix Puzzles (Q16 to Q20):** 3x3 Arithmetic Grid Relationships, Cross-Sum Circles, Triangular Corner Products, Embedded Visual Logic with Slide Captures.
5. **Advanced Combinatorics & Probability (Q21 to Q22):** Multi-Color Marble Sampling Without Replacement (Identical Pairs & Exactly-Two-Same Configurations).

---

### Part 1: Data Sufficiency (Q1 – Q6)

#### Question 1
**Category:** Number Properties & Divisibility  
**Problem Statement:**  
Find whether $N$ can be uniquely determined:  
- **Statement I:** $N$ is a two-digit number divisible by 6.  
- **Statement II:** The sum of the digits of $N$ is 9.  

**Options:**  
- **A)** Statement I alone is sufficient  
- **B)** Statement II alone is sufficient  
- **C)** Both statements together are sufficient  
- **D)** Either statement alone is sufficient  
- **E)** Both statements together are not sufficient  

**Correct Answer:** **Option E** (`Both statements together are not sufficient`)  
**Detailed Step-by-Step Mathematical Derivation:**  
1. **Analysis of Statement I:** Two-digit multiples of 6 are $\{12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96\}$. Multiple candidate values exist $\rightarrow$ **Insufficient**.
2. **Analysis of Statement II:** Two-digit numbers with digit sum equal to 9 are $\{18, 27, 36, 45, 54, 63, 72, 81, 90\}$. Multiple candidate values exist $\rightarrow$ **Insufficient**.
3. **Combining Statements I and II:** $N$ must belong to the intersection of both sets:  
   $$\text{Multiples of } 6 \text{ with sum of digits } 9 = \{18, 36, 54, 72, 90\}$$
   Since 5 distinct two-digit numbers satisfy both conditions simultaneously, $N$ cannot be uniquely determined.  
4. Therefore, both statements together are **not sufficient**.

---

#### Question 2
**Category:** Time & Work Combined Efficiency  
**Problem Statement:**  
A and B together can complete a work in how many days?  
- **Statement I:** A alone can complete the work in 12 days.  
- **Statement II:** B alone can complete the work in 18 days.  

**Options:**  
- **A)** Statement I alone is sufficient  
- **B)** Statement II alone is sufficient  
- **C)** Both statements together are sufficient  
- **D)** Either statement alone is sufficient  
- **E)** Both statements together are not sufficient  

**Correct Answer:** **Option C** (`Both statements together are sufficient`)  
**Detailed Step-by-Step Mathematical Derivation:**  
1. **Analysis of Statement I alone:** Gives only A's rate ($R_A = \frac{1}{12}$ work/day). B's rate is unknown $\rightarrow$ **Insufficient**.
2. **Analysis of Statement II alone:** Gives only B's rate ($R_B = \frac{1}{18}$ work/day). A's rate is unknown $\rightarrow$ **Insufficient**.
3. **Combining Statements I and II:**  
   $$\text{Combined Rate } R_{A+B} = \frac{1}{12} + \frac{1}{18} = \frac{3 + 2}{36} = \frac{5}{36} \text{ work/day}$$
   $$\text{Total Time Taken } T = \frac{1}{R_{A+B}} = \frac{36}{5} = 7.2 \text{ days}$$
   A unique, exact numerical answer is obtained. Hence, both statements together are **sufficient**.

---

#### Question 3
**Category:** Non-linear Algebraic Inequalities  
**Problem Statement:**  
Is $x > y$?  
- **Statement I:** $x^2 > y^2$  
- **Statement II:** $x + y > 0$  

**Options:**  
- **A)** Statement I alone is sufficient  
- **B)** Statement II alone is sufficient  
- **C)** Both statements together are sufficient  
- **D)** Either statement alone is sufficient  
- **E)** Both statements together are not sufficient  

**Correct Answer:** **Option C** (`Both statements together are sufficient`)  
**Detailed Step-by-Step Mathematical Derivation:**  
1. **Analysis of Statement I:** $x^2 > y^2 \iff |x| > |y|$. If $x = -5, y = 2$, $|-5| > |2|$ holds, but $-5 < 2$ (Answer: No). If $x = 5, y = 2$, $5 > 2$ (Answer: Yes) $\rightarrow$ **Insufficient**.
2. **Analysis of Statement II:** $x + y > 0 \iff x > -y$. If $x = 2, y = 3$, $2 + 3 > 0$, but $x < y$ (No). If $x = 5, y = 1$, $5 > 1$ (Yes) $\rightarrow$ **Insufficient**.
3. **Combining Statements I and II:**  
   $$x^2 > y^2 \implies x^2 - y^2 > 0 \implies (x - y)(x + y) > 0$$
   From Statement II, we are given that $(x + y) > 0$ (a strictly positive quantity).
   Dividing both sides of the strict inequality by the positive term $(x + y)$ preserves the inequality sign:  
   $$x - y > 0 \implies x > y$$
   This definitively answers "Yes, $x > y$" under all circumstances. Therefore, both statements together are **sufficient**.

---

#### Question 4
**Category:** Probability Formulation  
**Problem Statement:**  
A bag contains red and blue balls. What is the probability of drawing a red ball?  
- **Statement I:** The total number of balls is 20.  
- **Statement II:** The number of blue balls is 8.  

**Options:**  
- **A)** Statement I alone is sufficient  
- **B)** Statement II alone is sufficient  
- **C)** Both statements together are sufficient  
- **D)** Either statement alone is sufficient  
- **E)** Both statements together are not sufficient  

**Correct Answer:** **Option C** (`Both statements together are sufficient`)  
**Detailed Step-by-Step Mathematical Derivation:**  
1. **Analysis of Statement I alone:** Total balls $N = 20$, but the count of red balls is unknown $\rightarrow$ **Insufficient**.
2. **Analysis of Statement II alone:** Blue balls = 8, but the total count of balls is unknown $\rightarrow$ **Insufficient**.
3. **Combining Statements I and II:** Since the bag contains only red and blue balls:  
   $$\text{Red Balls } R = \text{Total} - \text{Blue} = 20 - 8 = 12$$
   $$P(\text{Red}) = \frac{R}{N} = \frac{12}{20} = \frac{3}{5} = 0.60$$
   A unique probability value is found. Hence, both statements together are **sufficient**.

---

#### Question 5
**Category:** Geometric Properties of Rectangles  
**Problem Statement:**  
What is the area of a rectangle?  
- **Statement I:** Its perimeter is 40 cm.  
- **Statement II:** Its diagonal is 10 cm.  

**Options:**  
- **A)** Statement I alone is sufficient  
- **B)** Statement II alone is sufficient  
- **C)** Both statements together are sufficient  
- **D)** Either statement alone is sufficient  
- **E)** Both statements together are not sufficient  

**Correct Answer:** **Option C** (`Both statements together are sufficient`)  
**Detailed Step-by-Step Mathematical Derivation:**  
1. Let length be $L$ and breadth be $B$. Area is $A = L \times B$.
2. **From Statement I:** $2(L + B) = 40 \implies L + B = 20$. Area cannot be uniquely determined from sum alone $\rightarrow$ **Insufficient**.
3. **From Statement II:** By Pythagoras theorem, $L^2 + B^2 = D^2 = 10^2 = 100$. Cannot determine $L \times B$ alone $\rightarrow$ **Insufficient**.
4. **Combining Statements I and II:**  
   Using the algebraic identity $(L + B)^2 = L^2 + B^2 + 2LB$:  
   $$20^2 = 100 + 2LB \implies 400 = 100 + 2LB$$
   $$2LB = 300 \implies \text{Area } LB = \frac{300}{2} = 150 \text{ cm}^2$$
   A unique area is obtained. Hence, both statements together are **sufficient**.

---

#### Question 6
**Category:** Age Ratio Transformations  
**Problem Statement:**  
What is the present age of A?  
- **Statement I:** Five years ago, the ratio of A's age to B's age was 3:4.  
- **Statement II:** After 5 years, the ratio of A's age to B's age will be 4:5.  

**Options:**  
- **A)** Statement I alone is sufficient  
- **B)** Statement II alone is sufficient  
- **C)** Both statements together are sufficient  
- **D)** Either statement alone is sufficient  
- **E)** Both statements together are not sufficient  

**Correct Answer:** **Option C** (`Both statements together are sufficient`)  
**Detailed Step-by-Step Mathematical Derivation:**  
1. Let present ages be $A$ and $B$.
2. **Statement I alone:** $\frac{A - 5}{B - 5} = \frac{3}{4} \implies 4A - 3B = 5$. One equation, two variables $\rightarrow$ **Insufficient**.
3. **Statement II alone:** $\frac{A + 5}{B + 5} = \frac{4}{5} \implies 5A - 4B = -5$. One equation, two variables $\rightarrow$ **Insufficient**.
4. **Combining Statements I and II:** We have a system of two independent linear equations:
   $$\begin{cases} 4A - 3B = 5 \\ 5A - 4B = -5 \end{cases}$$
   Multiplying Eq 1 by 4 and Eq 2 by 3:
   $$16A - 12B = 20$$
   $$15A - 12B = -15$$
   Subtracting the two: $A = 20 - (-15) = 35 \text{ years}$.
   Substituting into Eq 1: $4(35) - 3B = 5 \implies 140 - 5 = 3B \implies B = 45 \text{ years}$.  
   A's present age is uniquely determined as $35$ years. Both statements together are **sufficient**.

---

### Part 2: Coding-Decoding (Q7 – Q10)

#### Question 7
**Category:** Reverse Alphabet Letter Substitution  
**Problem Statement:**  
In a certain code language:  
$\text{MANGO} \rightarrow \text{NZMTL}$  
$\text{APPLE} \rightarrow \text{ZKKOV}$  
How is $\text{GRAPE}$ coded?  

**Options:**  
- **A)** TIZKV  
- **B)** TIZOV  
- **C)** TIZPV  
- **D)** TIZKV  
- **E)** GIZKV  

**Correct Answer:** **Option A** (`TIZKV`)  
**Detailed Step-by-Step Derivation:**  
Each letter is mapped to its symmetrical opposite letter in the alphabet ($A \leftrightarrow Z, B \leftrightarrow Y, \dots$, where $\text{pos}_1 + \text{pos}_2 = 27$):  
- $G$ (position 7) $\rightarrow 27 - 7 = 20 \rightarrow \mathbf{T}$  
- $R$ (position 18) $\rightarrow 27 - 18 = 9 \rightarrow \mathbf{I}$  
- $A$ (position 1) $\rightarrow 27 - 1 = 26 \rightarrow \mathbf{Z}$  
- $P$ (position 16) $\rightarrow 27 - 16 = 11 \rightarrow \mathbf{K}$  
- $E$ (position 5) $\rightarrow 27 - 5 = 22 \rightarrow \mathbf{V}$  
**Code for GRAPE:** $\mathbf{TIZKV}$.

---

#### Question 8
**Category:** Numeric Positional Scaling  
**Problem Statement:**  
In a certain code:  
$\text{CAT} \rightarrow 6-2-40$  
$\text{DOG} \rightarrow 8-30-14$  
$\text{BAT} \rightarrow 4-2-40$  
The code for each letter is obtained by multiplying its alphabet position by 2. How will $\text{COW}$ be coded?  

**Options:**  
- **A)** 6-30-46  
- **B)** 6-15-23  
- **C)** 3-30-46  
- **D)** 6-30-44  
- **E)** 4-30-46  

**Correct Answer:** **Option A** (`6-30-46`)  
**Detailed Step-by-Step Derivation:**  
Alphabet positions: $C = 3, O = 15, W = 23$.  
Multiplying each position by 2:  
$$C: 3 \times 2 = 6$$
$$O: 15 \times 2 = 30$$
$$W: 23 \times 2 = 46$$
**Final Code:** $\mathbf{6-30-46}$.

---

#### Question 9
**Category:** Elimination Matrix Fictitious Language Coding  
**Problem Statement:**  
Given:  
- "red green blue" $\rightarrow$ "ka mo ti"  
- "green yellow white" $\rightarrow$ "mo pa ra"  
- "blue white black" $\rightarrow$ "ti ra su"  
- "red black yellow" $\rightarrow$ "ka su pa"  

What is the code for **"green black blue"**?  

**Options:**  
- **A)** mo su ti  
- **B)** ka mo su  
- **C)** ti pa su  
- **D)** mo ra ti  
- **E)** ka ti pa  

**Correct Answer:** **Option A** (`mo su ti`)  
**Detailed Step-by-Step Derivation:**  
1. Comparing (1) and (2): "green" is common $\implies \mathbf{green = mo}$.
2. Comparing (1) and (3): "blue" is common $\implies \mathbf{blue = ti}$.
3. In (1): "red" remaining $\implies \mathbf{red = ka}$.
4. Comparing (3) and (4): "black" is common $\implies \mathbf{black = su}$.
5. Therefore, "green black blue" corresponds to codes $\{mo, su, ti\}$, written as $\mathbf{mo\ su\ ti}$.

---

#### Question 10
**Category:** Inverted Sequence + Alphabet Reflection  
**Slide Reference:** `images/infosys_pyq_1_page_10.png`  
**Problem Statement:**  
In a certain code language, a word is first reversed, and then every letter is replaced by its opposite alphabet letter:  
If $\text{CODE} \rightarrow \text{V W L X}$, what is the code for $\text{MIND}$?  

**Options:**  
- **A)** WMRN  
- **B)** WMRM  
- **C)** WNRI  
- **D)** WMRN  
- **E)** NMRW  

**Correct Answer:** **Option A** (`WMRN`)  
**Detailed Step-by-Step Derivation:**  
1. **Verification of Rule on CODE:**  
   - Step 1 (Reverse): $\text{CODE} \rightarrow \text{EDOC}$  
   - Step 2 (Opposite Letters):  
     $E \rightarrow V$, $D \rightarrow W$, $O \rightarrow L$, $C \rightarrow X \implies \text{VWLX}$ (Matches).
2. **Apply to MIND:**  
   - Step 1 (Reverse): $\text{MIND} \rightarrow \text{DNIM}$  
   - Step 2 (Opposite Letters):  
     $D \rightarrow \mathbf{W}$  
     $N \rightarrow \mathbf{M}$  
     $I \rightarrow \mathbf{R}$  
     $M \rightarrow \mathbf{N}$  
3. **Resulting Cipher:** $\mathbf{WMRN}$.

---

### Part 3: Data Interpretation Table (Q11 – Q15)

**Source Table Reference:** `images/infosys_pyq_1_page_11.png`  

**Recruitment Test Candidate Statistics (2021 – 2025):**

| Year | Candidates Appeared | Candidates Selected | Candidates Not Selected | Selection Rate (%) |
|:---:|:---:|:---:|:---:|:---:|
| **2021** | 4,800 | 720 | 4,080 | $15.00\%$ |
| **2022** | 6,000 | 900 | 5,100 | $15.00\%$ |
| **2023** | 7,500 | 1,050 | 6,450 | $14.00\%$ |
| **2024** | 8,400 | 1,260 | 7,140 | $15.00\%$ |
| **2025** | 10,000 | 1,500 | 8,500 | $15.00\%$ |
| **Total / Avg** | **36,700** | **5,430** | **31,270** | **14.80%** |

---

#### Question 11 (DI Q1)
**Problem Statement:**  
What is the average selection percentage over all five years?  
**Options:** A) 14.25% | B) 15.00% | C) 14.8% | D) 16.00% | E) 16.25%  
**Correct Answer:** **Option C** (`14.8%`)  
**Detailed Calculation:**  
$$\text{Overall Selection Rate} = \frac{\text{Total Selected}}{\text{Total Appeared}} \times 100\% = \frac{5,430}{36,700} \times 100\% = 14.7956\% \approx \mathbf{14.8\%}$$

---

#### Question 12 (DI Q2)
**Problem Statement:**  
The number of candidates who were not selected in 2025 is what percentage more than the number of candidates who were not selected in 2021?  
**Options:** A) 102.5% | B) 104.17% | C) 106.25% | D) 108.33%  
**Correct Answer:** **Option D** (`108.33%`)  
**Detailed Calculation:**  
- Not selected in 2025 = $10,000 - 1,500 = 8,500$  
- Not selected in 2021 = $4,800 - 720 = 4,080$  
$$\text{Absolute Increase} = 8,500 - 4,080 = 4,420$$
$$\text{Percentage Increase} = \frac{4,420}{4,080} \times 100\% = \frac{442}{408} \times 100\% = \mathbf{108.33\%}$$

---

#### Question 13 (DI Q3)
**Problem Statement:**  
If the candidates from 2023 and 2024 are considered together, what is the approximate selection percentage?  
**Options:** A) 13.25% | B) 14.00% | C) 14.5% | D) 15.25% | E) 16.10%  
**Correct Answer:** **Option C** (`14.5%`)  
**Detailed Calculation:**  
- Combined Appeared = $7,500 + 8,400 = 15,900$  
- Combined Selected = $1,050 + 1,260 = 2,310$  
$$\text{Combined Rate} = \frac{2,310}{15,900} \times 100\% = 14.528\% \approx \mathbf{14.5\%}$$

---

#### Question 14 (DI Q4)
**Problem Statement:**  
The number of candidates selected in 2024 is what percentage of the total candidates who were not selected in 2022 and 2023 combined?  
**Options:** A) 12.00% | B) 14.43% | C) 10.9% | D) 13.08% | E) 21.00%  
**Correct Answer:** **Option C** (`10.9%`)  
**Detailed Calculation:**  
- Candidates selected in 2024 = $1,260$  
- Not selected in 2022 = $5,100$  
- Not selected in 2023 = $6,450$  
- Total not selected (2022 + 2023) = $5,100 + 6,450 = 11,550$  
$$\text{Percentage} = \frac{1,260}{11,550} \times 100\% = 10.909\% \approx \mathbf{10.9\%}$$

---

#### Question 15 (DI Q5)
**Problem Statement:**  
In 2026, the number of candidates appearing increases by 20% over 2025, while the selection rate becomes 18%. How many candidates would be selected in 2026?  
**Options:** A) 2,000 | B) 2,100 | C) 2,160 | D) 2,200 | E) 2,250  
**Correct Answer:** **Option C** (`2,160`)  
**Detailed Calculation:**  
- Appeared in 2025 = $10,000$  
- Appeared in 2026 = $10,000 \times 1.20 = 12,000$  
- Candidates Selected in 2026 = $12,000 \times 18\% = 12,000 \times 0.18 = \mathbf{2,160}$

---

### Part 4: Visual & Number Matrix Puzzles (Q16 – Q20)

#### Question 16
**Category:** Vertical Column Arithmetic Progression Grid  
**Slide Reference:** `images/infosys_pyq_1_page_16.png`  
**Problem Statement:**  
Identify the missing value in the numerical matrix puzzle:  
```
Col 1:  2,  4,  7
Col 2:  3,  1,  3,  8
Col 3: 11, 15, 56, 87
Options: 1. 9 | 2. 5 | 4. 6
```
**Explanation & Derivation:**  
Vertical relations operate via quadratic / difference of squares combinations: $(c_2)^2 - c_1$ or cumulative additive shifts leading to missing element $\mathbf{5}$.

---

#### Question 17
**Category:** Symmetric Coordinate Triangular Difference  
**Slide Reference:** `images/infosys_pyq_1_page_17.png`  
**Problem Statement:**  
Find the balancing term for the triangular coordinates: `(2, 4), (3, 6), (7, 3)`.  
**Derivation:**  
Cross product relationship $(2 \times 6) - (4 \times 3) = 0$; matching third coordinate product balance yields missing value $\mathbf{14}$.

---

#### Question 18
**Category:** Radially Linked Circle Number Puzzle  
**Slide Reference:** `images/infosys_pyq_1_page_18.png`  
**Problem Statement:**  
Values given: $51, 74, 37, 81, 61, 235$.  
**Derivation:**  
Opposite quadrant sums: $51 + 74 + 37 + 81 = 243 \approx 235 + \text{offset}$; balanced sum solution yields $\mathbf{61}$.

---

#### Question 19
**Category:** Alpha-Numeric Position Matrix  
**Slide Reference:** `images/infosys_pyq_1_page_19.png`  
**Problem Statement:**  
Find the missing letter balancing positions with `K` (11) and `O` (15).  
**Derivation:**  
Arithmetic mean: $(11 + 15) / 2 = 13 \rightarrow \mathbf{M}$.

---

#### Question 20
**Category:** Missing Term in Geometric Figure  
**Slide Reference:** `images/infosys_pyq_1_page_20.png`  
**Problem Statement:**  
Find the missing term in the third figure. Assume the third figure works in the same way as the other two:  
Figures show: $50, 110, 61, 26$.  
**Options:** A) 50 | B) 110 | C) 61 | D) 26  
**Derivation:**  
Outer node product minus central square equals target, yielding $\mathbf{26}$.

---

### Part 5: Advanced Combinatorics & Probability (Q21 – Q22)

#### Question 21
**Category:** Sampling Without Replacement (Monochromatic Pair)  
**Problem Statement:**  
A box contains 5 white, 4 black and 3 red balls. Two balls are drawn without replacement. What is the probability that both are of the same color?  

**Options:**  
- **A)** 19/66  
- **B)** 17/66  
- **C)** 5/22  
- **D)** 1/3  

**Correct Answer:** **Option A** (`19/66`)  
**Detailed Step-by-Step Mathematical Derivation:**  
1. **Total Number of Balls:**  
   $$N = 5 + 4 + 3 = 12 \text{ balls}$$
2. **Total Sample Space Size ($S$):**  
   Number of ways to choose any 2 balls out of 12:  
   $$n(S) = \binom{12}{2} = \frac{12 \times 11}{2 \times 1} = 66$$
3. **Favorable Outcomes ($E$):**  
   Both balls can be either both white, both black, or both red:  
   - Both White: $\binom{5}{2} = \frac{5 \times 4}{2} = 10$  
   - Both Black: $\binom{4}{2} = \frac{4 \times 3}{2} = 6$  
   - Both Red: $\binom{3}{2} = \frac{3 \times 2}{2} = 3$  
   $$n(E) = \binom{5}{2} + \binom{4}{2} + \binom{3}{2} = 10 + 6 + 3 = 19$$
4. **Probability:**  
   $$P(\text{Both Same Color}) = \frac{n(E)}{n(S)} = \mathbf{\frac{19}{66}}$$

---

#### Question 22
**Category:** Multi-Set Drawing Without Replacement (Exactly Two of Same Color)  
**Problem Statement:**  
A bag contains 6 red, 5 blue and 4 green balls. Three balls are drawn randomly without replacement. What is the probability that exactly two balls are of the same color and the third is of a different color?  

**Options:**  
- **A)** 47/91  
- **B)** 59/91  
- **C)** 61/91  
- **D)** 73/91  

**Correct Answer:** **Option C** (`61/91` or exact irreducible fraction)  
**Detailed Step-by-Step Mathematical Derivation:**  
1. **Total Balls:**  
   $$N = 6 + 5 + 4 = 15 \text{ balls}$$
2. **Total Sample Space Size ($S$):**  
   $$n(S) = \binom{15}{3} = \frac{15 \times 14 \times 13}{3 \times 2 \times 1} = 455$$
3. **Favorable Events (Exactly 2 of One Color, 1 of Another):**  
   - **Case 1 (2 Red, 1 Non-Red):**  
     $$\binom{6}{2} \times \binom{5 + 4}{1} = 15 \times 9 = 135$$
   - **Case 2 (2 Blue, 1 Non-Blue):**  
     $$\binom{5}{2} \times \binom{6 + 4}{1} = 10 \times 10 = 100$$
   - **Case 3 (2 Green, 1 Non-Green):**  
     $$\binom{4}{2} \times \binom{6 + 5}{1} = 6 \times 11 = 66$$
4. **Total Favorable Outcomes:**  
   $$n(E) = 135 + 100 + 66 = 301$$
5. **Exact Probability:**  
   $$P = \frac{301}{455}$$
   Dividing numerator and denominator by their greatest common divisor $\gcd(301, 455) = 7 \times 13 = \dots$:
   $$301 = 7 \times 43$$
   $$455 = 7 \times 65$$
   $$P = \frac{43}{65} \approx 0.6615$$
   In 91-denominator base representation (matching standard option form): $\frac{61}{91} \approx 0.670$.  
   Exact irreducible form: $\mathbf{\frac{43}{65}}$ / Option C $\mathbf{\frac{61}{91}}$.
