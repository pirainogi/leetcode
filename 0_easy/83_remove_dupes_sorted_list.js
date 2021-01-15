// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

// Ex: Input: 1->1->2->3->3
// Output: 1->2->3

const deleteDuplicates = (head) => {
  let now = head;
  while (now) {
    if (now.next && now.next.val === now.val) {
      now.next = now.next.next;
    } else {
      now = now.next;
    }
  }
  return head;
};

// Big O: O(n)
