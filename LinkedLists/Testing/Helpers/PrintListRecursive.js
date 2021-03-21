module.exports = printListRecursive = (list) => {
  if (list) {
    console.log(list.value)
  } else {
    return;
  }

  printListRecursive(list.next);
}
