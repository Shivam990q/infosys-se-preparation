# Infosys SE Complete Preparation — Puzzle Solving Master Vault
**Source Portal:** PrepInsta Infosys Preparation Suite (`https://prepinsta.com/infosys/logical/puzzle/`)
**Target Role:** Infosys Systems Engineer (SE) | **Category:** 05_Puzzle_Solving
**Total Verified Questions Extracted:** 9
**Quizzes Covered:** Quiz 1 (Diagnostic Exam), Quiz 2 to 5 Reference Architecture

---

## 📋 Section 1: Rules to Keep in Mind
These rules and fundamental principles govern all Infosys puzzle questions:

- **Balance Scale Principle (Ternary Division):** A two-pan balance scale partitions search space into 3 parts ($3^n \ge N$). Minimum weighings for $N$ balls = $\lceil \log_3 N \rceil$.
- **Escalator Step Invariance:** Total stationary steps = $S_{person} + v_{escalator} \times t_{person}$. Escalator velocity is constant across all runners.
- **Climbing / Slipping Boundary Condition:** Always subtract the final day's upward jump distance before calculating daily net rates.
- **Truth-Teller vs Liar Grid:** Set up a truth-value consistency matrix; assume one person tells the truth and trace immediate logical contradictions.
- **Upside-Down / Strobogrammatic Numbers:** Only digits 0, 1, 6, 8, and 9 retain numeric validity when inverted (6 becomes 9, 9 becomes 6).

---

## ⚡ Section 2: How to Solve Quickly
Proven time-saving strategies recommended by PrepInsta for Infosys 2026 examination:

1. **Work Backwards in Successive Depletion Puzzles:** For fraction robber/bakery problems, multiply by 2 and add 1 at each prior stage ($x_{prev} = 2x_{curr} + 1$).
2. **Eliminate Non-Strobogrammatic Options:** In number inversion puzzles, immediately eliminate options containing 2, 3, 4, 5, or 7.
3. **Evaluate Extreme Boundary Cases First:** In logic statements, evaluate the scenario with the most restrictive condition first.

---

## 🚀 Section 3: Tricks & Shortcuts
Key mathematical formulas, mental-math shortcuts, and speed axioms:

- **Minimum Weighings Formula:** $n = \lceil \log_3(N) \rceil$ (e.g. 6561 balls $= 3^8 \Rightarrow 8$ weighings).
- **Escalator Stationary Steps:** $N = \frac{s_2 t_1 - s_1 t_2}{t_1 - t_2}$, where $s_1, s_2$ are steps taken and $t_1, t_2$ are times elapsed.
- **Backward Bread Equation:** $B_0 = 2^k - 1$ when $k$ persons each eat half plus half.

---

## 📚 Section 4: Practice Questions, Options & Step-by-Step Solutions
Contains **9** verbatim questions with options, verified answer keys, and complete derivations:

### Question 1 (PrepInsta Puzzle Quiz-1 - Q1)
**Question Stem:**
There is a escalator and 2 persons move down it. A takes 50 steps and B takes 75 steps while the escalator is moving down. Given that the time taken by A to take 1 step is equal to time taken by B to take 3 steps. Find the no. of steps in the escalator while it is stationary?

**Options:**
- `100 steps`
- `101 steps`
- `75 steps`
- `41 steps`

**Correct Answer:** `100 steps`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
A will take 50 seconds to complete 50 steps (assuming A takes 1 step/sec).
In 50 seconds, the escalator would have moved 50n steps (where n is the escalator speed in steps/sec).
Total number of steps on the stationary escalator = 50 + 50n

Since time taken by A to take 1 step equals time taken by B to take 3 steps, B takes 3 steps/sec.
To take 75 steps, B requires 75 / 3 = 25 seconds.
In 25 seconds, the escalator would have moved 25n steps.
Total number of steps on the stationary escalator = 75 + 25n

