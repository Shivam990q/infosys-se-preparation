# Section 02 — Coding and Data Structures
## Topic 02: C++ Binary Trees & BST Complete Masterclass (Ankan Sir)

**Source Documents:**  
- `Coding_Classes_C++_Java_Python/CodingClass_in_C++_AnkanSir/Class 2 Trees Part 1.pdf`  
- `Coding_Classes_C++_Java_Python/CodingClass_in_C++_AnkanSir/Class 3 Trees Part 2.pdf`  
- `Coding_Classes_C++_Java_Python/CodingClass_in_C++_AnkanSir/Class 4 Trees Part 3.pdf`  
- `Coding_Classes_C++_Java_Python/CodingClass_in_C++_AnkanSir/Class 5 Trees part 4.pdf`  
**Instructor:** Ankan Sir  
**Total Pages:** 25 Pages across 4 Modules  
**Core Highlights:** Dynamic Node Memory Allocation, Recursive & Iterative Tree Traversals (Inorder, Preorder, Postorder, BFS Level-Order), Tree Height, Diameter, Lowest Common Ancestor (LCA), Binary Search Tree Validation, Construction from Inorder & Preorder.

---

### Node Structure Definition
```cpp
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};
```

---

### Module 1: Fundamental Tree Traversals (DFS & BFS)
```cpp
#include <iostream>
#include <vector>
#include <queue>

using namespace std;

// 1. Inorder Traversal (Left, Root, Right) -> Yields Sorted Order in BST
void inorder(TreeNode* root, vector<int>& ans) {
    if (!root) return;
    inorder(root->left, ans);
    ans.push_back(root->val);
    inorder(root->right, ans);
}

// 2. Preorder Traversal (Root, Left, Right) -> Used for Serialization
void preorder(TreeNode* root, vector<int>& ans) {
    if (!root) return;
    ans.push_back(root->val);
    preorder(root->left, ans);
    preorder(root->right, ans);
}

// 3. Postorder Traversal (Left, Right, Root) -> Bottom-up Processing / Deletion
void postorder(TreeNode* root, vector<int>& ans) {
    if (!root) return;
    postorder(root->left, ans);
    postorder(root->right, ans);
    ans.push_back(root->val);
}

// 4. Level-Order Traversal (BFS)
vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;

    queue<TreeNode*> q;
    q.push(root);

    while (!q.empty()) {
        int levelSize = q.size();
        vector<int> currentLevel;

        for (int i = 0; i < levelSize; i++) {
            TreeNode* curr = q.front();
            q.pop();
            currentLevel.push_back(curr->val);

            if (curr->left) q.push(curr->left);
            if (curr->right) q.push(curr->right);
        }
        result.push_back(currentLevel);
    }
    return result;
}
```

---

### Module 2: Maximum Depth (Height) and Diameter of Binary Tree
```cpp
// Height of Tree
int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}

// Diameter of Tree (Longest path between any two nodes)
int calculateDiameter(TreeNode* root, int& maxD) {
    if (!root) return 0;
    int lh = calculateDiameter(root->left, maxD);
    int rh = calculateDiameter(root->right, maxD);
    maxD = max(maxD, lh + rh);
    return 1 + max(lh, rh);
}

int diameterOfBinaryTree(TreeNode* root) {
    int maxD = 0;
    calculateDiameter(root, maxD);
    return maxD;
}
```

---

### Module 3: Lowest Common Ancestor (LCA)
```cpp
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    // Base Case
    if (!root || root == p || root == q) return root;

    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);

    if (left && right) return root; // Found on both sides -> current is LCA
    return left ? left : right;     // Return the non-null side
}
```

---

### Module 4: Binary Search Tree (BST) Validation & Operations
```cpp
// Validate BST with range constraints
bool validate(TreeNode* root, long long minVal, long long maxVal) {
    if (!root) return true;
    if (root->val <= minVal || root->val >= maxVal) return false;
    return validate(root->left, minVal, root->val) && 
           validate(root->right, root->val, maxVal);
}

bool isValidBST(TreeNode* root) {
    return validate(root, -1e18, 1e18);
}
```
