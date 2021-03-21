const ListNode = require('../Helpers/ListNode');
const size = require('../Helpers/Size');
const printList = require('../Helpers/PrintList');

let node1 = new ListNode(1);
let node2 = new ListNode(23);
let node3 = new ListNode(3);
let node4 = new ListNode(14);
node1.next = node2;
node2.next = node3;
node3.next = node4;

const bubbleSort = (list) => {
  if (size(list) < 1) return null;

  for (let i = 1; i < size(list); i++) {
    let noSwaps = true;
    let previousNode = list;
    let currentNode = list.next;
    for (let j = 1; j < size(list); j++) {
      if (previousNode.next !== null && previousNode.value > currentNode.value) {
        let temp = previousNode.value;
        previousNode.value = currentNode.value;
        currentNode.value = temp;
        noSwaps = false;
      }

      if (previousNode.next !== null) {
        previousNode = currentNode;
        currentNode = previousNode.next;
      }
    }
    if (noSwaps) break;
  }

  return list;
}

const bubbleSortResult = bubbleSort(node1);
printList(bubbleSortResult);
