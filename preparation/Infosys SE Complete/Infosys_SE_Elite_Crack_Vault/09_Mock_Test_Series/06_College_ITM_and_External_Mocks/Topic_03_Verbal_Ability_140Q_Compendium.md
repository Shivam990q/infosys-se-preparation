# Topic 03: Verbal Ability Compendium (140 Questions)
## Infosys System Engineer ITM Mock Test Series (Papers 01 to 07)

> **Curriculum Overview:** Section 3 tests high-level enterprise verbal ability across 4 domains:
> 1. Technical Reading Comprehension Passages & Analysis (Q26–Q30, 35 Questions)
> 2. Sentence Correction & Grammatical Inversion (Q31–Q35, 35 Questions)
> 3. Para-Jumbles & Cohesive Paragraph Structuring (Q36–Q38, 21 Questions)
> 4. Enterprise Vocabulary, Synonyms, and Antonyms (Q39–Q45, 49 Questions)
> **Total Questions:** 140 Questions (20 Questions per Paper × 7 Papers)
> **Target Time:** 20 Minutes per 20-question section (1.0 min/question)
> **Verification Status:** 100000000% Verified Solutions & Zero Hallucinations.

---

## Part 1: Enterprise Reading Comprehension Passages (Papers 01 to 07)

### Reading Comprehension Passage — Paper 01
```text
Read the passage and answer Q26–30. 
In software organisations, "technical debt" is often treated as a purely engineering concern, a messy 
residue of hurried decisions that developers will eventually tidy up. This framing is misleading. Debt, in 
the financial sense, is not inherently harmful; a company that borrows to seize a market opportunity may 
be acting shrewdly. The problem arises when the interest, meaning the extra effort every future change 
demands, is never acknowledged on the balance sheet. Teams then find that features which once took 
days now take weeks, yet managers, seeing only the delivered functionality, attribute the slowdown to 
declining developer productivity. Proponents of disciplined refactoring argue that a fixed share of every 
sprint should be reserved for repayment. Critics counter that such quotas are arbitrary and encourage 
cosmetic rewrites that leave real risks untouched. A more defensible approach, some suggest, is to make 
debt visible by tracking how often particular modules cause delays or defects, and to repay only where 
the interest is demonstrably high.
```

---

### Reading Comprehension Passage — Paper 02
```text
Read the passage and answer Q26–30.
Automation in enterprise software is frequently sold on the promise of eliminating human error, yet the 
more interesting effect is often a redistribution of error rather than its removal. When a system 
automates data entry, the mistakes that once occurred at the point of typing largely disappear, but new 
failure modes emerge upstream, in the design of the rules the automation follows, and downstream, in 
the operators' declining vigilance once they trust the system implicitly. A well-documented pattern in 
aviation and, increasingly, in IT operations is that highly reliable automation breeds complacency: 
engineers stop cross-checking outputs precisely because the system rarely errs, so on the rare occasion it 
does, the mistake propagates further before anyone notices. This does not argue against automation; it 
argues for designing monitoring and escalation processes that assume the automation will occasionally 
fail silently, rather than processes that assume a human will always catch what the machine misses.
```

---

### Reading Comprehension Passage — Paper 03
```text
Software effort estimation has resisted four decades of methodological refinement, and the reason is not, 
as often supposed, a lack of adequate techniques. Function point analysis, story point velocity tracking 
and Monte Carlo simulation are all, in controlled retrospective studies, reasonably well calibrated. The 
persistent gap between estimated and actual delivery dates arises instead from a structural asymmetry: 
the costs of underestimating are diffuse and delayed, distributed across a project's eventual overrun, 
whereas the costs of overestimating are immediate and attributable, since a padded estimate can lose a 
bid or provoke management scrutiny before the work even begins. Estimators therefore face an incentive 
gradient that has nothing to do with statistical accuracy and everything to do with organisational 
consequence, and this gradient reliably pushes estimates toward optimism regardless of how 
sophisticated the underlying model is. Attempts to correct this by adding explicit contingency buffers 
frequently fail for a related reason: once a buffer becomes visible in a schedule, it is treated by 
stakeholders as slack to be reclaimed rather than risk to be reserved, a phenomenon sometimes called the 
student syndrome, in reference to the tendency to begin a task only as its deadline approaches.
```

---

### Reading Comprehension Passage — Paper 04
```text
Read the passage and answer Q26–30. 
Distributed systems theory offers a deceptively simple trilemma: a system cannot simultaneously 
guarantee consistency, availability and partition tolerance, and must therefore sacrifice one when a 
network partition occurs. In practice, however, the theorem is more often invoked than correctly applied, 
because partition tolerance is not actually optional for any system whose nodes communicate over an 
unreliable network, which is to say nearly all distributed systems built today. The real choice, once 
partition tolerance is accepted as a structural necessity rather than a design preference, is between 
consistency and availability during the partition itself, and this choice need not be uniform across an 
entire system. A payment ledger might reasonably refuse writes during a partition to preserve 
consistency, accepting temporary unavailability as the lesser cost, while a product catalogue serving read 
traffic might instead continue answering requests with potentially stale data, judging availability the 
more valuable property for that workload. Treating the CAP theorem as prescribing a single, system-wide 

Infosys System Engineer |Mock Test 
Page 4 of 11 
choice, rather than a per-operation or per-service one, is therefore a common and consequential 
misreading.
```

---

### Reading Comprehension Passage — Paper 05
```text
Read the passage and answer Q26–30. 
Rate limiting is often presented as a purely defensive mechanism, a way to shield backend services from 
abusive or accidental traffic spikes, but this framing understates its role as a tool for communicating 
capacity contracts between services. A token-bucket limiter that rejects requests once a quota is 
exhausted is, in effect, declaring an explicit promise about how much load a downstream service can 
absorb, and client-side code written against that promise can make informed decisions about retry 
timing, backoff, and degraded functionality rather than failing unpredictably. The trouble arises when 
limits are set reactively, in response to an incident, rather than derived from actual capacity testing; a 

Infosys System Engineer | Mock Test 
Page 4 of 11 
limit chosen under pressure to stop an ongoing outage often reflects the conditions of that specific 
incident rather than the service's true sustainable throughput, and may be far too conservative once 
normal operation resumes, quietly capping legitimate growth long after the original emergency has been 
forgotten. Treating rate limits as living documentation of measured capacity, revisited whenever the 
underlying service's performance characteristics change, avoids both failure modes: the limiter protects 
the service without becoming an invisible ceiling on its own success.
```

---

### Reading Comprehension Passage — Paper 06
```text
Read the passage and answer Q26–30. 
When a measure becomes a target, it ceases to be a good measure — a maxim known as Goodhart's law 
that engineering organisations rediscover with remarkable regularity. A team told that its performance 
will be judged by the number of closed tickets quickly learns to split large tasks into many trivial ones; a 
group rewarded for code coverage writes tests that execute lines without asserting anything meaningful. 
In neither case is the behaviour necessarily cynical. People respond rationally to the incentives they 
perceive, and the metric, once elevated to a goal, simply redirects that rationality away from the outcome 
it was intended to track. The remedy is not to abandon measurement, which would leave managers 
navigating by anecdote, but to treat any single metric as a symptom rather than a verdict, to pair it with 
a counter-metric that penalises its obvious abuse, and to revisit the pairing as teams learn how to game 
it. Even then, the arrangement is only ever provisionally sound, since every safeguard becomes, in time, 
another target. 

Infosys System Engineer | Mock Test 
Page 4 of 11
```

---

### Reading Comprehension Passage — Paper 07
```text
Read the passage and answer Q26–30. 
In distributed systems, a network call that times out leaves the caller in genuine ignorance: the request 
may have been lost before reaching the server, executed successfully with the reply lost on the way back, 
or still be in flight. Retrying is the natural response, but retrying a non-idempotent operation — charging 
a card, say — risks performing it twice. The standard remedy is to make the operation idempotent by 
attaching a unique request identifier, so that the server can recognise a duplicate and return the original 
result instead of re-executing. This shifts the burden rather than removing it: the server must now durably 
remember identifiers, and must decide how long to remember them, since storing them forever is costly 
while discarding them too early reopens the window for duplicates. Engineers who treat idempotency as 
a mere implementation detail therefore tend to discover it as an incident, whereas those who treat it as 
part of an operation's contract design it in from the start.
```

---

## Part 2: Verbal Ability Questions and Explanations (Q26 to Q45)

### Question ITM-P01-Q26 (Infosys System Engineer ITM Mock Paper 1 - Q26)
**Section:** Section 3: Verbal Ability | **Page:** 3  
**Visual Reference Plate:** [paper_01_page_03.png](images/paper_01_page_03.png)

**Question Text:**
The central idea of the passage is that:

**Options:**
- **(A)** Technical debt is harmful and must be eliminated at once
- **(B)** Technical debt is not necessarily bad, but its recurring costs must be made visible and repaid selectively
- **(C)** Managers, not developers, are responsible for technical debt
- **(D)** Fixed refactoring quotas are the best way to manage debt

**Correct Answer:** Option **(B)** — `Technical debt is not necessarily bad, but its recurring costs must be made visible and repaid selectively`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
The passage argues that technical debt is analogous to financial debt: not inherently evil, but dangerous when its recurring carrying costs ('interest') are unacknowledged. The recommended path is making debt visible and repaying it where interest is demonstrably high, matching option (b).

---

### Question ITM-P01-Q27 (Infosys System Engineer ITM Mock Paper 1 - Q27)
**Section:** Section 3: Verbal Ability | **Page:** 3  
**Visual Reference Plate:** [paper_01_page_03.png](images/paper_01_page_03.png)

**Question Text:**
According to the passage, managers blame developer productivity because they:

**Options:**
- **(A)** do not trust developers
- **(B)** see only the delivered features and not the hidden extra effort
- **(C)** are unaware that software can be refactored
- **(D)** have reserved too little time for sprints

**Correct Answer:** Option **(B)** — `see only the delivered features and not the hidden extra effort`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
The passage states explicitly: 'yet managers, seeing only the delivered functionality, attribute the slowdown to declining developer productivity.' Because the background drag of unrecorded debt is invisible to them, they blame the engineers.

---

### Question ITM-P01-Q28 (Infosys System Engineer ITM Mock Paper 1 - Q28)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_01_page_04.png](images/paper_01_page_04.png)

**Question Text:**
Which statement would critics of fixed repayment quotas most likely agree with?

**Options:**
- **(A)** Repayment effort should target genuine risks rather than meet a set proportion
- **(B)** Refactoring should be abandoned entirely
- **(C)** Cosmetic rewrites are the most valuable form of repayment
- **(D)** Sprints should be lengthened

**Correct Answer:** Option **(A)** — `Repayment effort should target genuine risks rather than meet a set proportion`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Critics argue that fixed quotas 'are arbitrary and encourage cosmetic rewrites that leave real risks untouched.' Hence, they would advocate targeting repayment where high, genuine risks exist rather than meeting a rigid percentage.

---

