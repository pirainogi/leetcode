// You are given an n x n 2D matrix representing an image.
// Rotate the image bwidth 90 degrees (clockwise).

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
// becomes
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

// Follow up: Could you do this in-place?

const rotate = (matrix) => {
  const length = matrix.length;
  const layer = Math.floor(length / 2);

  for (let i = 0; i < layer; i++) {
    for (let j = 0; j < length; j++) {
      swap(matrix, i, j, length - 1 - i, j);
    }
  }

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      swap(matrix, i, j, j, i);
    }
  }
};

const swap = (matrix, x1, y1, x2, y2) => {
  let tmp = matrix[x1][y1];
  matrix[x1][y1] = matrix[x2][y2];
  matrix[x2][y2] = tmp;
};

// Big O: O(n^2)
