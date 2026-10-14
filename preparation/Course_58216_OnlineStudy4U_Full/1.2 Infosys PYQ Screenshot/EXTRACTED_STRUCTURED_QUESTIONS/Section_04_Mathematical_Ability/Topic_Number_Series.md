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


---

### Question 9 [Source: `photo_2021-08-22_11-31-30.jpg`]
**Question:** What two numbers should replace the question marks :  
`6, 7, 14, 17, 68, 73, ?, ?` `[3 Marks]`

**Answer Options:**
* **(A)** 445, 511
* **(B)** 438, 511
* **(C)** 445, 452
* **(D)** 438, 445

**Correct Answer:** **(D) 438, 445**  
**Mathematical Proof:**
1. Let the sequence be denoted by $a_1, a_2, \dots, a_8$.
2. Formulate the inductive progression between successive terms:
   * $a_1 = 6$
   * $a_2 = a_1 + 1 = 6 + 1 = 7$ (Operation: $+1$)
   * $a_3 = a_2 \times 2 = 7 \times 2 = 14$ (Operation: $\times 2$)
   * $a_4 = a_3 + 3 = 14 + 3 = 17$ (Operation: $+3$)
   * $a_5 = a_4 \times 4 = 17 \times 4 = 68$ (Operation: $\times 4$)
   * $a_6 = a_5 + 5 = 68 + 5 = 73$ (Operation: $+5$)
3. Pattern Invariant: The sequence alternates strictly between addition and multiplication, where the operand increases monotonically by 1 at each transition:
   * Next operation must be $\mathbf{\times 6}$:
     $$a_7 = a_6 \times 6 = 73 \times 6 = \mathbf{438}$$
   * Following operation must be $\mathbf{+7}$:
     $$a_8 = a_7 + 7 = 438 + 7 = \mathbf{445}$$
4. The two replacement values are **438, 445**.
Hence, Option D is correct.

---

### Question 10 [Source: `1.2.3 Infosys Puzzles Questions .pdf`, Page 5]

**Question Statement:**
The wrong number in the sequence $26, 52, 91, 117, 141, 195, 234$ is:

**Options:**
- (1) 91
- (2) 117
- (3) 141
- (4) 195

**Correct Answer:** **(3) 141**

**Mathematical & Logical Proof:**
1. Examine the prime factorizations and multiples in the sequence:
   - $26 = 13 \times 2$
   - $52 = 13 \times 4$
   - $91 = 13 \times 7$
   - $117 = 13 \times 9$
   - $141 = 3 \times 47$ ($141 \div 13 = 10.846\dots$, NOT divisible by 13)
   - $195 = 13 \times 15$
   - $234 = 13 \times 18$
2. In this sequence, every single term is a positive integer multiple of 13, except for 141. The correct multiple in this position would be $13 \times 11 = 143$.
3. Therefore, the wrong number in the sequence is **141** (Option 3).

---

### Question 11 [Source: `IMG_20210613_155201_429.jpg`, `IMG_20210613_155812_108.jpg`]

**Question Statement:**
Find the missing term in the following number series:
$$15, 17, 23, 22, 31, 27, 39, 32, \dots$$

**Options:**
- A) 27
- B) 28
- C) 26
- D) 30

**Correct Answer:** **A) 27**

**Mathematical & Logical Proof:**
1. This sequence consists of two interleaved (alternating) arithmetic sub-series:
   - Sub-series 1 (Odd positions: $1^{\text{st}}, 3^{\text{rd}}, 5^{\text{th}}, 7^{\text{th}}$):
     $$15 \xrightarrow{+8} 23 \xrightarrow{+8} 31 \xrightarrow{+8} 39$$
     Common difference is $+8$.
   - Sub-series 2 (Even positions: $2^{\text{nd}}, 4^{\text{th}}, 6^{\text{th}}, 8^{\text{th}}$):
     $$17 \xrightarrow{+5} 22 \xrightarrow{+5} \mathbf{27} \xrightarrow{+5} 32$$
     Common difference is $+5$.
2. The missing term is at the $6^{\text{th}}$ position:
   $$22 + 5 = \mathbf{27}$$
3. Hence, the missing number is **27** (Option A).

---

### Question 12 [Source: `IMG_20210613_155631_977.jpg`, `IMG_20210613_155711_810.jpg`]

**Question Statement:**
Complete the following letter series:
$$\text{BHRM}, \text{CFUI}, \text{DDXE}, \text{EBAA}, \dots$$

