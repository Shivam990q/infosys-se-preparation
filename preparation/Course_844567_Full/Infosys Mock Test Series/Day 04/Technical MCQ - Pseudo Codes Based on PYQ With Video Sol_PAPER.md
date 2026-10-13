# 📝 Technical MCQ - Pseudo Codes Based on PYQ With Video Sol

- **Engine:** Classplus CMS
- **Folder:** `Infosys Mock Test Series / Day 04`
- **Total Questions:** 30
- **Total Marks:** 0
- **Duration:** 0 Minutes
- **Test ID:** `63d20cee2b961f1fd45b32f6`

---

## 🔹 Section: Technical

### Q1. (+0 / -0)

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
- **[None]** 0 0
- **[None]** 5 5
- **[None]** 0 5 ✅ **[CORRECT]**
- **[None]** a)     Run time error

💡 **Detailed Solution:**
Answer: C

---

### Q2. (+0 / -0)

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
- **[None]** Constructor called
- **[None]** Compile time error ✅ **[CORRECT]**
- **[None]** Run time error
- **[None]** Blank line

💡 **Detailed Solution:**
Answer: B

---

### Q3. (+0 / -0)

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
- **[None]** 7 6 3 ✅ **[CORRECT]**
- **[None]** 7 5 4
- **[None]** 6 7 8
- **[None]** 6 5 4

💡 **Detailed Solution:**
Answer: A

---

### Q4. (+0 / -0)

1.     Where are placed the list of processes that are prepared to be executed and waiting?

**Options:**
- **[None]** Job queue
- **[None]** Ready queue ✅ **[CORRECT]**
- **[None]** Execution queue
- **[None]** Process queue

💡 **Detailed Solution:**
Answer: B

---

### Q5. (+0 / -0)

1.     Who among the following can block the running process?

**Options:**
- **[None]** Fork
- **[None]** Read
- **[None]** Down
- **[None]** All of these ✅ **[CORRECT]**

💡 **Detailed Solution:**
Answer: D

---

### Q6. (+0 / -0)

1.     Which of the following does not interrupt the running process?

**Options:**
- **[None]** Timer interrupt
- **[None]** Device
- **[None]** Power failure
- **[None]** Scheduler process ✅ **[CORRECT]**

💡 **Detailed Solution:**
Answer: D

---

### Q7. (+0 / -0)

1.     The \u0021 article referred to as a

**Options:**
- **[None]** Unicode escape sequence ✅ **[CORRECT]**
- **[None]** Octal escape
- **[None]** Hexadecimal
- **[None]**    Line feed

💡 **Detailed Solution:**
Answer: A

---

### Q8. (+0 / -0)

1.     Which of the following is a valid declaration of a char?

**Options:**
- **[None]** char ch = '\utea'; ✅ **[CORRECT]**
- **[None]** char ca = 'tea';
- **[None]** char cr = \u0223;
- **[None]** char cc = '\itea';

💡 **Detailed Solution:**
Answer: A

---

### Q9. (+0 / -0)

1.     Which of the following is a valid long literal?

**Options:**
- **[None]** ABH8097
- **[None]** L990023
- **[None]** 904423
- **[None]** 0xnf029L ✅ **[CORRECT]**

💡 **Detailed Solution:**
Answer: D

---

### Q10. (+0 / -0)

1.     What does the expression float a = 35 / 0 return?

**Options:**
- **[None]** 0
- **[None]** Not a Number
- **[None]** Infinity ✅ **[CORRECT]**
- **[None]** Run time exception

💡 **Detailed Solution:**
Answer: C

---

### Q11. (+0 / -0)

1.    Which option is false about the final keyword?
a)   A) A final method cannot be overridden in its subclasses.
b)   B) A final class cannot be extended.
c)   C) A final class cannot extend other classes.
d)   D) A final method can be inherited.

**Options:**
- **[None]** A&B
- **[None]** B&C
- **[None]** C&D ✅ **[CORRECT]**
- **[None]** None of these

💡 **Detailed Solution:**
Answer: C

---

### Q12. (+0 / -0)

1.    Construct post order Transversal for the constructed tree with the given In-Order and Preorder Traversals:
In-Order: 9 7 10 6 8          
Pre-Order: 6 7 9 10 8

**Options:**
- **[None]** 9 10 7 8 6 ✅ **[CORRECT]**
- **[None]** 9 7 6 10 8
- **[None]**  8 9 10 7 6
- **[None]** 9 8 10 7 6

💡 **Detailed Solution:**
Answer: A

---

### Q13. (+0 / -0)

1.     What will be the output of this program fragment?
      int i = 263;  
      putchar(i);

**Options:**
- **[None]** prints 263
- **[None]** prints the ASCII equivalent of 263
- **[None]** rings the bell ✅ **[CORRECT]**
- **[None]** prints garbage

💡 **Detailed Solution:**
Answer: C

---

### Q14. (+0 / -0)

1.     What will be the output of this statement?
printf (“%d”, 9/5); 

**Options:**
- **[None]**  1.8
- **[None]** 1.0
- **[None]** 2.0
- **[None]** None of these ✅ **[CORRECT]**

💡 **Detailed Solution:**
Answer: D

---

### Q15. (+0 / -0)

