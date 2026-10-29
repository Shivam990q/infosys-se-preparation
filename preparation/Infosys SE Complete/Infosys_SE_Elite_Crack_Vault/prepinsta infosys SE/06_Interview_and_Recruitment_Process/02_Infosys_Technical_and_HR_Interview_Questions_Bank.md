# Infosys Systems Engineer (SE) Technical & HR Interview Question Bank

**Source Authority:** PrepInsta Infosys Placement Portal & Verified Candidate Interview Transcripts
**Target Designation:** Systems Engineer (SE) | **Format:** Virtual Video Interview (30–45 Mins)

---

## 🎯 1. Technical Interview Architecture (Core Engineering Fundamentals)

The Infosys SE technical interview evaluates core computer science fundamentals, logical clarity, code readability, and deep familiarity with your resume and academic project.

### A. Object-Oriented Programming Systems (OOPs)

#### Q1. What are the four core pillars of OOPs? Explain each with a real-world example.
- **Abstraction:** Hiding complex implementation details and showing only the essential features to the user.
  - *Example:* When driving a car, you press the accelerator to speed up; you do not need to know the internal combustion engine mechanism or fuel injection rates.
- **Encapsulation:** Binding data (variables) and the methods that manipulate them into a single unit (class), restricting direct access via access specifiers (`private`, `protected`).
  - *Example:* A medical capsule contains medicine inside a protective shell; in a class, private fields are accessed only through getter and setter methods.
- **Inheritance:** The mechanism where a new class (subclass/derived class) derives attributes and behavior from an existing class (superclass/base class) to promote code reusability.
  - *Example:* An `ElectricCar` class inherits common properties (`speed`, `wheels`, `brakes`) from a general `Vehicle` class.
- **Polymorphism:** The ability of an entity to take multiple forms.
  - *Compile-time (Static):* Method Overloading (same method name, different parameter signature in the same class).
  - *Run-time (Dynamic):* Method Overriding (subclass provides a specific implementation of a method already declared in its parent class using `@Override`).

#### Q2. What is the difference between an Abstract Class and an Interface?
| Parameter | Abstract Class | Interface |
| :--- | :--- | :--- |
| **Methods** | Can have both abstract methods and concrete (implemented) methods. | Until Java 7, only abstract methods. Java 8+ allows `default` and `static` methods. |
| **Variables** | Can have instance variables (`private`, `protected`, `public`). | Fields are implicitly `public static final` (constants only). |
| **Inheritance** | A class can extend only **one** abstract class (Single Inheritance). | A class can implement **multiple** interfaces (Multiple Inheritance support). |
| **Constructor** | Has a constructor invoked during subclass instantiation. | Does NOT have constructors; cannot be instantiated directly. |
| **Speed** | Marginally faster than interfaces as it avoids search tables. | Requires dynamic method lookup across interfaces. |

#### Q3. What is the difference between Method Overloading and Method Overriding?
- **Method Overloading:**
  - Occurs within the **same class**.
  - Methods share the same name but must have **different method signatures** (different number, types, or order of parameters).
  - Resolved at **compile time** (Early binding).
  - Return type alone cannot distinguish overloaded methods.
- **Method Overriding:**
  - Occurs across **two classes** connected by inheritance (Parent and Child).
  - Method name, return type, and parameter list must be **identical**.
  - Resolved at **runtime** (Late / Dynamic binding).

---

### B. Database Management Systems (DBMS & SQL)

#### Q4. What are the ACID properties in database transactions?
- **Atomicity:** The "all or nothing" principle. Either all operations within the transaction execute successfully, or the entire transaction is rolled back to its initial state.
- **Consistency:** The database transitions from one valid state to another valid state, preserving all defined integrity constraints and rules.
- **Isolation:** Concurrent transactions execute independently without interfering with each other. Intermediate uncommitted states of one transaction are invisible to others.
- **Durability:** Once a transaction commits successfully, its changes persist permanently on non-volatile storage, even in the event of an immediate system crash or power outage.

#### Q5. Write an SQL query to find the 2nd Highest Salary of an employee.
```sql
-- Approach 1: Using Subquery (Universal across MySQL, Oracle, PostgreSQL, SQL Server)
SELECT MAX(salary) AS SecondHighestSalary 
FROM Employee 
WHERE salary < (SELECT MAX(salary) FROM Employee);

-- Approach 2: Using Dense Rank (Window Function)
WITH RankedSalaries AS (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM Employee
)
SELECT salary AS SecondHighestSalary 
FROM RankedSalaries 
WHERE rnk = 2;
```

#### Q6. What is the difference between Primary Key and Unique Key?
| Feature | Primary Key | Unique Key |
| :--- | :--- | :--- |
| **NULL values** | Cannot accept NULL values under any circumstance. | Can accept **one** NULL value (in SQL Server/MySQL) or multiple depending on SQL standard. |
| **Quantity per table** | Exactly **one** primary key per table. | Multiple unique keys can exist in a single table. |
| **Index type** | Automatically generates a **Clustered Index** by default. | Generates a **Non-Clustered Index** by default. |

#### Q7. Explain SQL Joins with syntax.
- **INNER JOIN:** Returns records that have matching values in both tables.
- **LEFT (OUTER) JOIN:** Returns all records from the left table, and matching records from the right table (unmatched right rows show `NULL`).
- **RIGHT (OUTER) JOIN:** Returns all records from the right table, and matching records from the left table.
- **FULL (OUTER) JOIN:** Returns all records when there is a match in either left or right table.

