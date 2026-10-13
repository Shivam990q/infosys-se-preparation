# Section - Logical Reasoning
## Topic - Syllogism

> **Source Vault:** `1.2.1Infosys PYQ Screenshots- PART1` & `1.2.2 Infosys PYQ Screenshots- PART2`  
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
**Question:** If the given statement is true, **Some bikes are scooters**, then which of the following conclusions are possible? *(Select three correct solutions)*

**Answer Options (Verified Multi-Select Checkboxes from Screenshot Pixels):**
* [ ] No scooters is a bike
* [x] **All scooters are bike**
* [x] **Some scooters are not bikes**
* [x] **Some scooters are bikes**

**Correct Solutions:** **All scooters are bike, Some scooters are not bikes, Some scooters are bikes**  
**Set-Theoretic Deduction Proof:**
* Given: $	ext{Bikes} \cap 	ext{Scooters} 
e \emptyset$.
* 1. "No scooters is a bike" directly contradicts the premise ($	ext{Bikes} \cap 	ext{Scooters} = \emptyset$ is false).
* 2. "All scooters are bike" is a valid possibility ($	ext{Scooters} \subseteq 	ext{Bikes}$).
* 3. "Some scooters are not bikes" is a valid possibility ($	ext{Scooters} \setminus 	ext{Bikes} 
e \emptyset$).
* 4. "Some scooters are bikes" is definitely true by immediate conversion, hence also possible.
* Therefore, the three required possible solutions are options 2, 3, and 4.

---

### Question 6 [Source: `photo_1873@28-10-2024_22-49-56.jpg`]
**Question:** In this question, four statements have been given followed by some conclusions. Assuming that all information in the statements are true, analyse the conclusions together and determine whether a definitely follow(s) from the information given in the statements.  
* **Statement I:** Some pavements are footpath.  
* **Statement II:** All footpath are well.  
* **Statement III:** Some well are garden.  
* **Statement IV:** No garden is beautiful.  
*(Select Two Correct Solutions)*

**Answer Options (Verified Multi-Select Checkboxes from Screenshot Pixels):**
* [ ] All well are pavements
* [ ] All beautiful are pavements
* [x] **Some footpath being garden is a possibility**
* [x] **Some pavements are well**

**Correct Solutions:** **Some footpath being garden is a possibility, Some pavements are well**  
**Venn Representation & Relational Proof:**
* $	ext{Pavements} \cap 	ext{Footpath} 
e \emptyset$.
* $	ext{Footpath} \subseteq 	ext{Well} \implies$ Since Pavements overlaps Footpath, and Footpath is completely inside Well, Pavements must overlap Well ($	ext{Pavements} \cap 	ext{Well} 
e \emptyset$). Hence, **"Some pavements are well"** definitely follows.
* Footpaths and Gardens have no negative restriction; hence, **"Some footpath being garden is a possibility"** is strictly valid.
* The two required correct solutions are selected.

---

### Question 7 [Source: `photo_1884@28-10-2024_22-49-56.jpg`]
**Question:** In this question, four statements have been given followed by some conclusions. Assuming that all information in the statements are true, analyse the conclusions together and determine whether any of them definitely follow(s) from the information given in the statements.  
* **Statement I:** Some jackets are hoodies.  
* **Statement II:** Some hoodies are pullovers.  
* **Statement III:** Some pullovers are coats.  
* **Statement IV:** Some coats are jerseys.  
*(Select two possible solutions)*

**Answer Options (Verified Multi-Select Checkboxes from Screenshot Pixels):**
* [ ] Some coats are hoodies
* [x] **Some pullovers are hoodies**
* [x] **Some jackets being coats is a possibility**
* [ ] All coats are jerseys

**Correct Solutions:** **Some pullovers are hoodies, Some jackets being coats is a possibility**  
**Deductive Proof:**
* Statement II states "Some hoodies are pullovers". By immediate converse, **"Some pullovers are hoodies"** is definitely true and valid.
* Jackets and coats have no negative constraint separating them; therefore, **"Some jackets being coats is a possibility"** is a valid possible conclusion.
* The two selected options match the verified exam criteria.

---

### Question 8 [Source: `photo_1893@28-10-2024_22-49-56.jpg`]
**Question:** In this question, four statements have been given followed by some conclusions. Assuming that all information in the statements are true, analyse the conclusions together and determine whether any of them logically and definitely follow(s) from the information given in the statements.  
* **Statement I:** No spider is a lizard.  
* **Statement II:** All lizards are mouse.  
* **Statement III:** Some mouse are cats.  
* **Statement IV:** All cats are dogs.  
*(Select two solutions)*

**Answer Options (Verified Multi-Select Checkboxes from Screenshot Pixels):**
* [ ] No Lizard is dog
* [x] **Some dogs being spider is a possibility**
* [x] **Some mouse are dogs**
* [ ] No mouse is a spider

**Correct Solutions:** **Some dogs being spider is a possibility, Some mouse are dogs**  
**Syllogistic Proof:**
* Statement III: "Some mouse are cats" and Statement IV: "All cats are dogs".
  * Since cats are a subset of dogs, the mouse elements that are cats are also dogs $\implies$ **"Some mouse are dogs"** definitely follows.
* Spiders and dogs have no disjoint condition; thus **"Some dogs being spider is a possibility"** is completely valid.
* Matches the two correct solutions.

---

### Question 9 [Source: `photo_1926@28-10-2024_22-49-56.jpg`]
**Question:** In this question, three statements have been given followed by some conclusions. Assuming that all information in the statements are true, analyse the conclusions together and determine whether any of them logically and definitely follow(s) from the information given in the statements.  
* **Statement I:** All pillows are cushions.  
* **Statement II:** No cushion is a quilt.  
* **Statement III:** Some quilt are bedsheet.  
*(Select two solutions)*

**Answer Options (Verified Multi-Select Checkboxes from Screenshot Pixels):**
* [x] **No pillow is a quilt**
* [x] **Some cushions are pillow**
* [ ] All pillows are bedsheet
* [ ] No pillow is a bedsheet

**Correct Solutions:** **No pillow is a quilt, Some cushions are pillow**  
**Venn Diagram Proof:**
* $	ext{Pillows} \subseteq 	ext{Cushions}$.
* $	ext{Cushions} \cap 	ext{Quilt} = \emptyset$.
* Since Pillows is entirely inside Cushions, Pillows cannot have any common elements with Quilt $\implies 	ext{Pillows} \cap 	ext{Quilt} = \emptyset$. Hence, **"No pillow is a quilt"** definitely follows.
* By subaltern conversion of "All pillows are cushions", **"Some cushions are pillow"** definitely follows.
* Both valid conclusions are confirmed.
