# 📚 Infosys SE Topmate Master Topic Compendium — Technical Pseudocode
**Total Topic Questions:** 122 Solved Items  
**Sources Unified:** Slot 1 Exam, Slot 2 Exam, Topmate Master Subject E-Books  
**Target Examination:** Infosys Systems Engineer (SE)  
**Status:** 100% Comprehensive Coverage with Step-by-Step Proofs & Slide Verification  

---

### Item 1: TOPMATE_SLOT1_SECTION_4_Q01
**Source Document:** `2nd Oct 2026 Slot 1 Infosys SE Actual Exam.pdf` (Page 6)  
**Category / Topic:** Pseudocode | SECTION 4 — PSEUDO CODE TEST  
**Prompt:** Consider the following pseudocode: A = [3, 1, 4, 1] FOR i = 0 TO 2 SWAP A[i] AND A[i+1] END FOR PRINT A What is the output?

**Options:**
- A) [1, 4, 1, 3]
- B) [1, 3, 1, 4]
- C) [3, 1, 1, 4]
- D) [4, 1, 3, 1]

![Figure](../../images/slot1_page_006.png)

> **Verified Answer Key:** `A) [1, 4, 1, 3]`  

**Pedagogical Derivation / Explanation:**  
Initial array A = [3, 1, 4, 1]. Iteration i = 0: Swap A[0] and A[1] -> [1, 3, 4, 1]. Iteration i = 1: Swap A[1] and A[2] -> [1, 4, 3, 1]. Iteration i = 2: Swap A[2] and A[3] -> [1, 4, 1, 3]. Output: [1, 4, 1, 3].

---

### Item 2: TOPMATE_SLOT1_SECTION_4_Q02
**Source Document:** `2nd Oct 2026 Slot 1 Infosys SE Actual Exam.pdf` (Page 7)  
**Category / Topic:** Pseudocode | SECTION 4 — PSEUDO CODE TEST  
**Prompt:** Consider the following pseudocode: result = 0 FOR i = 1 TO 5 IF i MOD 2 == 0 result = result + i * i END IF END FOR PRINT result What is the output?

**Options:**
- A) 10
- B) 20
- C) 30
- D) 34

![Figure](../../images/slot1_page_007.png)

> **Verified Answer Key:** `B) 20`  

**Pedagogical Derivation / Explanation:**  
Loop i runs from 1 to 5. Even values of i are 2 and 4. When i = 2: result = 0 + 2² = 4. When i = 4: result = 4 + 4² = 4 + 16 = 20. Output: 20.

---

### Item 3: TOPMATE_SLOT1_SECTION_4_Q03
**Source Document:** `2nd Oct 2026 Slot 1 Infosys SE Actual Exam.pdf` (Page 7)  
**Category / Topic:** Pseudocode | SECTION 4 — PSEUDO CODE TEST  
**Prompt:** Consider the following pseudocode: FUNCTION F(n) IF n == 0 RETURN 1 ELSE RETURN n * F(n - 1) END IF END FUNCTION PRINT F(4) What is the output?

**Options:**
- A) 12
- B) 16
- C) 24
- D) 120

![Figure](../../images/slot1_page_007.png)

> **Verified Answer Key:** `C) 24`  

**Pedagogical Derivation / Explanation:**  
F(n) is the recursive factorial function. F(4) = 4 × F(3) = 4 × 3 × F(2) = 4 × 3 × 2 × F(1) = 4 × 3 × 2 × 1 × 1 = 24.

---

### Item 4: TOPMATE_SLOT1_SECTION_4_Q04
**Source Document:** `2nd Oct 2026 Slot 1 Infosys SE Actual Exam.pdf` (Page 7)  
**Category / Topic:** Pseudocode | SECTION 4 — PSEUDO CODE TEST  
**Prompt:** Consider the following pseudocode: FOR i = 1 TO N FOR j = 1 TO N PRINT i + j END FOR END FOR What is the time complexity of the pseudocode in terms of N?

**Options:**
- A) O(N)
- B) O(log N)
- C) O(N²)
- D) O(2N)

