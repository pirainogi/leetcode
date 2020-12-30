// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(nums, target) {
  let obj = {}
  for(let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    obj[curr] = i
  }
  for(let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if(obj.hasOwnProperty(diff) && obj[diff] !== i) {
      return [i, obj[diff]]
    }
  }
}

// Big O: O(n)

function twoSum(nums, target) {
  for(let i = 0; i < nums.length; i++){
    if(nums.includes(target - nums[i]) && (nums.indexOf(target - nums[i]) !== i)){
        return [i, nums.indexOf(target-nums[i])]
    }
  }
};
