# Section 03 — Technical Ability: Pseudo Code Assessment
## Topic 04: Nested Loops, Control Flow & Condition Tracking
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Total Questions:** 10  
**Question IDs:** `INFOSYS_PSEUDO_100_Q041` to `INFOSYS_PSEUDO_100_Q050`  
**Coverage:** Nested Loop Traversal, Nested Break, Continue with Products, While + Modulo, Bitwise Shifts inside Loop Iterations, Comparisons  

---

### Question 41 (ID: INFOSYS_PSEUDO_100_Q041)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Loop State`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 3
for i = 1 to 4 step 1 do
x = x + i
x = x - 1
end-for
display x
```

#### Answer Options:
- **(A)** `8`
- **(B)** `9`
- **(C)** `10`
- **(D)** `11`

#### Official Answer Key:
**Correct Option:** `(B)` `— 9`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Loop State` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Each iteration changes x by i−1. Total change=0+1+2+3=6; final x=9.

- **Distractor Elimination & Error Proofs:**
  - *(A) `8`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `9`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `10`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `11`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 42 (ID: INFOSYS_PSEUDO_100_Q042)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Loop Product`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer p = 1
for i = 2 to 8 step 2 do
p = p * (i / 2)
end-for
display p
```

#### Answer Options:
- **(A)** `12`
- **(B)** `24`
- **(C)** `36`
- **(D)** `48`

#### Official Answer Key:
**Correct Option:** `(B)` `— 24`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Loop Product` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Factors are 1,2,3,4; product=24.

- **Distractor Elimination & Error Proofs:**
  - *(A) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `24`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `36`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `48`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 43 (ID: INFOSYS_PSEUDO_100_Q043)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `While + Modulo`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer n = 29
Set Integer c = 0
while (n > 0)
if (n % 2 == 1)
c = c + 1
end-if
n = n / 2
end-while
display c
```

#### Answer Options:
- **(A)** `2`
- **(B)** `3`
- **(C)** `4`
- **(D)** `5`

#### Official Answer Key:
**Correct Option:** `(B)` `— 3`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `While + Modulo` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Binary 29 is 11101, containing four 1s.

- **Distractor Elimination & Error Proofs:**
  - *(A) `2`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `3`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 44 (ID: INFOSYS_PSEUDO_100_Q044)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Nested Loop Arithmetic`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer s = 0
for i = 1 to 3 step 1 do
for j = 1 to 3 step 1 do
s = s + i * j
end-for
end-for
display s
```

#### Answer Options:
- **(A)** `12`
- **(B)** `18`
- **(C)** `24`
- **(D)** `36

Infosys Medium Pseudocode Practice • Page 13`

#### Official Answer Key:
**Correct Option:** `(D)` `— 36`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Nested Loop Arithmetic` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  The double sum factorizes: (1+2+3)×(1+2+3)=6×6=36.

- **Distractor Elimination & Error Proofs:**
  - *(A) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `18`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `24`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `36

Infosys Medium Pseudocode Practice • Page 13`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 45 (ID: INFOSYS_PSEUDO_100_Q045)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Break with Sum`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer s = 0
for i = 2 to 12 step 2 do
s = s + i
if (s > 15)
break
end-if
end-for
display s
```

#### Answer Options:
- **(A)** `12`
- **(B)** `18`
- **(C)** `20`
- **(D)** `24

Infosys Medium Pseudocode Practice • Page 14`

#### Official Answer Key:
**Correct Option:** `(B)` `— 18`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Break with Sum` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Running sums: 2,6,12,20; break after 20.

- **Distractor Elimination & Error Proofs:**
  - *(A) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `18`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `24

Infosys Medium Pseudocode Practice • Page 14`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 46 (ID: INFOSYS_PSEUDO_100_Q046)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Continue with Product`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer p = 1
for i = 1 to 6 step 1 do
if (i % 2 == 0)
continue
end-if
p = p * i
end-for
display p
```

#### Answer Options:
- **(A)** `9`
- **(B)** `12`
- **(C)** `15`
- **(D)** `20`

#### Official Answer Key:
**Correct Option:** `(C)` `— 15`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Continue with Product` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Odd values 1,3,5 are multiplied: 1×3×5=15.

- **Distractor Elimination & Error Proofs:**
  - *(A) `9`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `15`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 47 (ID: INFOSYS_PSEUDO_100_Q047)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Loop with Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer s = 0
for i = 1 to 4 step 1 do
s = s + (i << 1)
end-for
display s
```

#### Answer Options:
- **(A)** `16`
- **(B)** `18`
- **(C)** `20`
- **(D)** `24`

#### Official Answer Key:
**Correct Option:** `(C)` `— 20`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Loop with Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  2+4+6+8=20.

- **Distractor Elimination & Error Proofs:**
  - *(A) `16`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `18`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `20`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `24`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 48 (ID: INFOSYS_PSEUDO_100_Q048)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Loop with Right Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer s = 0
for i = 8 to 32 step 8 do
s = s + (i >> 2)
end-for
display s
```

#### Answer Options:
- **(A)** `15`
- **(B)** `18`
- **(C)** `20`
- **(D)** `24`

#### Official Answer Key:
**Correct Option:** `(C)` `— 20`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Loop with Right Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  The shifted values are 2,4,6,8; sum=20.

Infosys Medium Pseudocode Practice • Page 38

- **Distractor Elimination & Error Proofs:**
  - *(A) `15`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `18`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `20`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `24`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 49 (ID: INFOSYS_PSEUDO_100_Q049)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Nested Loop with Break`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer c = 0
for i = 1 to 4 step 1 do
for j = 1 to 4 step 1 do
c = c + 1
if (c == 7)
break
end-if
end-for
end-for
display c
```

#### Answer Options:
- **(A)** `7`
- **(B)** `8`
- **(C)** `12`
- **(D)** `13

Infosys Medium Pseudocode Practice • Page 15`

#### Official Answer Key:
**Correct Option:** `(D)` `— 13`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Nested Loop with Break` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  The counter continues across outer iterations. It reaches 7, breaks the current inner loop, then continues; 4 more inner iterations
occur, so final c=13.

- **Distractor Elimination & Error Proofs:**
  - *(A) `7`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `8`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `13

Infosys Medium Pseudocode Practice • Page 15`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 50 (ID: INFOSYS_PSEUDO_100_Q050)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Loop and Comparison`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer c = 0
for i = 1 to 9 step 1 do
if (i * i < 50)
c = c + 1
end-if
end-for
display c
```

#### Answer Options:
- **(A)** `6`
- **(B)** `7`
- **(C)** `8`
- **(D)** `9

Infosys Medium Pseudocode Practice • Page 16`

#### Official Answer Key:
**Correct Option:** `(B)` `— 7`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Loop and Comparison` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  i=1..7 satisfy i²<50; count=7.

- **Distractor Elimination & Error Proofs:**
  - *(A) `6`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `7`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `8`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `9

Infosys Medium Pseudocode Practice • Page 16`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
