/**
 * Write an function called
 * insertionSort that sorts an
 * array of numbers
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;
    for (j; j > -1 && arr[j] > current; j--) {
      if (arr[j] > current) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([2,8,4,14,11,5,7,22,23,6]));