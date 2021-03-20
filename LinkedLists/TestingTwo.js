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

printList(one);
printList(list);

// recursive
const printListRecursive = (list) => {
  // If this node exists, print it out
  if (list) {
    console.log(list.value)
  } else {
    // Hit the end? Stop here.
    return;
  }

  // Do it again for the next one
  // (eventually, list.next will be null)
  printListRecursive(list.next);
}

printListRecursive(two);



