// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// Find the minimum element.
//
// The array may contain duplicates.
//
// Input: [1,3,5]
// Output: 1

const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      right--;
    }
  }
  return nums[left];
};

// Big O: O(n)