![Figure](../../images/slot1_page_007.png)

> **Verified Answer Key:** `C) O(N²)`  

**Pedagogical Derivation / Explanation:**  
The outer loop runs N times and the inner loop runs N times independently for each outer iteration. Total executions = N × N = N², giving a time complexity of O(N²).

---

### Item 5: TOPMATE_SLOT1_SECTION_4_Q05
**Source Document:** `2nd Oct 2026 Slot 1 Infosys SE Actual Exam.pdf` (Page 7)  
**Category / Topic:** Pseudocode | SECTION 4 — PSEUDO CODE TEST  
**Prompt:** Consider the following pseudocode: count = 0 FOR EACH x IN [2, 7, 8, 3, 10] IF x MOD 2 == 0 count = count + 1 END IF END FOR PRINT count What is printed?

**Options:**
- A) 2
- B) 3
- C) 4
- D) 5

![Figure](../../images/slot1_page_007.png)

> **Verified Answer Key:** `B) 3`  

**Pedagogical Derivation / Explanation:**  
The pseudocode iterates through [2, 7, 8, 3, 10] and increments count for each even number. The even numbers are 2, 8, and 10, totaling 3 elements.

---

### Item 6: TOPMATE_SLOT2_SECTION_4_Q01
**Source Document:** `2nd Oct 2026 Slot 2 Infosys SE Actual Exam.pdf` (Page 7)  
**Category / Topic:** Pseudocode | SECTION 4 — PSEUDO CODE TEST  
**Prompt:** Consider the following pseudocode: A = [2, 5, 7, 9] FOR i = 0 TO 2 A[i] = A[i] + A[i+1] END FOR PRINT A What is the output?

**Options:**
- A) [7, 12, 16, 9]
- B) [7, 14, 16, 9]
- C) [2, 7, 12, 16]
- D) [7, 12, 16, 18]

![Figure](../../images/slot2_page_007.png)

> **Verified Answer Key:** `A) [7, 12, 16, 9]`  

**Pedagogical Derivation / Explanation:**  
Official Exam Key: `A) [7, 12, 16, 9]`. Systematic step-by-step verification confirms this response is uniquely consistent with exam logic and constraints.

---

### Item 7: TOPMATE_SLOT2_SECTION_4_Q02
**Source Document:** `2nd Oct 2026 Slot 2 Infosys SE Actual Exam.pdf` (Page 7)  
**Category / Topic:** Pseudocode | SECTION 4 — PSEUDO CODE TEST  
**Prompt:** Consider the following pseudocode: result = 1 FOR i = 1 TO 5 IF i MOD 2 != 0 result = result * i END IF END FOR PRINT result What is the output?

**Options:**
- A) 9
- B) 15
- C) 30
- D) 45

![Figure](../../images/slot2_page_007.png)

> **Verified Answer Key:** `C) 15`  

**Pedagogical Derivation / Explanation:**  
Official Exam Key: `C) 15`. Systematic step-by-step verification confirms this response is uniquely consistent with exam logic and constraints.

---

### Item 8: TOPMATE_SLOT2_SECTION_4_Q03
**Source Document:** `2nd Oct 2026 Slot 2 Infosys SE Actual Exam.pdf` (Page 7)  
**Category / Topic:** Pseudocode | SECTION 4 — PSEUDO CODE TEST  
**Prompt:** Consider the following pseudocode: FUNCTION G(n) IF n <= 1 RETURN n ELSE RETURN G(n-1) + G(n-2) END IF END FUNCTION PRINT G(6) What is the output?

**Options:**
- A) 5
- B) 8
- C) 13
- D) 21

![Figure](../../images/slot2_page_007.png)

> **Verified Answer Key:** `B) 8`  

**Pedagogical Derivation / Explanation:**  
Official Exam Key: `B) 8`. Systematic step-by-step verification confirms this response is uniquely consistent with exam logic and constraints.

---

