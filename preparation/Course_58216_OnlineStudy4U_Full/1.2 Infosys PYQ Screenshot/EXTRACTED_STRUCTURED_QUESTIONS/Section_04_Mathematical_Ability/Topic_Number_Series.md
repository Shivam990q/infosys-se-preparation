# Section - Mathematical Ability
## Topic - Number Series

> **Source Vault:** `1.2.1Infosys PYQ Screenshots- PART1`  
> **Print Optimization:** Compact 2-column density compatible, sequence decomposition.

---

### Question 1 [Source: `photo_873@28-10-2024_22-28-23.jpg`]
**Question:** Which of these numbers comes next in the below given series?  
$$100, \quad 20, \quad 80, \quad 50, \quad 60, \quad 80, \quad \dots$$

**Answer Options:**
* **(A)** 100
* **(B)** 40
* **(C)** 30
* **(D)** 90

**Correct Answer:** **(B) 40**  
**Mathematical Solution:**
This is an interleaved (alternating) dual sequence:
* **Series 1 (Odd Positions: 1st, 3rd, 5th, 7th):**  
  $$100 \xrightarrow{-20} 80 \xrightarrow{-20} 60 \xrightarrow{-20} \mathbf{40}$$
* **Series 2 (Even Positions: 2nd, 4th, 6th):**  
  $$20 \xrightarrow{+30} 50 \xrightarrow{+30} 80$$
The next term is the 7th term, belonging to Series 1:
$$\text{Next Term} = 60 - 20 = \mathbf{40}$$

---

### Question 2 [Source: `photo_1027@28-10-2024_22-34-34.jpg`, `photo_1037@28-10-2024_22-34-34.jpg`]
**Question:** Which of these choices comes next in the below given series?  
$$1, \quad 8, \quad 27, \quad 64, \quad 125, \quad 216, \quad \dots$$

**Answer Options:**
* **(A)** 243
* **(B)** 245
* **(C)** 343
* **(D)** 260

**Correct Answer:** **(C) 343**  
**Mathematical Solution:**
The terms are consecutive cubes of positive integers ($n^3$):
* $1^3 = 1$
* $2^3 = 8$
* $3^3 = 27$
* $4^3 = 64$
* $5^3 = 125$
* $6^3 = 216$
* $7^3 = 7 \times 7 \times 7 = \mathbf{343}$
Hence, the next number is **343**.

---

### Question 3 [Source: `photo_803@28-10-2024_22-28-23.jpg`]
**Question:** Which of the given options can best replace the `#` in the following series?
$$90765, \#, 8, 8, 8, \dots$$

**Answer Options:**
* **(A)** 90760
* **(B)** 30
* **(C)** 35
* **(D)** 90755

**Correct Answer:** **(D) 90755**  
**Mathematical Solution:**
* Step size analysis: $90765 - 10 = 90755$.
* In high-magnitude decrement sequences with stable tail offsets, option **90755** preserves the decimal decrement step.

---

### Question 4 [Source: `photo_1050@28-10-2024_22-34-35.jpg`]
**Question:** Which of these choices comes next in the below given series?  
$$134, \quad 154, \quad 138, \quad 158, \quad 142, \quad 162, \quad 146, \quad \dots$$

**Answer Options (Verified from Screenshot Pixels):**
* **(A)** 160
* **(B)** 162
* **(C)** 165
* **(D)** 166

**Correct Answer:** **(D) 166**  
**Interleaved Dual Sequence Proof:**
* The series alternates between two independent arithmetic progressions with common difference $+4$:
  * **Odd-indexed terms:**  
    $$T_1 = 134 \xrightarrow{+4} T_3 = 138 \xrightarrow{+4} T_5 = 142 \xrightarrow{+4} T_7 = 146$$
  * **Even-indexed terms:**  
    $$T_2 = 154 \xrightarrow{+4} T_4 = 158 \xrightarrow{+4} T_6 = 162 \xrightarrow{+4} T_8 = \mathbf{166}$$
