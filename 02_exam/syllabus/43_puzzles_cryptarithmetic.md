# 43_puzzles_cryptarithmetic.md: Complete Puzzle Solving & Cryptarithmetic Master Vault

---

## 1. Executive Section Blueprint & Time Management

| Parameter | Puzzle Solving Section Metric |
| :--- | :--- |
| **Number of Questions** | **4 Questions** |
| **Sectional Time Limit** | **10 Minutes** |
| **Average Time per Question** | **2.5 Minutes (150 Seconds)** |
| **Cutoff Benchmark** | **75% (3 out of 4 correct)** |
| **Primary Elimination Vector** | Cryptarithmetic equations requiring systematic trial-and-deduction without panic, and intricate 4x4 number matrix patterns. |

---

## 2. Cryptarithmetic (Alphametics) Forensic Solving Engine

Cryptarithmetic questions require finding the unique integer digit ($0$ through $9$) corresponding to each unique letter in an arithmetic equation.

### The 6 Universal Cryptarithmetic Invariants:
1. **Uniqueness Constraint:** Each distinct letter represents a distinct digit ($0, 1, 2, \dots, 9$). Two different letters can never share the same digit.
2. **Non-Zero Leading Digits:** The leftmost (leading) letter of any word can **NEVER be 0**.
3. **The Column Overflow Law (The "Carry = 1" Rule):**
   * The sum of two single-digit numbers can be at most $9 + 9 = 18$ (or $9 + 9 + 1 = 19$ with a carry).
   * Therefore, the carry generated from adding two columns can **NEVER exceed 1**.
   * **Direct Deduction:** If an addition of two $N$-digit numbers produces an $(N+1)$-digit number, the leftmost letter of the sum **MUST BE 1**.
4. **Parity (Even/Odd) Rules:**
   * $\text{Even} + \text{Even} = \text{Even}$
   * $\text{Odd} + \text{Odd} = \text{Even}$
   * $\text{Even} + \text{Odd} = \text{Odd}$
5. **Multiplication Unit Digit Invariants:**
   * Any number multiplied by $0$ ends in $0$.
   * Any odd number multiplied by $5$ ends in $5$.
   * Any even number multiplied by $5$ ends in $0$.
   * $6 \times \text{Even Digit}$ ends in the same even digit:
     $$6 \times 2 = 12 \text{ (ends in 2)},\quad 6 \times 4 = 24 \text{ (ends in 4)},\quad 6 \times 8 = 48 \text{ (ends in 8)}$$
6. **Self Addition Invariant:**
   * $X + X$ always produces an **EVEN unit digit** ($2X \pmod{10}$). If there is a carry from the previous column, $X + X + 1$ produces an **ODD unit digit**.

---

### Step-by-Step Solved Cryptarithmetic Benchmarks

#### Case 1: The Classic $SEND + MORE = MONEY$
$$\begin{array}{cccccc}
& & \text{S} & \text{E} & \text{N} & \text{D} \\
+ & & \text{M} & \text{O} & \text{R} & \text{E} \\
\hline
& \text{M} & \text{O} & \text{N} & \text{E} & \text{Y}
\end{array}$$

**Forensic Step-by-Step Deduction:**
1. **Column 5 (Leftmost):**
   Addition of two 4-digit numbers produces a 5-digit number. By Column Overflow Law:
   $$\mathbf{M = 1}$$
2. **Column 4 ($S + M + c_3 = O + 10 \cdot c_4$):**
   Since $c_4 = 1$ and $M = 1$:
   $$S + 1 + c_3 = O + 10$$
   $S$ can be at most 9. With $c_3 \le 1$:
   $9 + 1 + 1 = 11 \implies O \le 1$.
   Since distinct letters have distinct digits and $M = 1$, $O$ cannot be 1. Thus:
   $$\mathbf{O = 0}$$
   Now: $S + 1 + c_3 = 10 \implies S + c_3 = 9$.
   If $c_3 = 0 \implies S = 9$.
   If $c_3 = 1 \implies S = 8$.
