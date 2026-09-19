# Elevated DSE & SP Coding Track: Master Upgrade Guide

**Target Roles:** Digital Specialist Engineer (DSE) — **₹6.25 LPA** | Specialist Programmer (SP) — **₹9.50 LPA**  
**Assessment Format:** 3 Problems | 3 Hours (180 Minutes) | Platform: HackerEarth / Infosys Assessment Engine

---

## 1. How the Elevated Track Works

Candidates who achieve top scores in the standard Systems Engineer test, or who participate in college coding hackathons / HackWithInfy, are invited to the **Elevated Coding Round**.

```
+---------------------------------------------------------------------------------+
|                       ELEVATED CODING ASSESSMENT MATRIX                         |
+-------------+--------+----------------------------+-----------------------------+
| Problem     | Marks  | Algorithmic Complexity     | Target Role Qualification   |
+-------------+--------+----------------------------+-----------------------------+
| Problem 1   | 20 Pts | Easy: Arrays, Strings,     | Base Score Requirement     |
|             |        | Two Pointers, HashMaps     |                             |
+-------------+--------+----------------------------+-----------------------------+
| Problem 2   | 30 Pts | Medium: Greedy Algorithms, | Solving Problem 1 + 2       |
|             |        | Sliding Window, Intervals  | $\implies$ **DSE (₹6.25 LPA)** |
+-------------+--------+----------------------------+-----------------------------+
| Problem 3   | 50 Pts | Hard: Dynamic Programming, | Solving Problem 1 + 2 + 3   |
|             |        | Graph Theory (BFS/DFS)     | $\implies$ **SP (₹9.50 LPA)**  |
+-------------+--------+----------------------------+-----------------------------+
```

> [!TIP]
> **Threshold for Selection:**
> - **DSE Interview Call:** Clear 1 full problem + pass 50% test cases of Problem 2 ($\ge 35$ Marks).
> - **SP Interview Call:** Clear 2 full problems + partial test cases of Problem 3 ($\ge 75$ Marks).

---

## 2. High-Frequency LeetCode Problem Archetypes

### Archetype 1: Sliding Window & Two Pointers (Medium - Problem 2)
**Classic Problem:** Longest Substring Without Repeating Characters (LeetCode #3).

```java
import java.util.HashMap;

public class Solution {
    public static int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        int maxLength = 0, left = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            if (map.containsKey(ch)) {
                left = Math.max(left, map.get(ch) + 1);
            }
            map.put(ch, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
```
*Time Complexity:* $O(N)$ | *Space Complexity:* $O(\min(N, \Sigma))$

---

### Archetype 2: Greedy Interval Scheduling (Medium - Problem 2)
**Classic Problem:** Non-Overlapping Intervals (LeetCode #435).

```java
import java.util.Arrays;

public class Solution {
    public static int eraseOverlapIntervals(int[][] intervals) {
        if (intervals.length == 0) return 0;
        // Sort intervals based on their END time
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));
        
        int nonOverlapCount = 1;
        int lastEndTime = intervals[0][1];
        
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= lastEndTime) {
                nonOverlapCount++;
                lastEndTime = intervals[i][1];
            }
        }
        return intervals.length - nonOverlapCount;
    }
}
```
*Time Complexity:* $O(N \log N)$ | *Space Complexity:* $O(1)$

---

### Archetype 3: 1D / 2D Dynamic Programming (Hard - Problem 3)
**Classic Problem:** Coin Change - Minimum Coins to Form Amount (LeetCode #322).

```java
import java.util.Arrays;

public class Solution {
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (i - coin >= 0) {
                    dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
}
```
*Time Complexity:* $O(\text{amount} \times \text{coins.length})$ | *Space Complexity:* $O(\text{amount})$

---

### Archetype 4: Matrix Graph Traversal / BFS (Hard - Problem 3)
**Classic Problem:** Number of Connected Islands (LeetCode #200).

```java
public class Solution {
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        int islands = 0;
        
        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                if (grid[r][c] == '1') {
                    islands++;
                    dfs(grid, r, c);
                }
            }
        }
        return islands;
    }
    
    private void dfs(char[][] grid, int r, int c) {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] == '0') {
            return;
        }
        grid[r][c] = '0'; // Mark as visited
        dfs(grid, r + 1, c);
        dfs(grid, r - 1, c);
        dfs(grid, r, c + 1);
        dfs(grid, r, c - 1);
    }
}
```
*Time Complexity:* $O(R \times C)$ | *Space Complexity:* $O(R \times C)$ call stack

---

## 3. The 10 Must-Solve Problems for DSE / SP

1. **LeetCode #3:** Longest Substring Without Repeating Characters (Sliding Window)
2. **LeetCode #53:** Maximum Subarray - Kadane's Algorithm ($O(N)$)
3. **LeetCode #56:** Merge Overlapping Intervals
4. **LeetCode #152:** Maximum Product Subarray
5. **LeetCode #198:** House Robber (1D Dynamic Programming)
6. **LeetCode #200:** Number of Islands (Grid BFS/DFS)
7. **LeetCode #300:** Longest Increasing Subsequence ($O(N \log N)$ with Binary Search)
8. **LeetCode #322:** Coin Change (Unbounded Knapsack DP)
9. **LeetCode #416:** Partition Equal Subset Sum (0/1 Knapsack DP)
10. **LeetCode #547:** Number of Provinces (Graph Disjoint Set Union / DFS)

---

## 4. Final Strategy to Elevate from SE to DSE/SP
- **Target Problem 1 First:** Spend the first 25 minutes solving Problem 1 completely. Do not rush to the hard problem without securing the 20 base points.
- **Handle Edge Cases:** DSE test cases intentionally test `Integer.MAX_VALUE`, empty arrays, single elements, and negative numbers. Use `long` instead of `int` if large sums are expected.
- **Language Choice:** Choose **Java** or **C++** for optimal execution speed. Python is accepted, but large recursion depths can exceed recursion limits (`sys.setrecursionlimit(2000)` required).
