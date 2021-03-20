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

const insertAt = (list, value, position) => {
	if ((position > 0 && position > size(list)) || position < 0) {
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

const getValueAtIndex = (list, position) => {
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

const deleteAtBeginning = (list) => {
  if (size(list) < 1) return null;
  
  return list.next;
}

const deleteList = deleteAtBeginning(nextList);

const deleteAtEnd = (list) => {
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

const deleteAt = (list, position) => {
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

console.log(deleteAt(deleteList, 1));
