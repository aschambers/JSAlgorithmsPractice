/**
 * Write a helper function called
 * digitCount which will count the
 * number of digits of a positive number
 * @param {number} num
 */
const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(12345));