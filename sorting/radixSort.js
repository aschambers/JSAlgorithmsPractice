/**
 * Write a function that will sort
 * an array of numbers using radix
 * sort method
 * @param {array} arr 
 */
const radixSort = (arr) => {
  let longestNum = mostDigits(arr);
  for (let i = 0; i < longestNum; i++) {
    let chunks = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let index = getDigit(arr[j], i);
      chunks[index].push(arr[j]);
    }
    arr = [].concat(...chunks);
  }
  return arr;
}

/**
 * helper function that will return the digit
 * in the number at the given place
 * @param {number} num
 * @param {number} place
 */
const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

/**
 * helper function that will return the
 * number of digits in the largest
 * number in an array of numbers
 * @param {array} arr
 */
const mostDigits = (arr) => {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

/**
 * helper function that will return
 * the count of the number of digits
 * @param {number} num 
 */
const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(radixSort([1,61,2,4,11,953,7,345,1024,5,14,12]));