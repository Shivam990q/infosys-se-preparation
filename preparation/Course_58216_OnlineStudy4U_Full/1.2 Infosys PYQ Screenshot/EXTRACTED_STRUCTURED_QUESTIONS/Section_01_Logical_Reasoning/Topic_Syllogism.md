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

---

### Question 5 [Source: `photo_1866@28-10-2024_22-49-56.jpg`]
**Question:** If the given statement is true:  
**Statement:** Some bikes are scooters.  
Then which of the following conclusions are valid / possible? *(Select the valid possibilities/deductions)*
1. No scooter is a bike
2. All scooters are bikes
3. Some scooters are not bikes
4. Some scooters are bikes

**Answer Analysis & Deductive Proof:**
* **Venn Representation:**
  The intersection set $\text{Bikes} \cap \text{Scooters} \neq \emptyset$.
* **Definite Conclusion:**
  * Statement 4 ("Some scooters are bikes") is the valid immediate converse of "Some bikes are scooters".
* **Possible Scenarios:**
  * Statement 2 ("All scooters are bikes") is possible (Scooters $\subseteq$ Bikes).
  * Statement 3 ("Some scooters are not bikes") is possible.
  * Statement 1 ("No scooter is a bike") is strictly FALSE and contradictory.
* **Valid Deductions/Possibilities:** **2, 3, and 4**.

---

### Question 6 [Source: `photo_1873@28-10-2024_22-49-56.jpg`]
**Question:** In this question, four statements have been given followed by conclusions:  
**Statements:**
1. No pavement is a footpath.
2. Some footpaths are wells.
3. All wells are gardens.
4. All gardens are beautiful.  
**Conclusions:**
* **I.** Some gardens are footpaths.
* **II.** Some beautiful are wells.
* **III.** No pavement is a well.

**Correct Answer:** **Conclusions I and II definitely follow**  
**Venn Diagram Proof:**
```text
  [ Pavements ]   (Disjoint)   [ Footpaths ] <--(Intersection)--> [ Wells ]
                                                                       |
                                                                (Subset of)
                                                                       v
                                                                 [ Gardens ]
                                                                       |
                                                                (Subset of)
                                                                       v
                                                                [ Beautiful ]
```
* **Conclusion I:** Footpaths intersect Wells, and Wells $\subseteq$ Gardens. Hence, the intersection Footpaths $\cap$ Gardens is non-empty. **Conclusion I follows**.
* **Conclusion II:** Wells $\subseteq$ Gardens $\subseteq$ Beautiful. Since Wells is a non-empty subset of Beautiful, Some beautiful are wells. **Conclusion II follows**.
* **Conclusion III:** Pavement is disjoint from Footpath, but Pavement could potentially intersect the non-footpath region of Wells. Hence, "No pavement is a well" is not definitely true.

---

### Question 7 [Source: `photo_1884@28-10-2024_22-49-56.jpg`]
**Question:** In this question, four statements are given followed by conclusions:  
**Statements:**
1. All jackets are hoodies.
2. No hoodie is a pullover.
3. Some pullovers are coats.
4. All coats are jerseys.  
**Conclusions:**
* **I.** No jacket is a pullover.
* **II.** Some jerseys are pullovers.

**Correct Answer:** **Both Conclusions I and II follow**  
**Venn Subset Proof:**
* **Conclusion I:**
  * Jackets $\subseteq$ Hoodies.
  * Hoodies $\cap$ Pullovers $= \emptyset$.
  * Since Jackets is completely inside Hoodies, Jackets can have no intersection with Pullovers.
  * Therefore, "No jacket is a pullover" definitely follows.
* **Conclusion II:**
  * Some pullovers are coats $\implies \text{Pullovers} \cap \text{Coats} \neq \emptyset$.
  * Coats $\subseteq$ Jerseys.
  * Therefore, Pullovers intersects Jerseys $\implies$ "Some jerseys are pullovers" definitely follows.

---

### Question 8 [Source: `photo_1893@28-10-2024_22-49-56.jpg`]
**Question:** Statements:  
1. Some spiders are lizards.
2. Some lizards are mice.
3. No mouse is a cat.
4. All cats are dogs.  
**Conclusions:**
* **I.** Some dogs are cats.
* **II.** No cat is a lizard.

**Correct Answer:** **Only Conclusion I follows**  
**Set Theoretic Proof:**
* **Conclusion I:** Cats $\subseteq$ Dogs. Since Cats is non-empty, the intersection Dogs $\cap$ Cats is non-empty. Therefore, "Some dogs are cats" definitely follows.
* **Conclusion II:** Cats is disjoint from Mice, but Cats can overlap with the non-mouse region of Lizards. Therefore, "No cat is a lizard" is not definitely guaranteed.

---

### Question 9 [Source: `photo_1926@28-10-2024_22-49-56.jpg`]
**Question:** Statements:  
1. All pillows are cushions.
2. Some cushions are quilts.
3. All quilts are bedsheets.  
**Conclusions:**
* **I.** Some bedsheets are cushions.
* **II.** Some pillows are quilts.

**Correct Answer:** **Only Conclusion I follows**  
**Set Theoretic Proof:**
* **Conclusion I:** Cushions intersects Quilts, and Quilts $\subseteq$ Bedsheets. Therefore, Cushions intersects Bedsheets $\implies$ "Some bedsheets are cushions" definitely follows.
* **Conclusion II:** Pillows $\subseteq$ Cushions, and Cushions intersects Quilts. However, the intersection of Cushions and Quilts need not overlap with Pillows. Therefore, "Some pillows are quilts" does not definitely follow.
