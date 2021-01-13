// Given a sorted array of integers, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n). If the target is not found in the array, return [-1, -1].

// Given [5, 7, 7, 8, 8, 10] and target value 8, return [3, 4].

function searchRange(nums, target) {
  let result = [-1, -1], left = 0, right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  if (nums[left] !== target) {
    return result;
  } else {
    result[0] = left;
  }

  right = nums.length - 1;

  while (left < right) {
    const mid = Math.ceil((left + right) / 2);  
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  result[1] = right;
  return result;
}

// Big O: O(log(n))
