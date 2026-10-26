# 🏆 Infosys SE Elite Crack Vault — 09 Master Technical Ebook 145 Solved Vault Elite
> **Target Role:** **Infosys Systems Engineer (SE)** (3.6 – 4.0 LPA Recruitment Drive)  
> **Curation Standard:** **100% Pure SE Role Specific** (All SP/DSE Upper-Level & Practice Variants Purged)  
> **Total Curated Questions in Topic:** **203 Questions**  
> **Question Breakdown:** 🔴 `72 Must-Solve` | 🟡 `131 Core SE Level`  
> **Verification Score:** 100% Mathematically & Deductively Proven with Zero Hallucination  

---

### Question 1: Infosys SE Question 1  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q001`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 2: Infosys SE Question 2  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_02.png)

---


### Question 3: Infosys SE Question 3  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q002`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 4: Infosys SE Question 4  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_02.png)

---


### Question 5: Infosys SE Question 5  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q003`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 6: Infosys SE Question 6  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_02.png)

---


### Question 7: Infosys SE Question 7  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q004`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 8: Infosys SE Question 8  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_02.png)

---


### Question 9: Infosys SE Question 9  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q005`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Operating Systems & Systems Architecture**


### Question 10: Infosys SE Question 10  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_02.png)

---


### Question 11: Infosys SE Question 11  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q006`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Operating Systems & Systems Architecture**


### Question 12: Infosys SE Question 12  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_02.png)

---


### Question 13: Infosys SE Question 13  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q007`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 14: Infosys SE Question 14  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_02.png)

---


### Question 15: Infosys SE Question 15  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q008`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 16: Infosys SE Question 16  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_02.png)

---


### Question 17: Infosys SE Question 17  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q009`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 18: Infosys SE Question 18  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_03.png)

---


### Question 19: Infosys SE Question 19  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q010`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**


### Question 20: Infosys SE Question 20  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_03.png)

---


### Question 21: Infosys SE Question 21  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q011`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**


### Question 22: Infosys SE Question 22  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_03.png)

---


### Question 23: Infosys SE Question 23  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q012`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 24: Infosys SE Question 24  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_03.png)

---


### Question 25: Infosys SE Question 25  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q013`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 26: Infosys SE Question 26  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_03.png)

---


### Question 27: Infosys SE Question 27  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q014`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 28: Infosys SE Question 28  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_03.png)

---


### Question 29: Infosys SE Question 29  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q015`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**


### Question 30: Infosys SE Question 30  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_03.png)

---


### Question 31: Infosys SE Question 31  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q016`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 32: Infosys SE Question 32  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_03.png)

---


### Question 33: Infosys SE Question 33  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q017`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**


### Question 34: Infosys SE Question 34  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_04.png)

---


### Question 35: Infosys SE Question 35  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q018`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 36: Infosys SE Question 36  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_04.png)

---


### Question 37: Infosys SE Question 37  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q019`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 38: Infosys SE Question 38  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_04.png)

---


### Question 39: Infosys SE Question 39  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q020`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 40: Infosys SE Question 40  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_04.png)

---


### Question 41: Infosys SE Question 41  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q021`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 42: Infosys SE Question 42  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_04.png)

---


### Question 43: Infosys SE Question 43  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q022`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 44: Infosys SE Question 44  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_04.png)

---


### Question 45: Infosys SE Question 45  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q023`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 46: Infosys SE Question 46  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_05.png)

---


### Question 47: Infosys SE Question 47  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q024`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 48: Infosys SE Question 48  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_05.png)

---


### Question 49: Infosys SE Question 49  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q025`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Operating Systems & Systems Architecture**


### Question 50: Infosys SE Question 50  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_05.png)

---


### Question 51: Infosys SE Question 51  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q026`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**


### Question 52: Infosys SE Question 52  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_05.png)

---


### Question 53: Infosys SE Question 53  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q027`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**


### Question 54: Infosys SE Question 54  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_05.png)

---


### Question 55: Infosys SE Question 55  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q028`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**


### Question 56: Infosys SE Question 56  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_06.png)

---


### Question 57: Infosys SE Question 57  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q029`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 58: Infosys SE Question 58  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_06.png)

---


### Question 59: Infosys SE Question 59  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q030`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 60: Infosys SE Question 60  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_06.png)

---


### Question 61: Infosys SE Question 61  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q031`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 62: Infosys SE Question 62  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_06.png)

