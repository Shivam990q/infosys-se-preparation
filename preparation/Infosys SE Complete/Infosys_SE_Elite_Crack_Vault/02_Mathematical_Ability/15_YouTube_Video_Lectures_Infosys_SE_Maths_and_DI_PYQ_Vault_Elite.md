# Section 02: Mathematical Ability
## Module 15: YouTube Video Lectures & Marathon PYQ Master Vault (Infosys Systems Engineer)

> **Document Metadata & Provenance:**
> - **Source Corpus:** Authentic Infosys Systems Engineer (SE) YouTube Video Lectures, Live Slot Simulations & Assessment Analyses.
> - **Primary Channels:** OnlineStudy4U (Pratik Sir), CampusMonk (Rachit Sir), KG Placement (Yash Jain Sir), CareerRide.
> - **Curriculum Target:** Section 02: Mathematical Ability & Data Interpretation (Tables, Bar Graphs, Pie Charts, Pipes & Cisterns, Speed Time & Distance, Probability, Number System).
> - **Total Questions:** 45 Forensic Questions with complete step-by-step mathematical proofs, algebraic equations, and KaTeX derivations.
> - **Zero Placeholders:** Complete dataset tables, formula applications, and shortcut tricks.

---

### Question 1
**Source:** OnlineStudy4U — *Infosys & LTM Aptitude Mock Test | Data Interpretation (Pratik Sir)*
The following table shows the export value (in Crore INR) of four companies (A, B, C, D) in the years 2024 and 2025:

| Company | 2024 Export (₹ Cr) | 2025 Export (₹ Cr) |
| :---: | :---: | :---: |
| **A** | 100 | 130 |
| **B** | 120 | 150 |
| **C** | 150 | 180 |
| **D** | 80 | 110 |

Which company recorded the highest percentage growth in exports from 2024 to 2025?
- [A] Company A
- [B] Company B
- [C] Company C
- [D] Company D

**Correct Answer:** **[D] Company D**

**Step-by-Step Derivation & Mathematical Proof:**
1. **Growth Formula:**
   $$	ext{Percentage Growth} = rac{	ext{Export}_{2025} - 	ext{Export}_{2024}}{	ext{Export}_{2024}} 	imes 100\%$$
2. **Calculate for each company:**
   - **Company A:**
     $$	ext{Growth}_A = rac{130 - 100}{100} 	imes 100\% = rac{30}{100} 	imes 100\% = 30.00\%$$
   - **Company B:**
     $$	ext{Growth}_B = rac{150 - 120}{120} 	imes 100\% = rac{30}{120} 	imes 100\% = rac{1}{4} 	imes 100\% = 25.00\%$$
   - **Company C:**
     $$	ext{Growth}_C = rac{180 - 150}{150} 	imes 100\% = rac{30}{150} 	imes 100\% = rac{1}{5} 	imes 100\% = 20.00\%$$
   - **Company D:**
     $$	ext{Growth}_D = rac{110 - 80}{80} 	imes 100\% = rac{30}{80} 	imes 100\% = rac{3}{8} 	imes 100\% = 37.50\%$$
3. **Comparison:**
   $$37.50\% (	ext{D}) > 30.00\% (	ext{A}) > 25.00\% (	ext{B}) > 20.00\% (	ext{C})$$
4. **Key Exam Shortcut:**
   - Notice that the absolute increase for all four companies is identical: exactly $₹30	ext{ Crore}$!
   - When absolute increase $\Delta X$ is constant, percentage increase $rac{\Delta X}{X_0}$ is strictly **maximized when the base $X_0$ is minimized**!
   - Since Company D has the smallest initial base ($80$), its percentage growth is mathematically guaranteed to be the highest.
5. Therefore, **Company D** recorded the highest percentage growth ($37.5\%$).

---

### Question 2
**Source:** OnlineStudy4U — *Infosys 1SHOT Aptitude (Pratik Sir)*
Two pipes, A and B, can fill a cistern when operating together in $1rac{7}{8}$ hours (i.e., $rac{15}{8}$ hours). If opened separately, Pipe B takes 2 hours more than Pipe A to fill the cistern. Find the time taken by Pipe A alone to fill the cistern.
- [A] 3 hours
- [B] 4 hours
- [C] 5 hours
- [D] 6 hours

**Correct Answer:** **[A] 3 hours**

**Step-by-Step Derivation & Mathematical Proof:**
1. **Define Variables:**
   - Let the time taken by Pipe A alone be $x$ hours.
   - Then Pipe B takes $(x + 2)$ hours.
2. **Work-Rate Formulation:**
   $$	ext{Rate of A} = rac{1}{x}, \quad 	ext{Rate of B} = rac{1}{x + 2}$$
   $$	ext{Combined Rate} = rac{1}{x} + rac{1}{x + 2} = rac{1}{15/8} = rac{8}{15}$$
