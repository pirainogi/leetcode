// Given a linked list, determine if it has a cycle in it.
// (tail points to an earlier node instead of ending in a null value)
//
// Follow up: Can you solve it without using extra space?

const hasCycle = (head) => {
  let slow = head;
  let fast = head;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next ? fast.next.next : undefined;
    if (slow === fast) return true;
  }
  return false;
};

// Big O: O(n)
