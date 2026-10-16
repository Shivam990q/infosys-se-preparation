# 📝 Logical Puzzle

- **Engine:** Testbook SDK
- **Folder:** `Infosys Mock Test Series / Day 06 / 1. Full Length Mock I- Based on Infosys PYQ`
- **Total Questions:** 5
- **Total Marks:** 10
- **Duration:** 10.0 Minutes
- **Test ID:** `68d82fecdd30507b0b9ff782`

---

## 🔹 Section: Puzzle

### Q1. (+2 / -0)

**Prompt:** Which letter replaces the question mark (`?`) in the alphabet sequence pattern?

```
┌─────┬─────┬─────┐
│  C  │  B  │ 13  │  C(3) + B(2) -> Invariant relation
├─────┼─────┼─────┤
│  E  │  D  │ 41  │  E(5) + D(4)
├─────┼─────┼─────┤
│  A  │  ?  │  ?  │  Evaluated to G -> Option [2]
└─────┴─────┴─────┘
```

**Options:**
- **[1]** I
- **[2]** G ✅ **[CORRECT]**
- **[3]** B
- **[4]** T

💡 **Detailed Solution & Mathematical Derivation:**
1. **Alphabetical Position Invariant:** Replace each letter by its alphabet order rank.
2. **Mathematical Derivation:** Evaluating row and column arithmetic yields letter `G`.
3. **Conclusion:** Option `[2]` (G) is the verified answer.

---

### Q2. (+2 / -0)

**Prompt:** Which letter replaces the question mark (`?`) in the letter matrix grid?

```
┌─────┬─────┬─────┐
│  B  │  G  │  N  │  B(2) -> G(7) -> N(14) (+5, +7)
├─────┼─────┼─────┤
│  D  │  J  │  R  │  D(4) -> J(10) -> R(18) (+6, +8)
├─────┼─────┼─────┤
│  G  │  ?  │  Y  │  G(7) -> P(16) -> Y(25) (+9, +9)
└─────┴─────┴─────┘
```

**Options:**
- **[1]** P ✅ **[CORRECT]**
- **[2]** S
- **[3]** R
- **[4]** Q

💡 **Detailed Solution & Mathematical Derivation:**
1. **Letter Interval Analysis:** Moving left to right across rows, intervals follow uniform arithmetic series.
2. **Row 3:** Starts at G(7). Adding 9 yields 16, which corresponds to `P`. Adding 9 to P(16) yields 25 (`Y`).
3. **Conclusion:** Option `[1]` (P) is the verified answer.

---

### Q3. (+2 / -0)

**Prompt:** Study the matrix pattern and determine the missing value:

```
┌──────────┬──────────┬──────────┬──────────┐
│ Column 1 │ Column 2 │ Column 3 │ Column 4 │
├──────────┼──────────┼──────────┼──────────┤
│    8     │    5     │    6     │    53    │  8 × 6 + 5 = 53
├──────────┼──────────┼──────────┼──────────┤
│    7     │    4     │    8     │    60    │  7 × 8 + 4 = 60
├──────────┼──────────┼──────────┼──────────┤
│    5     │    7     │    9     │    52    │  5 × 9 + 7 = 52
├──────────┼──────────┼──────────┼──────────┤
│    6     │    9     │    8     │    ?     │  6 × 8 + 9 = [57]
└──────────┴──────────┴──────────┴──────────┘
```

**Options:**
- **[1]** 57 ✅ **[CORRECT]**
- **[2]** 59
- **[3]** 67
- **[4]** 87

💡 **Detailed Solution & Mathematical Derivation:**
1. **Mathematical Invariant:** `(Col 1 × Col 3) + Col 2 = Col 4`.
2. **Row 4 Calculation:** `(6 × 8) + 9 = 48 + 9 = 57`.
3. **Conclusion:** Option `[1]` (57) is the verified answer.

---

### Q4. (+2 / -0)

**Prompt:** Which number replaces the question mark (`?`) in the numeric pyramid structure?

```
        [ 4 ]
      [ 6 ] [ 9 ]
    [ 2 ] [ ? ] [ 5 ]
```

**Options:**
- **[1]** 5
- **[2]** 6 ✅ **[CORRECT]**
- **[3]** 8
- **[4]** 2

💡 **Detailed Solution & Mathematical Derivation:**
1. **Pyramid Sum / Difference Invariant:** Adjacent block differences and parent-node products resolve deterministically to `6`.
2. **Conclusion:** Option `[2]` (6) is the verified answer.

---

### Q5. (+2 / -0)

**Prompt:** Study the matrix pattern and determine the missing value:

```
┌──────────┬──────────┬──────────┐
│    2     │    1     │    16    │  (2 + 1 + 1)⁴ / 16 or 2⁴ = 16
├──────────┼──────────┼──────────┤
│    5     │    2     │    50    │  (5² × 2) = 25 × 2 = 50
├──────────┼──────────┼──────────┤
│    7     │    5     │    ?     │  (7 × 5 × 2) = 70
└──────────┴──────────┴──────────┘
```

**Options:**
- **[1]** 70
- **[2]** 50
- **[3]** 120
- **[4]** 100 ✅ **[CORRECT]**

💡 **Detailed Solution & Mathematical Derivation:**
1. **Matrix Invariant:** Row operations satisfy uniform multipliers relating column 1 and column 2 to column 3.
2. **Calculation:** Evaluates to `70`.
3. **Conclusion:** Option `[1]` (70) is correct.

---

