# Infosys Numerical Puzzle Top 30 Practice Compendium
**Source Document:** `Infosys_Numerical_Puzzle_Top30.pdf`  
**Target Role:** Infosys Systems Engineer (SE) | **Category:** Numeric Puzzle Solving & Logic  
**Total Verified Questions:** `30` | **Status:** `100% Solved with Step-by-Step Proofs`

---

## 📊 Puzzle Index & Quick Answer Key

| Q# | Problem Type / Topic | Answer Key | Deductive Result |
|:---|:---|:---:|:---|
| Q01 | `In the cryptarithm SEND + MORE = MONEY, each ...` | **(B)** | 14 |
| Q02 | `Find the next term in the series: 3, 8, 18, 3...` | **(B)** | 158 |
| Q03 | `In this 3 × 3 magic square every row, column ...` | **(D)** | 12 |
| Q04 | `Every row follows the same rule. Find the mis...` | **(B)** | 289 |
| Q05 | `Find the missing term: 2, 6, 12, 20, 30, 42, ...` | **(D)** | 56 |
| Q06 | `Among 8 identical-looking coins, one is sligh...` | **(A)** | 2 |
| Q07 | `Fill the 4 × 4 Sudoku so that every row, colu...` | **(B)** | 8 |
| Q08 | `Find the next term in the series: 2, 3, 5, 9,...` | **(A)** | 65 |
| Q09 | `What is the smaller angle between the hour ha...` | **(B)** | 130 |
| Q10 | `Every row follows the same rule. Find the mis...` | **(A)** | 84 |
| Q11 | `In a number pyramid, each brick is the sum of...` | **(D)** | 51 |
| Q12 | `Find the next term in the series: 7, 10, 8, 1...` | **(C)** | 10 |
| Q13 | `This 3 × 3 grid is a magic square (all rows, ...` | **(C)** | 10 |
| Q14 | `Find the next term in the series: 5, 11, 23, ...` | **(C)** | 191 |
| Q15 | `If 1st January 2026 is a Thursday, which day ...` | **(B)** | Saturday |
| Q16 | `Fill the 4 × 4 Sudoku so that every row, colu...` | **(A)** | 16 |
| Q17 | `Find the next term in the series: 4, 9, 25, 4...` | **(D)** | 289 |
| Q18 | `How many three-digit numbers have a digit sum...` | **(C)** | 10 |
| Q19 | `Every column follows the same rule. Find the ...` | **(A)** | 12 |
| Q20 | `Find the next term in the series: 3, 6, 7, 14...` | **(B)** | 31 |
| Q21 | `If × means +, + means -, and - means ×, what ...` | **(C)** | 8 |
| Q22 | `Find the next term in the series: 2, 12, 36, ...` | **(D)** | 252 |
| Q23 | `Among 12 coins, one is either heavier or ligh...` | **(D)** | 3 |
| Q24 | `At a meeting, 12 people each shake hands exac...` | **(B)** | 66 |
| Q25 | `Find the next term in the series: 1, 2, 6, 24...` | **(C)** | 720 |
| Q26 | `How many two-digit numbers are equal to 4 tim...` | **(B)** | 4 |
| Q27 | `What is the smallest three-digit number that ...` | **(A)** | 108 |
| Q28 | `What is the last digit of 7 raised to the pow...` | **(A)** | 9 |
| Q29 | `If letters take their alphabet positions (A =...` | **(A)** | 26 |
| Q30 | `A two-digit number has a digit sum of 9. When...` | **(C)** | 36 |

---

## 🧩 Detailed Step-by-Step Puzzle Solutions

### Puzzle 1

**Problem Statement:**
In the cryptarithm SEND + MORE = MONEY, each letter stands for a different digit.
Find the value of M + O + N + E + Y.

**Options:**
- **(A)** `12`
- ✅ **(B)** `14` *(Correct Answer)*
- **(C)** `16`
- **(D)** `18`

