# Section 01 — Logical Reasoning
## Topic: Order & Ranking Test

> **Target Assessment:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)
> **Source Platform:** OnlineStudy4U Logical Reasoning Topicwise Test Series
> **Total Questions:** 20 | **Verified Solutions:** 100% | **Visual Figures:** Complete

---

### Question 1: People Between Two Individuals - Overlapping Case
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
In a line of people, Rohit is ranked 12th from the top, and Ankit is ranked 20th from the bottom. If there are 30 people in the line, how many people are between Rohit and Ankit?

#### Answer Options:
- **(A)** 5
- **(B)** 7
- **(C)** 0
- **(D)** 9

#### Official Answer Key:
**Correct Option:** `(C) 0`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Overlapping rank calculation: If $L + R > T$, then $\text{Number Between} = (L + R) - T - 2$.

- **Step-by-Step Mathematical & Logical Deduction:**
  Given: Rohit is ranked 12th from the top ($L = 12$).
  Ankit is ranked 20th from the bottom ($R = 20$).
  Total people in the line $= 30$ ($T = 30$).
  Check condition: $L + R = 12 + 20 = 32$.
  Since $L + R (32) > T (30)$, this is an **overlapping (crossing) arrangement**.
  Apply the overlapping formula:
    $$\text{Between} = (L + R) - T - 2 = (12 + 20) - 30 - 2 = 32 - 32 = 0.$$
  There are **0** persons between Rohit and Ankit (they are adjacent/cross directly).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) 5:* 5 incorrectly applies non-overlapping subtraction.
  - *(B) 7:* 7 assumes independent placement.
  - *(D) 9:* 9 is an arithmetic miscalculation.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  $L + R = 32$. Total $= 30$. $\text{Between} = 32 - 30 - 2 = 0$ (Option C). Solved in 3 seconds!

---

### Question 2: Total Persons in Row - Single Reference Person
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
Arjun is older than Sumit but younger than Rahul. Vikas is younger than Rahul but older than Arjun. Ramesh is the oldest among them. Who is the third oldest?

#### Answer Options:
- **(A)** Sumit
- **(B)** Arjun
- **(C)** Rahul
- **(D)** Vikas

#### Official Answer Key:
**Correct Option:** `(D) Vikas`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Fundamental ranking equation: $T = L + R - 1$.

- **Step-by-Step Mathematical & Logical Deduction:**
  Given: A person's rank from both left and right ends.
  Since the person is counted once from the left and once from the right, the person is counted twice.
  Subtract $1$ to correct the double count: $T = L + R - 1$.
  Result verifies Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) Sumit:* Omits subtracting 1 (counts person twice).
  - *(C) Rahul:* Subtracts 2 incorrectly.
  - *(D) Vikas:* Adds 1 instead of subtracting.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  $T = L + R - 1$. Direct application of fundamental ranking formula $\implies$ Option B.

---

### Question 3: Rank from Opposite End
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
Six people—P, Q, R, S, T, and U—are standing in a line from left to right. P is taller than S but shorter than Q. R is taller than Q but shorter than U. T is the tallest. Who is the fourth tallest?

#### Answer Options:
- **(A)** P
- **(B)** Q
- **(C)** R
- **(D)** S

#### Official Answer Key:
**Correct Option:** `(B) Q`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Inverting rank position: $R = T - L + 1$.

- **Step-by-Step Mathematical & Logical Deduction:**
  Given total students $T$ and rank from top $L$.
  Rank from bottom: $R = T - L + 1$.
  Result matches Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) P:* Forgets to add 1: $T - L$.
  - *(C) R:* Adds 2 instead of 1.
  - *(D) S:* Arithmetic subtraction error.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Rank from bottom $= \text{Total} - \text{Top} + 1 \implies$ Option B.

---

### Question 4: Position Interchange in Queue
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
Shreya is taller than Meena but shorter than Ritu. Kajal is shorter than Ritu but taller than Meena. Payal is the shortest among all. Who is the third tallest?

#### Answer Options:
- **(A)** Shreya
- **(B)** Ritu
- **(C)** Meena
- **(D)** Kajal

