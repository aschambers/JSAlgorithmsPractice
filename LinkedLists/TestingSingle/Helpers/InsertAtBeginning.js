const ListNode = require('../Helpers/ListNode');

module.exports = insertAtBeginning = (list, value) => {
  if (list.value) {
    let current = list;
    list = new ListNode(value);
    list.next = current;
  } else {
    list.head = value;
  }

  return list;
}
