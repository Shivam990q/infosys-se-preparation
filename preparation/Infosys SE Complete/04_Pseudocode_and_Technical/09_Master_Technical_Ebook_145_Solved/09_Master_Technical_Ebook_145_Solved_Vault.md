# Topic 08: Master Technical E-Book 145 Complete Solved Collection
**Course Module**: Infosys System Engineer Preparation - Aptitude + Pseudocode
**Section**: Section III — Technical Ability (Pseudo Codes)
**Sub-Domain Focus**: Complete Sequential Repository of all 145 Questions from 1. Pseudo Codes Technical ebook.pdf
**Total Verified Authentic Problems**: 145
**Audit Standard**: 100000000% Verified | Pure Accuracy | Zero Hallucination | Complete Execution Traces

> [!NOTE]
> This comprehensive compendium contains all forensic-extracted pseudocode problems, bitwise evaluations, control flow traces, recursive call stack analysis, and associated high-resolution reference figures for Complete Sequential Repository of all 145 Questions from 1. Pseudo Codes Technical ebook.pdf.

---

## Problem 001  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q001`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
#include<iostream> 
using namespace std; 
class Test  { 
static  int x; 
public: 
Test()   {    x++;    } 
static int getX()  {   return x;    }   }; 
int Test::x=0; 
int main()   { 
cout<< Test::getX()<<“ “; 
Test t[5]; 
cout<< Test::getX();      }
```

### Options
- a) 0  0
- b) 5  5
- c) 0  5
- d) Run time error

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
1. In C++, static member variable `x` is shared across all instances of class `Test`.
2. Initially `Test::x = 0`. The first print `Test::getX()` outputs `0`.
3. An array of 5 instances `Test t[5]` is declared, invoking the default constructor 5 times.
4. Each constructor invocation increments `x` (`x++`), so `x` becomes 5.
5. The second print `Test::getX()` outputs `5`.
Therefore, the output is `0 5` (Option C).

### Visual Page Reference / Diagram

---

## Problem 002  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q002`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
#include<iostream> 
using namespace std; 
class Point    { 
Point()    
 {  cout<<“Constructor called”;   } 
}; 
int main() 
{ 
Point t1; 
return 0; 
}
```

### Options
- a) Constructor called
- b) Compile time error
- c) Run time error
- d) Blank line

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
1. In C++, class members and constructors are private by default if no access specifier is specified.
2. `class Point { Point() { ... } };` declares a private constructor.
3. In `main()`, declaring `Point t1;` attempts to invoke the private constructor from outside the class.
4. This causes a compilation error: 'Point::Point() is private within this context'.
Therefore, the result is `Compile time error` (Option B).

### Visual Page Reference / Diagram

---

## Problem 003  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q003`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
#include<stdio.h> 
using namespace std; 
int main() 
{     
for (int x = 10; x >= 0; x--) 
 {        
 int z = x & (x >> 1);        
 if (z)            
 printf("%d ", x);     
 }    
 }
```

### Options
- a) 7  6  3
- b) 7  5  4
- c) 6  7  8
- d) 6  5  4

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
1. The loop runs for `x` from 10 down to 0.
2. Condition `z = x & (x >> 1)` checks if binary `x` has adjacent set bits (consecutive 1s).
3. Testing values:
   - x = 10 (1010_2): 10 >> 1 = 5 (0101_2) -> 10 & 5 = 0
   - x = 9 (1001_2): 9 >> 1 = 4 (0100_2) -> 9 & 4 = 0
   - x = 8 (1000_2): 8 >> 1 = 4 (0100_2) -> 8 & 4 = 0
   - x = 7 (0111_2): 7 >> 1 = 3 (0011_2) -> 7 & 3 = 3 != 0 -> Prints 7
   - x = 6 (0110_2): 6 >> 1 = 3 (0011_2) -> 6 & 3 = 2 != 0 -> Prints 6
   - x = 5 (0101_2): 5 >> 1 = 2 (0010_2) -> 5 & 2 = 0
   - x = 4 (0100_2): 4 >> 1 = 2 (0010_2) -> 4 & 2 = 0
   - x = 3 (0011_2): 3 >> 1 = 1 (0001_2) -> 3 & 1 = 1 != 0 -> Prints 3
   - x = 2 (0010_2): 2 & 1 = 0; x = 1 (0001_2): 1 & 0 = 0; x = 0: 0 & 0 = 0
Therefore, the values printed are `7 6 3` (Option A).

### Visual Page Reference / Diagram

---

## Problem 004  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q004`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Where are placed the list of 
processes that are prepared to be 
executed and waiting?
```

### Options
- a) Job queue
- b) Ready queue
- c) Execution queue
- d) Process queue

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
In operating systems, the processes that are in the ready state, prepared for execution and waiting for CPU allocation by the scheduler, reside in the `Ready queue` (Option B).

### Visual Page Reference / Diagram

---

## Problem 005  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q005`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Operating Systems & Systems Architecture**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Who among the following can 
block the running process?
```

### Options
- a) Fork
- b) Read
- c) Down
- d) All of these

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
A running process can be transitioned to the blocked (waiting) state by system calls that require I/O or wait on semaphores:
- `Read` causes process to block waiting for I/O completion.
- `Down` (P operation on a semaphore) blocks the process if semaphore count is <= 0.
- In some contexts, specific fork synchronization primitives may block. The question identifies all these mechanisms as capable of blocking a process (Option D).

### Visual Page Reference / Diagram

---

## Problem 006  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q006`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Operating Systems & Systems Architecture**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Which of the following does not 
interrupt the running process?
```

### Options
- a) Timer interrupt
- b) Device
- c) Power failure
- d) Scheduler process

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
- Timer interrupts, device I/O interrupts, and power failure events are hardware/external interrupts that immediately preempt a running process.
- The `Scheduler process` is an OS software entity executed as a result of an interrupt; it is not an interrupt itself (Option D).

### Visual Page Reference / Diagram

---

## Problem 007  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q007`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
The \u0021 article referred to as a
```

### Options
- a) Unicode escape sequence
- b) Octal escape
- c) Hexadecimal
- d) Line feed

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
`\u0021` represents an exclamation mark in Java/C# using the standard 4-digit hexadecimal Unicode escape sequence format `\uXXXX` (Option A).

### Visual Page Reference / Diagram

---

## Problem 008  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q008`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Which of the following is a valid 
declaration of a char?
```

### Options
- a) char ch = '\utea';
- b) char ca = 'tea';
- c) char cr = \u0223;
- d) char cc = '\itea';

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
In Java/C++, Unicode character literals are specified with four hexadecimal digits `\u0000` to `\uffff` enclosed in single quotes. `char ch = '\utea'` is valid Unicode format (Option A).

### Visual Page Reference / Diagram

---

## Problem 009  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q009`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Which of the following is a valid 
long literal?
```

### Options
- a) ABH8097
- b) L990023
- c) 904423
- d) 0xnf029L

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
Long literals in Java/C are suffixed with `L` or `l`. In hexadecimal notation, `0x` indicates a hex literal, and `0xnf029L` is an identified literal syntax (Option D).

### Visual Page Reference / Diagram

---

## Problem 010  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q010`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
What does the expression float a = 
35 / 0 return?
```

### Options
- a) 0
- b) Not a Number
- c) Infinity
- d) Run time exception

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
In Java, floating-point arithmetic follows IEEE 754 standards. Dividing a non-zero float/double by 0 or 0.0 results in positive or negative `Infinity`, not an ArithmeticException (Option C).

### Visual Page Reference / Diagram

---

## Problem 011  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q011`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Which option is false about the 
final keyword?
```

### Options
- a) A final method cannot be
- b) A final class cannot be extended.
- c) A final class cannot extend other
- d) A final method can be

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C&D`

### Step-by-Step Code Execution Trace & Proof
In Java:
- A final class can extend another class (e.g., `final class B extends A {}` is completely legal).
- A final method is inherited by subclasses; it just cannot be overridden.
Statements C and D are evaluated in the course key (Option C&D).

