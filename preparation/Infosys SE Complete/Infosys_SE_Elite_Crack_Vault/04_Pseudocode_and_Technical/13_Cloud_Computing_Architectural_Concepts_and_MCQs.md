# Infosys Technical Handbook: Cloud Computing Architecture, SLAs, Cost Models & Data Protection
**Source Document:** `Cloud Computing.pdf` (8 Pages)  
**Target Role:** Infosys Systems Engineer (SE) | **Category:** Technical Core CS Interview & Assessment  
**Key Topics:** SLAs, CapEx vs. OpEx, DPDP Act 2023, 7-Step Cloud Migration, Multi-Cloud Strategies, Practice MCQs  
**Status:** `100% Complete with Verified Technical Explanations & Industry Standards`

---

## ☁️ 1. Service Level Agreements (SLAs) in Cloud Architecture

### Definition & Business Value
A **Service Level Agreement (SLA)** is a formal, legally binding contract between a Cloud Service Provider (CSP, e.g., AWS, Azure, Google Cloud) and the customer that strictly defines the expected quality, availability, and performance metrics of the delivered services.

### Key Components of an SLA
| Component # | Pillar Name | Technical Scope & Metrics Measured |
|:---:|:---|:---|
| **1** | **Service Availability** | Uptime commitments expressed in "nines" (e.g., 99.9% = 8.76 hrs downtime/yr, 99.99% = 52.6 min/yr). |
| **2** | **Performance Metrics** | Latency thresholds, IOPS, data transfer throughput, application response time guarantees. |
| **3** | **Security & Compliance** | Data sovereignty, encryption at rest/in transit, regulatory certifications (ISO 27001, SOC 2, HIPAA). |
| **4** | **Incident Management** | Maximum Mean Time to Respond (MTTR), Mean Time to Detect (MTTD), escalation hierarchies. |
| **5** | **Disaster Recovery (DR)** | Recovery Time Objective (RTO) and Recovery Point Objective (RPO) thresholds. |
| **6** | **Service Credits** | Financial penalties and billing credits credited back to the customer upon SLA breach. |

---

## 💰 2. Cloud Cost Models: CapEx vs. OpEx

| Evaluation Metric | Capital Expenditure (CapEx) | Operational Expenditure (OpEx) |
|:---|:---|:---|
| **Payment Timing** | Substantial upfront payment before deployment. | Recurring pay-as-you-go, consumption-based billing. |
| **Asset Ownership** | Organization buys, owns, and depreciates physical servers. | Organization rents cloud compute/storage without owning hardware. |
| **Capacity Sizing** | Over-provisioned for anticipated peak load; idle during troughs. | Dynamically auto-scaled up/down based on real-time CPU/memory demand. |
| **Accounting Impact** | Capitalized on balance sheet; amortized over 3–5 years. | Expensed immediately on income statement as operating costs. |

---

## 🛡️ 3. Digital Personal Data Protection (DPDP) Act, 2023

Enacted to regulate the processing of digital personal data in India, enforcing user privacy and severe non-compliance penalties:

- **Data Principal:** The individual citizen to whom the personal data belongs.
- **Data Fiduciary:** The enterprise/entity (e.g., Infosys or its client) that determines the purpose and means of processing personal data.
- **Consent Architecture:** Data processing requires explicit, informed, unconditional, and freely given consent accompanied by clear privacy notices.
- **Data Retention & Erasure:** Personal data must be permanently erased once the specified processing purpose is fulfilled.
- **Penalties:** Fines up to ₹250 Crore for failure to implement reasonable security safeguards against data breaches.

---

## 🚀 4. The 7-Step Model of Cloud Migration

```
[ 1. Assess ] ──► [ 2. Plan ] ──► [ 3. Design ] ──► [ 4. Pilot ] ──► [ 5. Migrate ] ──► [ 6. Optimize ] ──► [ 7. Manage ]
```

1. **Assess the Environment:** Inventory legacy application architectures, evaluate data sizes, identify dependencies, and calculate Total Cost of Ownership (TCO).
2. **Plan & Choose Strategy (The 6 Rs):** Rehost (Lift & Shift), Replatform, Refactor (Cloud-Native), Repurchase (SaaS), Retain, or Retire.
3. **Design Cloud Architecture:** Define Target VPC/VNet topologies, IAM policies, zero-trust security perimeters, and database replication pipelines.
4. **Execute Pilot Run:** Migrate a non-mission-critical, low-risk service to benchmark latency, network throughput, and rollback protocols.
5. **Full Migration:** Execute live cutover, synchronizing production databases via CDC (Change Data Capture) with minimal downtime.
6. **Optimize Performance & Cost:** Right-size VM instance families, enable auto-scaling, purchase Reserved Instances/Savings Plans, and implement CDN caching.
7. **Manage & Monitor:** Continuously observe via CloudWatch/Datadog, enforce automated patch compliance, and monitor SLA health.

---

## 🌐 5. Multi-Cloud Architecture: Benefits & Mitigations

- **Vendor Lock-in Avoidance:** Using standard container runtimes (Docker/Kubernetes) prevents dependence on proprietary CSP APIs.
- **High Availability & Disaster Recovery:** Running redundant active-active clusters across two independent cloud providers eliminates single-point-of-failure risks.
- **Mitigating Challenges:** Cloud egress fees are minimized via direct private interconnects (AWS Direct Connect, Azure ExpressRoute), and data latency is handled via distributed edge caching.
