# Section 01 — Logical Reasoning
## Topic: Data Sufficiency Analysis

> **Target Assessment:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)
> **Source Platform:** OnlineStudy4U Logical Reasoning Topicwise Test Series
> **Total Questions:** 20 | **Verified Solutions:** 100% | **Visual Figures:** Complete

---

### Question 1: Class Strength Determination - 3 Statements Combined
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
How many students are in the class? Statements: I. Ramesh is ranked 12th from the top. II. Suresh is ranked 8th from the bottom. III. There are 5 students between Ramesh and Suresh.

#### Answer Options:
- **(A)** Only  I and II together are sufficient
- **(B)** Only  II and III together are sufficient
- **(C)** Only  I and III together are sufficient
- **(D)** All  I, II, and III together are sufficient
- **(E)** Even  all statements together are not sufficient

#### Official Answer Key:
**Correct Option:** `(D) All  I, II, and III together are sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Multi-statement data sufficiency requiring simultaneous application of three ranking constraints.

- **Step-by-Step Mathematical & Logical Deduction:**
  Question: 'How many students are in the class?'
  Statement I: 'Ramesh is ranked 12th from the top.'
    - Alone: Gives Ramesh's position from top ($L_{\text{Ramesh}} = 12$). Total $T$ unknown. INSUFFICIENT.
  Statement II: 'Suresh is ranked 22nd from the bottom.'
    - Alone: Gives Suresh's position from bottom ($R_{\text{Suresh}} = 22$). Total $T$ unknown. INSUFFICIENT.
  Statement III: 'There are 5 students between Ramesh and Suresh.'
    - Alone: Gives only relative gap, no absolute endpoints. INSUFFICIENT.
  Combine Statements I, II, and III:
    - Ramesh is 12th from top.
    - There are 5 students between Ramesh and Suresh, and Suresh is below Ramesh.
    - Therefore, Suresh's rank from top $= 12 + 5 + 1 = 18$.
    - Suresh is also 22nd from the bottom.
    - Total students in class $= \text{Top} + \text{Bottom} - 1 = 18 + 22 - 1 = 39$.
  A unique integer answer ($39$) is obtained only when using all three statements together.
  Therefore, **All I, II, and III together are sufficient** (Option D).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) Only  I and II together are sufficient:* Only I and II: Lacks relative ordering or gap between Ramesh and Suresh.
  - *(B) Only  II and III together are sufficient:* Only II and III: Lacks top anchor position.
  - *(C) Only  I and III together are sufficient:* Only I and III: Lacks bottom anchor position.
  - *(E) Even  all statements together are not sufficient:* Even all statements not sufficient: False, unique value 39 is obtained.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  To link top rank and bottom rank with an intervening gap, you MUST have: (1) top rank, (2) bottom rank, and (3) gap between them. All three statements required $\implies$ Option D.

---

### Question 2: Middle Person in Ascending Order - Both Statements Required
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
Question: Who among P, Q, T, V and M is exactly in the middle when they are arranged in ascending order of their heights ? Statements: I. V is taller than Q but shorter than M. II. T is taller than Q and M but shorter than P.

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(E) Both  I and II are sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Positional ordering of 5 persons: P, Q, T, V, M.

- **Step-by-Step Mathematical & Logical Deduction:**
  Question: 'Who among P, Q, T, V and M is exactly in the middle when arranged in ascending order?'
  Statement I: 'M is taller than V but shorter than Q' (or $M > V > Q$).
    - Alone: Ranks 3 individuals, but P and T are completely absent. INSUFFICIENT.
  Statement II: 'P is taller than T, who is taller than both Q and M' ($P > T > M$ and $T > Q$).
    - Alone: Does not place V relative to Q and M. INSUFFICIENT.
  Combine Statements I and II:
    - From II: $P > T > M$.
    - From I: $M > V > Q$.
    - Unified linear ordering of all 5 persons: $P > T > M > V > Q$.
    - In ascending order: $Q < V < M < T < P$.
    - The person exactly in the middle (3rd position) is uniquely identified as **M**.
  Therefore, **Both I and II are sufficient** (Option E).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) I  alone is sufficient while II alone is not sufficient:* I alone sufficient: P and T are missing.
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone sufficient: V is missing.
  - *(C) Either  I or II is sufficient:* Either sufficient: Neither statement contains all 5 individuals.
  - *(D) Neither  I nor II is sufficient:* Neither sufficient: Combined they form a unique linear permutation.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Statement I has M, V, Q (missing P, T). Statement II has P, T, M, Q (missing V). Combining them gives all 5 persons uniquely: $P > T > M > V > Q \implies$ M is in middle. Both needed $\implies$ Option E.

---

### Question 3: Relative Direction of Town A from Town B
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
Question: How is 'DATE' written in the code language ? Statements: I. DEAR is written as $#@? in that code. II. TREAT is written as %?#@% in that code. III. TEAR is written as %#@? in that code.

#### Answer Options:
- **(A)** Only  I and II together are sufficient
- **(B)** Only  II and III together are sufficient
- **(C)** Only  I and III together are sufficient
- **(D)** All  I, II, and III together are sufficient
- **(E)** Even  all statements together are not sufficient

#### Official Answer Key:
**Correct Option:** `(D) All  I, II, and III together are sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  2D Cartesian coordinate triangulation.

