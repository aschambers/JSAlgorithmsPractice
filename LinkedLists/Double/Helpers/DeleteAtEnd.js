module.exports = deleteAtEnd = (list) => {
  if (list.length < 1) return null;

  if (list.length === 1) {
    list.head = null;
    list.tail = null;
  } else {
    const temp = list.tail;
    list.tail = temp.prev;
    list.tail.next = null;
    temp.prev = null;
  }

  list.length--;

  return list;
}
