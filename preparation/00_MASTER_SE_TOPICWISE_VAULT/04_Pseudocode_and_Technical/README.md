# 💻 Section IV: Pseudocode & Technical Ability Vault

> **Target Role:** Infosys System Engineer (SE)  
> **Section Weightage:** 5 Questions • 10 Minutes (~2 mins per question) • Elimination Section  
> **Format:** 2-Column High-Density Print-Ready Modular PDFs • Courier Monospace Code Blocks • Zero Watermarks  
> **Total Solved Questions:** **327+ Questions** (238 Modular Verified MCQs + 89 Topmate PYQ Pages)

---

## 📌 Executive Summary & Architecture

The **Pseudocode & Technical Ability** round is one of the highest elimination filters in the Infosys System Engineer selection process. Candidates are presented with algorithmic snippets, nested iteration structures, bitwise logic problems, and recursive functions where quick, precise execution tracing is mandatory.

This vault consolidates all pseudocode questions across all paid preparation courses, college mock tests, past actual exams, and screenshot banks into 5 pristine, modular topic PDFs plus an All-in-One master compendium and the clean Topmate PYQ bank.

---

## 📂 Vault Contents & Topic Breakdown

| File Name | Topic Coverage | Question Count | Key Concepts & Patterns Tested |
| :--- | :--- | :---: | :--- |
| **`00_COMPLETE_PSEUDOCODE_ALL_IN_ONE_VAULT.pdf`** | **Master Compendium (All Topics)** | **238 Solved Qs** | Full unified compendium of all 5 topics with complete step-by-step traces. |
| **`01_Bitwise_Operators_and_Logic.pdf`** | Bitwise Operators & Logic | **93 Solved Qs** | `^` (XOR), `&` (AND), `\|` (OR), `<<` / `>>` shifts, operator precedence, short-circuit logic. |
| **`02_Loops_and_Conditional_Tracing.pdf`** | Loops & Conditional Tracing | **74 Solved Qs** | `while`, `for`, nested loops, step increments (`i = i * 2`), `break`, `continue`, boundary tests. |
| **`03_Recursion_and_Function_Call_Stacks.pdf`** | Recursion & Call Stacks | **12 Solved Qs** | Recursive branching (`f(n-1) + f(n-2)`), base conditions, recursion depth, stack simulation. |
| **`04_Arrays_Strings_and_Data_Structures.pdf`** | Arrays, Strings & Data Structures | **41 Solved Qs** | 1D/2D arrays, matrix indexing, pointer arithmetic, element swapping, string ASCII manipulation. |
| **`05_Algorithmic_Complexity_and_Theory.pdf`** | Algorithmic Complexity & Theory | **18 Solved Qs** | C++/OOP static members, scoping rules, Big-O step counts, constructor execution orders. |
| **`06_Topmate_Infosys_Pseudocodes_Watermark_Free.pdf`** | Topmate High-Frequency PYQ Bank | **89 Pages** | Watermark-free, pristine reproduction of Topmate paid pseudocode question bank. |

---

## ⚡ Master Pseudocode Cheatsheet & High-Yield Rules

### 1. Bitwise Operations Quick Reference
* **XOR (`^`)**: `a ^ a = 0`, `a ^ 0 = a`. Same bits = `0`, different bits = `1`.
* **AND (`&`)**: `a & (a - 1)` clears the lowest set bit (used to count set bits).
* **Left Shift (`x << k`)**: Equivalent to $x 	imes 2^k$.
* **Right Shift (`x >> k`)**: Equivalent to $\lfloor x / 2^k floor$.

### 2. Operator Precedence Hierarchy (Highest to Lowest)
1. Postfix: `()`, `[]`, `x++`, `x--`
2. Unary / Prefix: `++x`, `--x`, `+`, `-`, `!`, `~`
3. Multiplicative: `*`, `/`, `%`
4. Additive: `+`, `-`
5. Shift: `<<`, `>>`
6. Relational: `<`, `<=`, `>`, `>=`
7. Equality: `==`, `!=`
8. Bitwise AND: `&`
9. Bitwise XOR: `^`
10. Bitwise OR: `|`
11. Logical AND: `&&` / `and`
12. Logical OR: `||` / `or`
13. Ternary: `? :`
14. Assignment: `=`, `+=`, `-=`

### 3. Execution Tracing Best Practice
* Always maintain a **Variable State Table** with columns for each variable (`i`, `j`, `sum`, `count`).
* Check loop termination conditions **before** entering the body.
* In integer division, truncation always rounds towards zero (e.g. `17 / 5 = 3`).
