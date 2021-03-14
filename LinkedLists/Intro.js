/**
 * Advantages: Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. This is one advantage it has over arrays.
 * Disadvantages: Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. Nodes are accessed sequentially starting from the first node. It also uses more memory than arrays because the storage of pointers
 * Types
 * Singly Linked Lists: Each node contains only one pointer to the next node. This is what we have been talking about so far.
 * Doubly Linked Lists: Each node contains two pointers, a pointer to the next node and a pointer to the previous node.
 * Circular Linked Lists: Circular linked lists are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.
 */
const linkedList = () => {
  const list = {
    head: {
      value: 6,
      next: {
        value: 10,                                             
        next: {
          value: 12,
          next: {
            value: 3,
            next: null
          }
        }
      }
    }
  }
  
  return list;
}

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

// console.log(new ListNode(linkedList()));

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(8);
let node4 = new ListNode(12);
node1.next = node2;
node2.next = node3;
node3.next = node4;

// console.log(node1);

let list = new LinkedList(node1);
// console.log(list);
// console.log(list.head.next.data);

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

console.log(size(list));

/**
 * get first node in a list
 */
const getFirst = (list) => {
  return list.head;
}

console.log(getFirst(list));

/**
 * get last node in a linked list
 */
const getLast = (list) => {
  let lastNode = list.head;
  if (lastNode) {
      while (lastNode.next) {
          lastNode = lastNode.next
      }
  }
  return lastNode
}

console.log(getLast(list));

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
    return node.data;
  }

  return 'Node not found';
}

console.log(getNodeAtSpecifiedPosition(list, 1));

/**
 * clear a linked list
 */
const clear = (list) => {
  list.head = null;
  return list;
}

console.log(clear(list));
