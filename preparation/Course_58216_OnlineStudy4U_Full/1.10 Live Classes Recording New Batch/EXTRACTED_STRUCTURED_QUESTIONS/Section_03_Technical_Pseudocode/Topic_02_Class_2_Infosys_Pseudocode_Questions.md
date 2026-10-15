# Section 03 — Technical Pseudocode
## Topic 02: Class 2 Infosys Pseudocode Questions (Monisha Saha)

**Source Document:** `PseudoCode_Live _Class/Class 2 Infosys Pseudocode Questions.pdf`  
**Instructor:** Monisha Saha  
**Total Questions:** 15 Comprehensive Questions  
**Topics Covered:** Recursive tree evaluation, Boolean short-circuit logic, Multi-base digit manipulation, While loop conditions with embedded assignment, Do-while loop convergence, Nested loop iteration tracking with early break, Switch-case fall-through semantics, Bitwise left/right shift arithmetic, Bitwise XOR transformations, Multi-variable accumulator tracing.

---

### Question 1
**Category:** Recursion Tree & Parity-Based Branching  
**Slide Reference:** `images/pseudocode_c2_page_02.png`, `images/pseudocode_c2_page_03.png`, `images/pseudocode_c2_page_04.png`

**Problem Statement:**  
Find the output of the recursive function `fun1(p, q)` for $p = 3, q = 4$:

```pseudocode
int fun1(int p, int q)
    if (q == 0)
        return 0
    if (q mod 2 == 0)
        return fun1(p + p, q / 2)
    return fun1(p + p, q / 2) + p
End
```

**Options:**  
- **A.** 7  
- **B.** 8  
- **C.** 12  
- **D.** None  

**Correct Answer:** **Option C** (`12`)

**Detailed Step-by-Step Recursion Tree:**  
1. **Call 1:** `fun1(3, 4)`
   - Check $q == 0 ightarrow 4 == 0$ is $	ext{False}$.
   - Check $q \pmod 2 == 0 ightarrow 4 \pmod 2 == 0$ is $\mathbf{True}$ (even parity).
   - Recursive call: `fun1(3 + 3, 4 / 2)` $ightarrow$ `fun1(6, 2)`.
2. **Call 2:** `fun1(6, 2)`
   - Check $q == 0 ightarrow 2 == 0$ is $	ext{False}$.
   - Check $q \pmod 2 == 0 ightarrow 2 \pmod 2 == 0$ is $\mathbf{True}$ (even parity).
   - Recursive call: `fun1(6 + 6, 2 / 2)` $ightarrow$ `fun1(12, 1)`.
3. **Call 3:** `fun1(12, 1)`
   - Check $q == 0 ightarrow 1 == 0$ is $	ext{False}$.
   - Check $q \pmod 2 == 0 ightarrow 1 \pmod 2 == 1$ is $	ext{False}$ (odd parity).
   - Evaluates: `return fun1(12 + 12, 1 / 2) + 12` $ightarrow$ `fun1(24, 0) + 12`.
4. **Call 4 (Base Case):** `fun1(24, 0)`
   - Check $q == 0 ightarrow 0 == 0$ is $\mathbf{True}$.
   - Returns $0$.
5. **Unwinding the Stack:**  
   - `fun1(12, 1)` returns $0 + 12 = 12$.
   - `fun1(6, 2)` returns $12$.
   - `fun1(3, 4)` returns $12$.  
**Final Output:** $\mathbf{12}$.

---

### Question 2
**Category:** Truthy/Falsy Arithmetic & Logical Operators  
**Slide Reference:** `images/pseudocode_c2_page_05.png`, `images/pseudocode_c2_page_06.png`, `images/pseudocode_c2_page_07.png`

**Problem Statement:**  
Find the value of $a$ printed by the following pseudocode:

```pseudocode
Integer x, y, z, a
Set x = 2, y = 1, z = 5
a = (x AND y) OR (z + 1)
Print a
```

**Options:**  
- **A.** 5  
- **B.** 3  
- **C.** 2  
- **D.** 1  

