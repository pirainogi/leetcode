// Given n pairs of parenthesis, write a function to generate all combos of valid parenthesis

// Input: 3
// Output: [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()",
// ]

const generateParens = (num) => {
  const result = []

  (function bfs(str, left, right) {
    if(left === num && right === num){
      result.push(str)
      return
    }
    if(left !== n) {
      bfs(str + "(", left+1, right)
    }
    if(right !== n) {
      bfs(str + ")", left, right+1)
    }
  })("", 0, 0)
  return result
}

// Big O: O(4^n/√(n))
