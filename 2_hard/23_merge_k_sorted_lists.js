// Merge k sorted linked lists and return it as one sorted list.

// Analyze and describe its complexity.

// Input: k = 3, n =  4
// list1 = 1->3->5->7->NULL
// list2 = 2->4->6->8->NULL
// list3 = 0->9->10->11->NULL
//
// Output: 0->1->2->3->4->5->6->7->8->9->10->11

var mergeKLists = function(lists) {
  while (lists.length > 1) {
    lists.unshift(mergeTwoLists(lists.pop(), lists.pop()))
  }
  return lists[0] || []
};

function mergeTwoLists (listA, listB) {
  let head = { next: null }
  let merged = head
  let currA = listA
  let currB = listB
  while (currA && currB) {
    let temp
    if  (currA.val < currB.val) {
      temp = currA
      currA = currA.next
    } else {
      temp = currB
      currB = currB.next
    }
    merged.next = temp
    merged = temp
  }
  merged.next = currA || currB
  return head.next
};

// Big O: O(n * log(k))
