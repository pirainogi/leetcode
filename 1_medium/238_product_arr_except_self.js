// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// Solve it without division and in O(n).
//
// For example, given [1,2,3,4], return [24,12,8,6].
//
// Follow up: Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

const productExceptSelf = (nums) => {
  const len = nums.length;
  let res = Array(len);
  let right = 1;
  res[0] = 1;

  for (let i = 1; i < len; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  for (let j = len - 1; j >= 0; j--) {
    res[j] *= right;
    right *= nums[j];
  }

  return res;
};
