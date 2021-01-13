// Given a linked list, swap every two adjacent nodes and return its head.
//
// For example, Given 1->2->3->4, you should return the list as 2->1->4->3.
//
// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

const swapPairs = (head) => {
  let result = new Node(0)
  let curr = result

  result.next = head
  while(curr.next && curr.next.next){
    curr = swap(curr, curr.next, curr.next.next)
  }
  return result.next
}

const swap = (a, b, c) => {
  a.next = c
  b.next = c.next
  c.next = b
  return b
}

// Big O: O(n)
