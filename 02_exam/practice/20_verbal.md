# Verbal Ability & Critical Reasoning Real Exam Bank

**Role:** Systems Engineer (SE) | **Company:** Infosys Limited  
**Section Specs:** 20 Questions | 20 Minutes | ~1 Minute per Question | No Negative Marking

---

## 1. Verbal Section Anatomy & Time Management Strategy

The Verbal Ability section has the highest question-to-minute ratio (20 questions in 20 minutes). To clear the sectional cutoff (~65%, i.e., 13+ correct):

```
+---------------------------------------------------------------------------------+
|                       VERBAL ABILITY TIME BUDGET ALLOCATION                     |
+----------------------------+-----------+--------------------+-------------------+
| Question Type              | Questions | Time per Question  | Total Section Time|
+----------------------------+-----------+--------------------+-------------------+
| 1. Spotting Errors / Gram. | 5 Qs      | 35 – 40 seconds    | ~3.0 mins         |
| 2. Sentence Completion     | 4 Qs      | 40 – 45 seconds    | ~2.5 mins         |
| 3. Para Jumbles (Sentence) | 3 Qs      | 60 – 75 seconds    | ~3.5 mins         |
| 4. Critical Reasoning      | 3 Qs      | 60 – 75 seconds    | ~3.5 mins         |
| 5. Reading Comprehension   | 5 Qs      | 90 seconds reading | ~7.5 mins         |
|                            | (1 passage| + 35s per question |                   |
+----------------------------+-----------+--------------------+-------------------+
| TOTAL                      | 20 Qs     |                    | 20.0 minutes      |
+----------------------------+-----------+--------------------+-------------------+
```

---

## 2. Reading Comprehension (Full Real-Style Passage + 5 Questions)

### Passage: Artificial Intelligence in Cloud Systems
*Read the following passage carefully and answer the questions that follow:*

> The transition from monolithic on-premises architectures to cloud-native microservices has accelerated the complexity of distributed systems. In modern enterprise cloud environments, thousands of microservices interact across hybrid multi-cloud topologies, generating terabytes of telemetry data, distributed traces, and log streams every hour. Human site reliability engineers (SREs) can no longer manually analyze this influx of metrics to diagnose systemic latency spikes or intermittent cascading service degradations.
> 
> Consequently, enterprises have embraced Artificial Intelligence for IT Operations (AIOps). By training unsupervised anomaly detection models on historical telemetry, AIOps platforms can establish dynamic baselines for normal system behavior. Unlike legacy threshold-based alerting—which triggers alert fatigue when CPU utilization temporarily exceeds 80% during scheduled batch jobs—machine learning algorithms evaluate multi-dimensional correlations across network packets, memory saturation, and transaction volumes. 
> 
> However, autonomous remediation remains a double-edged sword. While automated pod rescheduling and autoscaling mitigate trivial resource starvation, unconstrained closed-loop remediation models carry inherent operational hazards. If a rogue microservice initiates infinite recursive database queries due to a software bug, an autonomous scaling agent may spin up hundreds of container instances to satisfy the escalating load, exponentially inflating cloud infrastructure expenditures without resolving the underlying architectural defect. Thus, prudent architectural governance mandates "human-in-the-loop" oversight for non-deterministic automated remediation workflows.

#### Q1. Central Theme / Primary Purpose
**Question:** The primary purpose of the author in this passage is to:  
- (A) Advocate for the total replacement of Site Reliability Engineers with unsupervised AIOps remediation models.  
- (B) Contrast the benefits of AIOps-driven anomaly detection with the operational and financial hazards of unconstrained automated remediation.  
- (C) Prove that monolithic on-premises architectures are superior to hybrid cloud-native microservices.  
- (D) Explain the mathematical equations governing multi-dimensional telemetry correlations in distributed networks.  

* **Detailed Solution:**
  - Option (A) is incorrect because the author explicitly calls for "human-in-the-loop" oversight and warns against unconstrained automation.
  - Option (B) is **Correct**. Paragraph 2 highlights how AIOps solves alert fatigue and complexity, while Paragraph 3 details the risks (runaway costs, failing to fix root causes) and concludes with the necessity of human governance.
  - Option (C) contradicts the passage; the author acknowledges microservices as the modern standard.
  - Option (D) is incorrect because no mathematical equations are discussed.
  - **Correct Answer:** **(B)**

