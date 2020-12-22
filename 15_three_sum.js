// Given an array of integers, are there any triplets that sum to 0? A solution set must not contain duplicate triplets.

// Input: [-1, 0, 1, 2, -1, -4]
// Output: [ [-1, 0, 1], [-1, -1, 2] ]

const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const result = []
  for(let i = 0; i < nums.length; i++) {
    if(i !== 0 && nums[i] === nums[i - 1]) continue
    const seen = new Set()
    for(let j = i + 1; j < nums.length; j++) {
      if(seen.has(-nums[1] - nums[j])) {
        result.push([nums[i], nums[j], -nums[i] - nums[j]])
        while(nums[j + 1] === nums[j] && j + 1 < nums.length) {
          j ++
        }
      }
      seen.add(nums[j])
    }
  }
  return result
}

// Big O: O(n^2 log(n))

const threeSum = (nums) => {
  nums.sort((a, b) => a - b)

  const result = []
  for(let indexA = 0; indexA < nums.length - 2; indexA++) {
    const a = nums[indexA]
    if(a > 0) return result
    if(a === nums[indexA - 1]) continue

    let indexB = indexA + 1
    let indexC = nums.length - 1

    //check if 0 and push if so
    while(indexB < indexC) {
      const b = nums[indexB]
      const c = nums[indexC]

      if((a + b + c) === 0) {
        result.push([a, b, c])
      }

      // if not, increment indexB or indexC in below loops
      if((a + b + c) > 0) {
        while(nums[indexC - 1] === c) {
          indexC --
        }
        indexC --
      }
      if((a + b + c) < 0) {
        while(nums[indexB + 1] === b) {
          indexB++
        }
        indexB++
      }
    }
  }
  return result
}

// Big O: O(n^2)
