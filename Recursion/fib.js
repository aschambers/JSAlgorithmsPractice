/**
 * write a recursive function called fib
 * which accepts a number and returns the
 * nth number in the fibonacci sequence
 */
const fib = (num) => {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(10));