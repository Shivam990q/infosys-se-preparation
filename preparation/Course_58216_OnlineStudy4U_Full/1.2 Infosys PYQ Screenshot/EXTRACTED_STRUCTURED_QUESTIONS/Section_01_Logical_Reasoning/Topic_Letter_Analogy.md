# Section - Logical Reasoning
## Topic - Letter Analogy and Coding-Decoding

> **Source Vault:** `1.2.1Infosys PYQ Screenshots- PART1`  
> **Print Optimization:** Monospace alphabet shift tables, verified cipher rules.

---

### Question 1 [Source: `photo_1034@28-10-2024_22-34-34.jpg`, `photo_1036@28-10-2024_22-34-34.jpg`]
**Question:** In the following question, select the related letter-group from the given alternatives:
$$\text{ARFD} : \text{BTIH} :: \text{SFRP} : ?$$

**Answer Options:**
* **(A)** THUT
* **(B)** TGUT
* **(C)** TJVT
* **(D)** TIUT

**Correct Answer:** **(A) THUT**  
**Mathematical Positional Derivation:**
* Let $P(X)$ denote the alphabetical position of letter $X$ ($A=1, B=2, \dots, Z=26$).
* Analysis of First Pair ($\text{ARFD} \to \text{BTIH}$):
  * $A (1) + 1 = B (2)$
  * $R (18) + 2 = T (20)$
  * $F (6) + 3 = I (9)$
  * $D (4) + 4 = H (8)$
  * **Shift Rule:** $+1, +2, +3, +4$.
* Applying to Second Pair ($\text{SFRP}$):
  * $S (19) + 1 = T (20)$
  * $F (6) + 2 = H (8)$
  * $R (18) + 3 = U (21)$
  * $P (16) + 4 = T (20)$
* Resulting String: **THUT**.

---

### Question 2 [Source: `photo_1022@28-10-2024_22-34-34.jpg`]
**Question:** You are asked to arrange the letters of the word **'CREATIVE'** such that each consonant is replaced by the previous letter in the English alphabet, and each vowel is replaced by the next letter in the English alphabet. How many letters appear more than once in the newly formed word?

**Answer Options:**
* **(A)** None
* **(B)** One
* **(C)** Two
* **(D)** Three

**Correct Answer:** **(C) Two**  
**Transformation Table:**
| Original Letter | Type | Rule | New Letter |
|:---:|:---:|:---:|:---:|
| **C** | Consonant | $-1$ | **B** |
| **R** | Consonant | $-1$ | **Q** |
| **E** | Vowel | $+1$ | **F** |
| **A** | Vowel | $+1$ | **B** |
| **T** | Consonant | $-1$ | **S** |
| **I** | Vowel | $+1$ | **J** |
| **V** | Consonant | $-1$ | **U** |
| **E** | Vowel | $+1$ | **F** |

* Transformed Letters: **B, Q, F, B, S, J, U, F**.
* Frequency Count:
  * **B** appears 2 times (from C and A).
  * **F** appears 2 times (from both E's).
  * Q, S, J, U appear 1 time each.
* Exactly **2** letters (B and F) appear more than once.

---

### Question 3 [Source: `photo_1901@28-10-2024_22-49-56.jpg`]
**Question:** How many S's are there in the given arrangement which are immediately preceded by a vowel and immediately followed by a consonant?  
$$\text{P A E S Q R S T U A D F U S G T I O S O R T S B H N}$$

**Answer Options:**
* **(A)** 1
* **(B)** 2
* **(C)** 3
* **(D)** 4

**Correct Answer:** **(B) 2**  
**Linear Pattern Matching Proof:**
* Required Condition Template: `[Vowel] - S - [Consonant]` (where Vowels $\in \{A, E, I, O, U\}$).
* Let us inspect every occurrence of the letter **S**:
  1. Occurrence 1: `... A E S Q ...`
     * Preceding char: **E** (Vowel)
     * Following char: **Q** (Consonant)
     * **Match 1: `E S Q`** $\checkmark$
  2. Occurrence 2: `... Q R S T ...`
     * Preceding char: **R** (Consonant)
     * Does not match $\times$
  3. Occurrence 3: `... F U S G ...`
     * Preceding char: **U** (Vowel)
     * Following char: **G** (Consonant)
     * **Match 2: `U S G`** $\checkmark$
  4. Occurrence 4: `... I O S O ...`
     * Preceding char: **O** (Vowel)
     * Following char: **O** (Vowel, not a consonant)
     * Does not match $\times$
  5. Occurrence 5: `... R T S B ...`
     * Preceding char: **T** (Consonant)
     * Does not match $\times$
* Total valid occurrences = **2**.
* Matches Option **(B) 2** with 100% precision.

---

### Question 4 [Source: `photo_1904@28-10-2024_22-49-56.jpg`]
**Question:** In a certain artificial code language:
* 'chair is wooden' is coded as 'kip pap dip'
* 'computer is good' is coded as 'pap sap map'
* 'red velvet cake' is coded as 'rip dip sip' *(or variant with 'wooden' coded as 'dip')*

What is the code for **'chair'**?

**Answer Options:**
* **(A)** pap
* **(B)** dip
* **(C)** kip
* **(D)** sap

**Correct Answer:** **(C) kip**  
**Intersection Decoding Matrix:**
* Comparing 'chair is wooden' (`kip pap dip`) and 'computer is good' (`pap sap map`):
  * Common word: 'is'
  * Common code: `pap` $\implies \mathbf{is = pap}$.
* Comparing with the third sentence containing 'wooden':
  * Common code: `dip` $\implies \mathbf{wooden = dip}$.
* Remaining word in the first sentence is 'chair', and remaining code is `kip`:
  $$\mathbf{chair = kip}$$
* Matches Option **(C) kip** with 100% precision.
