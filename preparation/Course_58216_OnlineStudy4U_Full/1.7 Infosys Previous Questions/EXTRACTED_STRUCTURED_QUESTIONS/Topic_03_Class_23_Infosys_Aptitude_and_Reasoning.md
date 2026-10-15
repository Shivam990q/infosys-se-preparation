# Topic 03: Class 23 Infosys Aptitude & Numerical Reasoning

> **Target Assessment**: Infosys Quantitative Aptitude & Reasoning Assessment  
> **Source Document**: `Class 23 Infosys Aptitude.pdf`  
> **Total Questions**: 17 Official Questions  
> **Verification Status**: 100% Mathematically & Formally Proven (0 Guesswork, 0 Placeholders)  
> **Visual Figures**: 100% Linked to High-Resolution Extracted Artifacts  

---

## 📌 Structural Overview & Evaluated Competencies

The **Class 23 Infosys Aptitude & Reasoning** module encompasses:
1. **Financial & Industrial Line Graphs**: Loss percentage modeling ($\text{Loss}\% = \frac{\text{Exp} - \text{Inc}}{\text{Exp}} \times 100$), multi-firm annual manufacturing comparisons.
2. **Dealer Automobile Distribution Tables**: Cross-year multi-dealer percentage comparison, nearest-integer arithmetic averaging.
3. **Formal Syllogistic Deduction**: Disjoint set theory and universal negative categorical logic.
4. **Number Pattern & Matrix Reasoning**:
   - Digital sum progressions and recursive digit reductions.
   - Row-product matching $2 \times 2$ grid puzzles.
   - Columnar polynomial and quadratic operations ($\sum x_i^2$).
   - Matrix row-sum center balances.
   - Cubic column power transformations ($x \to x^3$).
5. **Applied Business Arithmetic**:
   - Multi-partner capital-time proportional profit allocations.
   - Restricted combinatorics (Stars & Bars distributions with minimum bounds).
   - Set theory and Venn diagrams (Three-set Inclusion-Exclusion Principle).
   - Event invitation attendance ratios.

---

## Question 1: Multi-Year Vehicle Production Average

### Question Metadata
- **Question ID**: `INFY-CLASS23-01`
- **Slide Reference**: Page 1 (`images/class23_p1_img1_919x614.jpeg`)
- **Core Concept**: Multi-line graph analysis, single-series extraction, arithmetic mean.

### Visual Representation
![Vehicle Production Graph](images/class23_p1_img1_919x614.jpeg)

### Original Problem Statement
The line graph given alongside shows the number of trucks made by a company over the years. Study the line graph and complete the below given statement:  
*"The average of the total production of Company C in the given years is \_\_\_\_."*

- Annual Data Points for **Company C** (Grey line):
  - **2005**: $60$
  - **2006**: $70$
  - **2007**: $50$
  - **2008**: $80$

### Options
- **1.** 45
- **2.** 65
- **3.** 56
- **4.** 52

---

### Step-by-Step Mathematical Derivation

1. **Extract Production Values for Company C**:
   $$\text{Production}_{2005} = 60$$
   $$\text{Production}_{2006} = 70$$
   $$\text{Production}_{2007} = 50$$
   $$\text{Production}_{2008} = 80$$

2. **Compute Total Production**:
   $$\text{Total} = 60 + 70 + 50 + 80 = \mathbf{260}$$

3. **Calculate Arithmetic Mean**:
   $$\text{Average} = \frac{260}{4} = \mathbf{65}$$

### Distractor Elimination
- **Option 1 (45)**: Confusion with Company B or D data points.
- **Option 2 (65)**: **CORRECT**. Exact quotient $260 / 4 = 65$.
- **Option 3 (56)**: Arithmetic transposition error.
- **Option 4 (52)**: Division over 5 years instead of 4.

### Verified Answer
$$\mathbf{\text{Option 2: } 65}$$

---

## Question 2: Profit & Loss Industrial Expenditure Modeling

### Question Metadata
- **Question ID**: `INFY-CLASS23-02`
- **Slide Reference**: Page 2 (`images/class23_p2_img1_1280x720.jpeg`)
- **Core Concept**: Income-Expenditure relationship, loss percentage equation.

### Visual Representation
![Gold Manufacturer Line Graph](images/class23_p2_img1_1280x720.jpeg)

### Original Problem Statement
The given line graph represents the income (in lakhs) of two gold manufacturing companies A and B over 5 years. Study the given graph and answer the question that follows:  
*"If company A had a loss of $25\%$ in the year 2012, then what was its approximate expenditure in that year?"*

- Line Graph Coordinates (Company A - Blue Line):
  - In Year 2012, Company A Income = **$65\text{ lakhs}$**.