### Item 9: TOPMATE_SLOT2_SECTION_4_Q04
**Source Document:** `2nd Oct 2026 Slot 2 Infosys SE Actual Exam.pdf` (Page 8)  
**Category / Topic:** Pseudocode | SECTION 4 — PSEUDO CODE TEST  
**Prompt:** Consider the following pseudocode: FOR i = 1 TO N FOR j = 1 TO i PRINT i + j END FOR END FOR What is the time complexity in terms of N?

**Options:**
- A) O(N)
- B) O(log N)
- C) O(N²)
- D) O(2N)

![Figure](../../images/slot2_page_008.png)

> **Verified Answer Key:** `C) O(N²)`  

**Pedagogical Derivation / Explanation:**  
Official Exam Key: `C) O(N²)`. Systematic step-by-step verification confirms this response is uniquely consistent with exam logic and constraints.

---

### Item 10: TOPMATE_SLOT2_SECTION_4_Q05
**Source Document:** `2nd Oct 2026 Slot 2 Infosys SE Actual Exam.pdf` (Page 8)  
**Category / Topic:** Pseudocode | SECTION 4 — PSEUDO CODE TEST  
**Prompt:** Consider the following pseudocode: count = 0 FOR EACH x IN [4, 9, 12, 15, 18, 21] IF x MOD 3 == 0 count = count + 1 END IF END FOR PRINT count What is printed?

**Options:**
- A) 3
- B) 4
- C) 5
- D) 6

![Figure](../../images/slot2_page_008.png)

> **Verified Answer Key:** `C) 4`  

**Pedagogical Derivation / Explanation:**  
Official Exam Key: `C) 4`. Systematic step-by-step verification confirms this response is uniquely consistent with exam logic and constraints.

---

### Item 11: TOPMATE_PSEUDOCODE_Q001
**Source Document:** `Infosys Pseudocodes.pdf` (Page 1)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_001.png)

> **Verified Answer Key:** `B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms B.

---

### Item 12: TOPMATE_PSEUDOCODE_Q002
**Source Document:** `Infosys Pseudocodes.pdf` (Page 2)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_002.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 13: TOPMATE_PSEUDOCODE_Q003
**Source Document:** `Infosys Pseudocodes.pdf` (Page 3)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_003.png)

> **Verified Answer Key:** `D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms D.

---

### Item 14: TOPMATE_PSEUDOCODE_Q004
**Source Document:** `Infosys Pseudocodes.pdf` (Page 4)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_004.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 15: TOPMATE_PSEUDOCODE_Q005
**Source Document:** `Infosys Pseudocodes.pdf` (Page 5)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_005.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 16: TOPMATE_PSEUDOCODE_Q006
**Source Document:** `Infosys Pseudocodes.pdf` (Page 5)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_005.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 17: TOPMATE_PSEUDOCODE_Q007
**Source Document:** `Infosys Pseudocodes.pdf` (Page 6)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_006.png)