**Correct Answer:** **(B)** `14`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** 9567 + 1085 = 10652. So M = 1, O = 0, N = 6, E = 5 and Y = 2, and their sum is 14.
- **Cryptarithmetic Axioms & Carry Propagation:**
  1. In $SEND + MORE = MONEY$, the sum of two 4-digit numbers produces a 5-digit number, so the leading carry digit must be $M = 1$.
  2. Since $M = 1$, $S + 1 (+ \text{carry}) = 10 + O$. For $O$ to be a single digit, $S$ must be 9 and $O = 0$ (or $S = 8$ with carry 1 and $O = 0$). With $O = 0$, $E + 0 = N$ implies a carry of 1 from $N + R$, so $E + 1 = N$.
  3. Tracing column additions yields the unique solution: $S = 9, E = 5, N = 6, D = 7, M = 1, O = 0, R = 8, Y = 2$.
  4. Arithmetic verification: $9567 + 1085 = 10652$.
  5. Calculating requested sum: $M + O + N + E + Y = 1 + 0 + 6 + 5 + 2 = 14$.

#### Option Elimination & Verification:
  - **(A) `12`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `14`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(C) `16`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `18`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(B)**

---

### Puzzle 2

**Problem Statement:**
Find the next term in the series: 3, 8, 18, 38, 78, ?

**Options:**
- **(A)** `146`
- ✅ **(B)** `158` *(Correct Answer)*
- **(C)** `152`
- **(D)** `162`

**Correct Answer:** **(B)** `158`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** Each term is double the previous term plus 2. So 78 × 2 + 2 = 158.
- **Sequence Term Analysis & Progression Rule:**
  - Each step follows the recurrence relation established above.
  - Calculated value confirms: **158**.

#### Option Elimination & Verification:
  - **(A) `146`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `158`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(C) `152`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `162`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(B)**

---

### Puzzle 3

**Problem Statement:**
```text
In this 3 × 3 magic square every row, column and diagonal
has the same sum. Find the sum of the three missing
numbers.
8
?
6
3
5
?
?
9
2
```

**Options:**
- **(A)** `10`
- **(B)** `14`
- **(C)** `15`
- ✅ **(D)** `12` *(Correct Answer)*

**Correct Answer:** **(D)** `12`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** The magic sum is 15 (middle row 3 + 5 + 7). The missing numbers are 1, 7 and 4, so 1 + 7 + 4 = 12. Infosys Numerical Puzzle Top 30 Practice Questions Page 3
- **Matrix / Grid Row-Column Invariant:**
  - Applying the row-wise functional mapping: The magic sum is 15 (middle row 3 + 5 + 7). The missing numbers are 1, 7 and 4, so 1 + 7 + 4 = 12. Infosys Numerical Puzzle Top 30 Practice Questions Page 3
  - The third column element is identically produced, giving **12**.

#### Option Elimination & Verification:
  - **(A) `10`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `14`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `15`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `12`:** ✅ **CORRECT.** Exactly matches the deduced value.

- **Final Answer:** Option **(D)**

---

### Puzzle 4

**Problem Statement:**
```text
Every row follows the same rule. Find the missing number.
3
4
25
5
12
169
8
15
?
```

**Options:**
- **(A)** `221`
- ✅ **(B)** `289` *(Correct Answer)*
- **(C)** `255`
- **(D)** `306`

**Correct Answer:** **(B)** `289`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** In each row, (first)² + (second)² = third. So 8² + 15² = 64 + 225 = 289.
- **Matrix / Grid Row-Column Invariant:**
  - Applying the row-wise functional mapping: In each row, (first)² + (second)² = third. So 8² + 15² = 64 + 225 = 289.
  - The third column element is identically produced, giving **289**.

#### Option Elimination & Verification:
  - **(A) `221`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `289`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(C) `255`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `306`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(B)**

---

### Puzzle 5

**Problem Statement:**
Find the missing term: 2, 6, 12, 20, 30, 42, ?

**Options:**
- **(A)** `52`
- **(B)** `54`
- **(C)** `58`
- ✅ **(D)** `56` *(Correct Answer)*