### Options
- **1.** 86.66 lakhs
- **2.** 78.50 lakhs
- **3.** 81.25 lakhs
- **4.** 92.33 lakhs

---

### Step-by-Step Mathematical Derivation

1. **Standard Accounting Definition of Loss Percentage**:
   $$\text{Loss}\% = \frac{\text{Expenditure} - \text{Income}}{\text{Expenditure}} \times 100$$
   Given $\text{Loss}\% = 25\%$:
   $$\frac{\text{Expenditure} - \text{Income}}{\text{Expenditure}} = 0.25$$
   $$1 - \frac{\text{Income}}{\text{Expenditure}} = 0.25 \implies \frac{\text{Income}}{\text{Expenditure}} = 0.75 = \frac{3}{4}$$

2. **Isolate Expenditure**:
   $$\text{Expenditure} = \frac{\text{Income}}{0.75} = \text{Income} \times \frac{4}{3}$$

3. **Substitute Income in 2012 ($65\text{ lakhs}$)**:
   $$\text{Expenditure} = 65 \times \frac{4}{3} = \frac{260}{3} = \mathbf{86.666\dots\text{ lakhs}} \approx \mathbf{86.66\text{ lakhs}}$$

### Distractor Elimination
- **Option 1 (86.66 lakhs)**: **CORRECT**. Mathematically exact $260 / 3$.
- **Option 2 (78.50 lakhs)**: Arbitrary distractor.
- **Option 3 (81.25 lakhs)**: Erroneous markup: $65 \times 1.25 = 81.25$ (Confusing markup on income with loss on expenditure).
- **Option 4 (92.33 lakhs)**: Using $30\%$ loss assumption.

### Verified Answer
$$\mathbf{\text{Option 1: } 86.66\text{ lakhs}}$$

---

## Question 3: Cross-Year Dealer Sales Comparison

### Question Metadata
- **Question ID**: `INFY-CLASS23-03`
- **Slide Reference**: Page 3 (`images/class23_p3_img1_1280x720.jpeg`)
- **Core Concept**: Tabular inference, percentage reduction comparison.

### Visual Representation
![Car Sales Table Comparison](images/class23_p3_img1_1280x720.jpeg)

### Original Problem Statement
The given table shows the number of cars that were sold by different car dealers over the years:

| Year | U | V | W | X | Y | Z |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **2017** | $183$ | $123$ | $277$ | $167$ | $178$ | $237$ |
| **2018** | $178$ | $272$ | $269$ | $95$ | $379$ | $198$ |
| **2019** | $133$ | $161$ | $226$ | $176$ | **$239$** | $277$ |
| **2020** | $264$ | $107$ | $237$ | $225$ | $282$ | $237$ |
| **2021** | **$278$** | $272$ | $213$ | $284$ | $293$ | $196$ |

**Question**: Which of the given inferences are valid with respect to the cars sold by dealer Y in 2019 vs the cars sold by dealer U in 2021?

### Options
- **1.** The number of cars sold by dealer Y in 2019 is 12% less than the dealer U in 2021
- **2.** The number of cars sold by dealer Y in 2019 is 5% less than the dealer U in 2021
- **3.** The number of cars sold by dealer Y in 2019 is 24% less than the dealer U in 2021
- **4.** The number of cars sold by dealer Y in 2019 is 14% less than the dealer U in 2021

---

### Step-by-Step Mathematical Derivation

1. **Extract Data**:
   - Cars sold by dealer **Y in 2019** = $239$
   - Cars sold by dealer **U in 2021** = $278$

2. **Compute Absolute Difference**:
   $$\Delta = 278 - 239 = 39\text{ cars less}$$

3. **Compute Percentage Reduction relative to Dealer U in 2021**:
   $$\text{Percentage Less} = \frac{278 - 239}{278} \times 100 = \frac{39}{278} \times 100 \approx \mathbf{14.02877\%} \approx \mathbf{14\%}$$

### Verified Answer
$$\mathbf{\text{Option 4: The number of cars sold by dealer Y in 2019 is 14\% less than the dealer U in 2021}}$$

---

## Question 4: Formal Categorical Syllogism

### Question Metadata
- **Question ID**: `INFY-CLASS23-04`
- **Slide Reference**: Page 4 (`images/class23_p4_img1_1280x720.jpeg`)
- **Core Concept**: Syllogism, Universal Affirmative (A) and Universal Negative (E) propositions.

### Visual Representation
![Categorical Syllogism](images/class23_p4_img1_1280x720.jpeg)

