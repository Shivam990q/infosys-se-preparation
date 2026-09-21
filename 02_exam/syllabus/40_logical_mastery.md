# 40_logical_mastery.md: Complete Reasoning Ability & Analytical Thinking Master Compendium

---

## 1. Executive Section Blueprint & Time Management

| Parameter | Reasoning Ability Metric |
| :--- | :--- |
| **Number of Questions** | **15 Questions** |
| **Sectional Time Limit** | **25 Minutes** |
| **Average Time per Question** | **1.67 Minutes (100 Seconds)** |
| **Cutoff Benchmark** | **70% (11 out of 15 correct)** |
| **Primary Elimination Vector** | Complex arrangements with multiple negative constraints, tricky Syllogisms with "Only a few", and time-draining 3-statement Data Sufficiency. |

---

## 2. Topic-by-Topic Theoretical Foundations & Solution Frameworks

### Module 2.1: Deductive Logic & Syllogisms (The 100% Guaranteed Area)

#### 1. Standard Venn Categorization & Conversion Rules
* **Universal Positive (A) - "All A are B":**
  * Circle $A$ is completely inside Circle $B$.
  * Valid Deductions: "Some A are B", "Some B are A".
* **Universal Negative (E) - "No A is B":**
  * Circle $A$ and Circle $B$ have zero overlap ($A \cap B = \emptyset$).
  * Valid Deductions: "No B is A", "Some A are not B", "Some B are not A".
* **Particular Positive (I) - "Some A are B":**
  * Circles $A$ and $B$ have an overlapping intersection.
  * Valid Deductions: "Some B are A".
* **Particular Negative (O) - "Some A are not B":**
  * There exists at least one element in $A$ that is strictly outside $B$.
  * *Trap:* This does NOT automatically mean "Some A are B".

#### 2. Advanced Modern Syllogism Archetypes (Infosys Favorites)
* **"Only a few A are B":**
  * Mathematically equivalent to **TWO simultaneous statements:**
    1. $\text{Some } A \text{ are } B$ (True)
    2. $\text{Some } A \text{ are NOT } B$ (True)
  * *Critical Deduction:* All $A$ being $B$ is an **IMPOSSIBILITY**. However, All $B$ being $A$ is a **POSSIBILITY**.
* **"Only A is B":**
  * Mathematically equivalent to:
    $$\text{All } B \text{ are } A$$
  * *Crucial Constraint:* $B$ can **NEVER** intersect or touch any third entity $C$ other than $A$.
* **Possibility Cases ("Can be / Is a possibility"):**
  * A conclusion is considered a **Valid Possibility** if there exists at least *one* Venn diagram configuration where the conclusion is true, provided it does NOT violate any given premises.
* **Complementary Pairs (Either I or II Follows):**
  Three conditions must hold simultaneously:
  1. Both individual conclusions must be independently false/doubtful.
  2. The subject and predicate of both conclusions must be identical.
  3. The pair must be one of:
     * **"Some" + "No"**
     * **"All" + "Some not"**

---

### Module 2.2: Data Sufficiency (Zero-Calculation Decision Tree)
Infosys tests logical evaluation, NOT arithmetic execution. **Do NOT calculate final numbers.** Stop as soon as uniqueness is established.

#### 1. Standard 5-Option Code Matrix
```
[Statement 1 Alone]          [Statement 2 Alone]          [Verdict Code]
    Sufficient                   Not Sufficient             -> Option A (1 alone is sufficient)
    Not Sufficient               Sufficient                 -> Option B (2 alone is sufficient)
    Not Sufficient               Not Sufficient
          └──────── Combined Together ────────┘
                          │
            ┌─────────────┴─────────────┐
            ▼                           ▼
        Sufficient                Not Sufficient
    -> Option C (Both needed)   -> Option D (Neither sufficient)
    
[Statement 1 Alone]          [Statement 2 Alone]
    Sufficient                   Sufficient                 -> Option E (Either 1 alone OR 2 alone)
```

#### 2. Gold Standard Elimination Rules:
1. **The Unique Answer Test:** A statement is sufficient **only if it produces one single unique answer**. If a quadratic yields two positive integers for a person's age ($x = 12 \text{ or } 24$), that statement is **NOT SUFFICIENT**.
2. **Never Carry Over Data:** When testing Statement 2, completely erase and forget any information learned from Statement 1. Only combine them if both fail independently.

---

### Module 2.3: Analytical Seating Arrangements (Formulas & Grid Setup)

#### 1. Linear Arrangements (Single & Dual Row)
* **Facing North:** Your Right = Person's Right; Your Left = Person's Left.
* **Facing South:** Your Right = Person's Left; Your Left = Person's Right.
* **Dual Row Parallel:**
  * Row 1 faces South; Row 2 faces North.
  * Persons facing each other are opposite: Person at Position $i$ in Row 1 faces Person at Position $i$ in Row 2.

#### 2. Circular Arrangements
* **All Facing Center:**
  * Moving Clockwise = Moving to the **LEFT**.
  * Moving Anti-Clockwise = Moving to the **RIGHT**.
