# Pseudocode Mastery Guide (The #1 Elimination Section)

**Questions:** 5 Questions | **Time:** 10 Minutes (Strictly 2 Mins/Question)  
**Cutoff Requirement:** ~70% to 80% (Must get at least 4 out of 5 correct)  

---

## 1. Why Pseudocode is the Elimination Round
More than 70% of engineering candidates who fail the Infosys assessment are disqualified in this section. The questions do not test obscure programming syntax; they evaluate **dry-run code simulation speed** and your ability to avoid off-by-one errors under time pressure.

---

## 2. The Golden Rule: Always Use a Variable-Trace Table

Never attempt to simulate pseudocode mentally. Draw a 4-column trace table on your scratchpad:

```
+-------+-------+-------+-----------------------------+
| Line  | Var a | Var b | Operation / Variable Change |
+-------+-------+-------+-----------------------------+
| Init  | 12    | 7     | a = 1100_2, b = 0111_2      |
| L1    | 12    | 7     | a ^ b = 1011_2 = 11         |
| L2    | 12    | 7     | (a & b) << 1 = 4 << 1 = 8   |
| L3    | 12    | 7     | c = 11 + 8 = 19             |
+-------+-------+-------+-----------------------------+
```

---

## 3. Bitwise Operators Reference Table & Key Identities

| Operator | Syntax | Operation Logic | Shortcut / Identity |
| :---: | :--- | :--- | :--- |
| **AND** | `a & b` | Output bit is 1 only if both bits are 1 | Masks / filters specific bits |
| **OR** | `a \| b` | Output bit is 1 if either bit is 1 | Sets / combines bits |
| **XOR** | `a ^ b` | Output bit is 1 if bits differ; 0 if identical | $x \oplus x = 0$, $x \oplus 0 = x$ |
| **LEFT SHIFT** | `a << k` | Shifts bits left by $k$ places, fills with 0 | Multiplies by $2^k$: $a \times 2^k$ |
| **RIGHT SHIFT**| `a >> k` | Shifts bits right by $k$ places, drops lower bits | Integer division by $2^k$: $\lfloor a / 2^k \rfloor$ |

> [!TIP]
> **Infosys's Favorite Identity:**
> $$(a \oplus b) + 2(a \ \& \ b) = a + b$$
> If you see `(a ^ b) + ((a & b) << 1)`, the expression simplifies to simply $a + b$.

---

## 4. Worked Problem Walkthroughs

### Example 1: Recursive Accumulation Stack Unwinding
```text
function calculate(Integer x, Integer y)
    if (y EQUALS 0)
        return 0
    end if
    if (y MOD 2 EQUALS 0)
        return calculate(x + x, y / 2)
    end if
    return calculate(x + x, y / 2) + x
end function calculate()
```
**Problem:** What is the output of `calculate(4, 5)`?

**Step-by-Step Trace:**
1. Call 1: `calculate(4, 5)`: $5 \pmod 2 \ne 0 \rightarrow$ calls `calculate(8, 2) + 4`
2. Call 2: `calculate(8, 2)`: $2 \pmod 2 == 0 \rightarrow$ calls `calculate(16, 1)`
3. Call 3: `calculate(16, 1)`: $1 \pmod 2 \ne 0 \rightarrow$ calls `calculate(32, 0) + 16`
4. Call 4: `calculate(32, 0)`: $y == 0 \rightarrow$ returns `0` (Base case)
5. **Unwinding the Stack:**
   - Call 3 evaluates to $0 + 16 = 16$.
   - Call 2 receives Call 3's return value: $16$.
   - Call 1 receives Call 2's return value: $16 + 4 = 20$.
- **Final Answer:** **20** *(This implements Russian Peasant Multiplication: $4 \times 5 = 20$).*

---

### Example 2: Bitwise Loop Condition Filtering
```text
Integer x, z
For (x = 10; x >= 0; x--)
    z = x & (x >> 1)
    if (z)
        Print x
    end if
End For
```
**Problem:** Predict the exact printed output.

**Step-by-Step Trace:**
- `x >> 1` divides $x$ by 2. The expression `x & (x >> 1)` evaluates to non-zero only if $x$ contains two adjacent set bits in binary (`...11...`).
- $x = 10$ (`1010`): $10 \ \& \ 5$ (`1010 & 0101` = `0000` = 0) $\rightarrow$ No print.
- $x = 9$ (`1001`): $9 \ \& \ 4$ (`1001 & 0100` = `0000` = 0) $\rightarrow$ No print.
- $x = 8$ (`1000`): $8 \ \& \ 4$ (`1000 & 0100` = `0000` = 0) $\rightarrow$ No print.
- $x = 7$ (`0111`): $7 \ \& \ 3$ (`0111 & 0011` = `0011` = 3 $\ne 0$) $\rightarrow$ **PRINTS 7**.
- $x = 6$ (`0110`): $6 \ \& \ 3$ (`0110 & 0011` = `0010` = 2 $\ne 0$) $\rightarrow$ **PRINTS 6**.
- $x = 5$ (`0101`): $5 \ \& \ 2$ (`0101 & 0010` = `0000` = 0) $\rightarrow$ No print.
- $x = 4$ (`0100`): $4 \ \& \ 2$ (`0100 & 0010` = `0000` = 0) $\rightarrow$ No print.
- $x = 3$ (`0011`): $3 \ \& \ 1$ (`0011 & 0001` = `0001` = 1 $\ne 0$) $\rightarrow$ **PRINTS 3**.
- $x = 2$ (`0010`): $2 \ \& \ 1$ (`0010 & 0001` = `0000` = 0) $\rightarrow$ No print.
- $x = 1$ (`0001`): $1 \ \& \ 0$ = 0 $\rightarrow$ No print.
- **Final Answer:** **7 6 3**

---

### Example 3: Nested Loops with Counter Jumps
```text
Integer p, q, count = 0
For (p = 1; p <= 4; p++)
    For (q = p; q <= 4; q = q + 2)
        count = count + (p * q)
    End For
End For
Print count
```
**Step-by-Step Trace:**
- $p = 1$: $q = 1, 3 \implies \text{count} = 0 + (1 \times 1) + (1 \times 3) = 4$
- $p = 2$: $q = 2, 4 \implies \text{count} = 4 + (2 \times 2) + (2 \times 4) = 4 + 4 + 8 = 16$
- $p = 3$: $q = 3 \implies \text{count} = 16 + (3 \times 3) = 16 + 9 = 25$
- $p = 4$: $q = 4 \implies \text{count} = 25 + (4 \times 4) = 25 + 16 = 41$
- **Final Answer:** **41**

---

### Example 4: Pre vs Post Increment Interactions
```text
Integer a = 5, b = 2, c
c = (++a * 2) + (b++ * 3) + a
Print c
```
**Step-by-Step Trace:**
1. `++a`: Pre-increment; $a$ changes from 5 to 6, evaluates to 6. Term 1 = $6 \times 2 = 12$.
2. `b++`: Post-increment; evaluates to current value 2, then $b$ becomes 3. Term 2 = $2 \times 3 = 6$.
3. `+ a`: $a$ is now 6. Term 3 = 6.
4. $c = 12 + 6 + 6 = 24$.
- **Final Answer:** **24**

---

## 5. Curated Practice Sources for Pseudocode
- **YouTube:** Search `"OnlineStudy4u Infosys Pseudocode Repeated Questions"`
- **YouTube:** Search `"Prime Coding Infosys Pseudocode Playlist"`
- **Website:** Practice C/C++ Output Prediction on `sanfoundry.com` (1,000+ free MCQs)