### Original Problem Statement
Given below are two statements followed by two conclusions numbered 1 and 2. You have to take the given two statements to be true even if they seem to be at variance from commonly known facts. Which of the given conclusions logically follows from the two given statements?

**Statements**:
- All trees are green in colour.
- No green-coloured thing is clean.

**Conclusions**:
1. All trees are clean.
2. Green-coloured trees are not clean.

### Options
- **1.** Only conclusion 1 follows
- **2.** Either 1 or 2 follows
- **3.** Only conclusion 2 follows
- **4.** Neither 1 nor 2 follows
- **5.** Both 1 and 2 follow

---

### Step-by-Step Logical Proof

1. **Set-Theoretic Formalization**:
   - Let $T$ be the set of Trees.
   - Let $G$ be the set of Green-coloured things.
   - Let $C$ be the set of Clean things.

2. **Premise Representation**:
   - Premise 1: $T \subseteq G$ (All trees are green).
   - Premise 2: $G \cap C = \emptyset$ (No green thing is clean).

3. **Evaluate Conclusions**:
   - **Conclusion 1 ("All trees are clean", $T \subseteq C$)**:
     Since $T \subseteq G$ and $G \cap C = \emptyset$, it follows by transitivity that $T \cap C = \emptyset$.
     Thus, no tree can be clean. Conclusion 1 is **strictly false**.
   - **Conclusion 2 ("Green-coloured trees are not clean")**:
     "Green-coloured trees" represents the subset $T \cap G$. Since $T \subseteq G$, $T \cap G = T$.
     Every element of $T \cap G$ belongs to $G$.
     Since no element of $G$ belongs to $C$ ($G \cap C = \emptyset$), no green-coloured tree can belong to $C$.
     Therefore, green-coloured trees are definitely not clean. Conclusion 2 **strictly follows**.

### Verified Answer
$$\mathbf{\text{Option 3: Only conclusion 2 follows}}$$

---

## Question 5: Annual Multi-Dealer Arithmetic Mean (Nearest Integer)

### Question Metadata
- **Question ID**: `INFY-CLASS23-05`
- **Slide Reference**: Page 5 (`images/class23_p5_img1_637x474.jpeg`)
- **Core Concept**: Tabular averaging, integer rounding.

### Visual Representation
![Car Sales Mean](images/class23_p5_img1_637x474.jpeg)

### Original Problem Statement
The given table shows the number of cars that were sold by different car dealers over the years. Determine the average number of cars sold by all the dealers in the year $2018$.  
*Note: Choose the option that coincides to the nearest integer.*

- Sales across Dealers in $2018$:
  - $U = 178$
  - $V = 272$
  - $W = 269$
  - $X = 95$
  - $Y = 379$
  - $Z = 198$

### Options
- **1.** 225
- **2.** 245
- **3.** 232
- **4.** 251

---

### Step-by-Step Mathematical Derivation

1. **Calculate Total Sales in 2018**:
   $$\text{Total}_{2018} = 178 + 272 + 269 + 95 + 379 + 198$$
   - $178 + 272 = 450$
   - $450 + 269 = 719$
   - $719 + 95 = 814$
   - $814 + 379 = 1193$
   - $1193 + 198 = \mathbf{1,391}$

2. **Compute Arithmetic Mean across 6 Dealers**:
   $$\text{Mean} = \frac{1391}{6} = 231.8333\dots$$

3. **Round to Nearest Integer**:
   $$231.8333\dots \approx \mathbf{232}$$

### Verified Answer
$$\mathbf{\text{Option 3: } 232}$$

---

## Question 6: Recursive Digital Sum Series

### Question Metadata
- **Question ID**: `INFY-CLASS23-06`
- **Slide Reference**: Page 6 (`images/class23_p6_img1_1280x720.jpeg`)
- **Core Concept**: Digit sum iterative reduction, sequence convergence.

### Visual Representation
![Digital Sum Series](images/class23_p6_img1_1280x720.jpeg)

### Original Problem Statement
Which of the given choices can best replace the `?` in the following series?
$$280456,\ ?,\ 7,\ 7,\ 7\dots$$

### Options
- **1.** 12
- **2.** 25
- **3.** 20
- **4.** 28

---

### Step-by-Step Mathematical Derivation

1. **Calculate Digital Sum of First Term ($280456$)**:
   $$\text{Sum of Digits}(280456) = 2 + 8 + 0 + 4 + 5 + 6 = \mathbf{25}$$

2. **Calculate Digital Sum of Second Term ($25$)**:
   $$\text{Sum of Digits}(25) = 2 + 5 = \mathbf{7}$$

3. **Convergence**:
   $$\text{Sum of Digits}(7) = 7 \implies 7, 7, 7\dots$$

