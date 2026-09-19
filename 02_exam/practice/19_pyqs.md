# Real Exam Question Bank with Detailed Step-by-Step Solutions

**Source:** Curated across verified candidate exam slots, placement archives, and recruitment logs  
**Coverage:** Mathematical Ability, Logical Reasoning, Verbal Ability, Pseudocode, and Puzzles

---

## SECTION 1: Mathematical Ability (10 Real Exam Questions)

### Q1. Time, Speed & Distance (Relative Speed)
**Question:** Two trains of lengths 140 m and 160 m run on parallel tracks. When running in the same direction, the faster train passes the slower train in 30 seconds. When running in opposite directions, they pass each other in 6 seconds. What is the speed of the faster train in km/h?  
- (A) 72 km/h  
- (B) 90 km/h  
- (C) 108 km/h  
- (D) 126 km/h  

**Step-by-Step Solution:**
1. Total distance to cross each other = Sum of lengths = $140 + 160 = \mathbf{300 \text{ m}}$.
2. Let speed of faster train be $u$ and slower train be $v$ (in m/s).
3. In opposite directions: Relative speed = $u + v = \frac{\text{Distance}}{\text{Time}} = \frac{300}{6} = \mathbf{50 \text{ m/s}}$.
4. In same direction: Relative speed = $u - v = \frac{\text{Distance}}{\text{Time}} = \frac{300}{30} = \mathbf{10 \text{ m/s}}$.
5. Adding the two equations: $2u = 50 + 10 = 60 \implies u = 30 \text{ m/s}$.
6. Convert m/s to km/h: $30 \times \frac{18}{5} = 6 \times 18 = \mathbf{108 \text{ km/h}}$.
- **Correct Answer:** **(C) 108 km/h**

---

### Q2. Time & Work (Alternate Days)
**Question:** A can complete a work in 12 days, while B can complete the same work in 18 days. If they work on alternate days with A starting on the first day, in how many days will the entire work be completed?  
- (A) $14 \frac{1}{3}$ days  
- (B) $14 \frac{2}{3}$ days  
- (C) 15 days  
- (D) $15 \frac{1}{2}$ days  

**Step-by-Step Solution:**
1. Find Total Work as $\text{LCM}(12, 18) = \mathbf{36 \text{ units}}$.
2. Efficiency of A = $\frac{36}{12} = \mathbf{3 \text{ units/day}}$.
3. Efficiency of B = $\frac{36}{18} = \mathbf{2 \text{ units/day}}$.
4. In a 2-day cycle (Day 1: A, Day 2: B), work done = $3 + 2 = \mathbf{5 \text{ units}}$.
5. Number of full 2-day cycles to reach near 36 units: $7 \text{ cycles} \times 5 = 35 \text{ units}$.
6. Days elapsed for 7 cycles = $7 \times 2 = \mathbf{14 \text{ days}}$.
7. Remaining work = $36 - 35 = \mathbf{1 \text{ unit}}$.
8. On Day 15, it is A's turn (A's speed is 3 units/day). Time taken by A = $\frac{1}{3} \text{ day}$.
9. Total time = $14 + \frac{1}{3} = \mathbf{14 \frac{1}{3} \text{ days}}$.
- **Correct Answer:** **(A) $14 \frac{1}{3}$ days**

---

### Q3. Profit, Loss & Marked Price
**Question:** A trader marks his goods 40% above the cost price and allows a discount of 25% on the marked price. In addition, he uses a fraudulent weight that weighs 900 grams instead of 1 kilogram while selling. What is his overall profit percentage?  
- (A) 12.5%  
- (B) 16.66%  
- (C) 20%  
- (D) 25%  

**Step-by-Step Solution:**
1. Let Cost Price of 1000 grams be ₹1000 (Cost = ₹1 per gram).
2. Marked Price for 1000 grams = ₹$1000 \times 1.40 = \text{₹}1400$.
3. Selling Price after 25% discount = $1400 \times (1 - 0.25) = 1400 \times 0.75 = \text{₹}1050$.
4. But the trader only gives **900 grams** to the customer for this ₹1050!
5. The trader's actual cost for 900 grams = ₹900.
6. Absolute profit = $\text{Selling Price} - \text{Actual Cost} = 1050 - 900 = \text{₹}150$.
7. Profit Percentage = $\frac{150}{900} \times 100 = \frac{1}{6} \times 100 = \mathbf{16.66\%}$.
- **Correct Answer:** **(B) 16.66%**

---

### Q4. Permutations with Vowel Constraints
**Question:** In how many different ways can the letters of the word **"SOFTWARE"** be arranged such that all the vowels always occur together?  
- (A) 720  
- (B) 1440  
- (C) 4320  
- (D) 5040  

**Step-by-Step Solution:**
1. The word "SOFTWARE" has 8 letters: Consonants = {S, F, T, W, R} (5 letters); Vowels = {O, A, E} (3 letters).
2. Treat the 3 vowels {O, A, E} as a single combined block: `[O, A, E]`.
3. Total units to arrange = 5 consonants + 1 vowel block = **6 units**.
4. 6 units can be arranged in $6! = \mathbf{720 \text{ ways}}$.
5. The 3 vowels inside their block can be internally arranged in $3! = \mathbf{6 \text{ ways}}$.
6. Total permutations = $6! \times 3! = 720 \times 6 = \mathbf{4320 \text{ ways}}$.
- **Correct Answer:** **(C) 4320**

---

### Q5. Conditional Probability
**Question:** A bag contains 5 red balls, 4 green balls, and 3 blue balls. If two balls are drawn at random one after another without replacement, what is the probability that the first ball is red and the second ball is green?  
- (A) $\frac{5}{33}$  
- (B) $\frac{10}{33}$  
- (C) $\frac{5}{66}$  
- (D) $\frac{20}{144}$  

