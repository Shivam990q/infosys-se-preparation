# Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

**Total Questions:** 30 | **Total Marks:** 30 | **Duration:** 30 Minutes

---

## Section: Technical

### Question 1 [Marks: +1, -0.25]

1.     #include<iostream>
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

**Options:**

- **(A)** 0 0
- **(B)** 5 5
- **(C)** 0 5
- **(D)** a)     Run time error

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(C) 0 5**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 2 [Marks: +1, -0.25]

1.     #include<iostream>
using namespace std;
class Point    {
Point()   
 {  cout<<“Constructor called”;   }
};
int main(){
Point t1;
return 0;
}

**Options:**

- **(A)** Constructor called
- **(B)** Compile time error
- **(C)** Run time error
- **(D)** Blank line

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(B) Compile time error**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 3 [Marks: +1, -0.25]

1.     #include<stdio.h>
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

**Options:**

- **(A)** 7 6 3
- **(B)** 7 5 4
- **(C)** 6 7 8
- **(D)** 6 5 4

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(A) 7 6 3**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 4 [Marks: +1, -0.25]

1.     Where are placed the list of processes that are prepared to be executed and waiting?

**Options:**

- **(A)** Job queue
- **(B)** Ready queue
- **(C)** Execution queue
- **(D)** Process queue

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(B) Ready queue**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 5 [Marks: +1, -0.25]

1.     Who among the following can block the running process?

**Options:**

- **(A)** Fork
- **(B)** Read
- **(C)** Down
- **(D)** All of these

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(D) All of these**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 6 [Marks: +1, -0.25]

1.     Which of the following does not interrupt the running process?

**Options:**

- **(A)** Timer interrupt
- **(B)** Device
- **(C)** Power failure
- **(D)** Scheduler process

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(D) Scheduler process**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 7 [Marks: +1, -0.25]

1.     The \u0021 article referred to as a

**Options:**

- **(A)** Unicode escape sequence
- **(B)** Octal escape
- **(C)** Hexadecimal
- **(D)**    Line feed

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(A) Unicode escape sequence**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 8 [Marks: +1, -0.25]

1.     Which of the following is a valid declaration of a char?

**Options:**

- **(A)** char ch = '\utea';
- **(B)** char ca = 'tea';
- **(C)** char cr = \u0223;
- **(D)** char cc = '\itea';

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(A) char ch = '\utea';**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 9 [Marks: +1, -0.25]

1.     Which of the following is a valid long literal?

**Options:**

- **(A)** ABH8097
- **(B)** L990023
- **(C)** 904423
- **(D)** 0xnf029L

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(D) 0xnf029L**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 10 [Marks: +1, -0.25]

1.     What does the expression float a = 35 / 0 return?

**Options:**

- **(A)** 0
- **(B)** Not a Number
- **(C)** Infinity
- **(D)** Run time exception

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(C) Infinity**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 11 [Marks: +1, -0.25]

1.    Which option is false about the final keyword?
a)   A) A final method cannot be overridden in its subclasses.
b)   B) A final class cannot be extended.
c)   C) A final class cannot extend other classes.
d)   D) A final method can be inherited.

**Options:**

- **(A)** A&B
- **(B)** B&C
- **(C)** C&D
- **(D)** None of these

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(C) C&D**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 12 [Marks: +1, -0.25]

1.    Construct post order Transversal for the constructed tree with the given In-Order and Preorder Traversals:
In-Order: 9 7 10 6 8          
Pre-Order: 6 7 9 10 8

**Options:**

- **(A)** 9 10 7 8 6
- **(B)** 9 7 6 10 8
- **(C)**  8 9 10 7 6
- **(D)** 9 8 10 7 6

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(A) 9 10 7 8 6**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 13 [Marks: +1, -0.25]

1.     What will be the output of this program fragment?
      int i = 263;  
      putchar(i);

**Options:**

- **(A)** prints 263
- **(B)** prints the ASCII equivalent of 263
- **(C)** rings the bell
- **(D)** prints garbage

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(C) rings the bell**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 14 [Marks: +1, -0.25]

1.     What will be the output of this statement?
printf (“%d”, 9/5); 

**Options:**

- **(A)**  1.8
- **(B)** 1.0
- **(C)** 2.0
- **(D)** None of these

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(D) None of these**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 15 [Marks: +1, -0.25]

1.     What will be the output of this program?
      #include<stdio.h> 
      int main() {  
      int i = 5;   
      printf(“%d”, i = ++i == 6);      
      return 0;  
      }  

**Options:**

- **(A)** 2
- **(B)** 6
- **(C)** 4
- **(D)** 1

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(D) 1**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 16 [Marks: +1, -0.25]

1.     Which of the following declarations is invalid in C language?

**Options:**

