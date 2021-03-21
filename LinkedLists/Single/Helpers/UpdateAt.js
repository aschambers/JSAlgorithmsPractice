const size = require('../Helpers/Size');

module.exports = updateAt = (list, position, value) => {
  if (size(list) < 1 || !value) return list;
  if (position > size(list)) return list;
  if (position === 0) {
    list.value = value;
  }

  let previousNode = list;
  let currentNode = list.next;

  for (let i = 1; i < size(list); i++) {
    if (position === i) {
      previousNode.next.value = value;
      break;
    }

    previousNode = currentNode;
    currentNode = previousNode.next;
  }

  return list;
}
