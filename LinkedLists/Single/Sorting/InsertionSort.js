const LinkedList = require('../Helpers/LinkedList');
const insertAtEnd = require('../Helpers/InsertAtEnd');
const printList = require('../Helpers/PrintList');

let list = new LinkedList();

insertAtEnd(list, 5);
insertAtEnd(list, 1);
insertAtEnd(list, 6);
insertAtEnd(list, 3);

const insertionSort = (list) => {
  if (list.length < 1) return null;

  for (let i = 1; i < list.length; i++) {
    let currentOuter = list.head.next;
    let currentHead = list.head;
    let currentInner = list.head;

    let j = i - 1;

    for (j; j > -1 && currentInner.value > currentOuter.value; j--) {
      if (currentInner.value > currentOuter.value) {
        let temp = currentInner.next.value;
        currentInner.next.value = currentInner.value;
        currentInner.value = temp;
      } else {
        break;
      }

      if (j === 0) {
        currentInner = list.head;
      } else {
        currentInner = currentHead;
        for (let k = 0; k < j; k++) {
          currentInner = currentInner.next;
        }
      }
    }
  }
  return list;
}

const insertionSortResult = insertionSort(list);
printList(insertionSortResult);