---

### C. Data Structures & Algorithms (DSA)

#### Q8. What is the difference between an Array and a Linked List?
| Feature | Array | Linked List |
| :--- | :--- | :--- |
| **Memory Allocation** | Contiguous memory allocation. | Non-contiguous (nodes linked via pointers). |
| **Size** | Fixed size at declaration (static). | Dynamic size (grows/shrinks at runtime). |
| **Element Access** | O(1) random access via index `arr[i]`. | O(n) sequential traversal required. |
| **Insertion / Deletion** | Expensive O(n) due to element shifting. | Efficient O(1) if pointer to node is known. |
| **Memory Overhead** | Low (stores only data elements). | Higher (stores data + memory pointers/references). |

#### Q9. How do you detect a cycle in a Singly Linked List?
- **Floyd's Cycle-Finding Algorithm (Tortoise and Hare Algorithm):**
  1. Initialize two pointers: `slow` and `fast`, both starting at the `head` node.
  2. Advance `slow` by 1 step (`slow = slow.next`) and `fast` by 2 steps (`fast = fast.next.next`).
  3. If `fast` or `fast.next` becomes `null`, the list has **no cycle**.
  4. If `slow == fast` at any point, a **cycle exists**.
  - **Time Complexity:** O(N) | **Space Complexity:** O(1).

#### Q10. What are the time complexities of common sorting algorithms?
| Algorithm | Best Case | Average Case | Worst Case | Space Complexity | Stable? |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Bubble Sort** | O(N) | O(N^2) | O(N^2) | O(1) | Yes |
| **Insertion Sort**| O(N) | O(N^2) | O(N^2) | O(1) | Yes |
| **Merge Sort** | O(N log N) | O(N log N) | O(N log N) | O(N) | Yes |
| **Quick Sort** | O(N log N) | O(N log N) | O(N^2) | O(log N) | No |
| **Heap Sort** | O(N log N) | O(N log N) | O(N log N) | O(1) | No |

---

### D. Operating Systems & Computer Networks

#### Q11. What is the difference between a Process and a Thread?
- **Process:** An executing program in memory. Possesses its own independent address space, program counter, registers, and open files. Inter-process communication (IPC) requires sockets or shared memory.
- **Thread:** A lightweight unit of execution within a process. Multiple threads of the same process share the process's address space, heap, and open file descriptors, but maintain independent stacks and registers. Context switching between threads is significantly faster than between processes.

#### Q12. What are the four necessary Coffman conditions for a Deadlock to occur?
1. **Mutual Exclusion:** At least one resource must be held in a non-shareable mode.
2. **Hold and Wait:** A process is currently holding at least one resource and waiting to acquire additional resources held by other processes.
3. **No Preemption:** Resources cannot be forcibly taken from a process; they can only be released voluntarily after completing its execution.
4. **Circular Wait:** A closed chain of processes exists such that each process holds at least one resource that is needed by the next process in the chain.

---

## 👔 2. HR & Behavioral Interview Master Guide (STAR Framework)

### Q1. "Tell me about yourself." (Professional Elevator Pitch)
- **Model Answer Structure:**
  - *Present:* Name, degree, college, major, and current aggregate percentage/CGPA.
  - *Past:* Technical skills acquired (Python/Java/C++, SQL, web development, cloud basics).
  - *Achievements/Projects:* Mention 1 major project with measurable impact (e.g., "I built a full-stack student grievance portal that reduced complaint resolution turnaround by 40%").
  - *Future:* Why you are eager to launch your career with Infosys and undergo training at the Mysore Global Education Centre.

### Q2. "Why should Infosys hire you over other candidates?"
- **Model Answer:**
  > "Infosys is globally admired for its world-class training ecosystem at Mysore. You should hire me because I bring a solid foundation in computer science principles—specifically data structures, clean coding, and SQL—combined with a disciplined, fast-learning mindset. In my academic projects, I have demonstrated ownership, team collaboration, and adaptability. I am eager to contribute immediately and embrace the technical culture at Infosys."

### Q3. "Are you comfortable relocating to any Infosys Development Centre and working in 24x7 rotational shifts?"
- **Mandatory Answer:**
  > "Yes, absolutely. I understand that Infosys serves mission-critical global clients across diverse time zones. I am fully open to relocating to any Infosys DC across India—whether Bangalore, Pune, Hyderabad, Mysore, Chennai, or Bhubaneswar—and I am completely comfortable working in rotational night shifts as required by business needs."

### Q4. "Infosys requires a 12-month Service Agreement (Bond). Are you comfortable signing it?"
- **Mandatory Answer:**
  > "Yes, I am completely comfortable signing the 12-month Service Agreement. Infosys invests heavily in freshers during the foundation training at Mysore, and I view the 12-month period as a valuable opportunity for rapid professional learning, stability, and career development."

### Q5. "Tell me about a challenging situation you encountered during your academic project and how you resolved it." (STAR Method)
- **Situation:** During our final year IoT crop monitoring project, our sensor transmission module repeatedly lost Wi-Fi connectivity and dropped telemetry packets.
- **Task:** As the firmware programmer, my responsibility was to ensure zero data loss during network disconnections.
- **Action:** I implemented a local ring buffer on the microcontroller's flash EEPROM that cached readings during offline periods and instituted an exponential backoff retry protocol to flush data once Wi-Fi reconnected.
- **Result:** Data transmission packet delivery reached 99.8% reliability, and our project secured first place in the departmental tech symposium.