**Correct Answer:** **(D)** `56`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** The differences are 4, 6, 8, 10, 12, so the next difference is 14. Hence 42 + 14 = 56.
- **Sequence Term Analysis & Progression Rule:**
  - Each step follows the recurrence relation established above.
  - Calculated value confirms: **56**.

#### Option Elimination & Verification:
  - **(A) `52`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `54`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `58`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `56`:** ✅ **CORRECT.** Exactly matches the deduced value.

- **Final Answer:** Option **(D)**

---

### Puzzle 6

**Problem Statement:**
Among 8 identical-looking coins, one is slightly heavier. Using a balance scale,
what is the minimum number of weighings that guarantees finding it?

**Options:**
- ✅ **(A)** `2` *(Correct Answer)*
- **(B)** `1`
- **(C)** `3`
- **(D)** `4`

**Correct Answer:** **(A)** `2`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** Split the coins into 3, 3 and 2. Weigh 3 against 3 to find the heavy group, then one more weighing finds the coin. Two weighings are enough. Infosys Numerical Puzzle Top 30 Practice Questions Page 4
- **Information-Theoretic Weighing Bounds:**
  - For a two-pan balance scale, each weighing divides the search space into 3 outcomes (left heavy, right heavy, balanced): $3^k \ge N$.
  - For digital scales with exact weight readout, each bag contributes a distinct number of coins ($1, 2, 3, \dots, n$) to generate a unique excess sum.
  - Required optimal weighings: **2**.

#### Option Elimination & Verification:
  - **(A) `2`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(B) `1`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `3`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `4`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(A)**

---

### Puzzle 7

**Problem Statement:**
```text
Fill the 4 × 4 Sudoku so that every row, column and 2 × 2 box
contains the digits 1 to 4. Find the sum of the four missing
digits.
1
2
?
4
?
4
1
2
2
?
4
3
4
3
2
?
```

**Options:**
- **(A)** `6`
- ✅ **(B)** `8` *(Correct Answer)*
- **(C)** `7`
- **(D)** `9`

**Correct Answer:** **(B)** `8`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** The completed rows are 1 2 3 4, 3 4 1 2, 2 1 4 3 and 4 3 2 1. The missing digits are 3, 3, 1 and 1, so the sum is 8.
- **Matrix / Grid Row-Column Invariant:**
  - Applying the row-wise functional mapping: The completed rows are 1 2 3 4, 3 4 1 2, 2 1 4 3 and 4 3 2 1. The missing digits are 3, 3, 1 and 1, so the sum is 8.
  - The third column element is identically produced, giving **8**.

#### Option Elimination & Verification:
  - **(A) `6`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `8`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(C) `7`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `9`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(B)**

---

### Puzzle 8

**Problem Statement:**
Find the next term in the series: 2, 3, 5, 9, 17, 33, ?

**Options:**
- ✅ **(A)** `65` *(Correct Answer)*
- **(B)** `63`
- **(C)** `64`
- **(D)** `67`

**Correct Answer:** **(A)** `65`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** Each term is double the previous term minus 1. So 33 × 2 - 1 = 65.
- **Sequence Term Analysis & Progression Rule:**
  - Each step follows the recurrence relation established above.
  - Calculated value confirms: **65**.

#### Option Elimination & Verification:
  - **(A) `65`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(B) `63`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `64`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `67`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(A)**

---

### Puzzle 9

**Problem Statement:**
What is the smaller angle between the hour hand and the minute hand of a
clock at 3:40?

**Options:**
- **(A)** `110`
- ✅ **(B)** `130` *(Correct Answer)*
- **(C)** `120`
- **(D)** `140`

**Correct Answer:** **(B)** `130`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** At 40 minutes the minute hand is at 240°. The hour hand is at 90° + 20° = 110°. The angle is 240° - 110° = 130°. Infosys Numerical Puzzle Top 30 Practice Questions Page 5

#### Option Elimination & Verification:
  - **(A) `110`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `130`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(C) `120`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `140`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(B)**

---

### Puzzle 10

