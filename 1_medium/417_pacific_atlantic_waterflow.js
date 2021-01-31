// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific Ocean" touches the left and top edges of the matrix and the "Atlantic Ocean" touches the right and bottom edges.
//
// Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.
//
// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.
//
// Note:
// The order of returned grid coordinates does not matter.
// Both m and n are less than 150.
//
// Given the following 5x5 matrix:
//
//   Pacific ~   ~   ~   ~   ~
//        ~  1   2   2   3  (5) *
//        ~  3   2   3  (4) (4) *
//        ~  2   4  (5)  3   1  *
//        ~ (6) (7)  1   4   5  *
//        ~ (5)  1   1   2   4  *
//           *   *   *   *   * Atlantic
//
// Return:
//
// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).

const pacificAtlantic = (matrix) => {
  if (matrix.length === 0) return [];
  
  const pacific = [];
  const atlantic = [];
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    pacific[i] = Array(matrix[0].length).fill(0);
    atlantic[i] = Array(matrix[0].length).fill(0);
  }

  // top and botom
  for (let i = 0; i < matrix[0].length; i++) {
    dfs(matrix, 0, i, Number.MIN_SAFE_INTEGER, pacific);
    dfs(matrix, matrix.length - 1, i, Number.MIN_SAFE_INTEGER, atlantic);
  }

  // left and right
  for (let i = 0; i < matrix.length; i++) {
    dfs(matrix, i, 0, Number.MIN_SAFE_INTEGER, pacific);
    dfs(matrix, i, matrix[0].length - 1, Number.MIN_SAFE_INTEGER, atlantic);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (pacific[i][j] === 1 && atlantic[i][j] === 1) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

function dfs(matrix, row, col, previous, ocean) {
  // if we're looking at a valid matrix position
  if (!isValid(matrix, row, col)) return;

  // ocean can't reach
  if (matrix[row][col] < previous) return;

  // the ocean was already here
  if (ocean[row][col] === 1) return;

  ocean[row][col] = 1;
  dfs(matrix, row + 1, col, matrix[row][col], ocean);
  dfs(matrix, row - 1, col, matrix[row][col], ocean);
  dfs(matrix, row, col + 1, matrix[row][col], ocean);
  dfs(matrix, row, col - 1, matrix[row][col], ocean);
}

function isValid(matrix, row, col) {
  const rowIsValid = row >= 0 && row < matrix.length;
  const colIsValid = col >= 0 && col < matrix[0].length;
  return rowIsValid && colIsValid;
}
