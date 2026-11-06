import os, sys, json, re, html

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\09_Mock_Test_Series\01_Topicwise_Mock_Tests'
vault_dir = r'c:\Users\Rose\.gemini\antigravity-ide\brain\c94c898d-a265-48e6-96c4-82b81795f2d9\preparation\Infosys SE Complete\Infosys_SE_Elite_Crack_Vault\09_Mock_Test_Series\01_Topicwise_Mock_Tests'

def clean_txt(t):
    if not t:
        return ""
    t = html.unescape(t)
    t = re.sub(r'<[^>]+>', ' ', t)
    # fix broken words across newlines
    t = re.sub(r'Brother\s*\n\s*in\s*\n?\s*law', 'Brother-in-law', t, flags=re.IGNORECASE)
    t = re.sub(r'Sister\s*\n\s*in\s*\n?\s*law', 'Sister-in-law', t, flags=re.IGNORECASE)
    t = re.sub(r'Mother\s*\n\s*in\s*\n?\s*law', 'Mother-in-law', t, flags=re.IGNORECASE)
    t = re.sub(r'Father\s*\n\s*in\s*\n?\s*law', 'Father-in-law', t, flags=re.IGNORECASE)
    t = re.sub(r'Daughter\s*\n\s*in\s*\n?\s*law', 'Daughter-in-law', t, flags=re.IGNORECASE)
    t = re.sub(r'Son\s*\n\s*in\s*\n?\s*law', 'Son-in-law', t, flags=re.IGNORECASE)
    t = re.sub(r'Can’t\s*\n\s*be\s*\n?\s*determined', 'Cannot be determined', t, flags=re.IGNORECASE)
    t = re.sub(r'Can\'t\s*\n\s*be\s*\n?\s*determined', 'Cannot be determined', t, flags=re.IGNORECASE)
    # clean extra spaces
    t = ' '.join(t.split())
    # replace standard arrows
    t = t.replace('&gt;', '>').replace('&lt;', '<')
    return t

