# Infosys Mock Test Series — Topic 4: Technical MCQ & Pseudo Codes

> **Questions Count**: 67 | **Target Role**: Infosys System Engineer (SE)
> **Official Syllabus Coverage**: C/C++/Java Logic, While/For Loops, Conditionals, Arrays, Recursion, Bitwise Operations, Variable Scopes, Precedence

## Topic Overview & Problem Set
This master compendium compiles all 67 solved questions for Technical MCQ & Pseudo Codes sourced across Days 01 through 09 and full-length PYQ mocks.

---

### Question 1 (Mock Global Q222)
**ID**: `MOCK_SERIES_Q222` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     #include 
using namespace std;
class Test  {
static  int x;
public:
Test()   {    x++;    }
static int getX()  {   return x;    }   };
int Test::x=0;
int main()   {
cout<< Test::getX()<<“ “;
Test t[5];

cout<< Test::getX();      }

#### Options
- **(A)** 0 0
- **(B)** 5 5
- **(C)** 0 5
- **(D)** a)     Run time error

#### Verified Answer
**Option C: 0 5**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: 0 5. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 2 (Mock Global Q223)
**ID**: `MOCK_SERIES_Q223` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     #include 
using namespace std;
class Point    {
Point()   
 {  cout<<“Constructor called”;   }
};
int main(){
Point t1;
return 0;
}

#### Options
- **(A)** Constructor called
- **(B)** Compile time error
- **(C)** Run time error
- **(D)** Blank line

#### Verified Answer
**Option B: Compile time error**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: Compile time error. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 3 (Mock Global Q224)
**ID**: `MOCK_SERIES_Q224` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     #include 
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

#### Options
- **(A)** 7 6 3
- **(B)** 7 5 4
- **(C)** 6 7 8
- **(D)** 6 5 4

#### Verified Answer
**Option A: 7 6 3**

#### Step-by-Step Solution & Rationale
Correct Answer: Option A: 7 6 3. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 4 (Mock Global Q225)
**ID**: `MOCK_SERIES_Q225` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     Where are placed the list of processes that are prepared to be executed and waiting?

#### Options
- **(A)** Job queue
- **(B)** Ready queue
- **(C)** Execution queue
- **(D)** Process queue

#### Verified Answer
**Option B: Ready queue**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: Ready queue. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 5 (Mock Global Q226)
**ID**: `MOCK_SERIES_Q226` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     Who among the following can block the running process?

#### Options
- **(A)** Fork
- **(B)** Read
- **(C)** Down
- **(D)** All of these

#### Verified Answer
**Option D: All of these**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: All of these. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 6 (Mock Global Q227)
**ID**: `MOCK_SERIES_Q227` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     Which of the following does not interrupt the running process?

#### Options
- **(A)** Timer interrupt
- **(B)** Device
- **(C)** Power failure
- **(D)** Scheduler process

#### Verified Answer
**Option D: Scheduler process**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: Scheduler process. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 7 (Mock Global Q228)
**ID**: `MOCK_SERIES_Q228` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     The \u0021 article referred to as a

#### Options
- **(A)** Unicode escape sequence
- **(B)** Octal escape
- **(C)** Hexadecimal
- **(D)** Line feed

#### Verified Answer
**Option A: Unicode escape sequence**

#### Step-by-Step Solution & Rationale
Correct Answer: Option A: Unicode escape sequence. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 8 (Mock Global Q229)
**ID**: `MOCK_SERIES_Q229` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     Which of the following is a valid declaration of a char?

#### Options
- **(A)** char ch = '\utea';
- **(B)** char ca = 'tea';
- **(C)** char cr = \u0223;
- **(D)** char cc = '\itea';

#### Verified Answer
**Option A: char ch = '\utea';**

#### Step-by-Step Solution & Rationale
Correct Answer: Option A: char ch = '\utea';. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 9 (Mock Global Q230)
**ID**: `MOCK_SERIES_Q230` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     Which of the following is a valid long literal?

#### Options
- **(A)** ABH8097
- **(B)** L990023
- **(C)** 904423
- **(D)** 0xnf029L

#### Verified Answer
**Option D: 0xnf029L**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: 0xnf029L. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 10 (Mock Global Q231)
**ID**: `MOCK_SERIES_Q231` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     What does the expression float a = 35 / 0 return?

#### Options
- **(A)** 0
- **(B)** Not a Number
- **(C)** Infinity
- **(D)** Run time exception

