// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbStairs = (n) => {
  const result = [0, 1];
  for (let i = 0; i < n; i++) {
    result = [result[1], result[0] + result[1]];
  }
  return result[1];
};

// Big O: O(n)
