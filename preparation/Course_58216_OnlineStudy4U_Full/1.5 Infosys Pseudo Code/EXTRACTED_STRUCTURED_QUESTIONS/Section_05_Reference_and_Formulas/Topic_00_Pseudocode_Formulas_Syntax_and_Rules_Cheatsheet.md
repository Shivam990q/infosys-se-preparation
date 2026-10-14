# Section 05 — Reference, Formulas & Exam Cheatsheet
## Topic 00: Infosys Pseudo Code Assessment Master Rules & Cheatsheet
**Target Exam:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)  
**Domain:** Section 03 - Technical Ability (Pseudocode Assessment)  
**Standard:** Infosys Mathematical & Computational Specification  

---

## ⚡ 1. Operator Precedence Hierarchy (Highest to Lowest)
In Infosys pseudocode evaluations, expressions are parsed strictly according to the following precedence levels:

| Level | Operator Category | Operators | Associativity | Description |
|:---:|---|:---:|:---:|---|
| **1** | Parentheses & Grouping | `()` | Left-to-Right | Overrides all lower operator precedence levels |
| **2** | Unary Operators | `++`, `--`, `+`, `-`, `~`, `!` | Right-to-Left | Prefix increment/decrement, bitwise NOT, logical NOT |
| **3** | Multiplicative Arithmetic | `*`, `/`, `%`, `MOD` | Left-to-Right | Multiplication, integer division, modulo remainder |
| **4** | Additive Arithmetic | `+`, `-` | Left-to-Right | Binary addition and subtraction |
| **5** | Bitwise Shift | `<<`, `>>` | Left-to-Right | Left shift (multiply by $2^k$), Right shift (divide by $2^k$) |
| **6** | Relational Operators | `<`, `<=`, `>`, `>=` | Left-to-Right | Comparison yielding Boolean truth values |
| **7** | Equality Operators | `==`, `!=` | Left-to-Right | Value equivalence comparison |
| **8** | Bitwise AND | `&`, `AND` | Left-to-Right | Yields 1 only when both corresponding bits are 1 |
| **9** | Bitwise XOR | `^`, `XOR` | Left-to-Right | Yields 1 when corresponding bits are distinct |
| **10** | Bitwise OR | `\|`, `OR` | Left-to-Right | Yields 1 when at least one corresponding bit is 1 |
| **11** | Logical AND | `&&`, `and` | Left-to-Right | Short-circuit boolean conjunction |
| **12** | Logical OR | `\|\|`, `or` | Left-to-Right | Short-circuit boolean disjunction |
| **13** | Ternary Conditional | `? :` | Right-to-Left | Conditional expression `condition ? expr1 : expr2` |
| **14** | Assignment Operators | `=`, `+=`, `-=`, `*=`, `/=` | Right-to-Left | Variable state mutation |

---

## 🧩 2. Bitwise Logic Quick-Reference Truth Tables

### 2.1 Standard Logic Gates
$$\begin{array}{|c|c||c|c|c|}
\hline
A & B & A \ \& \ B \text{ (AND)} & A \ | \ B \text{ (OR)} & A \oplus B \text{ (XOR)} \\
\hline
0 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 1 & 1 \\
1 & 0 & 0 & 1 & 1 \\
1 & 1 & 1 & 1 & 0 \\
\hline
\end{array}$$

### 2.2 Golden Algebraic Bitwise Identities
1. **Self XOR:** $X \oplus X = 0$
2. **Zero XOR:** $X \oplus 0 = X$
3. **Identity XOR:** $X \oplus Y \oplus X = Y$
4. **Self AND:** $X \ \& \ X = X$
5. **Zero AND:** $X \ \& \ 0 = 0$
6. **Self OR:** $X \ | \ X = X$
7. **Identity OR:** $X \ | \ 0 = X$
8. **Parity Check:** `(X & 1) == 0` $\implies X$ is Even; `(X & 1) == 1` $\implies X$ is Odd.
9. **Left Shift Law:** $X \ll k = X \times 2^k$
10. **Right Shift Law:** $X \gg k = \lfloor X / 2^k \rfloor$

---

## 🔄 3. Control Flow & Execution Trap Laws

### 3.1 Switch-Case Fall-Through Law
In C, C++, and Infosys pseudocode, unless an explicit `break` keyword is present:
- Once a matching `case` is entered, **execution falls through unconditionally** into all subsequent cases, including `default`!
- Variables assigned in earlier cases will be overwritten by later cases until `break` or `end-switch`.

### 3.2 While vs Do-While
- **While Loop:** Pre-tested loop. Condition is checked *before* executing the body. If initial condition is False, body executes **0 times**.
- **Do-While Loop:** Post-tested loop. Condition is checked *after* executing the body. Body executes **at least 1 time** unconditionally.

### 3.3 Continue vs Break
- `continue`: Skips the remainder of the current iteration and jumps directly to the loop condition/update.
- `break`: Terminates the entire innermost enclosing loop immediately.

### 3.4 C Undefined Behavior Axioms
- Statements inside ternary expressions: `x > y ? printf(...) : return z;` $\rightarrow$ **COMPILATION ERROR** (`return` is a statement, not an expression).
- Self-modifying assignment: `x = x++;` or `x = ++x;` $\rightarrow$ **UNDEFINED BEHAVIOUR** (violates sequence point rules).

---

## 📈 4. Asymptotic Time Complexity Quick Chart

| Code Pattern | Iteration Formula | Asymptotic Bound |
|---|---|:---:|
| `for i = 0 to n` | $n$ | $\mathcal{O}(n)$ |
| `for i = 0 to n step 2` | $n/2$ | $\mathcal{O}(n)$ |
| `for i = 1 to n do i = i * 2` | $\log_2(n)$ | $\mathcal{O}(\log n)$ |
| `for i in range(n): for j in range(n):` | $n \times n$ | $\mathcal{O}(n^2)$ |
| `for i in range(n): for j in range(i):` | $\sum_{i=0}^{n-1} i = \frac{n(n-1)}{2}$ | $\mathcal{O}(n^2)$ |
| `for i in range(n): for j in reversed(range(i, n)):` | $\sum_{i=0}^{n-1} (n-i) = \frac{n(n+1)}{2}$ | $\mathcal{O}(n^2)$ |
| `for i = 1 to n do for j = 1 to n do for k = 1 to n` | $n \times n \times n$ | $\mathcal{O}(n^3)$ |

---
