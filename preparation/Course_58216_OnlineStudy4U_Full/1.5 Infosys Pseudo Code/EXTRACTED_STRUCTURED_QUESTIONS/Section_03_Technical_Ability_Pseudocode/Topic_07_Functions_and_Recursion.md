# Section 03 — Technical Ability: Pseudo Code Assessment
## Topic 07: Functions, Parameters, Scope & Recursion
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Total Questions:** 15  
**Question IDs:** `INFOSYS_PSEUDO_100_Q076` to `INFOSYS_PSEUDO_100_Q090`  
**Coverage:** Value Return, Nested Function Calls, Functions with Loops and Bitwise Operations, Digit Manipulation, Recursive-Style Functions, Shifted Returns  

---

### Question 76 (ID: INFOSYS_PSEUDO_100_Q076)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function Arithmetic`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer calc(Integer a, Integer b)
a = a + b
b = a - b
return a * b
End function
display calc(7, 3)
```

#### Answer Options:
- **(A)** `60`
- **(B)** `70`
- **(C)** `80`
- **(D)** `90`

#### Official Answer Key:
**Correct Option:** `(B)` `— 70`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function Arithmetic` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  a becomes 10; b becomes 7; return 10×7=70.

- **Distractor Elimination & Error Proofs:**
  - *(A) `60`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `70`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `80`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `90`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 77 (ID: INFOSYS_PSEUDO_100_Q077)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function with Loop`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer n)
Set Integer s = 1
for i = 1 to n step 1 do
s = s + i
end-for
return s
End function
display f(6)
```

#### Answer Options:
- **(A)** `20`
- **(B)** `21`
- **(C)** `22`
- **(D)** `23`

#### Official Answer Key:
**Correct Option:** `(C)` `— 22`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function with Loop` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  1+(1+2+3+4+5+6)=22.

- **Distractor Elimination & Error Proofs:**
  - *(A) `20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `21`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `22`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `23`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 78 (ID: INFOSYS_PSEUDO_100_Q078)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function with Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer n)
return (n << 2) + (n >> 1)
End function
display f(10)
```

#### Answer Options:
- **(A)** `40`
- **(B)** `45`
- **(C)** `50`
- **(D)** `55`

#### Official Answer Key:
**Correct Option:** `(B)` `— 45`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function with Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  10<<2=40; 10>>1=5; total=45.

- **Distractor Elimination & Error Proofs:**
  - *(A) `40`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `45`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `50`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `55`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 79 (ID: INFOSYS_PSEUDO_100_Q079)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function with XOR`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer a, Integer b)
return (a ^ b) * 2
End function
display f(12, 5)
```

#### Answer Options:
- **(A)** `18`
- **(B)** `26`
- **(C)** `30`
- **(D)** `34

Infosys Medium Pseudocode Practice • Page 23`

#### Official Answer Key:
**Correct Option:** `(A)` `— 18`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function with XOR` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  12 XOR 5 = 9; 9×2=18.

- **Distractor Elimination & Error Proofs:**
  - *(A) `18`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(B) `26`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `30`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `34

Infosys Medium Pseudocode Practice • Page 23`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 80 (ID: INFOSYS_PSEUDO_100_Q080)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function Condition`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer n)
if (n % 4 == 0)
return n / 2
else
return n + 4
end-if
End function
display f(14)
```

#### Answer Options:
- **(A)** `9`
- **(B)** `14`
- **(C)** `18`
- **(D)** `28

Infosys Medium Pseudocode Practice • Page 24`

#### Official Answer Key:
**Correct Option:** `(C)` `— 18`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function Condition` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  14 is not divisible by 4, so 14+4=18.

Infosys Medium Pseudocode Practice • Page 42

- **Distractor Elimination & Error Proofs:**
  - *(A) `9`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `14`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `18`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `28

Infosys Medium Pseudocode Practice • Page 24`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 81 (ID: INFOSYS_PSEUDO_100_Q081)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function Digit Logic`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer n)
Set Integer s = 0
while (n > 0)
s = s + n % 10
n = n / 10
end-while
return s
End function
display f(386)
```

#### Answer Options:
- **(A)** `14`
- **(B)** `15`
- **(C)** `16`
- **(D)** `17`

#### Official Answer Key:
**Correct Option:** `(D)` `— 17`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function Digit Logic` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  3+8+6=17.

- **Distractor Elimination & Error Proofs:**
  - *(A) `14`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `15`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `16`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `17`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 82 (ID: INFOSYS_PSEUDO_100_Q082)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function Nested`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer g(Integer x)
return x * 2
End function
Integer f(Integer x)
return g(x) + g(x+1)
End function
display f(4)
```

#### Answer Options:
- **(A)** `16`
- **(B)** `18`
- **(C)** `20`
- **(D)** `22`

#### Official Answer Key:
**Correct Option:** `(B)` `— 18`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function Nested` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  g(4)=8 and g(5)=10; total=18.

- **Distractor Elimination & Error Proofs:**
  - *(A) `16`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `18`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `22`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 83 (ID: INFOSYS_PSEUDO_100_Q083)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function Modulo`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer n)
return (n * n + 3) % 10
End function
display f(7)
```

#### Answer Options:
- **(A)** `2`
- **(B)** `5`
- **(C)** `8`
- **(D)** `9`

#### Official Answer Key:
**Correct Option:** `(A)` `— 2`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function Modulo` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  49+3=52; 52%10=2.

- **Distractor Elimination & Error Proofs:**
  - *(A) `2`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(B) `5`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `8`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `9`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 84 (ID: INFOSYS_PSEUDO_100_Q084)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function Loop Product`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer n)
Set Integer p = 1
for i = 1 to n step 1 do
if (i % 2 == 0)
p = p * i
end-if
end-for
return p
End function
display f(6)
```

