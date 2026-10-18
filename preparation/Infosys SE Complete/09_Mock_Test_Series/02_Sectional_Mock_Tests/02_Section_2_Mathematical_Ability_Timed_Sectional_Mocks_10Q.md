# 🔢 Section 2: Mathematical Ability — Timed Sectional Mock Tests (10 Questions | 35 Minutes)

> **Official Pattern:** Section 2 of Infosys Systems Engineer (SE) Exam  
> **Allotted Time:** 35 Minutes (Countdown Timer)  
> **Question Count:** 10 Questions per Mock Paper  
> **Passing Benchmark:** 7+ Marks (70% Accuracy)  
> **Negative Marking:** Zero (0)

---

## 📝 SECTIONAL MOCK TEST 01 (10 Questions | 35 Mins)

### Question 1 (Time and Work - Alternate Days)
A can complete a piece of work in 12 days and B in 18 days. If they work on alternate days beginning with A, in how many days will the work be completed?  
- A) 14 days  
- B) 14.33 days  
- C) 14.5 days  
- D) 15 days  
**Correct Answer:** B  
**Solution:** Total work = $\text{LCM}(12, 18) = 36$ units. Efficiency of A = 3 units/day, Efficiency of B = 2 units/day. In a 2-day cycle, work done = $3 + 2 = 5$ units. After 7 cycles (14 days), work done = $7 \times 5 = 35$ units. Remaining work = $36 - 35 = 1$ unit. On day 15, A works: time taken = $\frac{1}{3}$ day. Total time = $14 + \frac{1}{3} = 14.33$ days.

### Question 2 (Profit, Loss and Discount)
A shopkeeper marks his goods 40% above the cost price and allows a discount of 25% on the marked price. In addition, he gives 1 article free with every dozen purchased. What is his net profit or loss percentage?  
- A) 2.5% loss  
- B) 3.07% loss  
- C) 5% profit  
- D) No profit no loss  
**Correct Answer:** B  
**Solution:** Let CP of 1 article = ₹100. CP of 13 articles = ₹1300. MP of 1 article = ₹140. For 1 dozen (12 articles), customer pays for 12 articles at 25% discount: $\text{SP} = 12 \times 140 \times 0.75 = 12 \times 105 = ₹1260$. Net profit/loss = $1260 - 1300 = -40$ (Loss). Loss % = $\frac{40}{1300} \times 100 = 3.07\%$.

### Question 3 (Permutations and Combinations)
In how many different ways can the letters of the word `CORPORATION` be arranged so that all the vowels always come together?  
- A) 50,400  
- B) 28,800  
- C) 14,400  
- D) 7,200  
**Correct Answer:** A  
**Solution:** Word `CORPORATION` has 11 letters: C, R(2), P, T, N (6 consonants) and O(3), A, I (5 vowels). Treat 5 vowels as 1 single block. Total items to arrange = 6 consonants + 1 block = 7 items with R repeated twice: $\frac{7!}{2!} = \frac{5040}{2} = 2520$. Within the vowel block, 5 vowels with O repeated 3 times: $\frac{5!}{3!} = \frac{120}{6} = 20$. Total arrangements = $2520 \times 20 = 50,400$.

### Question 4 (Time, Speed and Distance - Relative Speed)
Two trains of lengths 140 m and 160 m run on parallel tracks. When running in the same direction, the faster train passes the slower train in 30 seconds. When running in opposite directions, they pass each other in 6 seconds. What is the speed of the faster train in km/h?  
- A) 90 km/h  
- B) 108 km/h  
- C) 126 km/h  
- D) 144 km/h  
**Correct Answer:** B  
**Solution:** Total distance = $140 + 160 = 300$ m. Same direction: $u - v = \frac{300}{30} = 10$ m/s. Opposite direction: $u + v = \frac{300}{6} = 50$ m/s. Adding equations: $2u = 60 \Rightarrow u = 30$ m/s. Speed in km/h = $30 \times \frac{18}{5} = 108$ km/h.

