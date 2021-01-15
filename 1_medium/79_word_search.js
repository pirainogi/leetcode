// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring.

//The same letter cell may not be used more than once.

// For example,
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// word = "ABCCED", -> returns true,
// word = "SEE", -> returns true,
// word = "ABCB", -> returns false.

const wordSearch = (board, word) => {
  const len1 = board.length;
  const len2 = (board[0] || []).length;
  const len3 = word.length;

  if (!len1 || !len2 || !len3) return false;

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (helper(board, word, i, j, 0)) return true;
    }
  }

  return false;
};

const helper = (board, word, m, n, k) => {
  if (k === word.length) return true;
  if (m < 0 || m >= board.length) return false;
  if (n < 0 || n >= board[m].length) return false;
  if (board[m][n] !== word[k]) return false;

  let res = false;
  const char = board[m][n];

  board[m][n] = '#';

  res = helper(board, word, m - 1, n, k + 1)
        || helper(board, word, m + 1, n, k + 1)
        || helper(board, word, m, n - 1, k + 1)
        || helper(board, word, m, n + 1, k + 1);

  if (!res) board[m][n] = char;

  return res;
};

// Big O: O(3nk)
