// A message containing letters from A-Z is being encoded to numbers using the following mapping:
// 'A' -> 1 'B' -> 2 ...
// 'Z' -> 26
// Given an encoded message containing digits, determine the total number of ways to decode it.
// For example, Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
// The number of ways decoding "12" is 2.

const numDecodings = (s) => {
  const len = s.length;
  let tmp = 0;
  let tmp1 = 1;
  let tmp2 = 0;
  let num1 = 0;
  let num2 = 0;

  if (s === '' || s[0] === '0') return 0;

  for (let i = 1; i <= len; i++) {
    num1 = Number(s.substr(i - 1, 1));
    num2 = Number(s.substr(i - 2, 2));
    if (num1 !== 0) tmp += tmp1;
    if (10 <= num2 && num2 <= 26) tmp += tmp2;
    tmp2 = tmp1;
    tmp1 = tmp;
    tmp = 0;
  }

  return tmp1;
};

// Big O: O(n)
