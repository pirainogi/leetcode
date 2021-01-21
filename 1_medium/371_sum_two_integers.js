// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -
//
// Input: a = 1, b = 2
// Output: 3

const getSum = (a, b) => {
  while(b !== 0) {
    let carry = a & b;
    a ^= b;
    b = carry << 1;
  }
  return a;
};

// Big O: O(n)
