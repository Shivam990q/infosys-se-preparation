# Section 02 — Coding and Data Structures
## Topic 06: Python Sorting Algorithms Complete Suite (Priyanshi Mam)

**Source Documents:**  
- `Class 1 Sorting Algo.pdf` (Bubble & Selection Sort)  
- `Class 2 Sorting Algo 2.pdf` (Insertion Sort)  
- `Class 3 Merge sort.pdf` (Merge Sort)  
- `Class 4 Quick sort.pdf` (Quick Sort)  
- `Class 5 Heap Sort.pdf` (Heap Sort)  
**Instructor:** Priyanshi Mam  
**Total Pages:** 26 Pages across 5 Modules  
**Core Highlights:** Complete Algorithm Formulations, Step-by-Step State Progressions, Worst/Average/Best Case Time & Space Complexities, Stability Criteria, In-Place vs Out-of-Place Memory Constraints.

---

### Algorithm Comparison Matrix

| Algorithm | Best Case Time | Average Case Time | Worst Case Time | Space Complexity | Stability | Method Paradigm |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **Bubble Sort** | $O(N)$ (optimized) | $O(N^2)$ | $O(N^2)$ | $O(1)$ | Stable | Adjacent Swapping |
| **Selection Sort** | $O(N^2)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | Unstable | Minimum Selection |
| **Insertion Sort** | $O(N)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | Stable | Incremental Insertion |
| **Merge Sort** | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(N)$ | Stable | Divide & Conquer |
| **Quick Sort** | $O(N \log N)$ | $O(N \log N)$ | $O(N^2)$ | $O(\log N)$ | Unstable | Pivot Partitioning |
| **Heap Sort** | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(1)$ | Unstable | Binary Max-Heap |

---

### Python Implementations

#### 1. Bubble Sort (Optimized with Early Exit Flag)
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr
```

#### 2. Selection Sort
```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr
```

#### 3. Merge Sort ($O(N \log N)$ Stable Divide & Conquer)
```python
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr
```

#### 4. Quick Sort (Lomuto Partition Scheme)
```python
def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
    return arr
```

#### 5. Heap Sort (In-Place Max-Heapify)
```python
def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    # Build Max-Heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
    return arr
```
