const ListNode = require('../Helpers/ListNode');

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(8);
let node4 = new ListNode(12);
node1.next = node2;
node2.next = node3;
node2.prev = node1;
node3.next = node4;
node3.prev = node2;
node4.prev = node3;

console.log(node1);
