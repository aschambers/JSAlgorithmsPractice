const size = require('../Helpers/Size');

module.exports = deleteAtEnd = (list) => {
  if (size(list) < 1 || list.next === null) return null;

  let previousNode = list;
  let currentNode = list.next;

  for (let i = 0; i < size(list); i++) {
    if (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  previousNode.next = null;

  return list;
}
