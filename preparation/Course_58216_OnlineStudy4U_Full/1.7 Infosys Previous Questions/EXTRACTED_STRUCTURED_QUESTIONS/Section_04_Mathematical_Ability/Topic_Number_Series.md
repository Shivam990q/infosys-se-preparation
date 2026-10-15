# Topic: Number Series and Recurrent Sequences

> **Assessment Stream**: Infosys Systems Engineer (SE) Examination
> **Section**: Section 04 — Mathematical Ability
> **Total Extracted Questions**: 5 Official Questions
> **Verification Status**: 100% Mathematically Proven (Zero Guesswork, Zero Placeholders)
> **Figure References**: High-Resolution Original Slide Captures in ../images/

---

## Question 1: Alternating Dual Interleaved Number Series

### Question Metadata
- **Question ID**: `INFY-DI-PYQ-07`
- **Slide Reference**: Page 7 (`images/di_p7_img1_1419x587.jpeg`)
- **Core Concept**: Interleaved arithmetic sequences, missing term identification.

### Visual Representation
![Alternating Series](../images/di_p7_img1_1419x587.jpeg)

### Original Problem Statement
Find the missing term in the following number series: (Choose one solution)
$$15,\ 17,\ 23,\ 22,\ 31,\ \underline{\hspace{1cm}},\ 39,\ 32$$

### Options
- **1.** 27
- **2.** 26
- **3.** 28
- **4.** 24

---

### Step-by-Step Mathematical Derivation

This sequence is formed by two independent interleaved arithmetic progressions:

1. **Odd Positions ($1^{\text{st}}, 3^{\text{rd}}, 5^{\text{th}}, 7^{\text{th}}$)**:
   $$T_1 = 15$$
   $$T_3 = 15 + 8 = 23$$
   $$T_5 = 23 + 8 = 31$$
   $$T_7 = 31 + 8 = 39$$
   *(Common difference $d_1 = +8$)*

2. **Even Positions ($2^{\text{nd}}, 4^{\text{th}}, 6^{\text{th}}, 8^{\text{th}}$)**:
   $$T_2 = 17$$
   $$T_4 = 17 + 5 = 22$$
   $$T_6 = 22 + 5 = \mathbf{27}$$
   $$T_8 = 27 + 5 = 32$$
   *(Common difference $d_2 = +5$)*

The missing term is at index 6, which is $T_6 = 22 + 5 = \mathbf{27}$.

### Verified Answer
$$\mathbf{\text{Option 1: } 27}$$

---

---

## Question 2: Interleaved Number Series (Verification Slide)

### Question Metadata
- **Question ID**: `INFY-DI-PYQ-13`
- **Slide Reference**: Page 13 (`images/di_p13_img1_936x432.jpeg`)
- **Core Concept**: Alternating sequence consistency check.

### Visual Representation
![Interleaved Series](../images/di_p13_img1_936x432.jpeg)

### Original Problem Statement
Find the missing term in the following series: (Choose one solution)
$$15,\ 17,\ 23,\ 22,\ 31,\ \underline{\hspace{1cm}},\ 39,\ 32$$

### Options
- **1.** 24
- **2.** 28
- **3.** 26
- **4.** 27

---

### Mathematical Proof
Identical sequence structure as Question 7.
- Even positions: $17 \xrightarrow{+5} 22 \xrightarrow{+5} \mathbf{27} \xrightarrow{+5} 32$.

### Verified Answer
$$\mathbf{\text{Option 4: } 27}$$

---

---

## Question 3: Cubic Polynomial Number Series ($n^3 + n^2 + n$)

### Question Metadata
- **Question ID**: `INFY-DI-PYQ-16`
- **Slide Reference**: Page 16 (`images/di_p16_img1_916x574.jpeg`)
- **Core Concept**: Polynomial sequence deduction, cubic differences.

### Visual Representation
![Cubic Series](../images/di_p16_img1_916x574.jpeg)

### Original Problem Statement
Find the missing term in the following number series: (Choose one solution)
$$3,\ 14,\ 39,\ 84,\ 155,\ \underline{\hspace{1cm}},\ 399$$

### Options
- **1.** 216
- **2.** 258
- **3.** 222
- **4.** 180

---

### Step-by-Step Mathematical Derivation

#### Method 1: Polynomial closed-form formula
Observe each term as a function of its index $n \in \{1, 2, 3, 4, 5, 6, 7\}$:
$$T(n) = n^3 + n^2 + n = n(n^2 + n + 1)$$

