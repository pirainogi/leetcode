// Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

// Each number in C may only be used once in the combination.

// Note: All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.

// For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8, A solution set is:[ [1, 7], [1, 2, 5], [2, 6], [1, 1, 6] ]

function combinationSum2 (candidates, target) {
  let result = [];
  candidates = candidates.sort( (a,b) => a - b)
  combineHelper(result, candidates, [], 0, target)
  return result;
};

function combineHelper (result, arr, tempArr, index, target) {
  if (target < 0) return;
  if (target === 0) {
    result.push([...tempArr]);
    return;
  }

  for (let i = index; i < arr.length; i++) {
    let curr = parseInt(arr[i]);
    tempArr.push(curr)
    combineHelper(result, arr, tempArr, i + 1 , target - curr);
    tempArr.pop();
    while(arr[i] === arr[i + 1]) i++;
  };

  return;
}