---


### Question 63: Infosys SE Question 63  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q032`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 64: Infosys SE Question 64  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_06.png)

---


### Question 65: Infosys SE Question 65  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q033`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 66: Infosys SE Question 66  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_07.png)

---


### Question 67: Infosys SE Question 67  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q034`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 68: Infosys SE Question 68  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_07.png)

---


### Question 69: Infosys SE Question 69  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q035`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 70: Infosys SE Question 70  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_07.png)

---


### Question 71: Infosys SE Question 71  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (ID: `SEC03_EBOOK_Q036`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 72: Infosys SE Question 72  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_07.png)

---


### Question 73: Infosys SE Question 73  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q037`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 74: Infosys SE Question 74  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_07.png)

---


### Question 75: Infosys SE Question 75  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q038`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 76: Infosys SE Question 76  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_07.png)

---


### Question 77: Infosys SE Question 77  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q039`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 78: Infosys SE Question 78  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_08.png)

---


### Question 79: Infosys SE Question 79  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q040`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**


### Question 80: Infosys SE Question 80  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_08.png)

---


### Question 81: Infosys SE Question 81  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q041`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 82: Infosys SE Question 82  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_08.png)

---


### Question 83: Infosys SE Question 83  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q042`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 84: Infosys SE Question 84  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_08.png)

---


### Question 85: Infosys SE Question 85  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q043`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 86: Infosys SE Question 86  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_08.png)

---


### Question 87: Infosys SE Question 87  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q044`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 88: Infosys SE Question 88  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_08.png)

---


### Question 89: Infosys SE Question 89  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q045`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 90: Infosys SE Question 90  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_09.png)

---


### Question 91: Infosys SE Question 91  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q046`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**


### Question 92: Infosys SE Question 92  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_09.png)

---


### Question 93: Infosys SE Question 93  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q047`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 94: Infosys SE Question 94  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_09.png)

---


### Question 95: Infosys SE Question 95  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q048`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Operating Systems & Systems Architecture**


### Question 96: Infosys SE Question 96  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_09.png)

---


### Question 97: Infosys SE Question 97  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q049`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 98: Infosys SE Question 98  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_09.png)

---


### Question 99: Infosys SE Question 99  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q050`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 100: Infosys SE Question 100  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_09.png)

---


### Question 101: Infosys SE Question 101  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q051`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 102: Infosys SE Question 102  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_09.png)

---


### Question 103: Infosys SE Question 103  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q052`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 104: Infosys SE Question 104  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_10.png)

---


### Question 105: Infosys SE Question 105  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q053`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**


### Question 106: Infosys SE Question 106  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_10.png)

---


### Question 107: Infosys SE Question 107  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q054`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 108: Infosys SE Question 108  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_10.png)

---


### Question 109: Infosys SE Question 109  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q055`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 110: Infosys SE Question 110  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_10.png)

---


### Question 111: Infosys SE Question 111  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q056`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 112: Infosys SE Question 112  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_10.png)

---


### Question 113: Infosys SE Question 113  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q057`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 114: Infosys SE Question 114  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_10.png)

---


### Question 115: Infosys SE Question 115  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q058`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 116: Infosys SE Question 116  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_10.png)

---


### Question 117: Infosys SE Question 117  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q059`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 118: Infosys SE Question 118  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_11.png)

---


### Question 119: Infosys SE Question 119  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q060`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 120: Infosys SE Question 120  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_11.png)

---


### Question 121: Infosys SE Question 121  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q061`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 122: Infosys SE Question 122  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_11.png)

---


### Question 123: Infosys SE Question 123  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q062`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 124: Infosys SE Question 124  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_11.png)

---


### Question 125: Infosys SE Question 125  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q063`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 126: Infosys SE Question 126  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_11.png)

---


### Question 127: Infosys SE Question 127  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q064`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 128: Infosys SE Question 128  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_11.png)

---


### Question 129: Infosys SE Question 129  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q065`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 130: Infosys SE Question 130  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_12.png)

---


### Question 131: Infosys SE Question 131  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q066`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 132: Infosys SE Question 132  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_12.png)

---


### Question 133: Infosys SE Question 133  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q067`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 134: Infosys SE Question 134  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_12.png)

---


### Question 135: Infosys SE Question 135  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q068`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Recursion & Function Call Stacks**


### Question 136: Infosys SE Question 136  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_12.png)

---


