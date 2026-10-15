# Section 03 — Technical Pseudocode
## Topic 01: Class 1 Pseudocode Questions (Adarsh Sir)

**Source Document:** `PseudoCode_Live _Class/Class 1 Pseudocode Questions.pdf`  
**Instructor:** Adarsh Gupta (Senior Software Engineer)  
**Total Questions:** 10 Questions  
**Topics Covered:** String indexing & bounds, Compound logical expressions, Array modulus filtering, Nested conditionals, Modular arithmetic functions, Bitwise AND/OR/XOR, Array neighbor summing, Precedence and Boolean logic.

---

### Question 1
**Category:** String Traversal & Loop Boundaries  
**Slide Reference:** `images/pseudocode_c1_page_02.png`

**Problem Statement:**  
What operation does the following pseudocode perform?

```pseudocode
1. Declare a String variable "word"
2. Declare a variable i
3. Take a string as input in the word
4. for i = 0 to 0
5.     print word[i]
6. End for
7. Algorithm End
```

**Options:**  
- **A.** It prints the first character of the string  
- **B.** It prints the last character of the string  
- **C.** It prints characters in increasing order  
- **D.** It reverses the string  

**Correct Answer:** **Option A** (`It prints the first character of the string`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. In the loop header `for i = 0 to 0`, the starting value of index `i` is `0` and the terminating boundary is `0`.
2. The loop condition is checked: `i <= 0` (for `i = 0`), which evaluates to `True`.
3. The body `print word[i]` executes with `i = 0`, printing `word[0]`. In 0-indexed string representation, `word[0]` is the first character.
4. The loop variable `i` increments to `1`, exceeding the upper limit `0`. The loop terminates immediately.
5. Thus, exactly one character—the first character of the string—is printed.

---

### Question 2
**Category:** Compound Logical Expressions & Conditions  
**Slide Reference:** `images/pseudocode_c1_page_03.png`

**Problem Statement:**  
Calculate the output of the following pseudocode for inputs $p = 2, q = 4, r = 5$:

```pseudocode
Integer p, q, r, sum
Read p, q, r
Set sum = p + q + r
if ((sum EQUALS 11) and (q EQUALS 4) and (r NOT EQUALS 0))
    Print "Success"
Otherwise
    Print "Fail"
End if
```

**Options:**  
- **A.** Success  
- **B.** Fail  
- **C.** Error  
- **D.** None  

**Correct Answer:** **Option A** (`Success`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. **Input Values:** $p = 2, q = 4, r = 5$.
2. **Compute Sum:**  
   $$	ext{sum} = p + q + r = 2 + 4 + 5 = 11$$
3. **Evaluate Logical Sub-conditions:**  
   - Sub-condition 1: `(sum EQUALS 11)` $ightarrow 11 == 11 ightarrow \mathbf{True}$.  
   - Sub-condition 2: `(q EQUALS 4)` $ightarrow 4 == 4 ightarrow \mathbf{True}$.  
   - Sub-condition 3: `(r NOT EQUALS 0)` $ightarrow 5 
e 0 ightarrow \mathbf{True}$.  
4. **Evaluate Conjunction:**  
   $$\mathbf{True} \land \mathbf{True} \land \mathbf{True} \equiv \mathbf{True}$$
5. Because the compound condition is strictly true, the `then` branch executes: `"Success"` is printed.

---

### Question 3
**Category:** Array Modulus Filtering & Accumulation  
**Slide Reference:** `images/pseudocode_c1_page_04.png`

**Problem Statement:**  
What will be the output of the following pseudocode for array `arr = [10, 11, 12, 14, 22]`?

```pseudocode
Integer arr[5] = {10, 11, 12, 14, 22}
Integer sum = 0
For i = 0 to 4
    If (arr[i] mod 4 == 0) then
        sum = sum + arr[i]
    End if
End for
Print sum
```

**Options:**  
- **A.** 12  
- **B.** 22  
- **C.** 59  
- **D.** Don't know  

**Correct Answer:** **Option A** (`12`)

**Detailed Step-by-Step Trace Table:**  

| Step ($i$) | `arr[i]` | Condition `arr[i] % 4 == 0` | Action Taken | Updated `sum` |
|:---:|:---:|:---:|:---:|:---:|
| $i = 0$ | $10$ | $10 \pmod 4 = 2 
e 0$ | Condition False | $0$ |
| $i = 1$ | $11$ | $11 \pmod 4 = 3 
e 0$ | Condition False | $0$ |
| $i = 2$ | $12$ | $12 \pmod 4 = 0$ | **True**: $	ext{sum} = 0 + 12$ | $\mathbf{12}$ |
| $i = 3$ | $14$ | $14 \pmod 4 = 2 
e 0$ | Condition False | $12$ |
| $i = 4$ | $22$ | $22 \pmod 4 = 2 
e 0$ | Condition False | $12$ |

**Final Output:** `sum` $= 12$.

---

### Question 4
**Category:** Sequential Conditional Branching & Variable Updates  
**Slide Reference:** `images/pseudocode_c1_page_05.png`

**Problem Statement:**  
Find the output printed by the following pseudocode:

```pseudocode
Integer x, y, z
Set x = 10, y = 16, z = 3
if (x > y)
    x = x + 3
Else
    x = x - 3
End if

if (z > y)
    y = y + 2
Else
    y = y - 2
End if

Print x + y + z
```

**Options:**  
- **A.** 13  
- **B.** 12  
- **C.** 20  
- **D.** 24  

**Correct Answer:** **Option D** (`24` or derived final sum)

**Detailed Step-by-Step Derivation & Explanation:**  
1. **Initial State:** $x = 10, y = 16, z = 3$.
2. **First If-Else Block:**  
   - Evaluate `x > y` $ightarrow 10 > 16$ is $\mathbf{False}$.  
   - Execute `Else` branch: $x = x - 3 = 10 - 3 = 7$.  
3. **Second If-Else Block:**  
   - Evaluate `z > y` $ightarrow 3 > 16$ is $\mathbf{False}$.  
   - Execute `Else` branch: $y = y - 2 = 16 - 2 = 14$.  
4. **Final Computation:**  
   $$	ext{Result} = x + y + z = 7 + 14 + 3 = 24$$

---

### Question 5
**Category:** Modular Arithmetic & Function Return  
**Slide Reference:** `images/pseudocode_c1_page_06.png`

**Problem Statement:**  
Print the output of the following pseudocode for $x = 9, y = 7$:

```pseudocode
Integer funn(Integer x, Integer y)
    Integer z
    Set z = 2
    y = y mod z
    x = x mod z
    return x + y
End function funn()
```

**Options:**  
- **A.** 2  
- **B.** 3  
- **C.** 17  
- **D.** 5  

**Correct Answer:** **Option A** (`2`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Input values to `funn(9, 7)`: $x = 9, y = 7, z = 2$.
2. `y = y mod z` $ightarrow y = 7 \pmod 2 = 1$.
3. `x = x mod z` $ightarrow x = 9 \pmod 2 = 1$.
4. `return x + y` $ightarrow 1 + 1 = 2$.
5. The function returns `2`.

---

### Question 6
**Category:** Arithmetic Expressions & Nested Subtractions  
**Slide Reference:** `images/pseudocode_c1_page_07.png`

**Problem Statement:**  
Predict the output of the following pseudocode:

```pseudocode
Integer x, y, z
Set x = 4, y = 5, z = 2
x = x - 2
if ((x + y) > z)
    z = z + (x + y)
Else
    z = z - (x + y)
End if
Print x + y + z
```

**Options:**  
- **A.** 2  
- **B.** 11  
- **C.** 16  
- **D.** 18  

**Correct Answer:** **Option C** (`16`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Initial variables: $x = 4, y = 5, z = 2$.
2. Line `x = x - 2` $ightarrow x = 4 - 2 = 2$.
3. Condition check: `(x + y) > z` $ightarrow (2 + 5) > 2 ightarrow 7 > 2$ is $\mathbf{True}$.
4. Then branch executes:  
   $$z = z + (x + y) = 2 + 7 = 9$$
5. Print statement:  
   $$x + y + z = 2 + 5 + 9 = 16$$

---

### Question 7
**Category:** Array In-Place Cumulative Neighbor Update  
**Slide Reference:** `images/pseudocode_c1_page_08.png`

**Problem Statement:**  
What will be the output of the following pseudocode for `arr = [1, 2, 3, 4, 5]`?

```pseudocode
Initialize i, n
Set arr[] = {1, 2, 3, 4, 5}
Set n = 5
for i = 0 to n - 2
    arr[i] = arr[i] + arr[i + 1]
End for
print the array of elements
```

**Options:**  
- **A.** 3 3 4 9 5  
- **B.** 4 3 7 5 2  
- **C.** 3 5 7 9 5  
- **D.** 1 2 3 4 5  

**Correct Answer:** **Option C** (`3 5 7 9 5`)

**Detailed Step-by-Step Derivation & Explanation:**  
The loop runs for $i = 0$ to $5 - 2 = 3$:
- **Iteration $i = 0$:** `arr[0] = arr[0] + arr[1] = 1 + 2 = 3`. Array becomes: `{3, 2, 3, 4, 5}`.
- **Iteration $i = 1$:** `arr[1] = arr[1] + arr[2] = 2 + 3 = 5`. Array becomes: `{3, 5, 3, 4, 5}`.
- **Iteration $i = 2$:** `arr[2] = arr[2] + arr[3] = 3 + 4 = 7`. Array becomes: `{3, 5, 7, 4, 5}`.
- **Iteration $i = 3$:** `arr[3] = arr[3] + arr[4] = 4 + 5 = 9`. Array becomes: `{3, 5, 7, 9, 5}`.
- Element `arr[4]` remains untouched as $5$.  
**Final Printed Array:** `3 5 7 9 5`.

---

### Question 8
**Category:** Bitwise & Logical Operator Precedence  
**Slide Reference:** `images/pseudocode_c1_page_09.png`

**Problem Statement:**  
Find the output of the following pseudocode:

```pseudocode
Integer p, q, r, s
Set p = 4, q = 2, r = 1
s = (p AND q) OR (r + 1)
Print s
```

**Options:**  
- **A.** 1  
- **B.** 2  
- **C.** 3  
- **D.** 0  

**Correct Answer:** **Option B** (`2` in bitwise representation, or `1` in boolean)

**Detailed Step-by-Step Derivation & Explanation:**  
- In integer bitwise context:  
  $$p = 4 = (100)_2, \quad q = 2 = (010)_2$$
  $$p \ \& \ q = 4 \ \& \ 2 = (000)_2 = 0$$
  $$r + 1 = 1 + 1 = 2 = (010)_2$$
  $$s = 0 \mid 2 = 2$$
- In logical context: `(4 AND 2)` is `True (1)`, `1 OR 2` is `True (1)`.  
With bitwise operators, $s = 0 \mid 2 = 2$.

---

### Question 9
**Category:** Multi-Variable Simultaneous State Mutation  
**Slide Reference:** `images/pseudocode_c1_page_10.png`

**Problem Statement:**  
Predict the output of the following pseudocode:

```pseudocode
Integer x = 1, y = 1, z = 1
x = y * z
z = y - z
y = z / y
Print x, y, z
```

**Options:**  
- **A.** 1 2 1  
- **B.** 2 1 0  
- **C.** 1 0 0  
- **D.** 3 4 1  

**Correct Answer:** **Option C** (`1 0 0`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. **Initial Values:** $x = 1, y = 1, z = 1$.
2. `x = y * z` $ightarrow x = 1 	imes 1 = 1$.
3. `z = y - z` $ightarrow z = 1 - 1 = 0$.
4. `y = z / y` $ightarrow y = 0 / 1 = 0$ (Integer division $0 / 1 = 0$).
5. Print values: `x = 1, y = 0, z = 0` $ightarrow \mathbf{1\ 0\ 0}$.

---

### Question 10
**Category:** Bitwise XOR and Bitwise OR Evaluation  
**Slide Reference:** `images/pseudocode_c1_page_11.png`

**Problem Statement:**  
Predict the output of the following pseudocode:

```pseudocode
Integer p, q, r, s
Set p = 1, q = 2, r = 0
s = (p XOR q) OR (r | 1)
Print s
```

**Options:**  
- **A.** 1  
- **B.** 2  
- **C.** 3  
- **D.** 0  

**Correct Answer:** **Option C** (`3`)

**Detailed Step-by-Step Derivation & Explanation:**  
1. Binary representations:  
   $$p = 1 = (01)_2, \quad q = 2 = (10)_2, \quad r = 0 = (00)_2$$
2. Evaluate `p XOR q`:  
   $$1 \oplus 2 = (01)_2 \oplus (10)_2 = (11)_2 = 3$$
3. Evaluate `r | 1`:  
   $$0 \mid 1 = 1$$
4. Evaluate outer bitwise OR:  
   $$s = 3 \mid 1 = (11)_2 \mid (01)_2 = (11)_2 = 3$$
5. Printed result: $\mathbf{3}$.
