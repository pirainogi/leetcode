// Follow up for "Remove Duplicates":

// What if duplicates are allowed at most twice?

// For example, Given sorted array nums = [1,1,1,2,2,3],
// Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3.

// It doesn't matter what you leave beyond the new length.

const removeDuplicates = (nums) => {
  const len = nums.length;
  let index = 0;
  let last = NaN;
  let times = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === last) {
      if (times < 2) times++;
      else continue;
    } else {
      times = 1;
    }
    last = nums[i];
    nums[index] = nums[i];
    index++;
  }
  return index;
};

// Big O: O(n)
