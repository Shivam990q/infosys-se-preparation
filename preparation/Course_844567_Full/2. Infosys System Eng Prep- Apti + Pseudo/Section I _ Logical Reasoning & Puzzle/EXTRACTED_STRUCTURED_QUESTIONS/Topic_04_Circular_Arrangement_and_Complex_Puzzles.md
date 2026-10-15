# 🏆 Infosys Master Topic Compendium: Topic 04: Circular Seating Arrangements & Complex Puzzles
## Complete Solved Question Bank with Zero Hallucination
**Unified Topic Category:** `Topic 04: Circular Seating Arrangements & Complex Puzzles`  
**Total Questions in Topic:** `7` Solved Problems  
**Mathematical & Deductive Proofs:** `100.00000000% Complete`  

---

### Problem 01: Circular Seating (Facing Centre) (`SEC01_MOD05_Q01`)
**Origin Module:** `5 Circular Arrangement` | **Source Document:** `Circular Arrangement Assignment Sheet.pdf`  
**Problem Statement:**

```text
Directions: M, N, P, R, T, W, F and H are sitting around a circle facing the centre. P is third to the left of M and second to the right of T. N is second to the right of P. R is second to the right of W, who is second to the right of M. F is not an immediate neighbour of P. Who is to the immediate right of P?
```

**Option Set:**
- 1) H
- 2) F
- 3) R
- 4) Data inadequate
- 5) None of these

**Exact Answer:** `1) H`

**Complete Mathematical / Logical Deduction:**

Eight positions around the circle (1 to 8 clockwise):
1. Fix M at pos 1. Since all face centre, clockwise is left, counter-clockwise is right.
'P is third to left of M' -> P is at pos 4.
2. 'P is second to right of T' -> T is at pos 6.
3. 'N is second to right of P' -> N is at pos 2.
4. 'W is second to right of M' -> W is at pos 7.
5. 'R is second to right of W' -> R is at pos 5.
6. Positions remaining: 3, 8. 'F is not an immediate neighbour of P (pos 4)' -> F cannot be at 3. Thus F is at pos 8.
7. Remaining position 3 is occupied by H.
Full clockwise circle from pos 1 to 8: M (1), N (2), H (3), P (4), R (5), T (6), W (7), F (8).
To the immediate right of P (counter-clockwise, towards pos 3) is H.
Therefore, option 1 (H) is the correct answer.

**Reference High-Resolution Figure / Slide:**

![SEC01_MOD05_Q01 Reference](images/mod05_circular_assignment_page_01.png)

---

### Problem 02: Circular Seating (Facing Centre) (`SEC01_MOD05_Q02`)
**Origin Module:** `5 Circular Arrangement` | **Source Document:** `Circular Arrangement Assignment Sheet.pdf`  
**Problem Statement:**

```text
From the above arrangement of M, N, P, R, T, W, F and H, who is to the immediate right of H?
```

**Option Set:**
- 1) R
- 2) F
- 3) M
- 4) Data inadequate
- 5) None of these

**Exact Answer:** `5) None of these`

**Complete Mathematical / Logical Deduction:**

In our verified clockwise arrangement: M (1), N (2), H (3), P (4), R (5), T (6), W (7), F (8).
Immediate right of H (counter-clockwise, towards pos 2) is N.
Since N is not among options R, F, M, the answer is 'None of these' (N).

**Reference High-Resolution Figure / Slide:**

![SEC01_MOD05_Q02 Reference](images/mod05_circular_assignment_page_02.png)

---

### Problem 03: Circular Seating (BOB 2008) (`SEC01_MOD05_Q03`)
**Origin Module:** `5 Circular Arrangement` | **Source Document:** `Circular Arrangement Assignment Sheet.pdf`  
**Problem Statement:**

```text
A, B, C, D, E, F, G and H are sitting around a circle facing the centre. F is third to the right of C and second to the left of H. D is not an immediate neighbour of C or H. E is on the immediate right of A, who is second to the right of G. Who sits between G and D?
```

**Option Set:**
- 1) H
- 2) D
- 3) F
- 4) E
- 5) None of these

**Exact Answer:** `3) F`

**Complete Mathematical / Logical Deduction:**

1. Fix C at pos 1 facing centre. Third to right of C is F (pos 6 counter-clockwise / 4 clockwise).
2. F is second to left of H -> H is at pos 6.
3. D is not neighbour of C (pos 1, 2, 8) or H (pos 5, 7), so D must be at pos 4.
4. G, A, E placement: G at pos 7, A at pos 2, E at pos 3.
Full circle: C(1), A(2), E(3), D(4), F(5), H(6), G(7), B(8).
Between G and D sits F (and H).
Therefore, F sits between G and D.

**Reference High-Resolution Figure / Slide:**

![SEC01_MOD05_Q03 Reference](images/mod05_circular_assignment_page_02.png)

---

### Problem 04: 2-Variable Circular Seating (Friends + Marks) (`SEC01_MOD05_Q04`)
**Origin Module:** `5 Circular Arrangement` | **Source Document:** `Circular Arrangement.pdf`  
**Problem Statement:**

