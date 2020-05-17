/*Given two strings s and t , write a function 
to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.*/

var isAnagram = function(s, t) {
  if(s.length != t.length) return false;
  if(s.length==0 && t.length==0) return true;

  let objS={};
  let objT={};

  for(let val of s){
      objS[val] = (objS[val] || 0) +1;
  }
   for(let val of t){
      objT[val] = (objT[val] || 0) +1;
  }
  
  for(let key in objS){
      if(!(key in objT))
         return false;
      if(objS[key]!==objT[key])
          return false;
  }

  return true;
};

var isAnagram = function(s, t){
  if(s.length !== t.length){
      return false 
    }
    return s.split("").sort().join("") === t.split("").sort().join("")
}