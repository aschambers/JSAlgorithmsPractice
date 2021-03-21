const size = require('../Helpers/Size');

module.exports = deleteAtEnd = (list) => {
  if (size(list) < 2) return null;
  
  let previous = list;
  let current = list.next;
  for (let i = 1; i < size(list); i++) {
    if (current.next === null) {
      previous.next = null;
      break;
    }

    previous = previous.next;
    current = previous.next;
  }

  return list;
}
