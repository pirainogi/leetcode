// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
//
// Example 1:
// Input: 2
// Output: [0,1,1]
//
// Example 2:
// Input: 5
// Output: [0,1,1,2,1,2]

const countBits = (num) => {
  const res = [0];
  for (let i = 1; i <= num; i++) {
    const odd = i & 1;
    const half = i >> 1;
    res.push(res[half] + odd);
  }
  return res;
};
