// Invert a binary tree.
//
// Input:
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
//
// Output:
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

const invertTree = (root) => {
  if (root) {
    swap(root);
    invertTree(root.left);
    invertTree(root.right);
  }
  return root;
};

const swap = (node) => {
  let left = node.left;
  node.left = node.right;
  node.right = left;
};

// Big O: O(n)
