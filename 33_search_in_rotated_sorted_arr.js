// Suppose a sorted array is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

const search = (nums, target) => {
  if(nums.length == 0 || nums == null) return -1;
  let left = 0;
  let right = nums.length-1;

  while(left < right){
    let mid = Math.floor((left+right)/2);
    if(nums[mid]>nums[right]) {
      left = mid+1;
    } else {
      right = mid;
    }
  }

  let pivot = left;
  left = 0;
  right = nums.length-1;

  if(nums[pivot] <= target && target <= nums[right]) {
    left = pivot;
  } else {
    right = pivot;
  }

  while(left <= right){
    let mid = Math.floor((left+right)/2);
    if(nums[mid] == target) {
      return mid;
    }
    if(nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

// Big O: O(log(n))
