const size = require('../Helpers/Size');

module.exports = getValueAtIndex = (list, position) => {
  let value = null;
  let current = list;
  
  if (position > size(list) || position < 0 || size(list) < 1) return value;

  for (let i = 0; i < size(list); i++) {
    if (i === position) {
      value = current.value;
      break;
    } else {
      current = current.next;
    }
  }

  return value;
}
