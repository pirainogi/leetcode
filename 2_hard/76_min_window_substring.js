// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Note: If there is no such window in S that covers all characters in T, return the empty string "".

// If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.

// For example, S = "ADOBECODEBANC" T = "ABC" Minimum window is "BANC".


const minWindow = (s, t) => {
  const map = {};
  const sLen = s.length;
  const tLen = t.length;
  let count = tLen;
  let min = Number.MAX_SAFE_INTEGER;
  let head = 0;
  let left = 0;
  let right = 0;

  if (!sLen || !tLen) return '';

  for (let i = 0; i < tLen; i++) {
    if (map[t[i]] === undefined) {
      map[t[i]] = 1
    } else {
      map[t[i]]++;
    }
  }

  while (right < sLen) {
    if (map[s[right]] !== undefined) {
      if (map[s[right]] > 0) count--;
      map[s[right]]--;
    }

    right++;
    while (count === 0) {
      if (right - left < min) {
        min = right - left;
        head = left;
      }
      if (map[s[left]] !== undefined) {
        if (map[s[left]] === 0) count++;
        map[s[left]]++;
      }
      left++;
    }
  }

  return min === Number.MAX_SAFE_INTEGER ? '' : s.substr(head, min);
};

// Big O: O(n)