#### Q2. Inference on Legacy Alerting
**Question:** According to the passage, why do legacy threshold-based alerting systems cause "alert fatigue"?  
- (A) They fail to log distributed traces and network telemetry in hybrid cloud architectures.  
- (B) They require manual re-compilation of container images whenever a batch job executes.  
- (C) They trigger false alarms during routine, harmless spikes such as scheduled batch processing.  
- (D) They automatically provision hundreds of containers without human consent.  

* **Detailed Solution:**
  - In Paragraph 2, the text states: *"Unlike legacy threshold-based alerting—which triggers alert fatigue when CPU utilization temporarily exceeds 80% during scheduled batch jobs..."* This directly confirms that benign, routine operations trigger unnecessary alarms.
  - **Correct Answer:** **(C)**

#### Q3. Vocabulary Context ("Remediation")
**Question:** In the context of the passage, the word **"remediation"** most nearly means:  
- (A) Financial budgeting and cloud cost reduction.  
- (B) Detection of network latency spikes.  
- (C) Correction, resolution, and repair of system faults.  
- (D) Decommissioning legacy monolithic applications.  

* **Detailed Solution:**
  - Remediation in software engineering refers to the act of rectifying, fixing, or mitigating an operational issue (such as restarting pods or autoscaling).
  - **Correct Answer:** **(C)**

#### Q4. Cause-and-Effect Analysis
**Question:** What scenario does the author cite where automated autoscaling leads to negative consequences?  
- (A) When network packets drop during a scheduled datacenter migration.  
- (B) When a bug causing recursive database queries causes an autoscaling agent to spawn containers and inflate cloud costs.  
- (C) When human engineers fail to manually review telemetry data generated by monolithic apps.  
- (D) When unsupervised anomaly detection algorithms flag memory saturation as normal behavior.  

* **Detailed Solution:**
  - Direct reference from Paragraph 3: *"If a rogue microservice initiates infinite recursive database queries due to a software bug, an autonomous scaling agent may spin up hundreds of container instances... exponentially inflating cloud infrastructure expenditures..."*
  - **Correct Answer:** **(B)**

#### Q5. Tone of the Author
**Question:** The author's tone in the concluding paragraph can best be described as:  
- (A) Cynical and dismissive  
- (B) Cautious and pragmatic  
- (C) Overly enthusiastic and unrestrained  
- (D) Indifferent and apathetic  

* **Detailed Solution:**
  - The author recognizes the value of automation but urges prudence, highlighting dangers and prescribing "human-in-the-loop" governance. This is a balanced, pragmatic, and cautious perspective.
  - **Correct Answer:** **(B)**

---

## 3. Sentence Correction & Error Spotting (5 Real Exam Questions)

### Q6. Subject-Verb Agreement with Intervening Phrases
**Question:** Identify which underlined section contains a grammatical error:  
> *The collection of microservices, along with several legacy enterprise databases, **(A) are** undergoing a complete architectural overhaul **(B) to improve** system resilience **(C) before** the peak holiday shopping season **(D) begins**.*  

- (A) are  
- (B) to improve  
- (C) before  
- (D) begins  

* **Detailed Explanation:**
  - **Rule:** When the subject is followed by prepositional or additive phrases such as *along with, as well as, together with, in addition to*, the verb must agree with the **primary head subject**, not the object of the preposition.
  - Primary Subject = *"The collection"* (Singular).
  - Error: *"are"* is plural. It must be replaced by the singular verb **"is"**.
  - **Correct Answer:** **(A)**

### Q7. Dangling Modifier
**Question:** Which of the following sentences is grammatically correct?  
- (A) Having compiled the backend source code, the deployment pipeline was initiated by the DevOps engineer.  
- (B) Having compiled the backend source code, the DevOps engineer initiated the deployment pipeline.  
- (C) Having compiled the backend source code, the server was ready for live traffic.  
- (D) Having compiled the backend source code, an automated notification was dispatched.  