#### Verified Answer
**Option C: Infinity**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: Infinity. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 11 (Mock Global Q232)
**ID**: `MOCK_SERIES_Q232` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.    Which option is false about the final keyword?
a)   A) A final method cannot be overridden in its subclasses.
b)   B) A final class cannot be extended.
c)   C) A final class cannot extend other classes.
d)   D) A final method can be inherited.

#### Options
- **(A)** A&B
- **(B)** B&C
- **(C)** C&D
- **(D)** None of these

#### Verified Answer
**Option C: C&D**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: C&D. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 12 (Mock Global Q233)
**ID**: `MOCK_SERIES_Q233` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.    Construct post order Transversal for the constructed tree with the given In-Order and Preorder Traversals:
In-Order: 9 7 10 6 8          
Pre-Order: 6 7 9 10 8

#### Options
- **(A)** 9 10 7 8 6
- **(B)** 9 7 6 10 8
- **(C)** 8 9 10 7 6
- **(D)** 9 8 10 7 6

#### Verified Answer
**Option A: 9 10 7 8 6**

#### Step-by-Step Solution & Rationale
Correct Answer: Option A: 9 10 7 8 6. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 13 (Mock Global Q234)
**ID**: `MOCK_SERIES_Q234` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     What will be the output of this program fragment?
      int i = 263;  
      putchar(i);

#### Options
- **(A)** prints 263
- **(B)** prints the ASCII equivalent of 263
- **(C)** rings the bell
- **(D)** prints garbage

#### Verified Answer
**Option C: rings the bell**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: rings the bell. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 14 (Mock Global Q235)
**ID**: `MOCK_SERIES_Q235` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     What will be the output of this statement?
printf (“%d”, 9/5);

#### Options
- **(A)** 1.8
- **(B)** 1.0
- **(C)** 2.0
- **(D)** None of these

#### Verified Answer
**Option D: None of these**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: None of these. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 15 (Mock Global Q236)
**ID**: `MOCK_SERIES_Q236` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     What will be the output of this program?
      #include  
      int main() {  
      int i = 5;   
      printf(“%d”, i = ++i == 6);      
      return 0;  
      }

#### Options
- **(A)** 2
- **(B)** 6
- **(C)** 4
- **(D)** 1

#### Verified Answer
**Option D: 1**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: 1. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 16 (Mock Global Q237)
**ID**: `MOCK_SERIES_Q237` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     Which of the following declarations is invalid in C language?

#### Options
- **(A)** char *str = “campus monk is the best platform for learn";
- **(B)** char str[] = “campus monk is the best platform for learn";
- **(C)** char str[20] = “campus monk is the best platform for learn";
- **(D)** char[] str = “campus monk is the best platform for learn";

#### Verified Answer
**Option D: char[] str = “campus monk is the best platform for learn";**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: char[] str = “campus monk is the best platform for learn";. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 17 (Mock Global Q238)
**ID**: `MOCK_SERIES_Q238` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     What will be the output of this program?
#include  
enum flg{a, b, c};  
enum glf{c, e, f};  
main()  
{  
  enum flg h;  
    h = b;  
    printf(“%d”, h);  
   return 0;  
}

#### Options
- **(A)** 1
- **(B)** error: redeclaration of an enumerator
- **(C)** h
- **(D)** 3

#### Verified Answer
**Option B: error: redeclaration of an enumerator**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: error: redeclaration of an enumerator. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 18 (Mock Global Q239)
**ID**: `MOCK_SERIES_Q239` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     What will be the output of this program? 
main ()  
{  
 if (5 < ’5’)  
        printf(“5”)  
 else
        printf(“ NOT EQUAL TO 5.”)

}

#### Options
- **(A)** ENQ
- **(B)** 5
- **(C)** I
- **(D)** Not equal to 5

#### Verified Answer
**Option B: 5**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 5. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 19 (Mock Global Q240)
**ID**: `MOCK_SERIES_Q240` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     What will be the output of the following pseudo code?
Input m = 9,n = 6,
m= m + 1;
n= n - 1;
m= m + n;
if(m>n)
print m
else
print n

#### Options
- **(A)** 5
- **(B)** 7
- **(C)** 9
- **(D)** 12

#### Verified Answer
**Option A: 5**

