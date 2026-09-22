export const DSA_PROBLEMS = [
  {
    id: 'cf-617a',
    title: 'A. Elephant',
    platform: 'Codeforces',
    problemCode: '617A',
    rating: 800,
    difficulty: 'Easy',
    category: 'Greedy & Math',
    tags: ['Greedy', 'Math', 'Dynamic Programming', 'Simulation'],
    url: 'https://codeforces.com/problemset/problem/617/A',
    timeLimit: '1.0s',
    memoryLimit: '256 MB',
    summary: "An elephant at coordinate 0 needs to reach his friend at coordinate x using minimum steps of sizes 1, 2, 3, 4, or 5.",
    description: `An elephant decided to visit his friend. It turned out that the elephant's house is located at point 0 and his friend's house is located at point x (x > 0) of the coordinate line. In one step the elephant can move 1, 2, 3, 4 or 5 positions forward.

Determine, what is the minimum number of steps he need to make in order to get to his friend's house.`,
    inputFormat: 'The first line of the input contains an integer x (1 ≤ x ≤ 1,000,000) — The coordinate of the friend\'s house.',
    outputFormat: 'Print the minimum number of steps that elephant needs to make to get from point 0 to point x.',
    examples: [
      {
        input: '5',
        output: '1',
        explanation: 'In the first sample the elephant needs to make one step of length 5 to reach the point x.'
      },
      {
        input: '12',
        output: '3',
        explanation: 'The elephant can make jumps of 5 + 5 + 2 = 12 (or 3 + 5 + 4 = 12). There are other ways, but the minimum steps is 3.'
      }
    ],
    testCases: [
      { x: 1, expected: 1, note: 'Smallest possible input (step of 1)' },
      { x: 4, expected: 1, note: 'Single step of size 4' },
      { x: 5, expected: 1, note: 'Single step of maximum size 5' },
      { x: 6, expected: 2, note: 'Step of 5 + step of 1' },
      { x: 12, expected: 3, note: 'Sample 2: 5 + 5 + 2' },
      { x: 15, expected: 3, note: 'Exact multiple: 5 + 5 + 5' },
      { x: 23, expected: 5, note: '5 * 4 + 3 = 5 steps' },
      { x: 999999, expected: 200000, note: 'Large input just below multiple' },
      { x: 1000000, expected: 200000, note: 'Maximum constraint boundary' }
    ],
    solutions: {
      cpp: `#include <iostream>
using namespace std;

int main() {
    // Fast I/O
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    long long x;
    if (!(cin >> x)) return 0;

    // Approach 1: Ceiling Division (x + 4) / 5
    // Approach 2: x / 5 + (x % 5 != 0 ? 1 : 0)
    long long ans = (x + 4) / 5;

    cout << ans << "\\n";
    return 0;
}`,
      java: `import java.util.Scanner;

public class Elephant {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long x = sc.nextLong();

        // Mathematical ceiling division: ceil(x / 5)
        long steps = (x + 4) / 5;

        System.out.println(steps);
        sc.close();
    }
}`,
      python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    x = int(input_data[0])
    
    # Ceiling division using integer arithmetic: (x + 4) // 5
    # Equivalent to: (x // 5) + (1 if x % 5 != 0 else 0)
    ans = (x + 4) // 5
    print(ans)

if __name__ == '__main__':
    solve()`,
      javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim();
    if (!input) return;
    const x = parseInt(input, 10);

    // Math.ceil(x / 5) or Math.floor((x + 4) / 5)
    const steps = Math.ceil(x / 5);
    console.log(steps);
}

solve();`
    },
    complexity: {
      time: 'O(1)',
      timeDetail: 'Constant time arithmetic operations (division and addition).',
      space: 'O(1)',
      spaceDetail: 'Requires only a few 64-bit integer variables.'
    },
    mathProof: {
      title: 'Greedy Choice & Ceiling Division Proof',
      steps: [
        {
          heading: '1. Upper Bound on Step Size',
          content: 'In any single turn, the elephant can advance at most 5 units forward (S ∈ {1, 2, 3, 4, 5}).'
        },
        {
          heading: '2. Lower Bound on Minimum Steps',
          content: 'If the elephant takes k steps, the maximum distance he can cover is 5 * k. Therefore, to reach distance x, we must satisfy 5 * k ≥ x, which implies k ≥ x / 5. Since k must be an integer, k ≥ ⌈x / 5⌉.'
        },
        {
          heading: '3. Achievability (Greedy Strategy)',
          content: 'We can always achieve this lower bound: take ⌊x / 5⌋ steps of length 5. The remaining distance r = x mod 5 satisfies 0 ≤ r ≤ 4. If r = 0, no extra steps are needed. If 1 ≤ r ≤ 4, the elephant can cover this remainder in exactly 1 step because r ∈ {1, 2, 3, 4} is an allowed step size!'
        },
        {
          heading: '4. Integer Division Identity',
          content: 'For any integer x > 0 and divisor d = 5: ⌈x / 5⌉ = ⌊(x + 4) / 5⌋ = x / 5 + (x % 5 != 0 ? 1 : 0).'
        }
      ]
    },
    dpFormulation: {
      title: 'Dynamic Programming Formulation',
      state: 'DP[i] = Minimum number of steps needed to reach coordinate i from 0.',
      baseCase: 'DP[0] = 0',
      transition: 'DP[i] = 1 + min(DP[i - s]) for s ∈ {1, 2, 3, 4, 5} where i - s ≥ 0',
      observation: 'For small x, DP computes the shortest path. Notice that DP[i] values form repeating cycles of 5: DP[1..5] = 1, DP[6..10] = 2, DP[11..15] = 3, matching ⌈i / 5⌉.'
    }
  },
  {
    id: 'cf-977a',
    title: 'A. Wrong Subtraction',
    platform: 'Codeforces',
    problemCode: '977A',
    rating: 800,
    difficulty: 'Easy',
    category: 'Greedy & Math',
    tags: ['Implementation', 'Simulation'],
    url: 'https://codeforces.com/problemset/problem/977/A',
    timeLimit: '1.0s',
    memoryLimit: '256 MB',
    summary: "Tanya subtracts 1 if last digit is non-zero, else divides by 10. Perform k operations on n.",
    description: `Little girl Tanya is learning how to decrease a number by one, but she does it wrong with a number consisting of two or more digits. Tanya subtracts one from a number by the following algorithm:
- if the last digit of the number is non-zero, she decreases the number by one;
- if the last digit of the number is zero, she divides the number by 10 (i.e. removes the last digit).

You are given an integer number n and the number of subtractions k. Print the result after k subtractions.`,
    inputFormat: 'The first line contains two integers n and k (2 ≤ n ≤ 10^9, 1 ≤ k ≤ 50).',
    outputFormat: 'Print one integer — the result of the decreasing n by one k times.',
    examples: [
      { input: '512 4', output: '49', explanation: '512 -> 511 -> 510 -> 51 -> 50' },
      { input: '1000000000 9', output: '1', explanation: 'Each division strips a zero.' }
    ]
  },
  {
    id: 'cf-791a',
    title: 'A. Bear and Big Brother',
    platform: 'Codeforces',
    problemCode: '791A',
    rating: 800,
    difficulty: 'Easy',
    category: 'Greedy & Math',
    tags: ['Implementation', 'Math'],
    url: 'https://codeforces.com/problemset/problem/791/A',
    timeLimit: '1.0s',
    memoryLimit: '256 MB',
    summary: "Limak weighs a and Bob weighs b. Limak triples each year, Bob doubles. Find years until a > b.",
    description: `Bear Limak wants to become the largest of bears, or at least to become larger than his brother Bob. Right now, Limak and Bob weigh a and b respectively. It's guaranteed that Limak's weight is smaller than or equal to Bob's weight.

Limak eats a lot and his weight is tripled after every year, while Bob's weight is doubled after every year. After how many full years will Limak become strictly larger than Bob?`,
    inputFormat: 'The only line of the input contains two integers a and b (1 ≤ a ≤ b ≤ 10).',
    outputFormat: 'Print one integer, denoting the integer number of years after which Limak will become strictly larger than Bob.',
    examples: [
      { input: '4 7', output: '2', explanation: 'After 1 year: 12 and 14. After 2 years: 36 and 28. 36 > 28 so 2 years.' }
    ]
  }
];
