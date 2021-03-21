const ListNode = require('../Helpers/ListNode');

module.exports = insertAtEnd = (list, value) => {
  const newNode = new ListNode(value);
  if (list.length === 0) {
    list.head = newNode;
  } else {
    let current = list.head;
    for (let i = 0; i < list.length; i++) {
      if (current.next === null) {
        current.next = newNode;
        break;
      }

      current = current.next;
    }
  }

  list.length++;
  return list;
}
