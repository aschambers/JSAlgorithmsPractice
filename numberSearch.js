/**
 * Write a function that takes an array of numbers,
 * and a value, and return the index of that value
 * @param {array} arr
 * @param {string} num
 */
const numberSearch = (arr, num) => {
  let min = 0;
  let max = arr.length - 1;
  
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let arrMiddle = arr[middle];

    if (arrMiddle < num) {
      min = middle + 1;
    } else if (arrMiddle > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(numberSearch([1,2,4,5,6,7,9,12,15,16,24], 15));