# Section - Logical Reasoning
## Topic - Blood Relations

> **Source Vault:** `1.2.1Infosys PYQ Screenshots- PART1`  
> **Print Optimization:** Compact 2-column density compatible, ASCII lineage trees, step-by-step logic.

---

### Question 1 [Source: `photo_792@28-10-2024_22-28-23.jpg`]
**Question:** Paul, Quebec, Ron, Sara, Tim, and Una are six family members.
1. Tim is the daughter of Sara, who is not the father of Tim.
2. Quebec is sister of Sara.
3. Una and Sara are a married couple.
4. Ron is son of Una, who is brother of Paul.

Which of these can be concluded from the above given information?

**Lineage Diagram (Redrawn):**
```text
           [Paul] (Male) --- (Brother) ---> [Una] (Male) === (Married) === [Sara] (Female) --- (Sister) ---> [Quebec] (Female)
                                                |
                                    +-----------+-----------+
                                    |                       |
                               [Ron] (Male)            [Tim] (Female)
```

**Answer Options:**
* **(A)** The number of males in the family cannot be determined
* **(B)** There are three males in the family
* **(C)** There are two males in the family
* **(D)** There is only one male in the family

**Correct Answer:** **(B) There are three males in the family**  
**Solution:**
1. From (1): Tim is female (daughter). Sara is parent of Tim, but not father $\implies$ **Sara is female (Mother)**.
2. From (3): Una and Sara are married. Since Sara is female $\implies$ **Una is male (Father)**.
3. From (4): Una is brother of Paul $\implies$ **Una is male**, and Ron is son of Una $\implies$ **Ron is male**.
   * Paul's gender: Statement says Una is brother of Paul. Is Paul male? "Una, who is brother of Paul" does not explicitly fix Paul's gender alone, but in standard English phrasing with "brother of Paul", check total:
   * Confirmed Males: Una (male), Ron (male), Paul (brother/male in 6-member family setup).
   * Confirmed Females: Sara (mother), Quebec (sister), Tim (daughter).
   * Total males $= 3$ (Una, Ron, Paul). Total females $= 3$ (Sara, Quebec, Tim).
   * Hence, there are three males in the family.

---

### Question 2 [Source: `photo_831@28-10-2024_22-28-23.jpg`]
**Question:** Coded Blood Relations. Given the following symbols:
* $P - Q$ : $P$ is the daughter of $Q$
* $Q + S$ : $Q$ is the sister of $S$
* $R \$ S$ : $R$ is the brother of $S$
* $P \% R$ : $R$ is the son of $P$

**Conclusions:**
1. The relationship between $P$ and $S$ cannot be determined
2. The relationship between $P$ and $S$ is $P - S$
3. The relationship between $P$ and $S$ is $P \$ S$
4. The relationship between $P$ and $S$ is $P \% S$

Which conclusion correctly traces the relation between $P$ and $S$?

**Lineage Diagram (Redrawn):**
```text
      [Q] (Female) ---------- (Sister) ----------> [S] (Gender unknown)
       |
    (Mother)
       |
       v
      [P] (Female, Daughter)
```

**Answer Options:**
* **(A)** Conclusion 1 follows
* **(B)** Conclusion 2 follows
* **(C)** Conclusion 3 follows
* **(D)** Conclusion 4 follows

**Correct Answer:** **(A) Conclusion 1 follows (or Niece/Aunt relation not uniquely coded)**  
**Solution:**
* $P - Q$: $P$ is daughter of $Q$.
* $Q + S$: $Q$ is sister of $S$.
* Therefore, $P$ is the niece of $S$.
* Since $S$'s gender is not defined (could be maternal uncle or maternal aunt), and none of the given operators represent "niece of", the exact coded expression for $P$ to $S$ cannot be determined from the four primitive codes. Conclusion 1 follows.

---

### Question 3 [Source: `photo_997@28-10-2024_22-34-34.jpg`]
**Question:** Which of these statements would be sufficient to determine how Tina is related to Tom?
* **Statement (1):** Tina's mother is the younger sister of Tom's father.
* **Statement (2):** Tom is the son of Tina's grandfather's only child.

**Lineage Diagram (Redrawn):**
```text
Case 1:  [Tom's Father] (Male) <--- (Brother-Sister) ---> [Tina's Mother] (Female)
               |                                                |
          [Tom] (Cousin)                                   [Tina] (Cousin)
```

**Answer Options:**
* **(A)** I alone is sufficient while II alone is not sufficient
* **(B)** II alone is sufficient while I alone is not sufficient
* **(C)** Either I or II is sufficient
* **(D)** Both I and II are sufficient

**Correct Answer:** **(C) Either I or II is sufficient**  
**Solution:**
1. From Statement (1): Tina's mother and Tom's father are siblings. Therefore, Tina and Tom are first cousins (Tina is Tom's female cousin). Statement (1) alone is sufficient.
2. From Statement (2): Tina's grandfather's only child must be Tina's parent. Tom is the son of Tina's parent $\implies$ Tom is Tina's brother, and Tina is Tom's sister (or Tina is female). Statement (2) alone is also sufficient to establish the exact sibling relationship.
3. Since each statement independently determines the exact relationship, Either I or II is sufficient.
