const size = require('../Helpers/Size');

module.exports = deleteAt = (list, position) => {
  if (position < 0 || size(list) < 1) return list;
  if (position >= size(list)) return list;
  if (position === 0) return list.next;
  
  let previousNode = list;
  let currentNode = list.next;

  for (let i = 1; i < size(list); i++) {
    if (position === i) {
      previousNode.next = currentNode.next;
      break;
    }

    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  return list;
}