**Problem Statement:**
```text
Every row follows the same rule. Find the missing number.
2
3
12
4
5
40
6
7
?
```

**Options:**
- ✅ **(A)** `84` *(Correct Answer)*
- **(B)** `42`
- **(C)** `78`
- **(D)** `96`

**Correct Answer:** **(A)** `84`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** In each row, third number = first × second × 2. So 6 × 7 × 2 = 84.
- **Matrix / Grid Row-Column Invariant:**
  - Applying the row-wise functional mapping: In each row, third number = first × second × 2. So 6 × 7 × 2 = 84.
  - The third column element is identically produced, giving **84**.

#### Option Elimination & Verification:
  - **(A) `84`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(B) `42`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `78`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `96`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(A)**

---

### Puzzle 11

**Problem Statement:**
In a number pyramid, each brick is the sum of the two bricks directly below it. If
the bottom row is 5, 9, 4, 7, what number is at the top?

**Options:**
- **(A)** `48`
- **(B)** `49`
- **(C)** `53`
- ✅ **(D)** `51` *(Correct Answer)*

**Correct Answer:** **(D)** `51`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** Second row: 14, 13, 11. Third row: 27, 24. Top brick: 27 + 24 = 51.
- **Matrix / Grid Row-Column Invariant:**
  - Applying the row-wise functional mapping: Second row: 14, 13, 11. Third row: 27, 24. Top brick: 27 + 24 = 51.
  - The third column element is identically produced, giving **51**.

#### Option Elimination & Verification:
  - **(A) `48`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `49`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `53`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `51`:** ✅ **CORRECT.** Exactly matches the deduced value.

- **Final Answer:** Option **(D)**

---

### Puzzle 12

**Problem Statement:**
Find the next term in the series: 7, 10, 8, 11, 9, 12, ?

**Options:**
- **(A)** `9`
- **(B)** `11`
- ✅ **(C)** `10` *(Correct Answer)*
- **(D)** `13`

**Correct Answer:** **(C)** `10`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** The pattern is +3, -2, +3, -2, and so on. After 12 comes 12 - 2 = 10. Infosys Numerical Puzzle Top 30 Practice Questions Page 6
- **Sequence Term Analysis & Progression Rule:**
  - Each step follows the recurrence relation established above.
  - Calculated value confirms: **10**.

#### Option Elimination & Verification:
  - **(A) `9`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `11`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `10`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(D) `13`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(C)**

---

### Puzzle 13

**Problem Statement:**
```text
This 3 × 3 grid is a magic square (all rows, columns and
diagonals have the same sum). Find the number in the
bottom-middle cell.
9
2
?
?
6
8
5
?
3
```

**Options:**
- **(A)** `8`
- **(B)** `9`
- ✅ **(C)** `10` *(Correct Answer)*
- **(D)** `12`

**Correct Answer:** **(C)** `10`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** The completed square is 9 2 7 / 4 6 8 / 5 10 3 with a magic sum of 18. Bottom row: 18 - 5 - 3 = 10.
- **Matrix / Grid Row-Column Invariant:**
  - Applying the row-wise functional mapping: The completed square is 9 2 7 / 4 6 8 / 5 10 3 with a magic sum of 18. Bottom row: 18 - 5 - 3 = 10.
  - The third column element is identically produced, giving **10**.

#### Option Elimination & Verification:
  - **(A) `8`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `9`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `10`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(D) `12`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(C)**

---

### Puzzle 14

**Problem Statement:**
Find the next term in the series: 5, 11, 23, 47, 95, ?

**Options:**
- **(A)** `189`
- **(B)** `190`
- ✅ **(C)** `191` *(Correct Answer)*
- **(D)** `193`

**Correct Answer:** **(C)** `191`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** Each term is double the previous term plus 1. So 95 × 2 + 1 = 191.
- **Sequence Term Analysis & Progression Rule:**
  - Each step follows the recurrence relation established above.
  - Calculated value confirms: **191**.

#### Option Elimination & Verification:
  - **(A) `189`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `190`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `191`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(D) `193`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(C)**

---

### Puzzle 15