* **All Facing Outwards (Away from Center):**
  * Moving Clockwise = Moving to the **RIGHT**.
  * Moving Anti-Clockwise = Moving to the **LEFT**.
* **$N$-Person Diametrically Opposite Rule:**
  * In a circle with an **even number** of people ($N$), the person exactly opposite to position $k$ is:
    $$\text{Opposite} = \left( k + \frac{N}{2} \right) \pmod N$$
  * *If $N$ is odd, no two persons are strictly diametrically opposite.*

#### 3. Square & Rectangular Arrangements
* **Infosys Standard Constraint:** 4 people sit at the 4 corners, and 4 people sit in the middle of the 4 sides.
* **Typical Direction Rule:**
  * Persons at corners face **Inward (Center)**.
  * Persons in middle of sides face **Outward**.

#### 4. Matrix & Multi-Attribute Scheduling Puzzles
* **Framework:** Construct a 2D table where fixed invariants (e.g., Days of the week Monday–Sunday, or Floor numbers 1–8) form the primary column.
* **Rule:** Never start with uncertain variables. Pin down the absolute anchor point (e.g., "P lives on Floor 5" or "Chemistry is scheduled on Wednesday").

---

### Module 2.4: Blood Relations (Generational Tree Blueprint)

#### 1. Standard Notation Symbols
* **Male:** $\Box$ (Square) or $[+]$
* **Female:** $\bigcirc$ (Circle) or $[-]$
* **Married Couple:** $\Longleftrightarrow$ (Double horizontal line)
* **Siblings:** $\text{---}$ (Single horizontal line)
* **Generational Descent:** $\mid$ (Vertical downward line)

#### 2. Generational Tier Structure
* **Tier $+2$ (Grandparents):** Paternal Grandfather/Grandmother, Maternal Grandfather/Grandmother.
* **Tier $+1$ (Parents & In-Laws):** Father, Mother, Uncle, Aunt, Father-in-law, Mother-in-law.
* **Tier $0$ (Self, Siblings & Spouse):** Self, Brother, Sister, Husband, Wife, Brother-in-law, Sister-in-law, Cousin.
* **Tier $-1$ (Children):** Son, Daughter, Nephew, Niece, Son-in-law, Daughter-in-law.
* **Tier $-2$ (Grandchildren):** Grandson, Granddaughter.

#### 3. Coded Blood Relations Strategy:
* Given expressions like $P + Q \times R - S$:
  1. Determine gender of target individual first (eliminate invalid genders immediately).
  2. Parse from Right to Left to track parental/sibling chains without drawing full diagrams.

---

### Module 2.5: Direction & Distance (Angular Turns & Shadow Physics)

#### 1. The 8-Point Compass System
```
               North (N) - 0° / 360°
       NW (315°)        NE (45°)
             \          /
 West (270°) ───┼─── East (90°)
             /          \
       SW (225°)        SE (135°)
               South (S) - 180°
```
* **Net Direction Formula for Angular Turns:**
  $$\text{Net Angle} = \sum (\text{Clockwise Turns}) - \sum (\text{Counter-Clockwise Turns})$$
  *If positive, turn Clockwise by that net degree; if negative, turn Counter-Clockwise.*

#### 2. Shortest Distance (Displacement):
$$\text{Shortest Distance } (d) = \sqrt{(\Delta x)^2 + (\Delta y)^2}$$
Where $\Delta x = \text{East} - \text{West}$, $\Delta y = \text{North} - \text{South}$.

#### 3. Shadow Physics (Time of Day Invariants):
* **At Sunrise (Sun is in East):**
  * All shadows point strictly toward the **WEST**.
  * If a person faces North, their shadow is to their **LEFT**.
  * If a person faces South, their shadow is to their **RIGHT**.
* **At Sunset (Sun is in West):**
  * All shadows point strictly toward the **EAST**.
  * If a person faces North, their shadow is to their **RIGHT**.
  * If a person faces South, their shadow is to their **LEFT**.
* **At 12:00 Noon:**
  * Sun is directly overhead; **NO SHADOW** is cast horizontally.

---

### Module 2.6: Clocks & Calendar Math

#### 1. Clock Angle Formula
$$\theta = \left| 30H - \frac{11}{2}M \right|$$
Where $H$ = hour (1 to 12), $M$ = minutes (0 to 59).
* *Reflex Angle:* If $\theta > 180^\circ$, Reflex Angle $= 360^\circ - \theta$.
* **Coincide ($0^\circ$ angle):** Hands overlap 11 times in 12 hours (22 times in 24 hours).
* **Opposite ($180^\circ$ angle):** Hands form a straight line 11 times in 12 hours (22 times in 24 hours).
* **Right Angle ($90^\circ$ angle):** Hands are perpendicular 22 times in 12 hours (44 times in 24 hours).

