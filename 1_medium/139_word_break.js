// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
//
// Note:
//
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
//
// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

const wordBreak = (s, wordDict) => {
  const len = wordDict.length;
  const dp = Array(len);
  const map = {};
  for (let i = 0; i < len; i++) {
    map[wordDict[i]] = true;
  }
  return find(s, map, dp, 0);
};

const find = (s, map, dp, index) => {
  if (dp[index] !== undefined) return dp[index];

  let str = '';
  let res = false;
  const len = s.length;

  if (index === len) return true;

  for (let i = index; i < len; i++) {
    str = s.substring(index, i + 1);
    if (map[str] && find(s, map, dp, i + 1)) {
      res = true;
      break;
    }
  }

  dp[index] = res;
  return res;
};

// Big O: O(n^2)
