// Given n non-negative integers, where each represents a point at coordinate (i, a). n vertical lines are drawn such that the endpoints of line i is at (i, a) and (i, 0). Find two lines, with which the x-axis forms a container, such that the container holds the most water.

// n is at least 2

// Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49

// volume = height x length x depth (only concerned about height x length)
// - container volume is limited by the lowest wall
// - index numbers can be used as x-coordinates for each height

// - start with the outside walls, pick lower in height and multiply by width (length of array) = total area

const maxArea = (heights) => {
  let i = 0, j = heights.length - 1, max = 0, area
  while(i < j) {
    area = (j - i) * Math.min(heights[i], heights[j])
    max = Math.max(area, max)
    heights[i] < heights[j] ? i++ : j--
  }
  return max
}
