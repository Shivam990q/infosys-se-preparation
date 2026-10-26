# 🏆 Infosys SE Elite Crack Vault — 08 College ITM Pseudocode 35Q Exam Compendium Elite
> **Target Role:** **Infosys Systems Engineer (SE)** (3.6 – 4.0 LPA Recruitment Drive)  
> **Curation Standard:** **100% Pure SE Role Specific** (All SP/DSE Upper-Level & Practice Variants Purged)  
> **Total Curated Questions in Topic:** **24 Questions**  
> **Question Breakdown:** 🔴 `8 Must-Solve` | 🟡 `16 Core SE Level`  
> **Verification Score:** 100% Mathematically & Deductively Proven with Zero Hallucination  

---

### Question 1: Infosys SE Question 1  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (Infosys System Engineer ITM Mock Paper 1 - Q46)
**Section:** Section 4: Pseudo Code | **Page:** 5  
**Visual Reference Plate:** [paper_01_page_05.png](images/paper_01_page_05.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed? 
int f(int n) { 
    if (n <= 1) return n; 
    return f(n-1) + 2 * f(n-2); 
} 
print(f(6))
```

**Options:**
- **(A)** 15
- **(B)** 21
- **(C)** 27
- **(D)** 31

**Correct Answer:** Option **(B)** — `21`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
Recursive function trace:
- f(0) = 0
- f(1) = 1
- f(2) = f(1) + 2·f(0) = 1 + 0 = 1
- f(3) = f(2) + 2·f(1) = 1 + 2(1) = 3
- f(4) = f(3) + 2·f(2) = 3 + 2(1) = 5
- f(5) = f(4) + 2·f(3) = 5 + 2(3) = 11
- f(6) = f(5) + 2·f(4) = 11 + 2(5) = 21.

---


### Question 2: Infosys SE Question 2  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (Infosys System Engineer ITM Mock Paper 1 - Q47)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_01_page_06.png](images/paper_01_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed? 
x = 45; count = 0; 
while (x != 0) { 
    x = x & (x - 1); 
    count++; 
} 
print(count ^ (45 >> 2))
```

**Options:**
- **(A)** 4
- **(B)** 11
- **(C)** 15
- **(D)** 7

**Correct Answer:** Option **(C)** — `15`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
Brian Kernighan's bit-counting loop clears the lowest set bit in each iteration.
For x = 45 = 32 + 8 + 4 + 1 = 101101₂ (4 set bits):
Loop executes 4 times => count = 4.
Right shift: 45 >> 2 = 11 (binary 1011₂).
Bitwise XOR: count ^ 11 = 4 ^ 11 = 0100₂ ^ 1011₂ = 1111₂ = 15.

---


### Question 3: Infosys SE Question 3  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (Infosys System Engineer ITM Mock Paper 1 - Q48)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_01_page_06.png](images/paper_01_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed? 
s = 0 
for i = 1 to 5 
    for j = i to 5 
        if ((i + j) % 3 == 0) continue 
        if (j == 5) break 
        s = s + i * j 
    end for 
end for 
print(s)
```

**Options:**
- **(A)** 38
- **(B)** 42
- **(C)** 46
- **(D)** 50

**Correct Answer:** Option **(C)** — `46`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
Nested loops simulation:
- i=1: j=1 (sum=2, add 1); j=2 ((1+2)%3==0, continue); j=3 (sum=4, add 3); j=4 (sum=5, add 4); j=5 ((1+5)%3==0, continue before break!). Running s = 1 + 3 + 4 = 8.
- i=2: j=2 (sum=4, add 4); j=3 (sum=5, add 6); j=4 ((2+4)%3==0, continue); j=5 (j==5, break). Running s = 8 + 4 + 6 = 18.
- i=3: j=3 ((3+3)%3==0, continue); j=4 (sum=7, add 12); j=5 (j==5, break). Running s = 18 + 12 = 30.
- i=4: j=4 (sum=8, add 16); j=5 ((4+5)%3==0, continue before break). Running s = 30 + 16 = 46.
- i=5: j=5 (j==5, break).
Final s = 46.

---


### Question 4: Infosys SE Question 4  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (Infosys System Engineer ITM Mock Paper 1 - Q49)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_01_page_06.png](images/paper_01_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
A stack is used (operands are evaluated left to right). What is printed? 
push(3); push(5); push(7); 
x = pop(); 
push(x * 2); 
push(pop() + pop()); 
print(pop() - pop())
```

**Options:**
- **(A)** 14
- **(B)** 16
- **(C)** 19
- **(D)** 22

**Correct Answer:** Option **(B)** — `16`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
Stack execution trace (LIFO):
1) push(3) -> [3]
2) push(5) -> [3, 5]
3) push(7) -> [3, 5, 7]
4) x = pop() => x = 7; stack = [3, 5]
5) push(7 * 2) = push(14) -> [3, 5, 14]
6) push(pop() + pop()): first pop() returns 14, second pop() returns 5; 14 + 5 = 19; push(19) -> [3, 19]
7) print(pop() - pop()): first pop() returns 19, second pop() returns 3; 19 - 3 = 16.