**Problem Statement:**
If 1st January 2026 is a Thursday, which day of the week will 1st January 2028 be?

**Options:**
- **(A)** `Friday`
- ✅ **(B)** `Saturday` *(Correct Answer)*
- **(C)** `Sunday`
- **(D)** `Monday`

**Correct Answer:** **(B)** `Saturday`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** 2026 and 2027 are not leap years, so the gap is 730 days = 104 weeks + 2 days. Thursday + 2 days = Saturday. Infosys Numerical Puzzle Top 30 Practice Questions Page 7

#### Option Elimination & Verification:
  - **(A) `Friday`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `Saturday`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(C) `Sunday`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `Monday`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(B)**

---

### Puzzle 16

**Problem Statement:**
```text
Fill the 4 × 4 Sudoku so that every row, column and 2 × 2 box
contains the digits 1 to 4. Find the sum of the six missing
digits.
2
?
4
3
?
3
?
1
1
2
?
4
3
?
1
?
```

**Options:**
- ✅ **(A)** `16` *(Correct Answer)*
- **(B)** `14`
- **(C)** `15`
- **(D)** `17`

**Correct Answer:** **(A)** `16`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** The completed rows are 2 1 4 3, 4 3 2 1, 1 2 3 4 and 3 4 1 2. The missing digits are 1, 4, 2, 3, 4 and 2, so the sum is 16.
- **Matrix / Grid Row-Column Invariant:**
  - Applying the row-wise functional mapping: The completed rows are 2 1 4 3, 4 3 2 1, 1 2 3 4 and 3 4 1 2. The missing digits are 1, 4, 2, 3, 4 and 2, so the sum is 16.
  - The third column element is identically produced, giving **16**.

#### Option Elimination & Verification:
  - **(A) `16`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(B) `14`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `15`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `17`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(A)**

---

### Puzzle 17

**Problem Statement:**
Find the next term in the series: 4, 9, 25, 49, 121, 169, ?

**Options:**
- **(A)** `225`
- **(B)** `256`
- **(C)** `324`
- ✅ **(D)** `289` *(Correct Answer)*

**Correct Answer:** **(D)** `289`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** These are the squares of prime numbers: 2², 3², 5², 7², 11², 13². The next prime is 17, so 17² = 289.
- **Sequence Term Analysis & Progression Rule:**
  - Each step follows the recurrence relation established above.
  - Calculated value confirms: **289**.

#### Option Elimination & Verification:
  - **(A) `225`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `256`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `324`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `289`:** ✅ **CORRECT.** Exactly matches the deduced value.

- **Final Answer:** Option **(D)**

---

### Puzzle 18

**Problem Statement:**
How many three-digit numbers have a digit sum equal to 4?

**Options:**
- **(A)** `8`
- **(B)** `12`
- ✅ **(C)** `10` *(Correct Answer)*
- **(D)** `15`

**Correct Answer:** **(C)** `10`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** The numbers are 103, 112, 121, 130, 202, 211, 220, 301, 310 and 400, which gives 10 numbers. Infosys Numerical Puzzle Top 30 Practice Questions Page 8

#### Option Elimination & Verification:
  - **(A) `8`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `12`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `10`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(D) `15`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(C)**

---

### Puzzle 19

**Problem Statement:**
```text
Every column follows the same rule. Find the missing
number.
5
8
6
3
4
2
15
32
?
```

**Options:**
- ✅ **(A)** `12` *(Correct Answer)*
- **(B)** `10`
- **(C)** `14`
- **(D)** `18`

**Correct Answer:** **(A)** `12`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** In each column, top number × middle number = bottom number. So 6 × 2 = 12.
- **Matrix / Grid Row-Column Invariant:**
  - Applying the row-wise functional mapping: In each column, top number × middle number = bottom number. So 6 × 2 = 12.
  - The third column element is identically produced, giving **12**.

#### Option Elimination & Verification:
  - **(A) `12`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(B) `10`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `14`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `18`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(A)**

---

### Puzzle 20

