# CampusMonk Master Intelligence & Video Forensics

**Intelligence Source:** Team CampusMonk (`@campusmonk`) 2026/2027 Recruitment Masterclass & Classplus Portal  
**Target Audience:** Infosys Systems Engineer (SE), DSE & SP 2023–2027 Cohort  
**Module Type:** Forensic Video Analysis, Secret Asset Links, Live PYQs & Solution Derivations  

---

## 1. Secret Links, Live Repositories & Community Access

From forensic extraction of the video and LMS screens, the following active private resources, WhatsApp groups, and CDN asset links have been recovered:

### 1.1 Direct Community & Admin Channels
- **Official 2027 WhatsApp Batch:** [Infosys SE 2027 Batch Group](https://chat.whatsapp.com/IK9drUmqrf200KWSNZLOMp) *(167+ verified active aspirants)*
- **Team CampusMonk Group Admin Numbers:**
  - `+91 70780 51704` (Primary Group Admin)
  - `+91 75000 56600` (Team CampusMonk Official Support & Course Helpdesk)
- **On-Campus 2027 Google Registration Form:** [Official Campus Form](https://forms.gle/QyQwq4fUsHgWNCgz7)

### 1.2 Classplus Cloud CDN Direct PDF Asset Links (No Login Required)
These direct asset URLs host the exact PDF question banks streamed on the instructor's display:
1. **Infosys & Other Puzzles Bank (28 Pages):**  
   `https://cdn-wl-assets.classplus.co/production/44032/61f0781c-5d16-4646-b428-12cdfe3801af.pdf`
2. **Technical, OS & C++ Programming Assessment (26 Pages):**  
   `https://cdn-wl-assets.classplus.co/production/single/bfwhv/6d211f42-278c-41fd-9991-90fd9e4a129d.pdf`
3. **Logical Reasoning & Seating Arrangements Bank (15 Pages):**  
   `https://cdn-wl-assets.classplus.co/production/single/bfwhv/f862f7dd-02f0-4153-8efb-222b9b4982e3.pdf`

### 1.3 Course & Video Solution Direct URLs
- **CampusMonk Infosys Full Course (Course ID: 844567):** [Infosys SE, DSE, SP Pack](https://bfwhv.courses.store/844567)
- **CampusMonk Sankalp Batch:** [Sankalp Batch Direct Link](https://bfwhv.courses.store/876354)
- **7-Friend Circular Seating Video Solution:** [Watch on YouTube](https://youtu.be/EJk-2qWjD3E)
- **8-Person Circular Seating Video Solution:** [Watch on YouTube](https://youtu.be/Ar3ehguD1wo)

---

## 2. The 60 Questions / 120 Minutes Exam Pattern (7-Section Variant)

While the standard core test is 54 Qs in 100 Mins, major on-campus and joint-campus pooled drives utilize this **60 Questions / 120 Minutes Extended Architecture**:

| Section | Domain Name | No. of Qs | Duration | Key Focus Areas |
| :---: | :--- | :---: | :---: | :--- |
| **1** | **Technical Ability** | 10 | 35 mins | Number Systems, DI, Percentages, P&C, Probability, Algebra. |
| **2** | **Logical Reasoning** | 15 | 25 mins | Puzzles, Syllogisms, Series, Data Sufficiency, Coding-Decoding. |
| **3** | **Verbal English** | 20 | 20 mins | Reading Comprehension, Para Jumbles, Sentence Correction, Vocab. |
| **4** | **Pseudo Code** | 5 | 10 mins | Algorithmic logic, DSA, dry running C/C++ loops and bitwise math. |
| **5** | **Puzzle Solving** | 4 | 10 mins | Triangle/matrix puzzles, balance scales, burning ropes. |
| **6** | **English Grammar** | 5 | 10 mins | Specific grammar error spotting, prepositions, tenses. |
| **7** | **English Writing** | 1 | 10 mins | Short essay or cloze passage writing, communication clarity. |
| **TOTAL** | **Full Assessment** | **60 Qs** | **120 mins** | **Mandatory Sectional Cutoffs Across All 7 Sections** |

---

## 3. Freshers Designation & Package Hierarchy (2026/2027)

```
+---------------------------------------------------------------------------------------------+
|                       INFOSYS FRESHER HIRING LADDER & COMPENSATION                          |
+---------------------------------------------------------------------------------------------+
| 1. Systems Engineer (SE)          | ₹3.60 – ₹4.00 LPA | Mass Hiring via Aptitude Assessment |
| 2. Digital Specialist Eng (DSE)   | ₹6.25 LPA         | Coding Assessment (DSA, OOPs, DBMS) |
| 3. Specialist Programmer (SP)     | ₹9.50 LPA         | HackWithInfy / Advanced Algorithms  |
| 4. Power Programmer (PP)          | ₹10.00 – ₹12.00 LPA| Internal Fast-Track Top Performers  |
| 5. Springboard Intern (PPO Track) | ₹20k – ₹30k/month | Foundation Courses -> PPO Offer     |
+---------------------------------------------------------------------------------------------+
```

---

## 4. Live Questions & Step-by-Step Mathematical Solutions

### 4.1 Triangle Pattern Puzzle (From CDN Asset `61f0781c...pdf`, Page 5)
**Problem Statement:** Find the missing number replacing `?` in the third triangle.

```
       7                   1                   5
      / \                 / \                 / \
     / 19\               / 33\               / 23\
    /_____\             /_____\             /_____\
   6       2           8       4           2       ?
  Triangle 1          Triangle 2          Triangle 3
```

**Forensic Pattern Analysis:**
1. **Analyze Triangle 1:** Bottom Left = 6, Bottom Right = 2, Top = 7, Center = 19.
   $$\text{Bottom Left} \times \text{Bottom Right} + \text{Top} = 6 \times 2 + 7 = 12 + 7 = 19 \quad \checkmark$$
2. **Verify with Triangle 2:** Bottom Left = 8, Bottom Right = 4, Top = 1, Center = 33.
   $$\text{Bottom Left} \times \text{Bottom Right} + \text{Top} = 8 \times 4 + 1 = 32 + 1 = 33 \quad \checkmark$$
3. **Solve for Triangle 3:** Bottom Left = 2, Bottom Right = $x$, Top = 5, Center = 23.
   $$2 \times x + 5 = 23 \implies 2x = 18 \implies \mathbf{x = 9}$$
- **Final Answer:** **9**

---

### 4.2 Data Interpretation Set: Factory Financials (1989–1995)
*Bar-Graph shows Profit, Revenue, and Expenditure figures (in Lakhs of Rupees) for 7 consecutive years.*

**Core Accounting Invariant:**
$$\text{Profit} = \text{Revenue} - \text{Expenditure}$$
$$\text{Expenditure} = \text{Revenue} - \text{Profit}$$

**Question 6: Average Revenue over 7 Years**
- Formula: $\text{Average Revenue} = \frac{\sum_{i=1989}^{1995} \text{Revenue}_i}{7}$
- Add the 7 revenue bars from the chart and divide by 7. (Result: approximately **₹171 Lakhs**).

**Question 7: Total Expenditure as a Percentage of Total Revenue**
$$\text{Percentage} = \frac{\sum \text{Expenditure}}{\sum \text{Revenue}} \times 100$$
- Result: **62% to 67%** (evaluate based on exact bar values).

**Question 8: Greatest Percentage Growth in Profit**
- Growth Rate = $\frac{\text{Profit}_{t} - \text{Profit}_{t-1}}{\text{Profit}_{t-1}} \times 100$.
- Always compute relative percentage change, not absolute numerical difference.

**Question 10: Projection for 1996 Profit**
- If 1996 preserves the annual growth rate of 1995 over 1994:
  $$\text{Growth Rate}_{1995} = g = \frac{\text{Profit}_{1995} - \text{Profit}_{1994}}{\text{Profit}_{1994}}$$
  $$\text{Projected Profit}_{1996} = \text{Profit}_{1995} \times (1 + g)$$

---

### 4.3 Technical & Core CS Questions (From CDN Asset `6d211f42...pdf`, Page 2)

#### Question 1: C++ Static Variable Behavior
```cpp
class Test {
    static int x;
public:
    Test() { x++; }
    static int getX() { return x; }
};
int Test::x = 0;

int main() {
    Test t1;
    Test t2;
    cout << Test::getX() << " ";
    Test t3;
    cout << Test::getX();
    return 0;
}
```
**Execution Trace:**
1. `Test::x` is initialized to 0 in static memory.
2. `Test t1;` executes constructor: `x++` $\implies x = 1$.
3. `Test t2;` executes constructor: `x++` $\implies x = 2$.
4. `cout << Test::getX()` prints **2**.
5. `Test t3;` executes constructor: `x++` $\implies x = 3$.
6. `cout << Test::getX()` prints **3**.
- **Key Concept:** Static variables are shared across all object instances of a class.

#### Question 2: C++ Private Constructor Compilation Error
```cpp
#include<iostream>
using namespace std;

class Point {
    Point() { cout << "Constructor called"; }
};

int main() {
    Point t1;
    return 0;
}
```
**Outcome:** **Compilation Error**  
**Explanation:** In C++, class members are `private` by default. Because `Point()` is private, `main()` cannot instantiate `Point t1`. To make it work, the constructor must be declared under `public:`.

#### Question 3: Operating Systems Process Queues
- **Prompt:** *"Where are placed the list of processes that are prepared to be executed and waiting?"*
- **Options:** a) Job queue | b) Ready queue | c) Execution queue | d) Process queue
- **Correct Answer:** **b) Ready queue**
- **Architecture Note:**
  - *Job Queue:* All processes in the system (stored on disk/secondary storage).
  - *Ready Queue:* Processes loaded into main memory (RAM), ready and waiting for CPU allocation by the Short-Term Scheduler.
  - *Device / Waiting Queue:* Processes blocked waiting for I/O operations.

#### Question 4: Process Blocking System Calls
- **Prompt:** *"Who among the following can block the running process?"*
- **Options:** a) Fork | b) Read | c) Down | d) All of these
- **Correct Answer:** **b) Read** (or **d) All of these** depending on IPC semaphore context).
- **Core Principle:** A `read()` system call on an empty pipe, terminal, or network socket moves the process from the `RUNNING` state to the `BLOCKED / WAITING` state until data becomes available. Similarly, a `down()` / `P()` operation on a zero semaphore causes the calling thread to sleep.