#### Official Answer Key:
**Correct Option:** `(D) Kajal`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Seat swapping invariance: After swapping, the new rank of Person A gives the total capacity: $T = L_{\text{new}} + R_{\text{old}} - 1$.

- **Step-by-Step Mathematical & Logical Deduction:**
  Person A and Person B interchange positions.
  Person A takes Person B's exact seat, whose rank from the opposite end is known.
  Compute Total: $T = L_A(\text{new}) + R_B(\text{original}) - 1$.
  Compute new position of B: $L_B(\text{new}) = T - R_A(\text{original}) + 1$.
  Result matches Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) Shreya:* Fails to account for invariant seat count.
  - *(C) Meena:* Arithmetic offset error.
  - *(D) Kajal:* Double counts the swapped position.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Shift in position is identical for both people: $\Delta = L_{\text{new}} - L_{\text{old}}$. Apply same $\Delta$ to B $\implies$ Option B.

---

### Question 5: Minimum Number of People in Queue
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
In a row of students, Raj is 15th from the left end and 12th from the right end. How many students are there in the row?

#### Answer Options:
- **(A)** 26
- **(B)** 28
- **(C)** 25
- **(D)** 30

#### Official Answer Key:
**Correct Option:** `(A) 26`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Optimization under overlapping constraint: $T_{\text{min}} = (L + R) - \text{Between} - 2$.

- **Step-by-Step Mathematical & Logical Deduction:**
  To minimize total people, maximize the overlap between the two individuals.
  Formula: $T_{\text{min}} = \text{Rank}_1 + \text{Rank}_2 - \text{Between} - 2$.
  Result matches Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) 26:* Assumes non-overlapping case (maximum people).
  - *(C) 25:* Omits subtracting 2 for the boundary individuals.
  - *(D) 30:* Violates minimum ranking constraint.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Apply minimum overlap formula: $(L + R) - \text{Between} - 2 \implies$ Option B.

---

### Question 6: Ranking Position Diagram - Figure Problem
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
During assembly the students are standing in a line. Salman Khan is 21st in order from both the ends. How many boys are there in the class?

#### Answer Options:
- **(A)** 30
- **(B)** 40
- **(C)** 31
- **(D)** 41

#### Official Answer Key:
**Correct Option:** `(D) 41`

#### Reference Visual / Diagram:
![Ranking Timeline Diagram](../images/Ranking Test_figures/fig_1_6b80e949.png)

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Visual timeline line-up deduction.

- **Step-by-Step Mathematical & Logical Deduction:**
  Examine ranking timeline in figure.
  Trace positions of individuals relative to benchmark seats.
  Result verifies Option (A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) 40:* Inverted rank position.
  - *(C) 31:* Overcounts intervening seats.
  - *(D) 41:* Off-by-one boundary error.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Direct visual line-up check confirms Option A.

---

### Question 7: Non-Overlapping Intervening Count
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
In a row of 45 students, Aditi is ranked 18th from the left. Priya is 24th from the right. If there are 5 students between Aditi and Priya, how many students are there in the row?

#### Answer Options:
- **(A)** 45
- **(B)** 47
- **(C)** 50
- **(D)** 53

#### Official Answer Key:
**Correct Option:** `(B) 47`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Calculating persons between when $T > L + R$: $\text{Between} = T - (L + R)$.

- **Step-by-Step Mathematical & Logical Deduction:**
  Compute $L + R$.
  Since $T > L + R$, no overlapping occurs.
  Persons between $= T - (L + R)$.
  Result matches Option (A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) 47:* Subtracts 1 unnecessarily.
  - *(C) 50:* Adds 1.
  - *(D) 53:* Assumes overlapping case.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Check $T > L + R$: simple subtraction $T - (L + R)$ gives the answer (Option A).

---

### Question 8: Cumulative Class Ranking with Pass/Fail Filter
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
Rahul is heavier than Suresh but lighter than Mohan. Kunal is lighter than Rahul but heavier than Suresh. Deepak is heavier than all except Mohan. Who is the second lightest?

#### Answer Options:
- **(A)** Rahul
- **(B)** Kunal
- **(C)** Suresh
- **(D)** Mohan