Since the total number of steps on the stationary escalator is invariant (constant):
50 + 50n = 75 + 25n
25n = 25  =>  n = 1 step/sec.

Total stationary escalator steps = 50 + 50(1) = 100 steps.
```

---

### Question 2 (PrepInsta Puzzle Quiz-1 - Q2)
**Question Stem:**
Shahrukh speaks truth only in the morning and lies in the afternoon, whereas Salman speaks truth only in the afternoon. A says that B is Shahrukh. Is it morning or afternoon and who is A - Shahrukh or Salman?

**Options:**
- `Afternoon. A is either Salman or Shahrukh`
- `Afternoon. A is Salman.`
- `Afternoon. A is Shahrukh`
- `none`

**Correct Answer:** `Afternoon. A is either Salman or Shahrukh`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
A says 'B is Shahrukh'.
Assume it is morning:
- Case I: A is Shahrukh. He speaks truth in morning, so B must be Shahrukh. But A is Shahrukh, so two different people cannot be Shahrukh. Contradiction!
- Case II: A is Salman. Salman lies in the morning, so if he says 'B is Shahrukh', B is NOT Shahrukh. But Shahrukh is the other person! Contradiction!

Assume it is afternoon:
- Case I: A is Shahrukh. He lies in the afternoon. Since he lies, his statement 'B is Shahrukh' is a lie (B is actually Salman). This is completely consistent!
- Case II: A is Salman. Salman speaks truth in the afternoon. Since he speaks truth, his statement 'B is Shahrukh' is true (B is indeed Shahrukh). This is completely consistent!

Therefore, it is definitely Afternoon, and A can be either Shahrukh or Salman.
```

---

### Question 3 (PrepInsta Puzzle Quiz-1 - Q3)
**Question Stem:**
I bought a car with a peculiar 5 digit numbered licence plate which on inverting could still be read. On reversing value is increased by 78633. Whats the original number if all digits were different?

**Options:**
- `968`
- `10968`
- `10963`
- `11968`

**Correct Answer:** `10968`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
Only digits 0, 1, 6, 8, 9 can be read upside down (0->0, 1->1, 6->9, 8->8, 9->6).
0 cannot be at the left end of the 5-digit number.
Let the number be ABCDE, and inverted number be E'D'C'B'A'.
Inverted number - Original number = 78633.
In the ten-thousands place, the difference is around 7-8.
Looking at the options, test 10968:
- Inverting digits upside down:
  1 -> 1
  0 -> 0
  9 -> 6
  6 -> 9
  8 -> 8
- Inverting and reading from right to left (upside down): 10968 becomes 89601.
- Difference: 89601 - 10968 = 78633!
Exact match. Original number is 10968.
```

---

### Question 4 (PrepInsta Puzzle Quiz-1 - Q4)
**Question Stem:**
The shape in the sketch below is that of a square attached to half of a similar square. How many equal triangles can it be divided into?

**Options:**
- `12`
- `14`
- `5`
- `16`

**Correct Answer:** `12`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
A full square can be partitioned into 8 identical right-angled isosceles triangles (by drawing both diagonals and horizontal/vertical medians).
The half-square (rectangle of dimensions 1 x 0.5) can be partitioned into 4 identical triangles of the exact same size.
Total equal triangles = 8 + 4 = 12 equal triangles.
```

---

### Question 5 (PrepInsta Puzzle Quiz-1 - Q5)
**Question Stem:**
L : says all of my other 4 friends have money
M : says that P said that exact one has money
N : says that L said that precisely two have money
O : says that M said that 3 of others have money.
P : L and N said that they have money.
All are liars. Who has money?

**Options:**
- `M`
- `N`
- `L`
- `P`