# Specific custom deep solutions for empty/short questions in Blood Relation, Coding Decoding, Direction Sense
blood_relation_custom_sols = {
    4: """1. **Family Structure & Constraints Analysis:**
   - Akku is married to Wiku. Akku has two daughters and no son.
   - Micky is the only sibling of Wiku, and brother-in-law of Akku.
   - Unni and Vicky are sons-in-law of Wiku, meaning they are married to the two daughters of Akku and Wiku.
   - Unni has one son and one daughter. Vicky has two daughters and one son.
   - Xoxo has daughters Tinu and Sanu.
   - Since Unni and Vicky are married to the two daughters, and Xoxo is a female parent in this unit, Xoxo is one of the married daughters of Akku/Wiku.
2. **Deduction:**
   - Tinu and Sanu are daughters of Xoxo.
   - Therefore, Xoxo is the **Mother** of Sanu.
3. **Conclusion:** Option (B) Mother is the verified correct answer.""",

    7: """1. **Step-by-Step Family Tree Construction:**
   - B is the father of Q. B has only two children.
   - Q is the brother of R (so Q is male). Since B has only two children, B's children are Q and R.
   - R is the daughter of P (so R is female, and P is the mother, spouse of B).
   - A is the granddaughter of P.
   - S is the father of A.
2. **Relationship Analysis:**
   - Since A is the granddaughter of P, A must be the child of either Q or R.
   - But S is the father of A, and Q is a male. If A were Q's child, Q would be the father.
   - Therefore, S is the husband of R (the daughter of P).
   - Since R is the sister of Q, S is married to Q's sister.
3. **Conclusion:**
   - S is the **Brother-in-law** of Q. Option (B) is the verified correct answer.""",

    10: """1. **Generational & Relational Breakdown (3 Generations, 2 Couples):**
   - Rahi is the mother of Akasa (Gen 1 to Gen 2).
   - Sarin is the grandfather of Taran (daughter of Pavi) and Pavi is daughter-in-law of Sarin (so Sarin is married to Rahi, Gen 1 couple).
   - Akasa is the son of Sarin and Rahi, and is married to Pavi (Gen 2 couple).
   - Preet is the sister of the only son of Akasa.
   - Namya is the maternal uncle of Gunjan.
2. **Gender Identification:**
   - **Males (4 members):**
     1. Sarin (Grandfather / Husband of Rahi)
     2. Akasa (Son of Sarin / Husband of Pavi)
     3. Only son of Akasa (Brother of Preet)
     4. Namya (Maternal uncle)
   - **Females (4 members):**
     1. Rahi (Grandmother / Wife of Sarin)
     2. Pavi (Daughter-in-law / Wife of Akasa)
     3. Preet (Daughter of Akasa)
     4. Taran (Daughter of Pavi and Akasa)
3. **Conclusion:** Exactly **4 male members** belong to the family. Option (B) is verified.""",

    16: """1. **Relational Analysis:**
   - Vishnu is the uncle of Sanshlesh (daughter of Pritam).
   - Mohini has one daughter and one son. Mohini is female.
   - Anupam is the granddaughter of Ruchika and sister of Bhumika.
   - Ruchika is sister-in-law of Vishnu.
   - Sanshlesh has only one brother.
2. **Family Placement:**
   - Pritam and Vishnu are brothers. Ruchika is married to Pritam.
   - Sanshlesh and her brother are the children of Pritam and Ruchika.
   - The grandchildren are Anupam and Bhumika, who are the children of Sanshlesh's brother.
3. **Deduction:**
   - Since Bhumika is the child of Sanshlesh's sibling (brother), Bhumika is the niece/nephew relative to Sanshlesh.
   - As per the answer key, Bhumika is categorized as **Nephew/Niece** (Option A).""",

    17: """1. **Step-by-Step Genealogic Tree:**
   - D is the mother of J and L.
   - J is the brother of F, and F is the son of K (so D and K are wife and husband; their three children are J, L, and F).
   - Y is the son-in-law of D (married to daughter L).
   - M is the son of Y and L.
   - M is the brother of S.
2. **Determine Relationship of D to M:**
   - M is the son of D's daughter L.
   - Therefore, D is the maternal **Grandmother** of M.
3. **Conclusion:** Option (B) Grandmother is the verified correct answer.""",

    19: """1. **Family Analysis:**
   - Tipu and Rekha are married couple (Tipu is grandfather, Rekha is wife of Tipu).
   - Rekha has only two sons: Mohan and Duggu.
   - Mohan is married to Meena; their only son is Sandy.
   - Krishna is the uncle of Sandy. Since Duggu is the paternal uncle (father Mohan's brother), Krishna is the brother of Meena (mother's brother).
2. **Determine Relationship:**
   - Because Krishna is the brother of Sandy's mother (Meena), Krishna is the **Maternal Uncle** of Sandy.
3. **Conclusion:** Option (A) Maternal Uncle is the verified correct answer.""",

    20: """1. **Relationship Tracing:**
   - H is the brother of M, who is the only daughter of B.
   - H is the brother-in-law of X.
   - T is the only child of J, who is the sister of X.
2. **Determine Relationship of T to X:**
   - J is the sister of X, and T is the child of J.
   - Therefore, T is the sibling's child (nephew if male, niece if female) with respect to X.
   - Since the gender of T is not explicitly fixed by the premise, T could be either Nephew or Niece.
3. **Conclusion:** Option (D) **Either option A or C** is the verified correct answer."""
}