#### Step-by-Step Solution & Rationale
Correct Answer: Option A: 5. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 20 (Mock Global Q241)
**ID**: `MOCK_SERIES_Q241` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     What will be the output of the following pseudocode?
Integer i
Set i = 3
do
print i + 3
i = i - 1
while(i not equals 0)
end while

#### Options
- **(A)** 6 6 6
- **(B)** 6 5 6
- **(C)** 5 5 5
- **(D)** 6 5 4

#### Verified Answer
**Option D: 6 5 4**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: 6 5 4. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 21 (Mock Global Q242)
**ID**: `MOCK_SERIES_Q242` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     If the sequence of operations are performed on a stack, the sequence of pop will be?

Push(1), Push(2), Pop(), Push(1), Push(2), Pop(), Pop(), Pop(), Push(2), Pop().

#### Options
- **(A)** 2 2 1 1 2
- **(B)** 2 2 1 2 2
- **(C)** 2 1 2 2 1
- **(D)** 2 1 2 2 2

#### Verified Answer
**Option A: 2 2 1 1 2**

#### Step-by-Step Solution & Rationale
Correct Answer: Option A: 2 2 1 1 2. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 22 (Mock Global Q243)
**ID**: `MOCK_SERIES_Q243` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     In an empty BST, insert the following elements in a similar sequence. Which element will be at lowest level?

105     95    122    99    97   120

#### Options
- **(A)** 95
- **(B)** 97
- **(C)** 99
- **(D)** 120

#### Verified Answer
**Option B: 97**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 97. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 23 (Mock Global Q244)
**ID**: `MOCK_SERIES_Q244` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
T The concatenation of two lists is to be performed in O(1) time. Which of the following implementation of a list should be used?

#### Options
- **(A)** a)     Singly linked list
- **(B)** a)     Doubly linked list
- **(C)** a)     Circular doubly linked list
- **(D)** a)     Array implementation of list

#### Verified Answer
**Option C: a)     Circular doubly linked list**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: a)     Circular doubly linked list. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 24 (Mock Global Q245)
**ID**: `MOCK_SERIES_Q245` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     Which of the following sequence can be obtained in the output (in same order) using a stack assuming that the input is in the sequence 1,2,3,4,5 order?

#### Options
- **(A)** a)     3,4,5,1,2
- **(B)** a)     3,4,5,2,1
- **(C)** a)     1,5,2,3,4
- **(D)** a)     5,4,3,1,2

#### Verified Answer
**Option B: a)     3,4,5,2,1**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: a)     3,4,5,2,1. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 25 (Mock Global Q246)
**ID**: `MOCK_SERIES_Q246` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     Let A be a square matrix of size nxn. Consider the following program and state the output.
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

#### Options
- **(A)** a)     The matrix A itself
- **(B)** a)     Transpose of matrix A
- **(C)** a)     Adding 100 to the upper diagonal elements and subtracting 100 from diagonal elements of A
- **(D)** a)     None of the above

#### Verified Answer
**Option A: a)     The matrix A itself**

#### Step-by-Step Solution & Rationale
Correct Answer: Option A: a)     The matrix A itself. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 26 (Mock Global Q247)
**ID**: `MOCK_SERIES_Q247` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     The value of j at the end of the execution of the following pseudo code is ?
Integer incr(Integer i)
Static Integer count = 0
count = count +i 
return count 
Main()
Integer i,j
for(start i from 0 to 4)
j= incr(i)

end for

#### Options
- **(A)** 10
- **(B)** 4
- **(C)** 6
- **(D)** 7

#### Verified Answer
**Option A: 10**

#### Step-by-Step Solution & Rationale
Correct Answer: Option A: 10. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 27 (Mock Global Q248)
**ID**: `MOCK_SERIES_Q248` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     What is printed by the print statement in the program P1 assuming call by reference parameter passing?
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

#### Options
- **(A)** 10, 3
- **(B)** 31, 3
- **(C)** 27, 7
- **(D)** None of these

#### Verified Answer
**Option B: 31, 3**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 31, 3. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 28 (Mock Global Q249)
**ID**: `MOCK_SERIES_Q249` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     The value returned by the following function for f(1) is?
int f(int n)
{
static int i =1;
if (n>=5) return n;
n=n + i ;
i++;
return f(n);

}

#### Options
- **(A)** 5
- **(B)** 6
- **(C)** 7
- **(D)** 8