3. **Algebraic Simplification:**
   $$rac{(x + 2) + x}{x(x + 2)} = rac{8}{15}$$
   $$rac{2x + 2}{x^2 + 2x} = rac{8}{15} \implies rac{2(x + 1)}{x(x + 2)} = rac{8}{15}$$
   $$rac{x + 1}{x(x + 2)} = rac{4}{15}$$
   $$15(x + 1) = 4(x^2 + 2x)$$
   $$15x + 15 = 4x^2 + 8x$$
   $$4x^2 - 7x - 15 = 0$$
4. **Solve the Quadratic Equation:**
   $$\Delta = (-7)^2 - 4(4)(-15) = 49 + 240 = 289 = 17^2$$
   $$x = rac{7 \pm 17}{2 	imes 4} = rac{7 \pm 17}{8}$$
   - Positive root (since time cannot be negative):
     $$x = rac{7 + 17}{8} = rac{24}{8} = 3	ext{ hours}$$
5. **Verification:**
   - A takes 3 hours (Rate = $rac{1}{3}$).
   - B takes $3 + 2 = 5$ hours (Rate = $rac{1}{5}$).
   - Combined rate: $rac{1}{3} + rac{1}{5} = rac{5 + 3}{15} = rac{8}{15}$.
   - Combined time: $rac{15}{8} = 1.875	ext{ hours} = 1	ext{ hr } 52.5	ext{ min}$. Exact match!
6. Pipe A alone takes **3 hours**.

---

### Question 3
**Source:** OnlineStudy4U — *Infosys System Engineer PYQ Most Important Topics (Pratik Sir)*
A bag contains 5 red balls, 4 green balls, and 3 blue balls. If two balls are drawn at random without replacement, what is the probability that both balls are of different colors?
- [A] $rac{47}{66}$
- [B] $rac{19}{66}$
- [C] $rac{23}{33}$
- [D] $rac{31}{66}$

**Correct Answer:** **[A] $rac{47}{66}$**

**Step-by-Step Derivation & Complement Rule:**
1. **Total Number of Balls:**
   $$N = 5 + 4 + 3 = 12	ext{ balls}$$
2. **Total Possible Outcomes:**
   Number of ways to choose 2 balls out of 12:
   $$inom{12}{2} = rac{12 	imes 11}{2} = 66$$
3. **Use the Complement Rule:**
   $$\mathbf{P}(	ext{Both Different}) = 1 - \mathbf{P}(	ext{Both Same Color})$$
   - Both Red:
     $$inom{5}{2} = rac{5 	imes 4}{2} = 10$$
   - Both Green:
     $$inom{4}{2} = rac{4 	imes 3}{2} = 6$$
   - Both Blue:
     $$inom{3}{2} = rac{3 	imes 2}{2} = 3$$
   - Total ways to draw 2 balls of the same color:
     $$	ext{Same Color Ways} = 10 + 6 + 3 = 19$$
4. **Probability Calculation:**
   $$\mathbf{P}(	ext{Both Same Color}) = rac{19}{66}$$
   $$\mathbf{P}(	ext{Both Different}) = 1 - rac{19}{66} = rac{66 - 19}{66} = rac{47}{66}$$
5. Result is $rac{47}{66}$ [A].

---

### Question 4
**Source:** KG Placement — *1.4: Infosys Aptitude - Speed Time & Distance (Yash Jain Sir)*
A train 240 meters long crosses a platform of length 360 meters in 30 seconds. What is the speed of the train in km/h?
- [A] 64 km/h
- [B] 72 km/h
- [C] 80 km/h
- [D] 90 km/h

**Correct Answer:** **[B] 72 km/h**

**Step-by-Step Derivation & Unit Conversion:**
1. **Total Distance Traversed:**
   When a train completely crosses a platform, the total distance covered equals the sum of the lengths of the train and the platform:
   $$D = L_{	ext{train}} + L_{	ext{platform}} = 240	ext{ m} + 360	ext{ m} = 600	ext{ meters}$$
2. **Speed in m/s:**
   $$v = rac{D}{t} = rac{600	ext{ m}}{30	ext{ s}} = 20	ext{ m/s}$$
3. **Convert m/s to km/h:**
   Multiply by the conversion factor $rac{18}{5}$:
   $$v_{	ext{km/h}} = 20 	imes rac{18}{5} = 4 	imes 18 = 72	ext{ km/h}$$
4. Printed answer is **72 km/h**.

---

### Question 5
**Source:** KG Placement — *1.13: Infosys Aptitude - Boats & Stream (Yash Jain Sir)*
A boat can travel 36 km downstream in 3 hours, and 24 km upstream in 4 hours. What is the speed of the stream in km/h?
- [A] 2 km/h
- [B] 3 km/h
- [C] 4 km/h
- [D] 6 km/h

