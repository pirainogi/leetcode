// Follow up for N-Queens problem.

// Now, instead outputting board configurations, return the total number of distinct solution

const totalNQueens = function(n) {
  if (n === 1 || n >= 4) return dfs([], n, 0);
  return 0;
};

const dfs = function (points, n, index) {
  let res = 0;
  if (points.length === n) return 1;
  for (let i = index; i < n; i++) {
    if (points.length !== i) return res;
    for (let j = 0; j < n; j++) {
      if (!isValid(points, [i, j])) continue;
      points.push([i, j]);
      res += dfs(points, n, i + 1);
      points.pop();
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