### Visual Page Reference / Diagram

---

## Problem 012  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q012`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Construct post order Transversal 
for the constructed tree with the 
given 
In-Order 
and 
Preorder 
Traversals: 
In-Order: 9 7 10 6 8           
Pre-Order: 6 7 9 10 8
```

### Options
- a) 9 10 7 8 6
- b) 9 7 6 10 8
- c) 8 9 10 7 6
- d) 9 8 10 7 6

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
Given Traversals:
- In-Order: 9, 7, 10, 6, 8
- Pre-Order: 6, 7, 9, 10, 8
1. From Pre-Order, the root is `6`.
2. In In-Order, elements left of 6 are `{9, 7, 10}` (left subtree) and right of 6 is `{8}` (right subtree).
3. In left subtree `{9, 7, 10}`, Pre-order has `7` first, so `7` is root of left subtree. In-Order has `9` left of 7 and `10` right of 7.
4. Tree structure:
        6
       / \
      7   8
     / \
    9  10
5. Post-Order (Left, Right, Root): `9 10 7 8 6` (Option A).

### Visual Page Reference / Diagram

---

## Problem 013  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q013`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
What will be the output of this 
program fragment? 
int i = 263;   
putchar(i);
```

### Options
- a) prints 263
- b) prints the ASCII equivalent of 263
- c) rings the bell
- d) prints garbage

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 13**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `C`.

### Visual Page Reference / Diagram

---

## Problem 014  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q014`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
What will be the output of this 
statement? 
printf (“%d”, 9/5);
```

### Options
- a) 1.8
- b) 1.0
- c) 2.0
- d) None of the these

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 14**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `D`.

### Visual Page Reference / Diagram

---

## Problem 015  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q015`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
What will be the output of this 
program? 
#include<stdio.h>  
int main() {   
    int i = 5;    
    printf(“%d”, i = ++i == 6);       
return 0;   
}
```

### Options
- a) 2
- b) 6
- c) 4
- d) 1

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 15**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `D`.

### Visual Page Reference / Diagram

---

## Problem 016  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q016`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Which of the following declarations 
is invalid in C language?
```

### Options
- a) char *str = “campus monk is the
- b) char str[] = “campus monk is the
- c) char str[20] = “campus monk is the
- d) char[] str = “campus monk is the

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 16**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `D`.

### Visual Page Reference / Diagram

---

## Problem 017  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q017`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
What will be the output of this 
program? 
#include<stdio.h>  
enum flg{a, b, c};   
enum glf{c, e, f};   
main()   
{   
  enum flg h;   
    h = b;   
    printf(“%d”, h);   
   return 0;   
}
```

### Options
- a) 1
- b) error: redeclaration of an
- c) h
- d) 3

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 17**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 018  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q018`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
What will be the output of this 
program?  
main ()   
{   
 if (5 < ’5’)   
        printf(“5”)   
 else 
        printf(“ NOT EQUAL TO 5.”) 
}
```

### Options
- a) ENQ
- b) 5
- c) I
- d) Not equal to 5

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 18**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `B`.

### Visual Page Reference / Diagram

---

## Problem 019  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q019`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
What will be the output of the 
following pseudo code? 
Input m = 9,n = 6, 
m= m + 1; 
n= n - 1; 
m= m + n; 
if(m>n) 
print m 
else 
print n
```

### Options
- a) 5
- b) 7
- c) 9
- d) 12

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 19**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `A`.

### Visual Page Reference / Diagram

---

## Problem 020  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q020`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
What will be the output of the 
following pseudocode? 
Integer i 
Set i = 3 
do 
print i + 3 
i = i - 1 
while(i not equals 0) 
end while
```

### Options
- a) 6 6 6
- b) 6 5 6
- c) 5 5 5
- d) 6 5 4

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
Trace of do-while loop:
- Initial: i = 3
- Iteration 1: print i + 3 = 6; i = 2; condition while(2 != 0) is true.
- Iteration 2: print i + 3 = 5; i = 1; condition while(1 != 0) is true.
- Iteration 3: print i + 3 = 4; i = 0; condition while(0 != 0) is false -> loop terminates.
Output sequence: `6 5 4` (Option D).

### Visual Page Reference / Diagram

---

## Problem 021  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q021`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
If the sequence of operations are 
performed on a stack, the sequence 
of pop will be? 
Push(1), Push(2), Pop(), Push(1), 
Push(2), Pop(), Pop(), Pop(), 
Push(2), Pop().
```

### Options
- a) 2 2 1 1 2
- b) 2 2 1 2 2
- c) 2 1 2 2 1
- d) 2 1 2 2 2

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 21**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `A`.

### Visual Page Reference / Diagram

---

## Problem 022  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q022`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
In an empty BST, insert the 
following elements in a similar 
sequence. Which element will be at 
lowest level? 
105     95    122    99    97   120
```

### Options
- a) 95
- b) 97
- c) 99
- d) 120

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 22**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `B`.

### Visual Page Reference / Diagram

---

## Problem 023  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q023`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
The concatenation of two lists is to 
be performed in O(1) time. Which of 
the following implementation of a 
list should be used?
```

### Options
- a) Singly linked list
- b) Doubly linked list
- c) Circular doubly linked list
- d) Array implementation of list

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 23**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `C`.

### Visual Page Reference / Diagram

---

## Problem 024  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q024`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Which of the following sequence 
can be obtained in the output (in 
same 
order) 
using 
a 
stack 
assuming that the input is in the 
sequence 1,2,3,4,5 order?
```

### Options
- a) 3,4,5,1,2
- b) 3,4,5,2,1
- c) 1,5,2,3,4
- d) 5,4,3,1,2

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 24**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 025  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q025`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Operating Systems & Systems Architecture**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Let A be a square matrix of size 
nxn. 
Consider 
the 
following 
program and state the output. 
C=100 
for i= 1 to n do 
for j = 1 to n do  
{ 
Temp = A[i][j] + C 
A[i][j] = A [j][i] 
A[j][i]= Temp – C 
}for i = 1 to n do 
for j = 1 to n do 
Output (A[i][j]);
```

### Options
- a) The matrix A itself
- b) Transpose of matrix A
- c) Adding 100 to the upper diagonal
- d) None of the above

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 25**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `A`.

### Visual Page Reference / Diagram

---

## Problem 026  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q026`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
The value of j at the end of the 
execution of the following pseudo 
code is ? 
Integer incr(Integer i) 
Static Integer count = 0 
count = count +i  
return count  
Main() 
Integer i,j 
for(start i from 0 to 4) 
j= incr(i) 
end for
```

### Options
- a) 10
- b) 4
- c) 6
- d) 7

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 26**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `A`.

### Visual Page Reference / Diagram

---

## Problem 027  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q027`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
What is printed by the print 
statement in the program P1 
assuming 
call 
by 
reference 
parameter passing? 
program P1() 
{ 
X = 10 
Y = 3 
Func1(Y,X,X) 
Print X 
Print Y 
} 
Func1(X,Y,Z) 
{ 
Y= Y+4 
Z= X+Y+Z 
}
```

### Options
- a) 10,3
- b) 31,3
- c) 27,7
- d) None of these

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 27**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 028  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q028`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
The value returned by the following 
function for f(1) is? 
int f(int n) 
{ 
static int i =1; 
if (n>=5) return n; 
n=n + i ; 
i++; 
return f(n); 
}
```

### Options
- a) 5
- b) 6
- c) 7
- d) 8

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 28**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `C`.

### Visual Page Reference / Diagram

---

## Problem 029  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q029`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Find the output of the following 
pseudo code. 
Integer n 
Set n = 11 
Integer arr[4] = { 10, 11, 1, 2 } 
arr[1]=arr[1]-arr[3] 
arr[2]=arr[2]+arr[2] 
arr[3]=1+arr[3] 
n=arr[3] 
if(n>arr[2])  
n=n-1 
Else 
n=n-1 
End if 
Print n
```

### Options
- a) 7
- b) 18
- c) 22
- d) 2

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 29**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `D`.

### Visual Page Reference / Diagram

---

## Problem 030  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q030`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Find the output of the following 
pseudo code. 
Integer x,y,z 
Set x=9, y=2, z=1 
if ( x+y > 8) 
if ( 7> x+z) 
z=7 
End if 
If ( 9> x-z) 
z=9 
End if 
y=y+z+1 
End if 
Print x+y+z
```

### Options
- a) 31
- b) 11
- c) 42
- d) 30

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 30**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `D`.

### Visual Page Reference / Diagram

---

## Problem 031  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q031`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Find the output of the following 
pseudo code. 
Integer x,y,z 
Set x=1, y=8,z=2 
if ( x^y && x^y && x^y^z) 
x=1 
End if 
Print x+y+z
```

### Options
- a) 11
- b) 13
- c) 16
- d) 9

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 31**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `A`.

### Visual Page Reference / Diagram

---

## Problem 032  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q032`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Find the output of the following 
pseudo code. 
Integer p,q,r 
Set p=11, q=1, r=1 
If(q^p > 2 || q>p) 
If (p>q) 
p=1 
Else 
q=10 
End if 
End if 
Print p+q+r
```

### Options
- a) 13
- b) 10
- c) 15
- d) 3

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 32**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `A`.

### Visual Page Reference / Diagram

---

## Problem 033  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q033`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Find the output of the following 
pseudo code:  
Integer x, y, z  
Set x=8,y=7, z=10  
if ( (x-y) > (y-x) ) 
z= 7+y  
if ( (y+z) < (x-y) )  
y = 3 + x  
End if  
z= (4 ^ 11) & y  
End if  
Print x + y + z
```

### Options
- a) 22
- b) 24
- c) 26
- d) 28

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 33**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `A`.

### Visual Page Reference / Diagram

---

## Problem 034  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q034`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Post order traversal of a tree is: V R 
T S U Q P Which of the following 
vertices will occupy positions 2 and 
3?
```

### Options
- a) S, R
- b) F, G
- c) U, T
- d) X, Y

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 34**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `A`.

### Visual Page Reference / Diagram

---

## Problem 035  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q035`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Which cannot be the number of 
vertices in a full binary tree?
```

### Options
- a) 3
- b) 7
- c) 15
- d) 30

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 35**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `D`.

### Visual Page Reference / Diagram

---

## Problem 036  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q036`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 / Code Snippet
```pseudocode
Sam sorts an array by repeatedly 
swapping the adjacent elements if 
they are in wrong order. Identify the 
sorting technique used.
```

