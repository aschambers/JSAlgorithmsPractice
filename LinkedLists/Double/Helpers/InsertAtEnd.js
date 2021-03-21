const ListNode = require('../Helpers/ListNode');

module.exports = insertAtEnd = (list, value) => {
  const newNode = new ListNode(value);
  if (list.length === 0) {
    list.head = newNode;
    list.tail = newNode;
  } else {
    list.tail.next = newNode;
    newNode.prev = list.tail;
    list.tail = newNode;
  }

  list.length++;
  return list;
}
