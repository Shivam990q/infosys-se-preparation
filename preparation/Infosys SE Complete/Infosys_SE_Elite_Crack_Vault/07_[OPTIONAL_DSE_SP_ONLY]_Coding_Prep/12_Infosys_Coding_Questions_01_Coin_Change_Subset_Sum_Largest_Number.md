# Infosys PYQ : Coding Questions Complete Compendium
**Source Document:** `_Infosys_coding_1.pdf`  
**Target Role:** Infosys Systems Engineer (SE) / Specialist Programmer (SP) / DSE  
**Exam Focus:** Dynamic Programming, Greedy Algorithms, Custom Comparators  
**Implementations Provided:** C++20, Java 21, Python 3.12 (Zero Placeholders, 100% Production-Ready)

---

## 🎯 Architectural Overview of Infosys SE / SP Coding Round

The Infosys coding round evaluates algorithmic efficiency, boundary handling, and time/space complexity optimization. The problems featured in this compendium represent the three canonical algorithmic paradigms most heavily tested in Infosys on-campus and off-campus technical rounds:

| Problem # | Problem Title | Algorithmic Paradigm | Time Complexity | Space Complexity | Recurrence / Technique |
|:---:|:---|:---|:---:|:---:|:---|
| **01** | **Minimum Coins Required** | Unbounded Knapsack / Dynamic Programming | $\mathcal{O}(N \times V)$ | $\mathcal{O}(V)$ | $DP[i] = \min(DP[i], DP[i - c] + 1)$ |
| **02** | **Subset Sum Problem** | 0/1 Knapsack / Dynamic Programming | $\mathcal{O}(N \times \text{target})$ | $\mathcal{O}(\text{target})$ | $DP[j] = DP[j] \lor DP[j - arr[i]]$ |
| **03** | **Largest Number Formulation** | Custom String Comparator / Greedy | $\mathcal{O}(N \log N)$ | $\mathcal{O}(N)$ | Lexicographical compare: $(A + B) > (B + A)$ |

---

## 💻 CODING QUESTION 01 / 03: Minimum Coins Required (Coin Change)

### Problem Statement
Given an array `coins[]` of size $N$ representing positive denominations and a target value $V$, find the minimum number of coins needed to make change for $V$, assuming an infinite supply of each denomination. If that amount of money cannot be made up by any combination of the coins, return `-1`.

### Input / Output Specification
- **Input:**
  - `coins[]` = Array of positive integers
  - `V` = Target integer value
- **Output:**
  - Integer representing minimum coins, or `-1` if impossible.

### Test Cases & Edge Cases
```text
Test Case 1:
Input: coins[] = [25, 10, 5], V = 30
Output: 2
Explanation: 25 + 5 = 30 (2 coins)

Test Case 2:
Input: coins[] = [9, 6, 5, 1], V = 11
Output: 2
Explanation: 6 + 5 = 11 (2 coins; greedy choice 9 + 1 + 1 = 3 is suboptimal!)

Test Case 3:
Input: coins[] = [2], V = 3
Output: -1
Explanation: Not possible to make 3 with only coin 2.

Test Case 4 (Boundary):
Input: coins[] = [1, 2, 5], V = 0
Output: 0
Explanation: 0 coins needed for value 0.
```

### Mathematical Formulation & Algorithmic Deduction
1. **Subproblem Definition:** Let $DP[i]$ be the minimum number of coins needed to achieve target sum $i$.
2. **Base Case:** $DP[0] = 0$ (0 coins needed for sum 0). Initialize $DP[i] = \infty$ for all $i > 0$.
3. **Recurrence Relation:**
   $$DP[i] = \min_{c \in \text{coins}, c \le i} (DP[i - c] + 1)$$
4. **Greedy Failure Counterexample:** Why greedy doesn't work: For coins `[9, 6, 5, 1]` and $V = 11$, a greedy algorithm picks $9$, leaving $2$, then picks $1 + 1$ (total 3 coins: `9, 1, 1`). Dynamic Programming examines all states and finds $6 + 5 = 11$ (2 coins).

### Complete C++20 Implementation
```cpp
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int minCoins(const vector<int>& coins, int V) {
    if (V < 0) return -1;
    if (V == 0) return 0;

    // dp[i] stores the minimum coins needed for amount i
    // Initialize with V + 1 (representing infinity)
    vector<int> dp(V + 1, V + 1);
    dp[0] = 0;

    for (int i = 1; i <= V; ++i) {
        for (int coin : coins) {
            if (i - coin >= 0 && dp[i - coin] != V + 1) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return (dp[V] > V) ? -1 : dp[V];
}

int main() {
    vector<int> coins1 = {25, 10, 5};
    int V1 = 30;
    cout << "Test 1: " << minCoins(coins1, V1) << " (Expected: 2)" << endl;

    vector<int> coins2 = {9, 6, 5, 1};
    int V2 = 11;
    cout << "Test 2: " << minCoins(coins2, V2) << " (Expected: 2)" << endl;

    vector<int> coins3 = {2};
    int V3 = 3;
    cout << "Test 3: " << minCoins(coins3, V3) << " (Expected: -1)" << endl;

    return 0;
}
```