#### Verified Answer
**Option C: 7**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: 7. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 29 (Mock Global Q250)
**ID**: `MOCK_SERIES_Q250` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     Find the output of the following pseudo code.
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

#### Options
- **(A)** 7
- **(B)** 18
- **(C)** 22
- **(D)** 2

#### Verified Answer
**Option D: 2**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: 2. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 30 (Mock Global Q251)
**ID**: `MOCK_SERIES_Q251` | **Mock Source**: Day 04 — Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

#### Problem Statement
1.     Find the output of the following pseudo code.
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

#### Options
- **(A)** 31
- **(B)** 11
- **(C)** 42
- **(D)** 30

#### Verified Answer
**Option D: 30**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: 30. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 1 (Mock Global Q292)
**ID**: `MOCK_SERIES_Q292` | **Mock Source**: Day 06 — Pseudo Code

#### Problem Statement
Integer a, b, c Set a = 2, b = 4, c = 7 b = 7 + a if (c > b) b = b + b end if b = 6 + a if ((a + b) < (b - a) || c < a) b = (c + 4) + c else a = c + b end if c = (c + 9) ^ a Print a + b + c

#### Options
- **(A)** 71
- **(B)** 56
- **(C)** 47
- **(D)** 54

#### Verified Answer
**Option D: 54**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: 54. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 2 (Mock Global Q293)
**ID**: `MOCK_SERIES_Q293` | **Mock Source**: Day 06 — Pseudo Code

#### Problem Statement
How many times campus monk will be printed? Set k = 1, p = 4 Int j = p + k / 2 If (j equals p) Print "campus monk" End if j = p + k / 5 If (j not equal p) Print "campus monk" End if Print "campus monk"

#### Options
- **(A)** 1 Times
- **(B)** 2 Times
- **(C)** 3 Times
- **(D)** 4 Times

#### Verified Answer
**Option B: 2 Times**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 2 Times. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 3 (Mock Global Q294)
**ID**: `MOCK_SERIES_Q294` | **Mock Source**: Day 06 — Pseudo Code

#### Problem Statement
Find the output of the following code. #include int main(void) { int a = 10, x; x = a-- + +445; printf ("%d", x); return 0; }

#### Options
- **(A)** 19
- **(B)** 435
- **(C)** 455
- **(D)** 23

#### Verified Answer
**Option C: 455**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: 455. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 4 (Mock Global Q295)
**ID**: `MOCK_SERIES_Q295` | **Mock Source**: Day 06 — Pseudo Code

#### Problem Statement
Int p, q, r Set p = 6, q = 4, r = 7 p = (r + 5) + p If ((q & r & p) < (p & 6)) { r = 3 ^ r q = q & q } Print p + q + r

#### Options
- **(A)** 44
- **(B)** 41
- **(C)** 11
- **(D)** 26

#### Verified Answer
**Option D: 26**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: 26. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 5 (Mock Global Q296)
**ID**: `MOCK_SERIES_Q296` | **Mock Source**: Day 06 — Pseudo Code

#### Problem Statement
What is the output of this code? Int p, q, r; Set p = 0, q = 7, r = 9; If ((q + p) < (p + q) && (p < r)) { p = 11 + q; } Print p + q + r;

#### Options
- **(A)** 12
- **(B)** 16
- **(C)** 27
- **(D)** 10

#### Verified Answer
**Option B: 16**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 16. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 6 (Mock Global Q297)
**ID**: `MOCK_SERIES_Q297` | **Mock Source**: Day 06 — Pseudo Code

#### Problem Statement
What will be the output of the following pseudocode? Initial values: a = 4, b = 4, c = 7 Int fun(int a, int b, int c) { For (each c from 3 to 5) { a = (c + c) ^ b; If ((a + c) < (c + a)) { b = (a + 11) + c; } Else { c = b + b; a = 3 + b; continue; } } Return a + b; }

#### Options
- **(A)** 10
- **(B)** 12
- **(C)** Error
- **(D)** 11

#### Verified Answer
**Option D: 11**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: 11. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 7 (Mock Global Q298)
**ID**: `MOCK_SERIES_Q298` | **Mock Source**: Day 06 — Pseudo Code

#### Problem Statement
What will be the output of this pseudocode? a = 7, b = 2, c = 8 If ((b ^ a) < a && (2 ^ 7) < c ) a = b + c Else c = (4 + 12) + a b = 11 + a End if Print (a + b + c)

