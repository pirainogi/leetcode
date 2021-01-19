// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
//
// Machine 1 (sender) has the function:
// ```string encode(vector<string> strs) {
//   // ... your code
//   return encoded_string;
// }```
//
// Machine 2 (receiver) has the function:
// ```vector<string> decode(string s) {
//   //... your code
//   return strs;
// }```
//
// So Machine 1 does:
// ```string encoded_string = encode(strs);```
//
// and Machine 2 does:
// ```vector<string> strs2 = decode(encoded_string);```
//
// `strs2` in Machine 2 should be the same as `strs` in Machine 1.

const decode = (s) => {
  let res = [];
  let i = 0;
  while (i < s.length) {
    let slash = s.indexOf('/', i);
    let len = parseInt(s.substring(i, slash));
    let str = s.substring(slash + 1, slash + 1 + len);
    res.push(str);
    i = slash + 1 + len;
  }
  return res;
};

const encode = (strs) => {
  let sb = []
  for(let str of strs) {
    sb.push(str.length)
    sb.push("/")
    sb.push(str)
  }
  return sb.join("")
}

// Big O: O(n)
