// Given two numbers represented as strings, return multiplication of the numbers as a string.

// Note: The numbers can be arbitrarily large and are non-negative.

// Converting the input string to integer is NOT allowed.
// You should NOT use internal library such as BigInteger.

const multiply = (num1, num2) => {
  const len1 = num1.length;
  const len2 = num2.length;
  const result = Array(len1 + len2).fill(0);
  let carry = 0;
  let val = 0;
  let index = 0;

  for (let i = len1 - 1; i >= 0; i--) {
    carry = 0;
    for (let j = len2 - 1; j >= 0; j--) {
      index = len1 + len2 - 2 - i - j;
      val = (num1[i] * num2[j]) + carry + result[index];
      carry = Math.floor(val / 10);
      result[index] = val % 10;
    }
    if (carry) {
      result[index + 1] = carry;
    }
  }

  while (result.length > 1 && result[result.length - 1] === 0) {
    result.pop();
  }
  return result.reverse().join('');
};

// Big O: O(nm)