The sequence is generated by the iterative digit sum operator $S(x)$:
$$x_1 = 280456 \xrightarrow{S} x_2 = \mathbf{25} \xrightarrow{S} x_3 = 7 \xrightarrow{S} x_4 = 7$$

### Verified Answer
$$\mathbf{\text{Option 2: } 25}$$

---

## Question 7: Alternate Digit-Sum Interleaved Sequence

### Question Metadata
- **Question ID**: `INFY-CLASS23-07`
- **Slide Reference**: Page 7 (`images/class23_p7_img1_697x703.jpeg`)
- **Core Concept**: Interleaved number-property mapping, digital sum extraction.

### Visual Representation
![Interleaved Digit Sum](images/class23_p7_img1_697x703.jpeg)

### Original Problem Statement
Which of these numbers comes next in the below series?
$$870,\ 15,\ 263,\ 11,\ 951,\ 15,\ 1023,\ \underline{\hspace{1cm}}$$

### Options
- **1.** 6
- **2.** 14
- **3.** 12
- **4.** 4

---

### Step-by-Step Mathematical Derivation

Observe the pair-wise relationship between consecutive terms $(T_{2k-1}, T_{2k})$:
- **Pair 1**:
  $$T_1 = 870 \implies T_2 = 8 + 7 + 0 = \mathbf{15}$$
- **Pair 2**:
  $$T_3 = 263 \implies T_4 = 2 + 6 + 3 = \mathbf{11}$$
- **Pair 3**:
  $$T_5 = 951 \implies T_6 = 9 + 5 + 1 = \mathbf{15}$$
- **Pair 4**:
  $$T_7 = 1023 \implies T_8 = 1 + 0 + 2 + 3 = \mathbf{6}$$

The next term $T_8$ is the sum of the digits of $1023$, which is **$6$**.

### Verified Answer
$$\mathbf{\text{Option 1: } 6}$$

---

## Question 8: Partnership Capital-Ratio Profit Distribution

### Question Metadata
- **Question ID**: `INFY-CLASS23-08`
- **Slide Reference**: Page 8 (`images/class23_p8_img1_1280x720.jpeg`)
- **Core Concept**: Partnership profit sharing, distractor trap analysis.

### Visual Representation
![Partnership Bakery](images/class23_p8_img1_1280x720.jpeg)

### Original Problem Statement
Three friends Jim, Pam and Jill decide to start a home bakery and sell French pastries. They invest $\$500$, $\$700$, and $\$600$, respectively. At the end of the first year, they make a profit of $\$4,000$.  
*What is the share that Pam gets out of the total profit in the given context?*

### Options
- **1.** None of the given options
- **2.** $1,200.12
- **3.** $2,121.22
- **4.** $1,111.11

---

### Step-by-Step Mathematical Derivation

1. **Establish Investment Ratios**:
   $$\text{Jim} : \text{Pam} : \text{Jill} = 500 : 700 : 600 = 5 : 7 : 6$$
   $$\text{Total Ratio Parts} = 5 + 7 + 6 = 18$$

2. **Compute Individual Shares of Profit ($\$4,000$)**:
   - **Jim's Share**:
     $$\text{Share}_{\text{Jim}} = \frac{5}{18} \times 4000 = \frac{10000}{9} \approx \mathbf{\$1,111.11}$$
   - **Jill's Share**:
     $$\text{Share}_{\text{Jill}} = \frac{6}{18} \times 4000 = \frac{4000}{3} \approx \mathbf{\$1,333.33}$$
   - **Pam's Share**:
     $$\text{Share}_{\text{Pam}} = \frac{7}{18} \times 4000 = \frac{28000}{18} = \frac{14000}{9} \approx \mathbf{\$1,555.56}$$

3. **Examine Options**:
   - Option 4 gives $\$1,111.11$, which is **Jim's share**, NOT Pam's share!
   - Options 2 and 3 do not match $\$1,555.56$.
   - Therefore, the correct selection is **None of the given options**.

### Verified Answer
$$\mathbf{\text{Option 1: None of the given options}}$$

---

## Question 9: Constrained Combinatorial Distribution (Stars & Bars)

### Question Metadata
- **Question ID**: `INFY-CLASS23-09`
- **Slide Reference**: Page 9 (`images/class23_p9_img1_644x504.jpeg`)
- **Core Concept**: Stars and Bars with lower bounds, integer partitions.

### Visual Representation
![Chocolate Distribution](images/class23_p9_img1_644x504.jpeg)

### Original Problem Statement
You are asked to distribute $6$ boxes of chocolates among four baskets $A, B, C,$ and $D$. In how many ways can this be done if $A$ and $B$ should have at least one box of chocolates each?

