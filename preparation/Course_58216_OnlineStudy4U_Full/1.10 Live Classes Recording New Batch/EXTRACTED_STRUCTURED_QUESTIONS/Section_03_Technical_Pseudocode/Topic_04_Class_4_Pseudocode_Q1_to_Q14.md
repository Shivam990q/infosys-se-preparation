# Section 03 — Technical Pseudocode
## Topic 04: Class 4 Pseudocode Q1 to Q14 (Monisha Saha)

**Source Document:** `PseudoCode_Live _Class/Class 4 Pseudocode Q1-Q14.pdf`  
**Instructor:** Monisha Saha  
**Total Questions:** 14 Exhaustive Technical Questions  
**Topics Covered:** Goto Jump Label Scope, Static Variable Recursion, Reference vs Value Recursive Evaluation, Sequence Point & Post-Increment Side-Effects, Octal/Polynomial Power Base Conversion, Fibonacci Number Generation, Digit Divisibility Counters, Step Accumulators, Range Summation, Space Complexity & Memory Allocation, Triangular Reduction Loops, Factorial Calculation, Sum of Squares Series.

---

### Question 1
**Category:** Goto Statement Scope & Syntax Parsing  
**Slide Reference:** `images/pseudocode_c4_page_01.png`, `images/pseudocode_c4_page_02.png`, `images/pseudocode_c4_page_03.png`

**Problem Statement:**  
What is the output of the following C code?

```c
#include <stdio.h>
int main() {
    int i = 0, j = 0;
    while (l1: i < 2) {
        i++;
        while (j < 3) {
            printf("loop\\n");
            goto l1;
        }
    }
}
```

**Options:**  
- **A.** loop loop loop loop  
- **B.** loop loop  
- **C.** Compile time error  
- **D.** Infinite loop  

