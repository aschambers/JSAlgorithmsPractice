const LinkedList = require('../Helpers/LinkedList');
const insertAtEnd = require('../Helpers/InsertAtEnd');
const insertAtBeginning = require('../Helpers/InsertAtBeginning');
const printList = require('../Helpers/PrintList');
const deleteAtBeginning = require('../Helpers/DeleteAtBeginning');
const deleteAtEnd = require('../Helpers/DeleteAtEnd');

let list = new LinkedList();

insertAtEnd(list, 5);
insertAtEnd(list, 1);
insertAtBeginning(list, 7);
insertAtBeginning(list, 9);
insertAtEnd(list, 6);
insertAtEnd(list, 3);
deleteAtBeginning(list);
deleteAtEnd(list);

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
