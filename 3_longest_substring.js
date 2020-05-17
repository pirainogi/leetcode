/*Given a string, find the length of the longest substring without 
repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

const lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let left = 0, right = 0, maxLength = 0;
  
  while(right < s.length){
      if(!set.has(s.charAt(right))){
          set.add(s.charAt(right))
          maxLength = Math.max(maxLength, set.size)
          right ++
      } else {
          set.delete(s.charAt(left))
          left ++ 
      }
  }
  return maxLength
};