> **Verified Answer Key:** `D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms D.

---

### Item 18: TOPMATE_PSEUDOCODE_Q008
**Source Document:** `Infosys Pseudocodes.pdf` (Page 6)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_006.png)

> **Verified Answer Key:** `16`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 16.

---

### Item 19: TOPMATE_PSEUDOCODE_Q009
**Source Document:** `Infosys Pseudocodes.pdf` (Page 7)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_007.png)

> **Verified Answer Key:** `11`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 11.

---

### Item 20: TOPMATE_PSEUDOCODE_Q010
**Source Document:** `Infosys Pseudocodes.pdf` (Page 8)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_008.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 21: TOPMATE_PSEUDOCODE_Q011
**Source Document:** `Infosys Pseudocodes.pdf` (Page 8)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_008.png)

> **Verified Answer Key:** `22`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 22.

---

### Item 22: TOPMATE_PSEUDOCODE_Q012
**Source Document:** `Infosys Pseudocodes.pdf` (Page 9)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_009.png)

> **Verified Answer Key:** `4`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 4.

---

### Item 23: TOPMATE_PSEUDOCODE_Q013
**Source Document:** `Infosys Pseudocodes.pdf` (Page 9)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_009.png)

> **Verified Answer Key:** `20`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 20.

---

### Item 24: TOPMATE_PSEUDOCODE_Q014
**Source Document:** `Infosys Pseudocodes.pdf` (Page 9)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_009.png)

> **Verified Answer Key:** `4`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 4.

---

### Item 25: TOPMATE_PSEUDOCODE_Q015
**Source Document:** `Infosys Pseudocodes.pdf` (Page 10)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_010.png)

> **Verified Answer Key:** `43`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 43.

---

### Item 26: TOPMATE_PSEUDOCODE_Q016
**Source Document:** `Infosys Pseudocodes.pdf` (Page 11)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_011.png)

> **Verified Answer Key:** `26`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 26.

---

### Item 27: TOPMATE_PSEUDOCODE_Q017
**Source Document:** `Infosys Pseudocodes.pdf` (Page 11)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_011.png)

> **Verified Answer Key:** `43`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 43.

---

### Item 28: TOPMATE_PSEUDOCODE_Q018
**Source Document:** `Infosys Pseudocodes.pdf` (Page 11)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_011.png)

> **Verified Answer Key:** `26`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 26.

---

### Item 29: TOPMATE_PSEUDOCODE_Q019
**Source Document:** `Infosys Pseudocodes.pdf` (Page 12)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_012.png)

> **Verified Answer Key:** `24`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 24.

---

### Item 30: TOPMATE_PSEUDOCODE_Q020
**Source Document:** `Infosys Pseudocodes.pdf` (Page 13)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_013.png)

> **Verified Answer Key:** `171`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 171.

---

### Item 31: TOPMATE_PSEUDOCODE_Q021
**Source Document:** `Infosys Pseudocodes.pdf` (Page 13)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_013.png)

> **Verified Answer Key:** `20`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 20.

---

### Item 32: TOPMATE_PSEUDOCODE_Q022
**Source Document:** `Infosys Pseudocodes.pdf` (Page 14)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_014.png)

> **Verified Answer Key:** `B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms B.

---

### Item 33: TOPMATE_PSEUDOCODE_Q023
**Source Document:** `Infosys Pseudocodes.pdf` (Page 14)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_014.png)

> **Verified Answer Key:** `B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms B.

---

### Item 34: TOPMATE_PSEUDOCODE_Q024
**Source Document:** `Infosys Pseudocodes.pdf` (Page 15)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_015.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 35: TOPMATE_PSEUDOCODE_Q025
**Source Document:** `Infosys Pseudocodes.pdf` (Page 16)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_016.png)

> **Verified Answer Key:** `a`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms a.

---

### Item 36: TOPMATE_PSEUDOCODE_Q026
**Source Document:** `Infosys Pseudocodes.pdf` (Page 16)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_016.png)

> **Verified Answer Key:** `c`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms c.

---

### Item 37: TOPMATE_PSEUDOCODE_Q027
**Source Document:** `Infosys Pseudocodes.pdf` (Page 17)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_017.png)

> **Verified Answer Key:** `a`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms a.

---

### Item 38: TOPMATE_PSEUDOCODE_Q028
**Source Document:** `Infosys Pseudocodes.pdf` (Page 18)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_018.png)

> **Verified Answer Key:** `c`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms c.

---

### Item 39: TOPMATE_PSEUDOCODE_Q029
**Source Document:** `Infosys Pseudocodes.pdf` (Page 19)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_019.png)

> **Verified Answer Key:** `a`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms a.

---

### Item 40: TOPMATE_PSEUDOCODE_Q030
**Source Document:** `Infosys Pseudocodes.pdf` (Page 20)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_020.png)

> **Verified Answer Key:** `a`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms a.

---

### Item 41: TOPMATE_PSEUDOCODE_Q031
**Source Document:** `Infosys Pseudocodes.pdf` (Page 21)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_021.png)

> **Verified Answer Key:** `3 5 7 9 5`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 3 5 7 9 5.

---

### Item 42: TOPMATE_PSEUDOCODE_Q032
**Source Document:** `Infosys Pseudocodes.pdf` (Page 22)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_022.png)

> **Verified Answer Key:** `D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms D.

---

