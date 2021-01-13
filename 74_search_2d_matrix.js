// Write an efficient algorithm that searches for a value in an m x n matrix.

// This matrix has the following properties:
// Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row.

// For example:
// [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// given target = 3, return true.

const searchMatrix = (matrix, target) => {
  const n = matrix.length;
  const m = (matrix[0] || []).length;
  let left = 0;
  let right = (n * m) - 1;
  let mid = 0;
  let temp = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    temp = matrix[Math.floor(mid / m)][mid % m];
    if (temp === target) {
      return true;
    } else if (temp > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

// Big O: O(log(mn))