#### Options
- **(A)** 19
- **(B)** 21
- **(C)** 20
- **(D)** 22

#### Verified Answer
**Option C: 20**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: 20. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 8 (Mock Global Q299)
**ID**: `MOCK_SERIES_Q299` | **Mock Source**: Day 06 — Pseudo Code

#### Problem Statement
Find the output of the code snippet. Integer x, y, z Set x = 1, y = 8, z = 2 If (x ^ y && x ^ y && x ^ y ^ z) x = 1 End if Print x + y + z

#### Options
- **(A)** 11
- **(B)** 13
- **(C)** 16
- **(D)** 9

#### Verified Answer
**Option A: 11**

#### Step-by-Step Solution & Rationale
Correct Answer: Option A: 11. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 9 (Mock Global Q300)
**ID**: `MOCK_SERIES_Q300` | **Mock Source**: Day 06 — Pseudo Code

#### Problem Statement
Find the output of the following code. #include void main() { int a = 10; if (a == 010) printf("BCA"); else printf("B.Tech"); }

#### Options
- **(A)** BCA
- **(B)** B.tech
- **(C)** 10
- **(D)** Error

#### Verified Answer
**Option B: B.tech**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: B.tech. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 10 (Mock Global Q301)
**ID**: `MOCK_SERIES_Q301` | **Mock Source**: Day 06 — Pseudo Code

#### Problem Statement
Find the output of the following code. #include void main () { int x = 91; x >>= 2; printf ("%d\n", x); }

#### Options
- **(A)** 182
- **(B)** 91
- **(C)** 22
- **(D)** 82

#### Verified Answer
**Option C: 22**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: 22. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 1 (Mock Global Q323)
**ID**: `MOCK_SERIES_Q323` | **Mock Source**: Day 07 — Section III _ Pseudo Codes Based on PYQ

#### Problem Statement
What is the output of the following C code? #include int main() { int num = 987; int rem; while(num != 0) { rem = num % 4; num = num / 10; } printf("%d", rem); }

#### Options
- **(A)** 0
- **(B)** 1
- **(C)** 10
- **(D)** 5

#### Verified Answer
**Option B: 1**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 1. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 2 (Mock Global Q324)
**ID**: `MOCK_SERIES_Q324` | **Mock Source**: Day 07 — Section III _ Pseudo Codes Based on PYQ

#### Problem Statement
What is the output of the following C code? #include int main() { float x = 0.0; long int y = 10; printf("%d", sizeof(y) == sizeof(x + y)); return 0; }

#### Options
- **(A)** 3
- **(B)** 1
- **(C)** 5
- **(D)** 2

#### Verified Answer
**Option B: 1**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 1. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 3 (Mock Global Q325)
**ID**: `MOCK_SERIES_Q325` | **Mock Source**: Day 07 — Section III _ Pseudo Codes Based on PYQ

#### Problem Statement
Predict the output of the given pseudocode if the value of the number is 6: Read number k = 2 i = 2 while i <= number: k = k * i i = i + 1 end while write k

#### Options
- **(A)** 1440.0
- **(B)** 1340.0
- **(C)** 1700.0
- **(D)** 1560.0

#### Verified Answer
**Option A: 1440.0**

#### Step-by-Step Solution & Rationale
Correct Answer: Option A: 1440.0. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 4 (Mock Global Q326)
**ID**: `MOCK_SERIES_Q326` | **Mock Source**: Day 07 — Section III _ Pseudo Codes Based on PYQ

#### Problem Statement
What is the output of the following C code? int f(int x, int *py, int **ppz) { int y, z; **ppz += 1; z = **ppz; *py += 2; y = *py; x += 3; return x + y + z; } void main() { int c, *b, **a; c = 4; b = &c; a = &b; printf("%d ", f(c, b, a)); return 0; }

#### Options
- **(A)** 18
- **(B)** 19
- **(C)** 21
- **(D)** 22

#### Verified Answer
**Option B: 19**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 19. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 5 (Mock Global Q327)
**ID**: `MOCK_SERIES_Q327` | **Mock Source**: Day 07 — Section III _ Pseudo Codes Based on PYQ

#### Problem Statement
What is the output of the following C code? #include int main() { int a = 12; void *ptr = (int *)&a; printf("%d", *ptr); getchar(); return 0; }

#### Options
- **(A)** 12
- **(B)** Compiler Error
- **(C)** Run Time Error
- **(D)** 0