#### 2. Calendar Odd Days Mechanics
* **Ordinary Year (365 days):** $52 \text{ weeks} + 1 \text{ day} \implies \mathbf{1 \text{ Odd Day}}$.
* **Leap Year (366 days):** $52 \text{ weeks} + 2 \text{ days} \implies \mathbf{2 \text{ Odd Days}}$.
* **Century Odd Days Pattern:**
  * 100 Years $= 5 \text{ Odd Days}$
  * 200 Years $= 3 \text{ Odd Days}$
  * 300 Years $= 1 \text{ Odd Day}$
  * 400 Years $= 0 \text{ Odd Days}$ *(Leap Century)*
* **Day-to-Odd-Day Mapping:**
  $0 = \text{Sunday},\; 1 = \text{Monday},\; 2 = \text{Tuesday},\; 3 = \text{Wednesday},\; 4 = \text{Thursday},\; 5 = \text{Friday},\; 6 = \text{Saturday}$.

---

## 3. Real Infosys Exam Logical Questions (Forensic Step-by-Step Solutions)

### Question 1: Circular Seating Arrangement (Mixed Facing)
**Problem:**
Eight friends A, B, C, D, E, F, G, and H are sitting around a circular table. Four of them face the center, and four face outward.
1. A sits third to the right of B, who faces the center.
2. D sits third to the left of A.
3. Neither D nor A is an immediate neighbor of C.
4. E sits second to the right of C, who faces outward.
5. F sits third to the right of E.
6. H sits second to the left of G, who faces the center.
7. Immediate neighbors of D face the same direction.
Who sits second to the right of H?

**Forensic Solution:**
1. **Anchor Point:** Place B at bottom (Position 1), facing **INWARD (Center)**.
2. $A$ is third to the right of $B$: Since $B$ faces center, right is anti-clockwise.
   Positions: $B(1) \rightarrow 2 \rightarrow 3 \rightarrow A(4)$.
   So $A$ is at Position 4.
3. $D$ sits third to the left of $A$:
   * If $A$ faces inward: third to left (clockwise) of Position 4 is Position 1 ($B$). But Position 1 is already $B$. Contradiction!
   * Therefore, $A$ MUST face **OUTWARD**.
   * With $A$ facing outward, left is anti-clockwise: $4 \rightarrow 5 \rightarrow 6 \rightarrow 7$. So $D$ is at Position 7.
4. $C$ faces **OUTWARD**, and $E$ sits second to the right of $C$:
   $C$ cannot be adjacent to $A(4)$ or $D(7) \implies C$ cannot be at 3, 5, 6, 8.
   Available positions for $C$: Position 2.
   With $C(2)$ facing outward, right is clockwise: $2 \rightarrow 1 \rightarrow 8$. So $E$ is at Position 8.
5. $F$ sits third to the right of $E$:
   Positions remaining: 3, 5, 6.
   * If $E$ faces inward, third right is Position 3 ($F$).
   * So $F$ is at Position 3, and $E$ faces **INWARD**.
6. $H$ sits second to the left of $G$, and $G$ faces **INWARD**:
   Remaining spots: 5 and 6.
   Place $G$ at Position 5 (facing center). Second to left of $G(5)$ is Position 6 ($H$).
   So $G$ is at Position 5, $H$ is at Position 6.
7. To find who sits second to the right of $H$:
   Neighbors of $D(7)$ are $H(6)$ and $E(8)$.
   Condition: Immediate neighbors of $D$ face the same direction. Since $E$ faces inward, $H$ MUST face **INWARD**.
   Since $H(6)$ faces center (inward), right is anti-clockwise: $6 \rightarrow 5 \rightarrow 4$.
   Position 4 is occupied by **A**.
*Correct Answer:* **A**

---

### Question 2: Advanced Syllogism ("Only a few")
**Premises:**
1. Only a few Laptops are Computers.
2. All Computers are Mobiles.
3. No Mobile is a Tablet.

**Conclusions:**
1. Some Laptops are not Computers.
2. All Mobiles being Laptops is a possibility.
3. No Computer is a Tablet.

**Forensic Evaluation:**
1. **Premise 1:** "Only a few Laptops are Computers" implies:
   * $\text{Some Laptops are Computers}$ (True)
   * $\text{Some Laptops are NOT Computers}$ (True)
   * Thus, **Conclusion 1 ("Some Laptops are not Computers") is DIRECTLY TRUE.**
2. **Premise 2 & 3:** $\text{All Computers } \subset \text{Mobiles}$, and $\text{Mobiles } \cap \text{Tablets} = \emptyset$.
   * Since the entire circle of Mobiles cannot touch Tablets, Computers (which are completely inside Mobiles) can never touch Tablets.
   * Thus, **Conclusion 3 ("No Computer is a Tablet") is 100% DEFINITELY TRUE.**
3. **Conclusion 2:** "All Mobiles being Laptops is a possibility."
   * Can Mobiles be completely contained inside Laptops?
   * The restriction is only that Laptops cannot be completely inside Computers. Mobiles can easily expand and sit entirely inside the larger circle of Laptops without violating any premises!
   * Thus, **Conclusion 2 is a VALID POSSIBILITY.**
*Verdict:* **All Conclusions I, II, and III follow.**
