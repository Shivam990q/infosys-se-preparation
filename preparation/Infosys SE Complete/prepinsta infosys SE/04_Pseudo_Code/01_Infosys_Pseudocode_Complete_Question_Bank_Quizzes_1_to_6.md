# Infosys SE Complete Preparation — Pseudo Code Execution & Logic Tracing
**Source Portal:** PrepInsta Infosys Preparation Suite (`https://prepinsta.com/infosys/pseudo-code/`)
**Target Role:** Infosys Systems Engineer (SE) | **Category:** 04_Pseudo_Code
**Total Verified Questions Extracted:** 10
**Quizzes Covered:** quiz-1, quiz-2, quiz-3, quiz-4, quiz-5, quiz-6

---

## 📋 Section 1: Rules to Keep in Mind
These rules and fundamental principles govern all Infosys questions on this topic:

- Bitwise Operators: Bitwise AND (&) requires both bits 1; Bitwise OR (|) requires at least one bit 1; Bitwise XOR (^) yields 1 if bits differ.
- XOR Axioms: x ^ x = 0; x ^ 0 = x; XOR is commutative and associative.
- Bit Shifts: x << k multiplies by 2^k; x >> k divides by 2^k (integer floor division).
- Pre/Post Increment: ++x increments first and returns new value; x++ returns old value and increments afterwards.
- Operator Precedence: Parentheses > Postfix > Prefix/Unary > Multiplicative (*, /, %) > Additive (+, -) > Relational > Equality > Bitwise (&, ^, |) > Logical (&&, ||) > Assignment.

---

## ⚡ Section 2: How to Solve Quickly
Proven time-saving strategies recommended by PrepInsta for Infosys 2026 examination:

1. **Option Elimination via Unit Digits & Multiples:** Before doing full calculations, inspect the options to see if last digits or divisibility by 3, 7, 9, 11 can eliminate 2 to 3 wrong choices.
2. **Approximation & Magnitude Checks:** When exact arithmetic is tedious, round numbers to neat multiples (e.g., 99 ≈ 100) to find the nearest valid option.
3. **Reverse Option Substitution:** In complex algebraic equations, plug option values directly into the question stem to test validity.

---

## 🚀 Section 3: Tricks & Shortcuts
Key mathematical formulas, mental-math shortcuts, and speed axioms:

- Construct a Variable Trace Table with columns for loop index, variables, and conditions.
- Look for mathematical shortcuts: e.g. a loop summing 1 to N evaluates to N(N+1)/2 without step-by-step iteration.

---

## 📚 Section 4: Practice Questions, Options & Step-by-Step Solutions
Contains **10** verbatim questions with options, verified answer keys, and complete derivations:

### Question 1 (PrepInsta quiz-1 - Q1)
**Question Stem:**
What will be the output of the following pseudocode for i=140? 

  

 integer fun(int i) 

if((i%2)!=0) 

return i; 

else 

return fun(fun(i=1)); 

End function fun()

**Options:**
- **(A)** `1`
- **(B)** `2`
- **(C)** `3`
- **(D)** `Error`

**Correct Answer:** **(A)** `1`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
Explanation:


In the first step i=140 is passed through the function fun(), and if the condition becomes false when it is checked so else will get executed.


When else gets executed, function fun() is called again and i=1 is passed and now condition in IF gets true and 'i' whose value is 1 gets returned.
```

---

### Question 2 (PrepInsta quiz-1 - Q2)
**Question Stem:**
#include&lt;stdio.h&gt; 

int main() 

{ 

int x=2,y=0,z=3; 

x&gt;y ?( printf("%d", z)):( return z); 

}

**Options:**
- **(A)** `2`
- **(B)** `3`
- **(C)** `Error`
- **(D)** `11`

**Correct Answer:** **(C)** `Error`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
Explanation:


The operator ?: works as follows expr1 is evaluated first if it is true expr2 is evaluated otherwise expr3 is evaluated. hence in expressions the return statement can not be used in C-language. The return statement is used for returning from a function , you can't use inside ternary operator
```

---

### Question 3 (PrepInsta quiz-1 - Q3)
**Question Stem:**
What will be the output of below code? 

  

 Integer a, b, c, d, e 

Set a=50 , b=3, c=3 e=0 

while(c&gt;0) 

d=a mod b 

e= e + d + a 

c= c - 1 

End while 

Print e

**Options:**
- **(A)** `165`
- **(B)** `160`
- **(C)** `170`
- **(D)** `Error`

**Correct Answer:** **(B)** `160`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
#include&lt;iostream&gt;


using namespace std;


int main()


{


    int a, b, c, d, e;


    a=50 , b=3, c=3, e=0;


    while(c&gt;0)


    {


        d=a % b;


        e= e + d + a;


        c= c - 1;


    }


    cout&lt;&lt;e;


    return 0;


}
```

---

### Question 4 (PrepInsta quiz-1 - Q4)
**Question Stem:**
for (i = 1; i &lt;= 6; i++) 

for (j = i; j &lt; 6; j++) 

Print blank space 

for (k = 1; k &lt; (i * 2); k++) 

Print * 

End for 

Line break 

End for

**Options:**
- **(A)** `*`

**Correct Answer:** **(C)** `*
***
*****
*******
*********
***********`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
Refer this code for the given pseudo code for better understanding, this pseudo code will print a pyramid of * with six rows each row having an odd number of * from 1 to 11 i.e the first row will have 1st star and the 6th row will have 11 starts


#include&lt;stdio.h&gt;


int main ()


{


int i, j, k;


for (i = 1; i &lt;= 6; i++)


{


for (j = i; j &lt; 6; j++)


{


printf (" ");


}


for (k = 1; k &lt; (i * 2); k++)


{


printf ("*");


}


printf ("\n");


}}
```