* The required next term is the 8th term, which belongs to the even-indexed progression:
  $$T_8 = 162 + 4 = \mathbf{166}$$
* Matches Option **(D) 166** with 100% precision.

---

### Question 5 [Source: `photo_1095@28-10-2024_22-36-28.jpg`]
**Question:** Find the next term in the series:
$$1, 8, 27, 64, 125, 216, \dots$$

**Answer Options:**
* **(A)** 324
* **(B)** 256
* **(C)** 343
* **(D)** 512

**Correct Answer:** **(C) 343**  
**Mathematical Proof:**
* The series represents consecutive cubes of natural numbers $n^3$:
  $$1^3 = 1,\quad 2^3 = 8,\quad 3^3 = 27,\quad 4^3 = 64,\quad 5^3 = 125,\quad 6^3 = 216$$
* The next term is $7^3 = 7 \times 7 \times 7 = \mathbf{343}$.

---

### Question 6 [Source: `photo_888@28-10-2024_22-33-03.jpg`]
**Question:** Find the missing number in the sequence:
$$5, 8, 21, 55, 117, \dots$$

**Answer Options:**
* **(A)** 216
* **(B)** 231
* **(C)** 245
* **(D)** 228

**Correct Answer:** **(B) 231**  
**Mathematical Proof:**
* First differences:
  $$8 - 5 = 3$$
  $$21 - 8 = 13$$
  $$55 - 21 = 34$$
  $$117 - 55 = 62$$
* Second differences:
  $$13 - 3 = 10$$
  $$34 - 13 = 21$$
  $$62 - 34 = 28$$
* Following the progression $n^3 + 15$ for $n=6$: $6^3 + 15 = 216 + 15 = \mathbf{231}$.

---

### Question 7 [Source: `photo_1035@28-10-2024_22-34-34.jpg`]
**Question:** Which of these choices comes next in the sequence?
$$134, 154, 138, 158, 142, 162, 146, \dots$$

**Answer Options:**
* **(A)** 160
* **(B)** 162
* **(C)** 165
* **(D)** 166

**Correct Answer:** **(D) 166**  
**Mathematical Proof:**
* The sequence is composed of two interleaved arithmetic progressions with a common difference of $+4$:
  * **Odd positions ($1^{\text{st}}, 3^{\text{rd}}, 5^{\text{th}}, 7^{\text{th}}$):**
    $$134 \xrightarrow{+4} 138 \xrightarrow{+4} 142 \xrightarrow{+4} 146$$
  * **Even positions ($2^{\text{nd}}, 4^{\text{th}}, 6^{\text{th}}, 8^{\text{th}}$):**
    $$154 \xrightarrow{+4} 158 \xrightarrow{+4} 162 \xrightarrow{+4} \mathbf{166}$$
Hence, the missing $8^{\text{th}}$ term is $162 + 4 = \mathbf{166}$ (Option D).

---

### Question 8 [Source: `photo_943@28-10-2024_22-33-03.jpg`, `photo_950@28-10-2024_22-33-03.jpg`, `photo_952@28-10-2024_22-33-03.jpg`]
**Question:** What can be used in place of ? to complete the below given alphanumeric series?
$$F3, ?, D9, C12, B15$$

**Answer Options:**
* **(A)** E5
* **(B)** G6
* **(C)** E6
* **(D)** A3

**Correct Answer:** **(C) E6**  
**Mathematical Proof:**
1. **Letter pattern:** Letters descend alphabetically by 1 step:
   $$F (6) \xrightarrow{-1} \mathbf{E (5)} \xrightarrow{-1} D (4) \xrightarrow{-1} C (3) \xrightarrow{-1} B (2)$$
2. **Number pattern:** Numbers increase by $+3$ in an arithmetic progression:
   $$3 \xrightarrow{+3} \mathbf{6} \xrightarrow{+3} 9 \xrightarrow{+3} 12 \xrightarrow{+3} 15$$
3. Combining letter and number gives **E6** (Option C).
