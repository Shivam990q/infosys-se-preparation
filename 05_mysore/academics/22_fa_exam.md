# Mysore Foundation Program: FA Exam Blueprint & Hands-On Codebank

**Role:** Systems Engineer Trainee (JL2) | **Company:** Infosys Limited  
**Location:** Global Education Centre (GEC), Mysuru  
**High Stakes Warning:** Scoring <65% aggregate or failing retests results in immediate termination and campus eviction.

---

## 1. Mysore Foundation Program (FP) Evaluation Architecture

The training is split into two rigorous academic phases: **Generic Foundation** and **Stream Specialization**.

```
+---------------------------------------------------------------------------------+
|                       MYSORE TRAINING EVALUATION MATRIX                         |
+---------------------+-------------------+---------------------+-----------------+
| Evaluation Stage    | Core Curriculum   | Assessment Format   | Pass Benchmark  |
+---------------------+-------------------+---------------------+-----------------+
| FA1 (Generic)       | Python Core, OOPs,| 40% Objective (MCQ) | 65% Minimum     |
|                     | Data Structures   | 60% Hands-on Coding | (Per exam)      |
+---------------------+-------------------+---------------------+-----------------+
| FA2 (Generic)       | RDBMS, SQL, DB    | 40% Objective (MCQ) | 65% Minimum     |
|                     | Normalization     | 60% Live Queries    | (Per exam)      |
+---------------------+-------------------+---------------------+-----------------+
| FA3 (Generic)       | Python + SQL Full | Integrated Project  | 65% Minimum     |
|                     | App Integration   | Code & Architecture |                 |
+---------------------+-------------------+---------------------+-----------------+
| Stream Training     | Java / Spring Boot| FA1, FA2, FA3 exams | Min 50% in each |
| (Post-Generic)      | or Cloud / Data   | + FA4 Final Project | & 65% Aggregate |
+---------------------+-------------------+---------------------+-----------------+
```

### The Retest Policy & Termination Protocol
1. **First Failure:** If a trainee scores below 65%, they are placed on an academic remedial track and scheduled for **Retest 1**.
2. **Second Failure:** If Retest 1 is failed, the trainee receives a **Final Retest 2** under senior faculty supervision.
3. **Discontinuation:** Failing Retest 2 results in **immediate termination of employment**. Trainees are given 24 hours to clear their ECC hostel room and exit the campus gates.

---

## 2. FA1 Real Exam Problem: Python OOP & Custom Exceptions

### Problem Statement: Airline Cargo Logistics System
You must design an object-oriented Python application that manages cargo bookings.

**Requirements:**
1. Define a custom exception `InvalidWeightException` that inherits from `Exception`.
2. Create a class `CargoShipment` with private attributes: `__shipment_id`, `__cargo_type`, `__weight_kg`, and `__total_cost`.
3. Valid cargo types are: `'PERISHABLE'`, `'ELECTRONICS'`, `'HAZARDOUS'`. If any other type is passed, raise `ValueError`.
4. Weight must be between **1 kg and 10,000 kg**. If outside this range, raise `InvalidWeightException("Weight out of allowed limits")`.
5. Rate Calculation:
   - `'PERISHABLE'`: Base rate ₹120/kg
   - `'ELECTRONICS'`: Base rate ₹180/kg
   - `'HAZARDOUS'`: Base rate ₹250/kg
   - If weight $> 1,000\text{ kg}$, apply an automatic 10% bulk discount on total cost.
6. Provide getters and a `display_manifest()` method.

### Production-Grade Solution (FA1 Tested Standard):

