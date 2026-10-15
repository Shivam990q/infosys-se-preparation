# Section 03 — Technical Pseudocode
## Topic 05: Class 5 Pseudocode & Output Practice (25 Assessment Questions)

**Source Document:** `PseudoCode_Live _Class/Class 5 Pseudocode_Output_Practice_25_Questions.pdf`  
**Total Questions:** 25 Assessment-Style Questions  
**Topics Covered:** Increment & Assignment, Post/Pre-Increment Sequences, Right-to-Left Assignment Associativity, Operator Precedence, Modulo Boundary Cases, Ternary Conditional Operator, Nested Conditionals, For Loops, Step Iteration, Nested Iteration Counters, Break Statement, Continue Statement, While Loop Halving Division, Array Indexing & Arithmetic, In-Place Array Updates, Array Reverse Traversal, String Indexing & Length, Character Frequency Counting, Direct Tail Factorial Recursion, Recursive Accumulation, Bitwise AND, Bitwise OR & XOR, Bitwise Left Shift, Bitwise Right Shift, Mixed Complex Expressions.

---

### Question 1
**Category:** Compound Chained Assignment & Arithmetic  
**Problem Statement:**  
Find the output printed by the following code:
```c
int a = 5;
int b = 3;
a = b = a + 2;
print(a, b);
```
**Answer:** `7 7`  
**Detailed Step-by-Step Derivation:**  
1. In C/Java expressions, the assignment operator `=` associates from **right to left**.
2. First evaluate the rightmost arithmetic expression: $a + 2 = 5 + 2 = 7$.
3. Assign this value to $b$: $b = 7$.
4. Assign the resulting value of $b$ to $a$: $a = 7$.
5. Both variables are now $7$. Printing $(a, b)$ yields `7 7`.

---

### Question 2
**Category:** Post-Increment vs Pre-Increment Distinctions  
**Problem Statement:**  
Find the output printed by the following code:
```c
int a = 5;
int b = a++;
int c = ++a;
print(a, b, c);
```
**Answer:** `7 5 7`  
**Detailed Step-by-Step Derivation:**  
1. `int a = 5;`
2. `int b = a++;` $\rightarrow$ Post-increment returns the current value of $a$ ($5$) before incrementing. Thus, $b = 5$, and $a$ becomes $6$.
3. `int c = ++a;` $\rightarrow$ Pre-increment increments $a$ first ($6 \rightarrow 7$) and then evaluates to the new value ($7$). Thus, $c = 7$, and $a = 7$.
4. Printing $(a, b, c)$ outputs `7 5 7`.

---

### Question 3
**Category:** Right-to-Left Chained Assignment Associativity  
**Problem Statement:**  
Find the output printed by the following code:
```c
int a, b, c;
a = b = c = 10;
b = b + 5;
a = b;
print(a, b, c);
```
**Answer:** `15 15 10`  
**Detailed Step-by-Step Derivation:**  
1. `a = b = c = 10;` assigns $10$ to $c$, then to $b$, then to $a$. ($a=10, b=10, c=10$).
2. `b = b + 5;` sets $b = 10 + 5 = 15$.
3. `a = b;` sets $a = 15$. Variable $c$ remains $10$.
4. Printing $(a, b, c)$ outputs `15 15 10`.

---

### Question 4
**Category:** Operator Precedence (Multiplication vs Parentheses)  
**Problem Statement:**  
Find the output printed by the following code:
```c
int x = 2 + 3 * 4;
int y = (2 + 3) * 4;
print(x, y);
```
**Answer:** `14 20`  
**Detailed Step-by-Step Derivation:**  
1. In $x = 2 + 3 * 4$, multiplication has higher precedence than addition:  
   $$x = 2 + (3 \times 4) = 2 + 12 = 14$$
2. In $y = (2 + 3) * 4$, parentheses override default precedence:  
   $$y = (2 + 3) \times 4 = 5 \times 4 = 20$$
3. Printing $(x, y)$ outputs `14 20`.

---

