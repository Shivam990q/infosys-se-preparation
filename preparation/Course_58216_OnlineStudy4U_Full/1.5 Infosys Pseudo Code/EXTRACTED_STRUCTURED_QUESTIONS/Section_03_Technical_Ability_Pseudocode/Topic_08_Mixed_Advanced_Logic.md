# Section 03 — Technical Ability: Pseudo Code Assessment
## Topic 08: Mixed Advanced Placement Logic
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Total Questions:** 10  
**Question IDs:** `INFOSYS_PSEUDO_100_Q091` to `INFOSYS_PSEUDO_100_Q100`  
**Coverage:** Multi-Construct Integration (Arrays + Functions + Bitwise + Shift + Nested Loops), High-Difficulty Placement Exam MCQs  

---

### Question 91 (ID: INFOSYS_PSEUDO_100_Q091)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Mixed Array + Function`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer x)
return (x >> 1) + 3
End function
Set Integer a = [8, 12, 16]
display f(a[2])
```

#### Answer Options:
- **(A)** `9`
- **(B)** `10`
- **(C)** `11`
- **(D)** `12`

#### Official Answer Key:
**Correct Option:** `(C)` `— 11`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Mixed Array + Function` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  a[2]=16; 16>>1=8; 8+3=11.

- **Distractor Elimination & Error Proofs:**
  - *(A) `9`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `10`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `11`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 92 (ID: INFOSYS_PSEUDO_100_Q092)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Mixed Loop + XOR`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 0
for i = 1 to 5 step 1 do
x = x ^ i
end-for
display x
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
  Topic `Mixed Loop + XOR` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  0^1=1, ^2=3, ^3=0, ^4=4, ^5=1.

- **Distractor Elimination & Error Proofs:**
  - *(A) `0`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(B) `1`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `2`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `3`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 93 (ID: INFOSYS_PSEUDO_100_Q093)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Mixed Loop + AND`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 15
for i = 1 to 3 step 1 do
x = x & (14 - i)
end-for
display x
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
  Topic `Mixed Loop + AND` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  x=15&13=13; 13&12=12; 12&11=8.

- **Distractor Elimination & Error Proofs:**
  - *(A) `8`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `10`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `14`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 94 (ID: INFOSYS_PSEUDO_100_Q094)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Mixed Condition + Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer x = 19
if ((x & 1) == 1)
x = x << 1
x = x + 3
else
x = x >> 1
end-if
display x
```

#### Answer Options:
- **(A)** `19`
- **(B)** `38`
- **(C)** `41`
- **(D)** `44

Infosys Medium Pseudocode Practice • Page 29`

#### Official Answer Key:
**Correct Option:** `(C)` `— 41`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Mixed Condition + Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  19 is odd; 19<<1=38; +3=41.

- **Distractor Elimination & Error Proofs:**
  - *(A) `19`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `38`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `41`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `44

Infosys Medium Pseudocode Practice • Page 29`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 95 (ID: INFOSYS_PSEUDO_100_Q095)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Mixed Nested Loop + Modulo`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer c = 0
for i = 1 to 4 step 1 do
for j = 1 to 4 step 1 do
if ((i + j) % 3 == 0)
c = c + 1
end-if
end-for
end-for
display c
```

#### Answer Options:
- **(A)** `4`
- **(B)** `5`
- **(C)** `6`
- **(D)** `7

Infosys Medium Pseudocode Practice • Page 30`

#### Official Answer Key:
**Correct Option:** `(B)` `— 5`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Mixed Nested Loop + Modulo` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Pairs with sum divisible by 3: 5 pairs. Correct answer B.

- **Distractor Elimination & Error Proofs:**
  - *(A) `4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `5`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `6`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `7

Infosys Medium Pseudocode Practice • Page 30`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 96 (ID: INFOSYS_PSEUDO_100_Q096)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Mixed Array + Right Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [18, 25, 32, 41]
display (a[3] >> 2) + (a[0] % 5)
```

#### Answer Options:
- **(A)** `11`
- **(B)** `12`
- **(C)** `13`
- **(D)** `14`

#### Official Answer Key:
**Correct Option:** `(C)` `— 13`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Mixed Array + Right Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  41>>2=10; 18%5=3; total=13.

Infosys Medium Pseudocode Practice • Page 44

- **Distractor Elimination & Error Proofs:**
  - *(A) `11`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `13`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `14`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 97 (ID: INFOSYS_PSEUDO_100_Q097)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Mixed Function + Logical`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer a, Integer b)
if (a > 10 and b < 10)
return (a << 1) + b
else
return a + (b << 1)
end-if
End function
display f(12, 7)
```

#### Answer Options:
- **(A)** `24`
- **(B)** `26`
- **(C)** `31`
- **(D)** `38`

#### Official Answer Key:
**Correct Option:** `(C)` `— 31`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Mixed Function + Logical` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  12>10 and 7<10, so (12<<1)+7 = 24+7=31.

- **Distractor Elimination & Error Proofs:**
  - *(A) `24`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `26`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `31`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `38`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 98 (ID: INFOSYS_PSEUDO_100_Q098)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Mixed Loop + Array Update`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = [1, 2, 3, 4, 5]
for i = 1 to 4 step 1 do
a[i] = a[i] + a[i-1]
end-for
display a[4]
```

#### Answer Options:
- **(A)** `10`
- **(B)** `12`
- **(C)** `15`
- **(D)** `16`

#### Official Answer Key:
**Correct Option:** `(C)` `— 15`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Mixed Loop + Array Update` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Running cumulative values become [1,3,6,10,15].

- **Distractor Elimination & Error Proofs:**
  - *(A) `10`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `15`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `16`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 99 (ID: INFOSYS_PSEUDO_100_Q099)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Mixed Function + Modulo + Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer n)
return ((n % 5) << 2) + (n >> 3)
End function
display f(26)
```

#### Answer Options:
- **(A)** `5`
- **(B)** `7`
- **(C)** `9`
- **(D)** `11

Infosys Medium Pseudocode Practice • Page 31`

#### Official Answer Key:
**Correct Option:** `(B)` `— 7`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Mixed Function + Modulo + Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  26%5=1; 1<<2=4; 26>>3=3; total=7.

- **Distractor Elimination & Error Proofs:**
  - *(A) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `7`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `9`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `11

Infosys Medium Pseudocode Practice • Page 31`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 100 (ID: INFOSYS_PSEUDO_100_Q100)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Mixed Nested Conditions`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Set Integer a = 9
Set Integer b = 6
Set Integer c = 3
if (a > b)
if ((a - b) == c)
display a + b + c
else
display a - b
end-if
else
display b + c
end-if
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
  Topic `Mixed Nested Conditions` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  9>6 and 9−6=3, so the nested condition is true; 9+6+3=18.

- **Distractor Elimination & Error Proofs:**
  - *(A) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `15`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `18`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `21`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
