/**
 * Write a helper function called
 * getDigit that will return the digit
 * in the num at the given place
 * @param {number} num
 * @param {number} place
 */
const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(getDigit(12345, 0));