// Given a collection of distinct numbers, return all possible permutations.

// For example, [1,2,3] have the following permutations:
// [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]

const permutations = (nums) => {
  let result = []
  permute(nums);
  return result;

  const permute = (arr, tempArray = []) => {
    if (arr.length === 0) {
      result.push(tempArray);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        p(curr.slice(), tempArray.concat(next));
      }
    }
  }
}

// Big O: O(n!)
