// Two elements of a binary search tree (BST) are swapped by mistake. Recover the tree without changing its structure.
// Note: A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?

const recoverTree = (root) => {
  let data = {
    prev: null,
    first: null,
    second: null
  };
  let tmp = 0;

  helper(root, data);

  tmp = data.first.val;
  data.first.val = data.second.val;
  data.second.val = tmp;
};

const helper =  (root, data) => {
  if (!root) return;

  helper(root.left, data);

  if (data.prev && data.prev.val >= root.val) {
    if (!data.first) data.first = data.prev;
    data.second = root;
  }

  data.prev = root;

  helper(root.right, data);
};

// Big O: O(n) 
// Space: O(1)