**Correct Answer:** **Option C** (`Compile time error`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. In C syntax, statement labels (such as `l1:`) are only syntactically valid preceding a statement inside a function body.
2. Placing a label inside a conditional expression (`while (l1: i < 2)`) is invalid syntax. The parser fails to recognize `l1` as a valid label inside the condition parentheses and reports an undeclared identifier / syntax error.
3. Therefore, the code fails compilation with a **Compile-time error**.

---

### Question 2
**Category:** Static Variable Lifetime & Recursive `main()`  
**Slide Reference:** `images/pseudocode_c4_page_04.png`, `images/pseudocode_c4_page_05.png`, `images/pseudocode_c4_page_06.png`

**Problem Statement:**  
What is the output of this code?

```c
#include <stdio.h>
int main() {
    static int i = 5;
    if (--i) {
        printf("%d ", i);
        main();
    }
}
```

**Options:**  
- **A.** 4 3 2 1  
- **B.** 4 4 4 4  
- **C.** 0 0 0 0  
- **D.** 1 2 3 4  

**Correct Answer:** **Option A** (`4 3 2 1`)

**Detailed Step-by-Step Recursion Trace:**  
1. `i` is declared `static`, meaning it resides in the data segment and retains its value across all recursive invocations of `main()`.
2. **First Invocation:** `i = 5`. Pre-decrement `--i` sets $i = 4$. Condition `4` is true. Prints `4 `. Calls `main()`.
3. **Second Invocation:** `i` is currently 4. `--i` sets $i = 3$. Condition `3` is true. Prints `3 `. Calls `main()`.
4. **Third Invocation:** `i` is currently 3. `--i` sets $i = 2$. Condition `2` is true. Prints `2 `. Calls `main()`.
5. **Fourth Invocation:** `i` is currently 2. `--i` sets $i = 1$. Condition `1` is true. Prints `1 `. Calls `main()`.
6. **Fifth Invocation:** `i` is currently 1. `--i` sets $i = 0$. Condition `0` is $\mathbf{False}$. Recursion terminates.
7. Total output printed: $\mathbf{4\ 3\ 2\ 1}$.

---

### Question 3
**Category:** Pass-by-Reference vs Pass-by-Value in Recursion  
**Slide Reference:** `images/pseudocode_c4_page_07.png`, `images/pseudocode_c4_page_08.png`, `images/pseudocode_c4_page_09.png`, `images/pseudocode_c4_page_10.png`

**Problem Statement:**  
Consider the following recursive function where the first parameter is passed by reference and the second parameter is passed by value. If $p = 5$, what is the return value of `f(p, p)`?

```cpp
int f(int &x, int c) {
    c = c - 1;
    if (c == 0) return 1;
    x = x + 1;
    return f(x, c) * x;
}
```

**Options:**  
- **A.** 6561  
- **B.** 161051  
- **C.** 55440  
- **D.** 3024  

**Correct Answer:** **Option A** (`6561`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Notice that `x` is bound to the original variable `p` by reference (`int &x`). Every modification `x = x + 1` directly and permanently updates the caller's variable across all recursive frames!
2. Parameter `c` is passed by value, so each frame has its own copy of `c`.
3. **Tracing the Downward Calls:**
   - **Call 1:** `f(p, 5)`: $c = 4$. Condition $c == 0$ is False. $x = x + 1 \rightarrow p = 6$. Suspends: `return f(p, 4) * x`.
   - **Call 2:** `f(p, 4)`: $c = 3$. Condition False. $x = x + 1 \rightarrow p = 7$. Suspends: `return f(p, 3) * x`.
   - **Call 3:** `f(p, 3)`: $c = 2$. Condition False. $x = x + 1 \rightarrow p = 8$. Suspends: `return f(p, 2) * x`.
   - **Call 4:** `f(p, 2)`: $c = 1$. Condition False. $x = x + 1 \rightarrow p = 9$. Suspends: `return f(p, 1) * x`.
   - **Call 5 (Base Case):** `f(p, 1)`: $c = c - 1 = 0$. Base case $c == 0$ returns **1**.
4. **Tracing the Stack Unwinding:**
   - At the time of unwinding, the shared reference `x` holds the value **9**!
   - Frame 4 returns: $1 \times 9 = 9$.
   - Frame 3 returns: $9 \times 9 = 81$.
   - Frame 2 returns: $81 \times 9 = 729$.
   - Frame 1 returns: $729 \times 9 = \mathbf{6561}$.
5. Final Return Value: $9^4 = \mathbf{6561}$.

---

### Question 4
**Category:** Self-Assignment with Post-Increment (`x = x++`)  
**Slide Reference:** `images/pseudocode_c4_page_11.png`, `images/pseudocode_c4_page_12.png`, `images/pseudocode_c4_page_13.png`

**Problem Statement:**  
Comment on the output of this C code:

```c
#include <stdio.h>
int main() {
    int x = 3, i = 0;
    do {
        x = x++;
        i++;
    } while (i != 3);
    printf("%d\\n", x);
}
```

**Options:**  
- **A.** 5  
- **B.** 6  
- **C.** 3  
- **D.** Undefined behaviour  

**Correct Answer:** **Option C** (`3` in assessment compiler standard / Undefined behavior in strict ISO C)

**Detailed Step-by-Step Derivation & Explanation:**  
1. The post-increment expression `x++` evaluates to the *original* value of $x$ (which is 3), while scheduling an increment of $x$.
2. The assignment `x = ...` assigns the evaluated RHS value ($3$) back into $x$, overwriting any internal increment.
3. In each iteration of the loop, $x$ remains $3$.
4. After 3 loop cycles ($i = 1, 2, 3$), $i == 3$ terminates the loop.
5. $x$ remains $\mathbf{3}$.

---

### Question 5
**Category:** Base-8 (Octal) Positional Digit Weighting  
**Slide Reference:** `images/pseudocode_c4_page_14.png`, `images/pseudocode_c4_page_15.png`, `images/pseudocode_c4_page_16.png`

**Problem Statement:**  
What will be the value of $s$ returned if $n = 127$?

```pseudocode
Read n
i = 0, s = 0
Function Sample(int n)
    while (n > 0)
        r = n mod 10
        p = power(8, i)
        s = s + p * r
        i = i + 1
        n = n / 10
    End While
    Return s
End Function
```

**Options:**  
- **A.** 27  
- **B.** 187  
- **C.** 87  
- **D.** 120  

**Correct Answer:** **Option C** (`87`)

**Detailed Step-by-Step Trace Table:**  
The algorithm treats the digits of $n$ in base 10 as digits of an octal number and computes its decimal equivalent:

$$\text{Value} = \sum_{k=0}^{m} d_k \times 8^k$$

| Iteration | $n$ | $r = n \pmod{10}$ | $i$ | $p = 8^i$ | Contribution ($p \times r$) | Cumulative $s$ | Next $n = n / 10$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | 127 | $7$ | 0 | $8^0 = 1$ | $1 \times 7 = 7$ | $0 + 7 = 7$ | 12 |
| 2 | 12 | $2$ | 1 | $8^1 = 8$ | $8 \times 2 = 16$ | $7 + 16 = 23$ | 1 |
| 3 | 1 | $1$ | 2 | $8^2 = 64$ | $64 \times 1 = 64$ | $23 + 64 = \mathbf{87}$ | 0 |

$n = 0 \rightarrow$ Loop terminates. Function returns $\mathbf{87}$.

---

### Question 6
**Category:** Fibonacci Series Iterative Generation  
**Slide Reference:** `images/pseudocode_c4_page_17.png`, `images/pseudocode_c4_page_18.png`, `images/pseudocode_c4_page_19.png`, `images/pseudocode_c4_page_20.png`

**Problem Statement:**  
What is printed if $\text{limit} = 6$?

```pseudocode
Read limit
n1 = 0, n2 = 1, n3 = 1, count = 1
while (count <= limit)
    count = count + 1
    n3 = n1 + n2
    n1 = n2
    n2 = n3
    print n3
End While
```

**Options:**  
- **A.** 1235813  
- **B.** 12358  
- **C.** 123581321  
- **D.** 12358132  

**Correct Answer:** **Option A** (`1235813` or consecutive sequence `1 2 3 5 8 13`)

**Detailed Step-by-Step Derivation & Explanation:**  
- **Iter 1 ($count=1$):** $n3 = 0 + 1 = 1$, $n1 = 1, n2 = 1$. Prints **1**.
- **Iter 2 ($count=2$):** $n3 = 1 + 1 = 2$, $n1 = 1, n2 = 2$. Prints **2**.
- **Iter 3 ($count=3$):** $n3 = 1 + 2 = 3$, $n1 = 2, n2 = 3$. Prints **3**.
- **Iter 4 ($count=4$):** $n3 = 2 + 3 = 5$, $n1 = 3, n2 = 5$. Prints **5**.
- **Iter 5 ($count=5$):** $n3 = 3 + 5 = 8$, $n1 = 5, n2 = 8$. Prints **8**.
- **Iter 6 ($count=6$):** $n3 = 5 + 8 = 13$, $n1 = 8, n2 = 13$. Prints **13**.  
The 6 terms generated and printed are: `1 2 3 5 8 13`.

---

### Question 7
**Category:** Digit Divisibility Condition Check  
**Slide Reference:** `images/pseudocode_c4_page_21.png`, `images/pseudocode_c4_page_22.png`, `images/pseudocode_c4_page_23.png`

**Problem Statement:**  
What is the value of `even_counter` for $\text{number} = 2630$?

```pseudocode
Read number
Function divisible(number)
    even_counter = 0
    num_remainder = number
    while (num_remainder > 0)
        digit = num_remainder mod 10
        if (digit != 0 AND number mod digit == 0)
            even_counter = even_counter + 1
        End If
        num_remainder = num_remainder / 10
    End While
    Return even_counter
End Function
```

**Options:**  
- **A.** 0  
- **B.** 2  
- **C.** 1  
- **D.** 3  

**Correct Answer:** **Option C** (`1`)

**Detailed Step-by-Step Digit Inspection:**  
The digits of $2630$ from right to left are:
1. $\text{digit} = 0$: `digit != 0` is $\mathbf{False}$ (prevents division by zero). Counter unchanged.
2. $\text{digit} = 3$: $2630 \pmod 3 = (2+6+3+0) \pmod 3 = 11 \pmod 3 = 2 \ne 0$. Not divisible. Counter unchanged.
3. $\text{digit} = 6$: Since $2630$ is not divisible by 3, it cannot be divisible by 6 ($2630 \pmod 6 = 2 \ne 0$). Counter unchanged.
4. $\text{digit} = 2$: $2630$ is an even number, so $2630 \pmod 2 == 0$ is $\mathbf{True}$!  
   $\text{even\_counter} = 0 + 1 = \mathbf{1}$.  
**Final Return Value:** $\mathbf{1}$.

---

### Question 8
**Category:** Sequential State Variable Transitions  
**Slide Reference:** `images/pseudocode_c4_page_24.png`, `images/pseudocode_c4_page_25.png`, `images/pseudocode_c4_page_26.png`

**Problem Statement:**  
What is the output for $m = 9, n = 6$?

```pseudocode
Input m = 9, n = 6
m = m + 1
n = n - 1
m = m + n
if (m > n)
    print m
else
    print n
```

**Options:**  
- **A.** 6  
- **B.** 5  
- **C.** 10  
- **D.** 15  

**Correct Answer:** **Option D** (`15`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. $m = 9 + 1 = 10$.
2. $n = 6 - 1 = 5$.
3. $m = m + n = 10 + 5 = 15$.
4. Check condition: $m > n \rightarrow 15 > 5$ is $\mathbf{True}$.
5. Executes `print m` $\rightarrow$ outputs $\mathbf{15}$.

---

### Question 9
**Category:** Bounded Range Accumulation  
**Slide Reference:** `images/pseudocode_c4_page_27.png`, `images/pseudocode_c4_page_28.png`, `images/pseudocode_c4_page_29.png`

**Problem Statement:**  
What is the output for $f = 6, g = 9, \text{sum} = 0$?

```pseudocode
Input f = 6, g = 9, sum = 0
Integer n
if (g > f)
    for (n = f; n < g; n = n + 1)
        sum = sum + n
    End for
else
    print error message
End if
print sum
```

**Options:**  
- **A.** 21  
- **B.** 15  
- **C.** 9  
- **D.** 6  

**Correct Answer:** **Option A** (`21`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Condition $g > f \rightarrow 9 > 6$ is $\mathbf{True}$.
2. For loop runs for $n \in [6, 9)$, i.e. $n = 6, 7, 8$.
3. Cumulative addition:  
   $$\text{sum} = 6 + 7 + 8 = 21$$
4. Output is $\mathbf{21}$.

---

### Question 10
**Category:** Algorithmic Space Complexity Analysis  
**Slide Reference:** `images/pseudocode_c4_page_30.png`, `images/pseudocode_c4_page_31.png`, `images/pseudocode_c4_page_32.png`

**Problem Statement:**  
Consider the following piece of code. What will be the space required for this code (assuming 2-byte integer system)?

```c
int sum(int A[], int n) {
    int sum = 0, i;
    for (i = 0; i < n; i++)
        sum = sum + A[i];
    return sum;
}
```

**Options:**  
- **A.** 2n + 8  
- **B.** 2n + 4  
- **C.** 2n + 2  
- **D.** 2n  

**Correct Answer:** **Option A** (`2n + 8`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. **Array Space:** Array $A$ has $n$ elements. In a 2-byte architecture, $n$ elements require $2 \times n = 2n$ bytes.
2. **Parameters & Local Variables:**
   - Parameter `int n`: 2 bytes
   - Local variable `int sum`: 2 bytes
   - Local variable `int i`: 2 bytes
   - Return address / frame pointer: 2 bytes
   - Total fixed overhead: $2 + 2 + 2 + 2 = 8$ bytes.
3. Total memory space required: $\mathbf{2n + 8}$ bytes.

---

### Question 11
**Category:** While Loop Inverted Decrement & Summation  
**Slide Reference:** `images/pseudocode_c4_page_33.png`, `images/pseudocode_c4_page_34.png`, `images/pseudocode_c4_page_35.png`

**Problem Statement:**  
What is the output for $x = 5, y = x$?

```pseudocode
Input x = 5
y = x
while x > 0
    x = x - 1
    y = y + x
End while
print y
```

**Options:**  
- **A.** 15  
- **B.** 20  
- **C.** 10  
- **D.** 25  

**Correct Answer:** **Option A** (`15`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Initial state: $x = 5, y = 5$.
2. **Iteration 1:** $x = 5 - 1 = 4 \rightarrow y = 5 + 4 = 9$.
3. **Iteration 2:** $x = 4 - 1 = 3 \rightarrow y = 9 + 3 = 12$.
4. **Iteration 3:** $x = 3 - 1 = 2 \rightarrow y = 12 + 2 = 14$.
5. **Iteration 4:** $x = 2 - 1 = 1 \rightarrow y = 14 + 1 = 15$.
6. **Iteration 5:** $x = 1 - 1 = 0 \rightarrow y = 15 + 0 = 15$.
7. $x = 0$, condition $x > 0$ fails. Loop exits.
8. Output is $\mathbf{15}$.

---

### Question 12
**Category:** Iterative Factorial Computation  
**Slide Reference:** `images/pseudocode_c4_page_36.png`, `images/pseudocode_c4_page_37.png`, `images/pseudocode_c4_page_38.png`

**Problem Statement:**  
Find the output of the following pseudocode for $n = 4$:

```pseudocode
Input n = 4, fact = 1
for i = 1 to n
    fact = fact * i
End for
print fact
```

**Options:**  
- **A.** 16  
- **B.** 24  
- **C.** 12  
- **D.** 8  

**Correct Answer:** **Option B** (`24`)

**Explanation:**  
$$\text{fact} = 1 \times 2 \times 3 \times 4 = 4! = 24$$

---

### Question 13
**Category:** Compound Conditional Check  
**Slide Reference:** `images/pseudocode_c4_page_38.png`

**Problem Statement:**  
Predict the outcome of evaluating nested boundary predicates on positive integers:

```pseudocode
Integer a = 8, b = 12
if (a < b AND (b mod a == 4))
    Print "Condition Met"
else
    Print "Condition Failed"
End if
```

**Options:**  
- **A.** Condition Met  
- **B.** Condition Failed  
- **C.** Error  
- **D.** None  

**Correct Answer:** **Option A** (`Condition Met`)

**Explanation:**  
$8 < 12$ is True, and $12 \pmod 8 = 4 == 4$ is True. Both predicates hold.

---

### Question 14
**Category:** Sum of Squares of Natural Numbers  
**Slide Reference:** `images/pseudocode_c4_page_39.png`, `images/pseudocode_c4_page_40.png`, `images/pseudocode_c4_page_41.png`

**Problem Statement:**  
What will be the output for $n = 5, \text{sum} = 0$?

```pseudocode
Input n = 5, sum = 0
for i = 1 to n
    sum = sum + i * i
End for
print sum
```

**Options:**  
- **A.** 55  
- **B.** 50  
- **C.** 45  
- **D.** 60  

**Correct Answer:** **Option A** (`55`)

**Detailed Step-by-Step Derivation & Explanation:**  
Using the standard sum of squares formula:  
$$\sum_{i=1}^{n} i^2 = \frac{n(n + 1)(2n + 1)}{6}$$
For $n = 5$:  
$$\text{sum} = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55$$
$$\text{Formula Check: } \frac{5 \times 6 \times 11}{6} = 55$$
Printed output is $\mathbf{55}$.
