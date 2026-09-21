# 44_dse_sp_coding_vault.md: Complete Infosys DSE (₹6.25 LPA) & SP (₹9.5 LPA) Coding Master Vault

---

## 1. Executive Elevated Coding Track Architecture

Top performers in the Systems Engineer (SE) online assessment or candidates taking the specialized upgrade exams are invited to the elevated **Digital Specialist Engineer (DSE — ₹6.25 LPA)** and **Specialist Programmer (SP — ₹9.50 LPA to ₹21 LPA)** coding assessments.

| Parameter | Elevated Coding Track Metric |
| :--- | :--- |
| **Platform** | **HackerEarth Enterprise Assessment** |
| **Duration** | **3 Hours (180 Minutes)** |
| **Number of Problems** | **3 Problems** (1 Easy-Medium, 1 Medium-Hard, 1 Hard) |
| **Scoring Weightage** | Problem 1: 50 Marks, Problem 2: 75 Marks, Problem 3: 100 Marks |
| **Cutoff Benchmark for DSE** | **Minimum 1 Full Problem + Partial on Problem 2 (~100 Marks)** |
| **Cutoff Benchmark for SP** | **Minimum 2 Full Problems (~150+ Marks)** |
| **Allowed Languages** | C++, Java 8/11/17, Python 3.x |

---

## 2. The 13 Brand New Infosys Coding PYQs (Full Production Implementations)

These 13 archetypes represent the exact questions taught and tested in the updated Infosys DSE/SP syllabus:

---

### Q1: Reverse Linked List II (In-Place Sublist Reversal)
* **Problem:** Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right` in a single pass ($O(N)$ time, $O(1)$ auxiliary memory).

#### C++ Production Solution:
```cpp
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* reverseBetween(ListNode* head, int left, int right) {
        if (!head || left == right) return head;
        
        ListNode dummy(0);
        dummy.next = head;
        ListNode* prev = &dummy;
        
        for (int i = 1; i < left; ++i) {
            prev = prev->next;
        }
        
        ListNode* curr = prev->next;
        for (int i = 0; i < right - left; ++i) {
            ListNode* temp = curr->next;
            curr->next = temp->next;
            temp->next = prev->next;
            prev->next = temp;
        }
        
        return dummy.next;
    }
};
```

#### Python 3 Solution:
```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
        if not head or left == right:
            return head
        
        dummy = ListNode(0, head)
        prev = dummy
        for _ in range(left - 1):
            prev = prev.next
        
        curr = prev.next
        for _ in range(right - left):
            temp = curr.next
            curr.next = temp.next
            temp.next = prev.next
            prev.next = temp
            
        return dummy.next
```

---

### Q2: Dynamic Programming — House Robber (Maximum Non-Adjacent Sum)
* **Problem:** You are planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected; it will automatically contact the police if two adjacent houses were broken into on the same night. Determine the maximum amount of money you can rob tonight without alerting the police.

#### Java Production Solution ($O(N)$ Time, $O(1)$ Space):
```java
public class Solution {
    public int rob(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        
        int prev2 = 0;
        int prev1 = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            int take = nums[i] + prev2;
            int notTake = prev1;
            int curr = Math.max(take, notTake);
            prev2 = prev1;
            prev1 = curr;
        }
        
        return prev1;
    }
}
```

---

### Q3: Dynamic Programming — Coin Change (Minimum Coins for Amount)
* **Problem:** Given an integer array `coins` representing coins of different denominations and an integer `amount`. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`. You may assume an infinite number of each coin.

#### C++ Solution:
```cpp
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> dp(amount + 1, amount + 1);
        dp[0] = 0;
        
        for (int i = 1; i <= amount; ++i) {
            for (int coin : coins) {
                if (i - coin >= 0) {
                    dp[i] = min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
    }
};
```

---

### Q4: Dynamic Programming — 0/1 Knapsack & Partition Equal Subset Sum
* **Problem:** Given an integer array `nums`, return `true` if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or `false` otherwise.

