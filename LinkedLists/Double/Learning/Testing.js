const DoublyLinkedList = require('../Helpers/DoublyLinkedList');
const insertAtEnd = require('../Helpers/InsertAtEnd');
const deleteAtEnd = require('../Helpers/DeleteAtEnd');
const printList = require('../Helpers/PrintList')

let list = new DoublyLinkedList();

insertAtEnd(list, 5);
insertAtEnd(list, 6);
insertAtEnd(list, 7);
insertAtEnd(list, 8);

deleteAtEnd(list);
console.log(list);
printList(list);