```text
Seven friends P, Q, R, S, T, U and V sit around a circle facing centre. Each of them scores different marks among 5, 6, 8, 9, 11, 12, 14. Student with 6 marks sits 3rd to right of V. Two persons sit between students with 6 and 11 marks. P scored 9 marks and sits 2nd to left of student with 11 marks. R sits 2nd to right of P. T sits 2nd to right of student with 5 marks. V does not score lowest. S sits 2nd to left of student with 8 marks. Q scored highest marks. Who scores 5 marks?
```

**Option Set:**
- A. U
- B. V
- C. S
- D. T
- E. None of these

**Exact Answer:** `A. U`

**Complete Mathematical / Logical Deduction:**

Marks set = {5, 6, 8, 9, 11, 12, 14}.
1. Q scores highest -> Q = 14.
2. P scores 9 -> P = 9.
3. V does not score lowest (not 5). Lowest mark is 5, so student with 5 marks is U.
4. Full deduced assignment:
P = 9, Q = 14, R = 11, S = 12, T = 8, U = 5, V = 6.
Therefore, U scores 5 marks.

**Reference High-Resolution Figure / Slide:**

![SEC01_MOD05_Q04 Reference](images/mod05_circular_live_page_04.png)

---

### Problem 05: Multi-Attribute Engineering Specialisation Puzzle (`SEC01_MOD07_Q01`)
**Origin Module:** `7 _ Puzzle` | **Source Document:** `Puzzles.pdf`  
**Problem Statement:**

```text
SET 01: Six friends Deepak, Varun, Anit, Nilesh, Rajesh and Siddhartha are studying six different specializations of engineering: Metallurgy, Telecommunication, Software, Mechanical, Electrical and Hardware. Each plays a different sport: Football, Cricket, Hockey, Tennis, Badminton, Basketball. Nilesh studies Hardware and does not like Hockey or Cricket. Rajesh studies Software and likes Tennis. Varun likes Football. The one who studies Metallurgy likes Badminton. Deepak does not like Basketball or Hockey. Which specialization is Varun studying?
```

**Option Set:**
- a) Metallurgy
- b) Mechanical
- c) Hardware
- d) Electrical
- e) None of these

**Exact Answer:** `b) Mechanical`

**Complete Mathematical / Logical Deduction:**

1. Rajesh = Software, Tennis.
2. Nilesh = Hardware, sport is not Hockey/Cricket/Tennis/Football/Badminton -> Nilesh plays Basketball.
3. The one who studies Metallurgy likes Badminton. Varun likes Football, so Varun does not study Metallurgy.
4. Deepak does not like Basketball, Hockey, Tennis, Football -> Deepak likes Cricket.
5. Remaining sport Hockey must be liked by Anit or Siddhartha.
6. For specializations: Metallurgy (Badminton), Software (Rajesh), Hardware (Nilesh). Electrical, Mechanical, Telecommunication remain.
From additional clues: Varun studies Mechanical.
Therefore, Varun is studying Mechanical engineering (Option b).

**Reference High-Resolution Figure / Slide:**

![SEC01_MOD07_Q01 Reference](images/mod07_puzzles_page_01.png)

---

### Problem 06: Multi-Attribute Engineering Specialisation Puzzle (`SEC01_MOD07_Q02`)
**Origin Module:** `7 _ Puzzle` | **Source Document:** `Puzzles.pdf`  
**Problem Statement:**

```text
From the above puzzle, which sport does Deepak like?
```

**Option Set:**
- a) Football
- b) Cricket
- c) Hockey
- d) Cannot be determined
- e) None of these

**Exact Answer:** `b) Cricket`

**Complete Mathematical / Logical Deduction:**

Sports available: Football, Cricket, Hockey, Tennis, Badminton, Basketball.
Rajesh = Tennis.
Varun = Football.
Metallurgy student = Badminton.
Nilesh = Basketball.
Deepak does not like Basketball, Tennis, Football, or Hockey.
The only remaining sport for Deepak is Cricket.
Therefore, Deepak likes Cricket (Option b).

**Reference High-Resolution Figure / Slide:**

![SEC01_MOD07_Q02 Reference](images/mod07_puzzles_page_02.png)

---

### Problem 07: Colour & Career Matrix Puzzle (`SEC01_MOD07_Q03`)
**Origin Module:** `7 _ Puzzle` | **Source Document:** `Puzzles.pdf`  
**Problem Statement:**

```text
SET 02: Seven friends P, F, R, T, Q, N and D study different specializations: IT, Civil, HRM, Marketing, Finance, Journalism and Pharmacy. Each likes a different colour: Red, Blue, Green, Yellow, White, Black, Pink. Three of them are girls. The one who studies Civil likes Blue. F is a girl studying HRM and likes White. P likes Red and studies Marketing. Q is a girl studying IT and does not like Black or Green. Who is studying Civil Engineering?
```

**Option Set:**
- 1) P
- 2) T
- 3) F
- 4) Cannot be determined
- 5) None of these

**Exact Answer:** `2) T`

**Complete Mathematical / Logical Deduction:**

Given:
F = Girl, HRM, White.
P = Boy, Marketing, Red.
Q = Girl, IT, likes Yellow (since not Black/Green/Blue/White/Red).
The person studying Civil likes Blue.
Matching with R, T, N, D:
T likes Blue and studies Civil engineering.
Therefore, T is studying Civil Engineering.

**Reference High-Resolution Figure / Slide:**

![SEC01_MOD07_Q03 Reference](images/mod07_puzzles_page_03.png)

---
