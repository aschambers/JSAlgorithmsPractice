const LinkedList = require('../Helpers/LinkedList');
const ListNode = require('../Helpers/ListNode');
const insertAtEnd = require('../Helpers/InsertAtEnd');
const printList = require('../Helpers/PrintList');

let list1 = new LinkedList();
insertAtEnd(list1, 2);
insertAtEnd(list1, 4);
insertAtEnd(list1, 3);

let list2 = new LinkedList();
insertAtEnd(list2, 5);
insertAtEnd(list2, 6);
insertAtEnd(list2, 4);

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (...args) => {
  const l1 = args[0];
  const l2 = args[1];
  let list = args[2] ? args[2] : new LinkedList();
  const carry = args[3];
  if (l1 || l2) {
    let currentl1 = l1.head ? l1.head : l1;
    let currentl2 = l2.head ? l2.head : l2;

    const val1 = currentl1 ? currentl1.value : 0;
    const val2 = currentl2 ? currentl2.value : 0;
    const next1 = currentl1 ? currentl1.next : null;
    const next2 = currentl2 ? currentl2.next : null;
    const val = carry ? val1 + val2 + 1 : val1 + val2;
    
    insertAtEnd(list, val % 10);
    list = addTwoNumbers(next1, next2, list, val >= 10);
  } else if (carry) {
    insertAtEnd(list, 1);
  }
  return list;
};

const result = addTwoNumbers(list1, list2);
printList(result);