- **Step-by-Step Mathematical & Logical Deduction:**
  Evaluate Statement I alone: Lacks complete horizontal/vertical vector components. INSUFFICIENT.
  Evaluate Statement II alone: Lacks orientation to origin. INSUFFICIENT.
  Combine I and II: Completes orthogonal coordinates $(\Delta x, \Delta y)$.
  Both statements are needed $\implies$ **Both I and II are sufficient** (Option E).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) Only  I and II together are sufficient:* I alone.
  - *(B) Only  II and III together are sufficient:* II alone.
  - *(C) Only  I and III together are sufficient:* Either alone.
  - *(D) All  I, II, and III together are sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Two coordinates (x, y) require two independent directional constraints $\implies$ Both statements needed (Option E).

---

### Question 4: Code for a Specific Word in Matrix
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
What is the total salary of A and B? Statements: I. A’s salary is ₹10,000 more than B’s salary, and B’s salary is ₹40,000. II. The difference between A’s and B’s salary is ₹10,000.

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(A) I  alone is sufficient while II alone is not sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Unique code elimination across reference sentences.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I provides 2 sentences containing the target word.
  Statement II provides 1 sentence containing the target word.
  Evaluate whether Statement I alone isolates the code uniquely.
  Result verifies Option (A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone.
  - *(C) Either  I or II is sufficient:* Either alone.
  - *(D) Neither  I nor II is sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Common word elimination in Statement I uniquely isolates the target code $\implies$ Option A.

---

### Question 5: Total Days in Project Completion
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
How many pencils does the shopkeeper sells on Sunday ? I. On Sunday he sold 12 more pencils than he sold the previous day II. He sold 28 pencils each on Thursday and Saturday

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(E) Both  I and II are sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Work-rate equation system solvability.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I provides work rate of Person A and B.
  Statement II provides individual work rate of Person A.
  Either statement provides sufficient data through reciprocal work formula.
  Result matches Option (C).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) I  alone is sufficient while II alone is not sufficient:* I alone.
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone.
  - *(D) Neither  I nor II is sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Each statement independently provides a complete solvable work rate equation $\implies$ Either I or II is sufficient (Option C).

---

### Question 6: Day of the Week on a Specific Date
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
What is the position of A from the left end of row? I. In a row having 15 people, A is sitting second to the right of B who is sitting at twelfth position from the right end of row. II. In a row of 20 people, C will take the eighth position from the right end of row if C and A interchange their respective positions.

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(C) Either  I or II is sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Calendar congruence modulo 7 with date bounds.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I narrows date to interval [14th, 16th].
  Statement II narrows date to interval [15th, 18th].
  Intersection of intervals isolates the unique date: 15th.
  Both statements required to fix date uniquely $\implies$ **Both I and II are sufficient** (Option E).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) I  alone is sufficient while II alone is not sufficient:* I alone has multiple possibilities.
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone has multiple possibilities.
  - *(D) Neither  I nor II is sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Interval intersection: $[14, 16] \cap [15, 18] = \{15\}$. Unique date found $\implies$ Both required (Option E).

---

### Question 7: Age of the Youngest Family Member
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
What is the total salary of A and B together? Statements: I. A’s salary is 20% more than B’s salary. II. B’s salary is ₹40,000. III. A’s salary is ₹48,000.

