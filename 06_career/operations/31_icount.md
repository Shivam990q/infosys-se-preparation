# Infosys Appraisal Architecture: The iCount System & Salary Growth

**Role:** Systems Engineer (JL3 Confirmed) | **Company:** Infosys Limited  
**System:** iCount (Continuous Performance Management & Annual Appraisal)  
**Objective:** How to secure top-tier ratings (CR / EE), maximize annual salary hikes, and achieve rapid promotion to Senior Systems Engineer.

---

## 1. The iCount Appraisal Architecture

Infosys evaluates employee performance using **iCount**, an internal continuous feedback framework integrated into the **Sparsh** enterprise intranet.

```
+---------------------------------------------------------------------------------+
|                       ANNUAL iCOUNT EVALUATION CYCLE                            |
+---------------------------------------------------------------------------------+
|  Q1 (Apr – Jun): Goal Setting & Key Performance Indicators (KPIs) Agreed        |
|                                   │                                             |
|                                   ▼                                             |
|  Q2 – Q3: Mid-Year Check-in & Continuous Feedback Documentation                 |
|                                   │                                             |
|                                   ▼                                             |
|  Q4 (Jan – Mar): Annual Self-Appraisal Submission & Manager Review              |
|                                   │                                             |
|                                   ▼                                             |
|  Normal Distribution Bell Curve Normalization across Delivery Unit (DU)         |
|                                   │                                             |
|         ┌─────────────────────────┼─────────────────────────┐                   |
|         ▼                         ▼                         ▼                   |
| [CR: Commendable]        [EE: Exceeds Exp.]        [ME: Meets Exp.]             |
| Top 10 – 15% Performers  Next 25 – 30% Performers  Bulk 45 – 50% Group          |
| 15% – 22% Salary Hike    9% – 13% Salary Hike      5% – 8% Standard Hike        |
| Fast-Track Promotion     Standard Promotion        No Promotion                 |
+---------------------------------------------------------------------------------+
```

---

## 2. Rating Breakdown & Salary Hike Impact

```
+---------------------------------------------------------------------------------+
|                         iCOUNT RATING & HIKE MATRIX                             |
+--------+--------------------+---------------+----------------+------------------+
| Rating | Performance Tier   | DU Quota Cap  | Typical Salary | Promotion        |
| Code   |                    | (Bell Curve)  | Increment      | Eligibility      |
+--------+--------------------+---------------+----------------+------------------+
| **CR** | Commendable        | Top 10 – 15%  | **15% – 22%**  | Eligible for     |
|        | (Outstanding)      | of the team   | annual hike    | fast-track promo |
|        |                    |               |                | to SSE in 2 yrs  |
+--------+--------------------+---------------+----------------+------------------+
| **EE** | Exceeds            | Next 25 – 30% | **9% – 13%**   | Eligible for     |
|        | Expectations       | of the team   | annual hike    | promo in 2.5 yrs |
+--------+--------------------+---------------+----------------+------------------+
| **ME** | Meets              | 45 – 50%      | **5% – 8%**    | Standard track   |
|        | Expectations       | of the team   | standard hike  | (3 to 3.5 yrs)   |
+--------+--------------------+---------------+----------------+------------------+
| **BE** | Below              | Bottom 5 – 10%| **0% (Zero)**  | Placed on 90-day |
|        | Expectations       | of the team   | No increment   | PIP remediation  |
+--------+--------------------+---------------+----------------+------------------+
```

---

## 3. The 4 Key Performance Indicators (KPIs) You Must Fulfill

When your Project Manager (PM) logs into iCount to evaluate your year, these 4 metrics determine your score:

### 1. Delivery Quality & Defect Density (40% Weight)
- **Metric:** Code delivered on time during 2-week Agile sprints with a **defect density under 5%**.
- **Proof:** Zero critical production bugs (P1/P2 incidents) introduced by your code pull requests.

### 2. Continuous Upskilling on Lex (25% Weight)
- **Metric:** Mandatory completion of at least **40 learning hours** on the Lex platform per financial year.
- **Bonus:** Achieving high-tier external certifications funded by Infosys (e.g., AWS Certified Developer, Azure Fundamentals, Google Cloud Associate Cloud Engineer).

### 3. Productivity & Automation (20% Weight)
- **Metric:** Writing Python/Bash scripts to automate routine tasks (e.g., log parsing, test data generation, automated regression runs).
- **Impact:** Project Managers love freshers who eliminate manual repetitive hours for the team.

### 4. Professional Discipline & Attendance (15% Weight)
- **Metric:** 100% compliance with biometric attendance (minimum 9.15 hours/day) and zero unannounced leaves.

---

## 4. How to Guarantee a Top-Tier (CR or EE) Rating

Never rely on your manager's memory at appraisal time. Follow this proactive playbook:

1. **Maintain a "Brag Document":** Keep a private markdown note recording every user story completed, client appreciation email received, and automation script built with exact dates.
2. **Seek Mid-Year Feedback in Writing:** In September, schedule a 15-minute 1-on-1 with your Project Manager. Ask: *"What specific outcomes do I need to deliver over the next 6 months to qualify for a Commendable (CR) rating?"*
3. **Master the Self-Appraisal Form:** When writing your self-evaluation in Sparsh, use quantitative business metrics rather than emotional statements:
   - *Weak:* "I worked hard on the banking module and wrote clean code."
   - *Strong:* "Delivered 14 microservice user stories across 6 sprints with zero P1/P2 production defects, automated test data creation saving 6 engineering hours per sprint, and completed 52 hours on Lex earning the AWS Cloud Practitioner badge."
