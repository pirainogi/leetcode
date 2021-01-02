// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
//
// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
//
// The replacement must be in-place, do not allocate extra memory.
//
//
// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
//
// Ex: 1, 2, 3 → 1, 3, 2
// Ex: 3, 2, 1 → 1, 2, 3
// Ex: 1, 1, 5 → 1, 5, 1

const nextPermutation = function (nums) {
  if (nums.length <= 1) return;
  let leftHandSwap;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      leftHandSwap = i;
      break;
    }
  }
  for (let i = nums.length - 1; i > leftHandSwap; i--) {
    if (nums[i] > nums[leftHandSwap]) {
      [nums[i], nums[leftHandSwap]] = [nums[leftHandSwap], nums[i]];
      let chopped = nums.splice(leftHandSwap + 1);
      chopped.sort((a, b) => a - b);
      nums.push(...chopped);
      return;
    }
  }
  nums.sort((a, b) => a - b);
};