1.     What will be the output of this program?
      #include<stdio.h> 
      int main() {  
      int i = 5;   
      printf(“%d”, i = ++i == 6);      
      return 0;  
      }  

**Options:**
- **[None]** 2
- **[None]** 6
- **[None]** 4
- **[None]** 1 ✅ **[CORRECT]**

💡 **Detailed Solution:**
Answer: D

---

### Q16. (+0 / -0)

1.     Which of the following declarations is invalid in C language?

**Options:**
- **[None]** char *str = “campus monk is the best platform for learn";
- **[None]** char str[] = “campus monk is the best platform for learn";
- **[None]** char str[20] = “campus monk is the best platform for learn";
- **[None]** char[] str = “campus monk is the best platform for learn"; ✅ **[CORRECT]**

💡 **Detailed Solution:**
Answer: D

---

### Q17. (+0 / -0)

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
- **[None]** 1
- **[None]** error: redeclaration of an enumerator ✅ **[CORRECT]**
- **[None]** h
- **[None]** 3

💡 **Detailed Solution:**
Answer: B

---

### Q18. (+0 / -0)

1.     What will be the output of this program? 
main ()  
{  
 if (5 < ’5’)  
        printf(“5”)  
 else
        printf(“ NOT EQUAL TO 5.”)

}

**Options:**
- **[None]** ENQ
- **[None]** 5 ✅ **[CORRECT]**
- **[None]** I
- **[None]** Not equal to 5

💡 **Detailed Solution:**
Answer: B

---

### Q19. (+0 / -0)

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
- **[None]** 5 ✅ **[CORRECT]**
- **[None]** 7
- **[None]** 9
- **[None]** 12

💡 **Detailed Solution:**
Answer: A

---

### Q20. (+0 / -0)

1.     What will be the output of the following pseudocode?
Integer i
Set i = 3
do
print i + 3
i = i - 1
while(i not equals 0)
end while

**Options:**
- **[None]** 6 6 6
- **[None]** 6 5 6
- **[None]** 5 5 5
- **[None]** 6 5 4 ✅ **[CORRECT]**

💡 **Detailed Solution:**
Answer: D

---

### Q21. (+0 / -0)

1.     If the sequence of operations are performed on a stack, the sequence of pop will be?

Push(1), Push(2), Pop(), Push(1), Push(2), Pop(), Pop(), Pop(), Push(2), Pop().

**Options:**
- **[None]** 2 2 1 1 2 ✅ **[CORRECT]**
- **[None]** 2 2 1 2 2
- **[None]** 2 1 2 2 1
- **[None]** 2 1 2 2 2

💡 **Detailed Solution:**
Answer: A

---

### Q22. (+0 / -0)

1.     In an empty BST, insert the following elements in a similar sequence. Which element will be at lowest level?

105     95    122    99    97   120

**Options:**
- **[None]** 95
- **[None]** 97 ✅ **[CORRECT]**
- **[None]** 99
- **[None]** 120

💡 **Detailed Solution:**
Answer: B

---

### Q23. (+0 / -0)

T The concatenation of two lists is to be performed in O(1) time. Which of the following implementation of a list should be used?

**Options:**
- **[None]** a)     Singly linked list
- **[None]** a)     Doubly linked list 
- **[None]** a)     Circular doubly linked list ✅ **[CORRECT]**
- **[None]** a)     Array implementation of list

💡 **Detailed Solution:**
Answer: C

---

### Q24. (+0 / -0)

1.     Which of the following sequence can be obtained in the output (in same order) using a stack assuming that the input is in the sequence 1,2,3,4,5 order?

**Options:**
- **[None]** a)     3,4,5,1,2
- **[None]** a)     3,4,5,2,1 ✅ **[CORRECT]**
- **[None]** a)     1,5,2,3,4
- **[None]** a)     5,4,3,1,2

💡 **Detailed Solution:**
Answer: B

---

### Q25. (+0 / -0)

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
- **[None]** a)     The matrix A itself  ✅ **[CORRECT]**
- **[None]** a)     Transpose of matrix A 
- **[None]** a)     Adding 100 to the upper diagonal elements and subtracting 100 from diagonal elements of A 
- **[None]** a)     None of the above

💡 **Detailed Solution:**
Answer: A

---

### Q26. (+0 / -0)

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
- **[None]** 10 ✅ **[CORRECT]**
- **[None]** 4
- **[None]** 6
- **[None]** 7

💡 **Detailed Solution:**
Answer: A

---

### Q27. (+0 / -0)

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
- **[None]** 10, 3
- **[None]** 31, 3 ✅ **[CORRECT]**
- **[None]** 27, 7
- **[None]** None of these

💡 **Detailed Solution:**
Answer: B

---

### Q28. (+0 / -0)

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
- **[None]** 5
- **[None]** 6
- **[None]** 7 ✅ **[CORRECT]**
- **[None]** 8

💡 **Detailed Solution:**
Answer: C

---

### Q29. (+0 / -0)

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
- **[None]** 7
- **[None]** 18
- **[None]** 22
- **[None]** 2 ✅ **[CORRECT]**

💡 **Detailed Solution:**
Answer: D

---

### Q30. (+0 / -0)

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
- **[None]** 31
- **[None]** 11
- **[None]** 42
- **[None]** 30 ✅ **[CORRECT]**

💡 **Detailed Solution:**
Answer: D

---

