// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
//
// Given 1->2->3->3->4->4->5, return 1->2->5.
// Given 1->1->1->2->3, return 2->3.

const deleteDuplicates = (head) => {
  const newHead = new ListNode(0);
  let now = newHead;
  let tmp = head;
  let val = 0;

  while (tmp) {
    val = tmp.val;
    if (tmp.next && tmp.next.val === val) {
      tmp = tmp.next;
      while (tmp && tmp.val === val) tmp = tmp.next;
    } else {
      now.next = tmp;
      now = tmp;
      tmp = tmp.next;
      now.next = null;
    }
  }
  return newHead.next;
};

// Big O: O(n)
