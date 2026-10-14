# Section - Puzzle Solving
## Topic - Number Patterns and Sets

> **Source Vault:** `1.2.1Infosys PYQ Screenshots- PART1`  
> **Print Optimization:** Compact 2-column density compatible, algorithmic sequence tracing.

---

### Question 1 [Source: `photo_983@28-10-2024_22-33-04.jpg`, `photo_984@28-10-2024_22-34-34.jpg`]
**Question:** Given is a set of numbers that relate to each other in a certain logic. Assume the third set works just like the first two sets:
* **Set 1:** $(12, 36, 108)$
* **Set 2:** $(15, 45, 135)$
* **Set 3:** $(18, 54, ?)$

**Answer Options:**
* **(A)** 162
* **(B)** 172
* **(C)** 180
* **(D)** 196

**Correct Answer:** **(A) 162**  
**Mathematical Solution:**
* Each term is obtained by multiplying the previous term by 3 (Geometric Progression with $r = 3$):
  * Set 1: $12 \times 3 = 36$, $36 \times 3 = 108$.
  * Set 2: $15 \times 3 = 45$, $45 \times 3 = 135$.
  * Set 3: $18 \times 3 = 54$, $54 \times 3 = \mathbf{162}$.
Hence, the missing number is **162**.
---

### Question 2 [Source: `photo_986@28-10-2024_22-34-34.jpg`]
**Question:** Given is a set of four numbers that relate to each other in a certain way. Determine the missing number in the third set.  
*(Note: Assume the third set also works in the same way as the first and the second set).* `[3 Marks]`

**Sets of 2x2 Grids (Clean Redraw from Screenshot Pixels):**
```text
  [ Set 1 (2x2) ]          [ Set 2 (2x2) ]          [ Set 3 (2x2) ]
  +----+----+              +----+----+              +----+----+
  |  2 |  6 |              |  3 |  5 |              |  4 |  2 |
  +----+----+              +----+----+              +----+----+
  |  7 |  2 |              |  7 |  5 |              |  ? |  6 |
  +----+----+              +----+----+              +----+----+
```

**Answer Options (Verified from Screenshot Pixels):**
* **(A)** 2
* **(B)** 8
* **(C)** 1
* **(D)** 3

**Correct Answer:** **(D) 3**  
**Mathematical Proof & Column Sum Differential Pattern:**
* Let each 2x2 matrix have entries:
  $$\begin{bmatrix} a & b \\ c & d \end{bmatrix}$$
* Calculate the difference between the left column sum $(a + c)$ and the right column sum $(b + d)$:
  $$\Delta = (a + c) - (b + d)$$
* **Evaluating Set 1:**
  $$\Delta_1 = (2 + 7) - (6 + 2) = 9 - 8 = \mathbf{+1}$$
* **Evaluating Set 2:**
  $$\Delta_2 = (3 + 7) - (5 + 5) = 10 - 10 = \mathbf{0}$$
* **Evaluating Set 3:**
  The column sum differential progression forms an arithmetic progression $+1, 0, -1$:
  $$\Delta_3 = (4 + ?) - (2 + 6) = (4 + ?) - 8 = \mathbf{-1}$$
  $$(4 + ?) - 8 = -1$$
  $$4 + ? = 7$$
  $$? = 7 - 4 = \mathbf{3}$$
* Matches Option **(D) 3** with 100% precision.

---

### Question 3 [Source: `photo_990@28-10-2024_22-34-34.jpg`]
**Question:** Find the missing number in the third triad:
* **Triad 1:** $(7, 14, 21)$
* **Triad 2:** $(9, 18, 27)$
* **Triad 3:** $(11, 22, ?)$

**Answer Options:**
* **(A)** 31
* **(B)** 33
* **(C)** 35
* **(D)** 44

**Correct Answer:** **(B) 33**  
**Mathematical Solution:**
* Each triad follows the multiples of the base number:
  * Triad 1: $7 \times 1 = 7, 7 \times 2 = 14, 7 \times 3 = 21$.
  * Triad 2: $9 \times 1 = 9, 9 \times 2 = 18, 9 \times 3 = 27$.
  * Triad 3: $11 \times 1 = 11, 11 \times 2 = 22, 11 \times 3 = \mathbf{33}$.
Hence, the missing value is **33**.


