# Section 03 — Technical Ability: Pseudo Code Assessment
## Topic 06: Strings, ASCII & Character Manipulation
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Total Questions:** 10  
**Question IDs:** `INFOSYS_PSEUDO_100_Q066` to `INFOSYS_PSEUDO_100_Q075`  
**Coverage:** String Length, 0-based and 1-based String Indexing, Reverse Character Access, Character Counting, Shift-based String Extraction, String Conditions  

---

### Question 66 (ID: INFOSYS_PSEUDO_100_Q066)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `String Length`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set String s = "PLACEMENT"
Set Integer n = stringLength(s)
display (n << 1) - 3
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
  Topic `String Length` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Length=9; 9<<1=18; 18−3=15.

- **Distractor Elimination & Error Proofs:**
  - *(A) `13`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `15`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `17`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `19`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 67 (ID: INFOSYS_PSEUDO_100_Q067)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `String Indexing`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set String s = "INFOSYS"
display s[1] + s[5]
```

#### Answer Options:
- **(A)** `NS`
- **(B)** `NY`
- **(C)** `FY`
- **(D)** `SY`

#### Official Answer Key:
**Correct Option:** `(B)` `— NY`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `String Indexing` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  s[1]=N and s[5]=Y, so the result is NY.

- **Distractor Elimination & Error Proofs:**
  - *(A) `NS`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `NY`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `FY`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `SY`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 68 (ID: INFOSYS_PSEUDO_100_Q068)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `String Condition`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set String s = "COMPUTER"
if (stringLength(s) % 2 == 0)
display stringLength(s) / 2
else
display stringLength(s) + 2
end-if
```

#### Answer Options:
- **(A)** `4`
- **(B)** `5`
- **(C)** `6`
- **(D)** `10`

#### Official Answer Key:
**Correct Option:** `(A)` `— 4`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `String Condition` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  COMPUTER has 8 characters; 8/2=4.

- **Distractor Elimination & Error Proofs:**
  - *(A) `4`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(B) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `6`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `10`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 69 (ID: INFOSYS_PSEUDO_100_Q069)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `String + Loop`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set String s = "CODE"
Set Integer total = 0
for i = 0 to stringLength(s)-1 step 1 do
total = total + i
end-for
display total
```

#### Answer Options:
- **(A)** `4`
- **(B)** `5`
- **(C)** `6`
- **(D)** `7`

#### Official Answer Key:
**Correct Option:** `(C)` `— 6`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `String + Loop` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Indices 0+1+2+3=6.

- **Distractor Elimination & Error Proofs:**
  - *(A) `4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `6`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `7`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 70 (ID: INFOSYS_PSEUDO_100_Q070)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `String Index + Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set String s = "TESTING"
Set Integer n = s[1] == 'E'
display stringLength(s) << n
```

#### Answer Options:
- **(A)** `7`
- **(B)** `14`
- **(C)** `21`
- **(D)** `28

Infosys Medium Pseudocode Practice • Page 21`

#### Official Answer Key:
**Correct Option:** `(B)` `— 14`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `String Index + Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  The comparison is true, represented as 1; length 7<<1=14.

- **Distractor Elimination & Error Proofs:**
  - *(A) `7`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `14`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `21`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `28

Infosys Medium Pseudocode Practice • Page 21`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 71 (ID: INFOSYS_PSEUDO_100_Q071)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `String Length + Modulo`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set String s = "ALGORITHM"
display stringLength(s) % 4
```

#### Answer Options:
- **(A)** `0`
- **(B)** `1`
- **(C)** `2`
- **(D)** `3`

#### Official Answer Key:
**Correct Option:** `(B)` `— 1`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `String Length + Modulo` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  ALGORITHM has 9 characters; 9%4=1.

- **Distractor Elimination & Error Proofs:**
  - *(A) `0`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `1`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `2`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `3`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 72 (ID: INFOSYS_PSEUDO_100_Q072)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `String Reverse Access`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set String s = "INFOSYS"
display s[stringLength(s)-1]
```

#### Answer Options:
- **(A)** `I`
- **(B)** `S`
- **(C)** `Y`
- **(D)** `Error`

#### Official Answer Key:
**Correct Option:** `(B)` `— S`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `String Reverse Access` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Last index is 6; s[6] = S.

Infosys Medium Pseudocode Practice • Page 41

- **Distractor Elimination & Error Proofs:**
  - *(A) `I`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `S`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `Y`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `Error`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 73 (ID: INFOSYS_PSEUDO_100_Q073)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `String Character Count`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set String s = "PLACEMENT"
Set Integer c = 0
for i = 0 to stringLength(s)-1 step 1 do
if (s[i] == 'E')
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
  Topic `String Character Count` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  PLACEMENT contains E twice.

- **Distractor Elimination & Error Proofs:**
  - *(A) `1`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `2`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `3`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 74 (ID: INFOSYS_PSEUDO_100_Q074)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `String Length + Right Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set String s = "INTERVIEW"
display stringLength(s) >> 1
```

#### Answer Options:
- **(A)** `3`
- **(B)** `4`
- **(C)** `5`
- **(D)** `6`

#### Official Answer Key:
**Correct Option:** `(B)` `— 4`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `String Length + Right Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  INTERVIEW has 9 characters; 9>>1=4.

- **Distractor Elimination & Error Proofs:**
  - *(A) `3`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `4`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `6`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 75 (ID: INFOSYS_PSEUDO_100_Q075)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `String Conditional`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set String s = "NQT2026"
if (stringLength(s) > 6)
display s[0]
else
display s[1]
end-if
```

#### Answer Options:
- **(A)** `N`
- **(B)** `Q`
- **(C)** `T`
- **(D)** `2

Infosys Medium Pseudocode Practice • Page 22`

#### Official Answer Key:
**Correct Option:** `(A)` `— N`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `String Conditional` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Length is 7, so the first branch displays s[0]=N.

- **Distractor Elimination & Error Proofs:**
  - *(A) `N`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(B) `Q`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `T`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `2

Infosys Medium Pseudocode Practice • Page 22`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