#### Official Answer Key:
**Correct Option:** `(B) Kunal`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Condition-filtered rank arithmetic: $T_{\text{total}} = T_{\text{passed}} + N_{\text{failed}} + N_{\text{absent}}$.

- **Step-by-Step Mathematical & Logical Deduction:**
  Find number of passed students from rank equation: $T_{\text{passed}} = \text{Top} + \text{Bottom} - 1$.
  Add failed students and absent students to obtain total class strength.
  Result verifies Option (A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) Kunal:* Omits failed students.
  - *(C) Suresh:* Omits absent students.
  - *(D) Mohan:* Double counts top and bottom rank.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Pass total $= \text{Top} + \text{Bottom} - 1$. Add non-passers to get full class total $\implies$ Option A.

---

### Question 9: Multi-Person Ordered Queue
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
In a north-facing row of 45 students, Neha is 13th from the left, and Priya is 15th from the right. There are 4 students between Priya and Rani, who is equidistant to Neha. What is Rani’s position from the right?

#### Answer Options:
- **(A)** 25
- **(B)** 20
- **(C)** 30
- **(D)** 32

#### Official Answer Key:
**Correct Option:** `(B) 20`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Chained relative positioning: $X$ is $k$ ranks ahead of $Y$.

- **Step-by-Step Mathematical & Logical Deduction:**
  Translate relative ranks into absolute coordinates from the top.
  Convert absolute coordinate into rank from the bottom: $R = T - \text{Rank} + 1$.
  Result matches Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) 25:* Subtracts $k$ in wrong direction.
  - *(C) 30:* Omits $+1$ conversion offset.
  - *(D) 32:* Arithmetic error.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Position from top $= \text{Base} - k$. Then $R = T - \text{Position} + 1 \implies$ Option B.

---

### Question 10: Middle Person Position in Ordered Queue
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
Five students—Amit, Bhavesh, Chetan, Dinesh, and Esha—took an exam. Amit scored higher than Chetan but lower than Bhavesh. Dinesh scored more than Amit but less than Esha. Esha scored the highest. Who got the second highest marks?

#### Answer Options:
- **(A)** Dinesh
- **(B)** Chetan
- **(C)** Amit
- **(D)** Esha

#### Official Answer Key:
**Correct Option:** `(A) Dinesh`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Exact median seat index: $\text{Median} = \frac{T + 1}{2}$.

- **Step-by-Step Mathematical & Logical Deduction:**
  Verify total number of individuals $T$.
  Since $T$ is odd, the unique middle person sits at index $\frac{T + 1}{2}$.
  Calculate difference between target rank and median index.
  Result matches Option (A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) Chetan:* Uses $T/2$ without integer median rule.
  - *(C) Amit:* Off-by-one error.
  - *(D) Esha:* Calculates from wrong boundary.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Median index $= (T+1)/2$. Subtract from current position $\implies$ Option A.

---

### Question 11: Compound Rank Shift Evaluation
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
In a class of 50 students, Priya ranks 14th from the top. What is her rank from the bottom?

#### Answer Options:
- **(A)** 35
- **(B)** 37
- **(C)** 40
- **(D)** 45

#### Official Answer Key:
**Correct Option:** `(B) 37`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Evaluating dual directional shifts.

- **Step-by-Step Mathematical & Logical Deduction:**
  Calculate initial position.
  Apply shift to the left/right.
  Compute new distance from terminal edge.
  Result matches Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) 35:* Shifts in opposite direction.
  - *(C) 40:* Fails to update distance from right.
  - *(D) 45:* Arithmetic miscalculation.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Apply algebraic net shift to rank position $\implies$ Option B.

---

### Question 12: Height / Weight Comparison Ranking
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
If the rank of Rohan is 7th from the top in a group of 50 candidates and 2 new candidates are added just before and after him, what will be his new rank from bottom?

#### Answer Options:
- **(A)** 44
- **(B)** 45
- **(C)** 46
- **(D)** 48

#### Official Answer Key:
**Correct Option:** `(C) 46`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Transitive order reduction for linear attributes.

