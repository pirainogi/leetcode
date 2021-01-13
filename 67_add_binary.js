// Given two binary strings, return their sum (also a binary string).

// For example, a = "11" and b = "1"
// Return "100".

const addBinary = (a, b) => {
  const lenA = a.length;
  const lenB = b.length;
  const max = Math.max(lenA, lenB);
  let result = '';
  let carry = 0;
  let val = 0;

  for (let i = 0; i < max; i++) {
    val = Number(a[lenA - 1 - i] || 0) + Number(b[lenB - 1 - i] || 0) + carry;
    carry = Math.floor(val / 2);
    result = (val % 2) + result;
  }

  if (carry) result = 1 + result;

  return result;
};

// Big O: O(n)
