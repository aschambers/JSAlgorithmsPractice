module.exports = deleteAtBeginning = (list) => {
  if (list.length === 0) return null;

  if (list.length === 1) {
    list.head = null;
    list.tail = null;
  } else {
    const temp = list.head;
    list.head = temp.next;
    list.head.prev = null;
    temp.next = null;
  }

  list.length--;
  return list;
}
