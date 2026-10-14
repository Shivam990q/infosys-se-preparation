# Section 03 — Technical Ability: Pseudo Code Assessment
## Topic 02: Bitwise Logic, Left & Right Shift Operations
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Total Questions:** 16  
**Question IDs:** `INFOSYS_PSEUDO_100_Q015` to `INFOSYS_PSEUDO_100_Q030`  
**Coverage:** Left Shift (`<<`), Right Shift (`>>`), Double Shifts, Shift Chains, Shift + Bitwise AND/OR/XOR, Shift Conditions, Bit Masking  

---

### Question 15 (ID: INFOSYS_PSEUDO_100_Q015)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Left Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 11
Set Integer y = 2
display (x << y) - x
```

#### Answer Options:
- **(A)** `22`
- **(B)** `33`
- **(C)** `44`
- **(D)** `55

Infosys Medium Pseudocode Practice • Page 5`

#### Official Answer Key:
**Correct Option:** `(B)` `— 33`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Left Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  11<<2 = 44; 44−11=33.

- **Distractor Elimination & Error Proofs:**
  - *(A) `22`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `33`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `44`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `55

Infosys Medium Pseudocode Practice • Page 5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 16 (ID: INFOSYS_PSEUDO_100_Q016)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Right Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 45
Set Integer y = 2
display (x >> y) + x % 4
```

#### Answer Options:
- **(A)** `10`
- **(B)** `11`
- **(C)** `12`
- **(D)** `13`

#### Official Answer Key:
**Correct Option:** `(C)` `— 12`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Right Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  45>>2 = 11; 45%4=1; total=12.

Infosys Medium Pseudocode Practice • Page 34

- **Distractor Elimination & Error Proofs:**
  - *(A) `10`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `11`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `12`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `13`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 17 (ID: INFOSYS_PSEUDO_100_Q017)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Left Shift in Expression`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 6
Set Integer b = 3
display (a << b) / 4
```

#### Answer Options:
- **(A)** `8`
- **(B)** `10`
- **(C)** `12`
- **(D)** `16`

#### Official Answer Key:
**Correct Option:** `(C)` `— 12`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Left Shift in Expression` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  6<<3=48; 48/4=12.

- **Distractor Elimination & Error Proofs:**
  - *(A) `8`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `10`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `12`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `16`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 18 (ID: INFOSYS_PSEUDO_100_Q018)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Right Shift in Expression`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 50
display (a >> 1) - (a >> 3)
```

#### Answer Options:
- **(A)** `17`
- **(B)** `19`
- **(C)** `21`
- **(D)** `23`

#### Official Answer Key:
**Correct Option:** `(B)` `— 19`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Right Shift in Expression` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  50>>1=25 and 50>>3=6; 25−6=19.

- **Distractor Elimination & Error Proofs:**
  - *(A) `17`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `19`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `21`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `23`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 19 (ID: INFOSYS_PSEUDO_100_Q019)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Shift + XOR`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 9
display (x << 1) ^ x
```

#### Answer Options:
- **(A)** `19`
- **(B)** `23`
- **(C)** `27`
- **(D)** `31`

#### Official Answer Key:
**Correct Option:** `(C)` `— 27`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Shift + XOR` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  9<<1=18; 18 XOR 9 = 27.

- **Distractor Elimination & Error Proofs:**
  - *(A) `19`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `23`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `27`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `31`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 20 (ID: INFOSYS_PSEUDO_100_Q020)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Shift + AND`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 29
display (x >> 2) & 7
```

#### Answer Options:
- **(A)** `5`
- **(B)** `6`
- **(C)** `7`
- **(D)** `8

Infosys Medium Pseudocode Practice • Page 6`

#### Official Answer Key:
**Correct Option:** `(C)` `— 7`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Shift + AND` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  29>>2=7; 7 AND 7 = 7.

- **Distractor Elimination & Error Proofs:**
  - *(A) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `6`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `7`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `8

Infosys Medium Pseudocode Practice • Page 6`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 21 (ID: INFOSYS_PSEUDO_100_Q021)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Double Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 7
Set Integer y = (x << 2)
display y >> 1
```

#### Answer Options:
- **(A)** `7`
- **(B)** `12`
- **(C)** `14`
- **(D)** `28`

#### Official Answer Key:
**Correct Option:** `(C)` `— 14`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Double Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  7<<2=28; 28>>1=14.

- **Distractor Elimination & Error Proofs:**
  - *(A) `7`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `14`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `28`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 22 (ID: INFOSYS_PSEUDO_100_Q022)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Shift and Modulo`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 37
display (x >> 1) % 6
```

#### Answer Options:
- **(A)** `0`
- **(B)** `1`
- **(C)** `2`
- **(D)** `3`