3. **Column 3 ($E + O + c_2 = N + 10 \cdot c_3$):**
   Since $O = 0$:
   $$E + 0 + c_2 = N + 10 \cdot c_3$$
   Since $E \ne N$, $c_2$ must be 1, so $c_3 = 0$.
   Therefore: $S + c_3 = 9 \implies S + 0 = 9 \implies \mathbf{S = 9}$.
   And:
   $$E + 1 = N$$
4. **Column 2 ($N + R + c_1 = E + 10 \cdot c_2$):**
   We know $c_2 = 1$ and $N = E + 1$:
   $$(E + 1) + R + c_1 = E + 10$$
   $$R + c_1 + 1 = 10 \implies R + c_1 = 9$$
   Since $S = 9$ and letters must be unique, $R$ cannot be 9. Therefore, $c_1$ must be 1:
   $$R + 1 = 9 \implies \mathbf{R = 8}$$
5. **Column 1 ($D + E = Y + 10 \cdot c_1$):**
   Since $c_1 = 1$:
   $$D + E = Y + 10$$
   Remaining unused digits: $\{2, 3, 4, 5, 6, 7\}$.
   To get $D + E \ge 12$ with $N = E + 1$:
   Test $E = 5 \implies N = 6$.
   Then $D + 5 = Y + 10 \implies D - Y = 5$.
   From unused digits $\{2, 3, 4, 7\}$: $7 - 2 = 5 \implies \mathbf{D = 7, Y = 2}$.
   Check all letters:
   $$S=9,\; E=5,\; N=6,\; D=7,\; M=1,\; O=0,\; R=8,\; Y=2$$
   All 8 digits are unique and valid!
   Check sum: $9567 + 1085 = 10652$. Exact match!

---

#### Case 2: $CROSS + ROADS = DANGER$
$$\begin{array}{ccccccc}
& & \text{C} & \text{R} & \text{O} & \text{S} & \text{S} \\
+ & & & \text{R} & \text{O} & \text{A} & \text{D} & \text{S} \\
\hline
& & \text{D} & \text{A} & \text{N} & \text{G} & \text{E} & \text{R}
\end{array}$$
* **Leading Overflow:** $C + c_4 = D$. Since no overflow into a 7th digit, $D \ge 1$.
* **Units Column:** $S + S$ ends in $R \implies R$ is **EVEN** ($0, 2, 4, 6, 8$).
* **Tens Column:** $S + D + c_1$ ends in $E$.

---

## 3. Number Grid & Matrix Logic (Infosys 4x4 and 3x3)

Infosys matrix puzzles place numbers in a grid where each row or column obeys an algebraic function.

### Master Operation Archetypes:
1. **Row Multiplication + Intermediate Addition:**
   $$\mathbf{(Col_1 \times Col_3) + Col_2 = Col_4}$$
2. **Sum of Squares:**
   $$\mathbf{Col_1^2 + Col_2^2 = Col_3}$$
3. **Cross Multiplicative Center:**
   $$\mathbf{\text{Center} = (Top \times Bottom) + (Left \times Right)}$$
4. **Column Constant Sum:**
   $$\sum_{i=1}^n Col_i = \text{Constant}$$

---

### Real Infosys Exam Matrix Problem Solved:
**Problem (Directly from Infosys Full Length Mock I):**
*Study the 4x4 matrix. Each row follows the same rule relating the entries to the last entry. Find the missing number:*
$$\begin{array}{|c|c|c|c|}
\hline
8 & 5 & 6 & 53 \\
\hline
7 & 4 & 8 & 60 \\
\hline
5 & 7 & 9 & 52 \\
\hline
6 & 9 & 8 & \mathbf{?} \\
\hline
\end{array}$$

**Forensic Derivation:**
1. **Test Row 1:** $8, 5, 6 \rightarrow 53$
   * Check $(8 \times 5) + 6 = 40 + 6 = 46 \ne 53$.
   * Check $(8 \times 6) + 5 = 48 + 5 = \mathbf{53}$! (Matches!)
2. **Test Row 2 with same rule:** $(Col_1 \times Col_3) + Col_2 = Col_4$
   $$(7 \times 8) + 4 = 56 + 4 = \mathbf{60} \quad (\text{Matches!})$$
