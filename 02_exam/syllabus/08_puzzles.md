# Puzzle Solving Mastery (4 Puzzles in 10 Minutes)

**Section 5:** 4 Questions | **Total Time:** 10 Minutes (Strictly 2.5 Mins/Puzzle)  
**Weightage:** High (Mandatory qualifying sectional cutoff; ~50% to 75% required)  

---

## 1. The Strategy to Crack 4 Puzzles in 10 Minutes
This section does not test textbook mathematics; it evaluates **divergent thinking, pattern recognition, and invariant detection under time pressure**.
- **Time Allocation:** Strictly 2.5 minutes per puzzle. If a puzzle does not reveal its pattern within 90 seconds, eliminate unlikely options, mark a calculated guess, and proceed.
- **No Backward Navigation:** Remember, once you submit or move past a puzzle, you cannot return.

---

## 2. Puzzle Archetype 1: Grid & Matrix Number Logic

### Problem Walkthrough:
What number replaces the question mark in the following $3 \times 3$ matrix?

```
[  2   4   20  ]
[  3   9   90  ]
[  1   5    ?  ]
```

**Pattern Analysis:**
1. Check Row 1: Numbers are 2, 4, 20. Observe relationship between 2, 4 and 20:
   $$2^2 + 4^2 = 4 + 16 = 20$$
2. Check Row 2: Numbers are 3, 9, 90. Test the same hypothesis:
   $$3^2 + 9^2 = 9 + 81 = 90 \quad \text{(Pattern Confirmed!)}$$
3. Apply to Row 3: Numbers are 1, 5, `?`:
   $$1^2 + 5^2 = 1 + 25 = \mathbf{26}$$
- **Correct Answer:** **26**

---

## 3. Puzzle Archetype 2: Balance Scale & Counterfeit Coins

### The Universal Rule & Formula:
To find 1 heavier (or lighter) counterfeit coin among $N$ identical-looking coins using a balance scale:
$$3^k \ge N$$
where $k$ is the **minimum number of weighings** required.

### Case Study: 9 Coins with 1 Heavier Coin
**Minimum Weighings:** $3^k \ge 9 \implies k = 2$ weighings.

**The 3-Pile Division Strategy:**
- **Step 1:** Divide 9 coins into **3 equal groups of 3 coins each**: `Group A (3)`, `Group B (3)`, `Group C (3)`.
- **Weighing 1:** Place `Group A` on the left pan and `Group B` on the right pan.
  - *Outcome 1:* If `Group A` is heavier $\rightarrow$ The counterfeit coin is in `Group A`.
  - *Outcome 2:* If `Group B` is heavier $\rightarrow$ The counterfeit coin is in `Group B`.
  - *Outcome 3:* If scale balances $\rightarrow$ The counterfeit coin is in `Group C`.
  *(In just 1 weighing, we reduced the search space from 9 coins down to 3 coins!)*
- **Weighing 2:** Take the 3 suspect coins. Place 1 coin on the left pan and 1 coin on the right pan, leaving 1 aside.
  - If one pan drops, that coin is the counterfeit.
  - If they balance, the coin left aside is the counterfeit.
- **Total Weighings:** Exactly **2**.

---

## 4. Puzzle Archetype 3: Asymmetric Burning Ropes (Time Measurement)

### Classic Problem:
You have **two ropes**. Each rope takes **exactly 60 minutes** to burn from end to end. However, the ropes burn **non-uniformly** (one half might burn in 10 minutes, the other in 50 minutes).  
**Question:** How can you measure **exactly 45 minutes** using only these two ropes and a lighter?

### Step-by-Step Solution:
1. **At Time $t = 0$:**
   - Light **Rope 1 at BOTH ends simultaneously**.
   - Light **Rope 2 at ONE end only**.
2. **At Time $t = 30 \text{ minutes}$:**
   - Since Rope 1 was burning from both ends, it burns twice as fast and will completely burn out in exactly $\frac{60}{2} = \mathbf{30 \text{ minutes}}$.
   - At this exact moment, Rope 2 (which has been burning from one end for 30 minutes) has **exactly 30 minutes of burn time remaining**.
3. **The Critical Move at $t = 30$:**
   - As soon as Rope 1 finishes burning, **immediately light the OTHER end of Rope 2**.
4. **At Time $t = 45 \text{ minutes}$:**
   - Since Rope 2 is now burning from both ends with 30 minutes of fuel left, it will burn out in $\frac{30}{2} = \mathbf{15 \text{ minutes}}$.
   - $30 \text{ minutes} + 15 \text{ minutes} = \mathbf{45 \text{ minutes}}$ measured precisely!

---

## 5. Puzzle Archetype 4: Mathematical Operator Insertion

### Problem Walkthrough:
Insert standard mathematical operators ($+, -, \times, \div$) and parentheses between the digits to make the equation true:
$$6 \quad 3 \quad 2 \quad 4 = 20$$

**Trial & Logic Formulation:**
- We need to reach 20 starting with 6, 3, 2, 4.
- Notice: $6 \times 3 = 18$. Then $18 - 2 + 4 = 20$.
- Let's check operator precedence:
  $$(6 \times 3) - 2 + 4 = 18 - 2 + 4 = 16 + 4 = \mathbf{20}$$
- **Equation:** $6 \times 3 - 2 + 4 = 20$.

---

## 6. Puzzle Archetype 5: Candle Measurement Riddle