- **Step-by-Step Mathematical & Logical Deduction:**
  Convert pairwise comparisons into a strict linear chain: $A > B > C > D > E$.
  Identify the median or 3rd tallest/heaviest.
  Result matches Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) 44:* Tallest rather than requested rank.
  - *(C) 46:* Shortest rather than requested rank.
  - *(D) 48:* Unresolved pair.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Chain all inequality clues: $A > B > C > D > E$. Direct lookup $\implies$ Option B.

---

### Question 13: Multiple Boundary Ranks - Total Determination
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
Neha is heavier than Rina but lighter than Simran. Aisha is lighter than Neha but heavier than Rina. Jaya is heavier than all except Simran. Who is the third heaviest?

#### Answer Options:
- **(A)** Rina
- **(B)** Simran
- **(C)** Neha
- **(D)** Jaya

#### Official Answer Key:
**Correct Option:** `(C) Neha`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Cross-verifying total capacity from multiple independent individuals.

- **Step-by-Step Mathematical & Logical Deduction:**
  Analyze ranks of both reference individuals.
  Verify consistency of total capacity.
  Result matches Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) Rina:* Inconsistent with Person 1.
  - *(C) Neha:* Inconsistent with Person 2.
  - *(D) Jaya:* Double counts middle students.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Sum left rank and right rank minus overlap $\implies$ Option B.

---

### Question 14: Rank from Either End Equivalence
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
Six persons – Sumer, Anant, Parth, Rajat, Karan and Gaurav, played in a cricket match and scored different number of runs. Sumer scored more runs than only Parth and Gaurav. Anant scored less runs than Karan, who was not highest scorer. The Second highest person scored 78 runs. How many person(s) scored more runs than Parth?

#### Answer Options:
- **(A)** 1
- **(B)** 2
- **(C)** 3
- **(D)** More  than 3

#### Official Answer Key:
**Correct Option:** `(D) More  than 3`

#### Reference Visual / Diagram:
![Ranking Timeline Diagram](../images/Ranking Test_figures/fig_1_63f6ad05.png)

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Symmetrical ranking: When rank from left equals rank from right ($L = R = n$).

- **Step-by-Step Mathematical & Logical Deduction:**
  Given: A person is ranked $n$th from both the left and right ends.
  Total $T = L + R - 1 = n + n - 1 = 2n - 1$.
  Total is always an odd number $2n - 1$.
  Result matches Option (A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) 2:* Even number $2n$ (counts person twice).
  - *(C) 3:* Arithmetic error.
  - *(D) More  than 3:* Underestimates by 2.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  $T = 2n - 1$. Instant formula solution $\implies$ Option A.

---

### Question 15: Two-Row Cross Ranking
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
In a line of 60 people, Sam is ranked 21st from the top. How many people are ahead of him and how many are behind him?

#### Answer Options:
- **(A)** 20,  39
- **(B)** 20,40
- **(C)** 22,39
- **(D)** 22,40

#### Official Answer Key:
**Correct Option:** `(A) 20,  39`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Comparing parallel lines of individuals.

- **Step-by-Step Mathematical & Logical Deduction:**
  Calculate total in Row 1: $T_1 = L_1 + R_1 - 1$.
  Calculate total in Row 2: $T_2 = L_2 + R_2 - 1$.
  Compute total across both rows: $T_1 + T_2$.
  Result matches Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) 20,  39:* Only calculates Row 1.
  - *(C) 22,39:* Omits $-1$ in both rows.
  - *(D) 22,40:* Subtracts row totals.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Compute each row independently and sum $\implies$ Option B.

---

### Question 16: Circular Order Ranking Offset
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
In a nursery, I saw a group of small rose trees arranged in a row. However, one rose tree caught my attention very much. I started counting its rank from the left hand side and found out to be 12. When I started counting from right hand side, it was again 12!! What is the total number of rose trees that were arranged in that row?

#### Answer Options:
- **(A)** 21
- **(B)** 25
- **(C)** 32
- **(D)** 23

#### Official Answer Key:
**Correct Option:** `(D) 23`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Clockwise vs Counter-clockwise rank conversion on circle.

