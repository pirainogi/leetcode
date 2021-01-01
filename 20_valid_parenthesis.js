// Given a string containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid

// Input: "()"
// Output: true

// Input: "(}"
// Output: false

// Input: "([)]"
// Output: false

const validParens = (str) => {
  let stack = []
  let open = {
    "{": "}",
    "[": "]",
    "(": ")",
  }
  let closed = {
    "}": true,
    "]": true,
    ")": true,
  }

  for(let i = 0; i < str.length; i++) {
    let char = str[i]
    if(open[char]) {
      stack.push(char)
    } else if(closed[char]) {
      if(open[stack.pop()] !== char) return false
    }
  }
  return (stack.length === 0)
}

// Big O: O(n)
