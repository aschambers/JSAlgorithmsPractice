/**
 * Write an function called
 * selectionSort that sorts an
 * array of numbers
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

console.log(selectionSort([2,8,4,14,11,5,7,22,23,6]));