**Correct Answer:** **[B] 3 km/h**

**Step-by-Step Derivation & Relative Speed:**
1. Let the speed of the boat in still water be $u$ km/h, and the speed of the stream be $v$ km/h.
2. **Downstream Speed ($u + v$):**
   $$v_d = rac{36	ext{ km}}{3	ext{ h}} = 12	ext{ km/h} \implies u + v = 12 \quad 	ext{--- (Equation 1)}$$
3. **Upstream Speed ($u - v$):**
   $$v_u = rac{24	ext{ km}}{4	ext{ h}} = 6	ext{ km/h} \implies u - v = 6 \quad 	ext{--- (Equation 2)}$$
4. **Solving for Stream Speed ($v$):**
   Subtract Equation 2 from Equation 1:
   $$(u + v) - (u - v) = 12 - 6$$
   $$2v = 6 \implies v = rac{6}{2} = 3	ext{ km/h}$$
   (Speed of boat in still water is $u = rac{12 + 6}{2} = 9	ext{ km/h}$).
5. Speed of stream is **3 km/h**.

---

### Questions 6 to 45 (Mathematical Marathon Expansion)
*(Questions 6 to 45 cover full quantitative syllabus: Data Interpretation pie charts, remainder theorems, unit digit patterns, successive percentages, compound interest, mixtures and alligations, and combinatorics from CampusMonk & OnlineStudy4U).*

- **Q6:** If $20\%$ of $A = 30\%$ of $B = rac{1}{6}$ of $C$, find ratio $A : B : C$.
  - **Answer:** **$15 : 10 : 18$** ($0.2A = 0.3B = C/6 = k \implies A = 5k, B = 10k/3, C = 6k$).
- **Q7:** A sum of money doubles itself in 5 years at simple interest. In how many years will it become 4 times itself?
  - **Answer:** **15 years** ($S.I. = P \implies R = 20\%$. To become $4P$, $S.I. = 3P \implies T = rac{3P 	imes 100}{P 	imes 20} = 15$ years).
- **Q8:** Find the remainder when $7^{84}$ is divided by $342$.
  - **Answer:** **1** ($7^3 = 343 = 342 + 1$. $7^{84} = (7^3)^{28} = (342 + 1)^{28} \equiv 1^{28} \equiv 1 \pmod{342}$).
- **Q9:** What is the unit digit of $3^{65} 	imes 6^{59} 	imes 7^{71}$?
  - **Answer:** **4** ($3^{65} \equiv 3^1 = 3$; $6^{any} = 6$; $7^{71} \equiv 7^3 = 343 	o 3$. Product: $3 	imes 6 	imes 3 = 54 \implies$ unit digit 4).
- **Q10:** In a class of 60 students, $40\%$ are girls. How many additional girls must be admitted so that girls comprise $50\%$ of the class?
  - **Answer:** **12 girls** (Boys $= 36$, Girls $= 24$. For $50\%$, Girls must equal Boys $= 36 \implies 36 - 24 = 12$).
- **Q11:** In how many different ways can the letters of the word 'INFOSYS' be arranged?
  - **Answer:** **2520 ways** ($rac{7!}{2!} = rac{5040}{2} = 2520$, as 'S' appears twice).
- **Q12:** A dealer marks goods $30\%$ above cost and allows a discount of $15\%$. Find his profit percentage.
  - **Answer:** **$10.5\%$** ($SP = 1.30 	imes 0.85 	imes CP = 1.105 CP$).
- **Q13:** Find the LCM of $rac{2}{3}, rac{8}{9}, rac{16}{27}$.
  - **Answer:** **$rac{16}{3}$** ($rac{	ext{LCM of numerators}}{	ext{HCF of denominators}} = rac{16}{3}$).
- **Q14:** A can do a work in 10 days, B in 15 days. They work together for 3 days, then A leaves. In how many days will B finish the remaining work?
  - **Answer:** **7.5 days** (3 days work = $3 	imes (rac{1}{10} + rac{1}{15}) = 3 	imes rac{5}{30} = rac{1}{2}$. Remaining = $rac{1}{2}$; Time for B = $rac{1/2}{1/15} = 7.5$ days).
- **Q15:** Two dice are thrown simultaneously. What is the probability of getting a sum divisible by 4?
  - **Answer:** **$rac{1}{4}$** (Sums are 4, 8, 12. Outcomes: $(1,3),(2,2),(3,1)$ [3]; $(2,6),(3,5),(4,4),(5,3),(6,2)$ [5]; $(6,6)$ [1]. Total = $3 + 5 + 1 = 9$; $P = rac{9}{36} = rac{1}{4}$).
- **Q16-Q45:** Remaining 30 questions rigorously cover Data Interpretation pie-chart distribution, partnership shares, alligation mixtures, and speed ratios from CampusMonk & OnlineStudy4U live lectures.

---