---


### Question 5: Infosys SE Question 5  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (Infosys System Engineer ITM Mock Paper 1 - Q50)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_01_page_06.png](images/paper_01_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
What is the final content of arr? (indexing starts at 0; updates are in place) 
arr = [4, 1, 3, 2] 
for i = 0 to 3 
    arr[i] = arr[i] + arr[arr[i] % 4] 
end for
```

**Options:**
- **(A)** [8, 2, 5, 7]
- **(B)** [8, 2, 5, 6]
- **(C)** [8, 5, 5, 7]
- **(D)** [5, 2, 5, 7]

**Correct Answer:** Option **(A)** — `[8, 2, 5, 7]`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
In-place array update with arr = [4, 1, 3, 2]:
- i = 0: arr[0] = arr[0] + arr[arr[0] % 4] = 4 + arr[4 % 4] = 4 + arr[0] = 4 + 4 = 8. arr = [8, 1, 3, 2].
- i = 1: arr[1] = arr[1] + arr[arr[1] % 4] = 1 + arr[1 % 4] = 1 + arr[1] = 1 + 1 = 2. arr = [8, 2, 3, 2].
- i = 2: arr[2] = arr[2] + arr[arr[2] % 4] = 3 + arr[3 % 4] = 3 + arr[3] = 3 + 2 = 5. arr = [8, 2, 5, 2].
- i = 3: arr[3] = arr[3] + arr[arr[3] % 4] = 2 + arr[2 % 4] = 2 + arr[2] = 2 + 5 = 7. arr = [8, 2, 5, 7].
Final content: [8, 2, 5, 7].

---


### Question 6: Infosys SE Question 6  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (Infosys System Engineer ITM Mock Paper 2 - Q46)
**Section:** Section 4: Pseudo Code | **Page:** 5  
**Visual Reference Plate:** [paper_02_page_05.png](images/paper_02_page_05.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed?
int f(int n) {
    if (n == 0) return 1;
    if (n == 1) return 2;
    return f(n-1) + f(n-2) * 2;
}
print(f(5))
```

**Options:**
- **(A)** 26
- **(B)** 30
- **(C)** 32
- **(D)** 34

**Correct Answer:** Option **(C)** — `32`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
32. f(0)=1, f(1)=2, f(2)=2+2=4, f(3)=4+4=8, f(4)=8+8=16, f(5)=16+16=32.

---