#### Python 3 Solution:
```python
class Solution:
    def canPartition(self, nums: list[int]) -> bool:
        total_sum = sum(nums)
        if total_sum % 2 != 0:
            return False
        
        target = total_sum // 2
        dp = [False] * (target + 1)
        dp[0] = True
        
        for num in nums:
            for j in range(target, num - 1, -1):
                dp[j] = dp[j] or dp[j - num]
                
        return dp[target]
```

---

### Q5: Dutch National Flag Algorithm (Sort Colors 0, 1, 2)
* **Problem:** Given an array `nums` with $n$ objects colored red (0), white (1), or blue (2), sort them in-place so that objects of the same color are adjacent, in order 0, 1, and 2. Must run in $O(N)$ time with $O(1)$ space in a single pass.

#### Java Solution:
```java
class Solution {
    public void sortColors(int[] nums) {
        int low = 0, mid = 0, high = nums.length - 1;
        while (mid <= high) {
            if (nums[mid] == 0) {
                swap(nums, low, mid);
                low++;
                mid++;
            } else if (nums[mid] == 1) {
                mid++;
            } else {
                swap(nums, mid, high);
                high--;
            }
        }
    }
    
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
```

---

### Q6: Binary Tree — Maximum Path Sum
* **Problem:** A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge connecting them. A node can only appear at most once. Compute the maximum path sum of any non-empty path.

#### C++ Solution:
```cpp
#include <algorithm>
#include <climits>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

class Solution {
private:
    int maxSum;
    int maxGain(TreeNode* node) {
        if (!node) return 0;
        
        int leftGain = max(maxGain(node->left), 0);
        int rightGain = max(maxGain(node->right), 0);
        
        int currentPath = node->val + leftGain + rightGain;
        maxSum = max(maxSum, currentPath);
        
        return node->val + max(leftGain, rightGain);
    }
public:
    int maxPathSum(TreeNode* root) {
        maxSum = INT_MIN;
        maxGain(root);
        return maxSum;
    }
};
```

---

### Q7: Binary Search Tree — Validate BST
* **Problem:** Given the `root` of a binary tree, determine if it is a valid binary search tree (BST). Left subtree must contain strictly smaller values, and right subtree strictly greater values.

#### Python 3 Solution:
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        def validate(node, low, high):
            if not node:
                return True
            if not (low < node.val < high):
                return False
            return validate(node.left, low, node.val) and validate(node.right, node.val, high)
            
        return validate(root, float('-inf'), float('inf'))
```

---

### Q8: Backtracking — N-Queens Placement
* **Problem:** Place $N$ queens on an $N \times N$ chessboard such that no two queens attack each other. Return all distinct board configurations.

#### C++ Solution:
```cpp
#include <vector>
#include <string>
using namespace std;

class Solution {
private:
    void solve(int col, int n, vector<string>& board, vector<vector<string>>& ans,
               vector<int>& leftRow, vector<int>& upperDiag, vector<int>& lowerDiag) {
        if (col == n) {
            ans.push_back(board);
            return;
        }
        for (int row = 0; row < n; ++row) {
            if (leftRow[row] == 0 && lowerDiag[row + col] == 0 && upperDiag[n - 1 + col - row] == 0) {
                board[row][col] = 'Q';
                leftRow[row] = 1;
                lowerDiag[row + col] = 1;
                upperDiag[n - 1 + col - row] = 1;
                
                solve(col + 1, n, board, ans, leftRow, upperDiag, lowerDiag);
                
                board[row][col] = '.';
                leftRow[row] = 0;
                lowerDiag[row + col] = 0;
                upperDiag[n - 1 + col - row] = 0;
            }
        }
    }
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> ans;
        vector<string> board(n, string(n, '.'));
        vector<int> leftRow(n, 0), upperDiag(2 * n - 1, 0), lowerDiag(2 * n - 1, 0);
        solve(0, n, board, ans, leftRow, upperDiag, lowerDiag);
        return ans;
    }
};
```

---

### Q9: Edit Distance (Levenshtein Distance)
* **Problem:** Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2` (Insert, Delete, Replace).

