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
    icon: '🐘',
    quickMetric: 'Jump Sizes Allowed: {1, 2, 3, 4, 5}',
    inputSchema: {
      type: 'single',
      label: 'Coordinate of friend\'s house (x)',
      param: 'x',
      min: 1,
      max: 1000000,
      default: 12
    },
    runner: (params) => {
      const x = typeof params === 'object' ? params.x : params;
      return Math.ceil(x / 5);
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
    id: 'cf-546a',
    title: 'A. Soldier and Bananas',
    icon: '🍌',
    platform: 'Codeforces',
    problemCode: '546A',
    rating: 800,
    difficulty: 'Easy',
    category: 'Math & Implementation',
    tags: ['Math', 'Brute Force', 'Implementation'],
    url: 'https://codeforces.com/problemset/problem/546/A',
    timeLimit: '1.0s',
    memoryLimit: '256 MB',
    summary: 'A soldier wants to buy w bananas where the i-th banana costs i·k dollars. Given he has n dollars, determine how much he must borrow from a friend.',
    quickMetric: 'Total Cost = k · w(w + 1) / 2',
    description: `A soldier wants to buy w bananas in the shop. He has to pay k dollars for the first banana, 2k dollars for the second one and so on (in other words, he has to pay i·k dollars for the i-th banana).

He has n dollars. How many dollars does he have to borrow from his friend soldier to buy w bananas?`,
    inputFormat: 'The first line contains three positive integers k, n, w (1 ≤ k, w ≤ 1000, 0 ≤ n ≤ 10^9), the cost of the first banana, initial number of dollars the soldier has and number of bananas he wants.',
    outputFormat: 'Output one integer — the amount of dollars that the soldier must borrow from his friend. If he doesn\'t have to borrow money, output 0.',
    examples: [
      {
        input: '3 17 4',
        output: '13',
        explanation: '1st banana: 3, 2nd: 6, 3rd: 9, 4th: 12. Total cost = 3 + 6 + 9 + 12 = 30 dollars. Soldier has 17 dollars, so he must borrow 30 - 17 = 13 dollars.'
      }
    ],
    inputSchema: {
      type: 'multi',
      fields: [
        { key: 'k', label: 'Cost of 1st banana (k)', min: 1, max: 1000, default: 3 },
        { key: 'n', label: 'Soldier\'s initial dollars (n)', min: 0, max: 1000000000, default: 17 },
        { key: 'w', label: 'Bananas wanted (w)', min: 1, max: 1000, default: 4 }
      ]
    },
    runner: (params) => {
      const k = Number(params.k ?? 3);
      const n = Number(params.n ?? 17);
      const w = Number(params.w ?? 4);
      const total = k * (w * (w + 1)) / 2;
      return Math.max(0, total - n);
    },
    testCases: [
      { k: 3, n: 17, w: 4, expected: 13, note: 'Sample 1: Total=30, Owned=17 -> Borrow 13' },
      { k: 3, n: 40, w: 4, expected: 0, note: 'Surplus: Owned=40, Total=30 -> Borrow 0 (No loan)' },
      { k: 3, n: 30, w: 4, expected: 0, note: 'Exact match: Owned=30, Total=30 -> Borrow 0' },
      { k: 5, n: 0, w: 5, expected: 75, note: 'Broke soldier: Owned=0, Total=75 -> Borrow 75' },
      { k: 10, n: 4, w: 1, expected: 6, note: 'Single banana: w=1, Cost=10, Owned=4 -> Borrow 6' },
      { k: 1, n: 10, w: 5, expected: 5, note: 'Unit cost k=1: Total=15, Owned=10 -> Borrow 5' },
      { k: 4, n: 100, w: 10, expected: 120, note: 'Total=4*55=220, Owned=100 -> Borrow 120' },
      { k: 1000, n: 0, w: 1000, expected: 500500000, note: 'Max boundary: Total=500,500,000, Owned=0' },
      { k: 1000, n: 1000000000, w: 1000, expected: 0, note: 'Max wealth: n=10^9 > Total -> Borrow 0' }
    ],
    solutions: {
      cpp: `#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    // Fast I/O
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    long long k, n, w;
    if (!(cin >> k >> n >> w)) return 0;

    // Sum of first w natural numbers: w * (w + 1) / 2
    // Total cost = k * (1 + 2 + ... + w)
    long long totalCost = k * (w * (w + 1)) / 2;

    // If totalCost <= n, soldier needs 0 dollars.
    // Otherwise, soldier needs to borrow (totalCost - n).
    long long borrow = max(0LL, totalCost - n);

    cout << borrow << "\\n";
    return 0;
}`,
      java: `import java.util.Scanner;

public class SoldierAndBananas {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        long k = sc.nextLong();
        long n = sc.nextLong();
        long w = sc.nextLong();

        // Arithmetic series sum: 1 + 2 + ... + w = w * (w + 1) / 2
        long totalCost = k * (w * (w + 1)) / 2;

        // Never borrow a negative amount
        long borrow = Math.max(0L, totalCost - n);

        System.out.println(borrow);
        sc.close();
    }
}`,
      python: `import sys

def solve():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    k = int(input_data[0])
    n = int(input_data[1])
    w = int(input_data[2])

    # Closed-form AP sum: k * (w * (w + 1) // 2)
    total_cost = k * (w * (w + 1)) // 2

    # Borrow is max(0, total_cost - n)
    borrow = max(0, total_cost - n)
    print(borrow)

if __name__ == '__main__':
    solve()`,
      javascript: `const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf-8').trim().split(/\\s+/);
    if (input.length < 3) return;
    const k = BigInt(input[0]);
    const n = BigInt(input[1]);
    const w = BigInt(input[2]);

    // Total cost = k * (w * (w + 1) / 2)
    const totalCost = k * (w * (w + 1n)) / 2n;

    // Non-negative borrow
    const borrow = totalCost > n ? totalCost - n : 0n;
    console.log(borrow.toString());
}

solve();`
    },
    complexity: {
      time: 'O(1)',
      timeDetail: 'Constant time algebraic computation using Gauss\'s summation formula.',
      space: 'O(1)',
      spaceDetail: 'Requires only 3 64-bit integer registers (k, n, w).'
    },
    mathProof: {
      title: 'Arithmetic Progression Sum & Deficit Proof',
      steps: [
        {
          heading: '1. Problem Cost Sequence',
          content: 'The price of the i-th banana is i · k. The total price for w bananas is the sum of an arithmetic progression: Cost = 1k + 2k + 3k + ... + wk = k · (1 + 2 + 3 + ... + w).'
        },
        {
          heading: '2. Gauss\'s Summation Formula',
          content: 'The sum of the first w positive integers is given by S = w(w + 1) / 2. Multiplying by common factor k yields Total Cost = k · w(w + 1) / 2.'
        },
        {
          heading: '3. Financial Deficit & Non-Negativity Rule',
          content: 'The soldier already possesses n dollars. If Total Cost > n, the deficit to borrow is Total Cost - n. If Total Cost ≤ n, the soldier already has enough money, so he borrows 0. Thus, Borrow = max(0, Total Cost - n).'
        },
        {
          heading: '4. Overflow Safety',
          content: 'With k ≤ 1000 and w ≤ 1000, Total Cost ≤ 1000 · (1000 · 1001) / 2 = 500,500,000 (≈ 5 · 10^8). This comfortably fits in a 32-bit signed integer (< 2.14 · 10^9), but using 64-bit integers (long long / BigInt) avoids any signed subtraction underflow with n ≤ 10^9.'
        }
      ]
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
