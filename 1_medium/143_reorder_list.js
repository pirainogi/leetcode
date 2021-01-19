// Given a singly linked list L: L0→L1→…→Ln-1→Ln, reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…
//
// You may not modify the values in the list's nodes, only nodes itself may be changed.
//
// Given 1->2->3->4, reorder it to 1->4->2->3.
// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

const reorderList = (head) => {
  if (!head || !head.next || !head.next.next) return;

  // find mid
  let mid = null;
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next && slow.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  mid = slow;

  // reverse the later part
  let now = mid.next.next;
  let second = mid.next;
  let tmp = null;
  second.next = null;
  while (now) {
    tmp = now.next;
    now.next = second;
    second = now;
    now = tmp;
  }
  mid.next = second;

  // insert one after another
  let before = head;
  let after = mid.next;
  mid.next = null;
  while (after) {
    tmp = before.next;
    before.next = after;
    before = tmp;
    tmp = after.next;
    after.next = before;
    after = tmp
  }
};
