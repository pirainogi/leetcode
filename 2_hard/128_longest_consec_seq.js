// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
//
// Your algorithm should run in O(n) complexity.
//
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

const longestConsecutive = (nums) => {
  let map = {};
  let max = 0;
  let start = 0;
  let end = 0;
  let num = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    num = nums[i];
    if (map[num]) continue;
    start = map[num - 1] ? map[num - 1].start : num;
    end = map[num + 1] ? map[num + 1].end : num;
    map[num] = { start: num, end: num };
    map[start].end = end;
    map[end].start = start;
    max = Math.max(end - start + 1, max);
  }
  return max;
};

// Big O: O(n)