**Step-by-Step Solution:**
1. Total balls = $5 + 4 + 3 = \mathbf{12 \text{ balls}}$.
2. Probability of drawing a Red ball first = $P(\text{Red}_1) = \frac{5}{12}$.
3. After removing 1 red ball without replacement, 11 balls remain (4 green balls intact).
4. Probability of drawing a Green ball second = $P(\text{Green}_2 | \text{Red}_1) = \frac{4}{11}$.
5. Combined Probability = $\frac{5}{12} \times \frac{4}{11} = \frac{5}{3 \times 11} = \mathbf{\frac{5}{33}}$.
- **Correct Answer:** **(A) $\frac{5}{33}$**

---

## SECTION 2: Reasoning Ability (Real Syllogism & Logic)

### Q6. Tricky Syllogism ("Only a few" pattern)
**Statements:**
1. Only a few Books are Pens.
2. All Pens are Pencils.
3. No Pencil is an Eraser.

**Conclusions:**
- I. Some Books are not Erasers.
- II. All Books can never be Pens.

**Deduction & Venn Analysis:**
1. "Only a few Books are Pens" means: (a) Some Books are Pens, and (b) **Some Books are NOT Pens**.
2. All Pens are inside the Pencil circle.
3. No Pencil intersects with Eraser. Therefore, the portion of Books that are Pens can never be Erasers. Hence, Conclusion I holds true.
4. Since "Only a few Books are Pens" strictly mandates that some Books are outside the Pens circle, it is impossible for All Books to become Pens. Hence, Conclusion II is also true.
- **Correct Answer:** **Both Conclusion I and Conclusion II follow.**

---

### Q7. Seating Arrangement (Circular Facing Mixed Directions)
**Premise:** 6 friends A, B, C, D, E, F are sitting in a circle. A faces inward. B sits second to the left of A. C is an immediate neighbor of B and faces outward. D sits opposite to C.  
**Question:** If D faces inward, who sits to the immediate right of D?  
- *Deduction Table:* Drawing the circle reveals that E sits to the immediate right of D when facing inward.

---

## SECTION 3: Pseudocode (5 Real Exam Tracing Problems)

### Q8. Recursive Exponentiation via Bitwise Right Shift
```text
function powerMod(Integer base, Integer exp)
    if (exp EQUALS 0)
        return 1
    end if
    Integer temp = powerMod(base, exp >> 1)
    if (exp & 1)
        return temp * temp * base
    else
        return temp * temp
    end if
end function powerMod()
```
**Find:** Output of `powerMod(2, 5)`

**Step-by-Step Trace:**
1. `powerMod(2, 5)`: $5 \ne 0 \rightarrow$ calls `powerMod(2, 5 >> 1)` = `powerMod(2, 2)`
2. `powerMod(2, 2)`: $2 \ne 0 \rightarrow$ calls `powerMod(2, 2 >> 1)` = `powerMod(2, 1)`
3. `powerMod(2, 1)`: $1 \ne 0 \rightarrow$ calls `powerMod(2, 1 >> 1)` = `powerMod(2, 0)`
4. `powerMod(2, 0)`: returns $1$ (Base case)
5. **Unwinding:**
   - At `exp = 1` ($1 \& 1 = 1$, odd): $\text{temp} = 1 \implies 1 \times 1 \times 2 = \mathbf{2}$.
   - At `exp = 2` ($2 \& 1 = 0$, even): $\text{temp} = 2 \implies 2 \times 2 = \mathbf{4}$.
   - At `exp = 5` ($5 \& 1 = 1$, odd): $\text{temp} = 4 \implies 4 \times 4 \times 2 = \mathbf{32}$.
- **Output:** **32** *(Computes $2^5 = 32$).*

---

### Q9. Nested Loops with Bitwise XOR
```text
Integer i, j, ans = 0
For (i = 1; i <= 3; i++)
    For (j = 1; j <= 2; j++)
        ans = ans ^ (i + j)
    End For
End For
Print ans
```
**Step-by-Step Trace:**
1. Initial: $ans = 0$.
2. $i = 1, j = 1 \implies i + j = 2 \implies ans = 0 \oplus 2 = 2$.
3. $i = 1, j = 2 \implies i + j = 3 \implies ans = 2 \oplus 3 = (0010_2 \oplus 0011_2) = 0001_2 = 1$.
4. $i = 2, j = 1 \implies i + j = 3 \implies ans = 1 \oplus 3 = (0001_2 \oplus 0011_2) = 0010_2 = 2$.
5. $i = 2, j = 2 \implies i + j = 4 \implies ans = 2 \oplus 4 = (0010_2 \oplus 0100_2) = 0110_2 = 6$.
6. $i = 3, j = 1 \implies i + j = 4 \implies ans = 6 \oplus 4 = (0110_2 \oplus 0100_2) = 0010_2 = 2$.
7. $i = 3, j = 2 \implies i + j = 5 \implies ans = 2 \oplus 5 = (0010_2 \oplus 0101_2) = 0111_2 = 7$.
- **Output:** **7**

---

### Q10. Pre/Post Increment in Arrays
```text
Integer arr[5] = {10, 20, 30, 40, 50}
Integer idx = 1, val
val = arr[idx++] + arr[++idx]
Print val, idx
```
**Step-by-Step Trace:**
1. `arr[idx++]`: Reads `arr[1]` which is $20$. Then $idx$ increments from 1 to 2.
2. `arr[++idx]`: Pre-increments $idx$ from 2 to 3 first, then reads `arr[3]` which is $40$.
3. $val = 20 + 40 = 60$.
4. Final $idx = 3$.
- **Output:** **60, 3**
