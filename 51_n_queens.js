// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

// For example, there are two distinct solutions to the 4-queens puzzle:
// [
//   [".Q..",
//    "...Q",
//    "Q...",
//    "..Q."],

//   ["..Q.",
//    "Q...",
//    "...Q",
//    ".Q.."]
// ]

const solveNQueens = function(n) {
  const res = [];
  if (n === 1 || n >= 4) dfs(res, [], n, 0);
  return res;
};

const dfs = function (res, points, n, index) {
  for (let i = index; i < n; i++) {
    if (points.length !== i) return;
    for (let j = 0; j < n; j++) {
      if (isValid(points, [i, j])) {
        points.push([i, j]);
        dfs(res, points, n, i + 1);
        if (points.length === n) res.push(buildRes(points));
        points.pop();
      }
    }
  }
};

const buildRes = function (points) {
  const res = [];
  const n = points.length;
  for (let i = 0; i < n; i++) {
    res[i] = '';
    for (let j = 0; j < n; j++) {
      res[i] += (points[i][1] === j ? 'Q' : '.');
    }
  }
  return res;
};

const isValid = function (oldPoints, newPoint) {
  const len = oldPoints.length;
  for (let i = 0; i < len; i++) {
    if (oldPoints[i][0] === newPoint[0] || oldPoints[i][1] === newPoint[1]) return false;
    if (Math.abs((oldPoints[i][0] - newPoint[0]) / (oldPoints[i][1] - newPoint[1])) === 1) return false;
  }
  return true;
};

// Big O: O(n^2)