---

### Question 5 (PrepInsta quiz-1 - Q5)
**Question Stem:**
What will be the output of the following algorithm? 

  

 Start 

Declare a=0, I and b 

for I =0 to 4 

Increment a by 1 

if I = 3 then 

print hello 

get out of the loop 

End if 

End for 

print a

**Options:**
- **(A)** `Hello4`
- **(B)** `Hello`
- **(C)** `Hello3`
- **(D)** `Error`

**Correct Answer:** **(A)** `Hello4`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
Explanation:


Inside the loop with a value of I from 0 to 4, it will increment the value of 4 times that will be equal to 1, 2, 3, and 4.


but first inside the for loop hello will be printed when the value of I = 3


and at last, a will be printed i.e 4so the output will be hello4
```

---

### Question 6 (PrepInsta quiz-1 - Q6)
**Question Stem:**
What will be the output of below code? 

  #include&lt;stdio.h&gt; 

int 

f (int n) 

{ 

  static int a = 0; 

  if (n &lt;= 0) 

    { 

      return 1; 

    } 

  if (n &gt; 3) 

    { 

      a = n; 

      return f (n - 2) + 2; 

    } 

  return f (n - 1) + a; 

} 

 

int main () 

{ 

  printf ("Result: %d", f (5)); 

  return 0; 

}

**Options:**
- **(A)** `20`
- **(B)** `18`
- **(C)** `16`
- **(D)** `Error`

**Correct Answer:** **(B)** `18`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
Explanation:


There are no errors in the given code, the output produced by the code is 18
```

---

### Question 7 (PrepInsta quiz-1 - Q7)
**Question Stem:**
What will be the output of below code? 

  

 integer a 

if((a mod 10) IS EQUAL TO 0) 

a=a*2 

else if((a mod 5 ) IS EQUAL TO 0) 

a=a/5 

else 

a=a-1 

end if

**Options:**
- **(A)** `5, 15`
- **(B)** `15, 5`
- **(C)** `25, 5`
- **(D)** `Compiler Error`

**Correct Answer:** **(A)** `5, 15`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
#include&lt;iostream&gt;


using namespace std;


int main()


{


int a =16;


if((a % 10)== 0)


a=a*2;


else if((a % 5 )== 0)


a=a/5;


else


a=a-1;


cout&lt;&lt;a;


return 0;


}
```

---

### Question 8 (PrepInsta quiz-1 - Q8)
**Question Stem:**
integer a,b; 

Set a=2; b=50; 

while(b&gt;0) 

a = b%2 + a; 

if( a MOD 2 Is Equal To 0) 

Printf a 

else 

Print b-1 

b = b/5 

a=a+1 

End while

**Options:**
- **(A)** `2 9 4`
- **(B)** `4 9 2`
- **(C)** `8 18 4`
- **(D)** `Error`

**Correct Answer:** **(A)** `2 9 4`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
Explanation:


Step 1:


Condition true for the while loop


a = 2


Condition true for if


Value of an i.e 2 will get printed


Now b=10


and a=3


Step 2:


Condition true for the while loop


a = 3


Condition false for if, else will get printed


i.e. 9 will get printed


Now b=2


and a=4


Step 3:


Condition true for the while loop


a = 4


Condition true for if


Value of an i.e 4 will get printed


Now b=0


and a=5


Step 4:


Condition false for while. Exit
```

---

### Question 9 (PrepInsta quiz-1 - Q9)
**Question Stem:**
Integer array1[10] = {2, 3, 56, 34} 

Integer k, a, j, n 

Set a = 3, n = 4 

for(each k from 0 to n-1) 

Set array1[n] = array1[0] 

for(each j from 0 to n-1) 

Set array1[j] = array1[j+1] 

End for 

End for 

for(each k from 0 to n-1) 

Print array1[k] 

End for

**Options:**
- **(A)** `2 3 56 34`
- **(B)** `12 13 56 34`
- **(C)** `3 4 12 13`
- **(D)** `None of the mentioned`

**Correct Answer:** **(A)** `2 3 56 34`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
#include&lt;iostream&gt;


using namespace std;


int main()


{


int array1[10] = {2, 3, 56, 34};


int k, a, j, n;


a = 3, n = 4;


for(k=0 ;k&lt;=n-1;k++)


{


array1[n] = array1[0];


for(j=0;j&lt;=n-1;j++)


array1[j] = array1[j+1];


}


for(k=0;k&lt;=n-1;k++)


cout&lt;&lt;array1[k]&lt;&lt;" ";


return 0;


}
```

---

### Question 10 (PrepInsta quiz-1 - Q10)
**Question Stem:**
What will be the output of the following pseudocode? 

  

 Integer x,y,z 

Set x=3 

Set y=90 

while(y is greater than 0); 

y=y/3 

x=x+6 

c=x+y 

while(c is greater than 30): 

if(c mod 3 is equals to 0): 

Write x 

else: 

Write y 

c=c/5 

Write c

**Options:**
- **(A)** `9 18 15`
- **(B)** `6 33 9`
- **(C)** `9 33 6`
- **(D)** `None of the mentioned`

**Correct Answer:** **(C)** `9 33 6`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
This pseudocode performs some simple mathematical operations until the value of y is greater than 0 and c is greater than 30 and prints the value of x, y, and z.


below is the Python code for this pseudo code:


x=3


x=3


y=90


while(y&gt;0):


y=y//3


x=x+6


c=x+y


while(c&gt;30):


if(c % 3 == 0):


print(x)


else:


print (y)


c=c//5


print(c)
```

---
