const ListNode = require('../Helpers/ListNode');

module.exports = insertAtBeginning = (list, value) => {
  const newNode = new ListNode(value);
  if (list.length === 0) {
    list.head = newNode;
    list.tail = newNode;
  } else {
    newNode.next = list.head;
    list.head.prev = newNode;
    list.head = newNode;
  }
  list.length++;
  return this;
}
