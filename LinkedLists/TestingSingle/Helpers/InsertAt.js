const ListNode = require('../Helpers/ListNode');
const size = require('../Helpers/Size');

module.exports = insertAt = (list, value, position) => {
	if ((position > 0 && position > size(list)) || position < 0) {
    return list;
  } else {
    let node = new ListNode(value);
		let curr, prev;

		curr = list;

		if (position == 0) {
			node.next = list;
			list = node;
		} else {
			let index = 0;

			while (index < position) {
				index++;
				prev = curr;
				curr = curr.next;
			}

			node.next = curr;
			prev.next = node;
		}
	}

  return list;
}
