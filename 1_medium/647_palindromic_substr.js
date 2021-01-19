// Given a string, your task is to count how many palindromic substrings in this string.
//
// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
//
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

const subStrings = (s) => {
  const len = s.length
  let count = 0
  for(let center = 0; center < 2*len-1; ++center) {
    let left = Math.floor(center / 2)
    let right = left + center % 2
    count += expandFromMiddle(s, start, end, len)
    }
  }
  return count
}

const expandFromMiddle = (s, start, end, len) => {
  let result = 0
  while (start >= 0 && end < len && s[start] && s[end] && s[start] === s[end]) {
    result++
    start--
    end++
  }
  return result
}

Big O: O(n^2)
