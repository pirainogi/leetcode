// Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

// The same repeated number may be chosen from C unlimited number of times.

// Note: All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.

// For example, given candidate set [2, 3, 6, 7] and target 7,
// A solution set is: [ [7], [2, 2, 3] ]

const comboSum = (arr, target) => {
  let temp = [], result = [], sum = 0, index = 0

  const backtrack = (temp, sum, index) => {
    if(sum > target) return
    if(sum === target) {
      result.push([...temp])
      return
    }
    for(let i = index; i < arr.length; i++) {
      temp.push(arr[i])
      backtrack(temp, sum + arr[i], i)
      temp.pop()
    }
  }

  backtrack(temp, sum, index)
  return result
}

// Big O: O(n^2)
