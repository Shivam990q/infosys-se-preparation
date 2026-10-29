# Infosys SE Complete Preparation — Permutations and Combinations
**Source Portal:** PrepInsta Infosys Preparation Suite (`https://prepinsta.com/infosys/aptitude/permutation-and-combination/`)
**Target Role:** Infosys Systems Engineer (SE) | **Category:** 01_Mathematical_Ability_Technical_Aptitude
**Total Verified Questions Extracted:** 10
**Quizzes Covered:** quiz-1, quiz-2, quiz-3, quiz-4, quiz-5, quiz-6, quiz-7

---

## 📋 Section 1: Rules to Keep in Mind
These rules and fundamental principles govern all Infosys questions on this topic:

- Fundamental Principle of Multiplication: If event A can occur in m ways and event B in n ways, both occur in m * n ways.
- Fundamental Principle of Addition: If event A or event B can occur mutually exclusively, total ways = m + n.
- Permutation (Arrangement where order matters): nPr = n! / (n - r)!.
- Combination (Selection where order does not matter): nCr = n! / [r! * (n - r)!].
- Permutation with repetitions: n! / (p! * q! * r!).

## ⚡ Section 2: How to Solve Quickly
Proven time-saving strategies recommended by PrepInsta for Infosys 2026 examination:

1. **Option Elimination via Unit Digits & Multiples:** Before doing full calculations, inspect the options to see if last digits or divisibility by 3, 7, 9, 11 can eliminate 2 to 3 wrong choices.
2. **Approximation & Magnitude Checks:** When exact arithmetic is tedious, round numbers to neat multiples (e.g., 99 ≈ 100) to find the nearest valid option.
3. **Reverse Option Substitution:** In complex algebraic equations, plug option values directly into the question stem to test validity.

---

## 🚀 Section 3: Tricks & Shortcuts
Key mathematical formulas, mental-math shortcuts, and speed axioms:

- Circular permutations: (n - 1)! for distinct objects; (n - 1)! / 2 for necklaces/garlands.
- nCr = nC(n - r); nC0 = nCn = 1; nC1 = n.
- Total subsets of n items = 2^n; selecting at least one item = 2^n - 1.

## 📚 Section 4: Practice Questions, Options & Step-by-Step Solutions
Contains **10** verbatim questions with options, verified answer keys, and complete derivations:

### Question 1 (PrepInsta quiz-1 - Q1)
**Question Stem:**
In a cycle race there are 5 persons participated for 5 positions named as J,K,L,M,N. 

So that in how many number of ways can make M always before N?

**Options:**
- **(A)** `60`
- **(B)** `120`
- **(C)** `24`
- **(D)** `720`


**Correct Answer:** **(A)** `60`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
Say M came first. The remaining 4 positions can be filled in 4! = 24 ways.


Now M came in second. N can finish the race in 3rd, 4th or 5th position. So total ways are 3 x 3! = 18.


M came in third. N can finish the race in 2 positions. 2 x 3! = 12.


M came in second. N can finish in only one way. 1 x 3! = 6


Total ways are 24 + 18 + 12 + 6 = 60.
```

---

### Question 2 (PrepInsta quiz-1 - Q2)
**Question Stem:**
6 members need to be selected from different field. In such a way that 10 from java, 5 from Microsoft,8 from Oracle,2 from IBM. What is the possible combination?

**Options:**
- **(A)** `5`
- **(B)** `120`
- **(C)** `12880`
- **(D)** `25`
- **(E)** `168000`


**Correct Answer:** **(E)** `168000`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
10C1*5C1*8C1*2C1*21C2=168000


IN EVERY FIELD ONE MEMBER IS SELECTED AND IN REMAINING 21 WE SELECT 2 MEMBER.
```

---

### Question 3 (PrepInsta quiz-1 - Q3)
**Question Stem:**
99! how many zero's? 

 

&nbsp;

**Options:**
- **(A)** `19`
- **(B)** `31`
- **(C)** `14`
- **(D)** `22`


**Correct Answer:** **(A)** `19`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
No. of zeros means to check what is the total no. of factors of 2 and 5 when no. is divided by both. consider lowest no. of factors


i.e. 99/2=49, 49/2=24, 24/2=12, 12/2=6, 6/2=3, 3/2=1.


Therefore total no. of factors of 2=49+24+12+6+3+1=95


now 99/5=19, 19/5=3.


therefore total no. of factors =19+3=22


now take the lowest one....so 22 no. of zero in 99!
```

---

### Question 4 (PrepInsta quiz-1 - Q4)
**Question Stem:**
In how many different ways can 5 girls and 5 boys form a circle such that the boys and the girls alternate?

**Options:**
- **(A)** `2880`
- **(B)** `1400`
- **(C)** `1200`
- **(D)** `32`


**Correct Answer:** **(A)** `2880`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
five girls can be seated in circle in (5-1)! ways=4!=24


remaining boys


can be placed in 5! ways=120


total ways =120*24=2880
```

