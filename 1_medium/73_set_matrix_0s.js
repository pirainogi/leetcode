// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

// Follow up:
// Did you use extra space?
// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution. Could you devise a constant space solution?

const setZeroes = (matrix) => {
  const m = matrix.length;
  const n = (matrix[0] || []).length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        left(i, j, m, n, matrix);
        right(i, j, m, n, matrix);
        up(i, j, m, n, matrix);
        down(i, j, m, n, matrix);
      } else if (matrix[i][j] === '#') {
        matrix[i][j] = 0;
      }
    }
  }
};

const left = (i, j, m, n, matrix) => {
  for (let k = j - 1; k >= 0; k--) {
    matrix[i][k] = 0;
  }
};

const right = (i, j, m, n, matrix) => {
  for (let k = j + 1; k < n; k++) {
    matrix[i][k] = matrix[i][k] === 0 ? 0 : '#';
  }
};

const up = (i, j, m, n, matrix) => {
  for (let k = i - 1; k >= 0; k--) {
    matrix[k][j] = 0;
  }
};

const down = (i, j, m, n, matrix) => {
  for (let k = i + 1; k < m; k++) {
    matrix[k][j] = matrix[k][j] === 0 ? 0 : '#';
  }
};

// Big O: O(mn)