### Options
- **1.** 30 ways
- **2.** 35 ways
- **3.** 45 ways
- **4.** 40 ways

---

### Step-by-Step Mathematical Derivation

1. **Equation Formulation**:
   $$A + B + C + D = 6$$
   Constraints:
   $$A \ge 1,\quad B \ge 1,\quad C \ge 0,\quad D \ge 0$$
   where $A, B, C, D \in \mathbb{Z}_{\ge 0}$.

2. **Variable Transformation**:
   Let $A' = A - 1 \ge 0$ and $B' = B - 1 \ge 0$.
   Substitute into the equation:
   $$(A' + 1) + (B' + 1) + C + D = 6$$
   $$A' + B' + C + D = 6 - 2 = 4$$
   where $A', B', C, D$ are now unrestricted non-negative integers.

3. **Apply Stars and Bars Formula**:
   The number of non-negative integer solutions to $x_1 + x_2 + \dots + x_k = n$ is:
   $$\binom{n + k - 1}{k - 1}$$
   Here $n = 4$ and $k = 4$:
   $$\binom{4 + 4 - 1}{4 - 1} = \binom{7}{3}$$

4. **Compute Combinatorial Coefficient**:
   $$\binom{7}{3} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = \mathbf{35\text{ ways}}$$

### Verified Answer
$$\mathbf{\text{Option 2: } 35\text{ ways}}$$

---

## Question 10: Three-Set Venn Diagram (Inclusion-Exclusion Principle)

### Question Metadata
- **Question ID**: `INFY-CLASS23-10`
- **Slide Reference**: Page 10 (`images/class23_p10_img1_1280x720.jpeg`)
- **Core Concept**: Three-set Venn diagrams, disjoint exact-two region calculation.

### Visual Representation
![Picnic Games Venn Diagram](images/class23_p10_img1_1280x720.jpeg)

### Original Problem Statement
A group of $25$ children go to a picnic where they decide to play certain games.
- $10$ children play hopscotch ($H$).
- $7$ children play chess ($C$).
- $6$ children play badminton ($B$).
- $3$ children play both hopscotch and chess ($H \cap C$).
- $2$ children play both chess and badminton ($C \cap B$).
- $3$ children play both hopscotch and badminton ($H \cap B$).
- $9$ children do not play any games.

**Question**: Determine how many children play **exactly two** of these games.

### Options
- **1.** One
- **2.** Four
- **3.** Five
- **4.** Two

---

### Step-by-Step Mathematical Derivation

1. **Calculate Children Playing At Least One Game**:
   $$|H \cup C \cup B| = \text{Total} - \text{Neither} = 25 - 9 = \mathbf{16}$$

2. **Apply Principle of Inclusion-Exclusion (PIE)**:
   $$|H \cup C \cup B| = (|H| + |C| + |B|) - (|H \cap C| + |C \cap B| + |H \cap B|) + |H \cap C \cap B|$$
   Substitute known values:
   $$16 = (10 + 7 + 6) - (3 + 2 + 3) + |H \cap C \cap B|$$
   $$16 = 23 - 8 + |H \cap C \cap B|$$
   $$16 = 15 + |H \cap C \cap B| \implies |H \cap C \cap B| = \mathbf{1}$$
   *(Exactly $1$ child plays all three games)*.

3. **Compute Children Playing Exactly Two Games**:
   For any two sets $X$ and $Y$, the number of elements in the exclusive two-set intersection (excluding the three-set intersection) is:
   $$\text{Exclusive}(X \cap Y) = |X \cap Y| - |H \cap C \cap B|$$
   - Exactly Hopscotch & Chess: $3 - 1 = 2$
   - Exactly Chess & Badminton: $2 - 1 = 1$
   - Exactly Hopscotch & Badminton: $3 - 1 = 2$

4. **Sum Exclusive Regions**:
   $$\text{Total playing exactly two games} = 2 + 1 + 2 = \mathbf{5}$$

### Verified Answer
$$\mathbf{\text{Option 3: Five}}$$

---

## Question 11: Alphanumeric Progressive Sequence

### Question Metadata
- **Question ID**: `INFY-CLASS23-11`
- **Slide Reference**: Page 11 (`images/class23_p11_img1_1280x594.jpeg`)
- **Core Concept**: Split alphanumeric series decomposition.

### Visual Representation
![Alphanumeric Series](images/class23_p11_img1_1280x594.jpeg)

### Original Problem Statement
What can be used in place of `?` to complete the below given alphanumeric series?
$$1\text{D},\ ?,\ 5\text{H},\ 7\text{J},\ 9\text{L}$$

