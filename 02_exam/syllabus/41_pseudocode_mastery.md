# 41_pseudocode_mastery.md: Complete Pseudocode & Technical MCQ Master Compendium

---

## 1. Executive Section Blueprint & Time Management

| Parameter | Pseudocode Section Metric |
| :--- | :--- |
| **Number of Questions** | **5 Questions** |
| **Sectional Time Limit** | **10 Minutes** |
| **Average Time per Question** | **2 Minutes (120 Seconds)** |
| **Cutoff Benchmark** | **70% (4 out of 5 correct)** |
| **Primary Elimination Vector** | Complex bitwise operator precedence, nested ternary conditionals, off-by-one loop boundaries, and integer division truncation. |

---

## 2. Operator Precedence & Associativity Master Table

In Infosys pseudocode, syntax follows standard C/C++/Java operator precedence rules:

| Precedence Rank | Operator Type | Operator Symbols | Associativity |
| :---: | :--- | :---: | :---: |
| **1 (Highest)** | Parentheses / Array Index | `()`, `[]` | Left-to-Right |
| **2** | Unary Operators | `++`, `--`, `+`, `-`, `!`, `~` | **Right-to-Left** |
| **3** | Multiplicative | `*`, `/`, `%` | Left-to-Right |
| **4** | Additive | `+`, `-` | Left-to-Right |
| **5** | Bitwise Shifts | `<<`, `>>` | Left-to-Right |
| **6** | Relational | `<`, `<=`, `>`, `>=` | Left-to-Right |
| **7** | Equality | `==`, `!=` | Left-to-Right |
| **8** | Bitwise AND | `&` | Left-to-Right |
| **9** | Bitwise XOR | `^` | Left-to-Right |
| **10** | Bitwise OR | `\|` | Left-to-Right |
| **11** | Logical AND | `&&` | Left-to-Right |
| **12** | Logical OR | `\|\|` | Left-to-Right |
| **13** | Ternary Conditional | `? :` | **Right-to-Left** |
| **14 (Lowest)** | Assignment | `=`, `+=`, `-=`, `*=`, `/=` | **Right-to-Left** |

> [!CAUTION]
> **The #1 Trap in Infosys Pseudocode:**
> Bitwise operators (`&`, `^`, `|`) have **LOWER** precedence than relational operators (`<`, `<=`, `>`, `==`)!
> Example: `if (a & 1 == 0)` evaluates as `if (a & (1 == 0))` $\rightarrow$ `if (a & 0)` $\rightarrow$ `0 (False)`!

---

## 3. Bitwise Manipulation & Binary Arithmetic Algebra

### 1. Fundamental Bitwise Operations (8-Bit Representations)

| Operation | Symbol | Definition | Truth Table Rule |
| :--- | :---: | :--- | :--- |
| **Bitwise AND** | `&` | Compares bits; outputs 1 only if **BOTH** bits are 1. | $1 \ \& \ 1 = 1$; all others $0$. |
| **Bitwise OR** | `\|` | Compares bits; outputs 1 if **AT LEAST ONE** bit is 1. | $0 \mid 0 = 0$; all others $1$. |
| **Bitwise XOR** | `^` | Outputs 1 if bits are **DIFFERENT**; 0 if identical. | $1 \oplus 0 = 1,\; 0 \oplus 1 = 1,\; 1 \oplus 1 = 0,\; 0 \oplus 0 = 0$. |
| **Bitwise NOT** | `~` | Inverts all bits (One's complement). | $\sim x = -(x + 1)$ *(In 2's complement)*. |
| **Left Shift** | `<<` | Shifts bits left by $k$ positions; fills with 0. | $x \ll k = x \times 2^k$. |
| **Right Shift** | `>>` | Shifts bits right by $k$ positions. | $x \gg k = \lfloor x / 2^k \rfloor$. |

### 2. High-Frequency Bitwise Identities (Used for Instant Mental Solving)
1. **Self XOR Identity:**
   $$x \oplus x = 0$$
2. **Zero XOR Identity:**
   $$x \oplus 0 = x$$
3. **Commutative & Associative XOR:**
   $$a \oplus b \oplus a = (a \oplus a) \oplus b = 0 \oplus b = b$$
