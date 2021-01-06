// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1: Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

// Example 2: Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].
// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].


const insert = function(intervals, newInterval) {
  const len = intervals.length;
  let i = 0;
  const res = [];
  while (i < len && intervals[i].end < newInterval.start) {
    res.push(intervals[i]);
    i++;
  }
  while (i < len && intervals[i].start <= newInterval.end) {
    newInterval.start = Math.min(newInterval.start, intervals[i].start);
    newInterval.end = Math.max(newInterval.end, intervals[i].end);
    i++;
  }
  res.push(newInterval);
  while (i < len) {
    res.push(intervals[i]);
    i++;
  }
  return res;
};

// Big O: O(n)
