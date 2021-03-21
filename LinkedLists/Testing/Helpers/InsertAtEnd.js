const ListNode = require('../Helpers/ListNode');

module.exports = insertAtEnd = (list, value) => {
  let node = new ListNode(value);

  let current = list;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = node;

  return list;
}