#### Verified Answer
**Option B: Compiler Error**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: Compiler Error. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 6 (Mock Global Q328)
**ID**: `MOCK_SERIES_Q328` | **Mock Source**: Day 07 — Section III _ Pseudo Codes Based on PYQ

#### Problem Statement
Predict the output of the following pseudocode. Integer x, y, z Set x = -2, y = 3, z = 1 if (x + (2 & 2) && y + (3 & 3) && z + (2 ^ 2)) x = x - 2 y = x Else x = z y = y ^ 2 End if Print x + y + z

#### Options
- **(A)** 2
- **(B)** 11
- **(C)** 3
- **(D)** 0

#### Verified Answer
**Option C: 3**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: 3. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 7 (Mock Global Q329)
**ID**: `MOCK_SERIES_Q329` | **Mock Source**: Day 07 — Section III _ Pseudo Codes Based on PYQ

#### Problem Statement
int main() { int x, y = 5, z = 5; x = y == z; Print(x) return 0; }

#### Options
- **(A)** 0
- **(B)** 1
- **(C)** 5
- **(D)** Compilation Error

#### Verified Answer
**Option B: 1**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 1. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 1 (Mock Global Q393)
**ID**: `MOCK_SERIES_Q393` | **Mock Source**: Day 08 — Technical MCQ - Pseudo Codes Based on PYQ 01

#### Problem Statement
Q1.) Integer p, q, r Set p = 0, q = 2, r = 9 r = 7 + p q = q + r for (each r from 4 to 7) p = (p + p) & q if ((p + q) < (r - p) || 8 < p) p = (p + 2) + q Jump out of the loop End if End for Print p + q

#### Options
- **(A)** 5
- **(B)** 9
- **(C)** 19
- **(D)** 20

#### Verified Answer
**Option B: 9**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 9. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 2 (Mock Global Q394)
**ID**: `MOCK_SERIES_Q394` | **Mock Source**: Day 08 — Technical MCQ - Pseudo Codes Based on PYQ 01

#### Problem Statement
Q2.) #include using namespace std; int main() { int a = 3, b = 2, c = 5; int result = (a++ > 1) + (a & b); cout << result; return 0; }

#### Options
- **(A)** 12
- **(B)** 14
- **(C)** 10
- **(D)** 16

#### Verified Answer
**Option A: 12**

#### Step-by-Step Solution & Rationale
Correct Answer: Option A: 12. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 3 (Mock Global Q395)
**ID**: `MOCK_SERIES_Q395` | **Mock Source**: Day 08 — Technical MCQ - Pseudo Codes Based on PYQ 01

#### Problem Statement
Q3.) Integer value, n Set value = 1, n = 45 while (value less than equal to n) value = value << 1 end loop Print value

#### Options
- **(A)** 16
- **(B)** 32
- **(C)** 64
- **(D)** 36

#### Verified Answer
**Option C: 64**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: 64. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 4 (Mock Global Q396)
**ID**: `MOCK_SERIES_Q396` | **Mock Source**: Day 08 — Technical MCQ - Pseudo Codes Based on PYQ 01

#### Problem Statement
Q4.) Predict the output of the following pseudocode. Integer x, y, z Set x = -2, y = 3, z = 1 if (x + (2 & 2) && y + (3 & 3) && z + (2 ^ 2)) x = x -2 y = x Else x = z y = y ^ 2 End if Print x + y + z

#### Options
- **(A)** 2
- **(B)** 11
- **(C)** 0
- **(D)** 3

#### Verified Answer
**Option D: 3**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: 3. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 5 (Mock Global Q397)
**ID**: `MOCK_SERIES_Q397` | **Mock Source**: Day 08 — Technical MCQ - Pseudo Codes Based on PYQ 01

#### Problem Statement
Q5. What is the output int main() { int x = 10; int *y, **z; y = &x; z = &y; **z=7; print(x,*y,**z) return 0; }

#### Options
- **(A)** 10 10 10
- **(B)** 10 7 7
- **(C)** 7 7 7
- **(D)** 10 10 7

#### Verified Answer
**Option C: 7 7 7**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: 7 7 7. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 6 (Mock Global Q398)
**ID**: `MOCK_SERIES_Q398` | **Mock Source**: Day 08 — Technical MCQ - Pseudo Codes Based on PYQ 01