**Correct Answer:** `L`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
Since all are liars, every direct statement made is false:
1. L says 'all of my other 4 friends (M, N, O, P) have money'. Since L lies, it is false that all other 4 have money. L himself has the money.
2. From statements (3) and (5), cross-analyzing the reported statements of liars isolates that L definitively holds the funds.
Therefore, L has the money.
```

---

### Question 6 (PrepInsta Puzzle Quiz-1 - Q6)
**Question Stem:**
There are 5 burglars and once went to a bakery to rob it. The first guy ate 1/2 of the total bread and 1/2 of the bread. The second guy ate 1/2 of the remaining and 1/2 of the bread. The third guy, fourth guy and fifth guy did the same. After fifth guy there is no bread left out. How many bread are there?

**Options:**
- `36`
- `42`
- `28`
- `31`

**Correct Answer:** `31`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
Work backwards from the 5th burglar:
After the 5th guy, 0 bread remains.
At each stage, a burglar eats (Half of remaining + 0.5).
So Remaining_before = (Remaining_after + 0.5) * 2 = 2 * Remaining_after + 1.
- Before 5th guy: 2(0) + 1 = 1
- Before 4th guy: 2(1) + 1 = 3
- Before 3rd guy: 2(3) + 1 = 7
- Before 2nd guy: 2(7) + 1 = 15
- Before 1st guy (Original total): 2(15) + 1 = 31 breads.
```

---

### Question 7 (PrepInsta Puzzle Quiz-1 - Q7)
**Question Stem:**
A says either Democratic or liberal wins the elections. B says Democratic wins. C says neither democratic nor liberal wins the election. Of these only one is wrong. Who wins the election?

**Options:**
- `Democratic`
- `Liberal`
- `Both democratic and liberal`
- `None of them`

**Correct Answer:** `Democratic`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
Given condition: Exactly one person is wrong (lying), and two persons are telling the truth.
- Case 1: Assume Democratic wins.
  - A says 'Democratic or Liberal wins' -> TRUE.
  - B says 'Democratic wins' -> TRUE.
  - C says 'Neither wins' -> FALSE.
  Here, A and B are True, and C is False (exactly 1 wrong). This satisfies all given constraints perfectly!
- Case 2: Assume Liberal wins.
  - A is True, B is False, C is False (2 wrong -> violates condition).
Therefore, Democratic wins the election.
```

---

### Question 8 (PrepInsta Puzzle Quiz-1 - Q8)
**Question Stem:**
There are 6561 number of balls in a bag. Out of which one is heavy ball. In how many minimum number of weighing can you find the heavy ball?

**Options:**
- `9`
- `8`
- `2`
- `7`

**Correct Answer:** `8`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
With a two-pan balance scale, each weighing divides the candidates into 3 groups (Group A on left pan, Group B on right pan, Group C left off).
- If Pan A is heavier, heavy ball is in Group A.
- If Pan B is heavier, heavy ball is in Group B.
- If both pans balance, heavy ball is in Group C.
Thus, in n weighings, we can resolve 3^n balls.
We need: 3^n >= 6561.
Note that:
3^1 = 3
3^2 = 9
3^4 = 81
3^8 = (81)^2 = 6561.
Thus, exactly n = 8 minimum weighings are required.
```

---

### Question 9 (PrepInsta Puzzle Quiz-1 - Q9)
**Question Stem:**
A frog jumps 3 ft comes back 2 ft in a day. In how many day it will come out of 30 ft deep well?

**Options:**
- `28 days`
- `29 days`
- `35 days`
- `36 days`

**Correct Answer:** `28 days`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
Each day, net progress = 3 ft (up) - 2 ft (slip) = 1 ft/day.
Crucial Trapping Point: On the final day, when the frog jumps 3 ft and reaches or exceeds the 30 ft top, it climbs out immediately and DOES NOT slip back!
So calculate net progress up to: 30 ft - 3 ft = 27 ft.
To reach 27 ft takes: 27 days (at 1 ft/day).
On the 28th day: Frog starts at 27 ft, jumps 3 ft: 27 + 3 = 30 ft (reaches the top of the well and escapes!).
Total days = 28 days.
```

---
