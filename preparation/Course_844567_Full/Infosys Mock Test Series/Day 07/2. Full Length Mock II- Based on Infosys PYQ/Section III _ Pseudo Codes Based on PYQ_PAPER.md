# 📝 Section III : Pseudo Codes Based on PYQ

- **Engine:** Testbook SDK
- **Folder:** `Infosys Mock Test Series / Day 07 / 2. Full Length Mock II- Based on Infosys PYQ`
- **Total Questions:** 7
- **Total Marks:** 7
- **Duration:** 10.0 Minutes
- **Test ID:** `68ceb4f96524303c0254a3d7`

---

## 🔹 Section: Technical Pseudo Codes -01

### Q1. (+1 / -0)

What is the output of the following C code? #include <stdio.h> int main() { int num = 987; int rem; while(num != 0) { rem = num % 4; num = num / 10; } printf("%d", rem); }

**Options:**
- **[1]** 0
- **[2]** 1 ✅ **[CORRECT]**
- **[3]** 10
- **[4]** 5

---

### Q2. (+1 / -0)

What is the output of the following C code? #include <stdio.h> int main() { float x = 0.0; long int y = 10; printf("%d", sizeof(y) == sizeof(x + y)); return 0; }

**Options:**
- **[1]** 3
- **[2]** 1 ✅ **[CORRECT]**
- **[3]** 5
- **[4]** 2

---

### Q3. (+1 / -0)

Predict the output of the given pseudocode if the value of the number is 6: Read number k = 2 i = 2 while i <= number: k = k * i i = i + 1 end while write k

**Options:**
- **[1]** 1440.0 ✅ **[CORRECT]**
- **[2]** 1340.0
- **[3]** 1700.0
- **[4]** 1560.0

---

### Q4. (+1 / -0)

What is the output of the following C code? int f(int x, int *py, int **ppz) { int y, z; **ppz += 1; z = **ppz; *py += 2; y = *py; x += 3; return x + y + z; } void main() { int c, *b, **a; c = 4; b = &c; a = &b; printf("%d ", f(c, b, a)); return 0; }

**Options:**
- **[1]** 18
- **[2]** 19 ✅ **[CORRECT]**
- **[3]** 21
- **[4]** 22

---

### Q5. (+1 / -0)

What is the output of the following C code? #include <stdio.h> int main() { int a = 12; void *ptr = (int *)&a; printf("%d", *ptr); getchar(); return 0; }

**Options:**
- **[1]** 12
- **[2]** Compiler Error ✅ **[CORRECT]**
- **[3]** Run Time Error
- **[4]** 0

---

### Q6. (+1 / -0)

Predict the output of the following pseudocode. Integer x, y, z Set x = -2, y = 3, z = 1 if (x + (2 & 2) && y + (3 & 3) && z + (2 ^ 2)) x = x - 2 y = x Else x = z y = y ^ 2 End if Print x + y + z

**Options:**
- **[1]** 2
- **[2]** 11
- **[3]** 3 ✅ **[CORRECT]**
- **[4]** 0

---

### Q7. (+1 / -0)

int main() { int x, y = 5, z = 5; x = y == z; Print(x) return 0; }

**Options:**
- **[1]** 0
- **[2]** 1 ✅ **[CORRECT]**
- **[3]** 5
- **[4]** Compilation Error

---