#### Problem Statement
Q6. What is the output for p=15 and q=4. Integer solve (Integer p, Integer q) Integer value while(q) value = p MOD q p = q q = value End while return p End function solve()

#### Options
- **(A)** 3
- **(B)** 1
- **(C)** 2
- **(D)** 0

#### Verified Answer
**Option B: 1**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 1. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 7 (Mock Global Q399)
**ID**: `MOCK_SERIES_Q399` | **Mock Source**: Day 08 — Technical MCQ - Pseudo Codes Based on PYQ 01

#### Problem Statement
Q7.what is the output for number=4 int something(int number) { if(number <= 0) return 1; else return number * something(number-1); } something(4);

#### Options
- **(A)** 12
- **(B)** 24
- **(C)** 1
- **(D)** 20

#### Verified Answer
**Option B: 24**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 24. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 8 (Mock Global Q400)
**ID**: `MOCK_SERIES_Q400` | **Mock Source**: Day 08 — Technical MCQ - Pseudo Codes Based on PYQ 01

#### Problem Statement
Q8. What will be the output of the following pseudocode? int a , b ,c Set a=0,b=1,c=2 If (b^c || a&b || a>>1) c=9 a =b+c else c =1 a=a+c End if Print a+b+c

#### Options
- **(A)** 20

#### Verified Answer
**Numerical Value: 20**

#### Step-by-Step Solution & Rationale
Correct Answer: Numerical Value: 20. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 9 (Mock Global Q401)
**ID**: `MOCK_SERIES_Q401` | **Mock Source**: Day 08 — Technical MCQ - Pseudo Codes Based on PYQ 01

#### Problem Statement
Q9. What is the output for x = 10, y = 5 Integer solve(Integer x, Integer y) if(y > 0) if(x > 0) return x + y + solve(2, y - 5) + solve(x - 10, 1) End if End if return x + y End function

#### Options
- **(A)** undefined

#### Verified Answer
**Numerical Value: 18**

#### Step-by-Step Solution & Rationale
Correct Answer: Numerical Value: 18. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 10 (Mock Global Q402)
**ID**: `MOCK_SERIES_Q402` | **Mock Source**: Day 08 — Technical MCQ - Pseudo Codes Based on PYQ 01

#### Problem Statement
Q10. What is the output of following Integer value, n Set value = 32, n = 1 while(value >= n) value = value >> 1 end loop Print value

#### Options
- **(A)** undefined

#### Verified Answer
**Numerical Value: 0**

#### Step-by-Step Solution & Rationale
Correct Answer: Numerical Value: 0. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 1 (Mock Global Q453)
**ID**: `MOCK_SERIES_Q453` | **Mock Source**: Day 09 — Technical MCQ - Pseudo Codes Based on PYQ 02

#### Problem Statement
What is the output of following pseudo code: Fun() { Int a=10 , b=20 , c=30; If(c>b>a) Print(&ldquo;True&rdquo;); Else Print(&ldquo;False&rdquo;); return 0; }

#### Options
- **(A)** True
- **(B)** False
- **(C)** Error
- **(D)** -1

#### Verified Answer
**Option B: False**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: False. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 2 (Mock Global Q454)
**ID**: `MOCK_SERIES_Q454` | **Mock Source**: Day 09 — Technical MCQ - Pseudo Codes Based on PYQ 02

#### Problem Statement
What is the output of following code: Int main(){ Int n=(1<<2+3<<4) Print(n); Return 0; }

#### Options
- **(A)** 112
- **(B)** 512
- **(C)** 52
- **(D)** 0

#### Verified Answer
**Option B: 512**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 512. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 3 (Mock Global Q455)
**ID**: `MOCK_SERIES_Q455` | **Mock Source**: Day 09 — Technical MCQ - Pseudo Codes Based on PYQ 02

#### Problem Statement
What is the output of following: Integer x, y Set x = 15, y = 12 y = x &ndash; 1 do{ Print x x = y + (x &ndash; 2) } while(x < 40) end do while

#### Options
- **(A)** 14 26
- **(B)** 15 27 39
- **(C)** 27 39
- **(D)** 15

#### Verified Answer
**Option B: 15 27 39**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 15 27 39. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 4 (Mock Global Q456)
**ID**: `MOCK_SERIES_Q456` | **Mock Source**: Day 09 — Technical MCQ - Pseudo Codes Based on PYQ 02

