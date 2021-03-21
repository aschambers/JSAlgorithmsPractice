module.exports = printList = (list) => {
  if (!list) return null;
  let current = list.head;

  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}
