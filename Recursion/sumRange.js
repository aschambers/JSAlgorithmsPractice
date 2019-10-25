/**
 * recursive function which will
 * keep calling itself until the
 * base case, num === 1, num is
 * added on to the current num
 * @param {number} num 
 */
const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4)); // 4 + 3 + 2 + 1 = 10