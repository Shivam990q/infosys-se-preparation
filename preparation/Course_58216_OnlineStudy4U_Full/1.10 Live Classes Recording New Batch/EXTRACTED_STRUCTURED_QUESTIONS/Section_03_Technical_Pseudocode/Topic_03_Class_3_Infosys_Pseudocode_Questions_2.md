# Section 03 — Technical Pseudocode
## Topic 03: Class 3 Infosys Pseudocode Questions 2 (Monisha Saha)

**Source Document:** `PseudoCode_Live _Class/Class 3 Infosys Pseudocode Questions 2.pdf`  
**Instructor:** Monisha Saha  
**Total Questions:** 9 High-Frequency PYQ Questions  
**Topics Covered:** Default Uninitialized Values, For-Each Loop Dual Incrementation, State Array Transformations, Pre & Post Recursive Print Traversal, Array-wise Subtraction, Nested Loops with Inequality Filtering, Basic Selection & String Output, Loop Continuation Statements.

---

### Question 1
**Category:** Uninitialized Integer Defaults & Bitwise Shift  
**Slide Reference:** `images/pseudocode_c3_page_02.png`, `images/pseudocode_c3_page_03.png`

**Problem Statement:**  
What will be the value printed by the following pseudocode?

```pseudocode
Integer value, n, num
Set value = 1
Set n = 45
num = num >> 1
num = num + value
Print num
```

**Options:**  
- **A.** 44  
- **B.** 45  
- **C.** 1  
- **D.** 12  

