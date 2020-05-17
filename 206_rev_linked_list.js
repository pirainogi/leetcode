/* Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. 
Could you implement both? */

const reverseList = function(head) {
  let current = head;
  let prev = null;
  
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    if (temp === null) {
      head = current;
    }
    current = temp;
  }
  
  return head;
};
//recursive 
const reverseList = (head) => reverse(head, null);

const reverse = (node, next) => {
  if (!node) {
    return next;
  }
  
  let temp = node.next;
  node.next = next;
  
  return reverse(temp, node);
}