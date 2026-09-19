# Complete Sectional Micro-Syllabus (Forensic Deep Dive)

**Assessment Engine:** Infosys Assessment Platform (`rec-test.infosys.com`)  
**Format:** 54 Questions | 100 Minutes | Adaptive Sectional Timers | Zero Negative Marking  
**Cutoff Rule:** Every section is individually qualifying; failing any single section results in immediate overall disqualification.

---

## 1. Mathematical Ability (10 Qs | 35 Mins | 3.5 Mins/Question)
*Questions are multi-step algebraic word problems. Mental arithmetic alone is insufficient; write clean equations.*

### 1.1 Time, Speed, Distance & Motion
- **Relative Speed Mechanics:**
  - Opposite direction: $S_{\text{rel}} = S_1 + S_2$
  - Same direction: $S_{\text{rel}} = |S_1 - S_2|$
- **Train Crossing Formulations:**
  - Crossing stationary point object (pole, standing man): $\text{Distance} = L_{\text{train}}$, Time = $\frac{L_{\text{train}}}{S_{\text{train}}}$
  - Crossing platform, bridge, or tunnel: $\text{Distance} = L_{\text{train}} + L_{\text{platform}}$
  - Two moving trains crossing: $\text{Time} = \frac{L_1 + L_2}{S_1 \pm S_2}$
- **Average Speed:**
  - Equal distance covered at speeds $x$ and $y$: $\text{Average Speed} = \frac{2xy}{x+y}$
  - Three equal distances at speeds $x, y, z$: $\text{Average Speed} = \frac{3xyz}{xy + yz + zx}$
- **Boats and Streams:**
  - Downstream speed $D = u + v$, Upstream speed $U = u - v$ (where $u$ is speed of boat in still water, $v$ is speed of stream).
  - Still water speed: $u = \frac{D + U}{2}$; Stream speed: $v = \frac{D - U}{2}$
- **Circular Tracks & Races:**
  - First meeting time at starting point: $\text{LCM}\left(\frac{C}{S_1}, \frac{C}{S_2}, \dots\right)$ where $C$ is track circumference.
  - First meeting time anywhere on track: $\frac{C}{S_{\text{rel}}}$
  - Linear races: "A beats B by $x$ meters or $t$ seconds" $\implies$ Speed of B = $\frac{x}{t}$.

### 1.2 Time & Work / Pipes & Cisterns
- **LCM Efficiency Method:** Assign total work units = $\text{LCM}(\text{days of workers})$. Efficiency = $\frac{\text{Total Units}}{\text{Days}}$.
- **Alternate-Day Work:** Calculate work done in full 2-day cycles; solve remainder units carefully to avoid overshooting.
- **Man-Days Equivalence Formula:**
  $$\frac{M_1 \times D_1 \times H_1 \times E_1}{W_1} = \frac{M_2 \times D_2 \times H_2 \times E_2}{W_2}$$
- **Men, Women & Children Equivalence:** Convert all entities into a single standard unit of efficiency (e.g., $2M = 3W = 4C$).
- **Pipes & Cisterns:** Inflow pipes add positive efficiency ($+1/A$); drain/leak pipes subtract efficiency ($-1/B$). Net filling rate = $\frac{1}{A} - \frac{1}{B}$.

### 1.3 Percentages, Profit, Loss & Partnerships
- **Successive Changes:** Net change = $x + y + \frac{xy}{100}\%$ (use negative signs for discounts/depreciation).
- **Marked Price & Discounts:**
  $$\text{SP} = \text{MP} \times \left(1 - \frac{D_1}{100}\right) \times \left(1 - \frac{D_2}{100}\right)$$
  $$\text{Profit \%} = \frac{\text{SP} - \text{CP}}{\text{CP}} \times 100$$
- **Dishonest Merchant & Fraudulent Balances:**
  $$\text{Profit \%} = \frac{\text{Error (True Weight} - \text{False Weight)}}{\text{False Weight}} \times 100$$