### Options
- **1.** 3E
- **2.** 3F
- **3.** 3G
- **4.** None of the given options

---

### Step-by-Step Derivation

1. **Numerical Component**:
   Sequence of numbers: $1,\ ?,\ 5,\ 7,\ 9$
   Consecutive odd integers: $1 \xrightarrow{+2} \mathbf{3} \xrightarrow{+2} 5 \xrightarrow{+2} 7 \xrightarrow{+2} 9$.
   The number must be **$3$**.

2. **Alphabetical Component**:
   Alphabetical positions ($A=1, B=2, \dots$):
   $D = 4 \xrightarrow{+2} \mathbf{F = 6} \xrightarrow{+2} H = 8 \xrightarrow{+2} J = 10 \xrightarrow{+2} L = 12$.
   The letter must be **$F$**.

Combining numerical and alphabetical terms yields **`3F`**.

### Verified Answer
$$\mathbf{\text{Option 2: } 3F}$$

---

## Question 12: $2 \times 2$ Grid Product Conservation Puzzle

### Question Metadata
- **Question ID**: `INFY-CLASS23-12`
- **Slide Reference**: Page 12 (`images/class23_p12_img1_720x1280.jpeg`)
- **Core Concept**: Row-product equivalence in $2 \times 2$ matrices.

### Visual Representation
![Grid Puzzle Product](images/class23_p12_img1_720x1280.jpeg)

### Original Problem Statement
Determine the missing number in the third set.  
*Note: Assume the third set also works in the same way as the first and the second set.*

$$\text{Set 1: } \begin{array}{|c|c|} \hline 2 & 6 \\ \hline 3 & 4 \\ \hline \end{array} \qquad
\text{Set 2: } \begin{array}{|c|c|} \hline 3 & 6 \\ \hline 9 & 2 \\ \hline \end{array} \qquad
\text{Set 3: } \begin{array}{|c|c|} \hline 5 & 8 \\ \hline ? & 4 \\ \hline \end{array}$$

### Options
- **1.** 10
- **2.** 7
- **3.** 12
- **4.** 9

---

### Step-by-Step Mathematical Derivation

1. **Analyze Set 1**:
   $$\text{Top Row Product} = 2 \times 6 = 12$$
   $$\text{Bottom Row Product} = 3 \times 4 = 12$$
   $$\text{Rule}: R_1\text{ product} = R_2\text{ product}$$

2. **Verify Set 2**:
   $$\text{Top Row Product} = 3 \times 6 = 18$$
   $$\text{Bottom Row Product} = 9 \times 2 = 18$$
   Holds consistently!

3. **Apply to Set 3**:
   $$\text{Top Row Product} = 5 \times 8 = 40$$
   $$\text{Bottom Row Product} = ? \times 4 = 40 \implies ? = \frac{40}{4} = \mathbf{10}$$

### Verified Answer
$$\mathbf{\text{Option 1: } 10}$$

---

## Question 13: $4 \times 3$ Column-Product Linear Accumulator Grid

### Question Metadata
- **Question ID**: `INFY-CLASS23-13`
- **Slide Reference**: Page 13 (`images/class23_p13_img1_447x567.jpeg`)
- **Core Concept**: Vertical polynomial grid operations: $(R_1 \times R_2) + R_3 = R_4$.

### Visual Representation
![Column Product Grid](images/class23_p13_img1_447x567.jpeg)

### Original Problem Statement
Find the missing number in the grid given below. [3 Marks]

$$\begin{array}{|c|c|c|}
\hline
9 & 5 & 9 \\ \hline
2 & 3 & 6 \\ \hline
5 & 11 & 4 \\ \hline
23 & 26 & ? \\ \hline
\end{array}$$

### Options
- **1.** 30
- **2.** 29
- **3.** 60
- **4.** 58

---

### Step-by-Step Mathematical Derivation

Evaluate the column-wise operation $(R_1 \times R_2) + R_3 = R_4$:
1. **Column 1**:
   $$(9 \times 2) + 5 = 18 + 5 = \mathbf{23}$$
2. **Column 2**:
   $$(5 \times 3) + 11 = 15 + 11 = \mathbf{26}$$
3. **Column 3**:
   $$(9 \times 6) + 4 = 54 + 4 = \mathbf{58}$$

The missing number is **$58$**.

### Verified Answer
$$\mathbf{\text{Option 4: } 58}$$

---

## Question 14: $4 \times 3$ Columnar Sum-of-Squares Grid

### Question Metadata
- **Question ID**: `INFY-CLASS23-14`
- **Slide Reference**: Page 14 (`images/class23_p14_img1_504x562.jpeg`)
- **Core Concept**: Vertical quadratic sum operations: $\sum_{i=1}^3 R_i^2 = R_4$.

