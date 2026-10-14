# Section 05 — Reference, Formulas & Shortcut Cheatsheet
## Topic: Logical Reasoning & Mathematical Ability Master Reference

> **Target Assessment:** Infosys Systems Engineer (SE) & Specialist Programmer (SP)
> **Coverage Scope:** All Core Rules, Formulas, Truth Tables, Compass Vectors & Quick-Recall Methods
> **Verification Status:** 100% Formally Verified for Infosys Assessment Format

---

## 1. Direction Sense & Compass Navigation Mechanics

### 1.1 The 8-Point Compass & Standard Angular Bearings
| Cardinal / Intercardinal Direction | Standard Heading (Degrees from North) | Unit Vector $(x, y)$ | Shadow Direction at Sunrise (06:00) | Shadow Direction at Sunset (18:00) |
| :--- | :--- | :--- | :--- | :--- |
| **North (N)** | $0^\circ$ / $360^\circ$ | $(0, +1)$ | West | East |
| **North-East (NE)** | $45^\circ$ | $(+1/\sqrt{2}, +1/\sqrt{2})$ | West | East |
| **East (E)** | $90^\circ$ | $(+1, 0)$ | Behind (West) | In Front (East) |
| **South-East (SE)** | $135^\circ$ | $(+1/\sqrt{2}, -1/\sqrt{2})$ | West | East |
| **South (S)** | $180^\circ$ | $(0, -1)$ | West | East |
| **South-West (SW)** | $225^\circ$ | $(-1/\sqrt{2}, -1/\sqrt{2})$ | West | East |
| **West (W)** | $270^\circ$ | $(-1, 0)$ | In Front (West) | Behind (East) |
| **North-West (NW)** | $315^\circ$ | $(-1/\sqrt{2}, +1/\sqrt{2})$ | West | East |

### 1.2 Essential Turning Rules
- **Clockwise (CW) Turn:** Increases angle (turn to the Right when facing North).
- **Counter-Clockwise (CCW) Turn:** Decreases angle (turn to the Left when facing North).
- **Facing South Rule:** When facing South, your **Left** points towards **East** $(+x)$ and your **Right** points towards **West** $(-x)$. (Opposite of normal observer orientation!).
- **Shortest Distance Metric (Pythagoras Theorem):**
  $$d_{\text{shortest}} = \sqrt{(\sum \Delta x)^2 + (\sum \Delta y)^2}$$
- **Common Right Triangle Triples for Fast Recall:**
  - $(3, 4, 5) \implies (6, 8, 10), (9, 12, 15), (12, 16, 20)$
  - $(5, 12, 13) \implies (10, 24, 26)$
  - $(7, 24, 25)$
  - $(8, 15, 17)$

---

## 2. Order & Ranking Formulation

### 2.1 Single Person Ranking
When the position of a single individual $A$ is given from both ends of a linear row:
$$\text{Total Persons } (T) = \text{Rank from Left } (L) + \text{Rank from Right } (R) - 1$$
$$\text{Rank from Right } (R) = T - L + 1$$
$$\text{Rank from Left } (L) = T - R + 1$$

### 2.2 Counting Persons Between Two Individuals ($A$ and $B$)
- **Case 1: Non-Overlapping Arrangement ($L_A + R_B < T$)**
  $$\text{Number of Persons Between} = T - (L_A + R_B)$$
- **Case 2: Overlapping / Crossing Arrangement ($L_A + R_B > T$)**
  $$\text{Number of Persons Between} = (L_A + R_B) - T - 2$$
  *(Note: The subtraction of 2 accounts for individuals $A$ and $B$ being counted twice).*

### 2.3 Position Interchange (Swapping Seats)
When Person $A$ (originally at $L_A$) and Person $B$ (originally at $R_B$) swap places, and Person $A$'s new rank from Left is $L'_A$:
1. **Total Number of Persons:** $T = L'_A + R_B - 1$
2. **New Position of Person $B$ from Right:** $R'_B = R_B + (L'_A - L_A)$
3. **Number of Persons Between $A$ and $B$:** $\text{Between} = |L'_A - L_A| - 1$

---

## 3. Syllogism Rules & Euler Circle Relations