### Problem:
You have two identical candles. Each candle burns for 1 hour. How do you measure **90 minutes**?
1. Light Candle 1 at one end (burns normally for 60 min).
2. When Candle 1 has 30 minutes left? Wait, you cannot tell when it has 30 minutes left because it burns irregularly!
3. **The Correct Method:**
   - Light Candle 1 at **both ends** (burns out in 30 minutes).
   - When Candle 1 completely burns out (30 minutes have elapsed), light Candle 2 at **one end normally** (burns for 60 minutes).
   - Total time elapsed = $30 \text{ min} + 60 \text{ min} = \mathbf{90 \text{ minutes}}$!

---

## 7. Puzzle Archetype 6: Cryptarithmetic / Verbal Arithmetic

### Universal Rules for Cryptarithmetic:
1. Each distinct alphabet letter represents a **unique single-digit integer (0–9)**.
2. The leading/leftmost letter of any number **can NEVER be 0**.
3. When two $N$-digit numbers sum to an $(N+1)$-digit number, the leftmost carry digit is **ALWAYS 1**.

### Case Study: Classic Cryptarithmetic Problem
```
   S E N D
+  M O R E
----------
 M O N E Y
```

**Step-by-Step Mathematical Deduction:**
1. **Deduce $M$:**
   $SEND$ and $MORE$ are 4-digit numbers. The maximum possible sum is $9999 + 9999 = 19998$. Thus, the 5th digit carry must be 1.  
   $$\mathbf{M = 1}$$
2. **Deduce $O$:**
   In Column 4 (from right): $S + M + \text{carry} = O + 10 \implies S + 1 + \text{carry} = O + 10$.  
   Since $S \le 9$, $S + 1 + 1 \le 11$. For a carry-over to produce $1$ in column 5, $S + 1 + \text{carry} \ge 10$. Since $M = 1$, $O$ cannot be 1. Therefore, $O$ must be 0, and $S$ must be 9 (or 8 with incoming carry).  
   $$\mathbf{O = 0}$$
3. **Deduce $S, E, N$:**
   In Column 3: $E + O + \text{carry}_3 = N \implies E + 0 + 1 = N \implies \mathbf{N = E + 1}$ (there must be an incoming carry from column 2 because $E \ne N$).  
   Since $N = E + 1$, there is no carry from Column 4 to Column 5 other than $S + 1 = 10 \implies \mathbf{S = 9}$.
4. **Deduce $R$:**
   In Column 2: $N + R + \text{carry}_2 = E + 10$.  
   Substitute $N = E + 1$:  
   $$(E + 1) + R + \text{carry}_2 = E + 10 \implies R + \text{carry}_2 = 9$$
   Since $\text{carry}_2$ can only be 0 or 1, and if $\text{carry}_2 = 0 \implies R = 9$ (already taken by $S$), $\text{carry}_2$ must be 1.  
   $$R + 1 = 9 \implies \mathbf{R = 8}$$
5. **Deduce $D, E, Y$:**
   Digits used so far: $\{0, 1, 8, 9\}$. Remaining digits: $\{2, 3, 4, 5, 6, 7\}$.  
   In Column 1: $D + E = Y + 10$ (must generate carry 1).  
   We need $N = E + 1$ and $D + E \ge 12$.  
   - If $E = 5 \implies N = 6$ (both available).  
   - Then $D + 5 = Y + 10 \implies D = Y + 5$.  
   - With remaining digits $\{2, 3, 4, 7\}$, if $Y = 2 \implies D = 7$ (valid!).  
   - Distinct assignments: $S=9, E=5, N=6, D=7, M=1, O=0, R=8, Y=2$.
6. **Final Verification:**
   $$9567 + 1085 = 10652 \quad \text{(Exact Match!)}$$

---

## 8. Puzzle Archetype 7: Geometric Triangle Pattern Puzzles

### Case Study: Live Infosys Triangle Puzzle
Find the missing number replacing `?` in the third geometric figure:

```
       7                   1                   5
      / \                 / \                 / \
     / 19\               / 33\               / 23\
    /_____\             /_____\             /_____\
   6       2           8       4           2       ?
  Triangle 1          Triangle 2          Triangle 3
```

**Step-by-Step Algebraic Derivation:**
1. **Analyze Triangle 1:** Bottom Left = 6, Bottom Right = 2, Apex = 7, Center = 19.
   - Hypothesis: Multiplying base vertices and adding apex vertex:
     $$(6 \times 2) + 7 = 12 + 7 = 19 \quad \checkmark$$
2. **Verify with Triangle 2:** Bottom Left = 8, Bottom Right = 4, Apex = 1, Center = 33.
   - Testing the same formula:
     $$(8 \times 4) + 1 = 32 + 1 = 33 \quad \checkmark \quad \text{(Invariant Confirmed!)}$$
3. **Solve for Triangle 3:** Bottom Left = 2, Bottom Right = $x$, Apex = 5, Center = 23.
   $$(2 \times x) + 5 = 23 \implies 2x = 18 \implies \mathbf{x = 9}$$
- **Final Answer:** **9**

---

## 9. Recommended Resources to Master Puzzles
- **YouTube:** Search `"FACE Prep Infosys Puzzle Solving 4 Questions 10 Minutes"`
- **YouTube:** Search `"Talent Battle Infosys Puzzle Repeated Questions"`
- **Website:** Practice logic riddles and balance scale problems on `indiabix.com/puzzles`.