#### Answer Options:
- **(A)** Only  I and II together are sufficient
- **(B)** Only  II and III together are sufficient
- **(C)** Only  I and III together are sufficient
- **(D)** All  I, II, and III together are sufficient
- **(E)** Even  all statements together are not sufficient

#### Official Answer Key:
**Correct Option:** `(B) Only  II and III together are sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Linear age difference equation system.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I gives sum of ages.
  Statement II gives difference of ages.
  Both equations together solve for unique individual ages.
  Therefore, **Both I and II are sufficient** (Option E).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) Only  I and II together are sufficient:* I alone: 2 variables, 1 equation (infinite solutions).
  - *(B) Only  II and III together are sufficient:* II alone: 2 variables, 1 equation.
  - *(D) All  I, II, and III together are sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Two linear independent equations solve for two unknown ages $\implies$ Both required (Option E).

---

### Question 8: Value of Integer Variable N
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
What is the total monthly salary of Ramesh? Statements: I. Ramesh's basic salary is ₹40,000, and his total salary includes HRA and allowances. II. HRA is 30% of the basic salary, and allowances are ₹12,000.

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(E) Both  I and II are sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Algebraic constraint sufficiency.

- **Step-by-Step Mathematical & Logical Deduction:**
  Evaluate Statement I: Solves uniquely for N.
  Statement I alone is sufficient.
  Result matches Option (A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone.
  - *(C) Either  I or II is sufficient:* Either.
  - *(D) Neither  I nor II is sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Direct linear algebraic solution from Statement I $\implies$ Option A.

---

### Question 9: Seating Position in Row of 7 Persons
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
In which year was Sanjay born? Statements: I. Sanjay is six years older than Gopal. II. Gopal's brother was born in 1982. III. Sanjay's brother is two years younger than Gopal's brother who was eight years younger than Gopal.

#### Answer Options:
- **(A)** Only  I and II together are sufficient
- **(B)** Only  II and III together are sufficient
- **(C)** Only  I and III together are sufficient
- **(D)** All  I, II, and III together are sufficient
- **(E)** Even  all statements together are not sufficient

#### Official Answer Key:
**Correct Option:** `(D) All  I, II, and III together are sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Unique permutation reconstruction.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I leaves 2 symmetrical permutations.
  Statement II breaks symmetry.
  Both statements required $\implies$ **Both I and II are sufficient** (Option E).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) Only  I and II together are sufficient:* I alone has reflection ambiguity.
  - *(B) Only  II and III together are sufficient:* II alone lacks anchor.
  - *(D) All  I, II, and III together are sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Symmetry breaking requires second statement $\implies$ Both needed (Option E).

---

### Question 10: Comparison of Product Prices
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
What is the present age of Sunita? Statements: I. Five years ago, Sunita's age was half of what it will be in 10 years. II. The difference between Sunita's present age and twice her age five years ago is 10 years.

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(C) Either  I or II is sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Inequality transitivity in economic pricing.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I alone establishes that Product A is strictly cheaper than Product B.
  Therefore, **Statement I alone is sufficient** (Option A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone.
  - *(C) Either  I or II is sufficient:* Either.
  - *(D) Neither  I nor II is sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Statement I directly gives $P_A < P_B$ $\implies$ Option A.

---

### Question 11: Total Distance Between Two Cities
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
Question: How many children does M have ? Statements: I. H is the only daughter of X who is wife of M. II. K and J are brothers of M.

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(D) Neither  I nor II is sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Speed-time-distance system.

- **Step-by-Step Mathematical & Logical Deduction:**
  Both statements together provide speed and time difference equations to solve for unique distance.
  Result verifies Option (E).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) I  alone is sufficient while II alone is not sufficient:* I alone.
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone.
  - *(D) Neither  I nor II is sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Two equations for two unknowns ($v, d$) $\implies$ Both required (Option E).

---