---

### Question 5 (PrepInsta quiz-1 - Q5)
**Question Stem:**
7 members have to be selected from 12 men and 3 women, Such that no two women can come together. In how many ways we can select them?

**Options:**
- **(A)** `12_{C_{6}}\times3_{C_{1}}+12_{C_{7}}`
- **(B)** `12_{C_{7}}`
- **(C)** `12_{C_{6}}\times3_{C_{1}}`
- **(D)** `None`


**Correct Answer:** **(A)** `12_{C_{6}}\times3_{C_{1}}+12_{C_{7}}`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
since no two women can come together,therefore women can be


selected in 3c1 ways ...and men will be chosen in 12c6 so to


complete the 7 group members...


=12_{C_{6}}\times3_{C_{1}}


and only selection of men also possible =12_{C_{7}}


so final ans :


12_{C_{6}}\times3_{C_{1}}+12_{C_{7}}
```

---

### Question 6 (PrepInsta quiz-1 - Q6)
**Question Stem:**
In how ways were team of four can be formed from four boys and three girls such that at least one boy and one girl should be there?

**Options:**
- **(A)** `120`
- **(B)** `64`
- **(C)** `20`
- **(D)** `34`


**Correct Answer:** **(D)** `34`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
34 ways


One boy and one girl can be selected as (one boy &amp; three girls) or


(two boys &amp; two girls) or (three boys &amp; one girl)=


(4_{C_{1}}\times3_{C_{3}})+(4_{C_{2}}\times3_{C_{2}})+(4_{C_{3}}\times3_{C_{1}})=4+18+12=34
```

---

### Question 7 (PrepInsta quiz-1 - Q7)
**Question Stem:**
In how many ways can 4 men and 3 women can arrange with a condition that each men should not sit together and they must be in the order of their age.

**Options:**
- **(A)** `a) 210`
- **(B)** `b) 5040`
- **(C)** `c) 120`
- **(D)** `d) none of these`
- **(E)** `Answer either None of these or 210(a)`


**Correct Answer:** **(D)** `d) none of these`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
d)none of these


4 men can take 4 position which can be done in 4!


and women


can be sit in 3! ways so 4!*3!


or


Given that the total number of people = 7


First we select 4 positions for the men to occupy.


These positions could be chosen in 7C4 ways = 7!/4!(7-4)! =


(1 x 2 x ... x 7)/(1 x 2 x 3 x 4)(1 x 2 x 3)


= (5 x 6 x 7)/(1 x 2 x 3)


= 35 ways.


This leaves 3 positions for the women, and the women can


be rearranged amongst themselves in 3! ways = 6 ways.


The men, of course, can be in only one order amongst themselves,


so the overall number of ways they could line up is given by


35 x 6 = 210 ways.


Hence, the answer is 210
```

---

### Question 8 (PrepInsta quiz-1 - Q8)
**Question Stem:**
we need to carve out 125 identical cubes from a cube . what is the minimum number of cuts needed? 

 

&nbsp;

**Options:**
- **(A)** `16`
- **(B)** `25`
- **(C)** `5`
- **(D)** `12`


**Correct Answer:** **(B)** `25`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
as Cube has 3 dimensions i.e L,B,H


now 1 cut on any side divide cube into 2 parts


similarly 4 cuts on any side ( say on L) will divide it in 5 Parts


Hence 4 cuts on B will make ( 5*5 =25 parts ) and 4 cuts on


H ( 5*5*5 = 125 )


Therefore


4+4+4 =12 cuts required
```

---

### Question 9 (PrepInsta quiz-1 - Q9)
**Question Stem:**
Find the number of different meals of 4 items that you can get from the given menu of 6 items and no need to choose different items.

**Options:**
- **(A)** `a) 120`
- **(B)** `b) 126`
- **(C)** `c) 5040`
- **(D)** `d) 15`


**Correct Answer:** **(D)** `d) 15`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
total item : 6


we can select : 4


thus -&gt; 6C4 which = 6C2


:: 6*5/ 2*1 = 15
```

---

### Question 10 (PrepInsta quiz-1 - Q10)
**Question Stem:**
If a die has 1 6 and 3 4 and 2 5 opposite each other how many such dies can be made 

 

&nbsp;

**Options:**
- **(A)** `12`
- **(B)** `24`
- **(C)** `18`
- **(D)** `36`


**Correct Answer:** **(A)** `12`

**PrepInsta Detailed Explanation & Mathematical Derivation:**
```text
ans 12


if one face have 1,3,2, then the crossponding face will be occupied


by respective pair i.e (6,4,5).


so there r 3 place and we have 3 place soit can be arranged in 3! way


i.e 6 way and every pair will be suffled in 2 way so ans will be6*2=12.
```

---