/**
 * Write an algorithm called binarySearch
 * which accepts a sorted array and finds
 * the index of search
 * @param {array} array 
 * @param {any} search 
 */
const binarySearch = (array, search) => {
  let start = array[0];
  let end = array[array.length - 1];
  let middle = Math.floor((start + end) / 2);

  while (array[middle] !== search && start <= end) {
    if (search < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  if (array[middle] === search) {
    return middle;
  }

  return -1;
}

console.log(binarySearch([1,2,3,4,5], 2));
