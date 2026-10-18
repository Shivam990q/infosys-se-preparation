# 💻 Live Interview Coding Protocols & Top 15 Basic Coding Problems

---

## 1. Top 5 Frequently Asked Basic Programs in Infosys Interviews
1. **Reverse a String or Number Without Built-in Functions**
2. **Check for Palindrome (String and Integer)**
3. **Fibonacci Series (Recursive and Iterative)**
4. **Prime Number Checking in $O(\sqrt{N})$**
5. **Check for Anagram Strings**

### Code Example: Optimal Palindrome Check
```python
def is_palindrome(s: str) -> bool:
    # Filter alphanumeric and convert to lowercase
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True
```