### Question 5 (Compound Interest)
The difference between the compound interest and simple interest on a certain sum of money invested for 2 years at 8% per annum is ₹192. What is the principal sum?  
- A) ₹25,000  
- B) ₹30,000  
- C) ₹32,000  
- D) ₹35,000  
**Correct Answer:** B  
**Solution:** For 2 years, $\text{Difference} = P \left(\frac{R}{100}\right)^2$.  
$192 = P \left(\frac{8}{100}\right)^2 = P \left(\frac{64}{10000}\right) \Rightarrow P = \frac{192 \times 10000}{64} = 3 \times 10000 = ₹30,000$.

### Question 6 (Pipes and Cisterns)
Two pipes A and B can fill a cistern in 20 minutes and 30 minutes respectively. A third pipe C can empty the full cistern in 15 minutes. If all three pipes are opened simultaneously, in how many minutes will the cistern be completely filled?  
- A) 45 minutes  
- B) 60 minutes  
- C) 75 minutes  
- D) It will never fill  
**Correct Answer:** B  
**Solution:** Capacity = $\text{LCM}(20, 30, 15) = 60$ units. Efficiency: A = $+3$, B = $+2$, C = $-4$. Combined net efficiency = $3 + 2 - 4 = +1$ unit/min. Time to fill 60 units = $\frac{60}{1} = 60$ minutes.

### Question 7 (Probability - Cards and Balls)
A box contains 5 red balls, 4 green balls, and 3 blue balls. Three balls are drawn at random without replacement. What is the probability that all three balls are of different colors?  
- A) $\frac{3}{11}$  
- B) $\frac{3}{22}$  
- C) $\frac{5}{22}$  
- D) $\frac{6}{11}$  
**Correct Answer:** A  
**Solution:** Total balls = $5 + 4 + 3 = 12$. Total ways to choose 3 balls = $\binom{12}{3} = \frac{12 \times 11 \times 10}{6} = 220$. Favorable ways (1 Red, 1 Green, 1 Blue) = $\binom{5}{1} \times \binom{4}{1} \times \binom{3}{1} = 5 \times 4 \times 3 = 60$. Probability = $\frac{60}{220} = \frac{3}{11}$.

### Question 8 (Ratio and Alligation)
A merchant has 100 kg of sugar, part of which he sells at 7% profit and the rest at 17% profit. He gains 10% on the whole. How much sugar did he sell at 17% profit?  
- A) 30 kg  
- B) 40 kg  
- C) 60 kg  
- D) 70 kg  
**Correct Answer:** A  
**Solution:** By alligation: Ratio of (7% profit quantity) to (17% profit quantity) = $(17 - 10) : (10 - 7) = 7 : 3$. Total parts = $7 + 3 = 10$. Quantity sold at 17% profit = $\frac{3}{10} \times 100 = 30$ kg.

### Question 9 (Number Systems - Divisibility & Remainders)
Find the unit digit of the expression $7^{95} - 3^{58}$.  
- A) 0  
- B) 4  
- C) 6  
- D) 7  
**Correct Answer:** B  
**Solution:** Cyclicity of 7 is 4 ($7, 9, 3, 1$). $95 \pmod 4 = 3 \Rightarrow 7^3 = 343$, unit digit is 3. Cyclicity of 3 is 4 ($3, 9, 7, 1$). $58 \pmod 4 = 2 \Rightarrow 3^2 = 9$, unit digit is 9. Unit digit of $(13 - 9) = 4$.

### Question 10 (Data Interpretation - Table Analysis)
A table shows the production (in thousands) of 4 types of cars by a company over 5 years:
| Year | Sedan | Hatchback | SUV | EV |
| :---: | :---: | :---: | :---: | :---: |
| 2021 | 45 | 60 | 30 | 15 |
| 2022 | 50 | 65 | 40 | 25 |
| 2023 | 55 | 70 | 50 | 45 |
| 2024 | 60 | 75 | 65 | 70 |
What was the percentage increase in EV production from 2021 to 2024?  
- A) 266.67%  
- B) 366.67%  
- C) 400.00%  
- D) 466.67%  
**Correct Answer:** B  
**Solution:** In 2021, EV = 15k. In 2024, EV = 70k. Absolute increase = $70 - 15 = 55$k. Percentage increase = $\frac{55}{15} \times 100 = 366.67\%$.
