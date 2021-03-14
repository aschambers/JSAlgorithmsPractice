class ListNode {
  constructor(data) {
      this.data = data
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
    sum += node.data;
    for (let i = 1; i < listSize; i++) {
      node = node.next;
      sum += String(node.data).padEnd((listSize-1) * '0');
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