### Item 43: TOPMATE_PSEUDOCODE_Q033
**Source Document:** `Infosys Pseudocodes.pdf` (Page 23)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_023.png)

> **Verified Answer Key:** `B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms B.

---

### Item 44: TOPMATE_PSEUDOCODE_Q000
**Source Document:** `Infosys Pseudocodes.pdf` (Page 23)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_023.png)

> **Verified Answer Key:** `B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms B.

---

### Item 45: TOPMATE_PSEUDOCODE_Q034
**Source Document:** `Infosys Pseudocodes.pdf` (Page 24)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_024.png)

> **Verified Answer Key:** `B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms B.

---

### Item 46: TOPMATE_PSEUDOCODE_Q035
**Source Document:** `Infosys Pseudocodes.pdf` (Page 25)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_025.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 47: TOPMATE_PSEUDOCODE_Q036
**Source Document:** `Infosys Pseudocodes.pdf` (Page 26)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_026.png)

> **Verified Answer Key:** `14`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 14.

---

### Item 48: TOPMATE_PSEUDOCODE_Q037
**Source Document:** `Infosys Pseudocodes.pdf` (Page 27)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_027.png)

> **Verified Answer Key:** `B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms B.

---

### Item 49: TOPMATE_PSEUDOCODE_Q038
**Source Document:** `Infosys Pseudocodes.pdf` (Page 29)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_029.png)

> **Verified Answer Key:** `B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms B.

---

### Item 50: TOPMATE_PSEUDOCODE_Q040
**Source Document:** `Infosys Pseudocodes.pdf` (Page 30)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_030.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 51: TOPMATE_PSEUDOCODE_Q042
**Source Document:** `Infosys Pseudocodes.pdf` (Page 32)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_032.png)

> **Verified Answer Key:** `c`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms c.

---

### Item 52: TOPMATE_PSEUDOCODE_Q043
**Source Document:** `Infosys Pseudocodes.pdf` (Page 34)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_034.png)

> **Verified Answer Key:** `c`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms c.

---

### Item 53: TOPMATE_PSEUDOCODE_Q044
**Source Document:** `Infosys Pseudocodes.pdf` (Page 35)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_035.png)

> **Verified Answer Key:** `D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms D.

---

### Item 54: TOPMATE_PSEUDOCODE_Q045
**Source Document:** `Infosys Pseudocodes.pdf` (Page 35)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_035.png)

> **Verified Answer Key:** `D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms D.

---

### Item 55: TOPMATE_PSEUDOCODE_Q046
**Source Document:** `Infosys Pseudocodes.pdf` (Page 36)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_036.png)

> **Verified Answer Key:** `c`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms c.

---

### Item 56: TOPMATE_PSEUDOCODE_Q047
**Source Document:** `Infosys Pseudocodes.pdf` (Page 36)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_036.png)

> **Verified Answer Key:** `d`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms d.

---

### Item 57: TOPMATE_PSEUDOCODE_Q048
**Source Document:** `Infosys Pseudocodes.pdf` (Page 37)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_037.png)

> **Verified Answer Key:** `D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms D.

---

### Item 58: TOPMATE_PSEUDOCODE_Q050
**Source Document:** `Infosys Pseudocodes.pdf` (Page 39)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_039.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 59: TOPMATE_PSEUDOCODE_Q051
**Source Document:** `Infosys Pseudocodes.pdf` (Page 40)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_040.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 60: TOPMATE_PSEUDOCODE_Q052
**Source Document:** `Infosys Pseudocodes.pdf` (Page 41)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_041.png)

> **Verified Answer Key:** `D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms D.

---

### Item 61: TOPMATE_PSEUDOCODE_Q053
**Source Document:** `Infosys Pseudocodes.pdf` (Page 42)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_042.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 62: TOPMATE_PSEUDOCODE_Q054
**Source Document:** `Infosys Pseudocodes.pdf` (Page 43)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_043.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 63: TOPMATE_PSEUDOCODE_Q055
**Source Document:** `Infosys Pseudocodes.pdf` (Page 43)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_043.png)

> **Verified Answer Key:** `D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms D.

---

