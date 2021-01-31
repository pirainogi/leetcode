// Given an array of meeting time intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
//
// Input: intervals = [[7,10],[2,4]]
// Output: 1

const minMeetingRooms = (intervals) => {
  let start = [], end = []
  const len = intervals.length

  for(let i = 0; i < len; i++){
    let curr = intervals[i]
    start.push(curr[0])
    end.push(curr[i])
  }

  start = start.sort((a, b) => a - b)
  end = end.sort((a, b) => a - b)
  let result = 0
  let pointer = 0

  for(let i = 0; i < len; i++){
    if(start[i] < end[pointer]){
      result++
    } else {
      pointer++
    }
  }
}

// Big O: O(n log(n))
