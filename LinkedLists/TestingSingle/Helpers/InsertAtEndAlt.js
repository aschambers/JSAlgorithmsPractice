const ListNode = require('../Helpers/ListNode');
const size = require('../Helpers/Size');

module.exports = insertAtEnd = (list, value) => {
  const newNode = new ListNode(value);
  if (size(list) < 1) {
    list = newNode;
  } else {
    let current = list.next;

    for (let i = 1; i < size(list); i++) {
      if (current.next === null) {
        const tailNode = current;
        current.next = newNode;
        newNode.prev = tailNode;
        break;
      }

      current = current.next;
    }
  }

  return list;
}