**Problem Statement:**
Find the next term in the series: 3, 6, 7, 14, 15, 30, ?

**Options:**
- **(A)** `28`
- ✅ **(B)** `31` *(Correct Answer)*
- **(C)** `32`
- **(D)** `33`

**Correct Answer:** **(B)** `31`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** The pattern alternates between × 2 and + 1. After 30 comes 30 + 1 = 31.
- **Sequence Term Analysis & Progression Rule:**
  - Each step follows the recurrence relation established above.
  - Calculated value confirms: **31**.

#### Option Elimination & Verification:
  - **(A) `28`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `31`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(C) `32`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `33`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(B)**

---

### Puzzle 21

**Problem Statement:**
If × means +, + means -, and - means ×, what is the value of 12 × 8 + 6 - 2?

**Options:**
- **(A)** `4`
- **(B)** `12`
- ✅ **(C)** `8` *(Correct Answer)*
- **(D)** `20`

**Correct Answer:** **(C)** `8`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** Replacing the signs gives 12 + 8 - 6 × 2 = 12 + 8 - 12 = 8. Infosys Numerical Puzzle Top 30 Practice Questions Page 9

#### Option Elimination & Verification:
  - **(A) `4`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `12`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `8`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(D) `20`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(C)**

---

### Puzzle 22

**Problem Statement:**
Find the next term in the series: 2, 12, 36, 80, 150, ?

**Options:**
- **(A)** `240`
- **(B)** `256`
- **(C)** `264`
- ✅ **(D)** `252` *(Correct Answer)*

**Correct Answer:** **(D)** `252`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** The terms follow n² × (n + 1). For n = 6: 36 × 7 = 252.
- **Sequence Term Analysis & Progression Rule:**
  - Each step follows the recurrence relation established above.
  - Calculated value confirms: **252**.

#### Option Elimination & Verification:
  - **(A) `240`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `256`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `264`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `252`:** ✅ **CORRECT.** Exactly matches the deduced value.

- **Final Answer:** Option **(D)**

---

### Puzzle 23

**Problem Statement:**
Among 12 coins, one is either heavier or lighter than the others (you do not know
which). What is the minimum number of weighings on a balance scale needed
to find the odd coin and know whether it is heavy or light?

**Options:**
- **(A)** `2`
- **(B)** `4`
- **(C)** `5`
- ✅ **(D)** `3` *(Correct Answer)*

**Correct Answer:** **(D)** `3`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** This is the classic 12-coin problem. Three weighings give 27 outcomes, enough to cover 24 cases (12 coins × heavy or light).
- **Information-Theoretic Weighing Bounds:**
  - For a two-pan balance scale, each weighing divides the search space into 3 outcomes (left heavy, right heavy, balanced): $3^k \ge N$.
  - For digital scales with exact weight readout, each bag contributes a distinct number of coins ($1, 2, 3, \dots, n$) to generate a unique excess sum.
  - Required optimal weighings: **3**.

#### Option Elimination & Verification:
  - **(A) `2`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `4`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `5`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `3`:** ✅ **CORRECT.** Exactly matches the deduced value.

- **Final Answer:** Option **(D)**

---

### Puzzle 24

**Problem Statement:**
At a meeting, 12 people each shake hands exactly once with every other person.
How many handshakes take place in total?

**Options:**
- **(A)** `60`
- ✅ **(B)** `66` *(Correct Answer)*
- **(C)** `72`
- **(D)** `132`

**Correct Answer:** **(B)** `66`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** Number of handshakes = 12 × 11 ÷ 2 = 66. Infosys Numerical Puzzle Top 30 Practice Questions Page 10

#### Option Elimination & Verification:
  - **(A) `60`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `66`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(C) `72`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `132`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(B)**

---

### Puzzle 25

**Problem Statement:**
Find the next term in the series: 1, 2, 6, 24, 120, ?

**Options:**
- **(A)** `600`
- **(B)** `700`
- ✅ **(C)** `720` *(Correct Answer)*
- **(D)** `840`

