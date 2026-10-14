# Section 03 — Technical Ability: Pseudo Code Assessment
## Topic 01: Operators, Arithmetic & Precedence Foundations
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Total Questions:** 14  
**Question IDs:** `INFOSYS_PSEUDO_100_Q001` to `INFOSYS_PSEUDO_100_Q014`  
**Coverage:** Operator Precedence, Mixed Arithmetic, Logical Operators, Bitwise XOR/AND/OR, Pre/Post Increment, Decrement, Relational Logic, Ternary Expressions, Compound Assignment  

---

### Question 1 (ID: INFOSYS_PSEUDO_100_Q001)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Operator Precedence`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 18
Set Integer b = 5
Set Integer c = 2
display a - b * c + 6
```

#### Answer Options:
- **(A)** `10`
- **(B)** `14`
- **(C)** `16`
- **(D)** `19`

#### Official Answer Key:
**Correct Option:** `(B)` `— 14`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Operator Precedence` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Multiplication first: 18 − (5×2) + 6 = 14.

- **Distractor Elimination & Error Proofs:**
  - *(A) `10`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `14`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `16`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `19`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 2 (ID: INFOSYS_PSEUDO_100_Q002)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Mixed Arithmetic`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 24
Set Integer y = 7
display (x / y) * y + (x % y)
```

#### Answer Options:
- **(A)** `21`
- **(B)** `24`
- **(C)** `25`
- **(D)** `28`

#### Official Answer Key:
**Correct Option:** `(B)` `— 24`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Mixed Arithmetic` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  24/7=3 and 24%7=3; 3×7+3 = 24.

- **Distractor Elimination & Error Proofs:**
  - *(A) `21`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `24`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `25`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `28`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 3 (ID: INFOSYS_PSEUDO_100_Q003)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Logical Operators`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 12
Set Integer b = 7
Set Integer c = 5
display (a > b) and ((b - c) == 2)
```

#### Answer Options:
- **(A)** `true`
- **(B)** `false`
- **(C)** `2`
- **(D)** `12`

#### Official Answer Key:
**Correct Option:** `(A)` `— true`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Logical Operators` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  12>7 is true and 7−5=2 is true, so the result is true.

- **Distractor Elimination & Error Proofs:**
  - *(A) `true`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(B) `false`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `2`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 4 (ID: INFOSYS_PSEUDO_100_Q004)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Logical Operators`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 9
display (x % 2 == 0) or ((x > 5) and (x < 10))
```

#### Answer Options:
- **(A)** `true`
- **(B)** `false`
- **(C)** `9`
- **(D)** `0`

#### Official Answer Key:
**Correct Option:** `(A)` `— true`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Logical Operators` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  First condition is false, but 9>5 and 9<10 are both true.

- **Distractor Elimination & Error Proofs:**
  - *(A) `true`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(B) `false`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `9`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `0`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 5 (ID: INFOSYS_PSEUDO_100_Q005)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Bitwise XOR`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 15
Set Integer b = 9
Set Integer c = 6
display (a ^ b) + c
```

#### Answer Options:
- **(A)** `8`
- **(B)** `10`
- **(C)** `12`
- **(D)** `14

Infosys Medium Pseudocode Practice • Page 3`

#### Official Answer Key:
**Correct Option:** `(C)` `— 12`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Bitwise XOR` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  15^9 = 6; 6+6 = 12.

- **Distractor Elimination & Error Proofs:**
  - *(A) `8`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `10`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `12`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `14

Infosys Medium Pseudocode Practice • Page 3`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 6 (ID: INFOSYS_PSEUDO_100_Q006)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Bitwise AND`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 27
Set Integer b = 14
display (a & b) + (a % b)
```

#### Answer Options:
- **(A)** `19`
- **(B)** `21`
- **(C)** `23`
- **(D)** `25`

#### Official Answer Key:
**Correct Option:** `(C)` `— 23`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Bitwise AND` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  27&14 = 10 and 27%14 = 13; total = 23.

- **Distractor Elimination & Error Proofs:**
  - *(A) `19`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `21`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `23`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `25`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 7 (ID: INFOSYS_PSEUDO_100_Q007)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Bitwise OR`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 18
Set Integer b = 11
display (a | b) - (a & b)
```

#### Answer Options:
- **(A)** `21`
- **(B)** `23`
- **(C)** `25`
- **(D)** `27`

#### Official Answer Key:
**Correct Option:** `(C)` `— 25`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Bitwise OR` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  18|11=27 and 18&11=2; 27−2=25.