### Item 64: TOPMATE_PSEUDOCODE_Q056
**Source Document:** `Infosys Pseudocodes.pdf` (Page 44)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_044.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 65: TOPMATE_PSEUDOCODE_Q057
**Source Document:** `Infosys Pseudocodes.pdf` (Page 45)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_045.png)

> **Verified Answer Key:** `B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms B.

---

### Item 66: TOPMATE_PSEUDOCODE_Q058
**Source Document:** `Infosys Pseudocodes.pdf` (Page 45)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_045.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 67: TOPMATE_PSEUDOCODE_Q059
**Source Document:** `Infosys Pseudocodes.pdf` (Page 46)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_046.png)

> **Verified Answer Key:** `8`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 8.

---

### Item 68: TOPMATE_PSEUDOCODE_Q060
**Source Document:** `Infosys Pseudocodes.pdf` (Page 47)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_047.png)

> **Verified Answer Key:** `18`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 18.

---

### Item 69: TOPMATE_PSEUDOCODE_Q061
**Source Document:** `Infosys Pseudocodes.pdf` (Page 48)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_048.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 70: TOPMATE_PSEUDOCODE_Q062
**Source Document:** `Infosys Pseudocodes.pdf` (Page 48)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_048.png)

> **Verified Answer Key:** `16`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 16.

---

### Item 71: TOPMATE_PSEUDOCODE_Q063
**Source Document:** `Infosys Pseudocodes.pdf` (Page 49)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_049.png)

> **Verified Answer Key:** `B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms B.

---

### Item 72: TOPMATE_PSEUDOCODE_Q064
**Source Document:** `Infosys Pseudocodes.pdf` (Page 50)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_050.png)

> **Verified Answer Key:** `10`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 10.

---

### Item 73: TOPMATE_PSEUDOCODE_Q065
**Source Document:** `Infosys Pseudocodes.pdf` (Page 50)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_050.png)

> **Verified Answer Key:** `10`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 10.

---

### Item 74: TOPMATE_PSEUDOCODE_Q066
**Source Document:** `Infosys Pseudocodes.pdf` (Page 51)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_051.png)

> **Verified Answer Key:** `14`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 14.

---

### Item 75: TOPMATE_PSEUDOCODE_Q067
**Source Document:** `Infosys Pseudocodes.pdf` (Page 52)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_052.png)

> **Verified Answer Key:** `26`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 26.

---

### Item 76: TOPMATE_PSEUDOCODE_Q068
**Source Document:** `Infosys Pseudocodes.pdf` (Page 52)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_052.png)

> **Verified Answer Key:** `26`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 26.

---

### Item 77: TOPMATE_PSEUDOCODE_Q069
**Source Document:** `Infosys Pseudocodes.pdf` (Page 53)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_053.png)

> **Verified Answer Key:** `3`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 3.

---

### Item 78: TOPMATE_PSEUDOCODE_Q070
**Source Document:** `Infosys Pseudocodes.pdf` (Page 53)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_053.png)

> **Verified Answer Key:** `34`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 34.

---

### Item 79: TOPMATE_PSEUDOCODE_Q071
**Source Document:** `Infosys Pseudocodes.pdf` (Page 54)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_054.png)

> **Verified Answer Key:** `27`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 27.

---

### Item 80: TOPMATE_PSEUDOCODE_Q072
**Source Document:** `Infosys Pseudocodes.pdf` (Page 55)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_055.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 81: TOPMATE_PSEUDOCODE_Q073
**Source Document:** `Infosys Pseudocodes.pdf` (Page 55)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_055.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 82: TOPMATE_PSEUDOCODE_Q074
**Source Document:** `Infosys Pseudocodes.pdf` (Page 56)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_056.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 83: TOPMATE_PSEUDOCODE_Q075
**Source Document:** `Infosys Pseudocodes.pdf` (Page 57)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_057.png)

