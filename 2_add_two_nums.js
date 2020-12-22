// You are given two linked lists representing two non-negative numbers.

// The digits are stored in REVERSE order and each node contains a single digit.

// Add the two numbers and return as a linked list

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: (7 -> 0 -> 8)

function addTwoNums(listA, listB) {
  let list = new Node(0)
  let currNode = list
  let sum = 0
  let carry = 0

  while(listA !== null || listB !== null || sum > 0) {
    if(listA !== null) {
      sum += listA.val
      listA = listA.next
    }
    if(listB !== null) {
      sum += listB.val
      listB = listB.next
    }
    if(sum > 9) {
      carry = 1
      sum = sum - 10
    }

    currNode.next = new Node(sum)
    currNode = currNode.next
    sum = carry
    carry = 0
  }
  return list.next
}
