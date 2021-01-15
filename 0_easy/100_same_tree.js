Given two binary trees, write a function to check if they are equal or not.
Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

// Input:     1         1
//           / \       / \
//          2   3     2   3
//
//         [1,2,3],   [1,2,3]
//
// Output: true

const isSameTree = (p, q) => {
  var stackP = [p];
  var stackQ = [q];
  var leftNode = null;
  var rightNode = null;

  while (stackP.length && stackQ.length) {
    leftNode = stackP.pop();
    rightNode = stackQ.pop();

    if (!leftNode && !rightNode) continue;
    if (!leftNode || !rightNode) return false;
    if (leftNode.val !== rightNode.val) return false;

    stackP.push(leftNode.left);
    stackP.push(leftNode.right);
    stackQ.push(rightNode.left);
    stackQ.push(rightNode.right);
  }
  return true;
};

// Big O: O(n)
// Space: O(n)

const isSameTree = (p, q) => {
  if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
  if (p && q) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  return true;
};

// Big O: O(n)
// Space: O(1)