$$\begin{aligned}
T(1) &= 1^3 + 1^2 + 1 = 1 + 1 + 1 = 3 \\
T(2) &= 2^3 + 2^2 + 2 = 8 + 4 + 2 = 14 \\
T(3) &= 3^3 + 3^2 + 3 = 27 + 9 + 3 = 39 \\
T(4) &= 4^3 + 4^2 + 4 = 64 + 16 + 4 = 84 \\
T(5) &= 5^3 + 5^2 + 5 = 125 + 25 + 5 = 155 \\
\mathbf{T(6)} &= 6^3 + 6^2 + 6 = 216 + 36 + 6 = \mathbf{258} \\
T(7) &= 7^3 + 7^2 + 7 = 343 + 49 + 7 = 399
\end{aligned}$$

#### Method 2: Method of finite differences
$$\begin{array}{lccccccccccccc}
\text{Series:} & 3 & & 14 & & 39 & & 84 & & 155 & & \mathbf{258} & & 399 \\
\Delta^1: & & 11 & & 25 & & 45 & & 71 & & \mathbf{103} & & \mathbf{141} & \\
\Delta^2: & & & 14 & & 20 & & 26 & & \mathbf{32} & & \mathbf{38} & & \\
\Delta^3: & & & & 6 & & 6 & & \mathbf{6} & & \mathbf{6} & & &
\end{array}$$

Constant third difference $\Delta^3 = 6$ proves that the sequence is cubic:
$$\Delta^2_4 = 26 + 6 = 32 \implies \Delta^1_5 = 71 + 32 = 103 \implies T_6 = 155 + 103 = \mathbf{258}$$

### Verified Answer
$$\mathbf{\text{Option 2: } 258}$$

---

## 📊 Summary Assessment Matrix (Topic 02)

| Question ID | Concept Domain | Key Formula / Rule | Calculated Result | Correct Option |
| :---: | :--- | :--- | :---: | :---: |
| `INFY-DI-01` | Shopping Mall Demographics | Mean female visitors: $105473 / 4$ | $26368.25$ | **Option 2** |
| `INFY-DI-02` | Sector Enrollment & Success | $\sum (\text{Enrolled} \times \text{Rate})$ | $6640$ | **Option 3** |
| `INFY-DI-03` | Positional Letter Analogy | Alphabet shift $(+5, -5, +5)$ | `SEM : XZR` | **Option 2** |
| `INFY-DI-04` | Ogive Passing Proportion | Total $50$, $\le 29$ is $33$; $(50-33)/50$ | $34\%$ | **Option 4** |
| `INFY-DI-05` | Positional Encryption | Offset rule $(+1, +1, -1, -1)$ | `6827` | **Option 2** |
| `INFY-DI-06` | Word Encoding | Position $+8$ for each letter | `24-26-13-27-13-22-28` | **Option 3** |
| `INFY-DI-07` | Interleaved Dual Series | Even terms: $T_n = T_{n-2} + 5$ | $27$ | **Option 1** |
| `INFY-DI-08` | Operator Interchange I | Interchange $\times$ and $-$ | $179$ | **Option 3** |
| `INFY-DI-09` | Operator Interchange II | Interchange $+$ and $\div$ | $18$ | **Option 1** |
| `INFY-DI-10` | Linear System Inequality | $x=50, y=-31 \implies x > y$ | $x > y$ | **Option 3** |
| `INFY-DI-11` | Frequency Polygon Equality | $2014 \ (485) = 2019 \ (485)$ | $2014 \text{ and } 2019$ | **Option 1** |
| `INFY-DI-12` | Two-Exam Result Partition | Total $A (222) + C (200)$ | $422$ | **Option 2** |
| `INFY-DI-13` | Interleaved Number Series | Duplicate check: $22 + 5 = 27$ | $27$ | **Option 4** |
| `INFY-DI-14` | Linear Data Sufficiency | Fixed bounds: $pos(S)=1, pos(T)=6$ | Statement II alone | **Option 4** |
| `INFY-DI-15` | Cumulative Frequency | Sum frequencies: $8 + 10 + 13$ | $31$ | **Option 2** |
| `INFY-DI-16` | Cubic Polynomial Series | $n^3 + n^2 + n$ for $n=6$ | $258$ | **Option 2** |

---

## Question 4: Recursive Digital Sum Series

### Question Metadata
- **Question ID**: `INFY-CLASS23-06`
- **Slide Reference**: Page 6 (`images/class23_p6_img1_1280x720.jpeg`)
- **Core Concept**: Digit sum iterative reduction, sequence convergence.

### Visual Representation
![Digital Sum Series](../images/class23_p6_img1_1280x720.jpeg)

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

---

## Question 5: Alternate Digit-Sum Interleaved Sequence

### Question Metadata
- **Question ID**: `INFY-CLASS23-07`
- **Slide Reference**: Page 7 (`images/class23_p7_img1_697x703.jpeg`)
- **Core Concept**: Interleaved number-property mapping, digital sum extraction.

### Visual Representation
![Interleaved Digit Sum](../images/class23_p7_img1_697x703.jpeg)

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

---
