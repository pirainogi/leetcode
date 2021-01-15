// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Follow up: A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

// Could you come up with an one-pass algorithm using only constant space?

const sortColors = (nums) => {
  const counts = [0, 0, 0];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    counts[nums[i]]++;
  }
  for (let j = 0; j < len; j++) {
    nums[j] = j < counts[0] ? 0 : (j < counts[0] + counts[1] ? 1 : 2);
  }
};

// Big O: O(n)

const sortColors = (nums) => {
  let m = 0;
  let n = 0;
  let k = nums.length;
  for (let i = 0; i < k; i++) {
    if (nums[i] === 0) {
      nums[i] = 2;
      nums[n++] = 1;
      nums[m++] = 0;
    } else if (nums[i] === 1) {
      nums[i] = 2;
      nums[n++] = 1;
    } else {
      nums[i] = 2;
    }
  }
};
