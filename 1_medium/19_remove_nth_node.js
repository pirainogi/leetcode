// Given a linked list, remove the n-th node from the end of list and return its head.
//
// 1->2->3->4->5, and n = 2.
//
// After removing the second node from the end, the linked list becomes 1->2->3->5.

const removeNthFromEnd = (list, n) => {
  const head = new ListNode(0);
  let left = head;
  let right = head;
  head.next = list;

  for (let i = 0; i < n + 1; i++) {
    right = right.next;
  }

  while (right !== null) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;

  return head.next;
};

// Big O: O(n)
