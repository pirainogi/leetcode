// Given a list, rotate the list to the right by k places, where k is non-negative.

// For example: 1->2->3->4->5->NULL and k = 2,
// return 4->5->1->2->3->NULL.

const rotateRight = function(head, k) {
  let count = 1;
  let last = head;
  let curr = head;

  if (!head || !head.next) return head;

  while (last.next) {
    last = last.next;
    count++;
  }

  k %= count;

  if (k === 0) return head;

  while (k < count - 1) {
    curr = curr.next;
    k++;
  }

  last.next = head;
  head = curr.next;
  curr.next = null;

  return head;
};

// Big O: O(n)