### Question 5
**Category:** Modulo Arithmetic with Smaller Dividend  
**Problem Statement:**  
Find the output printed by the following code:
```c
int x = 17;
int y = 5;
print(x % y);
print(y % x);
```
**Answer:** `2 / 5` (prints `2` then `5`)  
**Detailed Step-by-Step Derivation:**  
1. $x \% y = 17 \pmod 5 = 2$ (since $17 = 3 \times 5 + 2$).
2. $y \% x = 5 \pmod{17} = 5$ (since when dividend $<$ divisor, remainder equals dividend).
3. Outputs `2` followed by `5`.

---

### Question 6
**Category:** Ternary Conditional Operator (`?:`)  
**Problem Statement:**  
Find the output printed by the following code:
```c
int a = 12;
int b = 7;
int x = (a > b) ? a - b : b - a;
print(x);
```
**Answer:** `5`  
**Detailed Step-by-Step Derivation:**  
1. Condition check: $a > b \rightarrow 12 > 7$ is $\mathbf{True}$.
2. The expression evaluates the true-branch: $a - b = 12 - 7 = 5$.
3. Prints `5`. (This computes the absolute difference $|a - b|$).

---

### Question 7
**Category:** Nested If-Else Decision Logic  
**Problem Statement:**  
Find the output printed by the following code:
```c
int x = 15;
if (x > 10) {
    if (x % 3 == 0)
        print("A");
    else
        print("B");
} else {
    print("C");
}
```
**Answer:** `A`  
**Detailed Step-by-Step Derivation:**  
1. Outer condition: $x > 10 \rightarrow 15 > 10$ is $\mathbf{True}$.
2. Inner condition: $x \% 3 == 0 \rightarrow 15 \pmod 3 == 0$ is $\mathbf{True}$.
3. Prints `"A"`.

---

### Question 8
**Category:** Standard For Loop Summation  
**Problem Statement:**  
Find the output printed by the following code:
```c
int sum = 0;
for (int i = 1; i <= 5; i++)
    sum = sum + i;
print(sum);
```
**Answer:** `15`  
**Detailed Step-by-Step Derivation:**  
$$\text{sum} = \sum_{i=1}^{5} i = 1 + 2 + 3 + 4 + 5 = \frac{5 \times 6}{2} = 15$$

---

### Question 9
**Category:** For Loop with Custom Step Increment  
**Problem Statement:**  
Find the output printed by the following code:
```c
int x = 1;
for (int i = 1; i <= 5; i = i + 2)
    x = x * 2;
print(x);
```
**Answer:** `8`  
**Detailed Step-by-Step Derivation:**  
1. Loop variable takes values: $i = 1, 3, 5$ (3 iterations total; next $i = 7 > 5$ exits).
2. Iteration 1 ($i = 1$): $x = 1 \times 2 = 2$.
3. Iteration 2 ($i = 3$): $x = 2 \times 2 = 4$.
4. Iteration 3 ($i = 5$): $x = 4 \times 2 = 8$.
5. Prints `8`.

---

### Question 10
**Category:** Nested Triangular Loop Iterations  
**Problem Statement:**  
Find the output printed by the following code:
```c
int count = 0;
for (int i = 1; i <= 3; i++)
    for (int j = 1; j <= i; j++)
        count++;
print(count);
```
**Answer:** `6`  
**Detailed Step-by-Step Derivation:**  
- $i = 1$: $j \in [1..1] \rightarrow 1$ execution
- $i = 2$: $j \in [1..2] \rightarrow 2$ executions
- $i = 3$: $j \in [1..3] \rightarrow 3$ executions  
$$\text{Total count} = 1 + 2 + 3 = 6$$

---

### Question 11
**Category:** Premature Loop Termination (`break` Statement)  
**Problem Statement:**  
Find the output printed by the following code:
```c
int sum = 0;
for (int i = 1; i <= 10; i++) {
    if (i == 6)
        break;
    sum = sum + i;
}
print(sum);
```
**Answer:** `15`  
**Detailed Step-by-Step Derivation:**  
The loop adds values of $i$ for $i = 1, 2, 3, 4, 5$. At $i = 6$, `break` terminates the loop immediately before adding 6.  
$$\text{sum} = 1 + 2 + 3 + 4 + 5 = 15$$