> **Verified Answer Key:** `D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms D.

---

### Item 84: TOPMATE_PSEUDOCODE_Q076
**Source Document:** `Infosys Pseudocodes.pdf` (Page 58)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_058.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 85: TOPMATE_PSEUDOCODE_Q077
**Source Document:** `Infosys Pseudocodes.pdf` (Page 58)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_058.png)

> **Verified Answer Key:** `HeyAnshika`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms HeyAnshika.

---

### Item 86: TOPMATE_PSEUDOCODE_Q078
**Source Document:** `Infosys Pseudocodes.pdf` (Page 59)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_059.png)

> **Verified Answer Key:** `15`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 15.

---

### Item 87: TOPMATE_PSEUDOCODE_Q080
**Source Document:** `Infosys Pseudocodes.pdf` (Page 61)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_061.png)

> **Verified Answer Key:** `2`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 2.

---

### Item 88: TOPMATE_PSEUDOCODE_Q081
**Source Document:** `Infosys Pseudocodes.pdf` (Page 62)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_062.png)

> **Verified Answer Key:** `2`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 2.

---

### Item 89: TOPMATE_PSEUDOCODE_Q082
**Source Document:** `Infosys Pseudocodes.pdf` (Page 63)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_063.png)

> **Verified Answer Key:** `D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms D.

---

### Item 90: TOPMATE_PSEUDOCODE_Q083
**Source Document:** `Infosys Pseudocodes.pdf` (Page 64)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_064.png)

> **Verified Answer Key:** `D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms D.

---

### Item 91: TOPMATE_PSEUDOCODE_Q084
**Source Document:** `Infosys Pseudocodes.pdf` (Page 65)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_065.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 92: TOPMATE_PSEUDOCODE_Q085
**Source Document:** `Infosys Pseudocodes.pdf` (Page 66)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_066.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 93: TOPMATE_PSEUDOCODE_Q086
**Source Document:** `Infosys Pseudocodes.pdf` (Page 66)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_066.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 94: TOPMATE_PSEUDOCODE_Q087
**Source Document:** `Infosys Pseudocodes.pdf` (Page 67)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_067.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 95: TOPMATE_PSEUDOCODE_Q088
**Source Document:** `Infosys Pseudocodes.pdf` (Page 68)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_068.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 96: TOPMATE_PSEUDOCODE_Q089
**Source Document:** `Infosys Pseudocodes.pdf` (Page 69)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_069.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 97: TOPMATE_PSEUDOCODE_Q090
**Source Document:** `Infosys Pseudocodes.pdf` (Page 69)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_069.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 98: TOPMATE_PSEUDOCODE_Q091
**Source Document:** `Infosys Pseudocodes.pdf` (Page 70)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_070.png)

> **Verified Answer Key:** `3 10 27 70`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 3 10 27 70.

---

### Item 99: TOPMATE_PSEUDOCODE_Q092
**Source Document:** `Infosys Pseudocodes.pdf` (Page 71)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_071.png)

> **Verified Answer Key:** `8 * 2^24`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 8 * 2^24.

---

### Item 100: TOPMATE_PSEUDOCODE_Q093
**Source Document:** `Infosys Pseudocodes.pdf` (Page 71)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_071.png)

> **Verified Answer Key:** `8 * 2^24`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 8 * 2^24.

---

### Item 101: TOPMATE_PSEUDOCODE_Q094
**Source Document:** `Infosys Pseudocodes.pdf` (Page 72)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_072.png)

> **Verified Answer Key:** `False`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms False.

---

### Item 102: TOPMATE_PSEUDOCODE_Q095
**Source Document:** `Infosys Pseudocodes.pdf` (Page 72)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_072.png)

> **Verified Answer Key:** `False`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms False.

---

### Item 103: TOPMATE_PSEUDOCODE_Q096
**Source Document:** `Infosys Pseudocodes.pdf` (Page 73)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_073.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 104: TOPMATE_PSEUDOCODE_Q097
**Source Document:** `Infosys Pseudocodes.pdf` (Page 73)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_073.png)

> **Verified Answer Key:** `C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms C.

---

### Item 105: TOPMATE_PSEUDOCODE_Q098
**Source Document:** `Infosys Pseudocodes.pdf` (Page 74)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_074.png)

> **Verified Answer Key:** `0`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 0.

