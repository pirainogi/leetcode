// Given a digit string, return all possible letter combinations that the number could represent.

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

const letterCombos = (numStr) => {
  if(!numStr) return []
  const alpha = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  let result = []
  let current = []

  (function combine(index = 0) {
    if(index = numStr.length) {
      result.push(current.join(""))
      return
    }
    for(const char of alpha[numStr[index]]) {
      current.push(char)
      combine(index + 1)
      current.pop()
    }
  })()
  return result
}

// Big O: O(4^n)

const letterCombos = (numStr) => {
  const alpha = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
  let result = []
  if(numStr === "") {
    return result
  }

  (function dfs(curr, digit) {
    if(digit = numStr.length) {
      result.push(curr)
      return
    }
    let currDigit = numStr.charAt(digit)
    let str = alpha[parseInt(currDigit)]
    for(let i = 0; i < str.length; i++) {
      dfs(curr.concat(str.charAt(i), digit + 1))
    }
  })(0, "")
  return result
}

const letterCombos = (numStr) => {
  const alpha = [
    [],
    [],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ]

  const nums = [...numStr].map(Number)
  const result = []
  const count = nums.length - 1
  (function combine(n, curr) {
    if(n === count) {
      for(const char of alpha[nums[n]]) {
        result.push(curr + char)
      }
    } else {
      for(const char of alpha[nums[n]]) {
        combine(n + 1, curr + char)
      }
    }
  })(0, "")
  return result
}
