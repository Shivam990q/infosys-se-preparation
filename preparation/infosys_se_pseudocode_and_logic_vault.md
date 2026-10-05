# INFOSYS SE 2026: PSEUDOCODE & BITWISE LOGIC ENGINE
## Forensic Tracing Rules, Variable-State Matrices, Java Syntax Nuances & Solved Practice Sets

---

## 1. The 5 Cardinal Pseudocode Laws (October 5, 2026 Drive)

Candidate reviews from October 5, 2026 confirmed that Infosys SE pseudocode questions strictly adhere to standard Java/C operator precedence and semantic evaluation:
1. **Integer Division Truncation:** Division between two integer operands discards any fractional part without rounding (`7 / 2 = 3`, `1 / 4 = 0`, `-7 / 2 = -3`).
2. **Modulo (%):** Computes remainder following the sign of the dividend (`7 \% 2 = 1`, `-7 \% 2 = -1`).
3. **Post-Increment (`x++`):** Uses the current value of x in the enclosing expression, then increments x by 1 in memory.
4. **Pre-Increment (`++x`):** Increments x by 1 in memory first, then uses the updated value in the enclosing expression.
5. **Do-While Loop Execution Guarantee:** The loop body runs **at least once** before the boolean continuation condition is evaluated.

---

## 2. Solved Problem Set 1: Increment & Decrement Compound Expressions

### Problem 1.1: Complex Increment Chain
```java
int a = 4, b = 7, c = 2;
int result = (a++) + (++b) * (c--) - (--a) + (b++);
// Determine the final values of a, b, c, and result.
```

#### Step-by-Step Evaluation:
1. `(a++)`: Uses current value 4. Variable a is incremented to 5.
2. `(++b)`: Variable b is incremented from `7 \to 8`. Uses updated value 8.
3. `(c--)`: Uses current value 2. Variable c is decremented to 1.
4. Multiplication precedence: `(++b) * (c--)` evaluates as `8 \times 2 = 16`.
5. Subtraction term `(--a)`: Variable a currently is 5. Decremented to 4. Uses 4.
6. Addition term `(b++)`: Variable b currently is 8. Uses 8. Then b increments to 9.
7. Combining arithmetic left-to-right:
   $`result} = 4 + 16 - 4 + 8 = 24`$
- **Final Output:** `result = 24`, `a = 4`, `b = 9`, `c = 1`.

---

## 3. Solved Problem Set 2: Do-While & Loop Control Flow

### Problem 2.1: False Condition Entry
```java
int count = 0;
int p = 12;
do {
    count++;
    p -= 3;
} while (p > 15);
// What is the value of count and p?
```

#### Step-by-Step Evaluation:
- **Iteration 1:**
  - `count` becomes `0 + 1 = 1`.
  - `p` becomes `12 - 3 = 9`.
  - Condition check: `p > 15` `\implies 9 > 15 \implies false}`.
  - Loop terminates immediately.
- **Final Output:** `count = 1`, `p = 9`. *(A standard `while` loop would have resulted in `count = 0`)*.

---

### Problem 2.2: Nested Loops with Modulo Break
```java
int sum = 0;
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= 3; j++) {
        if ((i + j) % 2 == 0) {
            sum += (i * j);
        } else {
            sum -= j;
        }
    }
}
// Find the final value of sum.
```

#### Variable-Trace Table:
| i | j | `i + j` | `(i+j) \% 2 == 0` | Operation | Change to `sum` | Running `sum` |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 1 | 2 | True | `i \times j = 1` | `+1` | 1 |
| 1 | 2 | 3 | False | `-j = -2` | `-2` | `-1` |
| 1 | 3 | 4 | True | `i \times j = 3` | `+3` | 2 |
| 2 | 1 | 3 | False | `-j = -1` | `-1` | 1 |
| 2 | 2 | 4 | True | `i \times j = 4` | `+4` | 5 |
| 2 | 3 | 5 | False | `-j = -3` | `-3` | 2 |
| 3 | 1 | 4 | True | `i \times j = 3` | `+3` | 5 |
| 3 | 2 | 5 | False | `-j = -2` | `-2` | 3 |
| 3 | 3 | 6 | True | `i \times j = 9` | `+9` | 12 |
| 4 | 1 | 5 | False | `-j = -1` | `-1` | 11 |
| 4 | 2 | 6 | True | `i \times j = 8` | `+8` | 19 |
| 4 | 3 | 7 | False | `-j = -3` | `-3` | 16 |

- **Final Output:** `sum = 16`.

---

## 4. Solved Problem Set 3: Bitwise XOR (`^`) Manipulation

### Problem 3.1: XOR Accumulation
```java
int[] arr = {4, 7, 2, 4, 2};
int val = 0;
for (int i = 0; i < arr.length; i++) {
    val = val ^ arr[i];
}
// Find final value of val.
```

#### Step-by-Step Evaluation:
- Recall XOR algebraic laws:
  $`A ^ A = 0`$
  $`A ^ 0 = A`$
- Rewriting the chain:
  $`val} = 0 ^ 4 ^ 7 ^ 2 ^ 4 ^ 2`$
  $`val} = (4 ^ 4) ^ (2 ^ 2) ^ 7 = 0 ^ 0 ^ 7 = 7`$
- **Final Output:** `val = 7`. *(Identifies the single unique non-repeating number!)*

---

### Problem 3.2: XOR Bitmask Transformation
```java
int a = 11; // Binary: 1011
int b = 6;  // Binary: 0110
int c = a ^ b;
int d = c & (b | 1);
// Find c and d.
```

#### Binary Bitwise Breakdown:
1. `a = 1011_2`, `b = 0110_2`.
2. `c = 1011_2 ^ 0110_2 = 1101_2 = 13_{10}`.
3. `b \mid 1 = 0110_2 \mid 0001_2 = 0111_2 = 7_{10}`.
4. `d = c \ \& \ 7 = 1101_2 \ \& \ 0111_2 = 0101_2 = 5_{10}`.
- **Final Output:** `c = 13`, `d = 5`.

---

## 5. Solved Problem Set 4: Java String Processing

### Problem 4.1: Character Shifting & Filtering
```java
String s = "INFOSYS";
String out = "";
for (int i = 0; i < s.length(); i++) {
    char ch = s.charAt(i);
    if (i % 2 == 0) {
        out += (char)(ch + 1);
    } else {
        out += ch;
    }
}
// What is out?
```

#### Iteration Breakdown:
- Index 0: `'I'` (`i=0`, even) → `'I' + 1 = 'J'`
- Index 1: `'N'` (`i=1`, odd) → `'N'`
- Index 2: `'F'` (`i=2`, even) → `'F' + 1 = 'G'`
- Index 3: `'O'` (`i=3`, odd) → `'O'`
- Index 4: `'S'` (`i=4`, even) → `'S' + 1 = 'T'`
- Index 5: `'Y'` (`i=5`, odd) → `'Y'`
- Index 6: `'S'` (`i=6`, even) → `'S' + 1 = 'T'`
- **Final Output:** `"JNGOTYT"`.