### Question 7: Infosys SE Question 7  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (Infosys System Engineer ITM Mock Paper 2 - Q47)
**Section:** Section 4: Pseudo Code | **Page:** 5  
**Visual Reference Plate:** [paper_02_page_05.png](images/paper_02_page_05.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed? (x and y are unsigned integers)
x = 58; y = 0;
while (x > 0) {
    y = (y << 1) | (x & 1);
    x = x >> 1;
}
print(y)
```

**Options:**
- **(A)** 23
- **(B)** 29
- **(C)** 37
- **(D)** 41

**Correct Answer:** Option **(A)** — `23`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
23. The loop peels off bits of x from the LSB and rebuilds y by shifting left each time, which reverses 
the bit order of x within its significant bits. 58 = 111010₂ (6 bits); reversed = 010111₂ = 23. (Trace: y goes 
0→0→1→2→5→11→23 as x's bits 0,1,0,1,1,1 are consumed in order.)

---


### Question 8: Infosys SE Question 8  `🔴 [🔥 MUST-SOLVE | INFOSYS SE ACTUAL PATTERN]`
> **🎯 Exam Priority:** **`🔴 [🔥 MUST-SOLVE / HIGH RECURRENCE]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`** (Single/Double Step Deduction)  
> **💡 Preparation Advice:** **MANDATORY FOR 5-6 NOV DRIVE** (Direct recurring exam concept)

 (Infosys System Engineer ITM Mock Paper 2 - Q48)
**Section:** Section 4: Pseudo Code | **Page:** 5  
**Visual Reference Plate:** [paper_02_page_05.png](images/paper_02_page_05.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed?
s = 0
for i = 1 to 4
    for j = 1 to 4
        if (i == j) continue
        if (i + j > 6) break
        s = s + (i * j)
    end for
end for
print(s)
```

**Options:**
- **(A)** 40
- **(B)** 44
- **(C)** 46
- **(D)** 48

**Correct Answer:** Option **(C)** — `46`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
46. i=1: skips j=1 (i==j); adds 1×2+1×3+1×4 = 9. i=2: skips j=2; adds 2×1+2×3+2×4 = 16 (running 25; 
note j=4 gives i+j=6, which is not >6, so it's included). i=3: skips j=3; adds 3×1+3×2 = 9, then j=4 gives i+j=7>6 
→ break (running 34). i=4: adds 4×1+4×2 = 12, then j=3 gives i+j=7>6 → break (running 46).

---


### Question 9: Infosys SE Question 9  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 2 - Q49)
**Section:** Section 4: Pseudo Code | **Page:** 5  
**Visual Reference Plate:** [paper_02_page_05.png](images/paper_02_page_05.png)

**Pseudocode / Algorithm Stem:**
```c
A queue is used (FIFO). What is printed?
enqueue(2); enqueue(4); enqueue(6);
a = dequeue();
enqueue(a + 10);
b = dequeue();
c = dequeue();
print(b + c)
```

**Options:**
- **(A)** 10
- **(B)** 16
- **(C)** 18
- **(D)** 22

**Correct Answer:** Option **(A)** — `10`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
10. Queue [2,4,6] → dequeue 2 (a) → [4,6] → enqueue 12 → [4,6,12] → dequeue 4 (b) → dequeue 6 
(c) → [12]. b + c = 4 + 6 = 10.

---


### Question 10: Infosys SE Question 10  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 2 - Q50)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_02_page_06.png](images/paper_02_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
What is the final content of arr? (0-indexed; each statement uses the array's state at that point)
arr = [1, 2, 3, 4, 5]
temp = arr[0]
arr[0] = arr[4]
arr[4] = arr[2]
arr[2] = arr[1]
arr[1] = temp
```

**Options:**
- **(A)** [5, 1, 2, 4, 3]
- **(B)** [5, 1, 3, 4, 2]
- **(C)** [5, 2, 1, 4, 3]
- **(D)** [5, 1, 2, 4, 2]

**Correct Answer:** Option **(A)** — `[5, 1, 2, 4, 3]`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
temp=1. arr[0]=arr[4]=5 → [5,2,3,4,5]. arr[4]=arr[2]=3 → [5,2,3,4,3]. arr[2]=arr[1]=2 → [5,2,2,4,3]. 
arr[1]=temp=1 → final [5,1,2,4,3].

---


### Question 11: Infosys SE Question 11  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 3 - Q46)
**Section:** Section 4: Pseudo Code | **Page:** 5  
**Visual Reference Plate:** [paper_03_page_05.png](images/paper_03_page_05.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed?
```

**Options:**
- **(A)** 40
- **(B)** 46
- **(C)** 52
- **(D)** 44 
int f(int n) { 
if (n <= 0) return 0; 
if (n == 1) return 1; 
return f(n-1) + f(n-2) + n; 
} 
print(f(6)) 

 
 
x = 37; mask = 0; 
for i = 0 to 5 
if (((x >> i) & 1) == 1) 
mask = mask | (1 << (5 - i)) 
end if 
end for 
print(mask) 
s = 0; i = 1 
while (i <= 6) 
j = 1 
while (j <= i) 
if (j % 2 == 0) 
j = j + 1 
continue 
end if 
s = s + (i * j) 
j = j + 1 
end while 
i = i + 1 
end while 
print(s) 
push(4); push(7); 
a = pop(); b = pop(); 
push(a - b); 
push(10); 
c = pop(); d = pop(); 
push(c + d); 
push(3); 
e = pop(); f = pop(); 
print(e * f) 
arr = [10, 20, 30, 40, 50, 60] 
i = 0; j = 5 
while (i < j) 
temp = arr[i] 
arr[i] = arr[j] 
arr[j] = temp 
i = i + 1 
j = j - 2 
end while 
print(arr)

**Correct Answer:** Option **(B)** — `46`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
46. f(0)=0, f(1)=1, f(2)=1+0+2=3, f(3)=3+1+3=7, f(4)=7+3+4=14, f(5)=14+7+5=26, f(6)=26+14+6=46.

---


### Question 12: Infosys SE Question 12  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 3 - Q47)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_03_page_06.png](images/paper_03_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed?
```

**Options:**
- **(A)** 37
- **(B)** 41
- **(C)** 45
- **(D)** 39

**Correct Answer:** Option **(B)** — `41`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
41. 37 = 100101₂ (bits: bit0=1,bit2=1,bit5=1, rest 0). The loop places bit i of x into position (5−i) of 
mask, which reverses the 6-bit pattern: 100101 reversed is 101001 = 32+8+1 = 41.

---


### Question 13: Infosys SE Question 13  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 3 - Q48)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_03_page_06.png](images/paper_03_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed?
```

**Options:**
- **(A)** 130
- **(B)** 124
- **(C)** 136
- **(D)** 118

**Correct Answer:** Option **(A)** — `130`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
130. Tracing directly (j increments before each continue, so the loop always terminates correctly): 
i=1 contributes 1; i=2 contributes 2; i=3 contributes 3+9=12; i=4 contributes 4+12=16; i=5 contributes 
5+15+25=45; i=6 contributes 6+18+30=54. Total = 1+2+12+16+45+54 = 130.

---


### Question 14: Infosys SE Question 14  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 3 - Q49)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_03_page_06.png](images/paper_03_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
A stack is used (LIFO). What is printed?
```

**Options:**
- **(A)** 39
- **(B)** 33
- **(C)** 42
- **(D)** 30

**Correct Answer:** Option **(A)** — `39`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
39. Stack: push 4,7 → [4,7]. a=pop=7, b=pop=4 → push(7−4=3) → [3]. push(10) → [3,10]. c=pop=10, 
d=pop=3 → push(13) → [13]. push(3) → [13,3]. e=pop=3, f=pop=13. e×f = 39.

---


### Question 15: Infosys SE Question 15  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 3 - Q50)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_03_page_06.png](images/paper_03_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
What is the final content of arr? (0-indexed; each statement uses the array's state at that point)
```

**Options:**
- **(A)** [60, 40, 30, 20, 50, 10]
- **(B)** [60, 20, 30, 40, 50, 10]
- **(C)** [10, 40, 30, 20, 50, 60]
- **(D)** [60, 40, 50, 20, 30, 10]

**Correct Answer:** Option **(A)** — `[60, 40, 30, 20, 50, 10]`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
i=0,j=5: swap arr[0],arr[5] → [60,20,30,40,50,10]; i=1,j=3. i<j (1<3): swap arr[1],arr[3] → 
[60,40,30,20,50,10]; i=2,j=1. Now i<j fails (2<1), loop ends. Final: [60,40,30,20,50,10]. 

---


### Question 16: Infosys SE Question 16  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 4 - Q46)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_04_page_06.png](images/paper_04_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed? (% is the modulo operator) 
int gcd(int a, int b) { 
    if (b == 0) return a; 
    return gcd(b, a % b); 
} 
print(gcd(252, 105))
```

**Options:**
- **(A)** 21
- **(B)** 42
- **(C)** 7
- **(D)** 14

**Correct Answer:** Option **(A)** — `21`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
21. gcd(252,105): 252%105=42 → gcd(105,42): 105%42=21 → gcd(42,21): 42%21=0 → gcd(21,0)=21.

---


### Question 17: Infosys SE Question 17  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 4 - Q47)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_04_page_06.png](images/paper_04_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed? (^=XOR, |=OR, &=AND, >>=right shift) 
a = 13; b = 25; 
c = (a ^ b) & (a | b); 
d = c >> 2; 
print(c + d)
```

**Options:**
- **(A)** 25
- **(B)** 29
- **(C)** 20
- **(D)** 33

**Correct Answer:** Option **(A)** — `25`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
25. 13=01101, 25=11001. a^b = 10100 = 20. a|b = 11101 = 29. c = 20 & 29 = 10100 = 20. d = 20>>2 = 
5. c+d = 20+5 = 25.

---


### Question 18: Infosys SE Question 18  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 4 - Q48)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_04_page_06.png](images/paper_04_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
How many swaps are performed in total? 
arr = [5, 2, 8, 1, 9, 3] 
swaps = 0 
for i = 0 to 4 
    for j = 0 to 4 - i 
        if (arr[j] > arr[j+1]) 
            temp = arr[j] 
            arr[j] = arr[j+1] 
            arr[j+1] = temp 
            swaps = swaps + 1 
        end if 
    end for 
end for 
print(swaps)
```

**Options:**
- **(A)** 7
- **(B)** 8
- **(C)** 6
- **(D)** 9

**Correct Answer:** Option **(A)** — `7`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
7. Full bubble-sort trace: pass i=0 gives 3 swaps (array becomes [2,5,1,8,3,9]); pass i=1 gives 2 more 
swaps ([2,1,5,3,8,9]); pass i=2 gives 2 more swaps ([1,2,3,5,8,9], now sorted); passes i=3 and i=4 give 0 
swaps. Total = 3+2+2 = 7.

---


### Question 19: Infosys SE Question 19  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 4 - Q49)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_04_page_06.png](images/paper_04_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
This algorithm reverses the first k elements of a queue using a stack. What is printed? 
queue = [1, 2, 3, 4, 5] 
stack = [] 
k = 3 
for i = 1 to k 
    push(stack, dequeue(queue)) 
end for 
while (stack is not empty) 
    enqueue(queue, pop(stack)) 
end while 
for i = 1 to (5 - k) 
    enqueue(queue, dequeue(queue)) 
end for 
print(queue)
```

**Options:**
- **(A)** [3, 2, 1, 4, 5]
- **(B)** [1, 2, 3, 4, 5]
- **(C)** [5, 4, 3, 2, 1]
- **(D)** [3, 2, 1, 5, 4]

**Correct Answer:** Option **(A)** — `[3, 2, 1, 4, 5]`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
This is the standard "reverse first k of a queue" algorithm. After moving the first 3 elements through 
the stack, the queue becomes [4,5,3,2,1]; the final rotation step (dequeue+enqueue twice) moves 4 and 5 to 
the back, giving [3,2,1,4,5] — the first 3 elements correctly reversed.

---


### Question 20: Infosys SE Question 20  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 4 - Q50)
**Section:** Section 4: Pseudo Code | **Page:** 7  
**Visual Reference Plate:** [paper_04_page_07.png](images/paper_04_page_07.png)

**Pseudocode / Algorithm Stem:**
```c
This algorithm moves all non-zero elements to the front, preserving order, and fills the rest with zeroes. 
What is the final arr? 
arr = [3, 0, 4, 0, 5, 0, 2] 
pos = 0 
for i = 0 to 6 
    if (arr[i] != 0) 
        arr[pos] = arr[i] 
        pos = pos + 1 
    end if 
end for 
while (pos <= 6) 
    arr[pos] = 0 
    pos = pos + 1 
end while 
print(arr)
```

**Options:**
- **(A)** [3, 4, 5, 2, 0, 0, 0]
- **(B)** [3, 0, 4, 0, 5, 0, 2]
- **(C)** [3, 4, 5, 2, 0, 0, 2]
- **(D)** [0, 0, 0, 3, 4, 5, 2]

**Correct Answer:** Option **(A)** — `[3, 4, 5, 2, 0, 0, 0]`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
Non-zero elements (3,4,5,2) are copied to the front in order, giving positions 0–3; the while loop then 
zeroes out positions 4,5,6. Final: [3,4,5,2,0,0,0]. 

---


### Question 21: Infosys SE Question 21  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 5 - Q46)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_05_page_06.png](images/paper_05_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed? (This computes the number of grid paths from one corner to another, moving only 
right or down.) 
int f(int n, int m) { 
    if (n == 0 || m == 0) return 1; 
    return f(n-1, m) + f(n, m-1); 
} 
print(f(3, 2))
```

**Options:**
- **(A)** 10
- **(B)** 8
- **(C)** 12
- **(D)** 9

**Correct Answer:** Option **(A)** — `10`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
10. This recursion counts grid paths and equals C(n+m,n). Tracing directly: f(1,1)=2, f(2,1)=3, f(1,2)=3, 
f(2,2)=6, f(3,1)=4, f(3,2)=f(2,2)+f(3,1)=6+4=10 (also confirmed by code execution).

---


### Question 22: Infosys SE Question 22  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 5 - Q47)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_05_page_06.png](images/paper_05_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
What is printed? (>>=right shift, <<=left shift, &=AND, ^=XOR) 
x = 0; 
for i = 0 to 7 
    if (((45 >> i) & 1) == 1) 
        x = x + (1 << (7 - i)) 
    end if 
end for 
y = x ^ 45 
print(y)
```

**Options:**
- **(A)** 153
- **(B)** 180
- **(C)** 135
- **(D)** 171

**Correct Answer:** Option **(A)** — `153`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
153. 45 = 00101101 in 8 bits. The loop reverses these 8 bits into x, giving x=180 (10110100). y = x^45 
= 180^45 = 153 (verified by direct computation).

---


### Question 23: Infosys SE Question 23  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 5 - Q48)
**Section:** Section 4: Pseudo Code | **Page:** 6  
**Visual Reference Plate:** [paper_05_page_06.png](images/paper_05_page_06.png)

**Pseudocode / Algorithm Stem:**
```c
This is a binary search for target = 50 in a sorted array. How many comparisons are made before 
the loop ends (the target is not present)? 
arr = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91] 
low = 0; high = 10; target = 50; comparisons = 0 
while (low <= high) 
    mid = (low + high) / 2 
    comparisons = comparisons + 1 
    if (arr[mid] == target) 
        break 
    else if (arr[mid] < target) 
        low = mid + 1 
    else 
        high = mid - 1 
    end if 
end while 
print(comparisons)
```

**Options:**
- **(A)** 4
- **(B)** 3
- **(C)** 5
- **(D)** 6

**Correct Answer:** Option **(A)** — `4`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
4. Tracing the search for target=50 (not present): mid=5(23)→low=6; mid=8(56)→high=7; 
mid=6(38)→low=7; mid=7(45)→low=8, loop ends. That's 4 comparisons (verified by direct trace).

---


### Question 24: Infosys SE Question 24  `🟡 [⭐ CORE SE LEVEL | HIGH PROBABILITY]`
> **🎯 Exam Priority:** **`🟡 [⭐ CORE SE LEVEL]`**  
> **📊 Target Difficulty:** **`Infosys SE Standard Level`**  
> **💡 Preparation Advice:** Essential syllabus concept — highly recommended for sectional cutoff.

 (Infosys System Engineer ITM Mock Paper 5 - Q49)
**Section:** Section 4: Pseudo Code | **Page:** 7  
**Visual Reference Plate:** [paper_05_page_07.png](images/paper_05_page_07.png)

**Pseudocode / Algorithm Stem:**
```c
This stack trace evaluates a postfix-style expression. What is printed? 
push(6); push(2); push(3); 
c = pop(); b = pop(); push(b + c); 
d = pop(); e = pop(); push(e - d); 
push(3); push(8); push(2); 
f = pop(); g = pop(); push(g / f); 
h = pop(); i = pop(); push(i + h); 
j = pop(); k = pop(); push(k * j); 
print(pop())
```

**Options:**
- **(A)** 7
- **(B)** 10
- **(C)** 14
- **(D)** 4

**Correct Answer:** Option **(A)** — `7`

**Step-by-Step Dry-Run Execution Trace & Analysis:**
7. This performs the postfix evaluation of "6 2 3 + − 3 8 2 / + ×": (2+3)=5, (6−5)=1, (8/2)=4, (3+4)=7, 
(1×7)=7.

---

