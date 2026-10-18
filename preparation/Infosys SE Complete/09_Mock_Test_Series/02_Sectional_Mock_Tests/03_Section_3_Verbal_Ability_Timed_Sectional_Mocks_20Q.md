# 📖 Section 3: Verbal Ability — Timed Sectional Mock Tests (20 Questions | 20 Minutes)

> **Official Pattern:** Section 3 of Infosys Systems Engineer (SE) Exam  
> **Allotted Time:** 20 Minutes (Countdown Timer)  
> **Question Count:** 20 Questions per Mock Paper  
> **Passing Benchmark:** 14+ Marks (70% Accuracy)  
> **Negative Marking:** Zero (0)

---

## 📝 SECTIONAL MOCK TEST 01 (20 Questions | 20 Mins)

### Passage for Questions 1 to 5 (Reading Comprehension)
The transition toward cloud-native software architectures has revolutionized modern enterprise IT systems. Unlike monolithic applications where components are tightly coupled into a single deployable binary, microservices decouple services into lightweight, independently scalable autonomous units communicating via lightweight protocols such as REST or gRPC. However, this architectural decoupling introduces significant operational complexities: distributed data management, network latency overheads, and eventual consistency dilemmas. Container orchestration platforms like Kubernetes have emerged as standard tooling to manage container lifecycles, health probes, automated horizontal pod autoscaling, and service discovery across multi-cloud environments.

#### Question 1
What is the primary architectural differentiator between monolithic systems and microservices discussed in the passage?  
- A) Monoliths use distributed data management  
- B) Microservices decouple components into lightweight, independently scalable units  
- C) Monoliths communicate exclusively through gRPC protocols  
- D) Microservices eliminate all operational complexities  
**Correct Answer:** B  
**Solution:** The passage explicitly states that microservices decouple services into lightweight, independently scalable autonomous units, unlike tightly coupled monoliths.

#### Question 2
According to the passage, which operational trade-off is introduced by microservice decoupling?  
- A) Inability to deploy to cloud providers  
- B) Distributed data management and network latency overheads  
- C) Complete elimination of REST APIs  
- D) Total absence of container orchestration  
**Correct Answer:** B  
**Solution:** The text highlights distributed data management, network latency overheads, and eventual consistency dilemmas as direct consequences of decoupling.

#### Question 3
The term 'eventual consistency' in the passage most closely relates to:  
- A) Immediate hardware memory synchronization  
- B) Asynchronous data convergence across distributed storage nodes over time  
- C) Total failure of database transactions  
- D) Rigid ACID compliance across a single server  
**Correct Answer:** B  
**Solution:** In distributed systems, eventual consistency implies that replicas converge to the same data state asynchronously over time rather than instantaneously.

#### Question 4
Based on the passage, what critical role does Kubernetes fulfill?  
- A) Compiling source code into binary executables  
- B) Orchestrating container lifecycles, autoscaling, and service discovery  
- C) Serving as a relational database engine  
- D) Eliminating the need for microservices  
**Correct Answer:** B  
**Solution:** The passage describes Kubernetes as an orchestration platform managing container lifecycles, health probes, autoscaling, and service discovery.

#### Question 5
What is the overall tone of the passage?  
- A) Cynical and disparaging  
- B) Objective, informative, and balanced  
- C) Unconditionally enthusiastic  
- D) Skeptical and nostalgic  
**Correct Answer:** B  
**Solution:** The passage presents both the advantages (scalability, autonomy) and the trade-offs (latency, distributed state complexity) in an analytical, balanced tone.

---

### Questions 6 to 10 (Sentence Correction & Spotting Errors)

#### Question 6
Identify the sentence fragment with a grammatical error:  
`Neither the lead architect [A] / nor the software developers [B] / was able to resolve [C] / the production memory leak. [D]`  
- A) A  
- B) B  
- C) C  
- D) D  
**Correct Answer:** C  
**Solution:** When subjects are joined by 'neither... nor', the verb must agree with the closer subject. The closer subject 'software developers' is plural; therefore, the verb must be 'were able to resolve', not 'was able'.

#### Question 7
Select the grammatically correct version:  
`Having finished the compilation, the error log was inspected by Priya.`  
- A) Having finished the compilation, the error log was inspected by Priya.  
- B) Having finished the compilation, Priya inspected the error log.  
- C) Priya, having finished the compilation, the error log was inspected.  
- D) The error log, having finished the compilation, was inspected by Priya.  
**Correct Answer:** B  
**Solution:** In option A, the participial phrase 'Having finished the compilation' incorrectly modifies 'the error log' (dangling modifier). Option B correctly places Priya immediately after the introductory participial clause.

#### Question 8
Identify the incorrect segment:  
`The team has been working [A] / on this microservice module [B] / since three weeks [C] / without taking any leave. [D]`  
- A) A  
- B) B  
- C) C  
- D) D  
**Correct Answer:** C  
**Solution:** 'Since' is used for a specific point in time (e.g., since Monday, since 2024). For a duration of time ('three weeks'), the preposition 'for' must be used: 'for three weeks'.

#### Question 9
`If the server will fail, the standby replica will automatically initiate failover.`  
Choose the best replacement for the underlined part:  
- A) If the server fails  
- B) If the server failed  
- C) If the server would fail  
- D) No improvement  
**Correct Answer:** A  
**Solution:** In a first conditional statement expressing future probability, the conditional 'if' clause takes the simple present tense ('If the server fails'), not 'will fail'.

#### Question 10
`The new encryption protocol is more superior than the legacy hashing mechanism.`  
Identify the error:  
- A) 'more superior than' should be replaced by 'superior to'  
- B) 'more superior than' should be replaced by 'more superior to'  
- C) 'hashing mechanism' should be 'hashing mechanisms'  
- D) No error  
**Correct Answer:** A  
**Solution:** Adjectives of Latin origin ending in '-ior' (superior, inferior, senior, junior, prior) take the preposition 'to' rather than 'than', and never take the double comparative modifier 'more'.