**Correct Answer:** **(C)** `720`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** These are factorials: 1!, 2!, 3!, 4!, 5!. The next term is 6! = 720.
- **Sequence Term Analysis & Progression Rule:**
  - Each step follows the recurrence relation established above.
  - Calculated value confirms: **720**.

#### Option Elimination & Verification:
  - **(A) `600`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `700`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `720`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(D) `840`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(C)**

---

### Puzzle 26

**Problem Statement:**
How many two-digit numbers are equal to 4 times the sum of their digits?

**Options:**
- **(A)** `3`
- ✅ **(B)** `4` *(Correct Answer)*
- **(C)** `5`
- **(D)** `6`

**Correct Answer:** **(B)** `4`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** 10a + b = 4(a + b) gives 6a = 3b, so b = 2a. The numbers are 12, 24, 36 and 48, which is 4 numbers.

#### Option Elimination & Verification:
  - **(A) `3`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `4`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(C) `5`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `6`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(B)**

---

### Puzzle 27

**Problem Statement:**
What is the smallest three-digit number that is divisible by 4, 6 and 9?

**Options:**
- ✅ **(A)** `108` *(Correct Answer)*
- **(B)** `100`
- **(C)** `126`
- **(D)** `144`

**Correct Answer:** **(A)** `108`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** The LCM of 4, 6 and 9 is 36. Its multiples are 36, 72, 108, so the smallest three-digit one is 108. Infosys Numerical Puzzle Top 30 Practice Questions Page 11

#### Option Elimination & Verification:
  - **(A) `108`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(B) `100`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `126`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `144`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(A)**

---

### Puzzle 28

**Problem Statement:**
What is the last digit of 7 raised to the power 2026?

**Options:**
- ✅ **(A)** `9` *(Correct Answer)*
- **(B)** `1`
- **(C)** `3`
- **(D)** `7`

**Correct Answer:** **(A)** `9`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** The last digits of powers of 7 repeat as 7, 9, 3, 1. Since 2026 leaves remainder 2 when divided by 4, the last digit is 9.

#### Option Elimination & Verification:
  - **(A) `9`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(B) `1`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `3`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `7`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(A)**

---

### Puzzle 29

**Problem Statement:**
If letters take their alphabet positions (A = 1, B = 2, ... Z = 26), what is the total
value of the word DOG?

**Options:**
- ✅ **(A)** `26` *(Correct Answer)*
- **(B)** `24`
- **(C)** `25`
- **(D)** `27`

**Correct Answer:** **(A)** `26`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** D = 4, O = 15 and G = 7. So the total is 4 + 15 + 7 = 26.

#### Option Elimination & Verification:
  - **(A) `26`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(B) `24`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `25`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(D) `27`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(A)**

---

### Puzzle 30

**Problem Statement:**
A two-digit number has a digit sum of 9. When its digits are reversed, the
number increases by 27. Find the number.

**Options:**
- **(A)** `27`
- **(B)** `45`
- ✅ **(C)** `36` *(Correct Answer)*
- **(D)** `54`

**Correct Answer:** **(C)** `36`

#### Step-by-Step Mathematical & Deductive Proof:
- **Underlying Mathematical / Logical Pattern:** Let the number be 10a + b. Then a + b = 9 and 9(b - a) = 27, so b - a = 3. Hence a = 3 and b = 6, giving 36. Quick Answer Key Top 30 Practice Questions Q1 B 14 Q2 B 158 Q3 D 12 Q4 B 289 Q5 D 56 Q6 A 2 Q7 B 8 Q8 A 65 Q9 B 130 Q10 A 84 Q11 D 51 Q12 C 10 Q13 C 10 Q14 C 191 Q15 B Saturday Q16 A 16 Q17 D 289 Q18 C 10 Q19 A 12 Q20 B

#### Option Elimination & Verification:
  - **(A) `27`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(B) `45`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.
  - **(C) `36`:** ✅ **CORRECT.** Exactly matches the deduced value.
  - **(D) `54`:** ❌ **INCORRECT.** Fails the structural equation or recurrence constraint.

- **Final Answer:** Option **(C)**

---
