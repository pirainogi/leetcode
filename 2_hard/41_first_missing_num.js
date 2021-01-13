// Given an unsorted integer array, find the first missing positive integer.

// Your algorithm should run in O(n) time and use constant space.

// For example, Given [1,2,0] return 3,
// and [3,4,-1,1] return 2.

const missingNum = (arr) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== i+1 && arr[i] > 0 && arr[i] <= arr.length && arr[i] !== arr[arr[i]-1]){
      let t = arr[arr[i]-1]
      arr[arr[i]-1] = arr[i]
      arr[i] = t
      i--
    }
  }
  for(let i=0; i < arr.length; i++){
    if(arr[i] !== i + 1) return i + 1
  }
  return arr.length+1
}

// Big O: O(n)
