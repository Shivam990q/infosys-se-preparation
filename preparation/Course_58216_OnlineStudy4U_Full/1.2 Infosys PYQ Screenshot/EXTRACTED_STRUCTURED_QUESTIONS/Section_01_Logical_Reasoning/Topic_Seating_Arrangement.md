# Section - Logical Reasoning
## Topic - Seating and Arrangement

> **Source Vault:** `1.2.1Infosys PYQ Screenshots- PART1`  
> **Print Optimization:** Compact 2-column density compatible, tabular arrangements.

---

### Question 1 [Source: `photo_791@28-10-2024_22-28-23.jpg`, `photo_799@28-10-2024_22-28-23.jpg`]
**Question:** During the first day of school, five siblings A, B, C, D, and E meet during lunch break to discuss houses and sports teams.
* Houses: Black, Yellow, Green, White, Blue
* Sports: Chess, Football, Tennis, Rugby, Shotput
* Conditions:
  1. A is part of the Chess team but not part of the Black house.
  2. C is part of the White house.
  3. The sibling who is part of the Tennis team is also part of the Green house.
  4. Neither D nor B are part of the Rugby team.
  5. B is part of the Blue house.
  6. E is part of the Shotput team.

**Deduced Master Arrangement Table (Redrawn):**
| Sibling | House | Sport / Team | Deduction Proof |
|:---:|:---:|:---:|:---|
| **A** | **Yellow** | **Chess** | A plays Chess (Given). House is not Black, not White (C), not Blue (B), not Green (Tennis) $\implies$ Yellow. |
| **B** | **Blue** | **Football** | B is Blue house (Given). Does not play Rugby (Given), Chess (A), Shotput (E), Tennis (Green) $\implies$ Football. |
| **C** | **White** | **Rugby** | C is White house (Given). D and B not Rugby $\implies$ C must play Rugby! |
| **D** | **Green** | **Tennis** | Tennis player is Green house. Only D is left for Green house and Tennis. |
| **E** | **Black** | **Shotput** | E plays Shotput (Given). Remaining house is Black. |

**Sub-Question 1.1:** Which house is the sibling who plays Rugby a part of?  
* **(A)** Yellow house  
* **(B)** Blue house  
* **(C)** White house  
* **(D)** Black house  
**Correct Answer:** **(C) White house** (Sibling C plays Rugby and belongs to White house).

**Sub-Question 1.2:** Which of these siblings is not part of the Green house but plays Football?  
* **(A)** B  
* **(B)** E  
* **(C)** D  
* **(D)** A  
**Correct Answer:** **(A) B** (Sibling B belongs to Blue house and plays Football).

---

### Question 2 [Source: `photo_794@28-10-2024_22-28-23.jpg`]
**Question:** Seven friends A, B, C, D, E, F, and G work in the same MNC. All of their salary raises were distinct.
1. D got the same raise as the average raise received by A and B: $D = \frac{A + B}{2}$.
2. A received a higher raise than B: $A > B$.
3. Both E and F received a lesser raise than C but a higher raise than G: $C > E, F > G$.
4. G did not receive the least amount of raise.
5. The number of people who received a higher raise than D is the same as the number of people who received a lower raise than D $\implies$ **D is the median (Rank 4 out of 7)**.
6. A received a lower raise than D: $A < D$.

Analyse the data and answer: How many people received a raise higher than A?

**Linear Ranking Order (Redrawn):**
```text
  Rank 1 (Highest) > Rank 2 > Rank 3 > Rank 4 (D) > Rank 5 (A) > Rank 6 (G) > Rank 7 (B)
        [ C, E, F ]                       [ D ]         [ A ]       [ G ]       [ B ]
```

**Answer Options:**
* **(A)** Two
* **(B)** Four
* **(C)** One
* **(D)** Three
* **(E)** None

**Correct Answer:** **(B) Four**  
**Solution:**
1. Since 7 people have distinct raises and D is the median, exactly 3 people are above D and 3 people are below D.
   * Ranks above D: 3 people (Ranks 1, 2, 3).
   * Rank 4: D.
   * Ranks below D: 3 people (Ranks 5, 6, 7).
2. Given $A < D$, A is below D.
3. Since $D = \frac{A + B}{2}$ and $A > B$, we must have $A > D$ or $A < D < B$. But given $A < D$, we have $B < D$. Since $D$ is the average of $A$ and $B$, $D$ lies between $A$ and $B$.
   * $B < A < D$.
4. Since $A < D$, A is at Rank 5.
5. Therefore, exactly 4 people received a raise higher than A (the 3 people above D, plus D itself).
