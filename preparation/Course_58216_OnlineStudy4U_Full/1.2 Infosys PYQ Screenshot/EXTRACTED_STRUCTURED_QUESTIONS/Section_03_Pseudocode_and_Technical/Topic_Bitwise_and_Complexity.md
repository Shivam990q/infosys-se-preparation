# Section - Technical Ability / Pseudocode
## Topic - Bitwise Operations and Time Complexity

> **Source Vault:** `1.2.1Infosys PYQ Screenshots- PART1`  
> **Print Optimization:** Monospace code listings, asymptotic complexity derivations.

---

### Question 1 [Source: `photo_815@28-10-2024_22-28-23.jpg`, `photo_816@28-10-2024_22-28-23.jpg`]
**Question:** What is the time complexity of the following code snippet? `[2 Marks]`

```c
int max(int x, int y) { return (x > y) ? x : y; }

int maxpalindrome(char *str)
{
    int n = strlen(str);
    int i, j, cl;
    int L[n][n];
    for (i = 0; i < n; i++)
        L[i][i] = 1;
        
    for (cl = 2; cl <= n; cl++)
    {
        for (i = 0; i < n - cl + 1; i++)
        {
            j = i + cl - 1;
            if (str[i] == str[j] && cl == 2)
                L[i][j] = 2;
            else if (str[i] == str[j])
                L[i][j] = L[i + 1][j - 1] + 2;
            else
                L[i][j] = max(L[i][j - 1], L[i + 1][j]);
        }
    }
    return L[0][n - 1];
}
```

**Answer Options:**
* **(A)** $O(n^3)$
* **(B)** $O(n \log n)$
* **(C)** $O(n^2)$
* **(D)** $O(2n)$

**Correct Answer:** **(C) O(n^2)**  
**Asymptotic Proof:**
1. Initialization loop runs from $0$ to $n-1$: $O(n)$ steps.
2. The nested loops:
   * The outer loop variable `cl` (chain length) runs from $2$ to $n$ ($n-1$ iterations).
   * For each length `cl`, the inner loop variable `i` runs from $0$ to $n - cl$.
   * Total number of iterations of the inner loop:
     $$\sum_{cl=2}^{n} (n - cl + 1) = (n - 1) + (n - 2) + \dots + 1 = \frac{n(n - 1)}{2} = O(n^2)$$
3. Inside the inner loop, all operations (lookups, arithmetic additions, comparisons) are $O(1)$.
4. Total Time Complexity is strictly $\mathbf{O(n^2)}$.

---

### Question 2 [Source: `photo_971@28-10-2024_22-33-04.jpg`]
**Question:** What is the time complexity of the following recursive function? `[2 Marks]`

```c
int func(int n)
{
    if (n <= 1)
        return 1;
    return func(n - 1) + func(n - 1);
}
```

**Answer Options:**
* **(A)** $O(n)$
* **(B)** $O(2^n)$
* **(C)** $O(n^2)$
* **(D)** $O(\log n)$

**Correct Answer:** **(B) O(2^n)**  
**Proof:**
* Recurrence relation: $T(n) = 2T(n - 1) + O(1)$.
* Expanding: $T(n) = 2(2T(n - 2)) = 4T(n - 2) = 2^k T(n - k)$.
* When $k = n$, $T(n) = 2^n T(0) = O(2^n)$.

---

### Question 3 [Source: `IMG_20210613_155952_963.jpg`]

**Question Statement:**
Choose the correct option. Akshay has a Heap of 15 elements. He stores this Heap as an Array Arr. The starting index of Arr is 1. Which subarray of this Array stores the leaves of the Heap?

**Options:**
- A) Arr[8..15]
- B) Arr[7..15]
- C) Arr[10..15]
- D) Data Insufficient

**Correct Answer:** **A) Arr[8..15]**

**Mathematical & Computer Science Proof:**
1. In a complete binary tree/heap with $n$ elements stored in a 1-based indexing array $Arr[1 \dots n]$:
   - For any node at index $i$, its left child is located at $2i$ and its right child at $2i + 1$.
   - A node $i$ has children if and only if $2i \le n$, which implies $i \le \lfloor n/2 \rfloor$.
   - Thus, internal (non-leaf) nodes occupy indices $1, 2, \dots, \lfloor n/2 \rfloor$.
2. Leaf nodes have no children and therefore occupy all indices $i > \lfloor n/2 \rfloor$, which corresponds to:
   $$\left\lfloor \frac{n}{2} \right\rfloor + 1 \le i \le n$$
3. Substituting $n = 15$:
   $$\left\lfloor \frac{15}{2} \right\rfloor = 7$$
   - Internal nodes: $Arr[1..7]$
   - Leaf nodes: $Arr[7 + 1 .. 15] = \mathbf{Arr[8..15]}$
4. Hence, the leaves are stored in subarray **Arr[8..15]** (Option A).