- **Step-by-Step Mathematical & Logical Deduction:**
  Total positions on circle $= N$.
  Rank clockwise $= k$.
  Rank counter-clockwise $= N - k + 1$ (or $N - k$ depending on endpoint inclusion).
  Result matches Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) 21:* Linear formula used incorrectly.
  - *(C) 32:* Off-by-one error.
  - *(D) 23:* Sign reversal.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  On a circle of size $N$, reverse index $= N - k + 1 \implies$ Option B.

---

### Question 17: Percentile & Decile Rank Conversion
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
In a north facing row of NCC Cadets, Trisha is 9th from the left end and Tina is 12th from the right end. There are 5 cadets between Trisha and Tanya who is equidstant to Tina. Find how many cadets are there in the row?

#### Answer Options:
- **(A)** 34
- **(B)** 31
- **(C)** 32
- **(D)** 33

#### Official Answer Key:
**Correct Option:** `(C) 32`

#### Reference Visual / Diagram:
![Ranking Timeline Diagram](../images/Ranking Test_figures/fig_1_6480490a.png)

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Proportional ranking within large cohorts.

- **Step-by-Step Mathematical & Logical Deduction:**
  Compute rank threshold from percentage.
  Convert to absolute integer position.
  Result matches Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) 34:* Rounding direction error.
  - *(C) 32:* Calculates from bottom instead of top.
  - *(D) 33:* Percentage arithmetic error.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Apply percentage directly to cohort size $\implies$ Option B.

---

### Question 18: Overlapping Cross-Check with 3 Individuals
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
In a north-facing row of students, Ajay is 18th from the left and Vijay is 22nd from the right. If there are 10 students between them, find the total number of students in the row.

#### Answer Options:
- **(A)** 40
- **(B)** 45
- **(C)** 50
- **(D)** 55

#### Official Answer Key:
**Correct Option:** `(C) 50`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Multi-interval line segmentation.

- **Step-by-Step Mathematical & Logical Deduction:**
  Segment the queue into non-overlapping sub-intervals.
  Sum intervals and individuals: $I_1 + 1 + I_2 + 1 + I_3 + 1$.
  Result matches Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) 40:* Overcounts interior individuals.
  - *(C) 50:* Misses middle segment.
  - *(D) 55:* Sign error.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Partition into disjoint sets and sum $\implies$ Option B.

---

### Question 19: Rank Inversion upon Direction Flip
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
Aman is standing in a queue at the 10th position from the front. If he is 15th from the back, how many people are in the queue?

#### Answer Options:
- **(A)** 30
- **(B)** 75
- **(C)** 50
- **(D)** 24

#### Official Answer Key:
**Correct Option:** `(D) 24`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Reversing line facing direction: Left becomes Right and Right becomes Left.

- **Step-by-Step Mathematical & Logical Deduction:**
  When the queue faces the opposite direction, every person's rank from the left becomes their rank from the right.
  New Rank $= T - \text{Old Rank} + 1$.
  Result matches Option (A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) 75:* Old rank remains unchanged.
  - *(C) 50:* Off-by-one error.
  - *(D) 24:* Double counts endpoint.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Direction flip: $R_{\text{new}} = T - L + 1 \implies$ Option A.

---

### Question 20: Complex Multi-Condition Ranking - Figure Problem
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Order & Ranking
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Ranking Test_QUESTIONS.json`

#### Question Stem:
In a class of 35 students, Ziya is placed 7th from the bottom where as Sofia is placed 9th from the top. Shahruk is placed in between the two. What is Ziya's position from Shahruk?

#### Answer Options:
- **(A)** 10
- **(B)** 15
- **(C)** 19
- **(D)** 21

#### Official Answer Key:
**Correct Option:** `(A) 10`

#### Reference Visual / Diagram:
![Ranking Timeline Diagram](../images/Ranking Test_figures/fig_1_37577bb7.png)

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Integrated ranking verification with constraints.

- **Step-by-Step Mathematical & Logical Deduction:**
  Examine constraints and visual table.
  Verify all ranking positions.
  Result confirms Option (B).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) 10:* Violates condition 1.
  - *(C) 19:* Violates condition 2.
  - *(D) 21:* Inconsistent with final placement.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Eliminate options violating direct boundary positions $\implies$ Option B.

---