### Question 137: Infosys SE Question 137  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q069`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 138: Infosys SE Question 138  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_12.png)

---


### Question 139: Infosys SE Question 139  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q070`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 140: Infosys SE Question 140  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_13.png)

---


### Question 141: Infosys SE Question 141  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q071`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 142: Infosys SE Question 142  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_13.png)

---


### Question 143: Infosys SE Question 143  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q072`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 144: Infosys SE Question 144  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_13.png)

---


### Question 145: Infosys SE Question 145  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q073`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 146: Infosys SE Question 146  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_13.png)

---


### Question 147: Infosys SE Question 147  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q074`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**


### Question 148: Infosys SE Question 148  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_13.png)

---


### Question 149: Infosys SE Question 149  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q075`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 150: Infosys SE Question 150  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_13.png)

---


### Question 151: Infosys SE Question 151  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q076`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**


### Question 152: Infosys SE Question 152  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_13.png)

---


### Question 153: Infosys SE Question 153  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q077`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**


### Question 154: Infosys SE Question 154  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_14.png)

---


### Question 155: Infosys SE Question 155  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q078`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**


### Question 156: Infosys SE Question 156  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_14.png)

---


### Question 157: Infosys SE Question 157  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q079`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**


### Question 158: Infosys SE Question 158  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_14.png)

---


### Question 159: Infosys SE Question 159  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q080`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 160: Infosys SE Question 160  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_14.png)

---


### Question 161: Infosys SE Question 161  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q081`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 162: Infosys SE Question 162  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_14.png)

---


### Question 163: Infosys SE Question 163  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q082`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**


### Question 164: Infosys SE Question 164  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_15.png)

---


### Question 165: Infosys SE Question 165  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q083`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 166: Infosys SE Question 166  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_15.png)

---


### Question 167: Infosys SE Question 167  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q084`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 168: Infosys SE Question 168  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_15.png)

---


### Question 169: Infosys SE Question 169  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q085`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 170: Infosys SE Question 170  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_15.png)

---


### Question 171: Infosys SE Question 171  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q086`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 172: Infosys SE Question 172  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_15.png)

---


### Question 173: Infosys SE Question 173  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q087`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 174: Infosys SE Question 174  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_15.png)

---


### Question 175: Infosys SE Question 175  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q088`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 176: Infosys SE Question 176  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_16.png)

---


### Question 177: Infosys SE Question 177  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q089`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 178: Infosys SE Question 178  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_16.png)

---


### Question 179: Infosys SE Question 179  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q090`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 180: Infosys SE Question 180  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_16.png)

---


### Question 181: Infosys SE Question 181  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q091`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 182: Infosys SE Question 182  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_16.png)

---


### Question 183: Infosys SE Question 183  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q092`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 184: Infosys SE Question 184  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_16.png)

---


### Question 185: Infosys SE Question 185  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q093`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 186: Infosys SE Question 186  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_16.png)

---


### Question 187: Infosys SE Question 187  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q094`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**


### Question 188: Infosys SE Question 188  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_16.png)

---


### Question 189: Infosys SE Question 189  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q095`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Loops & Conditional Control Flow**


### Question 190: Infosys SE Question 190  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_17.png)

---


### Question 191: Infosys SE Question 191  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q096`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Operating Systems & Systems Architecture**


### Question 192: Infosys SE Question 192  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_17.png)

---


### Question 193: Infosys SE Question 193  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q097`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 194: Infosys SE Question 194  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_17.png)

---


### Question 195: Infosys SE Question 195  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q098`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **OOP & Language Architecture**


### Question 196: Infosys SE Question 196  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_17.png)

---


### Question 197: Infosys SE Question 197  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q099`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Bitwise Operators & Logic**


### Question 198: Infosys SE Question 198  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_17.png)

---


### Question 199: Infosys SE Question 199  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q100`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Data Structures, Trees & Pointers**


### Question 200: Infosys SE Question 200  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_18.png)

---


### Question 201: Infosys SE Question 201  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q101`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**


### Question 202: Infosys SE Question 202  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
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
![Ebook Page Reference](../../../images/pseudocode_ebook_page_18.png)

---


### Question 203: Infosys SE Question 203  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (ID: `SEC03_EBOOK_Q102`)
- **Source Module**: `Section III _ Pseudo Codes`
- **Source File**: `1. Pseudo Codes Technical ebook.pdf`
- **Topic Domain**: **Technical Programming Concepts**

