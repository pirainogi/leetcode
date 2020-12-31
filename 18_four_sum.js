// Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?
//
// Find all unique quadruplets in the array which gives the sum of target.
//
// Note: The solution set must not contain duplicate quadruplets.
//
// Given array S = [1, 0, -1, 0, -2, 2], and target = 0,
// A solution set is: [ [-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2] ]

const fourSum = (nums, target) => {
  nums.sort((a, b) => a - b)
  let result = [], length = nums.length

  for(let i = 0; i < length - 3; i++) {
    if(i > 0 && nums[i] === nums[i - 1]) continue
    // if(nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
    // if(nums[i] + nums[length - 1] + nums[length - 2] + nums[length - 3] < target) continue

    for(let j = i + 1; j < length - 2; j++) {
      if(j > i + 1 && nums[j] === nums[j - 1]) continue
      // if(nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
      // if(nums[i] + nums[length - 1] + nums[length - 2] + nums[length - 3] < target) continue

      let left = j + 1
      let right = length - 1

      //check if 0 and push if so
      while(left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]

        if(total < target) {
          left ++
        } else if(total > target) {
          right --
        } else if(sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]])

          while(nums[left] === nums[left + 1]) {
            left++
          }
          while(nums[right] === nums[right - 1]){
            right--
          }
          left++
          right--
        }
      }
    }
  }
  return result
}

// Big O: O(n^3)
