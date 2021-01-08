// Follow up for "Unique Paths":
// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// For example, there is one obstacle in the middle of a 3x3 grid as illustrated below.
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]

// The total number of unique paths is 2.

const uniquePathsWithObstacles = function(grid) {
  const rows = grid.length;
  const cols = (grid[0] || []).length;
  const result = Array(rows);
  let left = 0;
  let top = 0;

  if (!rows || !cols) {
    return 0;
  }

  for (let i = 0; i < rows; i++) {
    result[i] = Array(cols);
    for (let j = 0; j < cols; j++) {
      left = (j === 0 || grid[i][j - 1] === 1) ? 0 : result[i][j - 1];
      top = (i === 0 || grid[i - 1][j] === 1) ? 0 : result[i - 1][j];
      result[i][j] = grid[i][j] === 1 ? 0 : ((i === 0 && j === 0) ? 1 : (left + top));
    }
  }
  return result[rows - 1][cols - 1];
};

// Big O: O(mn)
