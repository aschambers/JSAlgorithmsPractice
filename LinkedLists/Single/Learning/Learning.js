const ListNode = require('../Helpers/ListNode');
const size = require('../Helpers/Size');
const printList = require('../Helpers/PrintList');
const insertAtBeginning = require('../Helpers/InsertAtBeginning');
const insertAtEnd = require('../Helpers/InsertAtEnd');
const deleteAtBeginning = require('../Helpers/DeleteAtBeginning');
const deleteAtEnd = require('../Helpers/DeleteAtEnd');
const deleteAt = require('../Helpers/DeleteAt');
const updateAt = require('../Helpers/UpdateAt');
const getValueAtIndex = require('../Helpers/GetValueAtIndex');
const insertAt = require('../Helpers/InsertAt');

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(8);
let node4 = new ListNode(12);
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(insertAt(node1, 11, 1));
printList(node1);
