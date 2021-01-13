// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
// the contiguous subarray [4,−1,2,1] has the largest sum = 6.


function maxSum(arr){
  let currSum = 0, largestSum = 0
  for(let num of arr){
    currSum = Math.max(0, (currSum + num))
    largestSum = Math.max(largestSum, currSum)
  }
  return largestSum
}

// Big O: O(n)
