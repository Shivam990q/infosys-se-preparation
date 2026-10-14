# Section 03 — Technical Ability: Pseudo Code Assessment
## Topic 03: Loops & Iteration Logic
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Total Questions:** 10  
**Question IDs:** `INFOSYS_PSEUDO_100_Q031` to `INFOSYS_PSEUDO_100_Q040`  
**Coverage:** While Loops, For Loops, Reverse Iteration, Loop Step Modifiers, Break in Loops, Continue Statements, State Accumulation  

---

### Question 31 (ID: INFOSYS_PSEUDO_100_Q031)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Nested Loop`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer c = 0
for i = 1 to 4 step 1 do
for j = 1 to 5 step 1 do
if (i + j == 6)
c = c + 1
end-if
end-for
end-for
display c
```

#### Answer Options:
- **(A)** `2`
- **(B)** `3`
- **(C)** `4`
- **(D)** `5`

#### Official Answer Key:
**Correct Option:** `(C)` `— 4`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Nested Loop` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Pairs are (1,5),(2,4),(3,3),(4,2): 4.

- **Distractor Elimination & Error Proofs:**
  - *(A) `2`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `3`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `4`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 32 (ID: INFOSYS_PSEUDO_100_Q032)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Nested Loop Sum`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer s = 0
for i = 1 to 3 step 1 do
for j = 1 to i + 1 step 1 do
s = s + j
end-for
end-for
display s
```

#### Answer Options:
- **(A)** `17`
- **(B)** `18`
- **(C)** `19`
- **(D)** `20`

#### Official Answer Key:
**Correct Option:** `(C)` `— 19`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Nested Loop Sum` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  For i=1,2,3 the inner sums are 3,6,10; total=19.

Infosys Medium Pseudocode Practice • Page 36

- **Distractor Elimination & Error Proofs:**
  - *(A) `17`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `18`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `19`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 33 (ID: INFOSYS_PSEUDO_100_Q033)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `While Loop`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 5
Set Integer s = 0
while (x <= 25)
s = s + x
x = x + 5
end-while
display s
```

#### Answer Options:
- **(A)** `50`
- **(B)** `60`
- **(C)** `75`
- **(D)** `80`

#### Official Answer Key:
**Correct Option:** `(C)` `— 75`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `While Loop` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  5+10+15+20+25=75.

- **Distractor Elimination & Error Proofs:**
  - *(A) `50`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `60`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `75`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `80`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 34 (ID: INFOSYS_PSEUDO_100_Q034)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Break in Nested Loop`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer c = 0
for i = 1 to 4 step 1 do
for j = 1 to 4 step 1 do
if (j == 3)
break
end-if
c = c + 1
end-for
end-for
display c
```

#### Answer Options:
- **(A)** `4`
- **(B)** `6`
- **(C)** `8`
- **(D)** `12

Infosys Medium Pseudocode Practice • Page 9`

#### Official Answer Key:
**Correct Option:** `(C)` `— 8`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Break in Nested Loop` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  The inner loop adds 1 for j=1 and j=2, then breaks at j=3. 4×2=8.

- **Distractor Elimination & Error Proofs:**
  - *(A) `4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `6`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `8`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `12

Infosys Medium Pseudocode Practice • Page 9`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 35 (ID: INFOSYS_PSEUDO_100_Q035)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Continue`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer s = 0
for i = 1 to 8 step 1 do
if (i % 3 == 0)
continue
end-if
s = s + i
end-for
display s
```

#### Answer Options:
- **(A)** `24`
- **(B)** `27`
- **(C)** `30`
- **(D)** `33

Infosys Medium Pseudocode Practice • Page 10`

#### Official Answer Key:
**Correct Option:** `(B)` `— 27`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Continue` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  1..8 sum=36; skip 3 and 6, so 36−9=27.

- **Distractor Elimination & Error Proofs:**
  - *(A) `24`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `27`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `30`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `33

Infosys Medium Pseudocode Practice • Page 10`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 36 (ID: INFOSYS_PSEUDO_100_Q036)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Reverse Loop`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer s = 0
for i = 12 to 2 step -2 do
s = s + i / 2
end-for
display s
```

#### Answer Options:
- **(A)** `18`
- **(B)** `21`
- **(C)** `24`
- **(D)** `27`

#### Official Answer Key:
**Correct Option:** `(B)` `— 21`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Reverse Loop` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Values of i/2: 6,5,4,3,2,1; sum=21.

- **Distractor Elimination & Error Proofs:**
  - *(A) `18`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `21`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `24`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `27`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 37 (ID: INFOSYS_PSEUDO_100_Q037)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Loop with Changing Step`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer i = 1
Set Integer s = 0
while (i < 20)
s = s + i
i = i * 2 + 1
end-while
display s
```

#### Answer Options:
- **(A)** `24`
- **(B)** `26`
- **(C)** `28`
- **(D)** `30`

#### Official Answer Key:
**Correct Option:** `(B)` `— 26`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Loop with Changing Step` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  i values are 1,3,7,15; sum=26.

- **Distractor Elimination & Error Proofs:**
  - *(A) `24`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `26`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `28`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `30`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 38 (ID: INFOSYS_PSEUDO_100_Q038)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Nested Loop Count`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer c = 0
for i = 1 to 5 step 1 do
for j = i to 5 step 1 do
c = c + 1
end-for
end-for
display c
```

#### Answer Options:
- **(A)** `10`
- **(B)** `12`
- **(C)** `15`
- **(D)** `20`

#### Official Answer Key:
**Correct Option:** `(C)` `— 15`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Nested Loop Count` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Counts are 5+4+3+2+1=15.

- **Distractor Elimination & Error Proofs:**
  - *(A) `10`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `15`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 39 (ID: INFOSYS_PSEUDO_100_Q039)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Loop with Modulo`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer s = 0
for i = 2 to 14 step 2 do
if (i % 4 == 0)
s = s + i
end-if
end-for
display s
```

#### Answer Options:
- **(A)** `12`
- **(B)** `16`
- **(C)** `20`
- **(D)** `24

Infosys Medium Pseudocode Practice • Page 11`

#### Official Answer Key:
**Correct Option:** `(D)` `— 24`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Loop with Modulo` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Multiples of 4 are 4,8,12; sum=24.

- **Distractor Elimination & Error Proofs:**
  - *(A) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `16`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `24

Infosys Medium Pseudocode Practice • Page 11`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 40 (ID: INFOSYS_PSEUDO_100_Q040)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Nested Conditional Loop`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer s = 0
for i = 1 to 5 step 1 do
if (i % 2 == 1)
for j = 1 to i step 2 do
s = s + j
end-for
end-if
end-for
display s
```

#### Answer Options:
- **(A)** `12`
- **(B)** `14`
- **(C)** `16`
- **(D)** `18

Infosys Medium Pseudocode Practice • Page 12`

#### Official Answer Key:
**Correct Option:** `(B)` `— 14`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Nested Conditional Loop` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  For i=1,3,5 the inner sums are 1,4,9; total=14.

Infosys Medium Pseudocode Practice • Page 37

- **Distractor Elimination & Error Proofs:**
  - *(A) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `14`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `16`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `18

Infosys Medium Pseudocode Practice • Page 12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