- **(A)** char *str = “campus monk is the best platform for learn";
- **(B)** char str[] = “campus monk is the best platform for learn";
- **(C)** char str[20] = “campus monk is the best platform for learn";
- **(D)** char[] str = “campus monk is the best platform for learn";

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(D) char[] str = “campus monk is the best platform for learn";**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 17 [Marks: +1, -0.25]

1.     What will be the output of this program?
#include<stdio.h> 
enum flg{a, b, c};  
enum glf{c, e, f};  
main()  
{  
  enum flg h;  
    h = b;  
    printf(“%d”, h);  
   return 0;  
}  

**Options:**

- **(A)** 1
- **(B)** error: redeclaration of an enumerator
- **(C)** h
- **(D)** 3

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(B) error: redeclaration of an enumerator**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 18 [Marks: +1, -0.25]

1.     What will be the output of this program? 
main ()  
{  
 if (5 < ’5’)  
        printf(“5”)  
 else
        printf(“ NOT EQUAL TO 5.”)

}

**Options:**

- **(A)** ENQ
- **(B)** 5
- **(C)** I
- **(D)** Not equal to 5

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(B) 5**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 19 [Marks: +1, -0.25]

1.     What will be the output of the following pseudo code?
Input m = 9,n = 6,
m= m + 1;
n= n - 1;
m= m + n;
if(m>n)
print m
else
print n

**Options:**

- **(A)** 5
- **(B)** 7
- **(C)** 9
- **(D)** 12

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(A) 5**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 20 [Marks: +1, -0.25]

1.     What will be the output of the following pseudocode?
Integer i
Set i = 3
do
print i + 3
i = i - 1
while(i not equals 0)
end while

**Options:**

- **(A)** 6 6 6
- **(B)** 6 5 6
- **(C)** 5 5 5
- **(D)** 6 5 4

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(D) 6 5 4**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 21 [Marks: +1, -0.25]

1.     If the sequence of operations are performed on a stack, the sequence of pop will be?

Push(1), Push(2), Pop(), Push(1), Push(2), Pop(), Pop(), Pop(), Push(2), Pop().

**Options:**

- **(A)** 2 2 1 1 2
- **(B)** 2 2 1 2 2
- **(C)** 2 1 2 2 1
- **(D)** 2 1 2 2 2

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(A) 2 2 1 1 2**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 22 [Marks: +1, -0.25]

1.     In an empty BST, insert the following elements in a similar sequence. Which element will be at lowest level?

105     95    122    99    97   120

**Options:**

- **(A)** 95
- **(B)** 97
- **(C)** 99
- **(D)** 120

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(B) 97**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 23 [Marks: +1, -0.25]

T The concatenation of two lists is to be performed in O(1) time. Which of the following implementation of a list should be used?

**Options:**

- **(A)** a)     Singly linked list
- **(B)** a)     Doubly linked list 
- **(C)** a)     Circular doubly linked list
- **(D)** a)     Array implementation of list

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(C) a)     Circular doubly linked list**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 24 [Marks: +1, -0.25]

1.     Which of the following sequence can be obtained in the output (in same order) using a stack assuming that the input is in the sequence 1,2,3,4,5 order?

**Options:**

- **(A)** a)     3,4,5,1,2
- **(B)** a)     3,4,5,2,1
- **(C)** a)     1,5,2,3,4
- **(D)** a)     5,4,3,1,2

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(B) a)     3,4,5,2,1**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 25 [Marks: +1, -0.25]

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

**Options:**

- **(A)** a)     The matrix A itself 
- **(B)** a)     Transpose of matrix A 
- **(C)** a)     Adding 100 to the upper diagonal elements and subtracting 100 from diagonal elements of A 
- **(D)** a)     None of the above

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(A) a)     The matrix A itself **

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 26 [Marks: +1, -0.25]

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

**Options:**

- **(A)** 10
- **(B)** 4
- **(C)** 6
- **(D)** 7

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(A) 10**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 27 [Marks: +1, -0.25]

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

**Options:**

- **(A)** 10, 3
- **(B)** 31, 3
- **(C)** 27, 7
- **(D)** None of these

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(B) 31, 3**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 28 [Marks: +1, -0.25]

1.     The value returned by the following function for f(1) is?
int f(int n)
{
static int i =1;
if (n>=5) return n;
n=n + i ;
i++;
return f(n);

}

**Options:**

- **(A)** 5
- **(B)** 6
- **(C)** 7
- **(D)** 8

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(C) 7**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 29 [Marks: +1, -0.25]

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

**Options:**

- **(A)** 7
- **(B)** 18
- **(C)** 22
- **(D)** 2

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(D) 2**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 30 [Marks: +1, -0.25]

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

**Options:**

- **(A)** 31
- **(B)** 11
- **(C)** 42
- **(D)** 30

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(D) 30**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