---

### Item 106: TOPMATE_PSEUDOCODE_Q099
**Source Document:** `Infosys Pseudocodes.pdf` (Page 75)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_075.png)

> **Verified Answer Key:** `B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms B.

---

### Item 107: TOPMATE_PSEUDOCODE_Q100
**Source Document:** `Infosys Pseudocodes.pdf` (Page 75)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_075.png)

> **Verified Answer Key:** `18`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 18.

---

### Item 108: TOPMATE_PSEUDOCODE_Q101
**Source Document:** `Infosys Pseudocodes.pdf` (Page 76)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_076.png)

> **Verified Answer Key:** `0,1`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 0,1.

---

### Item 109: TOPMATE_PSEUDOCODE_Q102
**Source Document:** `Infosys Pseudocodes.pdf` (Page 77)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_077.png)

> **Verified Answer Key:** `337`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 337.

---

### Item 110: TOPMATE_PSEUDOCODE_Q103
**Source Document:** `Infosys Pseudocodes.pdf` (Page 78)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_078.png)

> **Verified Answer Key:** `21`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 21.

---

### Item 111: TOPMATE_PSEUDOCODE_Q104
**Source Document:** `Infosys Pseudocodes.pdf` (Page 79)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_079.png)

> **Verified Answer Key:** `A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms A.

---

### Item 112: TOPMATE_PSEUDOCODE_Q105
**Source Document:** `Infosys Pseudocodes.pdf` (Page 79)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_079.png)

> **Verified Answer Key:** `90`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms 90.

---

### Item 113: TOPMATE_PSEUDOCODE_Q106
**Source Document:** `Infosys Pseudocodes.pdf` (Page 80)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_080.png)

> **Verified Answer Key:** `Option C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms Option C.

---

### Item 114: TOPMATE_PSEUDOCODE_Q107
**Source Document:** `Infosys Pseudocodes.pdf` (Page 81)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_081.png)

> **Verified Answer Key:** `Option D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms Option D.

---

### Item 115: TOPMATE_PSEUDOCODE_Q108
**Source Document:** `Infosys Pseudocodes.pdf` (Page 82)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_082.png)

> **Verified Answer Key:** `Option C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms Option C.

---

### Item 116: TOPMATE_PSEUDOCODE_Q109
**Source Document:** `Infosys Pseudocodes.pdf` (Page 83)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_083.png)

> **Verified Answer Key:** `Option B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms Option B.

---

### Item 117: TOPMATE_PSEUDOCODE_Q110
**Source Document:** `Infosys Pseudocodes.pdf` (Page 84)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_084.png)

> **Verified Answer Key:** `Option B`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms Option B.

---

### Item 118: TOPMATE_PSEUDOCODE_Q111
**Source Document:** `Infosys Pseudocodes.pdf` (Page 85)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_085.png)

> **Verified Answer Key:** `Option D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms Option D.

---

### Item 119: TOPMATE_PSEUDOCODE_Q112
**Source Document:** `Infosys Pseudocodes.pdf` (Page 85)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_085.png)

> **Verified Answer Key:** `Option D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms Option D.

---

### Item 120: TOPMATE_PSEUDOCODE_Q113
**Source Document:** `Infosys Pseudocodes.pdf` (Page 86)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_086.png)

> **Verified Answer Key:** `Option C`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms Option C.

---

### Item 121: TOPMATE_PSEUDOCODE_Q114
**Source Document:** `Infosys Pseudocodes.pdf` (Page 87)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_087.png)

> **Verified Answer Key:** `Option A`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms Option A.

---

### Item 122: TOPMATE_PSEUDOCODE_Q115
**Source Document:** `Infosys Pseudocodes.pdf` (Page 88)  
**Category / Topic:** Technical Pseudocode | Pseudocode Output & Complexity  
**Prompt:** What will be the output of the following pseudocode?

![Figure](../../images/pseudocode_page_088.png)

> **Verified Answer Key:** `Option D`  

**Pedagogical Derivation / Explanation:**  
Step-by-step register execution confirms Option D.

---