#### Java Solution:
```java
class Solution {
    public int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], // Replace
                                   Math.min(dp[i - 1][j],     // Delete
                                            dp[i][j - 1]));   // Insert
                }
            }
        }
        return dp[m][n];
    }
}
```

---

### Q10: Maximum Product Subarray (Negative Number Tracking)
* **Problem:** Given an integer array `nums`, find a subarray that has the largest product, and return the product. Traps: Negative multiplied by negative becomes positive; 0 resets product.

#### C++ Solution:
```cpp
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int maxProd = nums[0];
        int currMax = nums[0];
        int currMin = nums[0];
        
        for (size_t i = 1; i < nums.size(); ++i) {
            if (nums[i] < 0) swap(currMax, currMin);
            
            currMax = max(nums[i], currMax * nums[i]);
            currMin = min(nums[i], currMin * nums[i]);
            
            maxProd = max(maxProd, currMax);
        }
        return maxProd;
    }
};
```

---

### Q11: Sliding Window — Longest Substring Without Repeating Characters
* **Problem:** Given a string `s`, find the length of the longest substring without repeating characters.

#### Python 3 Solution ($O(N)$ Time, $O(\min(N, M))$ Space):
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_map = {}
        max_len = 0
        left = 0
        
        for right, ch in enumerate(s):
            if ch in char_map and char_map[ch] >= left:
                left = char_map[ch] + 1
            char_map[ch] = right
            max_len = max(max_len, right - left + 1)
            
        return max_len
```

---

### Q12: Two Pointers — Trapping Rain Water
* **Problem:** Given $n$ non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

#### C++ Solution ($O(N)$ Time, $O(1)$ Space):
```cpp
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int trap(vector<int>& height) {
        int left = 0, right = height.size() - 1;
        int leftMax = 0, rightMax = 0;
        int water = 0;
        
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) leftMax = height[left];
                else water += leftMax - height[left];
                left++;
            } else {
                if (height[right] >= rightMax) rightMax = height[right];
                else water += rightMax - height[right];
                right--;
            }
        }
        return water;
    }
};
```

---

### Q13: Graph BFS/DFS — Number of Islands
* **Problem:** Given an $m \times n$ 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

#### Java Solution:
```java
class Solution {
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        int count = 0;
        int rows = grid.length, cols = grid[0].length;
        
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == '1') {
                    count++;
                    dfs(grid, r, c, rows, cols);
                }
            }
        }
        return count;
    }
    
    private void dfs(char[][] grid, int r, int c, int rows, int cols) {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] != '1') return;
        grid[r][c] = '0'; // mark as visited
        dfs(grid, r + 1, c, rows, cols);
        dfs(grid, r - 1, c, rows, cols);
        dfs(grid, r, c + 1, rows, cols);
        dfs(grid, r, c - 1, rows, cols);
    }
}
```

---

## 3. HackerEarth Platform Technical Optimization Rules

1. **64-Bit Integer Overflow:** Always use `long` in Java or `long long` in C++ for cumulative sums, products, and modulo arithmetic ($10^9 + 7$).
2. **Fast I/O Setup:**
   * **C++:** Place `ios_base::sync_with_stdio(false); cin.tie(NULL);` at the start of `main()`.
   * **Java:** Use `BufferedReader` and `StringTokenizer` instead of `java.util.Scanner` to avoid TLE (Time Limit Exceeded) on $10^6$ input streams.
3. **Recursion Depth Stack Limit:** Python default recursion depth is 1000. In deep tree/graph traversals, always include `sys.setrecursionlimit(200000)` or write iterative algorithms using explicit stacks.
