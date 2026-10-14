# Section 03 — Technical Ability: Pseudo Code Assessment
## Topic 05: Arrays, In-Place Transformations & Indexing
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Total Questions:** 15  
**Question IDs:** `INFOSYS_PSEUDO_100_Q051` to `INFOSYS_PSEUDO_100_Q065`  
**Coverage:** Array Index Calculations, Array Maxima, Pair Sums, In-Place Reversal, Running Sums, Nested Array Indexing, Shifts & Circular Rotations, Array Bitwise XOR  

---

### Question 51 (ID: INFOSYS_PSEUDO_100_Q051)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Index Calculation`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [4, 7, 2, 9, 5]
display a[a[2]] + a[1]
```

#### Answer Options:
- **(A)** `7`
- **(B)** `9`
- **(C)** `11`
- **(D)** `13`

#### Official Answer Key:
**Correct Option:** `(B)` `— 9`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Index Calculation` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  a[2]=2, so a[a[2]]=a[2]=2; 2+7=9.

- **Distractor Elimination & Error Proofs:**
  - *(A) `7`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `9`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `11`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `13`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 52 (ID: INFOSYS_PSEUDO_100_Q052)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Transformation`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [3, 5, 7, 9]
for i = 0 to 3 step 1 do
a[i] = a[i] + i
end-for
display a[3] - a[1]
```

#### Answer Options:
- **(A)** `3`
- **(B)** `4`
- **(C)** `5`
- **(D)** `6`

#### Official Answer Key:
**Correct Option:** `(D)` `— 6`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Transformation` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  After updates, a=[3,6,9,12]; 12−6=6.

- **Distractor Elimination & Error Proofs:**
  - *(A) `3`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `6`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 53 (ID: INFOSYS_PSEUDO_100_Q053)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Maximum`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [8, 3, 15, 6, 11]
Set Integer m = a[0]
for i = 1 to 4 step 1 do
if (a[i] > m)
m = a[i]
end-if
end-for
display m % 4
```

#### Answer Options:
- **(A)** `1`
- **(B)** `2`
- **(C)** `3`
- **(D)** `4`

#### Official Answer Key:
**Correct Option:** `(C)` `— 3`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Maximum` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Maximum is 15; 15%4=3.

- **Distractor Elimination & Error Proofs:**
  - *(A) `1`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `2`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `3`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 54 (ID: INFOSYS_PSEUDO_100_Q054)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Pair Sum`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [2, 5, 8, 11]
Set Integer s = 0
for i = 0 to 2 step 1 do
s = s + a[i] + a[i+1]
end-for
display s
```

#### Answer Options:
- **(A)** `36`
- **(B)** `39`
- **(C)** `42`
- **(D)** `45

Infosys Medium Pseudocode Practice • Page 17`

#### Official Answer Key:
**Correct Option:** `(B)` `— 39`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Pair Sum` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Pairs: 7+13+19=39.

- **Distractor Elimination & Error Proofs:**
  - *(A) `36`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `39`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `42`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `45

Infosys Medium Pseudocode Practice • Page 17`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 55 (ID: INFOSYS_PSEUDO_100_Q055)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Conditional Update`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [4, 7, 10, 13]
for i = 0 to 3 step 1 do
if (a[i] % 2 == 0)
a[i] = a[i] / 2
else
a[i] = a[i] + 1
end-if
end-for
display a[0] + a[1] + a[2] + a[3]
```

#### Answer Options:
- **(A)** `25`
- **(B)** `27`
- **(C)** `29`
- **(D)** `31

Infosys Medium Pseudocode Practice • Page 18`

#### Official Answer Key:
**Correct Option:** `(C)` `— 29`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Conditional Update` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Array becomes [2,8,5,14]; sum=29.

- **Distractor Elimination & Error Proofs:**
  - *(A) `25`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `27`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `29`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `31

Infosys Medium Pseudocode Practice • Page 18`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 56 (ID: INFOSYS_PSEUDO_100_Q056)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Reverse`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [3, 6, 9, 12, 15]
display a[4] - a[0] + a[3] - a[1]
```

#### Answer Options:
- **(A)** `12`
- **(B)** `15`
- **(C)** `18`
- **(D)** `21`

#### Official Answer Key:
**Correct Option:** `(C)` `— 18`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Reverse` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  15−3+12−6=18.

Infosys Medium Pseudocode Practice • Page 39

- **Distractor Elimination & Error Proofs:**
  - *(A) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `15`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `18`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `21`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 57 (ID: INFOSYS_PSEUDO_100_Q057)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Count`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [5, 10, 15, 20, 25]
Set Integer c = 0
for i = 0 to 4 step 1 do
if (a[i] % 10 == 5)
c = c + 1
end-if
end-for
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
  Topic `Array Count` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  5,15,25 satisfy the condition: 3.

