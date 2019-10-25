/**
 * 4! = 4 * 3 * 2 * 1
 * iterative solution
 * @param {num} num 
 */
const factorialIterative = (num) => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

/**
 * 4! = 4 * 3 * 2 * 1
 * recursive solution
 * @param {number} num 
 */
const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(4));