- **Partnerships:** Profits divide strictly in ratio of capital invested multiplied by active duration:
  $$\text{Profit}_A : \text{Profit}_B = (C_A \times T_A) : (C_B \times T_B)$$

### 1.4 Simple & Compound Interest
- **Simple Interest:** $SI = \frac{P \times R \times T}{100}$
- **Compound Interest:** $\text{Amount} = P \left(1 + \frac{R}{100 \times k}\right)^{k \times T}$ where $k = 1$ (annual), $k = 2$ (half-yearly), $k = 4$ (quarterly).
- **Difference between CI and SI (Crucial Infosys Shortcuts):**
  - For 2 Years: $D_2 = P \left(\frac{R}{100}\right)^2$
  - For 3 Years: $D_3 = P \left(\frac{R}{100}\right)^2 \left(3 + \frac{R}{100}\right)$

### 1.5 Mixtures & Alligation
- **Rule of Alligation:**
  $$\frac{\text{Quantity of Cheaper}}{\text{Quantity of Dearer}} = \frac{\text{Price of Dearer} - \text{Mean Price}}{\text{Mean Price} - \text{Price of Cheaper}} = \frac{d - m}{m - c}$$
- **Repeated Liquid Dilution / Replacement:**
  If a vessel contains $x$ liters of pure liquid and $y$ liters are drawn out and replaced by water $n$ successive times:
  $$\text{Final Pure Liquid Remaining} = x \left(1 - \frac{y}{x}\right)^n$$

### 1.6 Ratio, Proportion, Averages & Ages
- **Ratio Properties:** Duplicate ratio ($a^2:b^2$), Sub-duplicate ($\sqrt{a}:\sqrt{b}$), Triplicate ($a^3:b^3$), Fourth proportional ($a:b = c:x \implies x = \frac{bc}{a}$).
- **Weighted Average:** $A_w = \frac{n_1 A_1 + n_2 A_2 + \dots + n_k A_k}{n_1 + n_2 + \dots + n_k}$
- **Problems on Ages:** Setting up linear simultaneous equations with ratio shifts past/future ($t$ years ago vs $t$ years hence).

### 1.7 Permutations, Combinations & Probability
- **Permutations ($^nP_r = \frac{n!}{(n-r)!}$):** Order matters.
  - Word arrangements with vowels together: Treat vowels as 1 composite block.
  - Words with repeated letters: $\frac{n!}{p! \times q! \times r!}$
  - Gap Method: Arrangements where no two items of a type can be adjacent.
  - Circular arrangements: $(n-1)!$ for distinct objects; $\frac{(n-1)!}{2}$ for necklaces/beads.
- **Combinations ($^nC_r = \frac{n!}{r!(n-r)!}$):** Selection without order.
  - Committee formation with minimum/maximum gender constraints ("at least 2 engineers").
- **Probability ($P(E) = \frac{n(E)}{n(S)}$):**
  - Sum of outcomes on rolling 2 dice: Peak sum is 7 with probability $\frac{6}{36} = \frac{1}{6}$.
  - Sequential drawing without replacement: $P(A \cap B) = P(A) \times P(B|A)$.
  - Complementary probability: $P(\text{at least one}) = 1 - P(\text{none})$.

### 1.8 Number Theory, Divisibility & Cyclicity
- **Units Digit Cyclicity Rules:**
  - $\{0, 1, 5, 6\}$: Cyclicity of 1 (always ends in same digit: $6^k \equiv 6$).
  - $\{4, 9\}$: Cyclicity of 2 ($4^{\text{odd}} \to 4, 4^{\text{even}} \to 6$; $9^{\text{odd}} \to 9, 9^{\text{even}} \to 1$).
  - $\{2, 3, 7, 8\}$: Cyclicity of 4. Divide power by 4; use remainder as new power (if remainder = 0, power is 4).