4. **Self AND / OR Identities:**
   $$x \ \& \ x = x,\quad x \mid x = x$$
5. **Unset Lowest Set Bit:**
   $$x \ \& \ (x - 1)$$
   *(Removes the rightmost 1-bit of $x$. For example: $12 (1100_2) \ \& \ 11 (1011_2) = 8 (1000_2)$).*
6. **Power of Two Check:**
   $$\text{IsPowerOfTwo}(x) \iff (x > 0) \ \& \ ((x \ \& \ (x - 1)) == 0)$$
7. **Two's Complement Negation:**
   $$-x = \sim x + 1$$

---

## 4. The Variable-Trace Table (The Zero-Error Execution Framework)

Whenever an Infosys pseudocode question has loops or sequential condition updates, **NEVER** calculate mentally. Immediately draw a variable-trace table on your rough paper:

```
┌───────┬───────────┬───────────┬───────────┬────────────────────────────────────────┐
│ Step  │ Variable a│ Variable b│ Variable c│ Condition / Branch Evaluated           │
├───────┼───────────┼───────────┼───────────┼────────────────────────────────────────┤
│ Init  │ 2         │ 4         │ 7         │ Initial assignment                     │
│ 1     │ 2         │ 9         │ 7         │ b = 7 + a (7 + 2 = 9)                  │
│ 2     │ 2         │ 9         │ 7         │ if (c > b) -> (7 > 9) False            │
│ 3     │ 2         │ 8         │ 7         │ b = 6 + a (6 + 2 = 8)                  │
│ ...   │ ...       │ ...       │ ...       │ ...                                    │
└───────┴───────────┴───────────┴───────────┴────────────────────────────────────────┘
```

---

## 5. Real Infosys Exam Pseudocodes (Detailed Variable-Trace Solutions)

### Problem 1: Bitwise & Arithmetic Branching (From Oct 2025/2026 Slot)
**Pseudocode:**
```text
Integer a, b, c
Set a = 2, b = 4, c = 7
b = 7 + a
if (c > b)
    b = b + b
end if
b = 6 + a
if ((a + b) < (b - a) || c < a)
    b = (c + 4) + c
else
    a = c + b
end if
c = (c + 9) ^ a
Print a + b + c
```

**Variable-Trace Table:**

| Step | Operation | `a` | `b` | `c` | Notes / Evaluation |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **0** | `Set a = 2, b = 4, c = 7` | 2 | 4 | 7 | Initial state |
| **1** | `b = 7 + a` | 2 | 9 | 7 | $b = 7 + 2 = 9$ |
| **2** | `if (c > b)` | 2 | 9 | 7 | Condition $(7 > 9)$ is **FALSE**. Skip block. |
| **3** | `b = 6 + a` | 2 | 8 | 7 | $b = 6 + 2 = 8$ |
| **4** | `if ((a + b) < (b - a) \|\| c < a)` | 2 | 8 | 7 | LHS: $(2 + 8) < (8 - 2) \implies 10 < 6$ (False).<br>RHS: $7 < 2$ (False).<br>Overall condition: **FALSE**. Jump to `else`. |
| **5** | `else: a = c + b` | 15 | 8 | 7 | $a = 7 + 8 = 15$ |
| **6** | `c = (c + 9) ^ a` | 15 | 8 | 31 | Step 6a: $c + 9 = 7 + 9 = 16$.<br>Step 6b: $16 \oplus 15$.<br>$16 = 00010000_2$, $15 = 00001111_2$.<br>$16 \oplus 15 = 00011111_2 = \mathbf{31}$. So $c = 31$. |
| **7** | `Print a + b + c` | 15 | 8 | 31 | Output $= 15 + 8 + 31 = \mathbf{54}$. |

*Correct Output:* **54**

---

### Problem 2: Integer Division Truncation & String Output Count
**Pseudocode:**
```text
Set k = 1, p = 4
Int j = p + k / 2
If (j equals p)
    Print "campus monk"
End if
j = p + k / 5
If (j not equal p)
    Print "campus monk"
End if
Print "campus monk"
```

**Variable-Trace Table:**

