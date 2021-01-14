// Given a binary tree, return the postorder traversal of its nodes' values.
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
//
// Output: [3,2,1]
// Follow up: Recursive solution is trivial, could you do it iteratively?

const postorderTraversal = (root) => {
  if (!root) return [];
  const res = [];
  const stack = [];
  let node = root;
  while (node || stack.length) {
    if (node) {
      stack.push(node);
      res.unshift(node.val);
      node = node.right;
    } else {
      node = stack.pop();
      node = node.left;
    }
  }
  return res;
};

// Big O: O(n)
