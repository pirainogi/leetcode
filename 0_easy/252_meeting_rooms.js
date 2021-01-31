// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
//
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false
//
// Input: intervals = [[7,10],[2,4]]
// Output: true

const canAttendMeetings = function(intervals) {
  let sorted = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (sorted[i - 1][1] > sorted[i][0]) {
      return false;
    }
  }
  return true;
};

// Big O: O(n log(n))
