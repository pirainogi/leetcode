// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Ex:
// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1
// [1,3,5,6], 7 → 4
// [1,3,5,6], 0 → 0


const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length;
  if(target <= nums[left]) {
    return left
  } else if(target >= nums[right - 1]){
    return right
  }

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return left;
};

// Big O: O(log(n))
