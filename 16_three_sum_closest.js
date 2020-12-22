// Given an array of integers, find three integers such that the sum is closest to a given target number. Return the sum of the three integers. You may assume that each input would have exactly one solution

// Input: [-1, 2, 1, -4] target: 1
// Output: 2 (-1 + 2 + 1 = 2)

const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b)
  let length = nums.length
  let closest = nums[0] + nums[1] + nums[length - 1]

  for(let i = 0; i < length - 2; i++) {
    let left = i + 1
    let right = length - 1

    while(left < right) {
      sum = nums[i] + nums[left] + nums[right]
      if(sum < target) {
        left++
      } else {
        right++
      }
      if(Math.abs(closest - target) > Math.abs(sum - target)) {
        closest = sum
      }
    }
  }
  return closest
}

// Big O: O(n^2)
