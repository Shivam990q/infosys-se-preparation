# Section III : Pseudo Codes Based on PYQ

**Total Questions:** 7 | **Total Marks:** 7 | **Duration:** 10 Minutes

---

## Section: Technical Pseudo Codes -01

### Question 1 [Marks: +1, -0]

What is the output of the following C code? #include <stdio.h> int main() { int num = 987; int rem; while(num != 0) { rem = num % 4; num = num / 10; } printf("%d", rem); }

**Options:**

- **(A)** 0
- **(B)** 1
- **(C)** 10
- **(D)** 5

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(B) 1**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 2 [Marks: +1, -0]

What is the output of the following C code? #include <stdio.h> int main() { float x = 0.0; long int y = 10; printf("%d", sizeof(y) == sizeof(x + y)); return 0; }

**Options:**

- **(A)** 3
- **(B)** 1
- **(C)** 5
- **(D)** 2

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(B) 1**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 3 [Marks: +1, -0]

Predict the output of the given pseudocode if the value of the number is 6: Read number k = 2 i = 2 while i <= number: k = k * i i = i + 1 end while write k

**Options:**

- **(A)** 1440.0
- **(B)** 1340.0
- **(C)** 1700.0
- **(D)** 1560.0

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(A) 1440.0**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 4 [Marks: +1, -0]

What is the output of the following C code? int f(int x, int *py, int **ppz) { int y, z; **ppz += 1; z = **ppz; *py += 2; y = *py; x += 3; return x + y + z; } void main() { int c, *b, **a; c = 4; b = &c; a = &b; printf("%d ", f(c, b, a)); return 0; }

**Options:**

- **(A)** 18
- **(B)** 19
- **(C)** 21
- **(D)** 22

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(B) 19**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 5 [Marks: +1, -0]

What is the output of the following C code? #include <stdio.h> int main() { int a = 12; void *ptr = (int *)&a; printf("%d", *ptr); getchar(); return 0; }

**Options:**

- **(A)** 12
- **(B)** Compiler Error
- **(C)** Run Time Error
- **(D)** 0

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(B) Compiler Error**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 6 [Marks: +1, -0]

Predict the output of the following pseudocode. Integer x, y, z Set x = -2, y = 3, z = 1 if (x + (2 & 2) && y + (3 & 3) && z + (2 ^ 2)) x = x - 2 y = x Else x = z y = y ^ 2 End if Print x + y + z

**Options:**

- **(A)** 2
- **(B)** 11
- **(C)** 3
- **(D)** 0

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(C) 3**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

### Question 7 [Marks: +1, -0]

int main() { int x, y = 5, z = 5; x = y == z; Print(x) return 0; }

**Options:**

- **(A)** 0
- **(B)** 1
- **(C)** 5
- **(D)** Compilation Error

> [!IMPORTANT]
> **Verified Answer Key:** ✅ **(B) 1**

**Step-by-Step Explanation & Derivation:**
Detailed step-by-step deduction provided in solutions compendium.

---

