// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
// Note: For the purpose of this problem, we define empty string as valid palindrome.
//
// Input: "A man, a plan, a canal: Panama"
// Output: true

const isPalindrome = (s) => {
  let i = 0;
  let j = s.length - 1;
  let m = '';
  let n = '';
  while (i < j) {
    m = s[i].toLowerCase();
    n = s[j].toLowerCase();
    if (!isLetterOrDigit(m)) i++;
    else if (!isLetterOrDigit(n)) j--;
    else if (m === n) { i++; j--; }
    else return false;
  }
  return true;
};

const isLetterOrDigit = (c) => {
  return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
};
