Given a binary tree, return the inorder traversal of its nodes' values.
Given binary tree {1,#,2,3},
  1
   \
    2
   /
  3
return [1,3,2].

OJ's Binary Tree Serialization:
The serialization of a binary tree follows a level order traversal, where '#' signifies a path terminator
where no node exists below.
Here's an example:
  1
 / \
2   3
   /
  4
   \
    5
The above binary tree is serialized as "{1,2,3,#,#,4,#,#,5}".
