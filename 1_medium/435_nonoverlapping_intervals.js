// Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
//
// Input: [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
//
// Input: [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
//
// Input: [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

const eraseOverlappingIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0])
  let result = 0
  let j = 0

  for(let i = 1; i < intervals.length; i++){
    let nextStart = intervals[i][0]
    let nextEnd = intervals[i][1]
    let currEnd = intervals[j][1]

    if(currEnd > nextStart) {
      result++
      if(nextEnd > nextStart){
        j = i
      }
    } else {
      j = i
    }
  }

  return result
}

// Big O: O(n log(n))
