// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

const minPathSum = (grid) => {
  const rows = grid.length;
  const cols = (grid[0] || []).length;
  const result = Array(rows);
  let left = 0;
  let top = 0;

  if (!rows || !cols) return 0;

  for (let i = 0; i < rows; i++) {
    result[i] = Array(cols);
    for (let j = 0; j < cols; j++) {
      top = i === 0 ? Number.MAX_SAFE_INTEGER : result[i - 1][j];
      left = j === 0 ? Number.MAX_SAFE_INTEGER : result[i][j - 1];
      result[i][j] = grid[i][j] + (i === 0 && j === 0 ? 0 : Math.min(left, top));
    }
  }

  return result[rows - 1][cols - 1];
};

// Big O: O(mn)