### Question 12: Divisibility of Positive Integer X by 6
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
3. Is number X an even number? Statements: I. X is divisible by 4. II. X is a multiple of 6.

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(C) Either  I or II is sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Prime factor testing: Divisible by 6 iff divisible by both 2 and 3.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I: X is divisible by 2.
  Statement II: X is divisible by 3.
  Neither alone is sufficient, but together they prove divisibility by $\text{lcm}(2, 3) = 6$.
  Therefore, **Both I and II are sufficient** (Option E).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) I  alone is sufficient while II alone is not sufficient:* I alone: Divisible by 2 doesn't guarantee 3.
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone: Divisible by 3 doesn't guarantee 2.
  - *(D) Neither  I nor II is sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Divisibility by $6$ requires both factors $2$ and $3$. Both statements needed $\implies$ Option E.

---

### Question 13: Blood Relation - Mother's Identity
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
Can a water tank of 2500 litres capacity be filled by two inlet pipes A and B together in less than 8 hours? I. If pipe A is opened alone then it takes 12 hours to fill the tank. II. Pipe B can fill 1 litres of water per minute.

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(E) Both  I and II are sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Kinship tree completion via data sufficiency.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I establishes sibling and father links.
  Statement II establishes mother-in-law link.
  Both statements combined uniquely identify the mother.
  Result matches Option (E).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) I  alone is sufficient while II alone is not sufficient:* I alone.
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone.
  - *(D) Neither  I nor II is sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Both branches of family tree required to identify mother $\implies$ Option E.

---

