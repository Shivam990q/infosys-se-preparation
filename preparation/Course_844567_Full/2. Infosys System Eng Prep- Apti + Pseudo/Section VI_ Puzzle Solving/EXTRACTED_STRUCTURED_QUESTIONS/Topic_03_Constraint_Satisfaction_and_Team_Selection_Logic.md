# Topic 03: Constraint Satisfaction and Team Selection Logic

## Section VI — Infosys System Engineer Examination Compendium

This compendium covers analytical team selection and condition matching puzzles under strict combinatorial constraints (gender quotas, co-requisites, and mutual exclusions).

---

### Question 18: Team Selection Constraint Satisfaction Puzzle

**ID:** `SEC06_LOGIC_Q01` | **Topic:** Constraint Satisfaction & Team Selection Logic

![Diagram](file:///C:/Users/Rose/.gemini/antigravity-ide/brain/c94c898d-a265-48e6-96c4-82b81795f2d9/preparation/Course_844567_Full/2. Infosys System Eng Prep- Apti + Pseudo/Section VI_ Puzzle Solving/EXTRACTED_STRUCTURED_QUESTIONS/images/number_puzzles_ebook_page_24.png)

**Problem Statement:**
A team of four players are to be selected from among four girls A, B, C, D and four boys P, Q, R, S such that there would be at least two girls in the team and the team selection should meet the following conditions:
  i. B cannot go with R
  ii. D and P must go together
  iii. S cannot be put up with A
  iv. R and C must be together

Which of the following is an acceptable team?

**Options:**
- A. QBSC
- B. DAPQ
- C. RCQS
- D. BPRA

**Correct Answer:** `B. DAPQ`

**Step-by-Step Mathematical Solution:**
Condition Analysis:
1. Eligibility pool: Girls = {A, B, C, D}, Boys = {P, Q, R, S}.
2. Team size: Exactly 4 players, containing AT LEAST 2 girls.
3. Rule i: B and R cannot both be present (¬(B ∧ R)).
4. Rule ii: D and P must be selected together (D ↔ P).
5. Rule iii: S cannot be selected with A (¬(S ∧ A)).
6. Rule iv: R and C must be selected together (R ↔ C).

Option Evaluation:
- Option A (QBSC): Girls = {B, C} (2 girls), Boys = {Q, S}. C is present, but R is absent! Violates Rule iv (R and C must be together). [REJECTED]
- Option B (DAPQ): Girls = {D, A} (2 girls >= 2). Boys = {P, Q}. D and P are together (satisfies Rule ii). Neither B nor R is present (satisfies Rule i). S is not present with A (satisfies Rule iii). Neither R nor C is present (satisfies Rule iv). All conditions satisfied! [CORRECT]
- Option C (RCQS): Girls = {C} (Only 1 girl!). Violates the requirement of having at least two girls. [REJECTED]
- Option D (BPRA): Contains both B and R. Violates Rule i (B cannot go with R). Also contains P without D, violating Rule ii. [REJECTED]

Hence, the only valid team selection is DAPQ (Option B).

---