- **Divisibility Rules:**
  - 3 & 9: Sum of digits divisible by 3 or 9.
  - 4 & 8: Last 2 digits divisible by 4; last 3 digits divisible by 8.
  - 11: Difference between sum of odd-place digits and sum of even-place digits is 0 or multiple of 11.
  - Composite divisors: $72 = 8 \times 9$, $88 = 8 \times 11$, $99 = 9 \times 11$.
- **Number of Factors & Sum of Factors:**
  For prime factorized $N = p_1^a \times p_2^b \times p_3^c$:
  $$\text{Total Factors} = (a+1)(b+1)(c+1)$$
- **LCM & HCF:** $\text{Product of Two Numbers} = \text{LCM} \times \text{HCF}$.
  - Fraction LCM = $\frac{\text{LCM of Numerators}}{\text{HCF of Denominators}}$; Fraction HCF = $\frac{\text{HCF of Numerators}}{\text{LCM of Denominators}}$.

### 1.9 Progressions & Series
- **Arithmetic Progression (AP):** $T_n = a + (n-1)d$, $S_n = \frac{n}{2}[2a + (n-1)d] = \frac{n}{2}[a + l]$
- **Geometric Progression (GP):** $T_n = a r^{n-1}$, $S_n = \frac{a(r^n - 1)}{r - 1}$, Infinite GP ($|r| < 1$): $S_\infty = \frac{a}{1 - r}$

