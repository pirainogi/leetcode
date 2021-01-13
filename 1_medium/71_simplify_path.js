// Given an absolute path for a file (Unix-style), simplify it.

// For example, path = "/home/", => "/home" path = "/a/./b/../../c/", => "/c"

const simplifyPath = (path) => {
  const arr = path.split('/');
  const stack = [];
  const len = arr.length;
  let item = '';
  for (let i = 0; i < len; i++) {
    item = arr[i];
    if (item === '' || item === '.') continue;
    if (item === '..') {
      stack.pop();
    } else {
      stack.push(item);
    }
  }
  return '/' + stack.join('/');
};

// Big O: O(n)