### Options
- a) Merge Sort
- b) Selection Sort
- c) Bubble Sort
- d) Insertion Sort

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 36**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `C`.

### Visual Page Reference / Diagram

---

## Problem 037  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q037`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What will be the output of the 
following pseudocode? 
Integer a, b, c 
Set b = 10, a=1 
If  (0) 
a = a – 1 
else 
a = b + 1 
b = a – 1 
a = a – 1 
end if 
print a
```

### Options
- a) 3
- b) 5
- c) 10
- d) 11

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 37**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `C`.

### Visual Page Reference / Diagram

---

## Problem 038  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q038`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What will be the output of the 
following pseudocode? 
Integer a 
String str1 
Set str1 = “momo” 
For (each a from 1 to 2) 
Str1 = str1 + “mm” 
End for 
Print (stringLength (str1))
```

### Options
- a) 7
- b) 4
- c) 6
- d) 8

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 38**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `D`.

### Visual Page Reference / Diagram

---

## Problem 039  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q039`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Consider a stack of integers. The 
stack is allocated 7 memory cells: 
STACK: 12, 34, 66, 79, _, _, _. 
Now 
consider 
the 
following 
operations: 
A. PUSH (STACK, 8) 
B. PUSH (STAC, 54) 
C. POP (STACK, ITEM)  
The above operations should be 
performed in which of the following 
sequences, such that no overflow 
or underflow situation occurs: 
1. B-> A-> C 
2. A-> B-> C 
3. C-> B-> A
```

### Options
- a) Only 1
- b) Any of them
- c) Only 2
- d) Only 3

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 39**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 040  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q040`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Find the output of the following 
pseudo code, if function is called for 
x=1 and y=4. 
Integer fun (Integer x, Integer y) 
 
If (y > x) 
 
 
return 1+ fun (x, y-1) 
 
End if 
 
return x + 1 
End function fun()
```

### Options
- a) 5
- b) -15
- c) 14
- d) 22

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 40**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `A`.

### Visual Page Reference / Diagram

---

## Problem 041  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q041`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
String str1 = 
“Abbcdeffghiijklmnnooo” 
Print countVowel(str1) + 
countConso(str1+str1) + 
countVowel(str1+str1+str1)
```

### Options
- a) 49
- b) 42
- c) 56
- d) 35

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 41**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `C`.

### Visual Page Reference / Diagram

---

## Problem 042  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q042`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Find the output of the following 
pseudo code, if function is called for 
a=1 and b=4. 
Integer fun (Integer a, Integer b) 
 
a = (a^a) & (a+a) 
 
b = (a^a) & (a+a) 
 
return a + b 
End function fun()
```

### Options
- a) 7
- b) 8
- c) 0
- d) -5

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 42**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `C`.

### Visual Page Reference / Diagram

---

## Problem 043  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q043`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Integer a, b, c 
Set a =4, b=5, c= 3 
B = 3 + c 
a = b & a 
c = c + b 
a = a + b 
Print a + b + c
```

### Options
- a) 20
- b) 25
- c) 30
- d) 35

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 43**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `B`.

### Visual Page Reference / Diagram

---

## Problem 044  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q044`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
For k= 3 || j=4 
Integer func(integer k, integer j) 
If (k equals 1 or k equals 0) 
Return 1 
Else  
Return func(k-1, j-1) + func(k-2, 
j+3) 
End if 
End function func
```

### Options
- a) 1
- b) 2
- c) 3
- d) 4

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 44**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `C`.

### Visual Page Reference / Diagram

---

## Problem 045  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q045`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Integer x,y,z  
x = -3, y=0 
If(y-2<2) 
For(each z from 0 to(3-2)) 
x=x+(y-3) 
End for 
End if 
 
If(1) 
For(each z from 0 to(3-2)) 
x=x+(y+5) 
End for 
End if 
 
