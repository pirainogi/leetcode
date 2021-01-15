// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// For example, If n = 4 and k = 2, a solution is:
// [ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4] ]

const combine = (n, k) => {
  if (n < k || k < 1) return [];

  const res = [];
  helper(res, [], 0, n, k);
  return res;
};

const helper = (res, now, start, n, k) => {
  if (k === 0) {
    res.push(Array.from(now));
    return;
  }

  for (let i = start; i < n; i++) {
    now.push(i + 1)
    helper(res, now, i + 1, n, k - 1);
    now.pop();
  }
};

// Big O: O(n^2)