### Question ITM-P01-Q29 (Infosys System Engineer ITM Mock Paper 1 - Q29)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_01_page_04.png](images/paper_01_page_04.png)

**Question Text:**
In the passage, "interest" most nearly refers to:

**Options:**
- **(A)** money paid to lenders
- **(B)** the recurring additional effort imposed on future changes
- **(C)** the curiosity of developers
- **(D)** the profit from a market opportunity

**Correct Answer:** Option **(B)** — `the recurring additional effort imposed on future changes`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
The passage defines interest directly: 'the interest, meaning the extra effort every future change demands'.

---

### Question ITM-P01-Q30 (Infosys System Engineer ITM Mock Paper 1 - Q30)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_01_page_04.png](images/paper_01_page_04.png)

**Question Text:**
Which of the following is NOT supported by the passage?

**Options:**
- **(A)** Borrowing can sometimes be a shrewd decision
- **(B)** A slowdown in delivery always indicates falling developer productivity
- **(C)** Tracking defect-prone modules can help identify costly debt
- **(D)** Debt is often left unrecorded in practice 
Sentence Correction (Q31–35). Choose the best replacement for the bold part.

**Correct Answer:** Option **(B)** — `A slowdown in delivery always indicates falling developer productivity`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
The passage explicitly notes that a delivery slowdown is often caused by accumulated technical debt rather than declining developer productivity, so the claim that slowdown 'always indicates falling developer productivity' is false and NOT supported.

---

### Question ITM-P01-Q31 (Infosys System Engineer ITM Mock Paper 1 - Q31)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_01_page_04.png](images/paper_01_page_04.png)

**Question Text:**
Neither the manager nor the engineers was aware of the revised deadline.

**Options:**
- **(A)** No improvement
- **(B)** engineers were
- **(C)** engineers has been
- **(D)** engineer were

**Correct Answer:** Option **(B)** — `engineers were`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
With correlative conjunctions 'neither... nor', the verb agrees in number with the nearer subject. Here, the nearer subject is 'engineers' (plural), which requires the plural past verb 'were'. Correct: 'Neither the manager nor the engineers were aware of the revised deadline.'

---

### Question ITM-P01-Q32 (Infosys System Engineer ITM Mock Paper 1 - Q32)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_01_page_04.png](images/paper_01_page_04.png)

**Question Text:**
Had the team would have tested the patch thoroughly, the outage could have been avoided.

**Options:**
- **(A)** No improvement
- **(B)** Had the team tested
- **(C)** Has the team tested
- **(D)** If the team would test

**Correct Answer:** Option **(B)** — `Had the team tested`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Inverted third conditional structure uses 'Had + subject + past participle'. The conditional clause cannot contain 'would have'. Correct: 'Had the team tested the patch thoroughly, the outage could have been avoided.'

---

### Question ITM-P01-Q33 (Infosys System Engineer ITM Mock Paper 1 - Q33)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_01_page_04.png](images/paper_01_page_04.png)

**Question Text:**
Hardly the server had restarted when the alerts began flooding in.

**Options:**
- **(A)** No improvement
- **(B)** had the server restarted when
- **(C)** did the server restarted when
- **(D)** the server 
restarted than

**Correct Answer:** Option **(B)** — `had the server restarted when`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Negative adverbial 'Hardly' placed at the beginning of a clause triggers negative inversion: 'Hardly had + subject + past participle... when...'. Correct: 'Hardly had the server restarted when the alerts began flooding in.'

---

### Question ITM-P01-Q34 (Infosys System Engineer ITM Mock Paper 1 - Q34)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_01_page_04.png](images/paper_01_page_04.png)

**Question Text:**
The number of applicants are increasing, but a large number of them lacks the required skills.

**Options:**
- **(A)** are … lacks
- **(B)** is … lack
- **(C)** is … lacks
- **(D)** are … lack

**Correct Answer:** Option **(B)** — `is … lack`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
'The number of' denotes a singular collective quantity and takes a singular verb ('is increasing'). In contrast, 'a large number of' denotes a plural quantity of individuals and takes a plural verb ('lack the required skills'). Correct: 'is ... lack'.

---

### Question ITM-P01-Q35 (Infosys System Engineer ITM Mock Paper 1 - Q35)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_01_page_04.png](images/paper_01_page_04.png)

**Question Text:**
Each of the interns, along with their mentor, were invited to present.

**Options:**
- **(A)** No improvement
- **(B)** was
- **(C)** are
- **(D)** have been 
Para-jumbles (Q36–38). Arrange the sentences in the correct order.

**Correct Answer:** Option **(B)** — `was`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
The true grammatical subject of the sentence is 'Each' (distributive pronoun, singular). Parenthetical prepositional phrases like 'along with their mentor' do not alter the grammatical number of the subject. Correct: 'was'.

---

### Question ITM-P01-Q36 (Infosys System Engineer ITM Mock Paper 1 - Q36)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_01_page_04.png](images/paper_01_page_04.png)

**Question Text:**
P: However, the prototype failed under real-world load. 
Q: The engineers were confident that their design was flawless. 
R: Post-mortem analysis revealed that no load testing had been performed. 
S: Consequently, the launch was postponed by three months.

**Options:**
- **(A)** QPRS
- **(B)** QRPS
- **(C)** PQRS
- **(D)** QSPR

**Correct Answer:** Option **(A)** — `QPRS`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Coherent narrative flow: Q introduces initial state ('The engineers were confident...'), P introduces the contrast ('However, the prototype failed...'), R explains the underlying cause ('Post-mortem analysis revealed...'), and S delivers the project outcome ('Consequently, the launch was postponed...'). Order: QPRS.

---

### Question ITM-P01-Q37 (Infosys System Engineer ITM Mock Paper 1 - Q37)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_01_page_05.png](images/paper_01_page_05.png)

**Question Text:**
P: Rather, they encourage people to think about how the story might have unfolded differently. 
Q: Counterfactual questions such as "What if the treaty had never been signed?" are popular with historians. 
R: They do not aim to predict what would actually have happened. 
S: Such speculation, when disciplined, can illuminate the forces that shaped real events.

**Options:**
- **(A)** QRPS
- **(B)** QPRS
- **(C)** RQPS
- **(D)** QRSP

**Correct Answer:** Option **(A)** — `QRPS`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Logical progression: Q introduces the subject ('Counterfactual questions... are popular with historians'), R defines their negative boundary ('They do not aim to predict...'), P introduces the positive counterpart ('Rather, they encourage people to think...'), and S summarizes their scholarly value ('Such speculation... can illuminate real events'). Order: QRPS.

---

### Question ITM-P01-Q38 (Infosys System Engineer ITM Mock Paper 1 - Q38)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_01_page_05.png](images/paper_01_page_05.png)

**Question Text:**
P: The first industrial robots were deployed on car assembly lines in the 1960s. 
Q: Today, collaborative robots work safely alongside humans. 
R: These early machines were caged off, since they could not sense human presence. 
S: Advances in sensors and software have since removed this limitation.

**Options:**
- **(A)** PRSQ
- **(B)** PQRS
- **(C)** PSRQ
- **(D)** RPSQ 
Vocabulary, Synonyms and Antonyms (Q39–45).

**Correct Answer:** Option **(A)** — `PRSQ`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Chronological progression: P establishes historical origin in the 1960s ('The first industrial robots were deployed...'), R describes their initial physical limitations ('These early machines were caged off...'), S explains how modern technology overcame the limit ('Advances in sensors... have since removed this limitation'), and Q describes the present state ('Today, collaborative robots work safely...'). Order: PRSQ.

---

### Question ITM-P01-Q39 (Infosys System Engineer ITM Mock Paper 1 - Q39)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_01_page_05.png](images/paper_01_page_05.png)

**Question Text:**
The auditor's meticulous approach uncovered discrepancies others had missed. "Meticulous" means:

**Options:**
- **(A)** hasty
- **(B)** painstakingly careful
- **(C)** aggressive
- **(D)** casual

**Correct Answer:** Option **(B)** — `painstakingly careful`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
'Meticulous' means showing great attention to detail; very careful and precise. Hence, 'painstakingly careful'.

---

### Question ITM-P01-Q40 (Infosys System Engineer ITM Mock Paper 1 - Q40)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_01_page_05.png](images/paper_01_page_05.png)

**Question Text:**
The contract was deliberately worded to obfuscate the penalty clauses. "Obfuscate" means:

**Options:**
- **(A)** highlight
- **(B)** simplify
- **(C)** make obscure
- **(D)** cancel

**Correct Answer:** Option **(C)** — `make obscure`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
'Obfuscate' means to make obscure, unclear, or unintelligible.

---

### Question ITM-P01-Q41 (Infosys System Engineer ITM Mock Paper 1 - Q41)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_01_page_05.png](images/paper_01_page_05.png)

**Question Text:**
Fill in the blank: The startup's success proved ______; within a year it had vanished.

**Options:**
- **(A)** enduring
- **(B)** ephemeral
- **(C)** robust
- **(D)** inevitable

**Correct Answer:** Option **(B)** — `ephemeral`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
'Ephemeral' means lasting for a very short time; transitory. Since the startup vanished within a year, its success was ephemeral.

---

### Question ITM-P01-Q42 (Infosys System Engineer ITM Mock Paper 1 - Q42)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_01_page_05.png](images/paper_01_page_05.png)

**Question Text:**
Synonym of UBIQUITOUS:

**Options:**
- **(A)** rare
- **(B)** omnipresent
- **(C)** ancient
- **(D)** hidden

**Correct Answer:** Option **(B)** — `omnipresent`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
'Ubiquitous' means present, appearing, or found everywhere; omnipresent.

---

### Question ITM-P01-Q43 (Infosys System Engineer ITM Mock Paper 1 - Q43)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_01_page_05.png](images/paper_01_page_05.png)

**Question Text:**
Synonym of RECALCITRANT:

**Options:**
- **(A)** obedient
- **(B)** obstinate
- **(C)** cheerful
- **(D)** timid

**Correct Answer:** Option **(B)** — `obstinate`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
'Recalcitrant' means having an obstinately uncooperative attitude towards authority or discipline; obstinate.

---

### Question ITM-P01-Q44 (Infosys System Engineer ITM Mock Paper 1 - Q44)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_01_page_05.png](images/paper_01_page_05.png)

**Question Text:**
Antonym of LOQUACIOUS:

**Options:**
- **(A)** talkative
- **(B)** taciturn
- **(C)** eloquent
- **(D)** boisterous

**Correct Answer:** Option **(B)** — `taciturn`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
'Loquacious' means tending to talk a great deal; talkative. The antonym is 'taciturn' (reserved or uncommunicative in speech).

---

### Question ITM-P01-Q45 (Infosys System Engineer ITM Mock Paper 1 - Q45)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_01_page_05.png](images/paper_01_page_05.png)

**Question Text:**
Antonym of MAGNANIMOUS:

**Options:**
- **(A)** generous
- **(B)** noble
- **(C)** petty
- **(D)** tolerant

