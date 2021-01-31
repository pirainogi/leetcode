// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given a list of non-negative integers nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

const rob = (nums) => {
  const len = nums.length;
  if(len === 0) return 0;
  if(len === 1) return nums[0];

  return Math.max(easyrob(nums.slice(1)),easyrob(nums.slice(0,len-1)));

  function easyrob(nums){
    const len = nums.length;
    if(len === 1) return nums[0];

    let temp = [];
    temp[0] = nums[0];
    temp[1] = Math.max(nums[1], nums[0]);

    for(let i = 2; i < len; i++){
        temp[i] = Math.max(nums[i] + temp[i-2], temp[i-1]);
    }
    return temp[len - 1];
  }
};

// Big O: O(n)