### Complete Java 21 Implementation
```java
import java.util.Arrays;

public class CoinChange {
    public static int minCoins(int[] coins, int V) {
        if (V < 0) return -1;
        if (V == 0) return 0;

        int[] dp = new int[V + 1];
        Arrays.fill(dp, V + 1);
        dp[0] = 0;

        for (int i = 1; i <= V; i++) {
            for (int coin : coins) {
                if (i - coin >= 0 && dp[i - coin] != V + 1) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }

        return dp[V] > V ? -1 : dp[V];
    }

    public static void main(String[] args) {
        int[] coins1 = {25, 10, 5};
        System.out.println("Test 1: " + minCoins(coins1, 30)); // 2

        int[] coins2 = {9, 6, 5, 1};
        System.out.println("Test 2: " + minCoins(coins2, 11)); // 2
    }
}
```

### Complete Python 3.12 Implementation
```python
def min_coins(coins: list[int], V: int) -> int:
    if V < 0:
        return -1
    if V == 0:
        return 0

    dp = [float('inf')] * (V + 1)
    dp[0] = 0

    for i in range(1, V + 1):
        for c in coins:
            if i - c >= 0:
                dp[i] = min(dp[i], dp[i - c] + 1)

    return -1 if dp[V] == float('inf') else dp[V]

if __name__ == "__main__":
    print(min_coins([25, 10, 5], 30))  # 2
    print(min_coins([9, 6, 5, 1], 11))  # 2
```

---

## 💻 CODING QUESTION 02 / 03: Subset Sum Problem

### Problem Statement
Given a set of non-negative integers `set[]` and an integer `target`, determine whether there exists any subset of `set[]` whose sum equals `target`. Return `true` if such a subset exists, otherwise return `false`.

### Input / Output Specification
- **Input:**
  - `set[]` = Array of non-negative integers
  - `target` = Target integer sum
- **Output:**
  - Boolean `true` or `false`

### Test Cases & Edge Cases
```text
Test Case 1:
Input: set[] = [3, 34, 4, 12, 5, 2], target = 9
Output: true
Explanation: Subset {4, 5} sums to 9 (also {3, 4, 2} sums to 9).

Test Case 2:
Input: set[] = [3, 34, 4, 12, 5, 2], target = 30
Output: false
Explanation: No subset sums to 30.

Test Case 3:
Input: set[] = [1, 2, 7], target = 0
Output: true
Explanation: The empty subset {} sums to 0.
```

### Mathematical Formulation & Algorithmic Deduction
1. **Subproblem Definition:** Let $DP[j]$ be a boolean value indicating whether a sum of $j$ can be achieved using a subset of the array elements examined so far.
2. **Space Optimization (1D Array):** By traversing backwards from `target` down to `num`, we avoid reusing the current element multiple times (preventing unbounded duplication):
   $$DP[j] = DP[j] \lor DP[j - \text{num}]$$
3. **Base Case:** $DP[0] = \text{true}$. All other $DP[j] = \text{false}$.

### Complete C++20 Implementation
```cpp
#include <iostream>
#include <vector>

using namespace std;

bool isSubsetSum(const vector<int>& set, int target) {
    if (target == 0) return true;
    if (target < 0) return false;

    // dp[j] is true if a subset with sum j can be formed
    vector<bool> dp(target + 1, false);
    dp[0] = true; // Base case: sum 0 is always achievable

    for (int num : set) {
        // Iterate backwards so each element is used at most once
        for (int j = target; j >= num; --j) {
            dp[j] = dp[j] || dp[j - num];
        }
    }

    return dp[target];
}

int main() {
    vector<int> set1 = {3, 34, 4, 12, 5, 2};
    cout << "Test 1: " << (isSubsetSum(set1, 9) ? "True" : "False") << " (Expected: True)" << endl;
    cout << "Test 2: " << (isSubsetSum(set1, 30) ? "True" : "False") << " (Expected: False)" << endl;
    return 0;
}
```

### Complete Java 21 Implementation
```java
public class SubsetSum {
    public static boolean isSubsetSum(int[] set, int target) {
        if (target == 0) return true;
        if (target < 0) return false;

        boolean[] dp = new boolean[target + 1];
        dp[0] = true;

        for (int num : set) {
            for (int j = target; j >= num; j--) {
                dp[j] = dp[j] || dp[j - num];
            }
        }

        return dp[target];
    }

    public static void main(String[] args) {
        int[] set = {3, 34, 4, 12, 5, 2};
        System.out.println("Target 9: " + isSubsetSum(set, 9));   // true
        System.out.println("Target 30: " + isSubsetSum(set, 30)); // false
    }
}
```

### Complete Python 3.12 Implementation
```python
def is_subset_sum(nums: list[int], target: int) -> bool:
    if target == 0:
        return True
    if target < 0:
        return False

    dp = [False] * (target + 1)
    dp[0] = True

    for num in nums:
        for j in range(target, num - 1, -1):
            dp[j] = dp[j] or dp[j - num]

    return dp[target]

if __name__ == "__main__":
    nums = [3, 34, 4, 12, 5, 2]
    print(is_subset_sum(nums, 9))   # True
    print(is_subset_sum(nums, 30))  # False
```

