class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(4);
let node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

const insertAtBeginning = (list, value) => {
  if (list.head) {
    let current = list.head;
    list.head = value;
    list.next = current;
  } else {
    list.head = value;
  }

  return list;
}

console.log(insertAtBeginning(list, 7));
console.log(insertAtBeginning(new LinkedList(), 7));

// -----------------------------------------------------

let node4 = new ListNode(94);
let node5 = new ListNode(42);
node4.next = node5;

let listTwo = new LinkedList(node4);

const insertAtEnd = (list, value) => {
  if (list.head === null) {
    list.head = value;
    return list.head;
  }

  let tail = list.head;
  while (tail.next !== null) {
    tail = tail.next;
  }

  tail.next = value;

  return list;
}

console.log(insertAtEnd(listTwo, 24));

// -----------------------------------------------------

let node6 = new ListNode(66);
let node7 = new ListNode(74);
node6.next = node7;

let listThree = new LinkedList(node6);

/**
 * size of linked list
 */
const size = (list) => {
  let count = 0; 
  let node = list.head;
  while (node) {
    count++;
    node = node.next;
  }
  return count;
}

/**
 * get the value of the node at the
 * specified position
 */
const getNodeAtSpecifiedPosition = (list, position) => {
  if (size(list) >= position && position > 0) {
    let node = list.head;
    for (let i = 1; i < position; i++) {
      node = node.next;
    }
    return node;
  }

  return null;
}

const insertAtSpecifiedPosition = (list, value, position) => {
  if (list.head === null) {
    list.head = new ListNode(value);
    return list;
  }

  if (position === 1) {
    const current = list.head;
    list.head = value;
    list.next = current;
    return list;
  }

  const previous = getNodeAtSpecifiedPosition(list, position - 1);
  if (previous !== null) {
    let newNode = new ListNode(value);
    newNode.next = previous.next;
    previous.next = newNode;
  }

  return list;
}

console.log(insertAtSpecifiedPosition(listThree, 32, 2));
console.log(insertAtSpecifiedPosition(listThree, 44, 1));
