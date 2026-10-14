# Section - Pseudocode and Technical
## Topic - Pseudocode Execution

> **Target Assessment:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)
> **Module Focus:** `Line-by-line compiler execution, macro preprocessor expansions (#define, #pragma), static/extern scopes, pointer dereferences, and recursion stack traces.`
> **Total Extracted Questions in this Topic:** 10
> **Format Standard:** 100% Complete question stems, all options, embedded figures, answers, and formal mathematical proofs.

---

### Question 1: C Execution & Preprocessor Directive MCQ 1
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
Property which allows to produce different executable for different platforms 
in C is called? 
A. File inclusion  
B. Selective inclusion 
C. Conditional compilation  
D. Recursive macros

#### Formally Verified Solution & Derivation:
Answer: Option C 
Explanation: Conditional compilation is the process of defining compiler directives that 
cause different parts of the code to be compiled, and others to be ignored. This technique 
can be used in a cross-platform development scenario to specify parts of the code that are 
compiled specific to a particular platform.

---

### Question 2: C Execution & Preprocessor Directive MCQ 2
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
C preprocessors can have compiler specific features.  
A. true  
B. false  
C. Depends on the standard  
D. Depends on the platform

#### Formally Verified Solution & Derivation:
Answer: Option A 
Explanation: C preprocessors can have compiler specific features. Explanation: #pragma is 
compiler specific feature. The ‘#pragma’ directive is the method specified by the C standard 
for providing additional information to the compiler, beyond what is conveyed in the 
language itself.

---

### Question 3: C Execution & Preprocessor Directive MCQ 3
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
Preprocessor feature that supply line numbers and file names to compiler is 
called? 
A. Selective inclusion  
B. macro substitution  
C. Concatenation  
D. Line control

#### Formally Verified Solution & Derivation:
Answer: Option D 
Explanation: The C preprocessor informs the C compiler of the location in your source code 
where each token came from. Presently, this is just the file name and line number. All the 
tokens resulting from macro expansion are reported as having appeared on the line of the 
source file where the outermost macro was used. We intend to be more accurate in the 
future. 
 
 
PREVIOUS YEAR MCQ’s TCS NQT 

196

---

### Question 4: C Execution & Preprocessor Directive MCQ 4
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
Which of the following are C preprocessors? 
A. #ifdef  
B. #define  
C. #endif  
D. All of the mentioned.

#### Formally Verified Solution & Derivation:
Answer: Option D 
Explanation: A,B & C are valid pre-processors which does specific task.

---

### Question 5: C Execution & Preprocessor Directive MCQ 5
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
The C-preprocessors are specified with _________symbol. 
A. #  
B. $  
C. " "  
D. None of the mentioned.

#### Formally Verified Solution & Derivation:
Answer: Option A 
Explanation: # symbol is used for preprocessors. Ex.#include, #define, etc.

---

### Question 6: C Execution & Preprocessor Directive MCQ 6
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
What is the output of this C code? 
#define a 20 
int main() 
{ 
const int a = 50; 
printf("a = %d\n", a); 
} 
A. a = 50  
B. a = 20  
C. Run time error  
D. Compilation Error

#### Formally Verified Solution & Derivation:
Answer: Option D 
Explanation: The #define substitutes a with 20 leaving no identifier and hence compilation 
error. 
Compilation Error: expected identifier or ‘(’ before numeric constant

---

### Question 7: C Execution & Preprocessor Directive MCQ 7
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
What is the output of this C code? 
int main() 
{ 
int var = 010; 
printf("%d", var); 
} 
A. 2  
B. 8  

197 
 
C. 9  
D. 10

#### Formally Verified Solution & Derivation:
Answer: Option B 
Explanation: 010 is octal representation of 8.

---

### Question 8: C Execution & Preprocessor Directive MCQ 8
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
enum types are processed by? 
A. Compiler  
B. Preprocessor  
C. Linker  
D. Assembler

#### Formally Verified Solution & Derivation:
Answer: Option A 
Explanation: Compilers process the entire code which includes enum also.

---

### Question 10: C Execution & Preprocessor Directive MCQ 10
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
What is the output of this C code? 
int main() 
{ 
const int a; 
a = 32; 
printf("a is %d", a); 
return 0; 
} 
A. a is 32  
B. Compile time error   
C. Run time error  
D. none

#### Formally Verified Solution & Derivation:
Answer: Option B 
Explanation: 
Since the constant variable has to be declared and defined at the same time, not 
doing it results in an error.

---

### Question 11: C Execution & Preprocessor Directive MCQ 11
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP)  
**Source Document:** `Technical & Coding MCQs Compendium`  

#### Question Stem & Answer Options:
Comment on the output of this C code? 
int const print() 
{ 
printf("AllIndiaExams.in"); 
www.freshersnow.com 
return 0; 
} 
void main() 

198 
 
{ 
print(); 
} 
A. AllIndiaExams.in is printed infinite number of times  
B. AllIndiaExams.in 
C. Runtime Error  
D. complilation 
error

#### Formally Verified Solution & Derivation:
Answer: Option B 
Explanation: 
The the function is called and the output is printed 
 
12. Does this compile without error? 
int main() 
{ 
int k; 
{ 
int k; 
for (k = 0; k < 10; k++); 
} 
} 
A. Yes  
B. No  
C. Depends on the compiler 
D. Depends on the C standard implemented by compilers 
Answer: Option A 
Explanation: 
There can be blocks inside block and within blocks variables have only block scope. 
Output: 
 
13. What is the output of this C code? 
void main() 
{ 
int k = 4; 
float k = 4; 
printf("%d", k) 
} 
A. Compile time error  
B. 4  
C. 4.0000000  

199 
 
D. 4.4 
Answer: Option A 
Explanation: 
Since the variable k is defined both as integer and as float, it results in an error. 
 
14. A variable declared in a function can be used in main? 
A. True  
B. False  
C. True if it is declared static  
D. None of the mentioned. 
Answer: Option B 
Explanation: 
Since the scope of the variable declared within a function is restricted only within 
that function, 
the above statement is false. 
 
15.The name of the variable used in one function cannot be used in another 
function? 
A. True  
B. False  
C. May be  
D. None of the mentioned. 
Answer: Option B 
Explanation: 
Since the scope of the variable declared within a function is restricted only within 
that function, the same name can be used to declare another variable in another 
function. 
 
16. C99 standard guarantees uniqueness of ____ characters for internal names. 
A. 31  
B. 63  
C. 12  
D. 14 
Answer: Option B 
Explanation: 
ISO C99 compiler may consider only first 63 characters for internal. 
 
17. Which of the following is not a valid variable name declaration? 
A. int __a3;  
B. int __3a;  

200 
 
C. int __A3;  
D. None of the mentioned. 
Answer: Option D 
Explanation: 
None. 
All the variables follow the guidelines for a valid variable name. 
 
18. Which of the following is not a valid variable name declaration? 
A. int _a3;  
B. int a_3;  
C. int 3_a;  
D. int _3a 
Answer: Option C 
Explanation: 
Variable name cannot start with a digit. 
 
19. All keywords in C are in? 
A. Lower Case letters  
B. Upper Case letters  
C. Camel Case letters  
D. None 
Answer: Option A 
Explanation: 
The keywords are always in lower case letters. 
 
20. Variable name resolving (number of significant characters for uniqueness of 
variable) depends on? 
A. Compiler and linker implementations  
B. Assemblers and loaders implementations  
C. C Language  
D. None 
Answer: Option A 
Explanation: 
It depends on the standard to which compiler and linkers are adhering to.

---