- **Distractor Elimination & Error Proofs:**
  - *(A) `21`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `23`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `25`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `27`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 8 (ID: INFOSYS_PSEUDO_100_Q008)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `XOR + AND`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 13
Set Integer b = 7
display (a ^ b) + (a & b)
```

#### Answer Options:
- **(A)** `13`
- **(B)** `15`
- **(C)** `17`
- **(D)** `19`

#### Official Answer Key:
**Correct Option:** `(B)` `— 15`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `XOR + AND` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  13^7=10 and 13&7=5; total = 15.

Infosys Medium Pseudocode Practice • Page 33

- **Distractor Elimination & Error Proofs:**
  - *(A) `13`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `15`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `17`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `19`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 9 (ID: INFOSYS_PSEUDO_100_Q009)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Pre/Post Increment`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 4
Set Integer y = x++ + ++x
Set Integer z = y + x
display z
```

#### Answer Options:
- **(A)** `14`
- **(B)** `15`
- **(C)** `16`
- **(D)** `17`

#### Official Answer Key:
**Correct Option:** `(C)` `— 16`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Pre/Post Increment` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  x++ contributes 4 and makes x=5; ++x makes x=6 and contributes 6. y=10; z=10+6=16.

- **Distractor Elimination & Error Proofs:**
  - *(A) `14`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `15`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `16`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `17`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 10 (ID: INFOSYS_PSEUDO_100_Q010)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Post/Pre Decrement`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 10
Set Integer y = --x
Set Integer z = y + x--
display z
```

#### Answer Options:
- **(A)** `16`
- **(B)** `17`
- **(C)** `18`
- **(D)** `19

Infosys Medium Pseudocode Practice • Page 4`

#### Official Answer Key:
**Correct Option:** `(C)` `— 18`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Post/Pre Decrement` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  --x makes x=9, y=9; x-- contributes 9, then x becomes 8. z=18.

- **Distractor Elimination & Error Proofs:**
  - *(A) `16`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `17`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `18`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `19

Infosys Medium Pseudocode Practice • Page 4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 11 (ID: INFOSYS_PSEUDO_100_Q011)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Relational Logic`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer p = 8
Set Integer q = 12
display (p + q > 20) and (q - p == 4)
```

#### Answer Options:
- **(A)** `true`
- **(B)** `false`
- **(C)** `4`
- **(D)** `20`

#### Official Answer Key:
**Correct Option:** `(B)` `— false`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Relational Logic` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  p+q=20, so 20>20 is false. The second condition is true; false AND true = false.

- **Distractor Elimination & Error Proofs:**
  - *(A) `true`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `false`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 12 (ID: INFOSYS_PSEUDO_100_Q012)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Ternary Logic`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 14
Set Integer b = 9
Set Integer m = (a % 2 == 0) ? a/2 : b*2
display m + b
```

#### Answer Options:
- **(A)** `14`
- **(B)** `16`
- **(C)** `18`
- **(D)** `21`

#### Official Answer Key:
**Correct Option:** `(B)` `— 16`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Ternary Logic` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  a is even, so m=7; 7+9=16.

- **Distractor Elimination & Error Proofs:**
  - *(A) `14`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `16`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `18`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `21`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 13 (ID: INFOSYS_PSEUDO_100_Q013)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Compound Assignment`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 7
x = x * 3 - 4
x = x + (x % 5)
display x
```

#### Answer Options:
- **(A)** `18`
- **(B)** `19`
- **(C)** `20`
- **(D)** `21`

#### Official Answer Key:
**Correct Option:** `(B)` `— 19`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Compound Assignment` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  7×3−4=17; 17%5=2; final x=19.

- **Distractor Elimination & Error Proofs:**
  - *(A) `18`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `19`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `21`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 14 (ID: INFOSYS_PSEUDO_100_Q014)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Mixed Operators`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 20
Set Integer b = 6
display (a / b) + (a % b) * 2
```

#### Answer Options:
- **(A)** `5`
- **(B)** `7`
- **(C)** `9`
- **(D)** `11`

#### Official Answer Key:
**Correct Option:** `(B)` `— 7`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Mixed Operators` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  20/6=3; 20%6=2; 3+2×2=7.

- **Distractor Elimination & Error Proofs:**
  - *(A) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `7`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `9`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `11`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
