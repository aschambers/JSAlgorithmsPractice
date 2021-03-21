const ListNode = require('../Helpers/ListNode');

module.exports = insertAtBeginning = (list, value) => {
  const newNode = new ListNode(value);

  if (list.length === 0) {
    list.head = newNode;
  } else {
    let temp = list.head;
    list.head = newNode;
    newNode.next = temp;
  }

  list.length++;
  return this;
}
