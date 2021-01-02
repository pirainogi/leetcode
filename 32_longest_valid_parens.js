// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// For "(()", the longest valid parentheses substring is "()", which has length = 2.
//
// Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

const longestValidParentheses = (str) => {
  const stack = [];
  let result = 0, start = 0;
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '(') {
      stack.push(i)
    } else if(str[i] === ')') {
      if(stack.length === 0) {
        start = i + 1;
      } else {
        stack.length = stack.length - 1;
        result = stack.length === 0 ? Math.max(result, i - start + 1) : Math.max(result, i - stack[stack.length-1]);
      }
    }
  }
  return result;
};
