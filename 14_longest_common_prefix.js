// Find the longest common prefix string amongst an array of strings

// Input: ["flower", "flow", "flight"]
// Output: "fl"

// Input: ["dog", "racecar", "car"]
// Output: ""

// - horizontal method: take the first and second words from an array and determine the prefix (if any); compare prefix against every other word in the array

// - vertical method: compare all of the words one letter at a time (faster in the worst case scenario)

const longestCommonPrefix = (strings) => {
  if(!strings.length) return ""

  for(let i = 0; i < strings[0].length; i++) {
    for(let j = 1; j < strings.length; j++) {
      const char = strings[j]
      if(char[i] !== strings[0][i]) return char.slice(0, i)
    }
  }
  return strings[0]
}

// Big O: O(n^2)


const longestCommonPrefix = (strings) => {
  const sorted = strings.concat().sort()
  const first = sorted[0], last = sorted[sorted.length - 1], i = 0
  while (i < first.length && first.charAt(i) === last.charAt(i)) i++
  return first.substring(0, i)
}

// Big O: O(n)