#### Problem Statement
What is the output if fun(5) is called? Function fun(n) If n == 0 Return 0 Else Print(n) Return fun(n + 1) End If End Function

#### Options
- **(A)** 1 2 3 4 5
- **(B)** 5 4 3 2 1
- **(C)** Stack overflow
- **(D)** -1

#### Verified Answer
**Option C: Stack overflow**

#### Step-by-Step Solution & Rationale
Correct Answer: Option C: Stack overflow. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 5 (Mock Global Q457)
**ID**: `MOCK_SERIES_Q457` | **Mock Source**: Day 09 — Technical MCQ - Pseudo Codes Based on PYQ 02

#### Problem Statement
int main() { int x, y = 5, z = 5; x = y == z; Print(x); return 0; }

#### Options
- **(A)** 0
- **(B)** 1
- **(C)** 5
- **(D)** Compilation Error

#### Verified Answer
**Option B: 1**

#### Step-by-Step Solution & Rationale
Correct Answer: Option B: 1. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 6 (Mock Global Q458)
**ID**: `MOCK_SERIES_Q458` | **Mock Source**: Day 09 — Technical MCQ - Pseudo Codes Based on PYQ 02

#### Problem Statement
1. Integer a = 5, b = 9 2. a = a ^ b 3. b = a ^ b 4. a = a ^ b 5. if (a == 9 && b == 5) 6. Print "Swapped" 7. else 8. Print "Not swapped"

#### Options
- **(A)** Line 2
- **(B)** Line 3
- **(C)** Line 4
- **(D)** No error

#### Verified Answer
**Option D: No error**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: No error. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 7 (Mock Global Q459)
**ID**: `MOCK_SERIES_Q459` | **Mock Source**: Day 09 — Technical MCQ - Pseudo Codes Based on PYQ 02

#### Problem Statement
int main() { int x = 9, y = 2, z = 6; int a = x & y | z; printf("%d", a); return 0; }

#### Options
- **(A)** Error
- **(B)** 2
- **(C)** 3
- **(D)** 6

#### Verified Answer
**Option D: 6**

#### Step-by-Step Solution & Rationale
Correct Answer: Option D: 6. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 8 (Mock Global Q460)
**ID**: `MOCK_SERIES_Q460` | **Mock Source**: Day 09 — Technical MCQ - Pseudo Codes Based on PYQ 02

#### Problem Statement
Integer p, q, r Set p = 4, q = 2, r = 5 p = (q + p) + p if ((q + p) p) then p = (q + r) + p if (((p + r) + (r + q)) <= (p + r + q)) then r = q + p else r = (p + r) + p end if p = (9 & 6) + q else q = r & r if ((q - 5) < (5 - q)) then r = (6 + 6) & q q = (q + 7) + r end if p = (1 ^ 11) + q end if Print p + q + r

#### Options
- **(A)** undefined

#### Verified Answer
**Numerical Value: 25**

#### Step-by-Step Solution & Rationale
Correct Answer: Numerical Value: 25. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 9 (Mock Global Q461)
**ID**: `MOCK_SERIES_Q461` | **Mock Source**: Day 09 — Technical MCQ - Pseudo Codes Based on PYQ 02

#### Problem Statement
Integer a, b, c Set a = 2, b = 4, c = 7 b = 7 + a if (c > b) b = b + b end if b = 6 + a if ((a + b) < (b - a) || c < a) b = (c + 4) + c else a = c + b end if c = (c + 9) ^ a Print a + b + c

#### Options
- **(A)** undefined

#### Verified Answer
**Numerical Value: 54**

#### Step-by-Step Solution & Rationale
Correct Answer: Numerical Value: 54. Solved following standard Infosys System Engineer evaluation criteria.

---

### Question 10 (Mock Global Q462)
**ID**: `MOCK_SERIES_Q462` | **Mock Source**: Day 09 — Technical MCQ - Pseudo Codes Based on PYQ 02

#### Problem Statement
Integer a, b, c Set a = 1, b = 6, c = 7 b = (a & b) + b for (each c from 3 to 5) { b = (a + a) ^ a b = (12 + 5) + a } a = (a ^ 9) + a Print a + b

#### Options
- **(A)** undefined

#### Verified Answer
**Numerical Value: 27**

#### Step-by-Step Solution & Rationale
Correct Answer: Numerical Value: 27. Solved following standard Infosys System Engineer evaluation criteria.

---