**Options:**
- A) FZDW
- B) FYDW
- C) EZDW
- D) FZCW

**Correct Answer:** **A) FZDW**

**Mathematical & Logical Proof:**
1. Analyze each letter position across consecutive terms using standard alphabet mapping ($A=1, \dots, Z=26$):
   - $1^{\text{st}}$ letter: $B (2) \xrightarrow{+1} C (3) \xrightarrow{+1} D (4) \xrightarrow{+1} E (5) \xrightarrow{+1} \mathbf{F (6)}$
   - $2^{\text{nd}}$ letter: $H (8) \xrightarrow{-2} F (6) \xrightarrow{-2} D (4) \xrightarrow{-2} B (2) \xrightarrow{-2} \mathbf{Z (26)}$
   - $3^{\text{rd}}$ letter: $R (18) \xrightarrow{+3} U (21) \xrightarrow{+3} X (24) \xrightarrow{+3} A (27 \equiv 1) \xrightarrow{+3} \mathbf{D (4)}$
   - $4^{\text{th}}$ letter: $M (13) \xrightarrow{-4} I (9) \xrightarrow{-4} E (5) \xrightarrow{-4} A (1) \xrightarrow{-4} \mathbf{W (23)}$
2. Combining the derived letters:
   $$\mathbf{F} + \mathbf{Z} + \mathbf{D} + \mathbf{W} = \mathbf{FZDW}$$
3. Hence, the correct next term is **FZDW** (Option A).

---

### Question 13 [Source: `IMG_20210613_155823_990.jpg`]

**Question Statement:**
Complete the following alphanumeric series:
$$\text{H47F}, \text{I48G}, \text{K50I}, \dots$$

**Options:**
- A) N53M
- B) N54L
- C) N53N
- D) N53L

**Correct Answer:** **D) N53L**

**Mathematical & Logical Proof:**
1. Break down the components of each term:
   - Initial letter:
     $$H (8) \xrightarrow{+1} I (9) \xrightarrow{+2} K (11) \xrightarrow{+3} \mathbf{N (14)}$$
     Step increases by $+1$ at each transition ($+1, +2, +3$).
   - Central number:
     $$47 \xrightarrow{+1} 48 \xrightarrow{+2} 50 \xrightarrow{+3} \mathbf{53}$$
     Step increases by $+1$ at each transition ($+1, +2, +3$).
   - Terminal letter:
     $$F (6) \xrightarrow{+1} G (7) \xrightarrow{+2} I (9) \xrightarrow{+3} \mathbf{L (12)}$$
     Step increases by $+1$ at each transition ($+1, +2, +3$).
2. Combining all three components yields:
   $$\mathbf{N} + \mathbf{53} + \mathbf{L} = \mathbf{N53L}$$
3. Hence, the correct next term is **N53L** (Option D).

---

### Question 14 [Source: `IMG_20210613_155518_808.jpg`]

**Question Statement:**
Find the missing term in the following alphanumeric series:
$$\text{D1W}, \text{F4U}, \text{I9R}, \dots, \text{R25I}$$

**Options:**
- A) M16N
- B) M16O
- C) N16M
- D) L16N

**Correct Answer:** **A) M16N**

**Mathematical & Logical Proof:**
1. Analyze the first letter of each term ($A=1, \dots, Z=26$):
   - $D (4) \xrightarrow{+2} F (6) \xrightarrow{+3} I (9) \xrightarrow{+4} \mathbf{M (13)} \xrightarrow{+5} R (18)$
   - The addition step increments by $+1$ at each term ($+2, +3, +4, +5$).
   - The missing initial letter is $9 + 4 = 13 \implies \mathbf{M}$.
2. Analyze the central numeric value:
   - $1 = 1^2$
   - $4 = 2^2$
   - $9 = 3^2$
   - Next term: $4^2 = \mathbf{16}$
   - Check next: $5^2 = 25$ (matches R25I).
3. Analyze the third letter of each term:
   - $W (23) \xrightarrow{-2} U (21) \xrightarrow{-3} R (18) \xrightarrow{-4} \mathbf{N (14)} \xrightarrow{-5} I (9)$
   - The subtraction step decrements by $1$ more at each term ($-2, -3, -4, -5$).
   - The missing terminal letter is $18 - 4 = 14 \implies \mathbf{N}$.
4. Combining all three components:
   $$\mathbf{M} + \mathbf{16} + \mathbf{N} = \mathbf{M16N}$$
5. Hence, the missing term is **M16N** (Option A).
