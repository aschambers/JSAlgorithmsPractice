module.exports = deleteAtEnd = (list) => {
  if (list.length < 1) return null;

  if (list.length === 1) {
    list.head = null;
  } else {
    let previous = list.head;
    let current = list.head.next;

    for (let i = 0; i < list.length; i++) {
      if (current.next !== null) {
        previous = current;
        current = current.next;
      }
    }

    previous.next = null;
  }

  list.length--;

  return list;
}