* **Detailed Explanation:**
  - **Rule:** A participial phrase (*"Having compiled the backend source code"*) must be immediately followed by the noun that actually performed the action.
  - Who compiled the source code? The DevOps engineer, not the pipeline, server, or notification!
  - In Options (A), (C), and (D), the modifier dangles because an inanimate object follows the comma.
  - **Correct Answer:** **(B)**

### Q8. Parallelism in Correlative Conjunctions
**Question:** Identify the error in the sentence:  
> *The new software architecture not only enables **(A) real-time streaming analytics** but also **(B) provides** fault tolerance **(C) by replicating** data across multiple availability **(D) zone**.*  

- (A) real-time streaming analytics  
- (B) provides  
- (C) by replicating  
- (D) zone  

* **Detailed Explanation:**
  - Error is in part (D): The word "multiple" is an adjective denoting plurality and must modify a plural countable noun. *"multiple availability zone"* is incorrect; it must be **"multiple availability zones"**.
  - **Correct Answer:** **(D)**

### Q9. Misplaced Conditional Tense (If Clause)
**Question:** Choose the correct grammatical improvement for the underlined portion:  
> *If the network administrator **would have updated** the firewall certificates on time, the client connection timeout would not have occurred.*  

- (A) had updated  
- (B) would update  
- (C) has updated  
- (D) should have updated  

* **Detailed Explanation:**
  - **Rule (Third Conditional):** An unreal past condition requires the format:  
    $$\text{If} + \text{Past Perfect } (had + V_3), \dots \text{would have } + V_3$$
  - It is a classic error to use *"would have"* inside the *if-clause*.
  - Correct phrasing: *"If the network administrator **had updated** the firewall certificates..."*
  - **Correct Answer:** **(A)**

### Q10. Pronoun-Antecedent Agreement
**Question:** Identify the error:  
> *Each of the project engineers must submit **(A) their** weekly sprint progress report **(B) to the delivery manager** before the sprint review meeting **(C) scheduled for** Friday afternoon **(D) commences**.*  

- (A) their  
- (B) to the delivery manager  
- (C) scheduled for  
- (D) commences  

* **Detailed Explanation:**
  - **Rule:** *"Each"* is an indefinite pronoun that is strictly **singular**.
  - In formal grammar (as tested in Infosys and TCS assessments), a singular indefinite pronoun requires a singular possessive pronoun (*his or her* or *his*). Using the plural *"their"* with *"Each"* is a pronoun-antecedent agreement error.
  - **Correct Answer:** **(A)**

---

## 4. Para Jumbles (Sentence Rearrangement - 3 Real Exam Questions)

### Q11. Four-Sentence Sequential Jumble
**Question:** Arrange the sentences (P, Q, R, S) in the most coherent and logical order:  
> **P:** This granular visibility enables engineering teams to identify exact latency bottlenecks within milliseconds.  
> **Q:** Distributed tracing tools assign a unique cryptographic trace ID to every incoming client HTTP request.  
> **R:** As this request propagates across microservices, databases, and third-party APIs, each hop records its execution duration.  
> **S:** Consequently, end-to-end debugging in modern microservice architectures has transitioned from manual log correlation to automated visualization.  

- (A) Q - R - P - S  
- (B) R - Q - S - P  
- (C) Q - P - R - S  
- (D) S - Q - R - P  

* **Detailed Step-by-Step Logic:**
  1. Identify the **independent introductory sentence**: Sentence **Q** introduces the core concept (*"Distributed tracing tools assign a unique cryptographic trace ID..."*).
  2. Look for chronological transition: Sentence **R** begins with *"As this request propagates..."*, directly referring to *"every incoming client HTTP request"* introduced in Q. Thus, **Q $\rightarrow$ R** is a mandatory pair.
  3. Look for effect: Sentence **P** states *"This granular visibility enables..."*, referring to the execution durations recorded in R. Thus, **R $\rightarrow$ P** is connected.
  4. Look for concluding consequence: Sentence **S** starts with *"Consequently..."* and summarizes the broader industry transformation.
  5. Sequence: **Q - R - P - S**.
  - **Correct Answer:** **(A)**

