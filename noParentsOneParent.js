/*

Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 6 and 8 have a common ancestor of 4.

         14  13
         |   |
1   2    4   12
 \ /   / | \ /
  3   5  8  9
   \ / \     \
    6   7     11

parentChildPairs1 = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
]

no parents:
[1, 2, 13, 14]

one parent:
[4, 5, 7, 8, 11, 12]

*/

const parentChildPairs1 = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9]
];

const sortNumbers = (a, b) => {
  return a - b;
}

const outputParentChild = (array) => {
  const parentArray = [];
  const oneParentArray = [];
  const map = {};

  for (let i = 0; i < array.length; i++) {
    if (!map[array[i][1]]) {
      map[array[i][1]] = 1;
    } else {
      map[array[i][1]]++;
    }
  }

  for (let j = 0; j < array.length; j++) {
    if (!map[array[j][0]]) {
       parentArray.push(array[j][0]);
    }
    if (map[array[j][1]] === 1) {
       oneParentArray.push(array[j][1]);
    }
  }

  console.log('no parents:');
  console.log(parentArray.sort(sortNumbers));
  console.log('one parent:');
  console.log(oneParentArray.sort(sortNumbers));
}

outputParentChild(parentChildPairs1);