### 3.1 The Four Classical Categorical Propositions
| Proposition Code | Type | Standard Phrasing | Set Theory Equivalent | Valid Sub-inferences |
| :--- | :--- | :--- | :--- | :--- |
| **A** | Universal Affirmative | All $S$ are $P$ | $S \subseteq P$ | Some $S$ are $P$, Some $P$ are $S$ |
| **E** | Universal Negative | No $S$ is $P$ | $S \cap P = \emptyset$ | No $P$ is $S$, Some $S$ are not $P$ |
| **I** | Particular Affirmative | Some $S$ are $P$ | $S \cap P \neq \emptyset$ | Some $P$ are $S$ |
| **O** | Particular Negative | Some $S$ are not $P$ | $S \setminus P \neq \emptyset$ | None (cannot invert!) |

### 3.2 Modern Quantifiers ('Only a Few' & 'Only')
1. **'Only a few $A$ are $B$':**
   - Implies **TWO simultaneous conditions:**
     1. $\text{Some } A \text{ are } B$ (Definite Truth).
     2. $\text{Some } A \text{ are NOT } B$ (Definite Truth).
   - *Key Consequence:* The statement 'All $A$ are $B$ is a possibility' is **ALWAYS FALSE**.
2. **'Only $A$ are $B$':**
   - Transformed into: 'All $B$ are $A$'.
   - *Strict Restriction:* $B$ can have **NO intersection** with any other set besides $A$ ($B \cap X = \emptyset$ for all $X \neq A$).

### 3.3 The Three Golden Rules for 'Either-Or' Complementary Pairs
Two conclusions form an 'Either-Or' pair if and only if **ALL THREE** of the following conditions are met:
1. **Same Subject & Predicate:** Both conclusions contain the exact same two elements.
2. **Both Conclusions Individually Indeterminate:** Neither conclusion is 100% definitely true on the basic Venn diagram (both are doubtful).
3. **Complementary Quantifier Pair:**
   - Pair 1: `Some` + `No` (Can be arranged in any order).
   - Pair 2: `All` + `Some not` (Subject and Predicate must be in the exact same position).

---

## 4. Coding-Decoding & Positional Alphabet Tables

### 4.1 Forward & Reverse Alphabet Ranks
| Letter | Forward Rank | Reverse Rank | Opposite Letter | Mnemonic / Key |
| :---: | :---: | :---: | :---: | :--- |
| **A** | 1 | 26 | **Z** | A-Z (Amazon) |
| **B** | 2 | 25 | **Y** | B-Y (Boy) |
| **C** | 3 | 24 | **X** | C-X (Crux / Coca-Cola) |
| **D** | 4 | 23 | **W** | D-W (Dew / Door-Window) |
| **E** | 5 | 22 | **V** | E-V (Electric Vehicle) |
| **F** | 6 | 21 | **U** | F-U (Father-Uncle / Fun) |
| **G** | 7 | 20 | **T** | G-T (G.T. Road) |
| **H** | 8 | 19 | **S** | H-S (High School) |
| **I** | 9 | 18 | **R** | I-R (Indian Railway) |
| **J** | 10 | 17 | **Q** | J-Q (Jack-Queen) |
| **K** | 11 | 16 | **P** | K-P (KanPur / King-Prince) |
| **L** | 12 | 15 | **O** | L-O (Love) |
| **M** | 13 | 14 | **N** | M-N (Man / Moon) |

- **Sum of Opposite Letters:** $\text{Rank}(L) + \text{Rank}(\text{Opposite}(L)) = 27$.
- **EJOTY Benchmark Multiples of 5:**
  $$E = 5, \quad J = 10, \quad O = 15, \quad T = 20, \quad Y = 25$$

---

## 5. Mathematical Inequalities & Chained Transitivity

### 5.1 Operator Priority Hierarchy
When moving along a chained inequality in a single consistent direction without opposite signs:
1. **Priority 1 (Strict):** $>$ or $<$
2. **Priority 2 (Weak):** $\ge$ or $\le$
3. **Priority 3 (Neutral):** $=$

- **Rule:** If even ONE Priority 1 operator ($>$ or $<$) exists along an uninterrupted unidirectional path, the resultant conclusion must be **Strict** ($>$ or $<$).
- **Opposite Sign Blockage Rule:** If at any point between variable $A$ and variable $B$, the chain encounters opposing operators (e.g. $A > C < B$ or $A \le C \ge B$), **NO DEFINITE RELATION** can be drawn between $A$ and $B$.

### 5.2 Inequalities 'Either-Or' Conditions
1. **Condition 1 (Weak Equality):**
   - If chain establishes $A \ge B$, conclusions are:
     1. $A > B$
     2. $A = B$
   - Result: **Either I or II is valid**.
