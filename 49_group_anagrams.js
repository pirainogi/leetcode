// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], Return:
// [ ["ate", "eat", "tea"], ["nat", "tan"], ["bat"] ]

const groupAnagrams = function(strs) {
  const res = {};
  let str = '';
  const len = strs.length;
  for (var i = 0; i < len; i++) {
    str = Array.from(strs[i]).sort().join('');
    if (!res[str]) res[str] = [];
    res[str].push(strs[i]);
  }
  return Object.values(res);
};

// Big O: O(m * n log(n))