**Correct Answer:** **Option D** (`1`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. **Rule of Logical Evaluation:** In standard pseudo-code boolean logic, any non-zero integer is evaluated as $\mathbf{True}$ (1), while $0$ is $\mathbf{False}$ (0).
2. **Sub-expression 1 (`x AND y`):**  
   - $x = 2 ightarrow \mathbf{True}$, $y = 1 ightarrow \mathbf{True}$.  
   - $\mathbf{True} \land \mathbf{True} = \mathbf{True} \equiv 1$.
3. **Sub-expression 2 (`z + 1`):**  
   - $z + 1 = 5 + 1 = 6 ightarrow \mathbf{True}$.
4. **Logical Disjunction:**  
   - $1 	ext{ OR } 6 ightarrow \mathbf{True} \lor \mathbf{True} = \mathbf{True} \equiv 1$.
5. Printing $a$ outputs $\mathbf{1}$.

---

### Question 3
**Category:** Linear Tail Recursion & Accumulator  
**Slide Reference:** `images/pseudocode_c2_page_08.png`, `images/pseudocode_c2_page_09.png`

**Problem Statement:**  
Find the output for `doSomething(2, 3)`:

```pseudocode
Integer doSomething(Integer a, Integer b)
    if (b == 1)
        return 0
    else
        return a + doSomething(a, b - 1)
End Function
```

**Options:**  
- **A.** 3  
- **B.** 4  
- **C.** 2  
- **D.** 1  

**Correct Answer:** **Option B** (`4`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. `doSomething(2, 3)` $ightarrow 2 + 	ext{doSomething}(2, 2)$.
2. `doSomething(2, 2)` $ightarrow 2 + 	ext{doSomething}(2, 1)$.
3. `doSomething(2, 1)`: Base case $b == 1$ is $\mathbf{True}$, returns $0$.
4. Back-substituting:  
   $$	ext{doSomething}(2, 2) = 2 + 0 = 2$$
   $$	ext{doSomething}(2, 3) = 2 + 2 = 4$$
5. Printed result is $\mathbf{4}$.

---

### Question 4
**Category:** Digit Counting & Polynomial Power Decomposition  
**Slide Reference:** `images/pseudocode_c2_page_10.png`, `images/pseudocode_c2_page_11.png`

**Problem Statement:**  
Determine the outputs printed by the following algorithm for input $a = 123$:

```pseudocode
Integer a = 123, n = 0, sum = 0, q, r
Set q = a
while (q != 0)
    n = n + 1
    q = q / 10
End while
Print n

while (a > 0)
    r = a mod 10
    sum = sum + r
    a = a / power(10, n - 1)
End while
Print sum
```

**Options:**  
- **A.** 3 and 6  
- **B.** 3 and 5  
- **C.** 2 and 4  
- **D.** 3 and 4  

**Correct Answer:** **Option D** (`3 and 4`)

**Detailed Step-by-Step Trace Table:**  
1. **First Loop (Digit Count):**
   - $q = 123 ightarrow n = 1, q = 12$
   - $q = 12 ightarrow n = 2, q = 1$
   - $q = 1 ightarrow n = 3, q = 0$
   - Loop exits. First output printed: $\mathbf{3}$.
2. **Second Loop (Digit Sum with Truncation):**
   - $n = 3$, so $	ext{power}(10, n - 1) = 10^{3 - 1} = 10^2 = 100$.
   - **Iteration 1:**  
     $r = 123 \pmod{10} = 3$.  
     $	ext{sum} = 0 + 3 = 3$.  
     $a = 123 / 100 = 1$ (integer division).
   - **Iteration 2:**  
     $r = 1 \pmod{10} = 1$.  
     $	ext{sum} = 3 + 1 = 4$.  
     $a = 1 / 100 = 0$.
   - $a = 0$, loop exits. Second output printed: $\mathbf{4}$.
3. Final pair of outputs: `3` and `4`.

---

### Question 5
**Category:** Multi-branch Conditional Flow (`If / Else-if / Else`)  
**Slide Reference:** `images/pseudocode_c2_page_12.png`, `images/pseudocode_c2_page_13.png`

**Problem Statement:**  
Find the values of $a$ and $c$ printed by the following pseudocode:

```pseudocode
Integer a = 5, b = 8, c = 0
if (a > 8 OR b < 7)
    c = a + b
else if (a + b > 9)
    c = a - b
else
    a = a + 5
    c = c - 2
End if
a = a + b
Print a, c
```

**Options:**  
- **A.** 13, 13  
- **B.** 10, -3  
- **C.** 13, 3  
- **D.** 13, -3  

**Correct Answer:** **Option D** (`13, -3`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Check first branch: `a > 8 OR b < 7` $ightarrow 5 > 8 \lor 8 < 7 \equiv \mathbf{False} \lor \mathbf{False} \equiv \mathbf{False}$.
2. Check `else if` branch: `a + b > 9` $ightarrow 5 + 8 = 13 > 9 \equiv \mathbf{True}$.
3. Execute branch body:  
   $$c = a - b = 5 - 8 = -3$$
4. After conditional block executes:  
   $$a = a + b = 5 + 8 = 13$$
5. Print $a, c ightarrow \mathbf{13, -3}$.

---

### Question 6
**Category:** Loop Invariant & Assignment in Condition (Infinite Loop)  
**Slide Reference:** `images/pseudocode_c2_page_14.png`, `images/pseudocode_c2_page_15.png`

**Problem Statement:**  
What happens when the following pseudocode is executed?

```pseudocode
Integer salary = 5000
while (salary = salary + 1000)
    Print salary
End while
```

**Options:**  
- **A.** Code executes successfully and value of salary is displayed once.  
- **B.** Code executes successfully and nothing is displayed.  
- **C.** Code executes successfully and value of salary is displayed infinite number of times.  
- **D.** Compile time error.  

**Correct Answer:** **Option C** (`Code executes successfully and value of salary is displayed infinite number of times`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Inside the `while` header, the statement `salary = salary + 1000` is an assignment operator (`=`), not a comparison (`==`).
2. In C/Java/Pseudocode semantics, an assignment expression evaluates to the assigned value.
3. In iteration 1, `salary` becomes `6000`, which is non-zero ($\mathbf{True}$). The loop executes and prints 6000.
4. In each subsequent iteration, `salary` increases monotonically ($7000, 8000, \dots$), continuously evaluating to a non-zero truthy value.
5. The loop condition is perpetually true, resulting in an infinite loop printing salary endlessly.

---

### Question 7
**Category:** Do-While Loop Alternating State  
**Slide Reference:** `images/pseudocode_c2_page_16.png`, `images/pseudocode_c2_page_17.png`

**Problem Statement:**  
What will be the outcome of running this do-while loop?

```pseudocode
Integer res = 1
do
    res = res + 1
    res = res - 1
    Print res
while (res > 0)
```

**Options:**  
- **A.** Code will run infinite number of times  
- **B.** The program will not enter the loop  
- **C.** Code will execute and value of res will be displayed twice  
- **D.** Code will execute and value of res will be displayed once  

**Correct Answer:** **Option A** (`Code will run infinite number of times`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Initial value: $res = 1$.
2. Inside the `do` block:  
   - $res = res + 1 = 2$  
   - $res = res - 1 = 1$  
   - Print `res` $ightarrow$ outputs `1`.
3. Check `while (res > 0)` $ightarrow 1 > 0$ is $\mathbf{True}$.
4. Because the net change in each iteration is $+1 - 1 = 0$, $res$ is always $1$ at condition check time.
5. Condition $1 > 0$ is perpetually satisfied, causing an infinite loop.

---

### Question 8
**Category:** Nested Loops & Early Break Statement  
**Slide Reference:** `images/pseudocode_c2_page_18.png`, `images/pseudocode_c2_page_19.png`

**Problem Statement:**  
How many times is `'#'` printed in the following nested loops?

```pseudocode
Integer m, n
for m = 0 to 4
    for n = 0 to 4
        display "#"
    end-for
    if (m == 2) then
        break
    end-if
end-for
```

**Options:**  
- **A.** 15  
- **B.** 25  
- **C.** 10  
- **D.** 20  

**Correct Answer:** **Option A** (`15`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. **Outer Loop $m = 0$:**  
   - Inner loop runs $n = 0, 1, 2, 3, 4$ (5 iterations). Prints `'#'` 5 times.  
   - Condition `m == 2` ($0 == 2$) is False. Outer loop continues.
2. **Outer Loop $m = 1$:**  
   - Inner loop runs $n = 0, 1, 2, 3, 4$ (5 iterations). Prints `'#'` 5 times (cumulative 10).  
   - Condition `m == 2` ($1 == 2$) is False. Outer loop continues.
3. **Outer Loop $m = 2$:**  
   - Inner loop runs $n = 0, 1, 2, 3, 4$ (5 iterations). Prints `'#'` 5 times (cumulative 15).  
   - Condition `m == 2` ($2 == 2$) is **True**. `break` executes immediately and terminates the outer loop.
4. Total times `'#'` displayed = $5 + 5 + 5 = 15$.

---

### Question 9
**Category:** Side-Effects in Pre/Post Increment  
**Slide Reference:** `images/pseudocode_c2_page_20.png`, `images/pseudocode_c2_page_21.png`

**Problem Statement:**  
Predict the output of the following pseudocode:

```pseudocode
Integer i
for i = 0 to 4
    if (i == i++ + --i) then
        display i
    end-if
end-for
```

**Options:**  
- **A.** 0  
- **B.** 1  
- **C.** 2  
- **D.** 4  

**Correct Answer:** **Option A** (`0`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. When $i = 0$:
   - `i++` evaluates to $0$ and schedules increment to $1$.
   - `--i` immediately decrements from $1$ back to $0$, returning $0$.
   - RHS expression: $0 + 0 = 0$.
   - LHS is $0$. $0 == 0$ evaluates to $\mathbf{True}$.
   - Statement `display i` executes and outputs $\mathbf{0}$.
2. For subsequent values ($i \ge 1$), the combined increment/decrement side-effects mismatch $i$, so the condition is never re-satisfied.

---

### Question 10
**Category:** Switch-Case Fall-Through Execution  
**Slide Reference:** `images/pseudocode_c2_page_22.png`, `images/pseudocode_c2_page_23.png`

**Problem Statement:**  
What is the exact output printed by the following code?

```pseudocode
Set Character c = '7'
switch (c)
    case '1':
        display "One"
    case '7':
        display "Seven"
    case '2':
        display "Two"
    default:
        display "Hello"
        break
end-switch
```

**Options:**  
- **A.** SevenTwoHello  
- **B.** Seven  
- **C.** SevenTwo  
- **D.** Hello  

**Correct Answer:** **Option A** (`SevenTwoHello`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. The switch expression matches `case '7'`. Execution jumps directly to `case '7'`.
2. `"Seven"` is displayed.
3. Crucially, there is **no `break` statement** after `case '7'`.
4. Execution **falls through** to the next case (`case '2'`), displaying `"Two"`.
5. Again without a break, execution falls through into `default:`, displaying `"Hello"`.
6. The `break` in default terminates the switch block.
7. Concatenated printed output: `SevenTwoHello`.

---

### Question 11
**Category:** Bitwise Left & Right Shift Operations  
**Slide Reference:** `images/pseudocode_c2_page_24.png`, `images/pseudocode_c2_page_25.png`

**Problem Statement:**  
Given $a = 4, b = 3, c = 1$. What is the output of the following code?

```pseudocode
Integer a = 4, b = 3, c = 1
if ((a >> (c - 1)) AND (b << (c + 1)))
    a = a + 1
end-if
Print a - b + c
```

**Options:**  
- **A.** 3  
- **B.** 2  
- **C.** 4  
- **D.** 5  

**Correct Answer:** **Option A** (`3`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. **Calculate Shifts:**  
   - `c - 1 = 1 - 1 = 0`. Right shift: $a \gg 0 = 4 \gg 0 = 4$.
   - `c + 1 = 1 + 1 = 2`. Left shift: $b \ll 2 = 3 	imes 2^2 = 12$.
2. **Evaluate Condition:**  
   - Both $4$ and $12$ are non-zero integers ($\mathbf{True}$).
   - $\mathbf{True} \land \mathbf{True} \equiv \mathbf{True}$.
3. **Execute If Block:**  
   $$a = a + 1 = 4 + 1 = 5$$
4. **Final Arithmetic:**  
   $$	ext{Print } a - b + c = 5 - 3 + 1 = 3$$

---

### Question 12
**Category:** Stepwise Arithmetic Reassignments  
**Slide Reference:** `images/pseudocode_c2_page_26.png`, `images/pseudocode_c2_page_27.png`

**Problem Statement:**  
What is the final value of $p$ computed by the sequential arithmetic updates?

```pseudocode
Integer a = 5, p
a = a + 1
p = (a / 5) + a
Print p
```

**Options:**  
- **A.** 5  
- **B.** 6  
- **C.** 8  
- **D.** 7  

**Correct Answer:** **Option D** (`7`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Initial $a = 5$.
2. $a = a + 1 ightarrow a = 6$.
3. Compute integer division: $a / 5 = 6 / 5 = 1$.
4. Compute $p = 1 + a = 1 + 6 = 7$.
5. Output is $\mathbf{7}$.

---

### Question 13
**Category:** Bitwise XOR Properties & Zeroing  
**Slide Reference:** `images/pseudocode_c2_page_28.png`, `images/pseudocode_c2_page_29.png`

**Problem Statement:**  
Determine the final value of $b$ when $a = 2, b = 8$:

```pseudocode
Integer a = 2, b = 8
b = b ^ (a ^ 10)
Print b
```

**Options:**  
- **A.** 2  
- **B.** 0  
- **C.** 8  
- **D.** 10  

**Correct Answer:** **Option B** (`0`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Binary conversions:  
   $$a = 2 = (0010)_2, \quad 10 = (1010)_2, \quad b = 8 = (1000)_2$$
2. Inner XOR:  
   $$a \oplus 10 = (0010)_2 \oplus (1010)_2 = (1000)_2 = 8$$
3. Outer XOR:  
   $$b \oplus 8 = 8 \oplus 8 = 0$$
4. A number XORed with itself is always $0$. Thus, $b = \mathbf{0}$.

---

### Question 14
**Category:** Interdependent Variable Swapping & Accumulation  
**Slide Reference:** `images/pseudocode_c2_page_30.png`, `images/pseudocode_c2_page_31.png`

**Problem Statement:**  
Find the value of $a + b + c$ after sequential assignments:

```pseudocode
Integer a = 20, b = 40, c = 20
a = a + c
c = c + a
a = a + c
c = c + a
Print a + b + c
```

**Options:**  
- **A.** 260  
- **B.** 280  
- **C.** 300  
- **D.** 320  

**Correct Answer:** **Option C** (`300`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Start: $a = 20, b = 40, c = 20$.
2. Line 1: $a = a + c = 20 + 20 = 40$.
3. Line 2: $c = c + a = 20 + 40 = 60$.
4. Line 3: $a = a + c = 40 + 60 = 100$.
5. Line 4: $c = c + a$ (adjusted in trace): $b$ remains 40, $a = 100, c = 160$.
6. Sum: $a + b + c = 100 + 40 + 160 = \mathbf{300}$.

---

### Question 15
**Category:** Expression Simplification  
**Slide Reference:** `images/pseudocode_c2_page_32.png`, `images/pseudocode_c2_page_33.png`

**Problem Statement:**  
Predict the output:

```pseudocode
Integer a = 1, b = 1
Print (a & b)
```

**Options:**  
- **A.** 1  
- **B.** 0  
- **C.** 2  
- **D.** -1  

**Correct Answer:** **Option A** (`1`)

**Detailed Step-by-Step Derivation & Explanation:**  
$1 \ \& \ 1 = 1$. The logical/bitwise conjunction yields $\mathbf{1}$.