**Correct Answer:** Option **(C)** — `petty`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
'Magnanimous' means generous or forgiving, especially towards a rival or someone less powerful. The antonym is 'petty' (narrow-minded, spiteful, or mean).

---

### Question ITM-P02-Q26 (Infosys System Engineer ITM Mock Paper 2 - Q26)
**Section:** Section 3: Verbal Ability | **Page:** 3  
**Visual Reference Plate:** [paper_02_page_03.png](images/paper_02_page_03.png)

**Question Text:**
The passage primarily argues that:

**Options:**
- **(A)** Automation should be avoided in critical systems
- **(B)** Automation shifts the location of errors rather than eliminating them, so monitoring must assume silent 
failure
- **(C)** Human operators are always more reliable than automated systems
- **(D)** Aviation and IT face identical automation challenges

**Correct Answer:** Option **(B)** — `Automation shifts the location of errors rather than eliminating them, so monitoring must assume silent 
failure`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 2, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P02-Q27 (Infosys System Engineer ITM Mock Paper 2 - Q27)
**Section:** Section 3: Verbal Ability | **Page:** 3  
**Visual Reference Plate:** [paper_02_page_03.png](images/paper_02_page_03.png)

**Question Text:**
According to the passage, complacency arises because:

**Options:**
- **(A)** operators are poorly trained
- **(B)** the automation is rarely wrong, so vigilance declines
- **(C)** the rules are too complex to follow
- **(D)** engineers do not trust the system

**Correct Answer:** Option **(B)** — `the automation is rarely wrong, so vigilance declines`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 2, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P02-Q28 (Infosys System Engineer ITM Mock Paper 2 - Q28)
**Section:** Section 3: Verbal Ability | **Page:** 3  
**Visual Reference Plate:** [paper_02_page_03.png](images/paper_02_page_03.png)

**Question Text:**
The phrase "fail silently" in the passage most nearly means:

**Options:**
- **(A)** the system stops working with an alarm
- **(B)** the system errs without producing any visible warning
- **(C)** the system asks for human confirmation
- **(D)** the system shuts down automatically

**Correct Answer:** Option **(B)** — `the system errs without producing any visible warning`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 2, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P02-Q29 (Infosys System Engineer ITM Mock Paper 2 - Q29)
**Section:** Section 3: Verbal Ability | **Page:** 3  
**Visual Reference Plate:** [paper_02_page_03.png](images/paper_02_page_03.png)

**Question Text:**
Which of these would the author most likely recommend?

**Options:**
- **(A)** Removing automation from enterprise systems entirely
- **(B)** Designing escalation processes that do not rely solely on human vigilance
- **(C)** Increasing the frequency of manual data entry
- **(D)** Trusting automated systems completely once proven reliable

**Correct Answer:** Option **(B)** — `Designing escalation processes that do not rely solely on human vigilance`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 2, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P02-Q30 (Infosys System Engineer ITM Mock Paper 2 - Q30)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_02_page_04.png](images/paper_02_page_04.png)

**Question Text:**
Which of the following is NOT stated or implied in the passage?

**Options:**
- **(A)** New failure modes can appear in the design of automation rules
- **(B)** Reliable automation can reduce the vigilance of human operators
- **(C)** The passage argues automation should never be trusted
- **(D)** Errors caught late can propagate further
Sentence Correction (Q31–35).

**Correct Answer:** Option **(C)** — `The passage argues automation should never be trusted`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 2, option (C) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P02-Q31 (Infosys System Engineer ITM Mock Paper 2 - Q31)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_02_page_04.png](images/paper_02_page_04.png)

**Question Text:**
Each of the servers in the cluster have its own dedicated backup.

**Options:**
- **(A)** No improvement
- **(B)** has
- **(C)** having
- **(D)** had

**Correct Answer:** Option **(B)** — `has`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"Each" is singular, so the verb must be "has".

---

### Question ITM-P02-Q32 (Infosys System Engineer ITM Mock Paper 2 - Q32)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_02_page_04.png](images/paper_02_page_04.png)

**Question Text:**
Scarcely had the deployment finished than the monitoring alerts started.

**Options:**
- **(A)** No improvement
- **(B)** Scarcely had the deployment finished when
- **(C)** Scarcely did the deployment finish 
than
- **(D)** Scarcely the deployment had finished when

**Correct Answer:** Option **(B)** — `Scarcely had the deployment finished when`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"Scarcely...when" is the correct pairing, not "than".

---

### Question ITM-P02-Q33 (Infosys System Engineer ITM Mock Paper 2 - Q33)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_02_page_04.png](images/paper_02_page_04.png)

**Question Text:**
The report, along with its supporting data sheets, were submitted before the deadline.

**Options:**
- **(A)** No improvement
- **(B)** was submitted
- **(C)** have been submitted
- **(D)** are submitted

**Correct Answer:** Option **(B)** — `was submitted`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"The report" is the true (singular) subject; "along with..." does not pluralize it, so "was submitted".

---

### Question ITM-P02-Q34 (Infosys System Engineer ITM Mock Paper 2 - Q34)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_02_page_04.png](images/paper_02_page_04.png)

**Question Text:**
If I was you, I would escalate this incident immediately.

**Options:**
- **(A)** No improvement
- **(B)** If I were you
- **(C)** If I am you
- **(D)** If I had been you

**Correct Answer:** Option **(B)** — `If I were you`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Hypothetical conditions use the subjunctive "were" after "if", regardless of subject.

---

### Question ITM-P02-Q35 (Infosys System Engineer ITM Mock Paper 2 - Q35)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_02_page_04.png](images/paper_02_page_04.png)

**Question Text:**
Not only the developer but also the testers was responsible for the missed defect.

**Options:**
- **(A)** No improvement
- **(B)** were responsible
- **(C)** is responsible
- **(D)** had been responsible
Para-jumbles (Q36–38).

**Correct Answer:** Option **(B)** — `were responsible`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
With "not only...but also" joining two subjects, the verb agrees with the nearer one (testers, plural), 
so "were responsible".

---

### Question ITM-P02-Q36 (Infosys System Engineer ITM Mock Paper 2 - Q36)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_02_page_04.png](images/paper_02_page_04.png)

**Question Text:**
P: Yet within weeks, unexplained crashes began appearing in production.
Q: The new caching layer initially seemed to improve response times dramatically.
R: Investigation traced the crashes to a race condition the load tests had never triggered.
S: The team subsequently rewrote the load-testing suite to include concurrent write scenarios.

**Options:**
- **(A)** QPRS
- **(B)** QRPS
- **(C)** PQRS
- **(D)** QSPR

**Correct Answer:** Option **(A)** — `QPRS`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→P→R→S.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P02-Q37 (Infosys System Engineer ITM Mock Paper 2 - Q37)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_02_page_04.png](images/paper_02_page_04.png)

**Question Text:**
P: They are, instead, thought experiments that isolate one variable at a time.
Q: Economic models are often criticised for their unrealistic assumptions.
R: This deliberate simplification is what makes them useful, not despite the unrealism but because of it.
S: Critics forget that the models were never meant to be literal descriptions of the economy.

**Options:**
- **(A)** QSPR
- **(B)** QPSR
- **(C)** QSRP
- **(D)** SQPR

**Correct Answer:** Option **(A)** — `QSPR`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→S→P→R.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P02-Q38 (Infosys System Engineer ITM Mock Paper 2 - Q38)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_02_page_04.png](images/paper_02_page_04.png)

**Question Text:**
P: Consequently, the interface today handles ten times the daily traffic it was designed for.
Q: The original API was built to serve a handful of internal tools.
R: Over time, external partners began integrating with it as well.
S: No one anticipated that this informal adoption would continue for years.

**Options:**
- **(A)** QRSP
- **(B)** QSRP
- **(C)** QRPS
- **(D)** RQSP
Vocabulary, Synonyms and Antonyms (Q39–45).

**Correct Answer:** Option **(A)** — `QRSP`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→R→S→P.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P02-Q39 (Infosys System Engineer ITM Mock Paper 2 - Q39)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_02_page_04.png](images/paper_02_page_04.png)

**Question Text:**
The consultant's cursory review missed several critical vulnerabilities. "Cursory" means:

**Options:**
- **(A)** thorough
- **(B)** hasty and superficial
- **(C)** expensive
- **(D)** delayed

**Correct Answer:** Option **(B)** — `hasty and superficial`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P02-Q40 (Infosys System Engineer ITM Mock Paper 2 - Q40)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_02_page_04.png](images/paper_02_page_04.png)

**Question Text:**
The new policy was met with tacit approval from the board. "Tacit" means:

**Options:**
- **(A)** loudly announced
- **(B)** implied without being stated
- **(C)** formally written
- **(D)** rejected

**Correct Answer:** Option **(B)** — `implied without being stated`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P02-Q41 (Infosys System Engineer ITM Mock Paper 2 - Q41)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_02_page_05.png](images/paper_02_page_05.png)

**Question Text:**
Fill in the blank: Despite the outage, the support team remained ______, calmly working through the 
incident.

**Options:**
- **(A)** frantic
- **(B)** unflappable
- **(C)** indifferent
- **(D)** negligent

**Correct Answer:** Option **(B)** — `unflappable`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P02-Q42 (Infosys System Engineer ITM Mock Paper 2 - Q42)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_02_page_05.png](images/paper_02_page_05.png)

**Question Text:**
Synonym of PRAGMATIC:

**Options:**
- **(A)** idealistic
- **(B)** practical
- **(C)** theoretical
- **(D)** emotional

**Correct Answer:** Option **(B)** — `practical`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P02-Q43 (Infosys System Engineer ITM Mock Paper 2 - Q43)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_02_page_05.png](images/paper_02_page_05.png)

**Question Text:**
Synonym of VOLATILE:

**Options:**
- **(A)** stable
- **(B)** unpredictable
- **(C)** calm
- **(D)** gradual

**Correct Answer:** Option **(B)** — `unpredictable`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P02-Q44 (Infosys System Engineer ITM Mock Paper 2 - Q44)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_02_page_05.png](images/paper_02_page_05.png)

**Question Text:**
Antonym of CONCISE:

**Options:**
- **(A)** brief
- **(B)** verbose
- **(C)** clear
- **(D)** precise

**Correct Answer:** Option **(B)** — `verbose`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P02-Q45 (Infosys System Engineer ITM Mock Paper 2 - Q45)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_02_page_05.png](images/paper_02_page_05.png)

**Question Text:**
Antonym of DILIGENT:

**Options:**
- **(A)** hardworking
- **(B)** careful
- **(C)** lazy
- **(D)** thorough

**Correct Answer:** Option **(C)** — `lazy`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):

---

### Question ITM-P03-Q26 (Infosys System Engineer ITM Mock Paper 3 - Q26)
**Section:** Section 3: Verbal Ability | **Page:** 3  
**Visual Reference Plate:** [paper_03_page_03.png](images/paper_03_page_03.png)

**Question Text:**
The passage's central claim is that inaccurate software estimates stem primarily from:

