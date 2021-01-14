// Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing all ones and return its area.
// This is an extension of 84 Largest Rectangle in Histogram, you need to convert the 2D matrix, so that each row is a histogram of previous rows. if current row-col is '0', simple treat this row-col in histogram as 0.


const maximalRectangle = (matrix) => {
  const rows = matrix.length;
  const cols = (matrix[0] || []).length;
  var max = 0;
  var heights = Array(m);
  var stack = [];
  var h = 0;
  var w = 0;

  for (let i = 0; i < rows; i++) {
    stack = [];

    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === '1') {
        heights[j] = i === 0 ? 1 : heights[j] + 1;
      } else {
        heights[j] = 0;
      }

      while (stack.length && heights[j] <= heights[stack[stack.length - 1]]) {
        h = heights[stack.pop()];
        w = stack.length === 0 ? j : j - stack[stack.length - 1] - 1;
        max = Math.max(max, h * w);
      }

      stack.push(j);
    }

    while (stack.length) {
      h = heights[stack.pop()];
      w = stack.length === 0 ? cols : cols - stack[stack.length - 1] - 1;
      max = Math.max(max, h * w);
    }
  }

  return max;
};

// Big O: O(n^2)