---

### Questions 11 to 15 (Para Jumbles & Sentence Rearrangement)

#### Question 11
Rearrange the sentences into a coherent paragraph:  
- P: These automated test suites execute regression checks on every pull request.  
- Q: Modern Continuous Integration (CI) pipelines streamline software delivery.  
- R: Consequently, integration defects are caught within minutes of code commit.  
- S: As part of the pipeline, developer changes trigger isolated containerized test builds.  
- A) Q - S - P - R  
- B) Q - P - S - R  
- C) S - P - Q - R  
- D) P - Q - S - R  
**Correct Answer:** A  
**Solution:** Q introduces the primary subject (CI pipelines). S details what happens as part of the pipeline (isolated containerized builds). P elaborates on the test suites. R concludes with the logical consequence ('Consequently... defects caught'). Correct order: Q-S-P-R.

#### Question 12
Rearrange the sentences:  
- P: However, without rigorous database indexing, query execution times degrade exponentially.  
- Q: Relational databases allow structured querying via standardized SQL statements.  
- R: B-tree indexes enable $O(\log N)$ lookup performance by maintaining sorted keys.  
- S: Therefore, database administrators must systematically analyze slow-query logs.  
- A) Q - P - R - S  
- B) Q - R - P - S  
- C) P - Q - R - S  
- D) R - Q - P - S  
**Correct Answer:** A  
**Solution:** Q introduces relational databases and SQL. P introduces the contrasting challenge ('However, without indexing...'). R provides the technical solution (B-tree indexes). S gives the resulting administrative action ('Therefore...'). Correct order: Q-P-R-S.

#### Question 13
Rearrange the sentences:  
- P: He founded Infosys in 1981 alongside six other software engineers.  
- Q: N. R. Narayana Murthy is recognized as a pioneer of the Indian IT industry.  
- R: Under his visionary stewardship, the company pioneered the Global Delivery Model.  
- S: This model successfully demonstrated that high-quality software could be engineered offshore.  
- A) Q - P - R - S  
- B) Q - R - P - S  
- C) P - Q - R - S  
- D) Q - S - P - R  
**Correct Answer:** A  
**Solution:** Q introduces Narayana Murthy. P states his founding of Infosys. R explains the Global Delivery Model under his leadership. S clarifies what 'This model' demonstrated. Order: Q-P-R-S.

#### Question 14
Rearrange the sentences:  
- P: This rapid feedback cycle prevents compounding defects.  
- Q: Agile methodology emphasizes iterative development cycles known as sprints.  
- R: At the conclusion of each sprint, stakeholders review the working increment.  
- S: Feedback collected is immediately prioritized for the upcoming iteration.  
- A) Q - R - S - P  
- B) Q - P - R - S  
- C) R - S - Q - P  
- D) Q - S - R - P  
**Correct Answer:** A  
**Solution:** Q defines Agile sprints. R describes the end of the sprint review. S explains the feedback prioritization. P describes the resulting benefit ('This rapid feedback cycle'). Order: Q-R-S-P.

#### Question 15
Rearrange the sentences:  
- P: Such vulnerabilities permit attackers to bypass frontend validation controls.  
- Q: Secure coding standards require sanitizing all incoming HTTP payload parameters.  
- R: Failure to implement input validation exposes APIs to SQL injection exploits.  
- S: Consequently, malicious SQL fragments can execute unauthorized queries against the database.  
- A) Q - R - S - P  
- B) R - S - Q - P  
- C) Q - P - R - S  
- D) R - P - S - Q  
**Correct Answer:** A  
**Solution:** Q introduces the security rule (sanitizing parameters). R states the consequence of failure (SQL injection). S explains how malicious fragments execute. P summarizes the broader security risk. Order: Q-R-S-P.

---

### Questions 16 to 20 (Sentence Completion & Vocabulary)

#### Question 16
The cloud engineer implemented caching to _______ latency and enhance throughput across the distributed platform.  
- A) exacerbate  
- B) attenuate  
- C) proliferate  
- D) accentuate  
**Correct Answer:** B  
**Solution:** 'Attenuate' means to reduce the force, value, or magnitude of something (here, latency). 'Exacerbate' means to worsen.

#### Question 17
Despite the tight project schedule, the developer adhered _______ to corporate coding standards and unit test coverage.  
- A) meticulously  
- B) haphazardly  
- C) reluctantly  
- D) perfunctorily  
**Correct Answer:** A  
**Solution:** 'Meticulously' means with great attention to detail and thoroughness, which fits the context of maintaining high standards under pressure.

#### Question 18
The architectural audit revealed that the legacy monolith was _______ with obsolete libraries and undocumented dependencies.  
- A) rife  
- B) barren  
- C) devoid  
- D) scarce  
**Correct Answer:** A  
**Solution:** 'Rife with' means widespread or full of something undesirable (here, obsolete libraries and undocumented dependencies).

#### Question 19
The lead architect's explanation was so _______ that even junior interns quickly grasped the complex consensus algorithm.  
- A) opaque  
- B) lucid  
- C) convoluted  
- D) ambiguous  
**Correct Answer:** B  
**Solution:** 'Lucid' means clearly expressed and easy to understand.

#### Question 20
Select the word opposite in meaning (Antonym) to **EPHEMERAL**:  
- A) Transient  
- B) Perpetual  
- C) Fleeting  
- D) Evanescent  
**Correct Answer:** B  
**Solution:** 'Ephemeral' means lasting for a very short time. Its exact antonym is 'Perpetual' (lasting forever or indefinitely).
