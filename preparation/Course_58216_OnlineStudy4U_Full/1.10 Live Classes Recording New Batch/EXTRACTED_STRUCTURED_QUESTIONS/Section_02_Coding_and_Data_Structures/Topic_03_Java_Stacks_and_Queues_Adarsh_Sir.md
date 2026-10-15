# Section 02 — Coding and Data Structures
## Topic 03: Java Stacks and Queues Masterclass (Adarsh Sir)

**Source Documents:**  
- `Coding_Classes_C++_Java_Python/CodingClass_in_Java_AdarshSir/Class 1 Stack & Queue Java.pdf`  
- `Coding_Classes_C++_Java_Python/CodingClass_in_Java_AdarshSir/Class 3 Stack & Queue Java.pdf`  
**Instructor:** Adarsh Gupta (Senior Software Engineer)  
**Total Pages:** 10 Pages  
**Core Highlights:** Array-based Custom Stack Implementation, Dynamic Resizing, Balanced Parentheses Parsing, Next Greater Element via Monotonic Stack, MinStack Design with $O(1)$ Time & Auxiliary Tracking.

---

### Problem 1: Custom Array-Based Stack in Java
```java
public class CustomStack {
    private int[] arr;
    private int top;
    private int capacity;

    public CustomStack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }

    public void push(int val) {
        if (top == capacity - 1) {
            throw new RuntimeException("Stack Overflow");
        }
        arr[++top] = val;
    }

    public int pop() {
        if (top == -1) {
            throw new RuntimeException("Stack Underflow");
        }
        return arr[top--];
    }

    public int peek() {
        if (top == -1) throw new RuntimeException("Stack is Empty");
        return arr[top];
    }

    public boolean isEmpty() {
        return top == -1;
    }
}
```

---

### Problem 2: Valid Parentheses String Validation
**Problem Statement:**  
Given a string `s` containing `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

```java
import java.util.Stack;

public class ValidParentheses {
    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if ((c == ')' && top != '(') ||
                    (c == '}' && top != '{') ||
                    (c == ']' && top != '[')) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}
```

---

### Problem 3: Next Greater Element (Monotonic Stack)
**Problem Statement:**  
Given an array `arr` of size $N$, find the Next Greater Element for every element. If no greater element exists, output `-1`.

```java
import java.util.Stack;
import java.util.Arrays;

public class NextGreaterElement {
    public static int[] nextLargerElement(int[] arr, int n) {
        int[] result = new int[n];
        Stack<Integer> stack = new Stack<>();

        // Traverse backwards from right to left
        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= arr[i]) {
                stack.pop();
            }

            result[i] = stack.isEmpty() ? -1 : stack.peek();
            stack.push(arr[i]);
        }
        return result;
    }
}
```
