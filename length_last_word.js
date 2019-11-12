// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:
// Input: "Hello World"
// Output: 5

function lengthOfLastWord(s) {
    let arr = s.split(" ").filter(String)
    if(arr.length){
        return arr[arr.length - 1].length
    } else {
      return 0
    }
};
