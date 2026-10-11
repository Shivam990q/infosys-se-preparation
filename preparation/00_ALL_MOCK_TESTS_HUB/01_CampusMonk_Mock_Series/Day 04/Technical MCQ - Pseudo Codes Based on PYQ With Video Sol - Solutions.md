# Technical MCQ - Pseudo Codes Based on PYQ With Video Sol — Solutions & Explanations

**Total Questions:** 30 | **Total Marks:** 30

---

## Section: Technical

### Question 1

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

- (A) 0 0
- (B) 5 5
- ✅ **(C) 0 5** *(Correct Answer)*
- (D) a)     Run time error

**Correct Answer:** (C)

> 💡 **Explanation:**
> Answer: C

---

### Question 2

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

- (A) Constructor called
- ✅ **(B) Compile time error** *(Correct Answer)*
- (C) Run time error
- (D) Blank line

**Correct Answer:** (B)

> 💡 **Explanation:**
> Answer: B

---

### Question 3

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

- ✅ **(A) 7 6 3** *(Correct Answer)*
- (B) 7 5 4
- (C) 6 7 8
- (D) 6 5 4

**Correct Answer:** (A)

> 💡 **Explanation:**
> Answer: A

---

### Question 4

1.     Where are placed the list of processes that are prepared to be executed and waiting?

**Options:**

- (A) Job queue
- ✅ **(B) Ready queue** *(Correct Answer)*
- (C) Execution queue
- (D) Process queue

**Correct Answer:** (B)

> 💡 **Explanation:**
> Answer: B

---

### Question 5

1.     Who among the following can block the running process?

**Options:**

- (A) Fork
- (B) Read
- (C) Down
- ✅ **(D) All of these** *(Correct Answer)*

**Correct Answer:** (D)

> 💡 **Explanation:**
> Answer: D

---

### Question 6

1.     Which of the following does not interrupt the running process?

**Options:**

- (A) Timer interrupt
- (B) Device
- (C) Power failure
- ✅ **(D) Scheduler process** *(Correct Answer)*

**Correct Answer:** (D)

> 💡 **Explanation:**
> Answer: D

---

### Question 7

1.     The \u0021 article referred to as a

**Options:**

- ✅ **(A) Unicode escape sequence** *(Correct Answer)*
- (B) Octal escape
- (C) Hexadecimal
- (D)    Line feed

**Correct Answer:** (A)

> 💡 **Explanation:**
> Answer: A

---

### Question 8

1.     Which of the following is a valid declaration of a char?

**Options:**

- ✅ **(A) char ch = '\utea';** *(Correct Answer)*
- (B) char ca = 'tea';
- (C) char cr = \u0223;
- (D) char cc = '\itea';

**Correct Answer:** (A)

> 💡 **Explanation:**
> Answer: A

---

### Question 9

1.     Which of the following is a valid long literal?

**Options:**

- (A) ABH8097
- (B) L990023
- (C) 904423
- ✅ **(D) 0xnf029L** *(Correct Answer)*

**Correct Answer:** (D)

> 💡 **Explanation:**
> Answer: D

---

### Question 10

1.     What does the expression float a = 35 / 0 return?

**Options:**

- (A) 0
- (B) Not a Number
- ✅ **(C) Infinity** *(Correct Answer)*
- (D) Run time exception

**Correct Answer:** (C)

> 💡 **Explanation:**
> Answer: C

---

### Question 11

1.    Which option is false about the final keyword?
a)   A) A final method cannot be overridden in its subclasses.
b)   B) A final class cannot be extended.
c)   C) A final class cannot extend other classes.
d)   D) A final method can be inherited.

**Options:**

- (A) A&B
- (B) B&C
- ✅ **(C) C&D** *(Correct Answer)*
- (D) None of these

**Correct Answer:** (C)

> 💡 **Explanation:**
> Answer: C

---

### Question 12

1.    Construct post order Transversal for the constructed tree with the given In-Order and Preorder Traversals:
In-Order: 9 7 10 6 8          
Pre-Order: 6 7 9 10 8

**Options:**

- ✅ **(A) 9 10 7 8 6** *(Correct Answer)*
- (B) 9 7 6 10 8
- (C)  8 9 10 7 6
- (D) 9 8 10 7 6

**Correct Answer:** (A)

> 💡 **Explanation:**
> Answer: A

---

### Question 13

1.     What will be the output of this program fragment?
      int i = 263;  
      putchar(i);

**Options:**

- (A) prints 263
- (B) prints the ASCII equivalent of 263
- ✅ **(C) rings the bell** *(Correct Answer)*
- (D) prints garbage

**Correct Answer:** (C)

> 💡 **Explanation:**
> Answer: C

---

### Question 14

1.     What will be the output of this statement?
printf (“%d”, 9/5); 

**Options:**

- (A)  1.8
- (B) 1.0
- (C) 2.0
- ✅ **(D) None of these** *(Correct Answer)*

**Correct Answer:** (D)

> 💡 **Explanation:**
> Answer: D

---

### Question 15

1.     What will be the output of this program?
      #include<stdio.h> 
      int main() {  
      int i = 5;   
      printf(“%d”, i = ++i == 6);      
      return 0;  
      }  

