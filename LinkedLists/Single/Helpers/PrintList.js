module.exports = printList = (list) => {
  let current = list;

  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}
