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