**Options:**

- (A) 2
- (B) 6
- (C) 4
- ✅ **(D) 1** *(Correct Answer)*

**Correct Answer:** (D)

> 💡 **Explanation:**
> Answer: D

---

### Question 16

1.     Which of the following declarations is invalid in C language?

**Options:**

- (A) char *str = “campus monk is the best platform for learn";
- (B) char str[] = “campus monk is the best platform for learn";
- (C) char str[20] = “campus monk is the best platform for learn";
- ✅ **(D) char[] str = “campus monk is the best platform for learn";** *(Correct Answer)*

**Correct Answer:** (D)

> 💡 **Explanation:**
> Answer: D

---

### Question 17

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

- (A) 1
- ✅ **(B) error: redeclaration of an enumerator** *(Correct Answer)*
- (C) h
- (D) 3

**Correct Answer:** (B)

> 💡 **Explanation:**
> Answer: B

---

### Question 18

1.     What will be the output of this program? 
main ()  
{  
 if (5 < ’5’)  
        printf(“5”)  
 else
        printf(“ NOT EQUAL TO 5.”)

}

**Options:**

- (A) ENQ
- ✅ **(B) 5** *(Correct Answer)*
- (C) I
- (D) Not equal to 5

**Correct Answer:** (B)

> 💡 **Explanation:**
> Answer: B

---

### Question 19

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

- ✅ **(A) 5** *(Correct Answer)*
- (B) 7
- (C) 9
- (D) 12

**Correct Answer:** (A)

> 💡 **Explanation:**
> Answer: A

---

### Question 20

1.     What will be the output of the following pseudocode?
Integer i
Set i = 3
do
print i + 3
i = i - 1
while(i not equals 0)
end while

**Options:**

- (A) 6 6 6
- (B) 6 5 6
- (C) 5 5 5
- ✅ **(D) 6 5 4** *(Correct Answer)*

**Correct Answer:** (D)

> 💡 **Explanation:**
> Answer: D

---

### Question 21

1.     If the sequence of operations are performed on a stack, the sequence of pop will be?

Push(1), Push(2), Pop(), Push(1), Push(2), Pop(), Pop(), Pop(), Push(2), Pop().

**Options:**

- ✅ **(A) 2 2 1 1 2** *(Correct Answer)*
- (B) 2 2 1 2 2
- (C) 2 1 2 2 1
- (D) 2 1 2 2 2

**Correct Answer:** (A)

> 💡 **Explanation:**
> Answer: A

---

### Question 22

1.     In an empty BST, insert the following elements in a similar sequence. Which element will be at lowest level?

105     95    122    99    97   120

**Options:**

- (A) 95
- ✅ **(B) 97** *(Correct Answer)*
- (C) 99
- (D) 120

**Correct Answer:** (B)

> 💡 **Explanation:**
> Answer: B

---

### Question 23

T The concatenation of two lists is to be performed in O(1) time. Which of the following implementation of a list should be used?

**Options:**

- (A) a)     Singly linked list
- (B) a)     Doubly linked list 
- ✅ **(C) a)     Circular doubly linked list** *(Correct Answer)*
- (D) a)     Array implementation of list

**Correct Answer:** (C)

> 💡 **Explanation:**
> Answer: C

---

### Question 24

1.     Which of the following sequence can be obtained in the output (in same order) using a stack assuming that the input is in the sequence 1,2,3,4,5 order?

**Options:**

- (A) a)     3,4,5,1,2
- ✅ **(B) a)     3,4,5,2,1** *(Correct Answer)*
- (C) a)     1,5,2,3,4
- (D) a)     5,4,3,1,2

**Correct Answer:** (B)

> 💡 **Explanation:**
> Answer: B

---

### Question 25

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

- ✅ **(A) a)     The matrix A itself ** *(Correct Answer)*
- (B) a)     Transpose of matrix A 
- (C) a)     Adding 100 to the upper diagonal elements and subtracting 100 from diagonal elements of A 
- (D) a)     None of the above

**Correct Answer:** (A)

> 💡 **Explanation:**
> Answer: A

---

### Question 26

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

- ✅ **(A) 10** *(Correct Answer)*
- (B) 4
- (C) 6
- (D) 7

**Correct Answer:** (A)

> 💡 **Explanation:**
> Answer: A

---

### Question 27

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

- (A) 10, 3
- ✅ **(B) 31, 3** *(Correct Answer)*
- (C) 27, 7
- (D) None of these

**Correct Answer:** (B)

> 💡 **Explanation:**
> Answer: B

---

### Question 28

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

- (A) 5
- (B) 6
- ✅ **(C) 7** *(Correct Answer)*
- (D) 8

**Correct Answer:** (C)

> 💡 **Explanation:**
> Answer: C

---

### Question 29

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

- (A) 7
- (B) 18
- (C) 22
- ✅ **(D) 2** *(Correct Answer)*

**Correct Answer:** (D)

> 💡 **Explanation:**
> Answer: D

---

### Question 30

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

- (A) 31
- (B) 11
- (C) 42
- ✅ **(D) 30** *(Correct Answer)*

**Correct Answer:** (D)

> 💡 **Explanation:**
> Answer: D

---

