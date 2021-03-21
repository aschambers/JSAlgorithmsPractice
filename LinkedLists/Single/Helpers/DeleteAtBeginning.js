module.exports = deleteAtBeginning = (list) => {
  if (list.length === 0) return null;

  if (list.length === 1) {
    list.head = null;
  } else {
    list.head = list.head.next;
  }

  list.length--;
  return list;
}