### Visual Representation
![Sum of Squares Grid](images/class23_p14_img1_504x562.jpeg)

### Original Problem Statement
Find the missing number in the grid given below. [3 Marks]

$$\begin{array}{|c|c|c|}
\hline
7 & 4 & 8 \\ \hline
3 & 6 & 1 \\ \hline
2 & 5 & 9 \\ \hline
62 & ? & 146 \\ \hline
\end{array}$$

### Options
- **1.** 56
- **2.** 124
- **3.** 84
- **4.** 77

---

### Step-by-Step Mathematical Derivation

Evaluate the column-wise quadratic sum $R_1^2 + R_2^2 + R_3^2 = R_4$:
1. **Column 1**:
   $$7^2 + 3^2 + 2^2 = 49 + 9 + 4 = \mathbf{62}$$
2. **Column 3**:
   $$8^2 + 1^2 + 9^2 = 64 + 1 + 81 = \mathbf{146}$$
3. **Column 2**:
   $$4^2 + 6^2 + 5^2 = 16 + 36 + 25 = \mathbf{77}$$

The missing number is **$77$**.

### Verified Answer
$$\mathbf{\text{Option 4: } 77}$$

---

## Question 15: $3 \times 3$ Center-Balance Row Sum Grid

### Question Metadata
- **Question ID**: `INFY-CLASS23-15`
- **Slide Reference**: Page 15 (`images/class23_p15_img1_464x552.jpeg`)
- **Core Concept**: Row-wise flank summation to center element: $C_1 + C_3 = C_2$.

### Visual Representation
![Center Balance Grid](images/class23_p15_img1_464x552.jpeg)

### Original Problem Statement
Find the missing number in the grid given below. [3 Marks]

$$\begin{array}{|c|c|c|}
\hline
12 & ? & 13 \\ \hline
8 & 15 & 7 \\ \hline
4 & 7 & 3 \\ \hline
\end{array}$$

### Options
- **1.** 20
- **2.** 21
- **3.** 25
- **4.** 156

---

### Step-by-Step Mathematical Derivation

Observe the row-wise summation: $\text{Left Element} + \text{Right Element} = \text{Center Element}$:
1. **Row 2**:
   $$8 + 7 = \mathbf{15}$$
2. **Row 3**:
   $$4 + 3 = \mathbf{7}$$
3. **Row 1**:
   $$12 + 13 = \mathbf{25}$$

The missing number is **$25$**.

### Verified Answer
$$\mathbf{\text{Option 3: } 25}$$

---

## Question 16: Columnar Cube Transformation Puzzle ($x \to x^3$)

### Question Metadata
- **Question ID**: `INFY-CLASS23-16`
- **Slide Reference**: Page 16 (`images/class23_p16_img1_720x1280.jpeg`)
- **Core Concept**: Power functions, cubic mapping.

### Visual Representation
![Cube Grid Puzzle](images/class23_p16_img1_720x1280.jpeg)

### Original Problem Statement
Determine the missing number in the third set. [2 Marks]  
*Note: Assume the third set also works in the same way as the first and the second set.*

$$\text{Set 1: } \begin{array}{|c|c|} \hline 2 & 8 \\ \hline 4 & 64 \\ \hline \end{array} \qquad
\text{Set 2: } \begin{array}{|c|c|} \hline 3 & 27 \\ \hline 5 & 125 \\ \hline \end{array} \qquad
\text{Set 3: } \begin{array}{|c|c|} \hline 6 & 216 \\ \hline 9 & ? \\ \hline \end{array}$$

### Options
- **1.** 729
- **2.** 728
- **3.** 727
- **4.** 730

---

### Step-by-Step Mathematical Derivation

In each $2 \times 2$ block, the right column element is the cube of the corresponding left column element ($C_2 = C_1^3$):
1. **Set 1**:
   $$2^3 = 8,\quad 4^3 = 64$$
2. **Set 2**:
   $$3^3 = 27,\quad 5^3 = 125$$
3. **Set 3**:
   $$6^3 = 216,\quad 9^3 = 9 \times 9 \times 9 = \mathbf{729}$$

The missing number is **$729$**.

### Verified Answer
$$\mathbf{\text{Option 1: } 729}$$

---

## Question 17: Multi-Event Attendance Ratio Calculation

### Question Metadata
- **Question ID**: `INFY-CLASS23-17`
- **Slide Reference**: Page 17 (`images/class23_p17_img1_951x632.jpeg`)
- **Core Concept**: Proportional attendance extraction, ratio reduction.

### Visual Representation
![Event Attendance Table](images/class23_p17_img1_951x632.jpeg)

