const DoublyLinkedList = require('../Helpers/DoublyLinkedList');
const insertAtEnd = require('../Helpers/InsertAtEnd');
const printList = require('../Helpers/PrintList');

let list = new DoublyLinkedList();

insertAtEnd(list, 7);
insertAtEnd(list, 1);
insertAtEnd(list, 23);
insertAtEnd(list, 3);
insertAtEnd(list, 14);

const bubbleSort = (list) => {
  if (list.length < 1) return null;

  for (let i = 0; i < list.length; i++) {
    let noSwaps = true;
    let previousNode = list.head;
    let currentNode = list.head.next;
    for (let j = 0; j < list.length; j++) {
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

const bubbleSortResult = bubbleSort(list);
printList(bubbleSortResult);
