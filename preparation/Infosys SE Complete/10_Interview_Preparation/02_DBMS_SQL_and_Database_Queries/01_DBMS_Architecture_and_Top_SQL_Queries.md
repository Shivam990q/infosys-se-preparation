# 🗄️ DBMS, Relational Concepts & Top 20 Infosys SQL Queries

> **Infosys SE Interview Weightage:** High. Almost every candidate is asked to write 1 or 2 live SQL queries on paper or in the chatbox.

---

## 1. Core DBMS Concepts

### 1.1 ACID Properties of Transactions
- **Atomicity:** All operations in a transaction succeed, or the entire transaction is rolled back (All or Nothing).
- **Consistency:** Database transitions from one valid state to another, maintaining all constraints.
- **Isolation:** Concurrent transactions execute without interfering with one another.
- **Durability:** Once committed, transaction results survive system crashes or power failures.

### 1.2 Database Normalization
- **1NF (First Normal Form):** Each column contains atomic (indivisible) values; no repeating groups.
- **2NF (Second Normal Form):** Must be in 1NF and all non-key attributes are fully functionally dependent on the primary key (no partial dependency).
- **3NF (Third Normal Form):** Must be in 2NF and no transitive dependency exists (non-prime attributes must not depend on other non-prime attributes).

---

## 2. Top 10 Must-Know Infosys SQL Queries

### Query 01: Find the 2nd Highest (or Nth Highest) Salary
```sql
-- Method 1: Using Subquery
SELECT MAX(salary) AS SecondHighestSalary 
FROM Employee 
WHERE salary < (SELECT MAX(salary) FROM Employee);

-- Method 2: Generic Nth Highest using DENSE_RANK() (Infosys Favorite)
WITH RankedSalaries AS (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rank_pos
    FROM Employee
)
SELECT salary FROM RankedSalaries WHERE rank_pos = 2;
```

### Query 02: Find Duplicate Records in a Table
```sql
SELECT email, COUNT(*) AS occurrences
FROM Users
GROUP BY email
HAVING COUNT(*) > 1;
```

### Query 03: Inner vs Left vs Right Join
```sql
-- Find employees with their department names, including employees with no department
SELECT E.emp_name, D.dept_name
FROM Employee E
LEFT JOIN Department D ON E.dept_id = D.dept_id;
```
