/**
 * Write a helper function called
 * mostDigits that will return the
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

console.log(mostDigits([1234, 56, 23456, 7]));