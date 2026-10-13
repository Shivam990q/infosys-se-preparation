# Section - Technical Ability / Pseudocode
## Topic - Pseudocode Execution and Loops

> **Source Vault:** `1.2.1Infosys PYQ Screenshots- PART1`  
> **Print Optimization:** Formatted monospace code blocks, exact step-by-step trace tables.

---

### Question 1 [Source: `photo_808@28-10-2024_22-28-23.jpg`]
**Question:** What does the following code snippet do? `[2 Marks]`

```c
int a = 2, b = 4, m;
m = (a > b) ? a : b;

while (1) {
    if (m % a == 0 && m % b == 0) {
        print m;
        break;
    }
    ++m;
}
```

**Answer Options:**
* **(A)** It displays the minimum number between 2 and 4
* **(B)** It displays the HCF of 2 and 4
* **(C)** It displays the maximum number between 2 and 4
* **(D)** It displays the LCM of 2 and 4

**Correct Answer:** **(D) It displays the LCM of 2 and 4**  
**Execution Trace:**
1. `m` is initialized to $\max(a, b) = \max(2, 4) = 4$.
2. In the loop, condition `m % a == 0 && m % b == 0` tests whether `m` is simultaneously divisible by both numbers $a$ and $b$.
3. Since `m` starts at $\max(a, b)$ and increments by 1 on every iteration until the first common multiple is reached, the output is by mathematical definition the **Least Common Multiple (LCM)** of $a$ and $b$.

---

### Question 2 [Source: `photo_807@28-10-2024_22-28-23.jpg`]
**Question:** What is the output of the following recursive pseudocode for `fun(7, 8)`? `[2 Marks]`

```text
fun (input x, input y)
if (x < y)
    return fun (y, x)
elseif (y != 0)
    return (x + fun (x, y - 1))
else
    return 0
```

**Answer Options:**
* **(A)** 76
* **(B)** 56
* **(C)** 81
* **(D)** 68

**Correct Answer:** **(B) 56**  
**Execution Trace:**
1. Call `fun(7, 8)`:
   * Since $7 < 8$, it executes `return fun(8, 7)`.
2. `fun(8, 7)`:
   * Here $x = 8, y = 7$. Since $y \ne 0$, it returns $8 + \text{fun}(8, 6)$.
3. Recursion repeatedly adds 8 exactly 7 times until $y = 0$:
   $$\text{Result} = 8 \times 7 = 56$$
4. The algorithm implements recursive multiplication via repeated addition ($x \times y$). Thus, output is **56**.

---

### Question 3 [Source: `photo_897@28-10-2024_22-33-03.jpg`]
**Question:** You have written the following algorithm to delete a node from a singly linked list given a pointer to the node to be deleted (`node`):
* **Step 1:** Find next node of the current node: `temp = node->next;`
* **Step 2:** Copy data of `temp` into `node`: `node->data = temp->data;`
* **Step 3:** Link current node to the node after `temp`: `node->next = temp->next;`
* **Step 4:** Free memory: `free(temp);`

Under which condition does this standard deletion trick FAIL?

**Answer Options:**
* **(A)** When the node to be deleted is the head node
* **(B)** When the node to be deleted is the last (tail) node
* **(C)** When the linked list contains an even number of nodes
* **(D)** When the node has negative integer data

**Correct Answer:** **(B) When the node to be deleted is the last (tail) node**  
**Explanation:**
* If `node` is the last node of the list, `node->next` is `NULL`.
* Step 1 sets `temp = NULL`, and Step 2 attempts `node->data = temp->data`, resulting in a **Null Pointer Dereference (Segmentation Fault)**.
* Therefore, this $O(1)$ deletion technique cannot delete the tail node without a pointer to the predecessor.

---

### Question 4 [Source: `photo_900@28-10-2024_22-33-03.jpg`]
**Question:** You want to sort an array `arr` such that the sorted array contains elements in ascending order.
```text
for i from 0 to n-1:
    min_idx = i
    for j from i+1 to n:
        if arr[j] < arr[min_idx]:
            min_idx = j
    XXX
```
What can you use in place of `XXX` to complete the Selection Sort algorithm?

**Answer Options:**
* **(A)** `swap(arr[i], arr[min_idx])`
* **(B)** `arr[i] = arr[min_idx]`
* **(C)** `swap(arr[0], arr[n-1])`
* **(D)** `arr[min_idx] = arr[i]`

**Correct Answer:** **(A) swap(arr[i], arr[min_idx])**  
**Explanation:**
* After identifying the index of the minimum element in the unsorted suffix (`min_idx`), Selection Sort places this element into position `i` by swapping `arr[i]` with `arr[min_idx]`.