### 1.10 Geometry & Mensuration (2D & 3D)
- **2D Shapes:** Circle (Area $\pi r^2$, Circumference $2\pi r$), Sector Area ($\frac{\theta}{360} \pi r^2$), Triangle (Heron's: $\sqrt{s(s-a)(s-b)(s-c)}$ where $s = \frac{a+b+c}{2}$).
- **3D Solids:**
  - Cylinder: Volume $\pi r^2 h$, Curved Surface Area $2\pi rh$, Total Surface Area $2\pi r(h + r)$.
  - Cone: Slant height $l = \sqrt{r^2 + h^2}$, Volume $\frac{1}{3} \pi r^2 h$, CSA $\pi r l$, TSA $\pi r(l + r)$.
  - Sphere: Volume $\frac{4}{3} \pi r^3$, Surface Area $4\pi r^2$.
  - Hemisphere: Volume $\frac{2}{3} \pi r^3$, CSA $2\pi r^2$, TSA $3\pi r^2$.

### 1.11 Data Interpretation (DI)
- Tabular matrices with missing percentages.
- Combined Bar and Line graphs showing production vs sales across fiscal years.
- Pie Charts: Angular conversion formula ($\text{Value} = \frac{\text{Angle in Degrees}}{360} \times \text{Total}$, where $1\% = 3.6^\circ$).

---

## 2. Reasoning Ability (15 Qs | 25 Mins | 1.67 Mins/Question)
*Evaluates analytical precision, multi-variable logic grids, and spatial deduction.*

### 2.1 Syllogisms (Formal Venn Rules)
- **Standard Categorical Forms:** "All A are B" (A inside B), "Some A are B" (Intersecting circles), "No A is B" (Disjoint circles).
- **Modern Banking/Corporate Syllogism Rules:**
  - *"Only a few A are B":* Means **both** "Some A are B" AND "Some A are NOT B" simultaneously.
  - *"All A can never be B":* Definite conclusion meaning "Some A are NOT B".
  - *"Can be / Is a possibility":* Test if at least one valid Venn diagram configuration satisfies all statements without contradiction.
  - *"Either-Or" Complementary Pairs:* 
    1. Some + No
    2. All + Some Not
    *(Both conclusions must be false independently, share identical subject/predicate).*

### 2.2 Seating Arrangements & Complex Puzzles
- **Linear Arrangements:**
  - 8 persons in a single row with mixed facing directions (some North, some South).
  - Parallel two-row seating: Row 1 facing South, Row 2 facing North with cross-facing alignment.
- **Circular Arrangements:**
  - 8 persons around a circular table: Inward facing (Left = Clockwise, Right = Counter-clockwise) vs Outward facing (Left = Counter-clockwise, Right = Clockwise).
  - Mixed inward/outward circular seating with blood relations or profession attributes.
- **Floor & Box Puzzles:** 7 or 8 floor buildings with vacant floor conditions and lift constraints.

### 2.3 Data Sufficiency
- Evaluate sufficiency of Statements (1) and (2) against a central query:
  - Option A: Statement (1) ALONE is sufficient, but (2) alone is not.
  - Option B: Statement (2) ALONE is sufficient, but (1) alone is not.
  - Option C: BOTH statements TOGETHER are sufficient, but neither alone is sufficient.
  - Option D: EACH statement ALONE is sufficient.
  - Option E: Statements (1) and (2) TOGETHER are NOT sufficient.
- *Golden Rule:* Never compute the exact final answer; only verify if a unique, unambiguous answer is determinable.

### 2.4 Coded Blood Relations
- Decoding relationship strings: E.g., $P + Q$ ($P$ is father of $Q$), $P - Q$ ($P$ is sister of $Q$), $P \times Q$ ($P$ is brother of $Q$), $P \div Q$ ($P$ is mother of $Q$).
- Family tree generation using standard symbols: $\square$ for male, $\bigcirc$ for female, double horizontal line for marriage ($=$), vertical line for parent-child descent.

### 2.5 Direction & Distance
- Cardinal coordinates (N, S, E, W) and sub-cardinals (NE, NW, SE, SW).
- Angular rotations: Clockwise ($+45^\circ, +90^\circ, +135^\circ$) and Counter-clockwise ($-45^\circ, -90^\circ$).
- Shortest displacement calculation using Pythagorean triplets: $(3,4,5), (5,12,13), (7,24,25), (8,15,17), (9,40,41)$.
- Shadow Problems:
  - Morning (Sunrise): Sun in East $\implies$ Shadows fall directly to the **West**.
  - Evening (Sunset): Sun in West $\implies$ Shadows fall directly to the **East**.
  - At 12:00 Noon: The rays are vertical; zero shadow on ground.

### 2.6 Clocks & Calendars
- **Clock Mechanics:**
  - Minute hand speed = $6^\circ/\text{min}$; Hour hand speed = $0.5^\circ/\text{min}$; Relative speed = $5.5^\circ/\text{min} = \frac{11}{2}^\circ/\text{min}$.
  - **Angle between Hands Formula:**
    $$\theta = \left| 30H - \frac{11}{2}M \right|$$
  - Hands coincide ($0^\circ$): 22 times in 24 hours (formula for minutes: $M = \frac{60}{11} H$).
  - Hands opposite ($180^\circ$): 22 times in 24 hours.
  - Right angles ($90^\circ$): 44 times in 24 hours.
  - Faulty clocks: Gaining or losing minutes per day.
- **Calendar Odd Days Method:**
  - Ordinary Year (365 days): 52 weeks + 1 odd day.
  - Leap Year (366 days): 52 weeks + 2 odd days.
  - Century Leap Rule: A century year is a leap year **only if** divisible by 400 (e.g., 2000 is leap; 1900, 2100 are NOT leap).
  - Odd days in centuries: 100 years = 5; 200 years = 3; 300 years = 1; 400 years = 0.
  - Day code: 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday.

### 2.7 Critical Reasoning & Verbal Logic
- **Statement & Assumptions:** Identify unstated implicit presuppositions. An assumption is valid if the author must believe it for the statement to hold true. Reject far-fetched generalizations.
- **Statement & Conclusions:** A conclusion must follow 100% strictly from the provided text without relying on external real-world knowledge.
- **Cause & Effect:** Differentiate between principal causes, direct effects, effects of independent causes, and common causes.
- **Course of Action:** A correct course of action must directly address/solve the problem, be feasible, and not create worse secondary problems.

### 2.8 Coding-Decoding, Series & Inequalities
- Letter shifts ($\pm k$), reverse alphabetical pairing ($A \leftrightarrow Z, B \leftrightarrow Y, \dots, M \leftrightarrow N$), number positional sum.
- Missing and wrong term series: Multi-layer difference, alternating multiplication/addition ($\times 2 + 1, \times 3 + 2$), prime number series.
- Coded Inequalities: Priority hierarchy: $(>, <) > (\ge, \le) > (=)$. If opposite signs ($>$ and $<$) appear between two variables in a path, relation cannot be established.

---

## 3. Verbal Ability (20 Qs | 20 Mins | 1.0 Min/Question)
*Tests reading speed, grammatical precision, and contextual word mastery.*

### 3.1 Reading Comprehension (2 Passages | 4–5 Questions each)
- High-density passages (300–450 words) from economics, corporate management, environmental science, and artificial intelligence.
- **Question Types:**
  - Direct factual and detail-oriented retrieval.
  - Central theme and primary purpose.
  - Author's tone (Objective, Sarcastic, Critical, Laudatory, Skeptical, Didactic).
  - Contextual vocabulary ("In paragraph 2, the word *tangible* most nearly means...").

### 3.2 Sentence Correction & Error Spotting (The 6 Cardinal Rules)
1. **Subject-Verb Agreement:**
   - Singular indefinite pronouns (*each, everyone, someone, neither of, either of, one of*) take **singular verbs**.
   - Intervening phrases (*as well as, along with, together with, in addition to*) do NOT change the subject number.
   - Compound subjects joined by *neither...nor / either...or*: Verb agrees with the **nearest subject**.
2. **Dangling and Misplaced Modifiers:**
   - An introductory participial phrase must be followed immediately by the noun it logically modifies.
   - *Incorrect:* Walking down the street, the Infosys campus came into view.
   - *Correct:* Walking down the street, **I** saw the Infosys campus come into view.
3. **Parallelism:**
   - Items in a list, comparison, or correlative structure (*not only...but also, both...and*) must share identical grammatical form.
   - *Incorrect:* She likes designing systems, to write clean code, and optimization.
   - *Correct:* She likes designing systems, writing clean code, and optimizing performance.
4. **Conditional Tenses (The 4 Types):**
   - Zero: *If + Present, Present* (Scientific truths).
   - Type 1: *If + Simple Present, will + Base Verb* (Probable future).
   - Type 2: *If + Simple Past, would + Base Verb* (Hypothetical present: *If I were you, I would accept*).
   - Type 3: *If + Past Perfect (had + V3), would have + V3* (Unreal past).
5. **Pronoun Case & Agreement:**
   - Subjective vs Objective (*between you and me*, NOT *between you and I*).
   - *Who* (subject performing action) vs *Whom* (object receiving action).
6. **Prepositions & Idiomatic Collocations:**
   - *Abstain/refrain FROM*, *comply WITH*, *adhere TO*, *prohibit FROM*, *conducive TO*, *deprive OF*.

### 3.3 Para Jumbles (Sentence Rearrangement)
- 4 or 5 sentences labeled A, B, C, D to arrange in logical sequence.
- **Solving Framework:**
  1. Identify the independent opening sentence (introduces the central subject without pronouns).
  2. Locate mandatory pairs (Full name followed by acronym, noun followed by pronoun).
  3. Chronological sequencing (historical past preceding current state).
  4. Discourse markers as bridge points (*Furthermore, In contrast, Consequently, However*).

### 3.4 Cloze Test & Vocabulary
- Contextual fill-in-the-blanks with confusing homophones:
  - *Affect* (verb: to influence) vs *Effect* (noun: result).
  - *Stationary* (motionless) vs *Stationery* (writing materials).
  - *Complement* (enhances) vs *Compliment* (praise).
  - *Discreet* (tactful, careful) vs *Discrete* (separate, distinct).
  - *Eminent* (famous, respected) vs *Imminent* (about to happen).

---

## 4. Pseudocode (5 Qs | 10 Mins | 2.0 Mins/Question)
*Full worked examples and variable trace methodology in [07_pseudocode.md](file:///c:/Users/Rose/.gemini/antigravity-ide/brain/c94c898d-a265-48e6-96c4-82b81795f2d9/02_exam/syllabus/07_pseudocode.md).*

### Core Topics & Tracing Rules
- **Bitwise Operations:** Dry-running expressions with `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (Left Shift by $k \implies \times 2^k$), `>>` (Right Shift by $k \implies \lfloor / 2^k \rfloor$).
- **Boolean Short-Circuiting:**
  - In `Expression1 && Expression2`: If `Expression1` evaluates to False, `Expression2` is never executed (any post-increments inside `Expression2` are bypassed!).
  - In `Expression1 || Expression2`: If `Expression1` evaluates to True, `Expression2` is never executed.
- **Recursive Stacks:** Tracing call trees, return conditions, base cases, and stack unwinding.
- **Nested Loops & Boundary Off-by-One Traps:** Tracking loop step sizes ($i += 2, i *= 3$), 0-indexed vs 1-indexed boundaries, and integer division truncation (`7 / 2 = 3`).
- **Pre-increment (`++x`) vs Post-increment (`x++`):** Order of evaluation within compound mathematical statements.

---

## 5. Puzzle Solving (4 Qs | 10 Mins | 2.5 Mins/Puzzle)
*Detailed archetypes and solutions in [08_puzzles.md](file:///c:/Users/Rose/.gemini/antigravity-ide/brain/c94c898d-a265-48e6-96c4-82b81795f2d9/02_exam/syllabus/08_puzzles.md).*

### Core Puzzle Categories
- **Cryptarithmetic (Alpha-numeric Puzzles):**
  - Unique digits $0–9$ assigned to unique alphabet letters.
  - Leading letter of any number can NEVER be 0.
  - In two $N$-digit numbers adding up to an $(N+1)$-digit number, the leftmost carry digit is ALWAYS **1** (e.g., $SEND + MORE = MONEY \implies M = 1$).
- **Balance Scale Logic:** Minimum weighings $k$ to detect 1 counterfeit coin among $N$ coins satisfies $3^k \ge N$ (3-pile division strategy).
- **Asymmetric Burning Ropes / Candles:** Measuring non-standard durations (e.g., 45 minutes using two 60-minute non-uniform ropes by simultaneous multi-end lighting).
- **Number Grid & Pattern Matrices:** Identifying geometric, row-wise, or column-wise mathematical operations ($3 \times 3$ or $4 \times 4$ matrices).
- **Mathematical Operator Insertion:** Inserting $+ - \times \div$ and parentheses into raw numeric strings to equate to a target result.
- **River Crossing & Torch Bridge Optimization:** Minimum time calculation where the two slowest people must cross together to conserve torch burn time.

---

## 6. Drive-Specific Assessment Variants

### 6.1 Automated Communication Assessment (Versant / SVAR)
*Administered on candidate clearance of the aptitude exam. See [33_versant.md](file:///c:/Users/Rose/.gemini/antigravity-ide/brain/c94c898d-a265-48e6-96c4-82b81795f2d9/02_exam/syllabus/33_versant.md).*
- Reading Aloud (8 passages)
- Repeat Sentences (16 items)
- Short Answer Questions (24 items)
- Sentence Builds / Jumbled Chunks (10 items)
- Story Retelling (3 stories, 30s recap each)
- Impromptu Speech (2 topics, 40s prep, 40s speech)

### 6.2 English Writing / Essay Section (Present in Certain Drive Variants)
- **Duration:** 10 Minutes | **Count:** 1 Prompt (Email or Short Essay)
- **Email Writing Structure:** Subject line $\to$ Salutation $\to$ Purpose statement $\to$ Actionable details $\to$ Call to action $\to$ Professional sign-off.
- **Essay Scoring Dimensions:** Grammatical accuracy, vocabulary range, logical paragraph transitions, absence of spelling errors, minimum 150-word adherence.
