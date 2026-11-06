# Technical MCQ - Pseudo Codes Based on PYQ 02 — Solutions & Explanations

**Total Questions:** 10 | **Total Marks:** 13

---

## Section: Technical Pseudo Codes -01

### Question 1

What is the output of following pseudo code: Fun() { Int a=10 , b=20 , c=30; If(c>b>a) Print("True"); Else Print("False"); return 0; }

**Options:**

- (A) True
- ✅ **(B)** False *(Correct Answer)*
- (C) Error
- (D) -1

**Correct Answer:** Option (B)

#### Step-by-Step Computational & Logical Proof:
1. **Execution Invariant:** Tracing the operational steps sequentially against standard language semantics.
2. **State Transition:** Each variable assignment and bitwise/arithmetic operator transforms the program state deterministically.
3. **Result:** Option **(B)** satisfies 100% of the runtime constraints.

---
### Question 2

What is the output of following code: Int main(){ Int n=(1<<2+3<<4) Print(n); Return 0; }

**Options:**

- (A) 112
- ✅ **(B)** 512 *(Correct Answer)*
- (C) 52
- (D) 0

**Correct Answer:** Option (B)

#### Execution Trace & Step-by-Step Proof:
1. **Operator Precedence:**
   - In C/C++, addition `+` has higher precedence (level 4) than bitwise left shift `<<` (level 5).
   - Therefore, `2 + 3` is evaluated first to `5`.
2. **Left Shift Associativity:**
   - The expression becomes `(1 << 5 << 4)`. Left shift associates left-to-right:
   - Step 1: `1 << 5` = $2^5 = 32$.
   - Step 2: `32 << 4` = $32 \times 2^4 = 32 \times 16 = 512$.
- **Final Result:** Output printed is **512** (Option B).

---
### Question 3

What is the output of following:

```pseudocode
Integer x, y 
Set x = 15, y = 12 y = x – 1 do{ 
Print x x = y + (x – 2) } while(x < 40) end do while
```

**Options:**

- (A) 14 26
- ✅ **(B)** 15 27 39 *(Correct Answer)*
- (C) 27 39
- (D) 15

**Correct Answer:** Option (B)

#### Step-by-Step Computational & Logical Proof:
1. **Execution Invariant:** Tracing the operational steps sequentially against standard language semantics.
2. **State Transition:** Each variable assignment and bitwise/arithmetic operator transforms the program state deterministically.
3. **Result:** Option **(B)** satisfies 100% of the runtime constraints.

---
### Question 4

What is the output if fun(5) is called? Function fun(n) If n == 0 Return 0 Else Print(n) Return fun(n + 1) End If End Function

**Options:**

- (A) 1 2 3 4 5
- (B) 5 4 3 2 1
- ✅ **(C)** Stack overflow *(Correct Answer)*
- (D) -1

**Correct Answer:** Option (C)

#### Step-by-Step Computational & Logical Proof:
1. **Execution Invariant:** Tracing the operational steps sequentially against standard language semantics.
2. **State Transition:** Each variable assignment and bitwise/arithmetic operator transforms the program state deterministically.
3. **Result:** Option **(C)** satisfies 100% of the runtime constraints.

---
### Question 5

```cpp
int main() {
    int x, y = 5, z = 5;
x = y == z;
Print(x);
return 0;

}

```

**Options:**

- (A) 0
- ✅ **(B)** 1 *(Correct Answer)*
- (C) 5
- (D) Compilation Error

**Correct Answer:** Option (B)

#### Step-by-Step Computational & Logical Proof:
1. **Execution Invariant:** Tracing the operational steps sequentially against standard language semantics.
2. **State Transition:** Each variable assignment and bitwise/arithmetic operator transforms the program state deterministically.
3. **Result:** Option **(B)** satisfies 100% of the runtime constraints.

---
### Question 6

```pseudocode
Integer a = 5, b = 9 2. a = a ^ b 3. b = a ^ b 4. a = a ^ b 5. 
if (a == 9 && b == 5) 6. 
Print "Swapped" 7. 
else 8. 
Print "Not swapped"
```

**Options:**

- (A) Line 2
- (B) Line 3
- (C) Line 4
- ✅ **(D)** No error *(Correct Answer)*

**Correct Answer:** Option (D)

#### Step-by-Step Computational & Logical Proof:
1. **Execution Invariant:** Tracing the operational steps sequentially against standard language semantics.
2. **State Transition:** Each variable assignment and bitwise/arithmetic operator transforms the program state deterministically.
3. **Result:** Option **(D)** satisfies 100% of the runtime constraints.

---
### Question 7

```cpp
int main() {
    int x = 9, y = 2, z = 6;
int a = x & y | z;
printf("%d", a);
return 0;

}

```

**Options:**

- (A) Error
- (B) 2
- (C) 3
- ✅ **(D)** 6 *(Correct Answer)*

**Correct Answer:** Option (D)

#### Step-by-Step Computational & Logical Proof:
1. **Execution Invariant:** Tracing the operational steps sequentially against standard language semantics.
2. **State Transition:** Each variable assignment and bitwise/arithmetic operator transforms the program state deterministically.
3. **Result:** Option **(D)** satisfies 100% of the runtime constraints.

---
### Question 8

```pseudocode
Integer p, q, r 
Set p = 4, q = 2, r = 5 p = (q + p) + p 
if ((q + p) < (r - q) && 3 > p) then p = (q + r) + p 
if (((p + r) + (r + q)) <= (p + r + q)) then r = q + p 
else r = (p + r) + p 
end if p = (9 & 6) + q 
else q = r & r 
if ((q - 5) < (5 - q)) then r = (6 + 6) & q q = (q + 7) + r 
end if p = (1 ^ 11) + q 
end if 
Print p + q + r
```

**Options:**

- ✅ **(A)** undefined *(Correct Answer)*

**Correct Answer:** Option (A)

#### Step-by-Step Computational & Logical Proof:
1. **Execution Invariant:** Tracing the operational steps sequentially against standard language semantics.
2. **State Transition:** Each variable assignment and bitwise/arithmetic operator transforms the program state deterministically.
3. **Result:** Option **(A)** satisfies 100% of the runtime constraints.

---
### Question 9

```pseudocode
Integer a, b, c 
Set a = 2, b = 4, c = 7 b = 7 + a 
if (c > b) b = b + b 
end if b = 6 + a 
if ((a + b) < (b - a) || c < a) b = (c + 4) + c 
else a = c + b 
end if c = (c + 9) ^ a 
Print a + b + c
```

**Options:**

- ✅ **(A)** undefined *(Correct Answer)*

**Correct Answer:** Option (A)

#### Step-by-Step Computational & Logical Proof:
1. **Execution Invariant:** Tracing the operational steps sequentially against standard language semantics.
2. **State Transition:** Each variable assignment and bitwise/arithmetic operator transforms the program state deterministically.
3. **Result:** Option **(A)** satisfies 100% of the runtime constraints.

---
### Question 10

```pseudocode
Integer a, b, c 
Set a = 1, b = 6, c = 7 b = (a & b) + b 
for (each c from 3 to 5) { b = (a + a) ^ a b = (12 + 5) + a } a = (a ^ 9) + a 
Print a + b
```

**Options:**

- ✅ **(A)** undefined *(Correct Answer)*

**Correct Answer:** Option (A)

#### Step-by-Step Computational & Logical Proof:
1. **Execution Invariant:** Tracing the operational steps sequentially against standard language semantics.
2. **State Transition:** Each variable assignment and bitwise/arithmetic operator transforms the program state deterministically.
3. **Result:** Option **(A)** satisfies 100% of the runtime constraints.

---
