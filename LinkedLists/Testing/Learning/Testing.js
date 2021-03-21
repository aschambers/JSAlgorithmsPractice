
class Node {
  constructor(element)
  {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
	constructor()
	{
		this.head = null;
		this.size = 0;
	}
}

const list = new LinkedList();
const node1 = new Node(1);
list.head = node1;
list.size = 1;

const add = (list, value) => { 
	var node = new Node(value); 

	var current;

	if (list.head == null) {
    list.head = node;
  } else {
		current = list.head;

		while (current.next) {
			current = current.next;
		}

		current.next = node;
	}

	list.size++;

  return list;
} 

// console.log(add(list, 7));
// console.log(add(list, 3));

const insertAt = (list, value, position) => {
	if (position > 0 && position > list.size) {
    return list;
  } else {
		let node = new Node(value);
		let curr, prev;

		curr = list.head;

		if (position == 0) {
			node.next = list.head;
			list.head = node;
		} else {
			curr = list.head;
			let it = 0;

			while (it < position) {
				it++;
				prev = curr;
				curr = curr.next;
			}

			node.next = curr;
			prev.next = node;
		} 
		list.size++;
	}

  return list;
}

console.log(insertAt(list, 23, 0));