```python
class InvalidWeightException(Exception):
    """Raised when shipment weight is outside allowable operational bounds."""
    def __init__(self, message="Shipment weight must be between 1 and 10,000 kg."):
        super().__init__(message)


class CargoShipment:
    # Class-level rate card mapping
    RATE_CARD = {
        "PERISHABLE": 120.0,
        "ELECTRONICS": 180.0,
        "HAZARDOUS": 250.0
    }

    def __init__(self, shipment_id: str, cargo_type: str, weight_kg: float):
        self.__shipment_id = shipment_id
        self.__cargo_type = self._validate_cargo_type(cargo_type.upper())
        self.__weight_kg = self._validate_weight(weight_kg)
        self.__total_cost = 0.0
        self._calculate_total_cost()

    def _validate_cargo_type(self, cargo_type: str) -> str:
        if cargo_type not in self.RATE_CARD:
            raise ValueError(f"Invalid cargo type: '{cargo_type}'. Must be one of {list(self.RATE_CARD.keys())}")
        return cargo_type

    def _validate_weight(self, weight: float) -> float:
        if not (1.0 <= weight <= 10000.0):
            raise InvalidWeightException(f"Weight {weight} kg is invalid. Permitted range is 1 - 10000 kg.")
        return weight

    def _calculate_total_cost(self) -> None:
        base_rate = self.RATE_CARD[self.__cargo_type]
        gross_cost = self.__weight_kg * base_rate
        
        # Apply 10% bulk discount if weight exceeds 1000 kg
        if self.__weight_kg > 1000.0:
            gross_cost *= 0.90
            
        self.__total_cost = round(gross_cost, 2)

    # Encapsulated Public Getters
    def get_shipment_id(self) -> str:
        return self.__shipment_id

    def get_cargo_type(self) -> str:
        return self.__cargo_type

    def get_weight_kg(self) -> float:
        return self.__weight_kg

    def get_total_cost(self) -> float:
        return self.__total_cost

    def display_manifest(self) -> str:
        return (
            f"[MANIFEST] ID: {self.__shipment_id} | "
            f"Type: {self.__cargo_type} | "
            f"Weight: {self.__weight_kg} kg | "
            f"Billed Cost: INR {self.__total_cost:,.2f}"
        )


# Verification & Test Runner
if __name__ == "__main__":
    try:
        s1 = CargoShipment("SHP-101", "ELECTRONICS", 500)
        print(s1.display_manifest())
        # Cost: 500 * 180 = 90,000.00

        s2 = CargoShipment("SHP-102", "PERISHABLE", 2000)
        print(s2.display_manifest())
        # Cost: 2000 * 120 = 240,000 -> 10% off = 216,000.00

        # Boundary Exception Test
        s3 = CargoShipment("SHP-103", "HAZARDOUS", 15000)
    except InvalidWeightException as e:
        print(f"Caught Expected Exception: {e}")
    except ValueError as e:
        print(f"Validation Error: {e}")
```

---

## 3. FA2 Real Exam Problem: RDBMS & Complex SQL Queries

### Schema Overview:
- `Departments (dept_id INT PRIMARY KEY, dept_name VARCHAR(50), location VARCHAR(50))`
- `Employees (emp_id INT PRIMARY KEY, emp_name VARCHAR(50), salary DECIMAL(10,2), dept_id INT, manager_id INT)`
- `Projects (project_id INT PRIMARY KEY, project_name VARCHAR(50), budget DECIMAL(12,2))`
- `ProjectAssignments (emp_id INT, project_id INT, hours_allocated INT, PRIMARY KEY(emp_id, project_id))`

### 5 Verified FA2 Exam Queries with Solutions:

#### Query 1: Find the 2nd Highest Salary per Department
```sql
SELECT dept_id, emp_name, salary
FROM (
    SELECT 
        dept_id, 
        emp_name, 
        salary,
        DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) as rank_pos
    FROM Employees
) ranked_salaries
WHERE rank_pos = 2;
```

#### Query 2: Find Employees Assigned to More Than 2 Projects with Total Hours > 50
```sql
SELECT e.emp_id, e.emp_name, COUNT(pa.project_id) AS total_projects, SUM(pa.hours_allocated) AS total_hours
FROM Employees e
INNER JOIN ProjectAssignments pa ON e.emp_id = pa.emp_id
GROUP BY e.emp_id, e.emp_name
HAVING COUNT(pa.project_id) > 2 AND SUM(pa.hours_allocated) > 50;
```