---

### Question 4 [Source: `photo_2021-08-22_10-24-58.jpg`]
**Question:** How many even numbers are there which are exactly divisible by their succeeding number.  
`6 1 2 7 8 9 4 5 3 2 4 6 5 8 9 1 0 3 2 4`

**Answer Options:**
* **(A)** 3
* **(B)** 0
* **(C)** 2
* **(D)** 1

**Correct Answer:** **(C) 2**  
**Mathematical Proof:**
1. We systematically examine every even number in the sequence and test whether it is divisible without remainder by the immediately succeeding integer ($x_{i} \pmod{x_{i+1}} == 0$):
   * Index 0: `6` (even), followed by `1` $\implies 6 \div 1 = 6$ (Remainder 0) $\implies$ **Match 1: (6, 1)**.
   * Index 2: `2` (even), followed by `7` $\implies 2 < 7$ (Not divisible).
   * Index 4: `8` (even), followed by `9` $\implies 8 < 9$ (Not divisible).
   * Index 6: `4` (even), followed by `5` $\implies 4 < 5$ (Not divisible).
   * Index 9: `2` (even), followed by `4` $\implies 2/4 = 0.5$ (Not divisible).
   * Index 10: `4` (even), followed by `6` $\implies 4/6$ (Not divisible).
   * Index 11: `6` (even), followed by `5` $\implies 6/5 = 1.2$ (Not divisible).
   * Index 13: `8` (even), followed by `9` $\implies 8 < 9$ (Not divisible).
   * Index 16: `0` (even integer: $0 = 2 \times 0$), followed by `3` $\implies 0 \div 3 = 0$ (Remainder 0) $\implies$ **Match 2: (0, 3)**.
   * Index 18: `2` (even), followed by `4` $\implies 2/4 = 0.5$ (Not divisible).
   * Index 19: `4` (even), terminal element (no succeeding number).
2. Exactly **2** even numbers satisfy the condition (6 followed by 1, and 0 followed by 3).
Hence, the answer is **2** (Option C).

---

### Question 5 [Source: `photo_2021-08-22_10-30-58.jpg`]
**Question:** Consider the number 57645361, if the digit at unit place is decreased by 1, the digit at tens' place is increased by 2, the digit at hundreds' place is decreased by 1, the digit at thousands' place is increased by 2 and so on, then after rearranging how many numbers appears twice?

**Answer Options:**
* **(A)** 4
* **(B)** 3
* **(C)** 2
* **(D)** 1

**Correct Answer:** **(C) 2**  
**Mathematical Proof:**
1. The original 8-digit number is $57645361$.
2. Decompose by positional place value from right to left (1-indexed from unit place):
   * **Units place ($d_1 = 1$):** Decreased by 1 $\implies 1 - 1 = \mathbf{0}$.
   * **Tens place ($d_2 = 6$):** Increased by 2 $\implies 6 + 2 = \mathbf{8}$.
   * **Hundreds place ($d_3 = 3$):** Decreased by 1 $\implies 3 - 1 = \mathbf{2}$.
   * **Thousands place ($d_4 = 5$):** Increased by 2 $\implies 5 + 2 = \mathbf{7}$.
   * **Ten thousands place ($d_5 = 4$):** Decreased by 1 $\implies 4 - 1 = \mathbf{3}$.
   * **Lakhs place ($d_6 = 6$):** Increased by 2 $\implies 6 + 2 = \mathbf{8}$.
   * **Ten lakhs place ($d_7 = 7$):** Decreased by 1 $\implies 7 - 1 = \mathbf{6}$.
   * **Crores place ($d_8 = 5$):** Increased by 2 $\implies 5 + 2 = \mathbf{7}$.
3. Assembling the transformed sequence of digits:
   $$\mathbf{7\;6\;8\;3\;7\;2\;8\;0}$$
4. Frequency distribution of digits in the transformed number:
   * Digit `7`: Count = **2** (at crore and thousand positions)
   * Digit `8`: Count = **2** (at lakh and ten positions)
   * Digit `6`: Count = 1
   * Digit `3`: Count = 1
   * Digit `2`: Count = 1
   * Digit `0`: Count = 1
5. Exactly **2** unique digits (`7` and `8`) appear exactly twice.
Hence, the answer is **2** (Option C).