| Step | Operation | Variables | Notes / Evaluation |
| :---: | :--- | :--- | :--- |
| **0** | `Set k = 1, p = 4` | $k = 1,\; p = 4$ | Integer data types. |
| **1** | `j = p + k / 2` | $j = 4 + (1 / 2)$ | In integer division, $1 / 2 = 0$ (truncated).<br>Thus $j = 4 + 0 = 4$. |
| **2** | `If (j equals p)` | $4 == 4$ | Condition is **TRUE**. Prints: `"campus monk"` **(Count = 1)**. |
| **3** | `j = p + k / 5` | $j = 4 + (1 / 5)$ | In integer division, $1 / 5 = 0$ (truncated).<br>Thus $j = 4 + 0 = 4$. |
| **4** | `If (j not equal p)` | $4 \ne 4$ | Condition is **FALSE**. Skip block. |
| **5** | `Print "campus monk"` | Unconditional print | Prints: `"campus monk"` **(Count = 2)**. |

*Correct Output:* **2 Times**

---

### Problem 3: Multi-Variable Bitwise XOR & AND
**Pseudocode:**
```text
Int p, q, r
Set p = 6, q = 4, r = 7
p = (r + 5) + p
If ((q & r & p) < (p & 6))
    r = 3 ^ r
    q = q & q
end if
Print p + q + r
```

**Variable-Trace Table:**

| Step | Operation | `p` | `q` | `r` | Evaluation |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **0** | `Set p = 6, q = 4, r = 7` | 6 | 4 | 7 | Initial values |
| **1** | `p = (r + 5) + p` | 18 | 4 | 7 | $p = (7 + 5) + 6 = 12 + 6 = 18$ |
| **2** | `q & r & p` | — | — | — | $q = 4 (0100_2)$, $r = 7 (0111_2)$, $p = 18 (10010_2)$.<br>$q \ \& \ r = 0100_2 \ \& \ 0111_2 = 0100_2 (4)$.<br>$4 \ \& \ 18 = 00100_2 \ \& \ 10010_2 = \mathbf{0}$. |
| **3** | `p & 6` | — | — | — | $p = 18 (10010_2)$, $6 = 00110_2$.<br>$18 \ \& \ 6 = 00010_2 = \mathbf{2}$. |
| **4** | `If ((q & r & p) < (p & 6))` | — | — | — | $(0 < 2)$ is **TRUE**. Enter if block. |
| **5** | `r = 3 ^ r` | 18 | 4 | 4 | $r = 3 \oplus 7$.<br>$3 = 011_2$, $7 = 111_2$.<br>$3 \oplus 7 = 100_2 = \mathbf{4}$. |
| **6** | `q = q & q` | 18 | 4 | 4 | $q = 4 \ \& \ 4 = 4$. |
| **7** | `Print p + q + r` | 18 | 4 | 4 | Output $= 18 + 4 + 4 = \mathbf{26}$. |

*Correct Output:* **26**

---

### Problem 4: Recursive Function Tracing (Stack Unwinding)
**Pseudocode:**
```text
function solve(n)
    if (n <= 1)
        return 1
    end if
    if (n % 2 == 0)
        return solve(n - 1) + solve(n / 2)
    else
        return solve(n - 1) * 2
    end if
end function
Print solve(4)
```

**Recursion Tree Trace:**
```
                           solve(4)  [4 is even -> solve(3) + solve(2)]
                          /        \
                     solve(3)      solve(2) [2 is even -> solve(1) + solve(1)]
                     /             /      \
               solve(2) * 2     solve(1)  solve(1)
               /      \            |         |
          solve(1) + solve(1)      1         1  => solve(2) = 1 + 1 = 2
             |          |
             1          1  => solve(2) = 2
```
1. Base cases: $\text{solve}(1) = 1$.
2. $\text{solve}(2) = \text{solve}(1) + \text{solve}(1) = 1 + 1 = 2$.
3. $\text{solve}(3) = \text{solve}(2) \times 2 = 2 \times 2 = 4$.
4. $\text{solve}(4) = \text{solve}(3) + \text{solve}(2) = 4 + 2 = \mathbf{6}$.

*Correct Output:* **6**