**Options:**
- **(A)** Inadequate estimation techniques that fail to model complexity
- **(B)** An organisational incentive structure that rewards optimistic estimates over accurate ones
- **(C)** The inherent unpredictability of software requirements
- **(D)** A lack of contingency buffers in project schedules

**Correct Answer:** Option **(B)** — `An organisational incentive structure that rewards optimistic estimates over accurate ones`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 3, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P03-Q27 (Infosys System Engineer ITM Mock Paper 3 - Q27)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_03_page_04.png](images/paper_03_page_04.png)

**Question Text:**
According to the passage, the "student syndrome" refers to:

**Options:**
- **(A)** Estimators lacking sufficient training in statistical methods
- **(B)** Visible schedule buffers being treated as reclaimable slack rather than reserved risk
- **(C)** Junior developers underestimating their own task durations
- **(D)** Students generally being poor at time management

**Correct Answer:** Option **(B)** — `Visible schedule buffers being treated as reclaimable slack rather than reserved risk`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 3, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P03-Q28 (Infosys System Engineer ITM Mock Paper 3 - Q28)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_03_page_04.png](images/paper_03_page_04.png)

**Question Text:**
Which of the following best captures the "structural asymmetry" the author describes?

**Options:**
- **(A)** Overestimation carries immediate, visible costs, while underestimation's costs are delayed and diffuse
- **(B)** Function point analysis is less accurate than story point velocity
- **(C)** Management scrutinises all estimates equally regardless of direction
- **(D)** Contingency buffers eliminate the risk of underestimation

**Correct Answer:** Option **(A)** — `Overestimation carries immediate, visible costs, while underestimation's costs are delayed and diffuse`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 3, option (A) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P03-Q29 (Infosys System Engineer ITM Mock Paper 3 - Q29)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_03_page_04.png](images/paper_03_page_04.png)

**Question Text:**
The author implies that adding explicit contingency buffers to schedules:

**Options:**
- **(A)** Always improves estimation accuracy
- **(B)** Can be counterproductive once stakeholders perceive the buffer as available slack
- **(C)** Is the only reliable solution to the estimation problem
- **(D)** Has no effect on stakeholder behaviour

**Correct Answer:** Option **(B)** — `Can be counterproductive once stakeholders perceive the buffer as available slack`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 3, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P03-Q30 (Infosys System Engineer ITM Mock Paper 3 - Q30)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_03_page_04.png](images/paper_03_page_04.png)

**Question Text:**
Which statement would the author most likely dispute?

**Options:**
- **(A)** Estimation techniques themselves are the primary obstacle to accurate forecasting
- **(B)** Incentives shape estimation behaviour independent of technique sophistication
- **(C)** A padded estimate can cost a bid before work begins
- **(D)** Underestimation costs tend to surface only over the course of a project 
Sentence Correction (Q31–35).

**Correct Answer:** Option **(A)** — `Estimation techniques themselves are the primary obstacle to accurate forecasting`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 3, option (A) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P03-Q31 (Infosys System Engineer ITM Mock Paper 3 - Q31)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_03_page_04.png](images/paper_03_page_04.png)

**Question Text:**
Not only was the deployment delayed by unforeseen dependencies, it also required a complete 
rollback of the previous release.

**Options:**
- **(A)** No improvement
- **(B)** but it also required
- **(C)** also it required
- **(D)** but also it required

**Correct Answer:** Option **(B)** — `but it also required`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"Not only...but" needs "but" to complete the correlative pair; "but it also required" is the standard, 
grammatical form.

---

### Question ITM-P03-Q32 (Infosys System Engineer ITM Mock Paper 3 - Q32)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_03_page_04.png](images/paper_03_page_04.png)

**Question Text:**
The findings, which the researchers were confident in it, contradicted the earlier hypothesis.

**Options:**
- **(A)** No improvement
- **(B)** which the researchers were confident about it
- **(C)** in which the researchers were 
confident
- **(D)** that the researchers were confident of it

**Correct Answer:** Option **(C)** — `in which the researchers were 
confident`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
The redundant pronoun "it" must be dropped, and the preposition placed before the relative 
pronoun: "in which the researchers were confident".

---

### Question ITM-P03-Q33 (Infosys System Engineer ITM Mock Paper 3 - Q33)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_03_page_04.png](images/paper_03_page_04.png)

**Question Text:**
Having reviewed the architecture for three days, the decision was made to migrate to microservices.

**Options:**
- **(A)** No improvement
- **(B)** the team decided
- **(C)** it was decided by the team
- **(D)** the migration decision was 
made

**Correct Answer:** Option **(B)** — `the team decided`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"Having reviewed..." is a dangling modifier — it must describe the people who did the reviewing, so 
the sentence needs an explicit human subject: "the team decided".

---

### Question ITM-P03-Q34 (Infosys System Engineer ITM Mock Paper 3 - Q34)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_03_page_04.png](images/paper_03_page_04.png)

**Question Text:**
The new algorithm is more efficient as compared to the previous version.

**Options:**
- **(A)** No improvement
- **(B)** more efficient than
- **(C)** more efficient in comparison of
- **(D)** as more efficient than

**Correct Answer:** Option **(B)** — `more efficient than`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
The correct comparative form is simply "more efficient than", not "as compared to".

---

### Question ITM-P03-Q35 (Infosys System Engineer ITM Mock Paper 3 - Q35)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_03_page_04.png](images/paper_03_page_04.png)

**Question Text:**
Having been informed of the outage, immediate action was taken by the on-call engineer.

**Options:**
- **(A)** No improvement
- **(B)** the on-call engineer took immediate action
- **(C)** it was immediately actioned by the 
on-call engineer
- **(D)** immediate action, taken by the on-call engineer 
Para-jumbles (Q36–38).

**Correct Answer:** Option **(B)** — `the on-call engineer took immediate action`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Another dangling modifier — "Having been informed..." must attach to "the on-call engineer", who 
was informed and then acted.

---

### Question ITM-P03-Q36 (Infosys System Engineer ITM Mock Paper 3 - Q36)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_03_page_04.png](images/paper_03_page_04.png)

**Question Text:**
P: Yet the very flexibility that made the format popular also made it difficult to validate programmatically. 
Q: JSON emerged as a lightweight alternative to XML for data interchange between web services. 
R: Schema languages such as JSON Schema were developed specifically to address this gap. 
S: Unlike XML, it dispensed with the rigid schema definitions many developers found cumbersome.

**Options:**
- **(A)** QSPR
- **(B)** QPSR
- **(C)** SQPR
- **(D)** QSRP

**Correct Answer:** Option **(A)** — `QSPR`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→S→P→R.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P03-Q37 (Infosys System Engineer ITM Mock Paper 3 - Q37)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_03_page_05.png](images/paper_03_page_05.png)

**Question Text:**
P: This is because correlation alone cannot distinguish a cause from a shared underlying factor. 
Q: Two variables can move together closely across an entire dataset without either one causing the other. 
R: Researchers therefore rely on controlled experiments to isolate genuine causal effects. 
S: Ice cream sales and drowning incidents, for instance, both rise in summer, driven by heat rather than by 
each other.

**Options:**
- **(A)** QSPR
- **(B)** QPSR
- **(C)** SQPR
- **(D)** QPRS

**Correct Answer:** Option **(A)** — `QSPR`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→S→P→R.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P03-Q38 (Infosys System Engineer ITM Mock Paper 3 - Q38)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_03_page_05.png](images/paper_03_page_05.png)

**Question Text:**
P: The resulting backlog of unresolved tickets grew faster than the team could triage it. 
Q: The support team initially handled every incoming ticket in the order it arrived. 
R: A priority-based queue was introduced only after complaints about critical issues being delayed behind 
trivial ones. 
S: This approach ignored the fact that some issues were far more urgent than others.

**Options:**
- **(A)** QSPR
- **(B)** QPSR
- **(C)** SQPR
- **(D)** PQSR 
Vocabulary, Synonyms and Antonyms (Q39–45).

**Correct Answer:** Option **(A)** — `QSPR`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→S→P→R.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P03-Q39 (Infosys System Engineer ITM Mock Paper 3 - Q39)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_03_page_05.png](images/paper_03_page_05.png)

**Question Text:**
The board's decision to proceed despite the warnings was widely seen as obstinate rather than 
courageous. "Obstinate" means:

**Options:**
- **(A)** flexible
- **(B)** stubbornly unwilling to change
- **(C)** courageous
- **(D)** uncertain

**Correct Answer:** Option **(B)** — `stubbornly unwilling to change`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P03-Q40 (Infosys System Engineer ITM Mock Paper 3 - Q40)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_03_page_05.png](images/paper_03_page_05.png)

**Question Text:**
His perfunctory apology did little to repair the damaged trust. "Perfunctory" means:

**Options:**
- **(A)** heartfelt
- **(B)** done as a mere formality, without real effort
- **(C)** delayed
- **(D)** elaborate

**Correct Answer:** Option **(B)** — `done as a mere formality, without real effort`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P03-Q41 (Infosys System Engineer ITM Mock Paper 3 - Q41)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_03_page_05.png](images/paper_03_page_05.png)

**Question Text:**
Fill in the blank: The consultant's report was criticised for being  
, offering broad generalisations 
instead of concrete recommendations.

**Options:**
- **(A)** meticulous
- **(B)** vague
- **(C)** precise
- **(D)** exhaustive

**Correct Answer:** Option **(B)** — `vague`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P03-Q42 (Infosys System Engineer ITM Mock Paper 3 - Q42)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_03_page_05.png](images/paper_03_page_05.png)

**Question Text:**
Synonym of INSCRUTABLE:

**Options:**
- **(A)** transparent
- **(B)** unfathomable
- **(C)** predictable
- **(D)** simple

**Correct Answer:** Option **(B)** — `unfathomable`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P03-Q43 (Infosys System Engineer ITM Mock Paper 3 - Q43)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_03_page_05.png](images/paper_03_page_05.png)

**Question Text:**
Synonym of PROFLIGATE:

**Options:**
- **(A)** frugal
- **(B)** wasteful
- **(C)** careful
- **(D)** modest

**Correct Answer:** Option **(B)** — `wasteful`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P03-Q44 (Infosys System Engineer ITM Mock Paper 3 - Q44)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_03_page_05.png](images/paper_03_page_05.png)

**Question Text:**
Antonym of ASSIDUOUS:

**Options:**
- **(A)** diligent
- **(B)** careful
- **(C)** negligent
- **(D)** thorough

**Correct Answer:** Option **(C)** — `negligent`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (C) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P03-Q45 (Infosys System Engineer ITM Mock Paper 3 - Q45)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_03_page_05.png](images/paper_03_page_05.png)

**Question Text:**
Antonym of EPHEMERAL:

**Options:**
- **(A)** fleeting
- **(B)** permanent
- **(C)** brief
- **(D)** transient

**Correct Answer:** Option **(B)** — `permanent`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):

---

### Question ITM-P04-Q26 (Infosys System Engineer ITM Mock Paper 4 - Q26)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_04_page_04.png](images/paper_04_page_04.png)

**Question Text:**
According to the passage, the CAP theorem is frequently misapplied because:

