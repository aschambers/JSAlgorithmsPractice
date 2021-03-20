class ListNode {
  constructor(val) {
      this.val = val
      this.next = null                
  }
}

class LinkedList {
  constructor(head = null) {
      this.head = head
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(4);
let node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

let list = new LinkedList(node1);

let node4 = new ListNode(5);
let node5 = new ListNode(6);
let node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;

let listTwo = new LinkedList(node4);

/**
 * size of linked list
 */
const size = (list) => {
  let count = 0; 
  let node = list.head;
  while (node) {
      count++;
      node = node.next
  }
  return count;
}

const sumOfConcatLinkedList = (list) => {
  let listSize = size(list);
  let sum = 0;

  if (listSize > 0) {
    let node = list.head;
    sum += node.val;
    for (let i = 1; i < listSize; i++) {
      node = node.next;
      sum += String(node.val).padEnd((listSize-1) * '0');
    }
  }

  return sum;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let sum1 = 0;
  let sum2 = 0;
  sum1 = sumOfConcatLinkedList(l1);
  sum2 = sumOfConcatLinkedList(l2);

  let totalSum = Number(sum1) + Number(sum2);

  totalSum = String(totalSum).split("").reverse().join("");
  return Number(totalSum);
};

console.log(addTwoNumbers(list, listTwo));




// second solution using functions
const createNode = (value) => {
  return {
    value: value,
    next: null
  }
}

const list1 = createNode(2);
const list1two = createNode(4);
const list1three = createNode(3);
list1.next = list1two;
list1two.next = list1three;

const list2 = createNode(5);
const list2two = createNode(6);
const list2three = createNode(4);
list2.next = list2two;
list2two.next = list2three;

const addTwoNumbersTwo = function(l1, l2) {
  let node = null;
  const carry = arguments[2];
  if (l1 || l2) {
    const val1 = l1 ? l1.value : 0;
    const val2 = l2 ? l2.value : 0;
    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;
    const val = carry ? val1 + val2 + 1 : val1 + val2;
    node = createNode(val % 10);
    node.next = addTwoNumbersTwo(next1, next2, val >= 10);  
  } else if (carry) {
    node = createNode(1);
    node.next = null;
  }
  return node;
};

console.log(addTwoNumbersTwo(list1, list2));




// third solution using classes
const nodeL1 = new ListNode(2);
const nodeL1two = new ListNode(4);
const nodeL1three = new ListNode(3);
nodeL1.next = nodeL1two;
nodeL1two.next = nodeL1three;

const nodeL2 = new ListNode(5);
const nodeL2two = new ListNode(6);
const nodeL2three = new ListNode(4);
nodeL2.next = nodeL2two;
nodeL2two.next = nodeL2three;

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbersThree = function(l1, l2) {
  let node = null;
  const carry = arguments[2];
  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;
    const val = carry ? val1 + val2 + 1 : val1 + val2;
    node = new ListNode(val % 10);
    node.next = addTwoNumbersThree(next1, next2, val >= 10);
  } else if (carry) {
    node = new ListNode(1);
    node.next = null;
  }
  return node;
};

console.log(addTwoNumbersThree(nodeL1, nodeL2));


// using an arrow function

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbersArrowFunction = (...args) => {
  const l1 = args[0];
  const l2 = args[1];
  let node = null;
  const carry = args[2];
  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;
    const val = carry ? val1 + val2 + 1 : val1 + val2;
    node = new ListNode(val % 10);
    node.next = addTwoNumbersArrowFunction(next1, next2, val >= 10);
  } else if (carry) {
    node = new ListNode(1);
    node.next = null;
  }
  return node;
};

console.log(addTwoNumbersArrowFunction(nodeL1, nodeL2));
