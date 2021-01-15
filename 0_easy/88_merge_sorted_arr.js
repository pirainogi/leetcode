// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// Note: You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
//
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
//
// Output: [1,2,2,3,5,6]

const merge = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (j >= 0) {
    nums1[k--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }
};

// Big O: O(n)