---

### Question 12
**Category:** Selective Iteration Skipping (`continue` Statement)  
**Problem Statement:**  
Find the output printed by the following code:
```c
int sum = 0;
for (int i = 1; i <= 6; i++) {
    if (i % 2 == 0)
        continue;
    sum = sum + i;
}
print(sum);
```
**Answer:** `9`  
**Detailed Step-by-Step Derivation:**  
Condition $i \% 2 == 0$ skips even numbers ($2, 4, 6$). Only odd values ($1, 3, 5$) are accumulated:  
$$\text{sum} = 1 + 3 + 5 = 9$$

---

### Question 13
**Category:** While Loop Halving Division (Logarithmic Convergence)  
**Problem Statement:**  
Find the output printed by the following code:
```c
int n = 20;
int count = 0;
while (n > 1) {
    n = n / 2;
    count++;
}
print(count, n);
```
**Answer:** `4 1`  
**Detailed Step-by-Step Derivation:**  
- Iteration 1: $n = 20 / 2 = 10$, $\text{count} = 1$
- Iteration 2: $n = 10 / 2 = 5$, $\text{count} = 2$
- Iteration 3: $n = 5 / 2 = 2$, $\text{count} = 3$
- Iteration 4: $n = 2 / 2 = 1$, $\text{count} = 4$
- Check condition $n > 1 \rightarrow 1 > 1$ is $\mathbf{False}$. Loop exits.
- Outputs `4 1`.

---

### Question 14
**Category:** Array Direct Index Access & Sum  
**Problem Statement:**  
Find the output printed by the following code:
```c
int a[] = {10, 20, 30, 40, 50};
print(a[0] + a[2] + a[4]);
```
**Answer:** `90`  
**Detailed Step-by-Step Derivation:**  
$a[0] = 10, a[2] = 30, a[4] = 50$.  
$$\text{Sum} = 10 + 30 + 50 = 90$$

---

### Question 15
**Category:** Array In-Place Index-Weighted Updates  
**Problem Statement:**  
Find the output printed by the following code:
```c
int a[] = {2, 4, 6, 8};
for (int i = 0; i < 4; i++)
    a[i] = a[i] + i;
print(a[1], a[2], a[3]);
```
**Answer:** `5 8 11`  
**Detailed Step-by-Step Derivation:**  
- $a[0] = 2 + 0 = 2$
- $a[1] = 4 + 1 = 5$
- $a[2] = 6 + 2 = 8$
- $a[3] = 8 + 3 = 11$  
Printing $a[1], a[2], a[3]$ outputs `5 8 11`.

---

### Question 16
**Category:** Reverse Array Index Traversal  
**Problem Statement:**  
Find the output printed by the following code:
```c
int a[] = {3, 6, 9, 12};
for (int i = 3; i >= 0; i--)
    print(a[i]);
```
**Answer:** `12 9 6 3`  
**Detailed Step-by-Step Derivation:**  
The loop accesses array elements starting from index 3 down to index 0:  
$a[3] = 12$, $a[2] = 9$, $a[1] = 6$, $a[0] = 3$. Outputs `12 9 6 3`.

---

### Question 17
**Category:** String Character Indexing & Length  
**Problem Statement:**  
Find the output printed by the following code:
```c
string s = "CODE";
print(s[0]);
print(s[2]);
print(length(s));
```
**Answer:** `C / D / 4` (prints `'C'`, `'D'`, `4`)  
**Detailed Step-by-Step Derivation:**  
- String: `"CODE"` (0-indexed: $0 \rightarrow \text{'C'}, 1 \rightarrow \text{'O'}, 2 \rightarrow \text{'D'}, 3 \rightarrow \text{'E'}$).
- $s[0] = \text{'C'}$.
- $s[2] = \text{'D'}$.
- $\text{length}(s) = 4$.

---

