// Given a set of distinct integers, nums, return all possible subsets. Note: The solution set must not contain duplicate subsets.

// For example, If nums = [1,2,3], a solution is:
// [ [3], [1], [2], [1,2,3], [1,3], [2,3], [1,2], [] ]

const subsets = (nums) => {
  const res = [];
  helper(nums, res, [], 0);
  return res;
};

const helper = (nums, res, arr, start) => {
  const len = nums.length;

  res.push(Array.from(arr));

  if (start === len) return;

  for (let i = start; i < len; i++) {
    arr.push(nums[i]);
    helper(nums, res, arr, i + 1);
    arr.pop();
  }
};

// Big O: O(n^2)