coding_decoding_custom_sols = {
    3: """1. **Positional Value Mapping:**
   - `MOUSE` $\\to$ `KPSTC`:
     - $M (13) - 2 = K (11)$
     - $O (15) + 1 = P (16)$
     - $U (21) - 2 = S (19)$
     - $S (19) + 1 = T (20)$
     - $E (5) - 2 = C (3)$
   - **Identified Pattern:** Alternating shifts of $[-2, +1, -2, +1, -2]$.
2. **Applying Pattern to `LIGHT`:**
   - $L (12) - 2 = 10 \\implies \\mathbf{J}$
   - $I (9) + 1 = 10 \\implies \\mathbf{J}$
   - $G (7) - 2 = 5 \\implies \\mathbf{E}$
   - $H (8) + 1 = 9 \\implies \\mathbf{I}$
   - $T (20) - 2 = 18 \\implies \\mathbf{R}$
3. **Final Result:** `JJEIR`. Matches Option (D).""",

    4: """1. **Reverse-Order Positional Encoding:**
   - Analyze `ENERGY` $\\to$ `257185145`:
     - Read letters from right to left:
       - $Y = 25$
       - $G = 7$
       - $R = 18$
       - $E = 5$
       - $N = 14$
       - $E = 5$
     - Concatenation: $25 \\cdot 7 \\cdot 18 \\cdot 5 \\cdot 14 \\cdot 5 = \\mathbf{257185145}$.
2. **Applying to `HOCKEY` from right to left:**
   - $Y = 25$
   - $E = 5$
   - $K = 11$
   - $C = 3$
   - $O = 15$
   - $H = 8$
3. **Concatenation:** $25 \\cdot 5 \\cdot 11 \\cdot 3 \\cdot 15 \\cdot 8 = \\mathbf{255113158}$. Matches Option (A).""",

    7: """1. **Segmented Cross-Shift Pattern:**
   - `ARCHERY` has 7 letters. Split into: First 3 letters `ARC`, middle letter `H`, last 3 letters `ERY`.
   - First 3 reversed: `C R A`. Shift $+1$:
     - $C + 1 = D$
     - $R + 1 = S$
     - $A + 1 = B$
     - Yields `DSB`.
   - Middle letter: $H - 1 = G$.
   - Last 3 reversed: `Y R E`. Shift $+1$:
     - $Y + 1 = Z$
     - $R + 1 = S$
     - $E + 1 = F$
     - Yields `ZSF`.
   - Combined code: `DSBGZSF`.
2. **Apply to `TERMITE`:**
   - Split: First 3 `TER`, middle `M`, last 3 `ITE`.
   - First 3 reversed: `R E T`. Shift $+1$:
     - $R + 1 = S$
     - $E + 1 = F$
     - $T + 1 = U$
     - Yields `SFU`.
   - Middle letter: $M - 1 = L$.
   - Last 3 reversed: `E T I`. Shift $+1$:
     - $E + 1 = F$
     - $T + 1 = U$
     - $I + 1 = J$
     - Yields `FUJ`.
3. **Final Result:** `SFULFUJ`. Matches Option (C).""",

    9: """1. **Mathematical Letter Combination Formula:**
   - Check `SUN = 26`:
     - Positional values: $S = 19, U = 21, N = 14$.
     - Operation: $(\\text{Letter}_1 + \\text{Letter}_2) - \\text{Letter}_3 = (19 + 21) - 14 = 40 - 14 = 26$.
   - Check `GPL = 11`:
     - Positional values: $G = 7, P = 16, L = 12$.
     - Operation: $(7 + 16) - 12 = 23 - 12 = 11$.
2. **Apply to `SKT`:**
   - Positional values: $S = 19, K = 11, T = 20$.
   - Operation: $(19 + 11) - 20 = 30 - 20 = \\mathbf{10}$.
3. **Final Result:** $10$. Matches Option (A).""",

    10: """1. **Digital Root / Reverse Digit Sum Pattern:**
   - Analyze `JUNE` $\\to$ `5531`:
     - $J = 10 \\implies 1 + 0 = 1$
     - $U = 21 \\implies 2 + 1 = 3$
     - $N = 14 \\implies 1 + 4 = 5$
     - $E = 5 \\implies 5$
     - Read from right to left: $5, 5, 3, 1 \\implies \\mathbf{5531}$.
2. **Apply to `JULY`:**
   - $J = 10 \\implies 1 + 0 = 1$
   - $U = 21 \\implies 2 + 1 = 3$
   - $L = 12 \\implies 1 + 2 = 3$
   - $Y = 25 \\implies 2 + 5 = 7$
   - Read from right to left: $7, 3, 3, 1 \\implies \\mathbf{7331}$.
3. **Final Result:** `7331`. Matches Option (D).""",

    11: """1. **Square of Alphabetical Positions:**
   - Analyze `CAT` $\\to$ `91400`:
     - $C = 3 \\implies 3^2 = 9$
     - $A = 1 \\implies 1^2 = 1$
     - $T = 20 \\implies 20^2 = 400$
     - Concatenation: $9 \\cdot 1 \\cdot 400 = \\mathbf{91400}$.
2. **Apply to `DOG`:**
   - $D = 4 \\implies 4^2 = 16$
   - $O = 15 \\implies 15^2 = 225$
   - $G = 7 \\implies 7^2 = 49$
   - Concatenation: $16 \\cdot 225 \\cdot 49 = \\mathbf{1622549}$.
3. **Final Result:** `1622549`. Matches Option (C).""",

    12: """1. **Positional Permutation Indexing:**
   - For a 4-letter word with indices $(1, 2, 3, 4)$:
     - `BEAN` (1:B, 2:E, 3:A, 4:N) $\\to$ `ABNE` (3:A, 1:B, 4:N, 2:E). Permutation order is $(3, 1, 4, 2)$.
     - `SALE` (1:S, 2:A, 3:L, 4:E) $\\to$ `LSEA` (3:L, 1:S, 4:E, 2:A). Permutation order is $(3, 1, 4, 2)$.
2. **Apply $(3, 1, 4, 2)$ to `NEWS`:**
   - Index 1 = N, Index 2 = E, Index 3 = W, Index 4 = S.
   - Pos 3: W
   - Pos 1: N
   - Pos 4: S
   - Pos 2: E
3. **Final Result:** `WNSE`. Matches Option (A).""",

    14: """1. **Symbolic Direct Mapping:**
   - Given:
     - `GUST` $\\to$ `@ 7 $ 2`
     - `SNIP` $\\to$ `$ 5 9 #`
   - Common letter between `GUST` and `SNIP` is `S`. Common symbol is `$`.
     - $\\implies S = \\$$
   - From `GUST`: Remaining letters $G, U, T$ map to $@, 7, 2$. Here $G = @$.
   - From `SNIP`: Remaining letters $N, I, P$ map to $5, 9, \\#$. Here $N = 5, I = 9$.
2. **Assemble Code for `SING`:**
   - $S = \\$$
   - $I = 9$
   - $N = 5$
   - $G = @$
3. **Final Result:** `\\$95@`. Matches Option (C).""",

    17: """1. **Common Word Elimination:**
   - Sentence 1: `branches have leafs` $\\to$ `673`
   - Sentence 2: `trees have branches` $\\to$ `746`
   - Sentence 3: `mangoes all trees` $\\to$ `491`
2. **Deduction:**
   - Comparing Sentence 1 and Sentence 2: Common words are `branches` and `have`. The common code digits are `6` and `7`.
   - In Sentence 2 (`trees have branches` = `746`), the remaining word is `trees`, and the remaining code digit is `4`.
   - Comparing with Sentence 3 (`mangoes all trees` = `491`), `4` is present for `trees`.
3. **Final Result:** `tree` is coded as **4**. Matches Option (C)."""
}

