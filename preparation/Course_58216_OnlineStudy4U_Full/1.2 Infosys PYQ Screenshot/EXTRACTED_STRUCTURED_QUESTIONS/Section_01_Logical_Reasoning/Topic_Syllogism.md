# Section - Logical Reasoning
## Topic - Syllogism

> **Source Vault:** `1.2.1Infosys PYQ Screenshots- PART1`  
> **Print Optimization:** Compact 2-column density compatible, formal set theory notations.

---

### Question 1 [Source: `photo_801@28-10-2024_22-28-23.jpg`]
**Question:** Given below are three statements followed by four conclusions:
* **Statements:**
  1. Some eggs are bacon.
  2. All bacon are breakfast.
  3. No breakfast is vegetarian.
* **Conclusions:**
  * I. All bacon being breakfast is not a possibility (it is a certainty).
  * II. Some eggs being vegetarian is a possibility.
  * III. Some bacon are not vegetarian.
  * IV. No eggs being vegetarian is a possibility.

**Venn Diagram Logic (Redrawn):**
```text
  ( Eggs [ Some Eggs = Bacon ( Bacon c Breakfast ) ] )  <=== NO OVERLAP ===>  [ Vegetarian ]
```

**Answer Options:**
* **(A)** Neither (1) nor (2) follows
* **(B)** Only (2) and (3) follow
* **(C)** Only (2), (3) and (4) follow
* **(D)** All conclusions follow

**Correct Answer:** **(C) Only (2), (3) and (4) follow**  
**Solution:**
1. Since All Bacon $\subseteq$ Breakfast and Breakfast $\cap$ Vegetarian $= \emptyset$, no Bacon can ever be Vegetarian. Thus, "Some bacon are not vegetarian" (III) is 100% true.
2. Some Eggs are Bacon (hence in Breakfast). The remaining portion of Eggs outside Breakfast can potentially overlap with Vegetarian. Thus, "Some eggs being vegetarian is a possibility" (II) is valid.
3. It is also possible that no eggs are vegetarian (IV).
4. Conclusion I is invalid because "All bacon are breakfast" is already a definite statement, not a possibility.
5. Therefore, (2), (3), and (4) follow.

---

### Question 2 [Source: `photo_923@28-10-2024_22-33-03.jpg`, `photo_929@28-10-2024_22-33-03.jpg`]
**Question:** Consider the six statements given below:
1. All divers swim deep.
2. All divers are fit.
3. All divers are swimmers.
4. All swimmers are strong.
5. All swimmers are tired.
6. All divers are strong.

Which of the following conclusions can be logically deduced from the statements?

**Deductive Chain (Redrawn):**
```text
  [Divers]  c  [Swimmers]  c  [Strong]
   (Stmt 3)      (Stmt 4)     ==> Stmt 6: [Divers] c [Strong]
```

**Answer Options:**
* **(A)** Statement 3 can be concluded from statements 1 and 2
* **(B)** Statement 6 can be concluded from statements 3 and 4
* **(C)** Statement 6 can be concluded from statements 4 and 5
* **(D)** Statement 1 can be concluded from statements 2 and 3

**Correct Answer:** **(B) Statement 6 can be concluded from statements 3 and 4**  
**Solution:**
* Statement 3 states: $\text{Divers} \subseteq \text{Swimmers}$.
* Statement 4 states: $\text{Swimmers} \subseteq \text{Strong}$.
* By transitivity of subsets: $\text{Divers} \subseteq \text{Swimmers} \subseteq \text{Strong} \implies \text{Divers} \subseteq \text{Strong}$.
* This is exactly Statement 6 ("All divers are strong"). Thus, Statement 6 is derived from 3 and 4.
---

### Question 3 [Source: `photo_1051@28-10-2024_22-34-34.jpg`]
**Question:** Read the following statements and decide which conclusion logically follows:
* **Statements:**
  1. All persons who drive under the influence of alcohol pose a fatal threat to public safety.
  2. Severe legal penalties and mandatory license cancellations deter reckless drivers.
* **Conclusions:**
  * *Conclusion I:* Strict punitive enforcement and sobriety checkpoints significantly improve road safety.
  * *Conclusion II:* Reckless driving cannot be prevented by any form of legal deterrence.

**Answer Options:**
* **(A)** Only Conclusion I follows
* **(B)** Only Conclusion II follows
* **(C)** Both Conclusion I and II follow
* **(D)** Neither Conclusion I nor II follows

**Correct Answer:** **(A) Only Conclusion I follows**  
**Formal Set Proof:**
* Let $D$ be the set of intoxicated drivers, and $T$ be the set of public safety threats: $D \subseteq T$.
* Premise 2 establishes an inverse correlation between severe enforcement ($E$) and reckless behavior ($R$): $E \implies \neg R$.
* Conclusion I is a direct formal corollary of Premise 2.
* Conclusion II is a direct formal contradiction of Premise 2.
* Thus, only Conclusion I follows.

---

### Question 4 [Source: `photo_786@28-10-2024_22-28-23.jpg`, `photo_924@28-10-2024_22-33-03.jpg`, `photo_932@28-10-2024_22-33-03.jpg`]
**Question:** In the question, two statements are given followed by two conclusions I and II.
* **Statements:**
  1. All scientists are researchers.
  2. Some researchers are innovators.
* **Conclusions:**
  * *Conclusion I:* Some scientists are innovators.
  * *Conclusion II:* Some researchers are scientists.

**Answer Options:**
* **(A)** Only Conclusion I follows
* **(B)** Only Conclusion II follows
* **(C)** Either Conclusion I or II follows
* **(D)** Both Conclusions I and II follow

**Correct Answer:** **(B) Only Conclusion II follows**  
**Venn Diagram Proof:**
* Statement 1: All scientists ($S$) are researchers ($R$) $\implies S \subseteq R$.
* Statement 2: Some researchers ($R$) are innovators ($I$) $\implies R \cap I \ne \emptyset$.
* Conclusion I ($S \cap I \ne \emptyset$): There is no necessary overlap between $S$ and $I$; they may be disjoint subsets within $R$. Does not follow definitively.
* Conclusion II ($R \cap S \ne \emptyset$): Since $S \subseteq R$ and $S$ is non-empty, the intersection of $R$ and $S$ is precisely $S$, which is non-empty. Follows by immediate subaltern conversion.
* Therefore, only Conclusion II follows.