- **Distractor Elimination & Error Proofs:**
  - *(A) `2`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `3`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 58 (ID: INFOSYS_PSEUDO_100_Q058)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Running Sum`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [2, 4, 6, 8]
Set Integer s = a[0]
for i = 1 to 3 step 1 do
a[i] = a[i] + s
s = a[i]
end-for
display a[3]
```

#### Answer Options:
- **(A)** `16`
- **(B)** `20`
- **(C)** `24`
- **(D)** `30`

#### Official Answer Key:
**Correct Option:** `(B)` `— 20`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Running Sum` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Running values become 2,6,12,20; a[3]=20.

- **Distractor Elimination & Error Proofs:**
  - *(A) `16`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `20`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `24`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `30`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 59 (ID: INFOSYS_PSEUDO_100_Q059)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Nested Index`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [1, 3, 0, 2]
display a[a[3]] + a[a[1]]
```

#### Answer Options:
- **(A)** `1`
- **(B)** `2`
- **(C)** `3`
- **(D)** `4`

#### Official Answer Key:
**Correct Option:** `(B)` `— 2`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Nested Index` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  a[3]=2, so a[2]=0; a[1]=3, so a[3]=2; total=2.

- **Distractor Elimination & Error Proofs:**
  - *(A) `1`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `2`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `3`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 60 (ID: INFOSYS_PSEUDO_100_Q060)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Difference`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [12, 5, 9, 4]
Set Integer m = a[0]
for i = 1 to 3 step 1 do
if (a[i] < m)
m = a[i]
end-if
end-for
display a[0] - m
```

#### Answer Options:
- **(A)** `6`
- **(B)** `7`
- **(C)** `8`
- **(D)** `9

Infosys Medium Pseudocode Practice • Page 19`

#### Official Answer Key:
**Correct Option:** `(C)` `— 8`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Difference` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Minimum is 4; 12−4=8.

- **Distractor Elimination & Error Proofs:**
  - *(A) `6`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `7`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `8`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `9

Infosys Medium Pseudocode Practice • Page 19`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 61 (ID: INFOSYS_PSEUDO_100_Q061)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [3, 5, 7, 9]
display (a[3] >> 1) + (a[0] << 1)
```

#### Answer Options:
- **(A)** `8`
- **(B)** `10`
- **(C)** `12`
- **(D)** `14`

#### Official Answer Key:
**Correct Option:** `(B)` `— 10`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  9>>1=4; 3<<1=6; total=10.

- **Distractor Elimination & Error Proofs:**
  - *(A) `8`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `10`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `14`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 62 (ID: INFOSYS_PSEUDO_100_Q062)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array XOR`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [6, 10, 12, 3]
display (a[0] ^ a[1]) + a[3]
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
  Topic `Array XOR` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  6^10=12; 12+3=15.

- **Distractor Elimination & Error Proofs:**
  - *(A) `13`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `15`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `17`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `19`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 63 (ID: INFOSYS_PSEUDO_100_Q063)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Pair Comparison`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [4, 9, 6, 11]
Set Integer c = 0
for i = 0 to 2 step 1 do
if (a[i] < a[i+1])
c = c + 1
end-if
end-for
display c
```

#### Answer Options:
- **(A)** `1`
- **(B)** `2`
- **(C)** `3`
- **(D)** `4`

#### Official Answer Key:
**Correct Option:** `(B)` `— 2`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Pair Comparison` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  The true comparisons are 4<9 and 6<11, so count=2.

- **Distractor Elimination & Error Proofs:**
  - *(A) `1`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `2`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `3`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 64 (ID: INFOSYS_PSEUDO_100_Q064)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Sum with Step`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [2, 4, 6, 8, 10, 12]
Set Integer s = 0
for i = 0 to 5 step 2 do
s = s + a[i]
end-for
display s
```

#### Answer Options:
- **(A)** `12`
- **(B)** `16`
- **(C)** `18`
- **(D)** `20`

#### Official Answer Key:
**Correct Option:** `(C)` `— 18`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Sum with Step` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Indices 0,2,4 give 2+6+10=18.

Infosys Medium Pseudocode Practice • Page 40

- **Distractor Elimination & Error Proofs:**
  - *(A) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `16`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `18`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 65 (ID: INFOSYS_PSEUDO_100_Q065)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Array Rotation Logic`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [10, 20, 30, 40]
Set Integer t = a[3]
for i = 3 to 1 step -1 do
a[i] = a[i-1]
end-for
a[0] = t
display a[1] + a[3]
```

#### Answer Options:
- **(A)** `30`
- **(B)** `40`
- **(C)** `50`
- **(D)** `60

Infosys Medium Pseudocode Practice • Page 20`

#### Official Answer Key:
**Correct Option:** `(B)` `— 40`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Array Rotation Logic` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  After right rotation: [40,10,20,30]; a[1]+a[3]=40.

- **Distractor Elimination & Error Proofs:**
  - *(A) `30`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `40`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `50`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `60

Infosys Medium Pseudocode Practice • Page 20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