### Q12. Cause-and-Effect Logical Flow
**Question:** Arrange the following sentences to form a meaningful paragraph:  
> **P:** Without sufficient cooling, the silicon dies experience thermal throttling, reducing CPU clock frequencies.  
> **Q:** High-performance data centers generate unprecedented thermal energy due to continuous AI workload computation.  
> **R:** To counteract this, modern hyperscalers are investing heavily in direct-to-chip liquid cooling systems.  
> **S:** This degradation in processing speed severely impacts the strict Service Level Agreements (SLAs) promised to enterprise clients.  

- (A) Q - P - S - R  
- (B) Q - R - P - S  
- (C) P - S - Q - R  
- (D) R - Q - P - S  

* **Detailed Step-by-Step Logic:**
  1. Sentence **Q** introduces the root cause: high thermal energy in data centers.
  2. Sentence **P** describes the physical consequence: without cooling, thermal throttling occurs.
  3. Sentence **S** describes the business consequence: *"This degradation in processing speed..."* links directly to the reduced clock frequencies in P.
  4. Sentence **R** provides the solution: *"To counteract this, modern hyperscalers are investing..."*
  5. Flow: Root Problem (Q) $\rightarrow$ Physical Impact (P) $\rightarrow$ Business Consequence (S) $\rightarrow$ Strategic Solution (R).
  - **Correct Answer:** **(A)**

---

## 5. Critical Reasoning (Assumptions, Inferences & Arguments)

### Q13. Identifying Underlying Assumption
**Question:**  
> **Statement:** *"The management of Infosys has announced that all Systems Engineers must complete at least three certifications on the Lex platform per year to qualify for an 'Exceeds Expectations' (EE) performance rating."*  
> 
> **Assumptions:**  
> I. Lex certifications provide a measurable indicator of an engineer's continuous technical upskilling.  
> II. All Systems Engineers will easily pass all three certifications on their first attempt.  

- (A) Only Assumption I is implicit.  
- (B) Only Assumption II is implicit.  
- (C) Both Assumptions I and II are implicit.  
- (D) Neither Assumption I nor II is implicit.  

* **Detailed Solution:**
  - An assumption is something taken for granted or assumed true by the speaker before making the announcement.
  - The management links Lex certifications to a high performance rating (EE) because they assume these certifications genuinely measure upskilling (Assumption I is valid and implicit).
  - The management does NOT assume that everyone will find it "easy" or pass on their first attempt; high ratings are meant to reward effort, not triviality. (Assumption II is invalid).
  - **Correct Answer:** **(A)**

### Q14. Weakening an Argument
**Question:**  
> **Argument:** *"Company Alpha implemented a four-day work week for its software development teams. Within six months, overall employee satisfaction increased by 35%, and code repository commit frequency rose by 15%. Therefore, all IT service companies should transition to a four-day work week to maximize developer productivity."*  
> 
> **Which of the following, if true, most seriously weakens the argument above?**  
- (A) Employees at Company Alpha reported spending more time on hobbies and personal wellness.  
- (B) The 15% increase in commits was driven by developers breaking large pull requests into multiple tiny, trivial single-line changes to satisfy management metrics.  
- (C) Other IT companies have successfully used two monitor workstations to boost programmer speed.  
- (D) Several managers at Company Alpha occasionally answered client emails on Fridays.  

* **Detailed Solution:**
  - The argument concludes that *productivity maximized* based on *commit frequency rising by 15%*.
  - Option (B) demonstrates that the metric was gamed: the increase in commits was illusory (trivial single-line changes rather than actual productive output). This directly breaks the link between the evidence and the conclusion.
  - **Correct Answer:** **(B)**

---

## 6. Sentence Completion & Vocabulary in Context

### Q15. Double Blank Context Clues
**Question:** Select the pair of words that best fits the blanks:  
> *Because the project deadline was imminent, the lead architect decided to ________ non-essential feature requests and maintain an ________ focus on the critical payment gateway integration.*  

- (A) amplify ... ephemeral  
- (B) defer ... unrelenting  
- (C) expedite ... ambivalent  
- (D) instigate ... sporadic  

* **Detailed Solution:**
  - Context: Deadline is imminent $\implies$ non-essential features must be postponed, delayed, or set aside (**defer**).
  - Focus on critical gateway must be intense, strict, continuous (**unrelenting**).
  - Definitions:
    - *Defer* = postpone / put off.
    - *Unrelenting* = not yielding in determination or severity.
  - **Correct Answer:** **(B)**