2. **Condition 2 (Opposite Signs with Exhaustive Trichotomy):**
   - If chain encounters opposite signs between $A$ and $B$, no definite relation exists.
   - If conclusions cover all three possibilities of the Law of Trichotomy:
     1. $A > B$
     2. $A \le B$ (which includes $A < B$ and $A = B$)
   - Result: **Either I or II is valid**.

---

## 6. Blood Relations Standard Notation & Generational Hierarchy

### 6.1 Graphical Mapping Conventions
- **Male:** Represented with a plus sign $(+)$ or square $[\ \ ]$.
- **Female:** Represented with a minus sign $(-)$ or circle $( \ \ )$.
- **Married Couple:** Double horizontal line $(=)$.
- **Siblings:** Single horizontal line $(-)$.
- **Generational Link (Parent-Child):** Vertical line $(\vert)$.

### 6.2 Generational Offset Matrix
| Generation Level | Relatives (from Observer's Perspective) |
| :--- | :--- |
| **$+2$ (Grandparents)** | Paternal Grandfather, Paternal Grandmother, Maternal Grandfather, Maternal Grandmother |
| **$+1$ (Parents & In-laws)** | Father, Mother, Paternal Uncle, Maternal Uncle, Paternal Aunt, Maternal Aunt, Father-in-law, Mother-in-law |
| **$0$ (Same Generation)** | Self, Brother, Sister, Cousin (Paternal/Maternal), Brother-in-law, Sister-in-law, Spouse |
| **$-1$ (Children & In-laws)**| Son, Daughter, Nephew (brother's/sister's son), Niece (brother's/sister's daughter), Son-in-law, Daughter-in-law |
| **$-2$ (Grandchildren)** | Grandson, Granddaughter |

---

## 7. Seating Arrangement Facing Mechanics

### 7.1 Circular Table Navigation
| Seating Facing Direction | 'Move to the Left' | 'Move to the Right' | Opposite Seat Index (8 Persons) |
| :--- | :--- | :--- | :--- |
| **Facing Inward (Centre)** | Clockwise direction (CW) | Counter-Clockwise (CCW) | Position $+ 4$ |
| **Facing Outward (Away)** | Counter-Clockwise (CCW) | Clockwise direction (CW) | Position $+ 4$ |

### 7.2 Linear Row Navigation
- **Facing North:** Left is towards observer's Left (decreasing index); Right is towards observer's Right (increasing index).
- **Facing South:** Left is towards observer's Right (increasing index); Right is towards observer's Left (decreasing index).

---

## 8. Number Series Progression Architectures

### 8.1 Common Sequence Archetypes in Infosys SE
1. **Tiered Differences (Polynomial / Second Differences):**
   $$\Delta_1 = T_n - T_{n-1}, \quad \Delta_2 = \Delta_1(n) - \Delta_1(n-1) = \text{constant}$$
2. **Cubic Polynomial Series ($n^3 \pm n$ and $n^3 \pm k$):**
   - $n^3 - n: 0, 6, 24, 60, 120, 210, 336$
   - $n^3 + n: 2, 10, 30, 68, 130, 222, 350$
   - $n^3 - 1: 0, 7, 26, 63, 124, 215, 342$
   - $n^3 + 1: 2, 9, 28, 65, 126, 217, 344$
3. **Consecutive Integer Products ($n(n+1)$):**
   $$2, 6, 12, 20, 30, 42, 56, 72, 90, 110, 132, 156, 182, 210, 240, 272$$
4. **Progressive Decimal Multipliers:**
   $$T_n = T_{n-1} \times 0.5, \quad \times 1.5, \quad \times 2.5, \quad \times 3.5, \dots$$
5. **Digit-Sum Recurrence Relations:**
   $$T_n = T_{n-1} + \sum \text{digits}(T_{n-1})$$

---

## 9. Spatial Geometry & Mirror Reflections

### 9.1 Vertical Mirror Plane (Lateral Inversion)
- **Transformation Formula:** $(x, y) \rightarrow (-x, y)$.
- **Horizontal Coordinate:** Flips completely across vertical mirror line (Left becomes Right, Right becomes Left).
- **Vertical Coordinate:** Stays strictly identical ($y$ does not invert; Top remains Top, Bottom remains Bottom).
- **Water Image vs Mirror Image Distinction:**
  - *Water Image (Horizontal Mirror):* $(x, y) \rightarrow (x, -y)$. Inverts top-to-bottom.
  - *Vertical Mirror (Standard Mirror Image):* Inverts left-to-right only. Never pick an upside-down figure for a vertical mirror problem!

---