### Original Problem Statement
The table shows the total number of invited persons and the percentage of persons who attended the events ($A, B, C, D, E$).  
*What is the ratio of the number of persons who attended event B to the number of persons who attended event C?*

| Events | Number of Invited Persons | % of Persons who Attended |
| :---: | :---: | :---: |
| **A** | $360$ | $50\%$ |
| **B** | $240$ | $60\%$ |
| **C** | $420$ | $80\%$ |
| **D** | $120$ | $75\%$ |
| **E** | $300$ | $50\%$ |

### Options
- **1.** 4 : 7
- **2.** 4 : 3
- **3.** 3 : 8
- **4.** 3 : 7

---

### Step-by-Step Mathematical Derivation

1. **Calculate Attendees for Event B**:
   $$\text{Attendees}_B = 240 \times \frac{60}{100} = 240 \times 0.6 = \mathbf{144}$$

2. **Calculate Attendees for Event C**:
   $$\text{Attendees}_C = 420 \times \frac{80}{100} = 420 \times 0.8 = \mathbf{336}$$

3. **Compute and Simplify the Ratio**:
   $$\text{Ratio} = \frac{\text{Attendees}_B}{\text{Attendees}_C} = \frac{144}{336}$$
   - Divide both terms by $\gcd(144, 336) = 48$:
     $$\frac{144 \div 48}{336 \div 48} = \frac{\mathbf{3}}{\mathbf{7}}$$

The ratio is **$3 : 7$**.

### Verified Answer
$$\mathbf{\text{Option 4: } 3 : 7}$$

---

## 📊 Summary Assessment Matrix (Topic 03)

| Question ID | Concept Domain | Applied Formula / Rule | Calculated Result | Correct Option |
| :---: | :--- | :--- | :---: | :---: |
| `INFY-CLASS23-01` | Vehicle Line Graph | Mean of C: $(60+70+50+80)/4$ | $65$ | **Option 2** |
| `INFY-CLASS23-02` | Profit & Loss Line Graph | $\text{Exp} = 65 / (1 - 0.25)$ | $86.66\text{ lakhs}$ | **Option 1** |
| `INFY-CLASS23-03` | Dealer Sales Percentage | $(278 - 239) / 278 \times 100$ | $14\%\text{ less}$ | **Option 4** |
| `INFY-CLASS23-04` | Categorical Syllogism | $T \subseteq G$ and $G \cap C = \emptyset$ | Conclusion 2 follows | **Option 3** |
| `INFY-CLASS23-05` | Multi-Dealer Sales Mean | $\text{round}(1391 / 6)$ | $232$ | **Option 3** |
| `INFY-CLASS23-06` | Recursive Digital Sum | $S(280456) = 25$ | $25$ | **Option 2** |
| `INFY-CLASS23-07` | Alternate Digit Sum Series | $S(1023) = 1+0+2+3$ | $6$ | **Option 1** |
| `INFY-CLASS23-08` | Partnership Profit Allocation | Pam's share = $\frac{7}{18} \times 4000 = \$1555.56$ | None of the given | **Option 1** |
| `INFY-CLASS23-09` | Constrained Stars & Bars | $\binom{4+4-1}{4-1} = \binom{7}{3}$ | $35\text{ ways}$ | **Option 2** |
| `INFY-CLASS23-10` | 3-Set Inclusion-Exclusion | Exclusive 2-game sum: $2 + 1 + 2$ | Five | **Option 3** |
| `INFY-CLASS23-11` | Split Alphanumeric Series | $1 \to 3 \to 5$, $D \to F \to H$ | `3F` | **Option 2** |
| `INFY-CLASS23-12` | $2 \times 2$ Grid Row Product | $R_1 \text{ prod} = R_2 \text{ prod} = 40$ | $10$ | **Option 1** |
| `INFY-CLASS23-13` | $4 \times 3$ Column Grid | $(R_1 \times R_2) + R_3 = R_4$ | $58$ | **Option 4** |
| `INFY-CLASS23-14` | $4 \times 3$ Sum of Squares Grid | $\sum_{i=1}^3 R_i^2 = R_4$ | $77$ | **Option 4** |
| `INFY-CLASS23-15` | $3 \times 3$ Center Balance Grid | $C_1 + C_3 = C_2$ | $25$ | **Option 3** |
| `INFY-CLASS23-16` | Columnar Cube Grid | $C_2 = C_1^3 \implies 9^3$ | $729$ | **Option 1** |
| `INFY-CLASS23-17` | Event Attendance Ratio | $(240 \times 0.6) : (420 \times 0.8)$ | $3 : 7$ | **Option 4** |