#### Official Answer Key:
**Correct Option:** `(A)` `— 0`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Shift and Modulo` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  37>>1=18; 18%6=0.

- **Distractor Elimination & Error Proofs:**
  - *(A) `0`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(B) `1`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `2`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `3`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 23 (ID: INFOSYS_PSEUDO_100_Q023)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Shift Condition`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 23
if ((x >> 2) >= 5)
display x - 3
else
display x + 3
end-if
```

#### Answer Options:
- **(A)** `20`
- **(B)** `23`
- **(C)** `26`
- **(D)** `28`

#### Official Answer Key:
**Correct Option:** `(A)` `— 20`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Shift Condition` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  23>>2=5, so the condition is true and 23−3=20.

- **Distractor Elimination & Error Proofs:**
  - *(A) `20`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(B) `23`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `26`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `28`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 24 (ID: INFOSYS_PSEUDO_100_Q024)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Shift + Arithmetic`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 14
Set Integer b = 2
display (a << b) - (a >> b)
```

#### Answer Options:
- **(A)** `51`
- **(B)** `53`
- **(C)** `55`
- **(D)** `57`

#### Official Answer Key:
**Correct Option:** `(B)` `— 53`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Shift + Arithmetic` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  14<<2=56; 14>>2=3; 56−3=53.

Infosys Medium Pseudocode Practice • Page 35

- **Distractor Elimination & Error Proofs:**
  - *(A) `51`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `53`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `55`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `57`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 25 (ID: INFOSYS_PSEUDO_100_Q025)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Shift Chain`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 3
x = x << 2
x = x >> 1
x = x << 1
display x
```

#### Answer Options:
- **(A)** `6`
- **(B)** `10`
- **(C)** `12`
- **(D)** `24

Infosys Medium Pseudocode Practice • Page 7`

#### Official Answer Key:
**Correct Option:** `(C)` `— 12`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Shift Chain` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  3→12→6→12.

- **Distractor Elimination & Error Proofs:**
  - *(A) `6`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `10`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `12`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `24

Infosys Medium Pseudocode Practice • Page 7`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 26 (ID: INFOSYS_PSEUDO_100_Q026)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Shift + OR`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 5
display (x << 2) | 3
```

#### Answer Options:
- **(A)** `19`
- **(B)** `20`
- **(C)** `23`
- **(D)** `24`

#### Official Answer Key:
**Correct Option:** `(C)` `— 23`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Shift + OR` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  5<<2=20; 20|3=23.

- **Distractor Elimination & Error Proofs:**
  - *(A) `19`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `23`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `24`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 27 (ID: INFOSYS_PSEUDO_100_Q027)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Shift + XOR`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 12
display (x >> 1) ^ 5
```

#### Answer Options:
- **(A)** `1`
- **(B)** `3`
- **(C)** `5`
- **(D)** `7`

#### Official Answer Key:
**Correct Option:** `(B)` `— 3`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Shift + XOR` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  12>>1=6; 6 XOR 5 = 3.

- **Distractor Elimination & Error Proofs:**
  - *(A) `1`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `3`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `7`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 28 (ID: INFOSYS_PSEUDO_100_Q028)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Bit Test with Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 40
display (x >> 3) & 1
```

#### Answer Options:
- **(A)** `0`
- **(B)** `1`
- **(C)** `2`
- **(D)** `5`

#### Official Answer Key:
**Correct Option:** `(B)` `— 1`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Bit Test with Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  40>>3=5; 5 AND 1 = 1.

- **Distractor Elimination & Error Proofs:**
  - *(A) `0`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `1`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `2`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 29 (ID: INFOSYS_PSEUDO_100_Q029)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Shifted Difference`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 31
display (a << 1) - (a >> 2)
```

#### Answer Options:
- **(A)** `54`
- **(B)** `55`
- **(C)** `56`
- **(D)** `57`

#### Official Answer Key:
**Correct Option:** `(B)` `— 55`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Shifted Difference` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  31<<1=62; 31>>2=7; 62−7=55.

- **Distractor Elimination & Error Proofs:**
  - *(A) `54`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `55`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `56`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `57`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 30 (ID: INFOSYS_PSEUDO_100_Q030)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `For Loop with Condition`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer s = 0
for i = 1 to 10 step 1 do
if (i % 3 != 0)
s = s + i
end-if
end-for
display s
```

#### Answer Options:
- **(A)** `30`
- **(B)** `37`
- **(C)** `42`
- **(D)** `45

Infosys Medium Pseudocode Practice • Page 8`

#### Official Answer Key:
**Correct Option:** `(B)` `— 37`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `For Loop with Condition` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Total 1..10=55; multiples of 3 are 3+6+9=18; 55−18=37.

- **Distractor Elimination & Error Proofs:**
  - *(A) `30`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `37`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `42`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `45

Infosys Medium Pseudocode Practice • Page 8`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
