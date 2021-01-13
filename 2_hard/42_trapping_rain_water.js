// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

const trap = (height) => {
  let leftMax = -1,
  rightMax = -1,
  left = 0,
  right = height.length - 1,
  water = 0;
  while (left <= right) {
    leftMax = height[left] > leftMax ? height[left] : leftMax
    rightMax = height[right] > rightMax? height[right] : rightMax
    if (leftMax > rightMax) {
      water += rightMax - height[right]
      right--
    } else {
      water += leftMax - height[left]
      left++
    }
  }
  return water
};

// Big O: O(n)
