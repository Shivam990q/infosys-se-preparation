# Topic 04: Truth, Lie Logic and Classic Brain Teasers

## Section VI — Infosys System Engineer Examination Compendium

This compendium covers advanced logical deduction, truth-teller/liar statements, water jug state-space transitions, and scale weighing optimization problems.

---

### Question 19: Balbir Butcher Shop Dog Theft (Truth and Lie Logic)

**ID:** `SEC06_LOGIC_Q02` | **Topic:** Truth, Lie & Classic Brain Teasers

![Diagram](file:///C:/Users/Rose/.gemini/antigravity-ide/brain/c94c898d-a265-48e6-96c4-82b81795f2d9/preparation/Course_844567_Full/2. Infosys System Eng Prep- Apti + Pseudo/Section VI_ Puzzle Solving/EXTRACTED_STRUCTURED_QUESTIONS/images/number_puzzles_ebook_page_25.png)

**Problem Statement:**
While Balbir had his back turned, a dog ran into his butcher shop, snatched a piece of meat off the counter and ran off. Balbir was mad when he realised what had happened. He asked three other shopkeepers, who had seen the dog, to describe it. The shopkeepers really didn't want to help Balbir. So each of them made a statement which contained exactly one truth and one lie:

- Shopkeeper 1 said: 'The dog had black hair and a long tail.'
- Shopkeeper 2 said: 'The dog had a short tail and wore a collar.'
- Shopkeeper 3 said: 'The dog had white hair and no collar.'

Based on the above statements, which of the following could be a correct description?

**Options:**
- A. The dog had black hair, long tail and a collar.
- B. The dog had white hair, short tail and no collar.
- C. The dog had black hair, long tail and no collar.
- D. The dog had white hair, long tail and a collar.

**Correct Answer:** `D. The dog had white hair, long tail and a collar.`

**Step-by-Step Mathematical Solution:**
Logical Deduction Framework:
The dog has 3 binary independent attributes:
1. Hair: Black (B) vs White (W)
2. Tail: Long (L) vs Short (S)
3. Collar: Collar (C) vs No Collar (NC)

Each shopkeeper makes 1 True and 1 False statement (T + F):
- S1: [Black (B), Long (L)]
- S2: [Short (S), Collar (C)]
- S3: [White (W), No Collar (NC)]

Case Testing on Hair Color:
Case 1: Assume Dog has Black hair (B = True, W = False):
- In S1, B is True => 'Long tail' (L) must be False => Dog has Short tail (S = True).
- In S2, since S is True, 'Collar' (C) must be False => Dog has No Collar (NC = True).
- In S3, Hair is White is False, and 'No Collar' is True. S3 has 1 False and 1 True. Consistent so far.
- But if Dog has [Black hair, Short tail, No collar], let's check the options:
  Options available: A (Black, Long, Collar), B (White, Short, No Collar), C (Black, Long, No Collar), D (White, Long, Collar).
  [Black hair, Short tail, No collar] is NOT among the options!

Case 2: Assume Dog has White hair (W = True, B = False):
- In S1, 'Black hair' is False => 'Long tail' (L) MUST be True!
- In S2, since 'Long tail' is True, 'Short tail' is False => 'Wore a collar' (C) MUST be True!
- In S3, 'White hair' is True => 'No collar' MUST be False => Dog wore a collar (C = True), perfectly matching S2's conclusion!

Conclusion of Case 2:
- Hair = White
- Tail = Long
- Collar = Yes (wore a collar)

Verification against all statements:
- S1: Black (False) + Long (True) => Exactly 1 T, 1 F [Valid]
- S2: Short (False) + Collar (True) => Exactly 1 T, 1 F [Valid]
- S3: White (True) + No Collar (False) => Exactly 1 T, 1 F [Valid]

Matching Option:
Option D: 'The dog had white hair, long tail and a collar.'

Hence, Option D is 100% mathematically proven.

---

### Question 20: The 3 Jug Water Riddle (12L, 8L, 5L State Transition)

**ID:** `SEC06_LOGIC_Q03` | **Topic:** Truth, Lie & Classic Brain Teasers

![Diagram](file:///C:/Users/Rose/.gemini/antigravity-ide/brain/c94c898d-a265-48e6-96c4-82b81795f2d9/preparation/Course_844567_Full/2. Infosys System Eng Prep- Apti + Pseudo/Section VI_ Puzzle Solving/EXTRACTED_STRUCTURED_QUESTIONS/images/number_puzzles_ebook_page_26.png)

**Problem Statement:**
A milkman carries a full 12-liter container of milk. He needs to deliver exactly 6 liters to a customer who only has an 8-liter container and a 5-liter container. Neither container has any measurement markings. Can he measure exactly 6 liters without spilling or wasting any milk, and what is the minimum sequence of pours?

**Options:**
- A. Impossible without a 6-liter measuring vessel
- B. Possible in 7 pours: [12, 0, 0] -> [6, 6, 0]
- C. Possible in 9 pours: [12, 0, 0] -> [6, 1, 5]
- D. Possible in 5 pours

**Correct Answer:** `B. Possible in 7 pours: [12, 0, 0] -> [6, 6, 0]`

**Step-by-Step Mathematical Solution:**
State-Space Representation:
Let the state be denoted as a tuple (J12, J8, J5) representing the milk in the 12L, 8L, and 5L containers respectively. Total milk is invariant: J12 + J8 + J5 = 12.
Initial State: (12, 0, 0)
Target State: (6, 6, 0) or any state containing 6 liters.

Optimal 7-Pour Transition Sequence:
1. Initial: (12, 0, 0)
2. Pour 1 (12L -> 8L): Pour 8L into the 8L container.
   State: (4, 8, 0)
3. Pour 2 (8L -> 5L): Pour 5L from 8L into 5L container.
   State: (4, 3, 5)
4. Pour 3 (5L -> 12L): Pour the entire 5L back into the 12L container.
   State: (9, 3, 0)
5. Pour 4 (8L -> 5L): Pour the remaining 3L from 8L into the 5L container.
   State: (9, 0, 3)
6. Pour 5 (12L -> 8L): Fill the 8L container from the 12L container (pouring 8L).
   State: (1, 8, 3)
7. Pour 6 (8L -> 5L): Top off the 5L container from the 8L container (pouring 5 - 3 = 2L).
   State: (1, 6, 5)
   Notice: The 8L container now has EXACTLY 6 LITERS!
8. Pour 7 (5L -> 12L): Pour the 5L back into the 12L container.
   Final State: (6, 6, 0)

Both the 12L container and the 8L container now hold exactly 6 liters of milk!
Zero milk was wasted, completed in 7 discrete pour operations.

Hence, Option B is correct.

---

### Question 21: The 8 Balls Balance Scale Puzzle

**ID:** `SEC06_LOGIC_Q04` | **Topic:** Truth, Lie & Classic Brain Teasers

![Diagram](file:///C:/Users/Rose/.gemini/antigravity-ide/brain/c94c898d-a265-48e6-96c4-82b81795f2d9/preparation/Course_844567_Full/2. Infosys System Eng Prep- Apti + Pseudo/Section VI_ Puzzle Solving/EXTRACTED_STRUCTURED_QUESTIONS/images/number_puzzles_ebook_page_27.png)

**Problem Statement:**
You have a two-pan balance weighing scale and 8 identical-looking balls. Except for one defective ball which is slightly heavier than the others, all other 7 balls have identical weights. What is the minimum number of weighings required on the balance scale to guarantee finding the defective ball in all cases?

**Options:**
- A. 1
- B. 2
- C. 3
- D. 4

**Correct Answer:** `B. 2`

**Step-by-Step Mathematical Solution:**
Information-Theoretic Lower Bound:
A two-pan balance scale gives 3 possible outcomes per weighing: Left Pan Heavier, Right Pan Heavier, or Both Pans Equal (Ternary outcome, base 3). With k weighings, the maximum number of distinguishable states is 3^k.
For 8 candidates:
- 3¹ = 3 < 8 (1 weighing is insufficient).
- 3² = 9 >= 8 (2 weighings can theoretically isolate 1 among up to 9 items).

Optimal Ternary Partition Strategy (3-3-2 Split):
- Weighing 1: Divide the 8 balls into three groups: Group A (3 balls), Group B (3 balls), Group C (2 balls). Place Group A on the left pan and Group B on the right pan.
  - Case 1 (Scale Balances: A == B):
    The defective heavier ball is in Group C (2 balls remaining).
    - Weighing 2: Place 1 ball of Group C on the left pan and the other ball on the right pan. The heavier side immediately identifies the defective ball!
  - Case 2 (Scale Tilts: e.g., Group A is heavier than Group B):
    The defective ball is in Group A (3 balls remaining).
    - Weighing 2: From Group A's 3 balls, pick any 2 balls and place 1 on each pan.
      - If the scale tilts, the heavier pan holds the defective ball.
      - If the scale balances, the unchosen third ball is the defective ball!

Under all branch possibilities, the defective ball is identified in AT MOST 2 WEIGHINGS.

Hence, the minimum number of weight checks required is 2 (Option B).

---

