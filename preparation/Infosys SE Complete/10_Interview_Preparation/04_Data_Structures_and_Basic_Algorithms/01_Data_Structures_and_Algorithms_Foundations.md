# 🌲 Data Structures & Basic Algorithms Interview Guide

---

## 1. Foundational Data Structures
- **Arrays vs Linked Lists:** Arrays provide $O(1)$ random access by index but have fixed contiguous memory; Linked Lists allow dynamic resizing and $O(1)$ insertion/deletion at known nodes but require $O(N)$ traversal.
- **Stack:** LIFO (Last-In-First-Out) used in function recursion call stacks, undo mechanisms, and expression syntax parsing.
- **Queue:** FIFO (First-In-First-Out) used in CPU scheduling, print buffers, and BFS graph traversals.
- **Binary Search Tree (BST):** Binary tree where left subtree nodes $<$ root $<$ right subtree nodes. Search, insertion, and deletion are $O(\log N)$ average, $O(N)$ worst case (skewed tree).

---

## 2. Sorting & Searching Complexities
| Algorithm | Best Time | Average Time | Worst Time | Space Complexity | Stable? |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Binary Search** | $O(1)$ | $O(\log N)$ | $O(\log N)$ | $O(1)$ | N/A |
| **Bubble Sort** | $O(N)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | Yes |
| **Merge Sort** | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(N)$ | Yes |
| **Quick Sort** | $O(N \log N)$ | $O(N \log N)$ | $O(N^2)$ | $O(\log N)$ | No |