**Correct Answer:** **Option C** (`1`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. In pseudocode assessment environments (Infosys standard), an integer declared without an explicit value is initialized to its default value $0$ (`num = 0`).
2. `num = num >> 1` $ightarrow 0 \gg 1 = 0$.
3. `num = num + value` $ightarrow 0 + 1 = 1$.
4. `Print num` outputs $\mathbf{1}$.

---

### Question 2
**Category:** For-Each Loop Semantics & Internal Step Mutation  
**Slide Reference:** `images/pseudocode_c3_page_04.png`, `images/pseudocode_c3_page_05.png`

**Problem Statement:**  
What will be the value printed by the following pseudocode?

```pseudocode
Integer x
for each x from 1 to 11
    x = x + 2
end for
Print x
```

**Options:**  
- **A.** 11  
- **B.** 10  
- **C.** 12  
- **D.** 13  

**Correct Answer:** **Option D** (`13`)

**Detailed Step-by-Step Trace Table:**  
In a `for each` loop iterating with index step $+1$, modifying the loop variable inside the body causes an additional jump of $+2$, resulting in an effective step of $+3$ per iteration:

| Iteration | Entry Value of $x$ | Body Update: $x = x + 2$ | Loop Increment ($+1$) | Next $x$ / Exit Check ($x \le 11$) |
|:---:|:---:|:---:|:---:|:---:|
| 1 | 1 | $1 + 2 = 3$ | $3 + 1 = 4$ | $4 \le 11 ightarrow$ Continue |
| 2 | 4 | $4 + 2 = 6$ | $6 + 1 = 7$ | $7 \le 11 ightarrow$ Continue |
| 3 | 7 | $7 + 2 = 9$ | $9 + 1 = 10$ | $10 \le 11 ightarrow$ Continue |
| 4 | 10 | $10 + 2 = 12$ | $12 + 1 = 13$ | $13 > 11 ightarrow$ **Loop Terminates** |

After loop termination, $x = \mathbf{13}$.

---

### Question 3
**Category:** Array Sequential Mutations & Conditional Overwrite  
**Slide Reference:** `images/pseudocode_c3_page_06.png`, `images/pseudocode_c3_page_07.png`

**Problem Statement:**  
Find the value of $m$ printed by the following pseudocode:

```pseudocode
Integer j, m
Set m = 1, j = 1
Integer a[3] = {0, 1, 0}
a[0] = a[0] + a[1]
a[1] = a[1] + a[2]
a[2] = a[2] + a[0]
if (a[0])
    a[j] = 5
End if
m = m + a[j]
Print m
```

**Options:**  
- **A.** 1  
- **B.** 5  
- **C.** 6  
- **D.** 7  

**Correct Answer:** **Option C** (`6`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Initial array: $a = \{0, 1, 0\}$, $m = 1, j = 1$.
2. `a[0] = a[0] + a[1] = 0 + 1 = 1`. Array: $\{1, 1, 0\}$.
3. `a[1] = a[1] + a[2] = 1 + 0 = 1`. Array: $\{1, 1, 0\}$.
4. `a[2] = a[2] + a[0] = 0 + 1 = 1`. Array: $\{1, 1, 1\}$.
5. Evaluate `if (a[0])`: $a[0] = 1$ (non-zero is $\mathbf{True}$).  
   - Execute body: $a[j] = 5 ightarrow a[1] = 5$.  
   - Array becomes: $\{1, 5, 1\}$.
6. Compute $m$:  
   $$m = m + a[j] = 1 + a[1] = 1 + 5 = 6$$
7. Print $m$ outputs $\mathbf{6}$.

---

### Question 4
**Category:** Bidirectional Recursion Stack Traversal (Pre- & Post-Order)  
**Slide Reference:** `images/pseudocode_c3_page_08.png`, `images/pseudocode_c3_page_09.png`

**Problem Statement:**  
What will be the output printed for `fun(150)`?

```pseudocode
fun(integer k)
    if (k > 155)
        return
    end if
    print k
    fun(k + 2)
    print k
End fun
```

**Options:**  
- **A.** 150 152 154  
- **B.** 150 152 154 154 152 150  
- **C.** 150 150 152 152 154 154  
- **D.** None  

**Correct Answer:** **Option B** (`150 152 154 154 152 150`)

**Detailed Step-by-Step Recursion Call Tree:**  
- `fun(150)`: prints **150** $ightarrow$ calls `fun(152)`
  - `fun(152)`: prints **152** $ightarrow$ calls `fun(154)`
    - `fun(154)`: prints **154** $ightarrow$ calls `fun(156)`
      - `fun(156)`: $156 > 155 ightarrow$ base case returns immediately without printing.
    - `fun(154)` resumes: prints **154**
  - `fun(152)` resumes: prints **152**
- `fun(150)` resumes: prints **150**

**Complete Sequence:** `150 152 154 154 152 150`.

---

### Question 5
**Category:** Parallel Array Element-Wise Subtraction  
**Slide Reference:** `images/pseudocode_c3_page_10.png`, `images/pseudocode_c3_page_11.png`

**Problem Statement:**  
What will be the output of the following pseudocode?

```pseudocode
Integer a[5] = {5, 9, 7, 3, 1}
Integer b[5] = {2, 4, 6, 8, 10}
Integer c[5]
for each k from 0 to 4
    c[k] = a[k] - b[k]
end for
for each l from 0 to 4
    Print c[l]
end for
```

**Options:**  
- **A.** 3 5 1 5 9  
- **B.** 3 5 1 -5 -9  
- **C.** -3 -5 -1 5 9  
- **D.** None  

**Correct Answer:** **Option B** (`3 5 1 -5 -9`)

**Detailed Element-by-Element Evaluation:**  
- $c[0] = a[0] - b[0] = 5 - 2 = \mathbf{3}$
- $c[1] = a[1] - b[1] = 9 - 4 = \mathbf{5}$
- $c[2] = a[2] - b[2] = 7 - 6 = \mathbf{1}$
- $c[3] = a[3] - b[3] = 3 - 8 = \mathbf{-5}$
- $c[4] = a[4] - b[4] = 1 - 10 = \mathbf{-9}$  
**Printed Stream:** `3 5 1 -5 -9`.

---

### Question 6
**Category:** Triangular Matrix / Inequality Filtered Loop Counting  
**Slide Reference:** `images/pseudocode_c3_page_12.png`, `images/pseudocode_c3_page_13.png`

**Problem Statement:**  
How many times will `"A"` be printed in the following pseudocode?

```pseudocode
Integer a, b
for a = 0 to 4
    for b = 0 to 2
        if (a > b) then
            Print "A"
        end if
    end for
end for
```

**Options:**  
- **A.** 12  
- **B.** 10  
- **C.** 9  
- **D.** 8  

**Correct Answer:** **Option C** (`9`)

**Detailed Step-by-Step Iteration Analysis:**  
The inner loop tests $b \in \{0, 1, 2\}$:
- For $a = 0$: $b \in \{0, 1, 2\}$. No $b$ satisfies $0 > b ightarrow \mathbf{0}$ prints.
- For $a = 1$: condition $1 > b$ holds for $b = 0 ightarrow \mathbf{1}$ print.
- For $a = 2$: condition $2 > b$ holds for $b \in \{0, 1\} ightarrow \mathbf{2}$ prints.
- For $a = 3$: condition $3 > b$ holds for $b \in \{0, 1, 2\} ightarrow \mathbf{3}$ prints.
- For $a = 4$: condition $4 > b$ holds for $b \in \{0, 1, 2\} ightarrow \mathbf{3}$ prints.  
**Total Prints:** $0 + 1 + 2 + 3 + 3 = \mathbf{9}$.

---

### Question 7
**Category:** Basic Conditional Decision Branching  
**Slide Reference:** `images/pseudocode_c3_page_14.png`, `images/pseudocode_c3_page_15.png`

**Problem Statement:**  
What will be the output of the following pseudocode?

```pseudocode
Integer x = 3, y = 5
if (x < y)
    Print "X is less than Y"
else
    Print "X is greater than Y"
end if
```

**Options:**  
- **A.** X is less than Y  
- **B.** X is greater than Y  
- **C.** X is equal to Y  
- **D.** None  

**Correct Answer:** **Option A** (`X is less than Y`)

**Explanation:**  
$3 < 5$ evaluates to $\mathbf{True}$, executing the `if` body and printing `"X is less than Y"`.

---

### Question 8
**Category:** Strict Equality Evaluation  
**Slide Reference:** `images/pseudocode_c3_page_16.png`, `images/pseudocode_c3_page_17.png`

**Problem Statement:**  
What will be the output of the following pseudocode?

```pseudocode
Integer a = 10, b = 20
if (a == b)
    Print "Equal"
else
    Print "Not Equal"
end if
```

**Options:**  
- **A.** Equal  
- **B.** Not Equal  
- **C.** Error  
- **D.** None  

**Correct Answer:** **Option B** (`Not Equal`)

**Explanation:**  
$10 == 20$ evaluates to $\mathbf{False}$, executing the `else` block and printing `"Not Equal"`.

---

### Question 9
**Category:** Loop Control Flow (`continue` Statement)  
**Slide Reference:** `images/pseudocode_c3_page_18.png`, `images/pseudocode_c3_page_19.png`

**Problem Statement:**  
What will be the output of the following pseudocode?

```pseudocode
Integer i
for i = 1 to 5
    if (i == 3)
        continue
    end if
    Print i
end for
```

**Options:**  
- **A.** 1 2 3 4 5  
- **B.** 1 2 4 5  
- **C.** 1 3 5  
- **D.** None  

**Correct Answer:** **Option B** (`1 2 4 5`)

**Explanation:**  
The `continue` statement skips the remainder of the current iteration when $i = 3$. Hence, $3$ is omitted from printing.  
Output: `1 2 4 5`.
