// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const mergeTwoLists = function(listA, listB) {
  const head = new ListNode(0);
  let now = head;
  let currA = listA;
  let currB = listB;
  while (currA || currB) {
    if (currA === null || (currB !== null && currB.val < currA.val)) {
      now.next = currB;
      currB = currB.next;
    } else {
      now.next = currA;
      currA = currA.next;
    }
    now = now.next;
  }
  return head.next;
};

// Big O: O(n)