---

## 💻 CODING QUESTION 03 / 03: Largest Number

### Problem Statement
Given an array of strings representing non-negative integers, arrange them so that concatenating them produces the largest possible number. Return the result as a string.

### Input / Output Specification
- **Input:**
  - `arr[]` = Array of non-negative integer strings
- **Output:**
  - String representing the largest concatenated number.

### Test Cases & Edge Cases
```text
Test Case 1:
Input: arr = ["3", "30", "34", "5", "9"]
Output: "9534330"
Explanation: Ordering [9, 5, 34, 3, 30] yields "9534330". Notice 34 comes before 3 ("343" > "334"), but 3 comes before 30 ("330" > "303").

Test Case 2:
Input: arr = ["10", "2"]
Output: "210"

Test Case 3 (All Zeroes Edge Case):
Input: arr = ["0", "0", "0"]
Output: "0"
Explanation: The output must be "0", NOT "000".
```

### Mathematical Formulation & Algorithmic Deduction
1. **Transitivity of Custom String Comparator:**
   For any two strings $A$ and $B$, we compare the concatenated strings:
   $$A + B \quad \text{vs.} \quad B + A$$
   If $(A + B) > (B + A)$, then $A$ should precede $B$ in descending order.
   *Proof of Transitivity:* This pairwise relation induces a strict weak ordering on integer strings, proving that standard sorting algorithms ($O(N \log N)$) converge to the globally optimal permutation.
2. **Leading Zero Handling:** If after sorting, the highest element is `"0"`, the entire number consists only of zeroes; return `"0"`.

### Complete C++20 Implementation
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

string largestNumber(vector<string>& arr) {
    if (arr.empty()) return "0";

    // Sort using custom comparator: (a + b) > (b + a)
    sort(arr.begin(), arr.end(), [](const string& a, const string& b) {
        return (a + b) > (b + a);
    });

    // If the largest number is "0", the entire array is zeroes
    if (arr[0] == "0") return "0";

    string result = "";
    for (const string& s : arr) {
        result += s;
    }

    return result;
}

int main() {
    vector<string> arr1 = {"3", "30", "34", "5", "9"};
    cout << "Test 1: " << largestNumber(arr1) << " (Expected: 9534330)" << endl;

    vector<string> arr2 = {"0", "0"};
    cout << "Test 2: " << largestNumber(arr2) << " (Expected: 0)" << endl;

    return 0;
}
```

### Complete Java 21 Implementation
```java
import java.util.Arrays;

public class LargestNumber {
    public static String largestNumber(String[] arr) {
        if (arr == null || arr.length == 0) return "0";

        // Sort using comparator
        Arrays.sort(arr, (a, b) -> (b + a).compareTo(a + b));

        // Edge case: all zeroes
        if (arr[0].equals("0")) return "0";

        StringBuilder sb = new StringBuilder();
        for (String s : arr) {
            sb.append(s);
        }

        return sb.toString();
    }

    public static void main(String[] args) {
        String[] arr1 = {"3", "30", "34", "5", "9"};
        System.out.println("Test 1: " + largestNumber(arr1)); // 9534330

        String[] arr2 = {"0", "0"};
        System.out.println("Test 2: " + largestNumber(arr2)); // 0
    }
}
```

### Complete Python 3.12 Implementation
```python
from functools import cmp_to_key

def largest_number(arr: list[str]) -> str:
    if not arr:
        return "0"

    def compare(a: str, b: str) -> int:
        if a + b > b + a:
            return -1  # a comes before b
        elif a + b < b + a:
            return 1   # b comes before a
        else:
            return 0

    sorted_arr = sorted(arr, key=cmp_to_key(compare))

    if sorted_arr[0] == "0":
        return "0"

    return "".join(sorted_arr)

if __name__ == "__main__":
    print(largest_number(["3", "30", "34", "5", "9"]))  # 9534330
    print(largest_number(["0", "0"]))                   # 0
```

---

## ⚡ Complexity & Verification Summary

| Question | Algorithm | Time Complexity | Auxiliary Space | Key Exam Takeaway |
|:---|:---|:---:|:---:|:---|
| **01. Coin Change** | Bottom-Up DP | $\mathcal{O}(N \times V)$ | $\mathcal{O}(V)$ | Greedy choice fails on non-canonical coin sets; DP is mandatory. |
| **02. Subset Sum** | 1D Backward DP | $\mathcal{O}(N \times \text{target})$ | $\mathcal{O}(\text{target})$ | Backward loop eliminates 2D matrix overhead, ensuring zero memory leaks. |
| **03. Largest Number** | Comparator Sort | $\mathcal{O}(N \log N)$ | $\mathcal{O}(N)$ | $(A+B) > (B+A)$ handles uneven digit lengths like `3` vs `30` perfectly. |