### Question 18
**Category:** String Frequency Counting  
**Problem Statement:**  
Find the output printed by the following code:
```c
string s = "BANANA";
int count = 0;
for (int i = 0; i < length(s); i++) {
    if (s[i] == 'A')
        count++;
}
print(count);
```
**Answer:** `3`  
**Detailed Step-by-Step Derivation:**  
In `"BANANA"`, indices $1, 3, 5$ contain `'A'`. The condition is met 3 times, so `count = 3`.

---

### Question 19
**Category:** Recursive Factorial  
**Problem Statement:**  
Find the output printed by the following code:
```c
function f(n) {
    if (n <= 1) return 1;
    return n * f(n - 1);
}
print(f(4));
```
**Answer:** `24`  
**Detailed Step-by-Step Derivation:**  
$$f(4) = 4 \times f(3) = 4 \times (3 \times f(2)) = 4 \times 3 \times (2 \times 1) = 24$$

---

### Question 20
**Category:** Recursive Summation of Natural Numbers  
**Problem Statement:**  
Find the output printed by the following code:
```c
function sum(n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}
print(sum(5));
```
**Answer:** `15`  
**Detailed Step-by-Step Derivation:**  
$$\text{sum}(5) = 5 + 4 + 3 + 2 + 1 + 0 = 15$$

---

### Question 21
**Category:** Bitwise AND Conjunction  
**Problem Statement:**  
Find the output printed by the following code:
```c
int a = 6; // 110
int b = 3; // 011
print(a & b);
```
**Answer:** `2`  
**Detailed Step-by-Step Derivation:**  
$$a = 6 = (110)_2, \quad b = 3 = (011)_2$$
$$a \ \& \ b = (110)_2 \ \& \ (011)_2 = (010)_2 = 2$$

---

### Question 22
**Category:** Bitwise OR and Bitwise XOR  
**Problem Statement:**  
Find the output printed by the following code:
```c
int a = 5; // 101
int b = 3; // 011
print(a | b);
print(a ^ b);
```
**Answer:** `7 / 6` (prints `7` then `6`)  
**Detailed Step-by-Step Derivation:**  
$$a = 5 = (101)_2, \quad b = 3 = (011)_2$$
- Bitwise OR: $a \mid b = (101)_2 \mid (011)_2 = (111)_2 = 7$.
- Bitwise XOR: $a \oplus b = (101)_2 \oplus (011)_2 = (110)_2 = 6$.

---

### Question 23
**Category:** Bitwise Left Shift Multiplication  
**Problem Statement:**  
Find the output printed by the following code:
```c
int x = 3;
print(x << 2);
```
**Answer:** `12`  
**Detailed Step-by-Step Derivation:**  
Shifting left by $k$ bits multiplies by $2^k$:  
$$x \ll 2 = 3 \times 2^2 = 3 \times 4 = 12$$

---

### Question 24
**Category:** Bitwise Right Shift Division  
**Problem Statement:**  
Find the output printed by the following code:
```c
int x = 20;
print(x >> 2);
```
**Answer:** `5`  
**Detailed Step-by-Step Derivation:**  
Shifting right by $k$ bits performs floor division by $2^k$:  
$$x \gg 2 = \lfloor 20 / 2^2 \rfloor = \lfloor 20 / 4 \rfloor = 5$$

---

### Question 25
**Category:** Complex Mixed Expression with Pre/Post Increments  
**Problem Statement:**  
Find the output printed by the following code:
```c
int a = 4;
int b = 2;
int c = 3;
a = a++ + ++b * c;
print(a, b, c);
```
**Answer:** `13 3 3` / `10 3 3` (compiler-specific pre/post evaluation)  
**Detailed Step-by-Step Derivation:**  
1. `++b` pre-increments $b$ from 2 to 3, returning 3. ($b = 3$).
2. Multiplication has higher precedence: `++b * c` $\rightarrow 3 \times 3 = 9$.
3. `a++` evaluates to current value of $a$ ($4$) and schedules increment.
4. Addition: $4 + 9 = 13$ (or assigned result depending on sequence points).
5. Values: $a = 13$ (or assessment key 10 based on standard override), $b = 3, c = 3$.
