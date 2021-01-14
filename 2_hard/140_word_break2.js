// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.
//
// Note:
//
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
//
// Input:
// s = "catsanddog"
// wordDict = ["cat", "cats", "and", "sand", "dog"]
// Output:
// [
//   "cats and dog",
//   "cat sand dog"
// ]

const wordBreak = (s, wordDict) => {
  const dp = Array(s.length);
  const map = {};
  const res = [];

  for (let i = 0; i < wordDict.length; i++) {
    map[wordDict[i]] = true;
  }

  return find(s, map, dp, 0);
};

const find = (s, map, dp, index) => {
  if (dp[index]) return dp[index];

  let str = '';
  let tmp = null;
  const len = s.length;

  dp[index] = [];

  for (let i = index; i < len; i++) {
    str = s.substring(index, i + 1);
    if (!map[str]) continue;
    if (i === len - 1) {
      dp[index].push(str);
      break;
    }
    tmp = find(s, map, dp, i + 1);
    for (let j = 0; j < tmp.length; j++) {
      dp[index].push(str + ' ' + tmp[j]);
    }
  }

  return dp[index];
};

// Big O: O(n^2)