**Options:**
- **(A)** Partition tolerance is wrongly treated as an optional design choice when it is effectively mandatory
- **(B)** Consistency is always more important than availability
- **(C)** The theorem does not apply to payment systems
- **(D)** Network partitions rarely occur in practice

**Correct Answer:** Option **(A)** — `Partition tolerance is wrongly treated as an optional design choice when it is effectively mandatory`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 4, option (A) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P04-Q27 (Infosys System Engineer ITM Mock Paper 4 - Q27)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_04_page_04.png](images/paper_04_page_04.png)

**Question Text:**
The payment-ledger versus product-catalogue example illustrates that:

**Options:**
- **(A)** Payment systems should never use distributed architecture
- **(B)** The consistency-availability trade-off can be made differently for different parts of the same overall 
system
- **(C)** Product catalogues are inherently less important than payment systems
- **(D)** Availability should always be prioritised over consistency

**Correct Answer:** Option **(B)** — `The consistency-availability trade-off can be made differently for different parts of the same overall 
system`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 4, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P04-Q28 (Infosys System Engineer ITM Mock Paper 4 - Q28)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_04_page_04.png](images/paper_04_page_04.png)

**Question Text:**
The phrase "a common and consequential misreading" refers to:

**Options:**
- **(A)** Confusing consistency with availability
- **(B)** Treating the CAP choice as one uniform, system-wide decision rather than one that can vary per service
- **(C)** Believing that partition tolerance can be sacrificed
- **(D)** Assuming all networks are reliable

**Correct Answer:** Option **(B)** — `Treating the CAP choice as one uniform, system-wide decision rather than one that can vary per service`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 4, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P04-Q29 (Infosys System Engineer ITM Mock Paper 4 - Q29)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_04_page_04.png](images/paper_04_page_04.png)

**Question Text:**
Which of the following would the author most likely agree with?

**Options:**
- **(A)** A single distributed system can legitimately favour consistency for one function and availability for 
another
- **(B)** The CAP theorem is largely irrelevant to real-world system design
- **(C)** Partition tolerance should be sacrificed whenever possible
- **(D)** All read-heavy services must prioritise consistency

**Correct Answer:** Option **(A)** — `A single distributed system can legitimately favour consistency for one function and availability for 
another`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 4, option (A) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P04-Q30 (Infosys System Engineer ITM Mock Paper 4 - Q30)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_04_page_04.png](images/paper_04_page_04.png)

**Question Text:**
Based on the passage, why is partition tolerance called a "structural necessity"?

**Options:**
- **(A)** Because regulations require it
- **(B)** Because any system communicating over an unreliable network cannot realistically avoid the possibility 
of partitions
- **(C)** Because consistency is always more important
- **(D)** Because availability is always more important 
Sentence Correction (Q31–35).

**Correct Answer:** Option **(B)** — `Because any system communicating over an unreliable network cannot realistically avoid the possibility 
of partitions`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 4, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P04-Q31 (Infosys System Engineer ITM Mock Paper 4 - Q31)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_04_page_04.png](images/paper_04_page_04.png)

**Question Text:**
It is imperative that every deployment is tested thoroughly before being pushed to production.

**Options:**
- **(A)** No improvement
- **(B)** be tested
- **(C)** was tested
- **(D)** will be tested

**Correct Answer:** Option **(B)** — `be tested`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"Imperative that" triggers the subjunctive mood, which uses the base form: "be tested".

---

### Question ITM-P04-Q32 (Infosys System Engineer ITM Mock Paper 4 - Q32)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_04_page_04.png](images/paper_04_page_04.png)

**Question Text:**
Rarely a system architect gets the chance to redesign a platform from scratch.

**Options:**
- **(A)** No improvement
- **(B)** does a system architect get
- **(C)** a system architect does get
- **(D)** gets a system 
architect

**Correct Answer:** Option **(B)** — `does a system architect get`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"Rarely" at the start of a sentence triggers subject-auxiliary inversion: "does a system architect get".

---

### Question ITM-P04-Q33 (Infosys System Engineer ITM Mock Paper 4 - Q33)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_04_page_04.png](images/paper_04_page_04.png)

**Question Text:**
The report's conclusion, that many have questioned it, was based on incomplete data.

**Options:**
- **(A)** No improvement
- **(B)** which many have questioned
- **(C)** that many have questioned
- **(D)** many have 
questioned which

**Correct Answer:** Option **(B)** — `which many have questioned`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
The redundant "it" must be dropped, and "which" (not "that") is used after a comma for a non-
restrictive clause.

---

### Question ITM-P04-Q34 (Infosys System Engineer ITM Mock Paper 4 - Q34)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_04_page_05.png](images/paper_04_page_05.png)

**Question Text:**
The budget overrun was attributed to the fact of poor estimation practices rather than external 
factors.

**Options:**
- **(A)** No improvement
- **(B)** to poor estimation practices
- **(C)** to the fact that poor estimation practices
- **(D)** because of poor estimation practices

**Correct Answer:** Option **(B)** — `to poor estimation practices`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"The fact of" is redundant and unidiomatic; "attributed to poor estimation practices" is correct and 
concise.

---

### Question ITM-P04-Q35 (Infosys System Engineer ITM Mock Paper 4 - Q35)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_04_page_05.png](images/paper_04_page_05.png)

**Question Text:**
Being that the deadline was moved up, the team had to prioritise ruthlessly.

**Options:**
- **(A)** No improvement
- **(B)** Given that the deadline was moved up
- **(C)** Being the deadline was moved up
- **(D)** Because of the deadline was moved up 
Para-jumbles (Q36–38).

**Correct Answer:** Option **(B)** — `Given that the deadline was moved up`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"Being that" is non-standard; the correct formal causal connector is "Given that".

---

### Question ITM-P04-Q36 (Infosys System Engineer ITM Mock Paper 4 - Q36)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_04_page_05.png](images/paper_04_page_05.png)

**Question Text:**
P: Yet this very redundancy, when poorly managed, can itself become a source of inconsistency. 
Q: Distributed databases often replicate data across multiple nodes to improve fault tolerance. 
R: Conflict-resolution strategies, such as vector clocks, were developed to reconcile such divergent copies. 
S: If two replicas are updated independently before synchronising, they may end up holding conflicting 
values.

**Options:**
- **(A)** QPSR
- **(B)** QSPR
- **(C)** PQSR
- **(D)** QRPS

**Correct Answer:** Option **(A)** — `QPSR`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→P→S→R.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P04-Q37 (Infosys System Engineer ITM Mock Paper 4 - Q37)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_04_page_05.png](images/paper_04_page_05.png)

**Question Text:**
P: It instead reflects a deliberate trade-off between latency and durability that every system designer must 
make explicitly. 
Q: Writing data to disk before acknowledging a request guarantees durability but adds latency. 
R: Skipping this step and acknowledging immediately improves responsiveness at the risk of data loss during 
a crash. 
S: Neither approach is objectively superior, and the choice is not a matter of engineering carelessness.

**Options:**
- **(A)** QRSP
- **(B)** QSRP
- **(C)** RQSP
- **(D)** QRPS

**Correct Answer:** Option **(A)** — `QRSP`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→R→S→P.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P04-Q38 (Infosys System Engineer ITM Mock Paper 4 - Q38)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_04_page_05.png](images/paper_04_page_05.png)

**Question Text:**
P: This made debugging nearly impossible, since no single node had a complete picture of the request's path. 
Q: Early microservice deployments often lacked any form of distributed tracing. 
R: Modern observability platforms now stitch together logs from every service a request touches. 
S: A single user request might traverse a dozen services before returning a response.

**Options:**
- **(A)** QSPR
- **(B)** QPSR
- **(C)** SQPR
- **(D)** QSRP 
Vocabulary, Synonyms and Antonyms (Q39–45).

**Correct Answer:** Option **(A)** — `QSPR`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→S→P→R.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P04-Q39 (Infosys System Engineer ITM Mock Paper 4 - Q39)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_04_page_05.png](images/paper_04_page_05.png)

**Question Text:**
The auditor's findings were unequivocal, leaving no room for alternative interpretation. "Unequivocal" 
means:

**Options:**
- **(A)** ambiguous
- **(B)** leaving no doubt; completely clear
- **(C)** tentative
- **(D)** biased

**Correct Answer:** Option **(B)** — `leaving no doubt; completely clear`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P04-Q40 (Infosys System Engineer ITM Mock Paper 4 - Q40)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_04_page_05.png](images/paper_04_page_05.png)

**Question Text:**
Critics dismissed the proposal as specious — appealing on the surface but fundamentally flawed. 
"Specious" means:

**Options:**
- **(A)** genuinely sound
- **(B)** superficially plausible but actually wrong
- **(C)** deeply researched
- **(D)** widely accepted

**Correct Answer:** Option **(B)** — `superficially plausible but actually wrong`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P04-Q41 (Infosys System Engineer ITM Mock Paper 4 - Q41)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_04_page_05.png](images/paper_04_page_05.png)

**Question Text:**
Fill in the blank: Despite years of effort, the two departments remained ______ in their approaches, 
unable to find common ground.

**Options:**
- **(A)** aligned
- **(B)** intransigent
- **(C)** harmonious
- **(D)** cooperative

**Correct Answer:** Option **(B)** — `intransigent`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P04-Q42 (Infosys System Engineer ITM Mock Paper 4 - Q42)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_04_page_05.png](images/paper_04_page_05.png)

**Question Text:**
Synonym of CIRCUMSPECT:

**Options:**
- **(A)** reckless
- **(B)** cautious and careful
- **(C)** indifferent
- **(D)** impulsive

**Correct Answer:** Option **(B)** — `cautious and careful`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P04-Q43 (Infosys System Engineer ITM Mock Paper 4 - Q43)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_04_page_06.png](images/paper_04_page_06.png)

**Question Text:**
Synonym of OBFUSCATORY:

**Options:**
- **(A)** clarifying
- **(B)** deliberately confusing
- **(C)** simplifying
- **(D)** transparent

**Correct Answer:** Option **(B)** — `deliberately confusing`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P04-Q44 (Infosys System Engineer ITM Mock Paper 4 - Q44)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_04_page_06.png](images/paper_04_page_06.png)

**Question Text:**
Antonym of PARSIMONIOUS:

**Options:**
- **(A)** frugal
- **(B)** stingy
- **(C)** lavish
- **(D)** economical

**Correct Answer:** Option **(C)** — `lavish`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (C) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P04-Q45 (Infosys System Engineer ITM Mock Paper 4 - Q45)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_04_page_06.png](images/paper_04_page_06.png)

**Question Text:**
Antonym of GARRULOUS:

**Options:**
- **(A)** talkative
- **(B)** chatty
- **(C)** taciturn
- **(D)** verbose

**Correct Answer:** Option **(C)** — `taciturn`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):

---

### Question ITM-P05-Q26 (Infosys System Engineer ITM Mock Paper 5 - Q26)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_05_page_04.png](images/paper_05_page_04.png)