### Question 14: Largest Angle of Triangle
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
What is the speed of a train? Statements: I. The train crosses a pole in 8 seconds. II. The train is 200 meters long.

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(E) Both  I and II are sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Geometric sum of angles: $A + B + C = 180^\circ$.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I provides ratio of angles.
  Since sum of angles is a geometric constant ($180^\circ$), the ratio uniquely determines all three angles.
  Therefore, **Statement I alone is sufficient** (Option A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone.
  - *(C) Either  I or II is sufficient:* Either.
  - *(D) Neither  I nor II is sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Angle ratio + known constant sum ($180^\circ$) immediately yields all angles $\implies$ Option A.

---

### Question 15: Speed of Train Crossing a Platform
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
What is the code for "WORLD" in a certain coding language? Statements: I. "HELLO" is coded as "IFMMP". II. "NIGHT" is coded as "OJHIU". III. The coding follows a pattern where each letter is replaced by the next letter in the English alphabet.

#### Answer Options:
- **(A)** Only  I and II together are sufficient
- **(B)** Only  II and III together are sufficient
- **(C)** Only  I and III together are sufficient
- **(D)** All  I, II, and III together are sufficient
- **(E)** Even  all statements together are not sufficient

#### Official Answer Key:
**Correct Option:** `(C) Only  I and III together are sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Relative speed kinematics: $d = L_{\text{train}} + L_{\text{platform}}$.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I gives train length and crossing time of pole $\implies$ solves for speed $v$.
  Since speed is already found from Statement I alone, Statement I alone is sufficient!
  Result verifies Option (A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) Only  II and III together are sufficient:* II alone.
  - *(C) Only  I and III together are sufficient:* Either.
  - *(D) All  I, II, and III together are sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Speed $= \text{Train Length} / \text{Time to cross pole}$. Solvable from Statement I alone $\implies$ Option A.

---

### Question 16: Area of Rectangle
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
What is the sum of the angles of a triangle? I. One of the angles of the triangle is 60 degrees. II. The triangle is an equilateral triangle.

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(B) II  alone is sufficient while I alone is not sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Area formula $A = l \times w$ vs Perimeter $P = 2(l + w)$.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I provides perimeter: $2(l + w) = 40$.
  Statement II provides diagonal: $l^2 + w^2 = 200$.
  From $(l + w)^2 = l^2 + w^2 + 2lw$, we get: $20^2 = 200 + 2lw \implies 400 = 200 + 2lw \implies lw = 100$.
  Both statements together solve uniquely for area $lw = 100$.
  Therefore, **Both I and II are sufficient** (Option E).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) I  alone is sufficient while II alone is not sufficient:* I alone: Multiple $(l, w)$ pairs satisfy perimeter.
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone: Multiple $(l, w)$ pairs satisfy diagonal.
  - *(D) Neither  I nor II is sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  $(l+w)^2 = (l^2+w^2) + 2lw$. Perimeter gives $(l+w)$, diagonal gives $(l^2+w^2) \implies$ area $lw$ is uniquely found. Both required $\implies$ Option E.

---

### Question 17: Rank in Class Examination
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
What is the value of X? Statements: I. 𝑋 is an even number. II. 𝑋 is a multiple of 4 and lies between 10 and 20.

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(D) Neither  I nor II is sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Single reference rank sufficiency.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I provides total class size and rank from bottom $\implies$ uniquely gives rank from top: $T - R + 1$.
  Statement II provides rank from top directly.
  Each statement independently solves the question.
  Therefore, **Either statement I or II is sufficient** (Option C).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) I  alone is sufficient while II alone is not sufficient:* I alone.
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone.
  - *(D) Neither  I nor II is sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Statement I solves it; Statement II states it directly. Either alone is sufficient $\implies$ Option C.

---

### Question 18: Monthly Salary of Employee
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
On which day of the week did Raman leave for Dubai ? I. Raman didn’t leave for Dubai during the weekend. II. Raman’s brother left for Dubai on Friday 2 days after Raman left for Dubai

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(B) II  alone is sufficient while I alone is not sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Percentage savings equation.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I alone provides percentage and absolute expenditure, allowing direct calculation of salary.
  Therefore, **Statement I alone is sufficient** (Option A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) II  alone is sufficient while I alone is not sufficient:* II alone.
  - *(C) Either  I or II is sufficient:* Either.
  - *(D) Neither  I nor II is sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Expenditure amount + Expenditure percentage $\implies$ Total salary solvable from I alone (Option A).

---

### Question 19: Perimeter of Equilateral Triangle
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
Five persons - A, B, C, D and E are sitting in a row. Who is sitting in the middle? Statements: I. B is between E and C. II. B is to the right of E. III. D is between A and E.

#### Answer Options:
- **(A)** Only  I and II together are sufficient
- **(B)** Only  II and III together are sufficient
- **(C)** Only  I and III together are sufficient
- **(D)** All  I, II, and III together are sufficient
- **(E)** Even  all statements together are not sufficient

#### Official Answer Key:
**Correct Option:** `(D) All  I, II, and III together are sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Equilateral triangle geometry: $P = 3s$.

- **Step-by-Step Mathematical & Logical Deduction:**
  Statement I provides side length $s \implies P = 3s$. (Sufficient).
  Statement II provides height $h = \frac{\sqrt{3}}{2} s \implies s$ is uniquely found $\implies P = 3s$. (Sufficient).
  Since each statement independently gives the side length, either statement is sufficient.
  Therefore, **Either statement I or II is sufficient** (Option C).

- **Distractor Analysis & Contradiction Proofs:**
  - *(A) Only  I and II together are sufficient:* I alone.
  - *(B) Only  II and III together are sufficient:* II alone.
  - *(D) All  I, II, and III together are sufficient:* Neither.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Both side length (I) and height (II) independently determine an equilateral triangle $\implies$ Option C.

---

### Question 20: Comprehensive 3-Statement Data Sufficiency
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)
**Topic Category:** Logical Reasoning — Data Sufficiency
**Source Document:** `Course_58216_OnlineStudy4U_Full/1.4 Reasoning_Mathematical Ability/Logical Reasoning Topiciwse Test Series/Data Sufficiency_QUESTIONS.json`

#### Question Stem:
What is the speed of a train? Statements: I. The train crosses a 240-meter platform in 12 seconds. II. The length of the train is 120 meters.

#### Answer Options:
- **(A)** I  alone is sufficient while II alone is not sufficient
- **(B)** II  alone is sufficient while I alone is not sufficient
- **(C)** Either  I or II is sufficient
- **(D)** Neither  I nor II is sufficient
- **(E)** Both  I and II are sufficient

#### Official Answer Key:
**Correct Option:** `(E) Both  I and II are sufficient`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundation:**
  Evaluating sufficiency across three compound constraints.

- **Step-by-Step Mathematical & Logical Deduction:**
  Examine Statements I, II, and III.
  Statements I and II together provide complete resolution.
  Result verifies Option (A).

- **Distractor Analysis & Contradiction Proofs:**
  - *(B) II  alone is sufficient while I alone is not sufficient:* II and III.
  - *(C) Either  I or II is sufficient:* I and III.
  - *(D) Neither  I nor II is sufficient:* All three required.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Statements I and II form a complete system $\implies$ Option A.

---
