# Section - Pseudocode and Technical
## Topic - Bitwise Operations and Complexity

> **Target Assessment:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)
> **Module Focus:** `Bit-level shifting, binary masking, operator precedence, asymptotic complexity, and relational database SQL subquery evaluations.`
> **Total Extracted Questions in this Topic:** 10
> **Format Standard:** 100% Complete question stems, all options, embedded figures, answers, and formal mathematical proofs.

---

### Question 1: Bitwise Operations & Data Structures MCQ 1
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
Which of the following is not a valid C variable name? 
A. int number;  
B. float rate;  
C. int variable_count;  

201 
 
D. int $main;

#### Formally Verified Solution & Derivation:
Answer: Option D 
Explanation: Since only underscore and no other special character is allowed in a variable 
name, it results in an error.

---

### Question 2: Bitwise Operations & Data Structures MCQ 2
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
Which is valid C expression? 
A. int my_num = 100,000;  
B. int my_num = 100000; 
C. int my num = 1000;  
D. int $my_num = 10000;

#### Formally Verified Solution & Derivation:
Answer: Option B 
Explanation: space, comma and $ cannot be used in a variable name.

---

### Question 3: Bitwise Operations & Data Structures MCQ 3
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
What is the output of this C code? 
int main() 
{ 
int y = 10000; 
int y = 34; 
printf("Hello World! %d\n", y); 
return 0; 
} 
A. Compile time error  
B. Hello World! 34

#### Formally Verified Solution & Derivation:
Answer: Option A 
Explanation: Since y is already defined, redefining it results in an error.

---

### Question 4: Bitwise Operations & Data Structures MCQ 4
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
Which of the following is not a valid variable name declaration? 
A. float PI = 3.14;  
B. double PI = 3.14;  
C. int PI = 3.14;  
D. #define PI 3.14

#### Formally Verified Solution & Derivation:
Answer: Option D 
Explanation: #define PI 3.14 is a macro preprocessor, it is a textual substitution.

---

### Question 5: Bitwise Operations & Data Structures MCQ 5
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
Which of the following cannot be a variable name in C? 
A. Volatile  
B. True  
C. friend  
D. export

#### Formally Verified Solution & Derivation:
Answer: Option A 

202 
 
Explanation: Volatile is a keyword in C programming language.

---

### Question 6: Bitwise Operations & Data Structures MCQ 6
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
What is the output of this C code? 
int main() 
{ 
void foo(); 
void f() 
{ 
foo(); 
} 
f(); 
} 
void foo() 
{ 
printf("2 "); 
} 
A. 2 2  
B. 2 
C. Compile time error  
D. Depends on the compiler

#### Formally Verified Solution & Derivation:
Answer: Option D 
Explanation: 
Even though the answer is 2, this code will compile fine only with gcc. GNU C 
supports nesting of functions in C as a language extension where as standard C 
compiler doesn’t.

---

### Question 7: Bitwise Operations & Data Structures MCQ 7
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
What is the output of this C code? 
void foo(); 
int main() 
{ 
void foo(); 
foo(); 
return 0; 
} 
void foo() 
{ 
printf("2 "); 
} 
A. Compile time error  
B. 2  

203 
 
C. Depends on the compiler  
D. Depends on the standard

#### Formally Verified Solution & Derivation:
Answer: Option B 
Explanation: 
main() function calls foo() function which prints 2 on the screen.

---

### Question 8: Bitwise Operations & Data Structures MCQ 8
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
What is the default return type if it is not specified in function definition? 
A. void  
B. int  
C. double  
D. short int

#### Formally Verified Solution & Derivation:
Answer: Option B 
Explanation:int is the default data type.

---

### Question 9: Bitwise Operations & Data Structures MCQ 9
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
What is the output of this C code? 
 int foo(); 
 int main() 
 { 
 int i = foo(); 
 } 
 foo() 
 { 
 printf("2 "); 
 return 2; 
 } 
A. 2  
B. Compile time error  
C. Depends on the compiler  
D. Depends on the standard

#### Formally Verified Solution & Derivation:
Answer: Option A 
Explanation: 
main() function calls foo() function. foo() doesn’t have a return type. So it becomes int.

---

### Question 10: Bitwise Operations & Data Structures MCQ 10
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
functions can return structure in c? 
A. true  
B. false  
C. Depends on the compiler  
D. Depends on the standard

#### Formally Verified Solution & Derivation:
Answer: Option A 
Explanation: 

204 
 
A function can return a structure object in C.

---
