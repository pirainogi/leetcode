// Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)

// You have the following 3 operations permitted on a word:
// a) Insert a character
// b) Delete a character
// c) Replace a character


const minDistance = (word1, word2) => {
  const n = word1.length;
  const m = word2.length;
  const result = Array(n);

  for (let i = 0; i < n; i++) {
    result[i] = Array(m);
    for (let j = 0; j < m; j++) {
      result[i][j] = Math.min(
        getResult(i - 1, j, result) + 1,
        getResult(i, j - 1, result) + 1,
        getResult(i - 1, j - 1, result) + (word1[i] === word2[j] ? 0 : 1)
      );
    }
  }
  return getResult(n - 1, m - 1, result);
};

const getResult = (i, j, result) => {
  if (i < 0 && j < 0) return 0;
  if (i < 0) return j + 1;
  if (j < 0) return i + 1;
  return result[i][j];
};

// Big O: O(mn)