#### Query 3: Find Departments Where Every Employee Earns Above the Company Average Salary
```sql
SELECT d.dept_id, d.dept_name
FROM Departments d
WHERE NOT EXISTS (
    SELECT 1 
    FROM Employees e 
    WHERE e.dept_id = d.dept_id 
      AND e.salary <= (SELECT AVG(salary) FROM Employees)
)
AND EXISTS (
    SELECT 1 
    FROM Employees e 
    WHERE e.dept_id = d.dept_id
);
```

#### Query 4: Identify All Employees Who Are Also Managers with Their Team Headcount
```sql
SELECT m.emp_id AS manager_id, m.emp_name AS manager_name, COUNT(e.emp_id) AS team_size
FROM Employees m
INNER JOIN Employees e ON m.emp_id = e.manager_id
GROUP BY m.emp_id, m.emp_name
ORDER BY team_size DESC;
```

#### Query 5: Increment Salaries Conditionally Using CASE (Annual Appraisal Batch)
```sql
UPDATE Employees
SET salary = CASE 
    WHEN dept_id = 101 THEN salary * 1.15 -- 15% hike for Cloud DU
    WHEN dept_id = 102 THEN salary * 1.10 -- 10% hike for Digital DU
    ELSE salary * 1.05                   -- 5% standard hike
END;
```

---

## 4. FA3 Capstone Integration: Python-MySQL Database Pipeline

A core requirement in FA3 is building a database-backed CRUD controller with robust error handling and transactional rollbacks.

```python
import sqlite3

def execute_funds_transfer(db_path: str, sender_id: int, receiver_id: int, transfer_amount: float) -> bool:
    """
    Executes an atomic bank funds transfer.
    Demonstrates ACID compliance required for Mysore FA3.
    """
    if transfer_amount <= 0:
        raise ValueError("Transfer amount must be strictly positive.")

    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    try:
        # 1. Begin explicit transaction
        cursor.execute("BEGIN TRANSACTION;")

        # 2. Check sender balance
        cursor.execute("SELECT balance FROM Accounts WHERE account_id = ?", (sender_id,))
        sender_record = cursor.fetchone()
        if not sender_record:
            raise ValueError(f"Sender account {sender_id} not found.")

        current_balance = sender_record[0]
        if current_balance < transfer_amount:
            raise ValueError(f"Insufficient funds: Balance is INR {current_balance}, attempted transfer is INR {transfer_amount}.")

        # 3. Check receiver account existence
        cursor.execute("SELECT 1 FROM Accounts WHERE account_id = ?", (receiver_id,))
        if not cursor.fetchone():
            raise ValueError(f"Receiver account {receiver_id} does not exist.")

        # 4. Debit sender
        cursor.execute(
            "UPDATE Accounts SET balance = balance - ? WHERE account_id = ?",
            (transfer_amount, sender_id)
        )

        # 5. Credit receiver
        cursor.execute(
            "UPDATE Accounts SET balance = balance + ? WHERE account_id = ?",
            (transfer_amount, receiver_id)
        )

        # 6. Commit atomic transaction
        conn.commit()
        print(f"Transfer of INR {transfer_amount:,.2f} from Acct {sender_id} to Acct {receiver_id} successful.")
        return True

    except Exception as error:
        # Atomic Rollback on any failure
        conn.rollback()
        print(f"Transaction Aborted and Rolled Back: {error}")
        return False

    finally:
        conn.close()
```

---

## 5. Common Pitfalls That Lead to Mysore FA Retests

1. **Ignoring Boundary & Null Value Checks:** Mysore automated test suites run code against edge cases (e.g., negative integers, empty strings, null records). Failing to validate input causes unit tests to fail silently.
2. **Hardcoding Connection Credentials:** Never hardcode paths or credentials into logic; use structured configuration objects.
3. **Leaving Database Connections Unclosed:** Automated grading scripts verify whether DB connection leaks occur. Always use `try...finally` or context managers (`with sqlite3.connect()`).
4. **Neglecting String Formatting Rules:** Automated output parsers check exact string output. A missing space or misplaced capital letter will fail an output comparison test.
