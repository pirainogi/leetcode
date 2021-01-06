// Implement pow(x, n).

// Notes:
// -100.0 < x < 100.0
// n is a 32-bit signed integer, within the range [−231, 231 − 1]

// Input: 2.00000, 10
// Output: 1024.00000

// Input: 2.00000, -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

const myPow = function(x, n) {
  if (n === 0) return 1;
  if (n > 0) return pow(x, n);
  if (n < 0) return 1 / pow(x, -n);
};

const pow = function (x, n) {
  if (n === 1) return x;
  const num = pow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return num * num;
  } else {
    return x * num * num;
  }
};

// Big O: O(log(n))