3. **Test Row 3 with same rule:**
   $$(5 \times 9) + 7 = 45 + 7 = \mathbf{52} \quad (\text{Matches!})$$
4. **Execute on Row 4:**
   $$(6 \times 8) + 9 = 48 + 9 = \mathbf{57}$$

*Correct Answer:* **57**

---

## 4. The 6 Classic Infosys Riddles (Master Mechanical Solutions)

### Riddle 1: The Defective Coin & Balance Scale Formula
* **Problem:** You have $N$ identical-looking coins. Exactly one coin is defective (heavier or lighter). What is the minimum number of weighings ($k$) required on a balance scale to guarantee finding the defective coin?
* **Master Formula:**
  $$3^k \ge N$$
  *Each balance scale weighing has **3 possible outcomes**: Left tilts down, Right tilts down, or Perfectly Balanced.*
* **Lookup Table:**
  | Number of Coins ($N$) | Minimum Weighings ($k$) |
  | :---: | :---: |
  | Up to $3$ | $1$ |
  | $4$ to $9$ | $2$ |
  | $10$ to $27$ | $3$ |
  | $28$ to $81$ | $4$ |

---

### Riddle 2: The Two Burning Ropes (Measuring 45 Minutes)
* **Problem:** You have two ropes. Each takes exactly 60 minutes to burn from one end to the other, but they burn unevenly. How can you measure exactly 45 minutes?
* **Solution:**
  1. **$t = 0$:** Light Rope 1 from **BOTH ends** simultaneously, and light Rope 2 from **ONE end**.
  2. **$t = 30 \text{ min}$:** Rope 1 burns out completely (burning from both ends halves the time: $60 / 2 = 30$ min). At this exact moment, Rope 2 has exactly 30 minutes of burn time remaining.
  3. **Action at $t = 30 \text{ min}$:** Immediately light the **OTHER end** of Rope 2.
  4. **$t = 45 \text{ min}$:** Rope 2, now burning from both ends, burns out in $30 / 2 = 15$ additional minutes.
  5. Total elapsed time: $30 + 15 = \mathbf{45 \text{ minutes}}$.

---

### Riddle 3: The 100 Toggling Doors Puzzle
* **Problem:** 100 closed doors in a row. 100 passes. Person 1 toggles every door (opens all). Person 2 toggles every 2nd door. Person $k$ toggles every $k$-th door. Which doors remain OPEN after 100 passes?
* **Mathematical Invariant:**
  * A door is toggled once for every divisor of its door number.
  * Most numbers have factors that come in pairs ($d$ and $N/d$). Hence, non-square numbers have an **EVEN number of factors** and will end up **CLOSED** (Open $\rightarrow$ Close $\rightarrow$ Open $\rightarrow$ Close).
  * **Only Perfect Squares** have an **ODD number of factors** because $\sqrt{N} \times \sqrt{N} = N$ contributes only one factor.
* **Result:** Doors that remain open are strictly the perfect squares:
  $$\mathbf{1, 4, 9, 16, 25, 36, 49, 64, 81, 100} \implies \mathbf{10 \text{ doors open}}$$

---

### Riddle 4: The Bridge & Torch Crossing (17 Minutes)
* **Problem:** 4 people need to cross a fragile bridge at night. The bridge can hold at most 2 people at a time. They have 1 torch. Walking speeds: Person A = 1 min, B = 2 min, C = 5 min, D = 10 min. When two people cross, they must walk at the slower person's pace.
* **Optimal Strategy:**
  1. A and B cross $\rightarrow$ Takes **2 min** (Time: 2)
  2. A returns with torch $\rightarrow$ Takes **1 min** (Time: 3)
  3. C and D cross together (pairing the two slowest!) $\rightarrow$ Takes **10 min** (Time: 13)
  4. B returns with torch $\rightarrow$ Takes **2 min** (Time: 15)
  5. A and B cross together $\rightarrow$ Takes **2 min** (Time: 17)
* **Total Minimum Time:** **17 Minutes**
