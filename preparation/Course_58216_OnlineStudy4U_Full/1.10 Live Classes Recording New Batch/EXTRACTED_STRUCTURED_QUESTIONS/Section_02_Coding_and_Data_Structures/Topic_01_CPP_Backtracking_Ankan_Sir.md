# Section 02 — Coding and Data Structures
## Topic 01: C++ Backtracking Algorithms (Ankan Sir)

**Source Document:** `Coding_Classes_C++_Java_Python/CodingClass_in_C++_AnkanSir/Class 1 Backtracking.pdf`  
**Instructor:** Ankan Sir  
**Total Pages:** 4 Pages  
**Core Paradigms:** State-Space Tree Exploration, Constraint Satisfaction, Choice-Explore-Backtrack Template, Visited Matrix Bookkeeping, Pruning Infeasible Branches.

---

### Problem 1: Rat in a Maze Problem
**Category:** 2D Grid DFS with Backtracking  
**Problem Statement:**  
Consider an $N \times N$ matrix of blocks where each block is either free ($1$) or blocked ($0$). A rat starts from the top-left cell $(0, 0)$ and wants to reach the bottom-right destination $(N-1, N-1)$. The rat can move in four directions: **Down (D)**, **Left (L)**, **Right (R)**, and **Up (U)**. Find all possible paths the rat can take to reach the destination in lexicographical order.

**Constraints:**  
- $2 \le N \le 10$  
- Matrix elements are either $0$ or $1$.

**Complete Production-Grade C++ Solution:**
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
private:
    void solve(int r, int c, vector<vector<int>>& mat, int n, 
               string currentPath, vector<string>& allPaths, 
               vector<vector<int>>& visited) {
        // Base Case: Reached Destination
        if (r == n - 1 && c == n - 1) {
            allPaths.push_back(currentPath);
            return;
        }

        // Direction order for lexicographical sorting: D, L, R, U
        string dir = "DLRU";
        int dRow[] = {1, 0, 0, -1};
        int dCol[] = {0, -1, 1, 0};

        for (int i = 0; i < 4; i++) {
            int nextR = r + dRow[i];
            int nextC = c + dCol[i];

            // Safety Check: Bounds, not blocked, not already visited
            if (nextR >= 0 && nextR < n && nextC >= 0 && nextC < n &&
                mat[nextR][nextC] == 1 && !visited[nextR][nextC]) {
                
                // 1. Choose: Mark visited
                visited[r][c] = 1;

                // 2. Explore: Recurse with updated path
                solve(nextR, nextC, mat, n, currentPath + dir[i], allPaths, visited);

                // 3. Backtrack: Unmark visited to allow other paths
                visited[r][c] = 0;
            }
        }
    }

public:
    vector<string> findPath(vector<vector<int>>& mat) {
        int n = mat.size();
        vector<string> allPaths;
        
        // Edge Case: Starting or ending cell is blocked
        if (mat[0][0] == 0 || mat[n - 1][n - 1] == 0) return allPaths;

        vector<vector<int>> visited(n, vector<int>(n, 0));
        solve(0, 0, mat, n, "", allPaths, visited);

        return allPaths;
    }
};

int main() {
    vector<vector<int>> maze = {
        {1, 0, 0, 0},
        {1, 1, 0, 1},
        {1, 1, 0, 0},
        {0, 1, 1, 1}
    };

    Solution solver;
    vector<string> result = solver.findPath(maze);

    cout << "Valid Lexicographical Paths:" << endl;
    for (const string& path : result) {
        cout << path << " ";
    }
    cout << endl;
    return 0;
}
```

**Complexity Analysis:**  
- **Time Complexity:** $O(4^{N^2})$ in worst-case exploration of the 2D grid.
- **Space Complexity:** $O(N^2)$ for recursion stack depth and the `visited` auxiliary matrix.

---

### Problem 2: The N-Queens Problem
**Category:** Classical Combinatorial Backtracking  
**Problem Statement:**  
The $N$-Queens puzzle asks to place $N$ non-attacking chess queens on an $N \times N$ chessboard such that no two queens attack each other (no two queens share the same row, column, or diagonal). Return all distinct configurations.

**Complete Production-Grade C++ Solution:**
```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

class NQueensSolution {
private:
    bool isSafe(int row, int col, vector<string>& board, int n) {
        // Check column upward
        for (int i = 0; i < row; i++) {
            if (board[i][col] == 'Q') return false;
        }

        // Check upper-left diagonal
        for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] == 'Q') return false;
        }

        // Check upper-right diagonal
        for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] == 'Q') return false;
        }

        return true;
    }

    void solve(int row, vector<string>& board, vector<vector<string>>& result, int n) {
        // Base Case: Placed queens in all N rows
        if (row == n) {
            result.push_back(board);
            return;
        }

        for (int col = 0; col < n; col++) {
            if (isSafe(row, col, board, n)) {
                // 1. Choose
                board[row][col] = 'Q';

                // 2. Explore
                solve(row + 1, board, result, n);

                // 3. Backtrack
                board[row][col] = '.';
            }
        }
    }

public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> result;
        vector<string> board(n, string(n, '.'));
        solve(0, board, result, n);
        return result;
    }
};

int main() {
    int n = 4;
    NQueensSolution solver;
    vector<vector<string>> solutions = solver.solveNQueens(n);

    cout << "Total 4-Queens Configurations: " << solutions.size() << endl;
    for (size_t s = 0; s < solutions.size(); s++) {
        cout << "Configuration " << s + 1 << ":" << endl;
        for (const string& row : solutions[s]) {
            cout << row << endl;
        }
        cout << endl;
    }
    return 0;
}
```

**Complexity Analysis:**  
- **Time Complexity:** $O(N!)$ as pruning eliminates attacked columns row by row.
- **Space Complexity:** $O(N^2)$ board memory + $O(N)$ recursive stack.
