let list = null;

let node = {
  value: 4,
  next: null
}

const createNode = (value) => {
  return {
    value: value,
    next: null
  }
}

let one = createNode(1);
let two = createNode(2);
let three = createNode(3);
let four = createNode(4);

one.next = two;
two.next = three;
three.next = four;

list = one;

function printList(list) {
  let current = list;

  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

const printListRecursive = (list) => {
  if (list) {
    console.log(list.value)
  } else {
    return;
  }

  printListRecursive(list.next);
}

const size = (list) => {
  let count = 0; 
  let node = list;
  while (node) {
    count++;
    node = node.next
  }
  return count;
}

const insertAt = (list, size, value, position) => {
	if ((position > 0 && position > size) || position < 0) {
    return list;
  } else {
    let node = createNode(value);
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

const newList = insertAt(one, size(one), 55, 1);

const insertAtBeginning = (list, value) => {
  let node = createNode(value);
  node.next = list;
  return node;
}

const nextList = insertAtBeginning(newList, 42);

const insertAtEnd = (list, value) => {
  let node = createNode(value);

  let current = list;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = node;

  return list;
}

console.log(insertAtEnd(nextList, 23));

