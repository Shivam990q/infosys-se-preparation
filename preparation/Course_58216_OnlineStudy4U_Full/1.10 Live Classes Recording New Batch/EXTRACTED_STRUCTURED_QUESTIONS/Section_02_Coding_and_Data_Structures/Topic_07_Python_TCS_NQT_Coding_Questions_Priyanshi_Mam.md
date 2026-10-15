# Section 02 — Coding and Data Structures
## Topic 07: Python TCS NQT Coding Questions (Priyanshi Mam)

**Source Documents:**  
- `Class 6 TCS NQT Pattern.pdf`  
- `Class 7 TCS Coding Practice Qs.pdf`  
- `Class 8 TCS NQT Qs P2.pdf`  
**Instructor:** Priyanshi Mam  
**Total Pages:** 19 Pages  
**Core Highlights:** TCS NQT Input Formats (Space-Separated, Comma-Separated, Line-Separated), In-Place Two-Pointer Partitioning, Chocolate Factory Empty Packet Relocation, Continuous Subarray Maximums.

---

### Standard TCS NQT Input Parsing Templates in Python
```python
import sys

# 1. Size given on Line 1, Space-separated array on Line 2:
# n = int(input().strip())
# arr = list(map(int, input().split()))

# 2. Single-line space-separated integers:
# arr = list(map(int, input().split()))

# 3. Comma-separated integers:
# arr = list(map(int, input().strip().split(',')))

# 4. Handling EOF / unknown number of inputs:
# raw_data = sys.stdin.read().split()
```

---

### Problem 1: Chocolate Factory Empty Packets (Move Zeros to End)
**Problem Description:**  
A chocolate factory packs chocolates into packets. Some packets are empty and represented by `0`, while non-empty packets contain integer amounts of chocolates. All empty packets (`0`) must be shifted to the end of the conveyor belt while maintaining the relative order of non-empty chocolate packets.

**Example:**  
- **Input:** `[4, 5, 0, 1, 9, 0, 5, 0]`  
- **Output:** `[4, 5, 1, 9, 5, 0, 0, 0]`

**Optimal Two-Pointer Python Solution ($O(N)$ Time, $O(1)$ Space):**
```python
def move_empty_packets(arr):
    n = len(arr)
    non_zero_pos = 0

    # Move non-zero elements forward
    for i in range(n):
        if arr[i] != 0:
            arr[non_zero_pos], arr[i] = arr[i], arr[non_zero_pos]
            non_zero_pos += 1
    return arr

# Test Case Demonstration
if __name__ == '__main__':
    packets = [4, 5, 0, 1, 9, 0, 5, 0]
    print("Initial Packets: ", packets)
    result = move_empty_packets(packets)
    print("Rearranged Packets:", result)
```

---

### Problem 2: Equilibrium Index of an Array
**Problem Description:**  
Find an equilibrium index in an array where the sum of elements at lower indices equals the sum of elements at higher indices.

```python
def find_equilibrium_index(arr):
    total_sum = sum(arr)
    left_sum = 0

    for i, num in enumerate(arr):
        # right_sum = total_sum - left_sum - num
        if left_sum == (total_sum - left_sum - num):
            return i
        left_sum += num
    return -1
```
