// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//
// Find the minimum element.
//
// You may assume no duplicate exists in the array.

// Input: [3,4,5,1,2]
// Output: 1

const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid - 1] > nums[mid]) return nums[mid];
    if (nums[mid] < nums[left] || nums[mid] < nums[right]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};

// Big O: O(log(n))