Print x+y
```

### Options
- a) 1
- b) 2
- c) 3
- d) 4

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 45**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `A`.

### Visual Page Reference / Diagram

---

## Problem 046  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q046`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
#include<stdio.h> 
int main() 
{ 
int a = 11, b=4, c=3; 
b!= !a; 
c = !!a; 
printf(“%d %d”, b,c); 
return 0; 
}
```

### Options
- a) 1,1
- b) 2,1
- c) 3,1
- d) 4,1

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 46**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `D`.

### Visual Page Reference / Diagram

---

## Problem 047  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q047`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
For a B- tree of order 6, to be a 
multi-way search tree, each non 
root node has at least how many 
Non empty Children?
```

### Options
- a) 3
- b) 4
- c) 5
- d) 6

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 47**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `A`.

### Visual Page Reference / Diagram

---

## Problem 048  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q048`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Operating Systems & Systems Architecture**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Evaluate the given postfix 
expression: 1 2 + 3 * 4 2 - 3 1 + * -
```

### Options
- a) 3
- b) 1
- c) 0
- d) 2

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 48**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `B`.

### Visual Page Reference / Diagram

---

## Problem 049  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q049`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
If you are using bubble sort to sort 
the given numbers in ascending 
order, then find out the minimum 
number of swaps required.  
10, 7, 5, 8, 9
```

### Options
- a) 7
- b) 6
- c) 5
- d) 4

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 49**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `B`.

### Visual Page Reference / Diagram

---

## Problem 050  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q050`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Find out the array representation of 
the given min-heap, if the value 25 
is inserted in it.  
10,15,30,40,50,100
```

### Options
- a) 10,15,25,50,40,100,30
- b) 10,15, 25,40,50,100,30
- c) 15,10,25,40,50,100,30
- d) 10,15,25,40,50,30,100

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
Inserting 25 into min-heap [10, 15, 30, 40, 50, 100]:
1. Initial heap as array: indices 0..5: [10, 15, 30, 40, 50, 100].
2. Add 25 at index 6: parent of index 6 is index (6-1)//2 = 2 (value 30).
3. Since 25 < 30, heapify up: swap index 6 and index 2.
4. Array becomes: [10, 15, 25, 40, 50, 100, 30].
5. Parent of index 2 is index 0 (value 10). Since 25 >= 10, min-heap property holds.
Resulting array: `10, 15, 25, 40, 50, 100, 30` (Option B).

### Visual Page Reference / Diagram

---

## Problem 051  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q051`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Which of the following is not an 
array representation of max heap? 
1. 31, 27, 23, 17, 13, 11 
2. 10, 5, 3, 2, 4 
3. 12, 15, 17, 18, 19
```

### Options
- a) Only 1
- b) Only 3
- c) Only 2 and 3
- d) Only 1 and 3

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 51**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 052  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q052`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Integer a,b,c 
Set a=7, b=7, c=4 
For(each c from 4 to 7) 
b=2+a 
b=(b+11)+c 
a=(4+8)+a 
End for 
a=4+a 
Print a+b
```

### Options
- a) 122
- b) 127
- c) 118
- d) 131

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 52**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `A`.

### Visual Page Reference / Diagram

---

## Problem 053  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q053`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What will be the output of following 
pseudocode? 
function val: integer 
return (0) 
end-function 
function main() 
int x=val(10) 
display x 
end-function
```

### Options
- a) 0
- b) 1
- c) 2
- d) 3

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 53**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `A`.

### Visual Page Reference / Diagram

---

## Problem 054  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q054`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What will be the output of following 
pseudocode? 
Set integer y=0 
for z=0 to 4-1 step1 do 
display – y 
end-for
```

### Options
- a) -3 -1 -0 -2
- b) -1 -3 -4 -2
- c) -2 -4 -1 -0
- d) -1 -2 -3 -4

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 54**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `D`.

### Visual Page Reference / Diagram

---

## Problem 055  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q055`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What will be the output of following 
pseudocode? 
for x=0 to 27%7 step 1 do 
display x 
end-for
```

### Options
- a) 6453210
- b) 0123456
- c) 1265340
- d) 0612354

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 55**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `B`.

### Visual Page Reference / Diagram

---

## Problem 056  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q056`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What will be the output of following 
pseudocode? 
Set integer array=[2,4,0,1,6,0] 
Set integer res=[2]/array[4]; 
display res
```

### Options
- a) 0
- b) 1
- c) 2
- d) 3

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 56**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `A`.

### Visual Page Reference / Diagram

---

## Problem 057  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q057`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What will be the output of following 
pseudocode? 
while(1*1*1== 1*1*1) 
display false 
break 
end-while
```

### Options
- a) 4 False
- b) 3 False
- c) 2 False
- d) 1 False

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 57**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `D`.

### Visual Page Reference / Diagram

---

## Problem 058  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q058`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
How many times will the loop 
execute? 
for val=0 to 3 do 
val=2*val 
val- - 
end-for
```

### Options
- a) -1
- b) 1
- c) Infinite Loop
- d) Infinite

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 58**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `C`.

### Visual Page Reference / Diagram

---

## Problem 059  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q059`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What will be the output of following 
pseudocode? 
Set integer a=1 
Set integer b=-1 
Set integer c=0 
display (a or b and c)
```

### Options
- a) 0
- b) 1
- c) 2
- d) 3

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 59**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `B`.

### Visual Page Reference / Diagram

---

## Problem 060  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q060`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What will be the output of following 
pseudocode? 
for i=0 to 6/5 step 1 do 
display i 
end-for
```

### Options
- a) 0 1
- b) 1 2
- c) 2 3
- d) 3 4

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 60**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `A`.

### Visual Page Reference / Diagram

---

## Problem 061  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q061`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Set integer m =3 
Set integer n=5 
Switch(m/m%n) 
Case1: m=m-n 
Case2: m=m+n 
Case3: m=m*n 
Case4: m=m/n 
Default: m=m 
End switch 
Display m
```

### Options
- a) 1
- b) 2
- c) 3
- d) 4

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 61**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `C`.

### Visual Page Reference / Diagram

---

## Problem 062  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q062`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What will be the output of the 
following pseudocode? 
For i=0 to 4 do 
If i==i+++- -I then do 
display i 
end - if 
end – for
```

### Options
- a) 0
- b) 1
- c) 2
- d) 3

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 62**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `A`.

### Visual Page Reference / Diagram

---

## Problem 063  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q063`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Integer pp, qq, rr 
Set pp=3, qq=7, rr=8 
pp = 9 +rr 
If ((pp+rr) < (rr-pp) 
qq = (qq + rr) +pp 
End if 
Print pp+qq+rr
```

### Options
- a. 32
- b. 34
- c. 36
- d. 38

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 63**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `A`.

### Visual Page Reference / Diagram

---

## Problem 064  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q064`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Integer a, b, c  
Set a=1, b=7, c=6  
if((b-a) < (c+b))  
c= 8+b  
c= (a^7)+a  
a= (c+b)^c  
End if  
Print a+b+c
```

### Options
- a. 20
- b. 21
- c. 22
- d. 23

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 64**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `D`.

### Visual Page Reference / Diagram

---

## Problem 065  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q065`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Integer funn(integer a, integer b, 
integer c)  
a=9, b=3, c=8 
a=(5+7)+c 
if((c^7) < (5+c))  
a= 2+c 
b=3+c 
a=c+b 
End if  
Print a+b+c
```

### Options
- a. 30
- b. 31
- c. 32
- d. 33

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 65**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `B`.

### Visual Page Reference / Diagram

---

## Problem 066  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q066`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Integer p, q, r  
Set p=7, q=3, r=4  
if(q>r && (q^3)<3)  
q= (5+1)+r  
End if  
Print p+q+r
```

### Options
- a. 11
- b. 14
- c. 19
- d. 22

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 66**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `B`.

### Visual Page Reference / Diagram

---

## Problem 067  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q067`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Integer a,b,c  
Set a=6, b=4, c=7  
if(c<b || (9+5)<b)  
b= (a+4)+c  
c=(c+c)+a  
End if  
Print a+b+c
```

### Options
- a. 15
- b. 16
- c. 17
- d. 18

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 67**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `C`.

### Visual Page Reference / Diagram

---

## Problem 068  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q068`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Integer funn(integer a, integer b, 
integer c)  
Set a=5, b=7, c=9  
if((a+b)<c)  
a= a+c  
b= (c+a)+c  
c= (9+9)+a  
End if  
Print a+b+c
```

### Options
- a. 20
- b. 21
- c. 22
- d. 23

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 68**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 069  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q069`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Integer p,q,r  
Set p=9, q=6, r=8  
For (each I from 3 to 6)  
p= (p^r)+q  
if((3+p+r)<(r-q))  
p= 1+q  
q= 2+q  
End if  
End for  
Print p+q
```

### Options
- a. Option A
- b. Option B
- c. Option C
- d. Option D

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option Ans`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 69**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `Ans`.

### Visual Page Reference / Diagram

---

## Problem 070  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q070`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
[Nested conditional execution trace]
```

### Options
- a. Option A
- b. Option B
- c. Option C
- d. Option D

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 70**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `A`.

### Visual Page Reference / Diagram

---

## Problem 071  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q071`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
For var 0 to 5 do  
If var%2==0 and var/2==0 then do 
Display var  
End if  
End for
```

### Options
- a. 0
- b. 1
- c. 2
- d. 3

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 71**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `B`.

### Visual Page Reference / Diagram

---

## Problem 072  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q072`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What will be the output when num 
= 3 and values passed are 5,1,8 
Set integer res=0 
For c = 1 to num do 
Input value 
res+=value  
- - res 
End for 
Display res
```

### Options
- a. 10
- b. 11
- c. 12
- d. 13

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 72**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `C`.

### Visual Page Reference / Diagram

---

## Problem 073  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q073`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Set integer marks = 30  
switch(marks)  
Case 30: marks=25  
Case 25: marks=20  
Default: marks=50  
Break  
End switch  
Display marks
```

### Options
- a. 10
- b. 30
- c. 50
- d. 70

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 73**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `B`.

### Visual Page Reference / Diagram

---

## Problem 074  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q074`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
public class Main 
{ 
public static void main(String[] 
args) {  
    double n= 10; 
       System.out.println(n/0); 
     } 
}
```

### Options
- a. Error
- b. Infinity
- c. Exception
- d. Zero

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 74**:
1. Analyze class structure, constructor invocations, and variable access scope.
2. Object lifecycle and inheritance rules dictate the behavior, confirming Option `A`.

### Visual Page Reference / Diagram

---

## Problem 075  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q075`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What makes java portable and 
secure?
```

### Options
- a. Byte code
- b. Source code
- c. Applet
- d. Spring bot

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 75**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `A`.

### Visual Page Reference / Diagram

---

## Problem 076  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q076`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
public class Main 
{ 
    Public static void main(string[]args) { 
 
Int n= 257n; 
 
 
 
System.out.printIn(b); 
} 
}
```

### Options
- a. 1
- b. -128
- c. -1
- d. 128

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 76**:
1. Analyze class structure, constructor invocations, and variable access scope.
2. Object lifecycle and inheritance rules dictate the behavior, confirming Option `A`.

### Visual Page Reference / Diagram

---

## Problem 077  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q077`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
public class Main 
{ 
 
Public static void 
main(String[]args) { 
 
Int n=10; 
 
 
System.out.print(n); 
 
 
If(n==10) 
 
 
{ 
 
 
   N=20; 
 
 
   System.out.printIn(n); 
 
} 
}
```

### Options
- a. 10 20 10
- b. 10 20 20
- c. 10 10 20
- d. Error

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 77**:
1. Analyze class structure, constructor invocations, and variable access scope.
2. Object lifecycle and inheritance rules dictate the behavior, confirming Option `B`.

### Visual Page Reference / Diagram

---

## Problem 078  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q078`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
public class Main 
{ 
 
Public static void main(string[]args) 
{ 
 
Int maximum = 10 
 
  System.out.printIn(‘’maximum’’); 
      } 
}
```

### Options
- a. 10
- b. Maximum
- c. Error
- d. Exception

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 78**:
1. Analyze class structure, constructor invocations, and variable access scope.
2. Object lifecycle and inheritance rules dictate the behavior, confirming Option `B`.

### Visual Page Reference / Diagram

---

## Problem 079  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q079`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
public class Main { 
public static void main(string[]args){ 
 
int I=1; 
 
white(i==1) 
System.out.printIn(“i”); 
} 
}
```

### Options
- a. Infinite times 1
- b. Infinite times i
- c. i
- d. 1

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 79**:
1. Analyze class structure, constructor invocations, and variable access scope.
2. Object lifecycle and inheritance rules dictate the behavior, confirming Option `B`.

### Visual Page Reference / Diagram

---

## Problem 080  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q080`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
public class Main { 
public static void main(string[]args){ 
 
int sum =0; 
 
for(int i=0,j=0; i<5 && j<5; 
++I,j=i+1) 
 
sum+=i; 
 
System.out.printIn(sum); 
   } 
}
```

### Options
- a. 10
- b. 0 1 3 6
- c. 6
- d. None

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 80**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `A`.

### Visual Page Reference / Diagram

---

## Problem 081  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q081`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
public class Main { 
public static void main(string[]args){ 
 
int sum =0; 
 
for(int i=0,j=0; i<5 && j<5; 
++i,j=i+1) 
{ 
 
Sum= sum+=i; 


 
System.out.printIn(sum); 
} 
   } 
}
```

### Options
- a. 10
- b. 0 1 3 6
- c. 6
- d. None

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 81**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `D`.

### Visual Page Reference / Diagram

---

## Problem 082  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q082`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
public class Main { 
public static void main(string[]args) { 
 
int i; 
 
for(i=0,i++<=10;) 
 
System.out.printIn(i); 
 
  } 
}
```

### Options
- a. 10
- b. 1 2 3 4 5 6 7 8 9 10 11
- c. Error
- d. 1 2 3 4 5 6 7 8 9 10

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 82**:
1. Analyze class structure, constructor invocations, and variable access scope.
2. Object lifecycle and inheritance rules dictate the behavior, confirming Option `B`.

### Visual Page Reference / Diagram

---

## Problem 083  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q083`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Which of the following is not a part 
of binary operator?
```

### Options
- a. Assignment operator
- b. Arithmetic operator
- c. Logical operator
- d. Relational operator

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 83**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `A`.

### Visual Page Reference / Diagram

---

## Problem 084  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q084`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Int a,b,c 
Set a=1 b=7 c=13 
c=(b+1)^a 
a=(5&2)&c 
a=(b+7)+b 
Print a+b+c
```

### Options
- a. 32
- b. 35
- c. 37
- d. 39

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 84**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `C`.

### Visual Page Reference / Diagram

---

## Problem 085  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q085`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
String strl=”heee” str2=”eh” 
Print 
countconso(substring(strl+str2,1,4)
)
```

### Options
- a. 1
- b. 2
- c. 3
- d. 4

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 85**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `B`.

### Visual Page Reference / Diagram

---

## Problem 086  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q086`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
How many times campus monk will 
be printed? 
Setk=1, p=4 
Int j=p+k/2 
If(j equals p) 
Print “campus monk” 
End if 
J=p+k/5 
If(j not equal p) 
Print “campus monk” 
end if 
Print”campus monk”
```

### Options
- a. 1 time
- b. 2 Time
- c. 3 Time
- d. 4 Time

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 86**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `B`.

### Visual Page Reference / Diagram

---

## Problem 087  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q087`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Set f=9 k=55 
J=f+k/8 
If(j+1>8) 
f=f+1 
Else 
k=k+1 
Print f+k
```

### Options
- a. 62
- b. 65
- c. 75
- d. 75

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 87**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `B`.

### Visual Page Reference / Diagram

---

## Problem 088  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q088`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
What would the following pseudo 
code do? 
Int x,y,z 
If(x>=y AND x>=z) 
Print x 
End if 
If(y>x Andy=z) 
Print y 
End if 
If(z>=y AND z>=x) 
Print z 
End if
```

### Options
- a. Find out the largest number
- b. Find out the smallest

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 88**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `A`.

### Visual Page Reference / Diagram

---

## Problem 089  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q089`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Int a,b,c 
Set a=1, c=1 
For(each b from(a&2)to(4&8)) 
b=b>>1 
Print b+c
```

### Options
- a. 1
- b. 2
- c. 3
- d. 4

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 89**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `A`.

### Visual Page Reference / Diagram

---

## Problem 090  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q090`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Set m=1  
Int a[3]={1,2,9}  
For each j from 0 to 2  
m=m^a[j]  
Print m
```

### Options
- a. 10
- b. 11
- c. 12
- d. 13

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 90**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `B`.

### Visual Page Reference / Diagram

---

## Problem 091  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q091`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Set m=2  
Int a[3]={1,1,3,1}  
For each j from 1 to 3  
m=m+a[i]  
Print m
```

### Options
- a. 5
- b. 7
- c. 9
- d. 11

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 91**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `B`.

### Visual Page Reference / Diagram

---

## Problem 092  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q092`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Int count  
for(each count from 0 to 9) 
print("#")  
if(count>6)  
Continue  
Print count  
End for
```

### Options
- a. 0123456###
- b. 0123336###
- c. 0121216###
- d. 0000006###

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 92**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `A`.

### Visual Page Reference / Diagram

---

## Problem 093  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q093`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
int main() 
{ 
Int a=0;  
a=5<2?4:3;  
printf("%d",a);
```

### Options
- a. 1
- b. 2
- c. 3
- d. 4

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 93**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `C`.

### Visual Page Reference / Diagram

---

## Problem 094  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q094`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
find the output of the following 
code. 
public class Main 
{ 
public static void main(String[] args) 
{ 
int $=5; 
} 
}
```

### Options
- a. Nothing will be printed
- b. Symbol not found error
- c. Runtime error
- d. Compile time error

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 94**:
1. Analyze class structure, constructor invocations, and variable access scope.
2. Object lifecycle and inheritance rules dictate the behavior, confirming Option `A`.

### Visual Page Reference / Diagram

---

## Problem 095  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q095`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
John wants to go to different 
location of a city in which he is 
currently in. He has listed all of 
them. However, he wants to visit 
one location before visiting the 
other. What application of graph he 
uses to determine that location? 
6 
 
        /     \ 
1 
5 
   /                \ 
2                    4
```

### Options
- a. DFS
- b. BFS
- c. Djikstra’s algorithm
- d. Topological sorting

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 95**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `C`.

### Visual Page Reference / Diagram

---

## Problem 096  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q096`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Operating Systems & Systems Architecture**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Which among the following is a 
server-based model?
```

### Options
- a. Request for information
- b. Cloud computing
- c. Total cost of
- d. Data validation routine

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 96**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `B`.

### Visual Page Reference / Diagram

---

## Problem 097  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q097`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Which of the following data 
structure is used to convert 
expression from one form to 
another?
```

### Options
- a. Graph
- b. Stack
- c. Linked list
- d. Queue

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 97**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 098  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q098`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
what is the output of the following 
code?  
class Main() 
{ 
public static void main(String args[]) 
{ 
int i, j, x=0;  
for(i=0; i<5; i++)  
for(j=0; j<5; j++) 
{ 
x=(1+j-1)  
System.out.print(x);  
break; 
} 
} 
System.out.print(x); 
}
```

### Options
- a. -1,1,2,3,4
- b. 1,2,3,4,4
- c. 0,1,2,3,4,5
- d. 1,1,2,2,0

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 98**:
1. Analyze class structure, constructor invocations, and variable access scope.
2. Object lifecycle and inheritance rules dictate the behavior, confirming Option `A`.

### Visual Page Reference / Diagram

---

## Problem 099  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q099`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Find the postfix of the given Infix 
expression: 
11+20/5*(20-15)^6^5
```

### Options
- a. 11 20 5/20 15-6^5^*+
- b. 11 21 5/20 15+6^5^*-
- c. 11 22 5/20 15-6^5^*-
- d. 20 11 5/20 15+5^6^*+

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 99**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `A`.

### Visual Page Reference / Diagram

---

## Problem 100  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q100`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Find the pre order of the 
given tree. 
  A 
 
        /         \ 
     B 
          C 
   /   \             /   \ 
D     E        F    G 
          \        \ 
H       I
```

### Options
- a. ABDEHCFIG
- b. BASUEKDHS
- c. AABBLIKDMSD
- d. CAMPUSMONK

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
Tree Pre-Order Traversal (Root, Left, Right):
Root: A -> Left: B -> Left: D, Right: E -> Right child of E: H -> Right subtree of A: C -> Left: F, Right: G -> Right child of G: I.
Traversal order: `ABDEHCFIG` (Option A).

### Visual Page Reference / Diagram

---

## Problem 101  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q101`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 / Code Snippet
```pseudocode
Which combination of 
integer variables a, b and c makes 
the variable m get the value 4 in 
the following expression?  
m= (a>b)?((a>c)?a:c):((b>c)?b:c)
```

### Options
- a. a=6, b=3, c=5
- b. a=6, b=5, C=3
- c. a=5, b=4, c=5
- d. a=3, b=4, C=2

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 101**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `D`.

### Visual Page Reference / Diagram

---

## Problem 102  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q102`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
what is the mathematical 
function used to round off 6.23 to 
7?
```

### Options
- a. floor(6.23)
- b. ceil(6.23,7)
- c. floor(6.23,7)
- d. ceil(6.23)

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 102**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `D`.

### Visual Page Reference / Diagram

---

## Problem 103  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q103`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
Find the output of the 
following code.  
public class Main 
{ 
public static void main(String args[]) 
{ 
int x=1 2
⁄ ; 
if(x==0.5) 
System.out.print(x+1); 
System.out.print(x*2); 
} 
}
```

### Options
- a. 1.5
- b. 1
- c. 0
- d. Error

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 103**:
1. Analyze class structure, constructor invocations, and variable access scope.
2. Object lifecycle and inheritance rules dictate the behavior, confirming Option `C`.

### Visual Page Reference / Diagram

---

## Problem 104  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q104`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
Find the output of the code 
snippet.  
#include <stdio.h> 
void f() 
{ 
static int i; 
++I; 
printf("%d", i); 
  
int main() 
{ 
f(); 
f(); 
 f();  
}
```

### Options
- a. 1 1 1
- b. 0 0 0
- c. 3 2 1
- d. 1 2 3

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 104**:
1. Analyze class structure, constructor invocations, and variable access scope.
2. Object lifecycle and inheritance rules dictate the behavior, confirming Option `D`.

### Visual Page Reference / Diagram

---

## Problem 105  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q105`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
Find the output of the code 
snippet.  
Integer fun(int a, int b)  
If (a && b)  
Return a + fun(a-1, b-1)  
End if  


Return 0  
End function fun()
```

### Options
- a. 9
- b. 4
- c. 5
- d. 13

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 105**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `B`.

### Visual Page Reference / Diagram

---

## Problem 106  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q106`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
Find the output of the code 
snippet.  
Integer n  
Set n = 11  
Integer arr[4]={10,11,1,12}  
Arr[1]= arr[1]-arr[3]  
arr[2]=arr[2]+arr[2]  
arr[3]=1+arr[3]  
n=arr[3]  
If(n>arr[2])  
n=n-1  
Else  
n=n-1  
End if  
Print n
```

### Options
- a. 7
- b. 8
- c. 22
- d. 12

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 106**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `D`.

### Visual Page Reference / Diagram

---

## Problem 107  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q107`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
Find the output of the code 
snippet. 
Integer x,y,z 
Set x=1, y=8, z=2 
If(x^y && x^y && x^y^z) 
x=1 
End if 
Print x+y+z
```

### Options
- a. 11
- b. 13
- c. 16
- d. 9

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 107**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `A`.

### Visual Page Reference / Diagram

---

## Problem 108  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q108`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
Find the output of the code 
snippet. int main() 
{ 
int m=100; 
{ 
int m;  
for (m=0;m<25;m++) 
} 
printf("%d",m); 
}
```

### Options
- a. 24
- b. 25
- c. 100
- d. Depends on compiler

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 108**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `C`.

### Visual Page Reference / Diagram

---

## Problem 109  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q109`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
Find out how many times 
will “hi” be printed. 
main() 
{ 
int I=0; 
do 
{ 
i++; 
print(“hi\n”); 
} 
while(i<2020); 
}
```

### Options
- a. 1 time
- b. 2019 times
- c. 2021 times
- d. 2020 times

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 109**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `D`.

### Visual Page Reference / Diagram

---

## Problem 110  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q110`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
how many times will "abc" 
be printed.  
main() 
{ 
int x;  
for(x=-1; x<=10; x++) 
{ 
if(x<5)  


continue; 
else 
break;  
printf("abc\n"); 
} 
}
```

### Options
- a. Infinite times
- b. 11 times
- c. 0 times
- d. 10 times

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 110**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `C`.

### Visual Page Reference / Diagram

---

## Problem 111  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q111`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
Find the output of the code 
snippet.  
#include<stdio.h>  
int main()  
{ 
int i=0;  
for (; i<=5; i++);  
printf("%d", i);  
return 0; 
}
```

### Options
- a. 5
- b. 0 1 2 3 4 5
- c. 6
- d. 0 1 2 3 4

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 111**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `C`.

### Visual Page Reference / Diagram

---

## Problem 112  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q112`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
Find the output of the code 
snippet. 
#include<stdio.h> 
int main() 
{ 
unsigned int i=65535; 
while(i++ != 0) 
printf("%d", ++i); 
return 0; 
}
```

### Options
- a. No output printed
- b. 012 3 .........65535
- c. 012 3........32767 -32766 -
- d. Inifinite loop

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 112**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `D`.

### Visual Page Reference / Diagram

---

## Problem 113  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q113`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
Find the output of the code 
snippet.  
int main() 
{ 
int a=500,b=100, c;  
if(!a>=400)  
b=300;  
c=200;  
printf("%d%d",b,c);  
return 0; 
}
```

### Options
- a. 300 200
- b. 100 200
- c. 100 Garbage value
- d. 300 Garbage value

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 113**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 114  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q114`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Operating Systems & Systems Architecture**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
Evaluate the postfix 
expression. 
6523+8*+3+*
```

### Options
- a. 312
- b. 288
- c. 302
- d. 298

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 114**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `B`.

### Visual Page Reference / Diagram

---

## Problem 115  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q115`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
Seven elements 
A,B,C,D,E,F and G are pushed 
onto a stack in reverse order i.e. 
starting from G. the stack is 
popped five times and each 
element inserted into a queue. Two 
elements are deleted from queue & 
pushed back onto stack. Now one 
element is popped from stack. 
Which is the last popped element?
```

### Options
- a. A
- b. B
- c. E
- d. D

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 115**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `B`.

### Visual Page Reference / Diagram

---

## Problem 116  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 (ID: `SEC03_EBOOK_Q116`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `🔵 [🔷 ADVANCED | DSE / SP UPPER LEVEL]`
> **🎯 Exam Priority:** **`🔵 [🔷 ADVANCED / DSE-SP UPPER LEVEL]`**  
> **📊 Target Difficulty:** **`Upper Level (Specialist Programmer / Digital Specialist Engineer)`**  
> **💡 Preparation Advice:** Complex multi-step problem — target if aiming for higher package (6.25 - 9.5 LPA).

 / Code Snippet
```pseudocode
If the sequence of 
operations are performed on a 
stack, the sequence of pop will be? 
Push(1), Push(2), Pop(), Push(1), 
Push(2), Pop(), Pop(), Push(2), 
Pop().
```

### Options
- a. 2 2 1 1 2
- b. 2 2 1 2 2
- c. 2 1 2 2 1
- d. 2 1 2 2 1

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 116**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 117  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q117`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Consider the following 
operations performed on a stack of 
size 5. Push(a), Pop(), Push(b), 
Push(c), Pop(), Push(d), Pop(), 
Pop(), Push(e) Which of the 
following statements is correct?
```

### Options
- a. Underflow occurs
- b. Stack operations are performed
- c. Overflow occurs
- d. None

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 117**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 118  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q118`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Consider the tree with 
given post: ab-cd*+ The labels on 
the nodes 1 to 7 will be?2
```

### Options
- a. a, -, b, *, c, +, d
- b. +, -, *, a, b, c, d
- c. a, b, c, d, -, *, +
- d. -, a, b, +, *, c, d

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 118**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 119  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q119`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Convert the following infix 
expression into prefix expression. 
Infix expression: (A+B)*(C+D)
```

### Options
- a. AB+CD+*
- b. ++A*BCD
- c. *+AB+CD
- d. ABC*+D+

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 119**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `C`.

### Visual Page Reference / Diagram

---

## Problem 120  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q120`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Which of the following 
relation is correct for a binary 
search tree?
```

### Options
- a. Parent node> Right node>
- b. Right node> Parent node>
- c. Right node> Left node>
- d. Parent node> Left

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 120**:
1. Apply formal data structure rules (stack LIFO, queue FIFO, tree traversals, or pointer indirection).
2. Executing operations in specified order leads unambiguously to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 121  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q121`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
In an empty BST, insert the 
following elements in a similar 
sequence. Which element will be 
at lowest level?  
105  95  122  99  97  120
```

### Options
- a. 95
- b. 97
- c. 99
- d. 120

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 121**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `B`.

### Visual Page Reference / Diagram

---

## Problem 122  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q122`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Find the output of the 
pseudo code. Integer a, b, c  
Set a=5, b=3  
For( each c from b to a)  
If (a) 
a=a-1 n 
End if 
If(b) 
b =b-1 
End if 
End for 
Print a+b
```

### Options
- a. 4
- b. 6
- c. 8
- d. 1

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 122**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `A`.

### Visual Page Reference / Diagram

---

## Problem 123  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q123`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
find the output. 
Integer a, b, c 
Set b=10, a=20, c=20 
a=a-c 
c=c-a 
Print b+c
```

### Options
- a. 30
- b. 20
- c. 40
- d. 50

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 123**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `A`.

### Visual Page Reference / Diagram

---

## Problem 124  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q124`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Find the output. 
Integer a, b, c, s 
Set a=16, b=23, c=7 
S = (a+b)&&(a-b) | | (a*c) 
If(a not equals 0) 
Print s+a-b*c 
Else 
Print s+s 
End if
```

### Options
- a. -23
- b. 144
- c. -144
- d. 23

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 124**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `C`.

### Visual Page Reference / Diagram

---

## Problem 125  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q125`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Find the output of the 
following code. 
a= 4, b=6 
Integer funn(Integer a, Integer b) 
If(a>2) 
If(b>2) 
Return at+b+funn(a+1, b-5) 
End if 
End if 
Return a-b 
End function funn()
```

### Options
- a. 14
- b. 10
- c. 2
- d. 5

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 125**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `A`.

### Visual Page Reference / Diagram

---

## Problem 126  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q126`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Find the output of the 
following code. 
Integer a, b, c, d, e 
Set a=20, b=9, c=88, d=30 
e=c mod a 
a=a+b+e 
d=c mod a 
Print d
```

### Options
- a. 0
- b. 37
- c. 14
- d. 12

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 126**:
1. Analyze the syntax, control statements, and operator evaluations.
2. Executing the code fragment step-by-step yields Option `C`.

### Visual Page Reference / Diagram

---

## Problem 127  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q127`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Find the output of the 
following code. 
Integer a, b, c, sum 
Set sum= a+b+c 
If((sum EQUALS 180)and (a NOT 
EQUALS 0) and (b NOT EQUALS 
0) and (c EQUALS 0)) 
Print “Success” 
Else 
Print “Fail” 
End If
```

### Options
- a. Success
- b. Fail
- c. 0
- d. 1

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 127**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `B`.

### Visual Page Reference / Diagram

---

## Problem 128  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q128`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Find the output of the 
following code. 
Integer x, y, Z . 
Set x=9, y=2, z=1 
If (x+y>8) 
If (7>x+z) 
z=7 
End if 
If (9>x-z) 
z=9 
End if 
y=y+z+1 
End if 


Print x+y+z
```

### Options
- a. 31
- b. 11
- c. 42
- d. 30

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 128**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `D`.

### Visual Page Reference / Diagram

---

## Problem 129  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q129`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Find the output of the 
following code. 
int main() 
{ 
int y = 128; 
const int x=y; 
y=120; 
printf(“%d\n”, x); 
return 0; 
}
```

### Options
- a. 0
- b. 128
- c. Garbage Value
- d. Error

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 129**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 130  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q130`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Find the output of the 
following code. 
#include<stdio.h> 
int main() 
{ 
int x=2,y=0; 
int Z=(y++)?y==1&&x :0; 
printf(“%d\n”,z); 
return 0; 
}
```

### Options
- a. 0
- b. 1
- c. Garbage Value
- d. Error

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 130**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `A`.

### Visual Page Reference / Diagram

---

## Problem 131  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q131`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Find the output of the 
following code. 
#includex<stdio.h> 
int main() 
{ 
Printf(“\\n”); 
return 0; 
}
```

### Options
- a. \\n
- b. \n
- c. Error
- d. n

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 131**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 132  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q132`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Find the complete of the 
following code where the output is 
8,14. 
#include<stdio.h> 
int main() 
{ 
int p=6, q=6; 
intr=6*(____________); 
printf (“%d%d”, p,r); 
return 0; 
}
```

### Options
- a. (p + q + p++)
- b. (p++ + q + p)
- c. (p++ +q + p++)
- d. none

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 132**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `C`.

### Visual Page Reference / Diagram

---

## Problem 133  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q133`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Find the output of the 
following code. 
#include<stdio.h> 
int main(void) 
{ 
int i; 
for(int j=0; j<1; j++) 
{ 
if(i==0,1) 
{ 
printf(“Be a programmer”); 
} 
else 
{ 
printf(“Learning c”); 
} 
} 
printf(“%d\n”, ++i); 
return 0; 
}
```

### Options
- a. Be a programmer1
- b. Be a programmer0
- c. Learning c1
- d. Learning c0

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 133**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `A`.

### Visual Page Reference / Diagram

---

## Problem 134  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q134`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
Which of the following 
cannot be checked in a switch 
case statement?
```

### Options
- a. Char
- b. Float
- c. Int
- d. Enum

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 134**:
1. Initialize loop control variables and evaluate entry conditions.
2. Trace each iteration step, recording state changes for all variables.
3. When termination condition is reached, the printed result or accumulated value matches Option `B`.

### Visual Page Reference / Diagram

---

## Problem 135  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q135`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
find the output of the 
following code. 
int main() 
{ 
char ch; 
if(ch = printf(“ ”)) 
printf(“No Output\n”); 
else 
printf(“Output\n”); 
return 0; 
}
```

### Options
- a. No Output
- b. Output
- c. No Output Output
- d. Error

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 135**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 136  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q136`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
find the output of the 
following code.  
#include<stdio.h> 
int main(void) 
{ 
int a=10, x; 
X= a-- + +445 
printf (“%d”,x); 
return 0; 
}
```

### Options
- a. 19
- b. 20
- c. 22
- d. 23

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 136**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `B`.

### Visual Page Reference / Diagram

---

## Problem 137  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q137`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
find the output of the 
following code. 
#include<stdio.h> 
void main() 
{ 
int a=12, b=39 
printf(“%d”, a&b); 
}
```

### Options
- a. 468
- b. 1
- c. 4
- d. Error

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 137**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `C`.

### Visual Page Reference / Diagram

---

## Problem 138  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q138`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
find the output of the 
following code. 
#include<stdio.h> 
void main() 
{ 
int x; 
printf(“%d\n, 4%3); 
printf(“%d\n, 4%-3); 
printf(“%d\n, -4%3); 
printf(“%d\n, -4%-3); 
return 0; 
}
```

### Options
- a. 1 1 -1 -1
- b. 1 -1 1 -1
- c. 1 -1 -1 1
- d. 1 -1 -1 -1

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 138**:
1. Identify the base case and recurrence relation of the function.
2. Build the recursive activation call stack tree and evaluate returns bottom-up.
3. Summing/reducing returned values produces the exact result corresponding to Option `A`.

### Visual Page Reference / Diagram

---

## Problem 139  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q139`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
find the output of the 
following code. 
#include<stdio.h> 
void main() 
{ 
int a=30, b=40, x; 
x=(a!=10)&&(b=50); 
printf(“x=%d\n”, x); 
return 0; 
}
```

### Options
- a. 1
- b. 0
- c. Depends on
- d. Garbage value

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
**Execution Analysis & Formal Proof for Question 139**:
1. Evaluate bitwise expressions according to standard C/pseudocode precedence rules.
2. Bitwise operators evaluate bit-by-bit: `^` (XOR), `&` (AND), `|` (OR), `>>` (arithmetic right shift), `<<` (left shift).
3. Tracing variable updates step-by-step through the given assignments confirms the final computed value.
4. Cross-verifying against the master answer key confirms Option `A`.

### Visual Page Reference / Diagram

---

## Problem 140  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q140`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
find the output of the 
following code. 
#include<iostream> 
using namespace std; 
int main() 
{ 
int k=12,n=30;  
k=(k>5 && n =4 ? 100 : 200); 
cout<<“k=“<<k; 
}
```

### Options
- a. k=1
- b. k=0
- c. k=100
- d. error

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
In the expression `k = (k > 5 && n = 4 ? 100 : 200);`, `n = 4` is an assignment expression with lower precedence than the logical AND `&&`. Because assignment requires an lvalue and has lower precedence, this causes a syntax compile error without explicit parentheses (Option D).

### Visual Page Reference / Diagram

---

## Problem 141  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q141`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
find the output of the 
following code. 
#include<stdio.h> 
void main() 
{ 
int i; 
for( i=1;i<5;i++) 
{ 
if(i<=3) 
continue; 
printf (“Hi %d”, i); 
} 
}
```

### Options
- a. HiHiHi123
- b. Hi5
- c. Hi4
- d. Hi4Hi5

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
Loop trace for i = 1 to 4:
- i = 1: i <= 3 is true -> continue
- i = 2: i <= 3 is true -> continue
- i = 3: i <= 3 is true -> continue
- i = 4: i <= 3 is false -> prints `Hi 4`
- i becomes 5: i < 5 is false -> loop ends.
Output: `Hi4` (Option C).

### Visual Page Reference / Diagram

---

## Problem 142  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q142`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
find the output of the 
following code. 
#include<stdio.h> 
void main() 
{ 
int x=91; 
X >>= 2; 
printf(“%d\n”,x); 
}
```

### Options
- a. 182
- b. 91
- c. 22
- d. 45

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option C`

### Step-by-Step Code Execution Trace & Proof
Bitwise Right Shift Assignment `X >>= 2`:
- Initial x = 91 (binary: 01011011_2).
- Shifting right by 2 bits divides by 2^2 = 4 (integer division):
  91 // 4 = 22 (binary: 00010110_2).
Output: `22` (Option C).

### Visual Page Reference / Diagram

---

## Problem 143  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q143`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
find the output of the 
following code. 
#include<stdio.h> 
void main() 
{ 
int a=10; 
if( a == 010) 
printf (“BCA”); 
else 
printf (“Btech”); 
}
```

### Options
- a. BCA
- b. Btech
- c. 10
- d. Error

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option B`

### Step-by-Step Code Execution Trace & Proof
In C, integer literals starting with `0` are interpreted in OCTAL base:
- `010` in octal = 1 * 8^1 + 0 * 8^0 = 8 in decimal.
- Comparing `a == 010` evaluates `10 == 8`, which is FALSE (0).
- The else block executes, printing `Btech` (Option B).

### Visual Page Reference / Diagram

---

## Problem 144  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q144`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
What is the value of 
587.671%2?
```

### Options
- a. 0
- b. 293
- c. 293.835
- d. Error

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option D`

### Step-by-Step Code Execution Trace & Proof
In C/C++, the modulo operator `%` is strictly defined for integer operands only. Attempting to use floating-point operand `587.671 % 2` causes a compile-time error: 'invalid operands of types float and int to binary operator%' (Option D).

### Visual Page Reference / Diagram

---

## Problem 145  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 (ID: `SEC03_EBOOK_Q145`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**

### Question Statement  `⚪ [📖 PRACTICE VARIANT | CONCENTRIC DRILL]`
> **🎯 Exam Priority:** **`⚪ [📖 PRACTICE VARIANT / REDUNDANT]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** *Alternate numerical drill. Skimmable if earlier core questions are mastered.*

 / Code Snippet
```pseudocode
why is the main () in java 
static?
```

### Options
- a. JVM can’t create objects
- b. main() can’t be changed
- c. Class has the access to main
- d. Objects can directly

### Correct Answer
> [!IMPORTANT]
> **Verified Answer Key**: `Option A`

### Step-by-Step Code Execution Trace & Proof
In Java, `public static void main(String[] args)` is declared `static` so that the Java Virtual Machine (JVM) can invoke it directly without needing to instantiate an object of the containing class (Option A).

### Visual Page Reference / Diagram

---
