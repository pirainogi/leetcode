// Follow up for 33 Search in Rotated Sorted Array:
// What if duplicates are allowed?
// Would this affect the run-time complexity? How and why? Write a function to determine if a given target is in the array.
//
// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true

const searchRotatedArr = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;
    if (nums[mid] > nums[left]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < nums[left]) {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      left++;
    }
  }
  return false;
};

// Big O: O(n)
