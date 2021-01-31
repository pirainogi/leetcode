// Given an integer array nums, return the length of the longest strictly increasing subsequence.
//
// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
//
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

const lengthOfLIS = (nums) => {
  if(!nums.length) return 0;
  const tails = [];
  tails[0] = nums[0];

  for(let i = 1; i < nums.length; i++) {
    if(nums[i] < tails[0]) {
        tails[0] = nums[i];
    } else if(nums[i] > tails[tails.length-1]) {
        tails.push(nums[i]);
    } else {
      let l = 0;
      let r = tails.length-1;
      while(l < r) {
        const mid = (l+r)/2 >> 0;
        if(tails[mid] >= nums[i]) {
          r = mid
        } else {
            l = mid + 1;
        }
      }
      tails[r] = nums[i];
    }
  }
  return tails.length;
};

// Big O: O(n log(n))