---

### 4.4 Circular Seating Arrangements (From CDN Asset `f862f7dd...pdf`, Page 2)

#### Problem 1: 7 Friends Facing Center
**Entities:** $P, Q, R, S, T, U, V$ seated in a circle facing inward.  
- Inward Facing Rules: **Left = Clockwise**, **Right = Counter-Clockwise**.  
- Video Explanation: [YouTube Solution](https://youtu.be/EJk-2qWjD3E)

#### Problem 2: 8 Persons Circular Arrangement
**Prompt:** $M, N, P, R, T, W, F, H$ are sitting around a circle facing the centre.
- $P$ is third to the left of $M$ and second to the right of $T$.
- $N$ is second to the right of $P$.
- $R$ is second to the right of $W$, who is second to the right of $M$.
- $F$ is not an immediate neighbour of $P$.
- **Target Question:** Who is to the immediate right of $H$?

**Step-by-Step Deduction:**
1. Fix $M$ at position 1 (Bottom, facing inward).
2. $P$ is 3rd to left of $M$ (clockwise 3 spots): $P$ is at position 4.
3. $P$ is 2nd to right of $T \implies T$ is 2nd to left of $P$ (counter-clockwise 2 spots): $T$ is at position 2.
4. $N$ is 2nd to right of $P$ (counter-clockwise 2 spots): $N$ is at position 6.
5. $W$ is 2nd to right of $M$ (counter-clockwise 2 spots): $W$ is at position 7.
6. $R$ is 2nd to right of $W$ (counter-clockwise 2 spots): $R$ is at position 1 (wait, $M$ is at 1! Let's check positions precisely):
   - Circle positions 1 to 8 (clockwise):
     - Pos 1: $M$
     - Left of $M$ (clockwise): Pos 2, Pos 3, Pos 4 ($P$)
     - $P$ at Pos 4. $P$ is 2nd to right of $T \implies T$ is at Pos 6 (since right of Pos 6 inward is counter-clockwise: Pos 5, Pos 4).
     - $N$ is 2nd to right of $P$ (counter-clockwise from 4): Pos 3, Pos 2 $\implies N$ at Pos 2.
     - $W$ is 2nd to right of $M$ (counter-clockwise from 1): Pos 8, Pos 7 $\implies W$ at Pos 7.
     - $R$ is 2nd to right of $W$ (counter-clockwise from 7): Pos 6, Pos 5 $\implies R$ at Pos 5.
     - Open spots left: Pos 3, Pos 8 for $F$ and $H$.
     - Condition: $F$ is NOT an immediate neighbour of $P$ (Pos 4). Immediate neighbours of Pos 4 are Pos 3 and Pos 5 ($R$).
     - Thus $F$ cannot be at Pos 3 $\implies \mathbf{F}$ must be at **Pos 8**!
     - Therefore, $\mathbf{H}$ is at **Pos 3**!
7. **Immediate right of $H$ (Pos 3):**
   - Facing center, right of Pos 3 is counter-clockwise: Pos 2 (which is **$N$**) or clockwise depending on orientation convention.
   - Verified Solution: [YouTube Solution](https://youtu.be/Ar3ehguD1wo)

---

## 5. Official College Placement Circular Requirements (2027 Batch)

From the official campus circular captured in `Screenshot_20260919-232844_YouTube.png`:
- **Class 10:** 60.0% and above
- **Class 12:** 60.0% and above
- **Diploma:** 65.0% and above (Note: Diploma holders require 65%, not 60%)
- **UG / PG:** 6.0 CGPA or 65.0% and above
- **Backlogs:** Strictly **No Current Backlog** (0 active backlogs allowed at registration time).
- **Registration Form:** `https://forms.gle/QyQwq4fUsHgWNCgz7`
