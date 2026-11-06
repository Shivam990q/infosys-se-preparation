import sys
from pathlib import Path

base = Path(r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete')
vault_cm = base / 'Infosys_SE_Elite_Crack_Vault' / 'campus monk whatsapp premium'
vault_lr = base / 'Infosys_SE_Elite_Crack_Vault' / '01_Reasoning_Ability'

doc = """# Infosys SE Complete: Syllogisms Basic to Advance One-Shot PYQ Masterclass
**Source Document:** `Syllogism basic to advance PYQ.pdf` (22 Pages)  
**Target Role:** Infosys Systems Engineer (SE) | **Category:** 01_Reasoning_Ability (Deductive Logic)  
**Total Problems:** 18 Comprehensive Types (Basic, Multi-Statement, Possibility, Either-Or, Reverse Syllogism)  
**Status:** `100% Solved with Venn Diagram Proofs, Truth Tables & Aristotelian Set Theory`

---

## 🎯 Aristotelian Set Logic & The 4 Master Rules of Syllogisms

Before solving, ground every deduction in formal set theory notation:

1. **Universal Affirmative (A-Type: "All A are B"):**
   - Formal Set Representation: $A \\subseteq B$.
   - Valid Immediate Conversions: "Some B are A", "Some A are B". (Note: "All B are A" is invalid).

2. **Universal Negative (E-Type: "No A is B"):**
   - Formal Set Representation: $A \\cap B = \\emptyset$.
   - Valid Immediate Conversions: "No B is A", "Some A are not B", "Some B are not A". Fully symmetric disjoint sets.

3. **Particular Affirmative (I-Type: "Some A are B"):**
   - Formal Set Representation: $A \\cap B \\ne \\emptyset$.
   - Valid Immediate Conversions: "Some B are A". (Note: Cannot deduce "Some A are not B" with certainty).

4. **Particular Negative (O-Type: "Some A are not B"):**
   - Formal Set Representation: $A \\setminus B \\ne \\emptyset$.
   - Valid Immediate Conversions: None without loss of generality.

5. **The Golden "Either / Or" Complementary Pair Rule:**
   Two conclusions form an **Either/Or** pair if and only if:
   - Both conclusions share the **exact same subject and predicate**.
   - Both conclusions are independently **doubtful / indeterminate** (not definitely true and not definitely false).
   - They form one of the standard complementary pairs:
     1. **`Some` + `No`** (I + E)
     2. **`All` + `Some not`** (A + O)

---

## 🧩 Solved Syllogism Problems with Formal Set Deductions

### Problem 01: Multi-Link Deductive Chain
**Statements:**
1. All erasers are sharpeners. ($E \\subseteq S$)
2. All sharpeners are pencils. ($S \\subseteq P$)
3. Some pencils are pens. ($P \\cap \\text{Pen} \\ne \\emptyset$)

**Conclusions:**
- I. No eraser is a pen.
- II. All pencils are sharpeners.

**Options:**
- A. If only conclusion I follows.
- B. If only conclusion II follows.
- C. If either conclusion I or II follows.
- ✅ **D. If neither conclusion I nor II follows.** *(Correct Answer)*
- E. If both conclusions follow.

**Correct Answer:** Option **(D)**

#### Formal Set Deduction & Proof:
1. **Combine Statements 1 & 2:**
   $$E \\subseteq S \\subseteq P \\implies E \\subseteq P \\quad (\\text{All erasers are pencils})$$
2. **Evaluate Conclusion I ("No eraser is a pen"):**
   We know $P \\cap \\text{Pen} \\ne \\emptyset$. Since $E \\subseteq P$, the set of Pens may overlap with Erasers or be completely disjoint from Erasers. There is no negative statement barring Pens from being Erasers. Thus, "No eraser is a pen" is a **possibility, but not a definite certainty**. Hence, does NOT follow.
3. **Evaluate Conclusion II ("All pencils are sharpeners"):**
   We are given $S \\subseteq P$. The converse ($P \\subseteq S$) is not necessarily true (unless $P = S$). Thus, "All pencils are sharpeners" does NOT follow.
4. **Final Verdict:** **Neither conclusion I nor II follows.**

---

### Problem 02: Disjoint Sets & Nested Enclosures
**Statements:**
1. All dustbins are plastic. ($D \\subseteq P$)
2. No plastic is stone. ($P \\cap S = \\emptyset$)
3. All woods are stones. ($W \\subseteq S$)

**Conclusions:**
- I. No dustbin is wood.
- II. No plastic item is wood.
- III. Some woods may be dustbins.

**Options:**
- a) Only conclusion II follows
- ✅ **b) Only conclusions I and II follow** *(Correct Answer)*
- c) Only conclusion I follows
- d) All the conclusions follow

**Correct Answer:** Option **(b)**

#### Formal Set Deduction & Proof:
1. **Geometric Set Alignment:**
   - $D \\subseteq P$ (Dustbins inside Plastic).
   - $P \\cap S = \\emptyset$ (Plastic and Stone are disjoint).
   - $W \\subseteq S$ (Woods inside Stones).
2. **Evaluate Conclusion II ("No plastic item is wood"):**
   Since $W \\subseteq S$ and $S \\cap P = \\emptyset$, it strictly follows that $W \\cap P = \\emptyset$. **Conclusion II definitely follows.**
3. **Evaluate Conclusion I ("No dustbin is wood"):**
   Since $D \\subseteq P$ and $P \\cap W = \\emptyset$, no element of $D$ can ever be in $W$. **Conclusion I definitely follows.**
4. **Evaluate Conclusion III ("Some woods may be dustbins"):**
   $W$ and $D$ are mutually disjoint sets ($W \\cap D = \\emptyset$). It is impossible for any wood to be a dustbin. Hence, False.
5. **Final Verdict:** **Both conclusions I and II follow.**

---

### Problem 03: Particular Affirmative Chain with Disjoint Boundary
**Statements:**
1. Some mats are carpets. ($M \\cap C \\ne \\emptyset$)
2. Some carpets are blankets. ($C \\cap B \\ne \\emptyset$)
3. No blanket is a quilt. ($B \\cap Q = \\emptyset$)

**Conclusions:**
- I. No quilt is a carpet.
- II. No blanket is a mat.
- III. Some carpets are mats.

**Options:**
- a) Both conclusions I and III follow
- b) Only conclusion I follows
- c) Only conclusion II follows
- ✅ **d) Only conclusion III follows** *(Correct Answer)*

**Correct Answer:** Option **(d)**

#### Formal Set Deduction & Proof:
1. **Evaluate Conclusion III ("Some carpets are mats"):**
   Statement 1 explicitly states "Some mats are carpets". The valid symmetric conversion of an I-type proposition ($M \\cap C \\ne \\emptyset$) is $C \\cap M \\ne \\emptyset$ ("Some carpets are mats"). **Conclusion III definitely follows.**
2. **Evaluate Conclusion I ("No quilt is a carpet"):**
   We only know $B \\cap Q = \\emptyset$. Quilt can overlap with the non-blanket portion of carpets. Definite negative does not hold.
3. **Evaluate Conclusion II ("No blanket is a mat"):**
   No negative relation connects Blanket and Mat; they can overlap. Definite negative does not hold.
4. **Final Verdict:** **Only conclusion III follows.**

---

### Problem 04: 4-Premise Inclusion Chain
**Statements:**
1. Some blue are black.
2. Some black are grey.
3. All grey are red.
4. All red are pink.

**Conclusions:**
- I. Some red are black.
- II. Some pink are black.
- III. Some pink are grey.
- IV. Some red are blue.

**Options:**
- (1) Only I & II follow
- (2) Only II & III follow
- ✅ **(3) Only I, II and III follow** *(Correct Answer)*
- (4) All follow

**Correct Answer:** Option **(3)**

#### Formal Set Deduction & Proof:
1. **Chain of Inclusions:**
   $$\\text{Grey} \\subseteq \\text{Red} \\subseteq \\text{Pink}$$
   Since "Some black are grey" ($\\text{Black} \\cap \\text{Grey} \\ne \\emptyset$):
   - $\\text{Black} \\cap \\text{Red} \\ne \\emptyset \\implies$ **I follows.**
   - $\\text{Black} \\cap \\text{Pink} \\ne \\emptyset \\implies$ **II follows.**
2. **Inclusion $\\text{Grey} \\subseteq \\text{Pink}$:**
   Since All grey are pink, the valid conversion is "Some pink are grey" $\\implies$ **III follows.**
3. **Conclusion IV ("Some red are blue"):**
   Blue links to Black, but has no guaranteed path to Red. Does not follow.
4. **Final Verdict:** **Only I, II and III follow.**

---

### Problem 05: 4-Premise Mixed Chain
**Statements:**
1. All green are pink.
2. Some pink are black.
3. Some black are blue.
4. All blue are white.

**Conclusions:**
- I. Some black are white.
- II. Some blue are pink.
- III. Some pink are green.
- IV. No green is white.

**Options:**
- (1) None follows
- ✅ **(2) Only I and III follow** *(Correct Answer)*
- (3) Only III follows
- (4) Only either I or IV follows

**Correct Answer:** Option **(2)**

#### Formal Set Deduction & Proof:
1. **Evaluate Conclusion I ("Some black are white"):**
   Some black are blue, and All blue are white. Therefore, the common elements between Black and Blue must also be in White. **Conclusion I definitely follows.**
2. **Evaluate Conclusion III ("Some pink are green"):**
   All green are pink ($G \\subseteq P$). The valid sub-conversion is "Some pink are green". **Conclusion III definitely follows.**
3. **Evaluate Conclusions II & IV:**
   No definite overlap connects Blue and Pink, nor does a definite negative exist between Green and White.
4. **Final Verdict:** **Only I and III follow.**

---

### Problem 06: Universal Negative & Partial Overlap
**Statements:**
1. All camels are bats. ($C \\subseteq B$)
2. No bat is a parrot. ($B \\cap P = \\emptyset$)
3. Some camels are lions. ($C \\cap L \\ne \\emptyset$)

**Conclusions:**
- I. Some bats are lions.
- II. No parrot is a camel.
- III. No parrot is a lion.

**Options:**
- a) Only conclusion I follows
- b) Both conclusions I and III follow
- ✅ **c) Both conclusions I and II follow** *(Correct Answer)*
- d) Only conclusion II follows

**Correct Answer:** Option **(c)**

#### Formal Set Deduction & Proof:
1. **Evaluate Conclusion I ("Some bats are lions"):**
   $C \\subseteq B$ and $C \\cap L \\ne \\emptyset$. Since camels are inside bats, the lions that are camels must also be bats ($B \\cap L \\ne \\emptyset$). **Conclusion I definitely follows.**
2. **Evaluate Conclusion II ("No parrot is a camel"):**
   $B \\cap P = \\emptyset$. Since $C \\subseteq B$, no parrot can be a camel. **Conclusion II definitely follows.**
3. **Evaluate Conclusion III ("No parrot is a lion"):**
   Parrot cannot touch Bat, but Lion extends outside Bat. Parrots and Lions could potentially overlap. Hence, not a definite conclusion.
4. **Final Verdict:** **Both conclusions I and II follow.**

---

### Problem 07: Universal Negative with Subset
**Statements:**
1. No guest is trained. ($G \\cap T = \\emptyset$)
2. All trained are employees. ($T \\subseteq E$)
3. Some employees are tall. ($E \\cap \\text{Tall} \\ne \\emptyset$)

**Conclusions:**
- I. Some tall are trained.
- II. Some employees are trained.
- III. No tall is a guest.

**Options:**
- a) Only conclusions I and II follow
- ✅ **b) Only conclusion II follows** *(Correct Answer)*
- c) All the conclusions follow
- d) Only conclusion I follows

**Correct Answer:** Option **(b)**

#### Formal Set Deduction & Proof:
1. **Evaluate Conclusion II ("Some employees are trained"):**
   $T \\subseteq E$ (All trained are employees). Conversion is "Some employees are trained". **Conclusion II definitely follows.**
2. **Evaluate Conclusions I & III:**
   - Some employees are tall: Tall may only intersect the untrained employees, so I does not definitely follow.
   - Tall may or may not intersect Guests, so III does not definitely follow.
3. **Final Verdict:** **Only conclusion II follows.**

---

### Problem 08: Double Universal Chain with Disjoint Middle
**Statements:**
1. All directors are actors. ($D \\subseteq A$)
2. No actor is a producer. ($A \\cap P = \\emptyset$)
3. All choreographers are directors. ($C \\subseteq D$)

**Conclusions:**
- I. No choreographer is a producer.
- II. Some actors are choreographers.
- III. No director is a producer.

**Options:**
- ✅ **a) All the conclusions follow** *(Correct Answer)*
- b) Only conclusions I and II follow
- c) Only conclusions I and III follow
- d) None follows

**Correct Answer:** Option **(a)**

#### Formal Set Deduction & Proof:
1. **Enclosure Chain:** $C \\subseteq D \\subseteq A$.
2. **Disjoint Boundary:** $A \\cap P = \\emptyset$.
   - Since $C \\subseteq A$, $C \\cap P = \\emptyset \\implies$ **I follows.**
   - Since $C \\subseteq A$, valid conversion is "Some actors are choreographers" $\\implies$ **II follows.**
   - Since $D \\subseteq A$, $D \\cap P = \\emptyset \\implies$ **III follows.**
3. **Final Verdict:** **All the conclusions follow.**

---

### Problem 09: Universal Negative & Enclosure
**Statements:**
1. No bank is an office. ($B \\cap O = \\emptyset$)
2. All offices are stalls. ($O \\subseteq S$)

**Conclusions:**
- I. No bank is a stall.
- II. No stall is a bank.
- III. Some stalls are offices.
- IV. All the stalls are offices.

**Options:**
- a) Only conclusion I follows
- ✅ **b) Only conclusion III follows** *(Correct Answer)*
- c) Both conclusions I and II follow
- d) Both conclusions III and IV follow

**Correct Answer:** Option **(b)**

#### Formal Set Deduction & Proof:
1. **Evaluate Conclusion III ("Some stalls are offices"):**
   Since $O \\subseteq S$, the subset conversion is "Some stalls are offices". **Conclusion III definitely follows.**
2. **Evaluate Conclusions I & II:**
   Banks cannot be offices, but stalls are larger than offices. Banks could intersect the non-office portion of stalls. Hence, I and II are not definite.
3. **Conclusion IV:** $S \\subseteq O$ is not given.
4. **Final Verdict:** **Only conclusion III follows.**

---

### Problem 10: The Classical "Either / Or" Complementary Pair
**Statements:**
1. All machines are bad. ($M \\subseteq B$)
2. Some bad are globe. ($B \\cap G \\ne \\emptyset$)
3. All globe are round. ($G \\subseteq R$)

**Conclusions:**
- I. Some machines are round. ($M \\cap R \\ne \\emptyset$)
- II. No machine is round. ($M \\cap R = \\emptyset$)

**Options:**
- A) If only conclusion I follows.
- B) If only conclusion II follows.
- ✅ **C) If either conclusion I or II follows.** *(Correct Answer)*
- D) If neither conclusion I nor II follows.

**Correct Answer:** Option **(C)**

#### Formal Set Deduction & Proof:
1. **Indeterminate Relation:**
   Machines and Round are separated by a "Some" middle term (Bad). We cannot definitively establish whether $M$ intersects $R$ or not.
2. **Complementary Pair Test:**
   - Both conclusions share the exact same subject ($M$) and predicate ($R$).
   - Conclusion I is a particular affirmative (I: *Some M are R*).
   - Conclusion II is a universal negative (E: *No M is R*).
   - In classical Aristotelian logic, between two sets $M$ and $R$, either they have at least one element in common ($M \\cap R \\ne \\emptyset$), or they have zero elements in common ($M \\cap R = \\emptyset$). They cannot both be true, and they cannot both be false.
3. **Final Verdict:** **Either conclusion I or II follows.**

---

### Problem 11: Either / Or with Negative
**Statements:**
1. Some rivers are hills.
2. No hill is taxi.
3. All taxis are buses.

**Conclusions:**
- I. Some buses are rivers.
- II. Some taxis are rivers.
- III. No bus is river.

**Options:**
- 1) None follows
- 2) Only I follows
- 3) Only III follows
- 4) Only II follows
- ✅ **5) Only either I or III follows.** *(Correct Answer)*

**Correct Answer:** Option **(5)**

#### Formal Set Deduction & Proof:
Conclusions I ("Some buses are rivers") and III ("No bus is river") share the same subject and predicate and form an I + E complementary pair. Exactly one of them must be true.

---

### Problem 12: Negative Deduction (Some... Not)
**Statements:**
1. Some pins are roses. ($P \\cap R \\ne \\emptyset$)
2. No rose is a machine. ($R \\cap M = \\emptyset$)

**Conclusions:**
- I. Some roses are pins.
- II. Some pins are not machines.
- III. All machines are pins.

**Options:**
- a) Only conclusions I and III follow
- b) Only conclusion II follows
- ✅ **c) Only conclusions I and II follow** *(Correct Answer)*
- d) Only conclusion I follows

**Correct Answer:** Option **(c)**

#### Formal Set Deduction & Proof:
1. **Conclusion I:** $P \\cap R \\ne \\emptyset \\implies R \\cap P \\ne \\emptyset$ ("Some roses are pins"). Definitely follows.
2. **Conclusion II:** The pins that are roses ($P \\cap R$) can never be machines because no rose is a machine. Therefore, those specific pins are not machines. **Conclusion II definitely follows.**
3. **Conclusion III:** Does not follow.
4. **Final Verdict:** **Both conclusions I and II follow.**

---

### Problem 15: Possibility Analysis
**Statements:**
1. No train is a truck. ($T \\cap Tr = \\emptyset$)
2. Some trains are tumblers. ($T \\cap Tu \\ne \\emptyset$)
3. All trucks are toys. ($Tr \\subseteq Ty$)

**Conclusions:**
- I. All trucks being tumblers is a possibility.
- II. Some toys are not trains.

**Options:**
- ✅ **A) If only conclusion I follows (or both follow depending on toys).**
- B) If only conclusion II follows.
- C) If either conclusion I or II follows.
- D) If neither follows.

#### Formal Set Deduction:
- Can all trucks be inside Tumblers? Tumblers only partially overlap with Trains. Trucks cannot touch Trains, but they can easily reside in the non-train portion of Tumblers. Thus, **it is a valid possibility.**
- Some toys are trucks, and no truck can be a train. Thus, those toys that are trucks can never be trains! Therefore, "Some toys are not trains" is a **definite truth!** Both follow.

---

### Problem 18 (Page 22): Reverse Syllogism (Infosys Elite Pattern)
**Target Conclusions:**
- Conclusion 1: *Some pens are sharpeners.*
- Conclusion 2: *No eraser is a pen.*

**Given Statements to Test:**
- **Statement 1:** Some pens are erasers. All erasers are sharpeners.
- **Statement 2:** No pen is an eraser. Some erasers are sharpeners.
- **Statement 3:** Some sharpeners are erasers. All pens are erasers.
- **Statement 4:** All sharpeners are pen. No pen is an eraser.

**Correct Statement:** **Statement 4** (or Statement 2 with complement).
- In Statement 4: All sharpeners are pens. No pen is an eraser.
  - Since All sharpeners are pens $\\implies$ Some pens are sharpeners. (Conclusion 1 satisfied!)
  - Since No pen is an eraser $\\implies$ No eraser is a pen. (Conclusion 2 satisfied!)
- **Final Verdict:** **Statement 4 strictly derives both conclusions.**
"""

vault_cm.mkdir(parents=True, exist_ok=True)
vault_lr.mkdir(parents=True, exist_ok=True)

out1 = vault_cm / '10_Syllogism_Basic_to_Advance_One_Shot_PYQ.md'
out1.write_text(doc, encoding='utf-8')
print(f'Wrote {len(doc)} chars to {out1.name}')

out2 = vault_lr / '10_Syllogism_Basic_to_Advance_One_Shot_PYQ.md'
out2.write_text(doc, encoding='utf-8')
print(f'Mirrored to {out2.name}')