direction_sense_custom_sols = {
    1: """1. **Coordinate Geometry Formulation:**
   - Let Point B be at origin $(0, 0)$.
   - A is West of B $\\implies A = (-x, 0)$ where $x > 0$.
   - C is located at North in between A and B $\\implies C = (-x/2, y_c)$ where $y_c > 0$.
   - D is exactly to the South of B and in line with B $\\implies D = (0, -y_d)$ where $y_d > 0$.
2. **Direction of D with respect to C:**
   - $\\Delta x = x_D - x_C = 0 - (-x/2) = +x/2 > 0$ (East direction).
   - $\\Delta y = y_D - y_C = -y_d - y_c < 0$ (South direction).
3. **Conclusion:** D is in the **South and East** (South-East) direction from C. Option (B) is verified.""",

    3: """1. **Displacement & Angular Rotation Analysis:**
   - Temple is at $(0, 40)$, Church is at origin $(0, 0)$ (Temple is $40$ m North of Church).
   - Virendra's house is $30$ m to the left (West) of Temple $\\implies$ House is at $(-30, 40)$.
   - Virendra reaches the Church along the Temple-Church road (facing South towards Church).
   - At Church $(0, 0)$, he turns $45^\\circ$ clockwise thrice:
     - 1st turn: $45^\\circ$ CW from South $\\implies$ South-West.
     - 2nd turn: $45^\\circ$ CW from South-West $\\implies$ West.
     - 3rd turn: $45^\\circ$ CW from West $\\implies$ North-West.
2. **Bearing to House:**
   - From Church $(0, 0)$ to House $(-30, 40)$, the vector is $(-30, +40)$, which points into the North-West quadrant.
   - Therefore, after three $45^\\circ$ clockwise turns, he is facing directly **Towards his House**.
3. **Conclusion:** Option (B) Towards the House is verified.""",

    8: """1. **Vector Tracking:**
   - Start at $(0, 0)$.
   - Moves $30$ m South $\\implies (0, -30)$.
   - Turns right (West) and walks $30$ m $\\implies (-30, -30)$.
   - Turns left (South) and walks $20$ m $\\implies (-30, -50)$.
   - Turns left (East) and walks $30$ m $\\implies (-30 + 30, -50) = (0, -50)$.
2. **Distance from Initial Position:**
   - Final coordinate is $(0, -50)$.
   - Distance $= \\sqrt{0^2 + (-50)^2} = 50$ meters due South.
3. **Conclusion:** Distance is **50 m**. Option (B) is verified."""
}

print("Custom solution maps loaded successfully.")

