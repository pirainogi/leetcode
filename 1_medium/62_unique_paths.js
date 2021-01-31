// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?
// Note: m and n will be at most 100.

const uniquePaths = (m, n) => {
  let result = Array(n).fill(1)
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      result[j] += result[j-1]
    }
  }
  return result[n-1]
}

// Big O: O(mn)