#### Answer Options:
- **(A)** `24`
- **(B)** `36`
- **(C)** `48`
- **(D)** `60

Infosys Medium Pseudocode Practice • Page 25`

#### Official Answer Key:
**Correct Option:** `(C)` `— 48`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function Loop Product` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  Multiply even values 2×4×6=48.

- **Distractor Elimination & Error Proofs:**
  - *(A) `24`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `36`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `48`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `60

Infosys Medium Pseudocode Practice • Page 25`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 85 (ID: INFOSYS_PSEUDO_100_Q085)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function Boolean`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer a, Integer b)
if ((a & 1) == 1 and (b & 1) == 0)
return a + b
else
return a - b
end-if
End function
display f(9, 6)
```

#### Answer Options:
- **(A)** `3`
- **(B)** `9`
- **(C)** `15`
- **(D)** `54

Infosys Medium Pseudocode Practice • Page 26`

#### Official Answer Key:
**Correct Option:** `(C)` `— 15`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function Boolean` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  9 is odd and 6 is even, so return 9+6=15.

- **Distractor Elimination & Error Proofs:**
  - *(A) `3`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `9`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `15`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `54

Infosys Medium Pseudocode Practice • Page 26`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 86 (ID: INFOSYS_PSEUDO_100_Q086)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function Array Formula`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer a, Integer b, Integer c)
return (a + b) ^ c
End function
display f(5, 3, 6)
```

#### Answer Options:
- **(A)** `4`
- **(B)** `8`
- **(C)** `12`
- **(D)** `14`

#### Official Answer Key:
**Correct Option:** `(D)` `— 14`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function Array Formula` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  5+3=8; 8 XOR 6 = 14.

- **Distractor Elimination & Error Proofs:**
  - *(A) `4`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `8`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `14`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 87 (ID: INFOSYS_PSEUDO_100_Q087)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function Recursive-style`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer n)
if (n <= 1)
return 1
end-if
return n + f(n-2)
End function
display f(7)
```

#### Answer Options:
- **(A)** `10`
- **(B)** `12`
- **(C)** `16`
- **(D)** `18`

#### Official Answer Key:
**Correct Option:** `(C)` `— 16`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function Recursive-style` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  f(7)=7+5+3+1=16.

- **Distractor Elimination & Error Proofs:**
  - *(A) `10`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `12`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `16`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `18`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 88 (ID: INFOSYS_PSEUDO_100_Q088)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function Shifted Return`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer n)
Set Integer a = n << 1
Set Integer b = n >> 1
return a - b
End function
display f(13)
```

#### Answer Options:
- **(A)** `13`
- **(B)** `19`
- **(C)** `20`
- **(D)** `21`

#### Official Answer Key:
**Correct Option:** `(C)` `— 20`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function Shifted Return` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  13<<1=26; 13>>1=6; difference=20.

Infosys Medium Pseudocode Practice • Page 43

- **Distractor Elimination & Error Proofs:**
  - *(A) `13`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `19`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `20`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `21`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 89 (ID: INFOSYS_PSEUDO_100_Q089)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function with Multiple Updates`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer a, Integer b)
a = a * 2
b = b + a
a = a - b
return a + b
End function
display f(4, 3)
```

#### Answer Options:
- **(A)** `7`
- **(B)** `8`
- **(C)** `9`
- **(D)** `10

Infosys Medium Pseudocode Practice • Page 27`

#### Official Answer Key:
**Correct Option:** `(B)` `— 8`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function with Multiple Updates` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  a=8; b=11; a=-3; return -3+11=8.

- **Distractor Elimination & Error Proofs:**
  - *(A) `7`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `8`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(C) `9`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(D) `10

Infosys Medium Pseudocode Practice • Page 27`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
### Question 90 (ID: INFOSYS_PSEUDO_100_Q090)
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Cognitive Category:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Topic Domain:** `Function with Loop and Shift`  

#### Problem Statement:
What will be the output of the following pseudocode?

```pseudocode
Integer f(Integer n)
Set Integer s = 0
for i = 1 to n step 1 do
s = s + (i << 1)
end-for
return s
End function
display f(5)
```

#### Answer Options:
- **(A)** `20`
- **(B)** `25`
- **(C)** `30`
- **(D)** `35

Infosys Medium Pseudocode Practice • Page 28`

#### Official Answer Key:
**Correct Option:** `(C)` `— 30`

#### Formally Verified Solution & Derivation:
- **Core Concept & Theoretical Foundations:**
  Topic `Function with Loop and Shift` tests understanding of Infosys pseudo-coding conventions and execution invariants. Expressions are parsed and evaluated left-to-right with standard operator precedence rules.

- **Step-by-Step Analytical Trace & Execution State:**
  2×(1+2+3+4+5)=30.

- **Distractor Elimination & Error Proofs:**
  - *(A) `20`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(B) `25`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.
  - *(C) `30`:* **Correct.** Verified through exact deterministic step-by-step tracing of variable states and operator evaluation order.
  - *(D) `35

Infosys Medium Pseudocode Practice • Page 28`:* **Incorrect.** Results from an arithmetic miscalculation, incorrect operator precedence assumption, or loop boundary off-by-one trap.

- **Infosys SE Exam Shortcut & Time-Saving Trick:**
  Always evaluate operators by precedence level (parentheses > arithmetic multiplication/division/mod > addition/subtraction > bitwise shifts > relational > bitwise AND/XOR/OR > logical). This eliminates trial-and-error tracing.

---