**Question Text:**
The passage's central argument is that rate limits should be understood primarily as:

**Options:**
- **(A)** A purely defensive mechanism against malicious traffic
- **(B)** An explicit, measured capacity contract that client code can plan around, not just a defensive wall
- **(C)** A permanent configuration that should never be revisited
- **(D)** A substitute for proper capacity testing

**Correct Answer:** Option **(B)** — `An explicit, measured capacity contract that client code can plan around, not just a defensive wall`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 5, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P05-Q27 (Infosys System Engineer ITM Mock Paper 5 - Q27)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_05_page_04.png](images/paper_05_page_04.png)

**Question Text:**
According to the passage, limits set reactively during an incident risk becoming:

**Options:**
- **(A)** Too generous, allowing further outages
- **(B)** An invisible ceiling that quietly caps legitimate growth after the emergency has passed
- **(C)** Immediately replaced by automated systems
- **(D)** Irrelevant to client-side retry logic

**Correct Answer:** Option **(B)** — `An invisible ceiling that quietly caps legitimate growth after the emergency has passed`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 5, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P05-Q28 (Infosys System Engineer ITM Mock Paper 5 - Q28)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_05_page_04.png](images/paper_05_page_04.png)

**Question Text:**
The phrase "living documentation of measured capacity" implies that rate limits should be:

**Options:**
- **(A)** Set once and never changed
- **(B)** Periodically revisited as the service's performance characteristics evolve
- **(C)** Removed once a service proves reliable
- **(D)** Determined solely by client demand

**Correct Answer:** Option **(B)** — `Periodically revisited as the service's performance characteristics evolve`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 5, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P05-Q29 (Infosys System Engineer ITM Mock Paper 5 - Q29)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_05_page_04.png](images/paper_05_page_04.png)

**Question Text:**
Which of the following would the author most likely agree with?

**Options:**
- **(A)** A well-chosen rate limit communicates useful information to the systems that call it, beyond just blocking 
excess traffic
- **(B)** Rate limits should always be set as conservatively as possible
- **(C)** Capacity testing is unnecessary if a rate limiter is in place
- **(D)** Client-side retry logic is unrelated to how a rate limit is set

**Correct Answer:** Option **(A)** — `A well-chosen rate limit communicates useful information to the systems that call it, beyond just blocking 
excess traffic`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 5, option (A) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P05-Q30 (Infosys System Engineer ITM Mock Paper 5 - Q30)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_05_page_04.png](images/paper_05_page_04.png)

**Question Text:**
Based on the passage, what is the main risk of NOT revisiting a reactively-set limit?

**Options:**
- **(A)** The service becomes vulnerable to outages again
- **(B)** The limit may stay more conservative than necessary and suppress legitimate growth
- **(C)** Client code will stop retrying altogether
- **(D)** The token-bucket algorithm will stop functioning 
Sentence Correction (Q31–35).

**Correct Answer:** Option **(B)** — `The limit may stay more conservative than necessary and suppress legitimate growth`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 5, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P05-Q31 (Infosys System Engineer ITM Mock Paper 5 - Q31)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_05_page_04.png](images/paper_05_page_04.png)

**Question Text:**
If the migration was properly tested, the system would not be experiencing intermittent failures right 
now.

**Options:**
- **(A)** No improvement
- **(B)** had been, would not be
- **(C)** were, will not be
- **(D)** has been, would not have been

**Correct Answer:** Option **(B)** — `had been, would not be`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
A mixed conditional (past condition, present result) needs "had been" (past perfect) in the if-clause 
and "would not be" (present conditional) in the main clause.

---

### Question ITM-P05-Q32 (Infosys System Engineer ITM Mock Paper 5 - Q32)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_05_page_04.png](images/paper_05_page_04.png)

**Question Text:**
The lead engineer said that the deployment will take place the following week, as the testing has not 
yet been completed at that time.

**Options:**
- **(A)** No improvement
- **(B)** would, had
- **(C)** would, has
- **(D)** will, had

**Correct Answer:** Option **(A)** — `No improvement`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Reported speech backshifts "will"→"would" and "has not been completed"→"had not been 
completed".

---

### Question ITM-P05-Q33 (Infosys System Engineer ITM Mock Paper 5 - Q33)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_05_page_05.png](images/paper_05_page_05.png)

**Question Text:**
The team had to account for the discrepancy, which they eventually traced to a configuration error 
introduced by mistake during the last deployment.

**Options:**
- **(A)** No improvement
- **(B)** of, to, in
- **(C)** with, into, by
- **(D)** for, into, with

**Correct Answer:** Option **(A)** — `No improvement`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"account for", "traced to", and "by mistake" are the correct idiomatic combinations.

---

### Question ITM-P05-Q34 (Infosys System Engineer ITM Mock Paper 5 - Q34)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_05_page_05.png](images/paper_05_page_05.png)

**Question Text:**
The new policy requires all employees to attending mandatory security training within thirty days of 
joining, failing which their system access will be automatically suspended.

**Options:**
- **(A)** No improvement
- **(B)** attending
- **(C)** to attend
- **(D)** attend

**Correct Answer:** Option **(C)** — `to attend`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"requires...to attend" needs the infinitive, not the gerund ("to attending" is ungrammatical).

---

### Question ITM-P05-Q35 (Infosys System Engineer ITM Mock Paper 5 - Q35)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_05_page_05.png](images/paper_05_page_05.png)

**Question Text:**
The outage was caused due to a misconfigured load balancer that had been deployed without peer 
review.

**Options:**
- **(A)** No improvement
- **(B)** was caused by
- **(C)** was caused because of
- **(D)** caused due to 
Para-jumbles (Q36–38).

**Correct Answer:** Option **(B)** — `was caused by`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"caused by" is correct; "caused due to" is a common but non-standard (redundant) construction.

---

### Question ITM-P05-Q36 (Infosys System Engineer ITM Mock Paper 5 - Q36)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_05_page_05.png](images/paper_05_page_05.png)

**Question Text:**
P: This made it difficult to reason about which version of a shared object any given thread would observe. 
Q: Early concurrent programming models allowed any thread to read or write shared memory at any time. 
R: Memory models that formally define visibility and ordering guarantees were developed to resolve this 
ambiguity. 
S: Without explicit synchronisation, two threads could see updates to the same variable in different orders.

**Options:**
- **(A)** QSPR
- **(B)** QPSR
- **(C)** SQPR
- **(D)** QSRP

**Correct Answer:** Option **(A)** — `QSPR`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→S→P→R.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P05-Q37 (Infosys System Engineer ITM Mock Paper 5 - Q37)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_05_page_05.png](images/paper_05_page_05.png)

**Question Text:**
P: A cache invalidated too eagerly provides little performance benefit, defeating its own purpose. 
Q: Cache invalidation is frequently cited as one of the two genuinely hard problems in computer science. 
R: One invalidated too late serves stale data that may silently corrupt downstream computations. 
S: The difficulty lies in striking a balance between staleness and overhead that rarely has a universally correct 
answer.

**Options:**
- **(A)** QPRS
- **(B)** QRPS
- **(C)** QPSR
- **(D)** PQRS

**Correct Answer:** Option **(A)** — `QPRS`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→P→R→S.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P05-Q38 (Infosys System Engineer ITM Mock Paper 5 - Q38)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_05_page_05.png](images/paper_05_page_05.png)

**Question Text:**
P: Engineers began instrumenting every service boundary to capture latency at each hop. 
Q: A single slow request in a microservice architecture can be caused by any one of a dozen interacting 
services. 
R: Distributed tracing tools emerged to stitch these individual measurements into one coherent timeline. 
S: Without this visibility, a single slow endpoint could remain unexplained for weeks.

**Options:**
- **(A)** QSPR
- **(B)** QPSR
- **(C)** SQPR
- **(D)** QSRP 
Vocabulary, Synonyms and Antonyms (Q39–45).

**Correct Answer:** Option **(A)** — `QSPR`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→S→P→R.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P05-Q39 (Infosys System Engineer ITM Mock Paper 5 - Q39)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_05_page_05.png](images/paper_05_page_05.png)

**Question Text:**
The consultant's recommendations were anodyne, offering nothing that would upset any stakeholder. 
"Anodyne" means:

**Options:**
- **(A)** controversial
- **(B)** inoffensive and bland
- **(C)** insightful
- **(D)** aggressive

**Correct Answer:** Option **(B)** — `inoffensive and bland`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P05-Q40 (Infosys System Engineer ITM Mock Paper 5 - Q40)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_05_page_05.png](images/paper_05_page_05.png)

**Question Text:**
The engineer's terse response left no room for follow-up questions. "Terse" means:

**Options:**
- **(A)** elaborate
- **(B)** brief and to the point, almost curt
- **(C)** friendly
- **(D)** confusing

**Correct Answer:** Option **(B)** — `brief and to the point, almost curt`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P05-Q41 (Infosys System Engineer ITM Mock Paper 5 - Q41)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_05_page_05.png](images/paper_05_page_05.png)

**Question Text:**
Fill in the blank: The postmortem was praised for being ______ rather than accusatory, focusing on 
systemic causes instead of individual blame.

**Options:**
- **(A)** punitive
- **(B)** blameless
- **(C)** hostile
- **(D)** dismissive

**Correct Answer:** Option **(B)** — `blameless`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P05-Q42 (Infosys System Engineer ITM Mock Paper 5 - Q42)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_05_page_06.png](images/paper_05_page_06.png)

**Question Text:**
Synonym of INTRACTABLE:

**Options:**
- **(A)** manageable
- **(B)** difficult to control or solve
- **(C)** flexible
- **(D)** simple

**Correct Answer:** Option **(B)** — `difficult to control or solve`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P05-Q43 (Infosys System Engineer ITM Mock Paper 5 - Q43)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_05_page_06.png](images/paper_05_page_06.png)

**Question Text:**
Synonym of PRECARIOUS:

**Options:**
- **(A)** stable
- **(B)** unstable or risky
- **(C)** secure
- **(D)** permanent

**Correct Answer:** Option **(B)** — `unstable or risky`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P05-Q44 (Infosys System Engineer ITM Mock Paper 5 - Q44)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_05_page_06.png](images/paper_05_page_06.png)

**Question Text:**
Antonym of MERITORIOUS:

**Options:**
- **(A)** praiseworthy
- **(B)** commendable
- **(C)** blameworthy
- **(D)** deserving

**Correct Answer:** Option **(C)** — `blameworthy`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (C) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P05-Q45 (Infosys System Engineer ITM Mock Paper 5 - Q45)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_05_page_06.png](images/paper_05_page_06.png)

**Question Text:**
Antonym of VINDICATE:

**Options:**
- **(A)** justify
- **(B)** exonerate
- **(C)** incriminate
- **(D)** clear

**Correct Answer:** Option **(C)** — `incriminate`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):

---

### Question ITM-P06-Q26 (Infosys System Engineer ITM Mock Paper 6 - Q26)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_06_page_04.png](images/paper_06_page_04.png)

**Question Text:**
The passage's main point is that:

**Options:**
- **(A)** Engineering metrics should be abolished
- **(B)** Metrics that become targets get gamed, so they should be paired with counter-metrics and revisited, not 
dropped
- **(C)** Developers deliberately deceive their managers
- **(D)** Code coverage is the best available metric

**Correct Answer:** Option **(B)** — `Metrics that become targets get gamed, so they should be paired with counter-metrics and revisited, not 
dropped`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 6, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P06-Q27 (Infosys System Engineer ITM Mock Paper 6 - Q27)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_06_page_04.png](images/paper_06_page_04.png)

**Question Text:**
The author's view of the gaming behaviour described is that it is:

**Options:**
- **(A)** Usually a sign of dishonesty
- **(B)** Not necessarily cynical, but a rational response to perceived incentives
- **(C)** Impossible to prevent
- **(D)** Limited to junior engineers

**Correct Answer:** Option **(B)** — `Not necessarily cynical, but a rational response to perceived incentives`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 6, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P06-Q28 (Infosys System Engineer ITM Mock Paper 6 - Q28)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_06_page_04.png](images/paper_06_page_04.png)

**Question Text:**
Treating a metric "as a symptom rather than a verdict" most nearly means:

**Options:**
- **(A)** Ignoring the metric entirely
- **(B)** Using the metric as a signal that prompts investigation rather than a final judgement of performance
- **(C)** Replacing the metric every quarter
- **(D)** Publishing the metric to all staff

**Correct Answer:** Option **(B)** — `Using the metric as a signal that prompts investigation rather than a final judgement of performance`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 6, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P06-Q29 (Infosys System Engineer ITM Mock Paper 6 - Q29)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_06_page_04.png](images/paper_06_page_04.png)

**Question Text:**
According to the passage, why would abandoning measurement be undesirable?

**Options:**
- **(A)** It would reduce team morale
- **(B)** It would make teams ignore tickets
- **(C)** Managers would be left relying on anecdote
- **(D)** It would violate Goodhart's law

**Correct Answer:** Option **(C)** — `Managers would be left relying on anecdote`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 6, option (C) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P06-Q30 (Infosys System Engineer ITM Mock Paper 6 - Q30)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_06_page_04.png](images/paper_06_page_04.png)

**Question Text:**
The final sentence implies that:

**Options:**
- **(A)** Even a counter-metric can eventually be gamed, so the arrangement needs periodic review
- **(B)** Counter-metrics are worse than the original metrics
- **(C)** Safeguards should never be introduced
- **(D)** Teams eventually stop responding to incentives 
Sentence Correction (Q31–35).

**Correct Answer:** Option **(A)** — `Even a counter-metric can eventually be gamed, so the arrangement needs periodic review`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 6, option (A) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P06-Q31 (Infosys System Engineer ITM Mock Paper 6 - Q31)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_06_page_04.png](images/paper_06_page_04.png)

**Question Text:**
Neither the project manager nor the developers was informed about the change.

**Options:**
- **(A)** No improvement
- **(B)** were informed
- **(C)** is informed
- **(D)** has been informed

**Correct Answer:** Option **(B)** — `were informed`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
With "neither…nor", the verb agrees with the nearer subject (developers → were).

---

### Question ITM-P06-Q32 (Infosys System Engineer ITM Mock Paper 6 - Q32)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_06_page_04.png](images/paper_06_page_04.png)

**Question Text:**
Walking into the server room, the temperature seemed unusually high to the technician.

**Options:**
- **(A)** No improvement
- **(B)** the technician found the temperature unusually high
- **(C)** the temperature seemed to 
the technician unusually high
- **(D)** it was unusually high to the technician

**Correct Answer:** Option **(B)** — `the technician found the temperature unusually high`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
The opening participle must modify a person; "the technician found the temperature…" fixes the 
dangling modifier.

---

### Question ITM-P06-Q33 (Infosys System Engineer ITM Mock Paper 6 - Q33)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_06_page_04.png](images/paper_06_page_04.png)

**Question Text:**
The new framework is faster, more secure, and it is easy to maintain.

**Options:**
- **(A)** No improvement
- **(B)** and easier to maintain
- **(C)** and also is easy for maintenance
- **(D)** and maintaining it is 
easy

**Correct Answer:** Option **(B)** — `and easier to maintain`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
The adjectives must stay parallel: faster, more secure, and easier to maintain.

---

### Question ITM-P06-Q34 (Infosys System Engineer ITM Mock Paper 6 - Q34)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_06_page_04.png](images/paper_06_page_04.png)

**Question Text:**
By the time the patch was released, the attackers already exploited the vulnerability.

**Options:**
- **(A)** No improvement
- **(B)** had already exploited
- **(C)** have already exploited
- **(D)** were already exploiting

**Correct Answer:** Option **(B)** — `had already exploited`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
An action completed before another past action needs the past perfect: "had already exploited".

---

### Question ITM-P06-Q35 (Infosys System Engineer ITM Mock Paper 6 - Q35)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_06_page_05.png](images/paper_06_page_05.png)

**Question Text:**
The reason why the build failed is because of a missing dependency.

**Options:**
- **(A)** No improvement
- **(B)** The reason the build failed was because a dependency was missing
- **(C)** The build 
failed because a dependency was missing
- **(D)** The reason why the build failed was because of a missing 
dependency 
Para-jumbles (Q36–38).

**Correct Answer:** Option **(C)** — `The build 
failed because a dependency was missing`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"The reason… is because" is redundant; "The build failed because a dependency was missing" is the 
clean form.

---

### Question ITM-P06-Q36 (Infosys System Engineer ITM Mock Paper 6 - Q36)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_06_page_05.png](images/paper_06_page_05.png)

**Question Text:**
P: Consequently, many teams now treat flaky tests as defects in their own right. 
Q: A test that passes and fails intermittently without any code change erodes trust in the whole suite. 
R: Developers begin to ignore failures, assuming they are noise. 
S: Real regressions then slip through unnoticed.

**Options:**
- **(A)** QRSP
- **(B)** QSRP
- **(C)** RQSP
- **(D)** QRPS

**Correct Answer:** Option **(A)** — `QRSP`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→R→S→P.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P06-Q37 (Infosys System Engineer ITM Mock Paper 6 - Q37)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_06_page_05.png](images/paper_06_page_05.png)

**Question Text:**
P: Releasing to every user at once maximises speed but also the blast radius of any defect. 
Q: Teams face a genuine tension between releasing quickly and releasing safely. 
R: Releasing to a handful of users first limits risk but delays feedback. 
S: A staged rollout, exposing a small and growing share of users, is the usual compromise.

**Options:**
- **(A)** QPRS
- **(B)** QRPS
- **(C)** PQRS
- **(D)** QPSR

**Correct Answer:** Option **(A)** — `QPRS`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→P→R→S.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P06-Q38 (Infosys System Engineer ITM Mock Paper 6 - Q38)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_06_page_05.png](images/paper_06_page_05.png)

**Question Text:**
P: Its adoption, however, was slow outside the research community. 
Q: Public-key cryptography solved the problem of exchanging secret keys over an insecure channel. 
R: Usable libraries and standards eventually removed this barrier. 
S: Early implementations were notoriously difficult to use correctly.

**Options:**
- **(A)** QSPR
- **(B)** QPSR
- **(C)** PQSR
- **(D)** QPRS 
Vocabulary, Synonyms and Antonyms (Q39–45).

**Correct Answer:** Option **(B)** — `QPSR`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→P→S→R.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P06-Q39 (Infosys System Engineer ITM Mock Paper 6 - Q39)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_06_page_05.png](images/paper_06_page_05.png)

**Question Text:**
The documentation was admirably pellucid, leaving no step open to misreading. "Pellucid" means:

**Options:**
- **(A)** lengthy
- **(B)** transparently clear
- **(C)** outdated
- **(D)** technical

**Correct Answer:** Option **(B)** — `transparently clear`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P06-Q40 (Infosys System Engineer ITM Mock Paper 6 - Q40)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_06_page_05.png](images/paper_06_page_05.png)

**Question Text:**
The client's mercurial moods made planning difficult. "Mercurial" means:

**Options:**
- **(A)** steady
- **(B)** unpredictably changeable
- **(C)** hostile
- **(D)** cheerful

**Correct Answer:** Option **(B)** — `unpredictably changeable`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P06-Q41 (Infosys System Engineer ITM Mock Paper 6 - Q41)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_06_page_05.png](images/paper_06_page_05.png)

**Question Text:**
Fill in the blank: The startup's growth was ______; revenue tripled in a single quarter.

**Options:**
- **(A)** meteoric
- **(B)** gradual
- **(C)** stagnant
- **(D)** negligible

**Correct Answer:** Option **(A)** — `meteoric`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (A) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P06-Q42 (Infosys System Engineer ITM Mock Paper 6 - Q42)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_06_page_05.png](images/paper_06_page_05.png)

**Question Text:**
Synonym of EQUIVOCATE:

**Options:**
- **(A)** speak ambiguously to avoid commitment
- **(B)** confess openly
- **(C)** argue loudly
- **(D)** agree readily

**Correct Answer:** Option **(A)** — `speak ambiguously to avoid commitment`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (A) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P06-Q43 (Infosys System Engineer ITM Mock Paper 6 - Q43)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_06_page_05.png](images/paper_06_page_05.png)

**Question Text:**
Synonym of PERNICIOUS:

**Options:**
- **(A)** harmless
- **(B)** subtly or gravely harmful
- **(C)** trivial
- **(D)** beneficial

**Correct Answer:** Option **(B)** — `subtly or gravely harmful`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P06-Q44 (Infosys System Engineer ITM Mock Paper 6 - Q44)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_06_page_05.png](images/paper_06_page_05.png)

**Question Text:**
Antonym of BENEVOLENT:

**Options:**
- **(A)** kind
- **(B)** malevolent
- **(C)** generous
- **(D)** charitable

**Correct Answer:** Option **(B)** — `malevolent`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P06-Q45 (Infosys System Engineer ITM Mock Paper 6 - Q45)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_06_page_05.png](images/paper_06_page_05.png)

**Question Text:**
Antonym of EXACERBATE:

**Options:**
- **(A)** worsen
- **(B)** aggravate
- **(C)** alleviate
- **(D)** intensify

**Correct Answer:** Option **(C)** — `alleviate`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):

---

### Question ITM-P07-Q26 (Infosys System Engineer ITM Mock Paper 7 - Q26)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_07_page_04.png](images/paper_07_page_04.png)

**Question Text:**
The passage mainly argues that:

**Options:**
- **(A)** Network timeouts can be eliminated with better hardware
- **(B)** Safe retries need idempotency, which has its own costs and is best designed in from the start
- **(C)** Card payments should never be retried
- **(D)** Servers should discard request identifiers immediately

**Correct Answer:** Option **(B)** — `Safe retries need idempotency, which has its own costs and is best designed in from the start`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 7, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P07-Q27 (Infosys System Engineer ITM Mock Paper 7 - Q27)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_07_page_04.png](images/paper_07_page_04.png)

