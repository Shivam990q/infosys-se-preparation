# Topic 00: Infosys Puzzle Solving Master Formulas, Axioms & Shortcuts Cheatsheet

> **Target Exam:** Infosys System Engineer (SE), Digital Specialist Engineer (DSE), Specialist Programmer (SP)  
> **Domain:** Mathematical Puzzles, Matrix Grids, Geometric Figures, Alphabet Positional Reasoning  
> **Status:** Production-Ready Engineering Cheatsheet  

---

## 1. Executive Summary & Core Axioms

In the Infosys recruitment examination, the **Puzzle Solving** section assesses a candidate's high-speed algebraic pattern recognition, discrete logic deduction, and spatial arithmetic acuity. Puzzles are presented in two distinct formats:
1. **Matrix Number Grids:** $3 \times 3$, $4 \times 3$, or $4 \times 4$ numeric matrices with one or more unknown values (`?`, `X`, `Y`).
2. **Geometric & Polygon Figures:** Triangles, circles, propellers, ovals, and multi-segmented boxes with peripheral inputs mapping to an internal focal value.

### The Fundamental Axiom of Pattern Invariance
Every valid puzzle in the Infosys examination satisfies a **single, deterministic algebraic rule** across all reference components (rows, columns, or figures). If a candidate rule satisfies component 1 but fails component 2, it is categorically false.

---

## 2. Matrix Grid Solving Archetypes & Mathematical Formulations

### Archetype A: Linear Row & Column Combinations
| Pattern Name | Mathematical Formulation | Typical Manifestation |
| :--- | :--- | :--- |
| **Row-wise Summation** | $C_{i,3} = C_{i,1} + C_{i,2}$ | The third column is the direct sum of the first two. |
| **Row-wise Difference** | $C_{i,3} = C_{i,1} - C_{i,2}$ | The third column is the arithmetic difference. |
| **Incremented Product Sum** | $C_{i,3} = (C_{i,1} + 1)(C_{i,2} + 1) - 1$ | $C_3 = C_1 C_2 + C_1 + C_2$. |
| **Linear Differential Balance** | $R_1 - R_2 = R_4 - R_3$ | Constant gap across paired alternating rows. |
| **Linear Multi-Row Superposition** | $R_4 = R_2 + R_3 - R_1$ | Column accumulation with subtractive offset. |

### Archetype B: Multiplicative & Fractional Proportions
| Pattern Name | Mathematical Formulation | Typical Manifestation |
| :--- | :--- | :--- |
| **Direct Product** | $C_3 = C_1 \times C_2$ | Direct multiplicative factor. |
| **Product over Divisor** | $C_4 = \frac{C_1 \times C_2}{C_3}$ | Cross-column quotient balancing. |
| **Proportional Scaling** | $R_{k} = \lambda \cdot R_{k-1}$ | Row 2 is $0.5 \times R_1$; Row 3 is $3 \times R_2$. |
| **Column Accumulation Scaling** | $C_4 = \lambda \sum_{j=1}^3 C_j$ | Fourth column is a scalar multiple of column sum (e.g. $\lambda = 2$). |
| **Fractional Mapping** | $C_3 = C_1 \times \frac{p}{q}$ | Fractional scalar producing an integer mapped to the alphabet. |

### Archetype C: Powers, Exponents & Polynomial Grids
| Pattern Name | Mathematical Formulation | Typical Manifestation |
| :--- | :--- | :--- |
| **Exponential Degrees** | $M_{i,j} = a_i^j$ | Consecutive powers: $a^1, a^2, a^3, a^4$. |
| **Square Offset** | $C_3 = C_2 + C_1^2$ | Column 3 is Column 2 plus square of Column 1. |
| **Sum of Squares** | $C_3 = C_1^2 + C_2^2 - 1$ | Sum of squares with fixed decremental offset. |
| **Radical / Cube Root Sum** | $\sqrt[3]{C_1} + \sqrt[3]{C_2} = C_3$ | Sum of integer cube roots yields target integer. |
| **Squared Differences** | $C_3 = (C_1 - C_2)^2$ | Square of difference between first two columns. |

---

## 3. Geometric & Figure Puzzle Formulations

### 1. Triangles with Vertex Inputs
- **Additive Factor:** $\text{Center} = (\text{Top} + \text{Bottom-Right}) \times \text{Bottom-Left}$
- **Digital Sum of Product:** $\text{Center} = \text{DigitalRoot}(V_1 \times V_2 \times V_3)$
- **Pure Product Factor:** $\text{Center} = V_1 \times V_2 \times V_3$

### 2. Segmented Polygons & Ovals
- **Cross Determinant:** $\text{Center} = (\text{Left} \times \text{Right}) - (\text{Top} \times \text{Bottom})$
- **Propeller / Cross Product:** $\text{Center} = (TL \times BR) + (TR \times BL)$
- **Corner Degree Superposition:** $\text{Center} = TR^3 + TL^2$
- **Semiproduct with Constant Offset:** $\text{Center} = \frac{\text{Left} \times \text{Right}}{2} - k$

---

## 4. Alphabet-to-Number Positional Logic ($A=1 \dots Z=26$)

In Infosys puzzles, alphabets represent their forward English positional values:
$$\begin{array}{ccccccccc}
A=1 & B=2 & C=3 & D=4 & E=5 & F=6 & G=7 & H=8 & I=9 \\
J=10 & K=11 & L=12 & M=13 & N=14 & O=15 & P=16 & Q=17 & R=18 \\
S=19 & T=20 & U=21 & V=22 & W=23 & X=24 & Y=25 & Z=26
\end{array}$$

### Common Alphabet Transformations
1. **Positional Difference Doubling:** $(\text{Top} - \text{Bottom}) \times 2 = \text{Center}$.
2. **Alphabet Arithmetic Progression:** Odd sequences ($1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23$).
3. **Paired Letter Multiplicative Sum:** $(L_1 \times L_2) + (L_3 \times L_4) = \text{Number}$.
4. **Alphabet Semi-Product:** $\frac{L_1 \times L_3}{2} = L_2$.
5. **Sum & Difference Vector:** $L_1 - L_2 = C_2$ and $L_1 + L_2 = C_3$.

---

## 5. Strategic 60-Second Solving Algorithm for Test Takers

When facing an unknown matrix or figure puzzle under test conditions, apply this prioritized sequence:

```
[Step 1: Check Magnitude Gradient]
├── Are numbers roughly similar?
│   └── Test Row/Column Sums, Differences, or Averages.
└── Are numbers exploding in size?
    └── Test Multiplication, Squares, Cubes, or Powers.

[Step 2: Check Dimensions & Symmetry]
├── 3x3 Grid: Check Row operations first, then Column operations, then Diagonals.
├── 4x3 Grid: Check if Row 4 is the sum or multiple of Rows 1, 2, 3.
└── 4x4 Grid: Check for parallel Arithmetic Progressions along rows and columns.

[Step 3: Test Digits & Non-Linear Functions]
├── Do numbers resist standard algebra?
│   ├── Test Digit Products: (Digit 1 * Digit 2) + ...
│   ├── Test Digital Root: Sum of digits until single digit.
│   └── Test Reverse Digits: |A - B| with reversed digit order.

[Step 4: Distractor Elimination]
├── Calculate parity (odd/even).
├── Check monotonic bounds.
└── Reject options that violate modular arithmetic.
```

---
