const ListNode = require('../Helpers/ListNode');
const DoublyLinkedList = require('../Helpers/DoublyLinkedList');
const insertAtEnd = require('../Helpers/InsertAtEnd');
const deleteAtEnd = require('../Helpers/DeleteAtEnd');
const printList = require('../Helpers/PrintList');
const deleteAtBeginning = require('../Helpers/DeleteAtBeginning');
const insertAtBeginning = require('../Helpers/InsertAtBeginning');

let list = new DoublyLinkedList();

insertAtEnd(list, 5);
insertAtEnd(list, 6);
insertAtEnd(list, 7);
insertAtEnd(list, 8);

deleteAtEnd(list);
deleteAtBeginning(list);
insertAtBeginning(list, 44);
printList(list);
