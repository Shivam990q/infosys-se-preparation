# 🧩 Section 5: Puzzle Solving — Timed Sectional Mock Tests (4 Questions | 10 Minutes)

> **Official Pattern:** Section 5 of Infosys Systems Engineer (SE) Exam  
> **Allotted Time:** 10 Minutes (Countdown Timer)  
> **Question Count:** 4 Questions per Mock Paper (2 Standard + 2 Advanced High-Weightage)  
> **Marking Scheme:** +2 Marks (Standard) / +3 Marks (Advanced Grid Puzzles)  
> **Negative Marking:** Zero (0)

---

## 📝 SECTIONAL MOCK TEST 01 (4 Questions | 10 Mins)

### Question 1 (3x3 Numerical Grid - 2 Marks)
Find the missing value (?) in the following matrix:
```
[ 7   4   9 ]
[ 8   5   6 ]
[ 5   ?   7 ]
```
Row operations: $\text{Row 1 Sum} = 20, \text{Row 2 Sum} = 19, \text{Row 3 Sum} = 18$.  
- A) 4  
- B) 5  
- C) 6  
- D) 7  
**Correct Answer:** C  
**Solution:** Target row sum decreases by 1 in each row: Row 1 sum = $7 + 4 + 9 = 20$. Row 2 sum = $8 + 5 + 6 = 19$. Row 3 sum must be 18: $5 + ? + 7 = 18 \Rightarrow ? = 18 - 12 = 6$.

### Question 2 (Geometric Star Polygon Puzzle - 2 Marks)
In a 5-pointed star, the numbers at the 5 points are 2, 3, 5, 7, 11 (the first 5 primes). The number inside the central pentagon is determined by multiplying the two highest outer points and subtracting the sum of the remaining three. What is the central value?  
- A) 67  
- B) 70  
- C) 73  
- D) 77  
**Correct Answer:** A  
**Solution:** Two highest outer points are 11 and 7. Product = $11 \times 7 = 77$. Remaining three points are 2, 3, 5. Sum = $2 + 3 + 5 = 10$. Central value = $77 - 10 = 67$.

### Question 3 (High-Weightage 4x4 Grid - 3 Marks)
Find the missing number in the 4x4 grid:
```
[ 2   3   5    30 ]
[ 3   4   2    24 ]
[ 4   1   6    24 ]
[ 5   2   4     ? ]
```
- A) 36  
- B) 40  
- C) 44  
- D) 48  
**Correct Answer:** B  
**Solution:** Inspecting each row:  
Row 1: $2 \times 3 \times 5 = 30$.  
Row 2: $3 \times 4 \times 2 = 24$.  
Row 3: $4 \times 1 \times 6 = 24$.  
Row 4: $5 \times 2 \times 4 = 40$.

### Question 4 (Cryptarithmetic Verbal Addition - 3 Marks)
In the addition:
```
  T W O
+ T W O
-------
  F O U R
```
Each letter represents a distinct digit from 0 to 9. If $O = 4$, what is the digit corresponding to $W$?  
- A) 2  
- B) 3  
- C) 7  
- D) 8  
**Correct Answer:** B  
**Solution:** If $O = 4$, then in units column: $O + O = 4 + 4 = 8 = R$. Since $F$ is a carryover from $T + T$, $F = 1$. Now $T + T$ must produce $10 + O = 14$ or $15$ with carry. If $T = 7$, $7 + 7 = 14$. Then in tens column: $W + W$ must not generate a carry to $T + T$, so $2W = U < 10$. If $W = 3$, $3 + 3 = 6 = U$. Letters: $T=7, W=3, O=4, F=1, U=6, R=8$. All distinct! Hence $W = 3$.
