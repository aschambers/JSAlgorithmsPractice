const createNode = (value) => {
  return {
    value: value,
    next: null
  }
}

let one = createNode(1);
let two = createNode(23);
let three = createNode(3);
let four = createNode(14);

one.next = two;
two.next = three;
three.next = four;

const size = (list) => {
  let count = 0; 
  let node = list;
  while (node) {
    count++;
    node = node.next
  }
  return count;
}

const bubbleSort = (list) => {
  if (size(list) < 1) return null;
  
  let previousNode = list;
  let currentNode = list.next;
  for (let i = 1; i < size(list); i++) {
    let noSwaps = true;
    for (let j = 1; j < size(list); j++) {
      if (previousNode.next !== null && previousNode.value > currentNode.value) {
        let temp = previousNode.value;
        previousNode.value = currentNode.value;
        currentNode.value = temp;
        noSwaps = false;
      }

      if (previousNode.next !== null) {
        previousNode = currentNode;
        currentNode = previousNode.next;
      }
    }
    if (noSwaps) break;
  }

  return list;
}

const bubbleSortResult = bubbleSort(one);
console.log(bubbleSortResult);