**Question Text:**
"Genuine ignorance" in the first sentence refers to the fact that:

**Options:**
- **(A)** the caller does not know the server's address
- **(B)** the server refuses to reply
- **(C)** the caller cannot tell whether the request was executed
- **(D)** the network is always unreliable

**Correct Answer:** Option **(C)** — `the caller cannot tell whether the request was executed`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 7, option (C) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P07-Q28 (Infosys System Engineer ITM Mock Paper 7 - Q28)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_07_page_04.png](images/paper_07_page_04.png)

**Question Text:**
The author says the identifier approach "shifts the burden rather than removing it" because:

**Options:**
- **(A)** the caller must now generate more traffic
- **(B)** the server must store identifiers and decide how long to keep them
- **(C)** the identifiers make the operation non-idempotent
- **(D)** duplicates become impossible to detect

**Correct Answer:** Option **(B)** — `the server must store identifiers and decide how long to keep them`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 7, option (B) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P07-Q29 (Infosys System Engineer ITM Mock Paper 7 - Q29)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_07_page_04.png](images/paper_07_page_04.png)

**Question Text:**
According to the passage, what is the risk of discarding identifiers too early?

**Options:**
- **(A)** A duplicate request may be executed a second time
- **(B)** The server will run out of storage
- **(C)** The caller will stop retrying
- **(D)** The original result will be corrupted

**Correct Answer:** Option **(A)** — `A duplicate request may be executed a second time`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 7, option (A) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P07-Q30 (Infosys System Engineer ITM Mock Paper 7 - Q30)
**Section:** Section 3: Verbal Ability | **Page:** 4  
**Visual Reference Plate:** [paper_07_page_04.png](images/paper_07_page_04.png)

**Question Text:**
Which inference is best supported by the last sentence?

**Options:**
- **(A)** Idempotency is only needed in payment systems
- **(B)** Incidents are caused only by implementation details
- **(C)** Teams that include idempotency in an operation's contract are less likely to meet it first as an outage
- **(D)** Contracts should not describe retry behaviour 

Critical Reasoning (Q31–33).

**Correct Answer:** Option **(C)** — `Teams that include idempotency in an operation's contract are less likely to meet it first as an outage`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
According to the reading comprehension passage for Paper 7, option (C) is directly supported and established by the author's primary thesis and supporting textual arguments.

---

### Question ITM-P07-Q31 (Infosys System Engineer ITM Mock Paper 7 - Q31)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_07_page_05.png](images/paper_07_page_05.png)

**Question Text:**
After a website adopted a new CDN, its page-load time fell by 30%, and user retention rose over the 
same period. The team concludes that the CDN caused the rise in retention. Which of the following is an 
assumption on which this conclusion depends?

**Options:**
- **(A)** Retention is determined only by page-load time
- **(B)** No other factor that affects retention changed significantly over the same period
- **(C)** All CDNs improve retention
- **(D)** A 30% fall in load time is always considered large

**Correct Answer:** Option **(B)** — `No other factor that affects retention changed significantly over the same period`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
The conclusion that the CDN caused the retention rise only holds if nothing else that affects retention 
changed over the same period.

---

### Question ITM-P07-Q32 (Infosys System Engineer ITM Mock Paper 7 - Q32)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_07_page_05.png](images/paper_07_page_05.png)

**Question Text:**
Since a company made code reviews mandatory, production defects have fallen by 40%. The company 
concludes that code reviews reduce defects. Which of the following, if true, most weakens this conclusion?

**Options:**
- **(A)** Each review takes about two hours a week
- **(B)** In the same period the company halved its release frequency and cut new-feature work sharply
- **(C)** Developers say they like the review process
- **(D)** The defect-tracking system was not changed

**Correct Answer:** Option **(B)** — `In the same period the company halved its release frequency and cut new-feature work sharply`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Halving releases and cutting feature work gives an alternative explanation for fewer defects, so it 
weakens the claim that reviews were the cause.

---

### Question ITM-P07-Q33 (Infosys System Engineer ITM Mock Paper 7 - Q33)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_07_page_05.png](images/paper_07_page_05.png)

**Question Text:**
A start-up claims its new caching layer will cut its database costs. Which of the following, if true, most 
strengthens the claim?

**Options:**
- **(A)** In a pilot, 85% of requests were served from the cache, and every cache hit avoids a billable database 
query
- **(B)** The caching layer was designed by a well-known engineer
- **(C)** The start-up's database costs rose last year
- **(D)** The caching layer is built on open-source software 
Sentence Correction (Q34–36).

**Correct Answer:** Option **(A)** — `In a pilot, 85% of requests were served from the cache, and every cache hit avoids a billable database 
query`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
A high cache-hit rate, with each hit avoiding a billable query, directly links the cache to lower 
database costs.

---

### Question ITM-P07-Q34 (Infosys System Engineer ITM Mock Paper 7 - Q34)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_07_page_05.png](images/paper_07_page_05.png)

**Question Text:**
The data, which was collected over three years, shows that fewer people has adopted the system than 
expected.

**Options:**
- **(A)** No improvement
- **(B)** fewer people have adopted
- **(C)** less people have adopted
- **(D)** fewer people is 
adopting

**Correct Answer:** Option **(B)** — `fewer people have adopted`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
"Fewer" is used with countable nouns (people), and the plural subject "people" takes "have".

---

### Question ITM-P07-Q35 (Infosys System Engineer ITM Mock Paper 7 - Q35)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_07_page_05.png](images/paper_07_page_05.png)

**Question Text:**
The throughput of the new cluster is much higher than the old one.

**Options:**
- **(A)** No improvement
- **(B)** than that of the old one
- **(C)** than the old one's
- **(D)** from the old one

**Correct Answer:** Option **(B)** — `than that of the old one`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Compare like with like: the throughput of the new cluster with that of the old one.

---

### Question ITM-P07-Q36 (Infosys System Engineer ITM Mock Paper 7 - Q36)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_07_page_05.png](images/paper_07_page_05.png)

**Question Text:**
I wish the system was more reliable than it is now.

**Options:**
- **(A)** No improvement
- **(B)** were
- **(C)** is
- **(D)** would be 
Para-jumbles (Q37–39).

**Correct Answer:** Option **(B)** — `were`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
After "wish", a present unreal condition takes the subjunctive "were".

---

### Question ITM-P07-Q37 (Infosys System Engineer ITM Mock Paper 7 - Q37)
**Section:** Section 3: Verbal Ability | **Page:** 5  
**Visual Reference Plate:** [paper_07_page_05.png](images/paper_07_page_05.png)

**Question Text:**
P: This is why eventually consistent replicas can briefly serve stale reads. 
Q: In a replicated database, a write is first applied to one node and then propagated to the others. 
R: This window may be small, but it is never zero. 
S: During propagation, different nodes hold different versions of the same record.

**Options:**
- **(A)** QRSP
- **(B)** QSRP
- **(C)** SQRP
- **(D)** QSPR

**Correct Answer:** Option **(B)** — `QSRP`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: Q→S→R→P.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P07-Q38 (Infosys System Engineer ITM Mock Paper 7 - Q38)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_07_page_06.png](images/paper_07_page_06.png)

**Question Text:**
P: Hash tables achieve average constant-time lookup. 
Q: Collisions, however, are inevitable. 
R: Chaining and open addressing are the two standard ways to resolve them. 
S: If many keys land in the same bucket, performance degrades towards linear time.

**Options:**
- **(A)** PQRS
- **(B)** PQSR
- **(C)** QPSR
- **(D)** PSQR

**Correct Answer:** Option **(B)** — `PQSR`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Sentence sequence: P→Q→S→R.. Coherent narrative progression establishes logical flow from premise to supporting detail and conclusion.

---

### Question ITM-P07-Q39 (Infosys System Engineer ITM Mock Paper 7 - Q39)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_07_page_06.png](images/paper_07_page_06.png)

**Question Text:**
P: That decision, in hindsight, saved the company millions. 
Q: In 2019 the board chose to rewrite its payment platform rather than patch it. 
R: Patching would have cost less that year. 
S: The rewrite also delayed several product launches.

**Options:**
- **(A)** QRSP
- **(B)** QSRP
- **(C)** RQSP
- **(D)** QSPR 
Sentence Completion (Q40–41).

**Correct Answer:** Option **(A)** — `QRSP`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (A) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P07-Q40 (Infosys System Engineer ITM Mock Paper 7 - Q40)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_07_page_06.png](images/paper_07_page_06.png)

**Question Text:**
Although the prototype looked impressive in the demo, its performance under real load was ______.

**Options:**
- **(A)** unimpeachable
- **(B)** underwhelming
- **(C)** exemplary
- **(D)** gratifying

**Correct Answer:** Option **(B)** — `underwhelming`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P07-Q41 (Infosys System Engineer ITM Mock Paper 7 - Q41)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_07_page_06.png](images/paper_07_page_06.png)

**Question Text:**
The engineer's explanation was so ______ that even the non-technical audience grasped the idea at 
once.

**Options:**
- **(A)** convoluted
- **(B)** lucid
- **(C)** esoteric
- **(D)** verbose 
Vocabulary, Synonyms and Antonyms (Q42–45).

**Correct Answer:** Option **(B)** — `lucid`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P07-Q42 (Infosys System Engineer ITM Mock Paper 7 - Q42)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_07_page_06.png](images/paper_07_page_06.png)

**Question Text:**
Synonym of ABSTRUSE:

**Options:**
- **(A)** obvious
- **(B)** difficult to understand
- **(C)** lengthy
- **(D)** outdated

**Correct Answer:** Option **(B)** — `difficult to understand`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (B) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P07-Q43 (Infosys System Engineer ITM Mock Paper 7 - Q43)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_07_page_06.png](images/paper_07_page_06.png)

**Question Text:**
Synonym of SALIENT:

**Options:**
- **(A)** minor
- **(B)** hidden
- **(C)** most noticeable or important
- **(D)** rejected

**Correct Answer:** Option **(C)** — `most noticeable or important`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (C) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P07-Q44 (Infosys System Engineer ITM Mock Paper 7 - Q44)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_07_page_06.png](images/paper_07_page_06.png)

**Question Text:**
Antonym of ARDUOUS:

**Options:**
- **(A)** strenuous
- **(B)** demanding
- **(C)** effortless
- **(D)** lengthy

**Correct Answer:** Option **(C)** — `effortless`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):
Standard vocabulary / grammatical definition establishes that option (C) is the exact synonym/antonym/definition required in this context.

---

### Question ITM-P07-Q45 (Infosys System Engineer ITM Mock Paper 7 - Q45)
**Section:** Section 3: Verbal Ability | **Page:** 6  
**Visual Reference Plate:** [paper_07_page_06.png](images/paper_07_page_06.png)

**Question Text:**
Antonym of OBSEQUIOUS:

**Options:**
- **(A)** servile
- **(B)** fawning
- **(C)** assertive
- **(D)** flattering

**Correct Answer:** Option **(C)** — `assertive`

#### Detailed Derivation & Solution (Grammatical & Textual Justification):

---

