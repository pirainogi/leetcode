// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Given the following matrix:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// You should return [1,2,3,6,9,8,7,4,5].

const spiralOrder = function(matrix) {
  const res = [];
  let x1 = 0;
  let x2 = (matrix[0] || []).length - 1;
  let y1 = 0;
  let y2 = matrix.length - 1;
  while (x1 <= x2 && y1 <= y2) {
    for (let x = x1; x <= x2; x++) res.push(matrix[y1][x]);
    for (let y = y1 + 1; y <= y2; y++) res.push(matrix[y][x2]);
    if (x1 < x2 && y1 < y2) {
      for (let x = x2 - 1; x > x1; x--) res.push(matrix[y2][x]);
      for (let y = y2; y > y1; y--) res.push(matrix[y][x1]);
    }
    x1++;
    x2--;
    y1++;
    y2--;
  }
  return res;
};

// Big O: O(n)
