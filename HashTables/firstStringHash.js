/**
 * Write a function that will
 * hash a string only. This is
 * not constant time, scales along
 * with the size of the input.
 * Use a prime number to improve
 * hashing function
 * @param {string} key 
 * @param {number} arrayLen 
 */
const stringHash = (key, arrayLen) => {
  let total = 0;
  let primeNumber = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * primeNumber + value) % arrayLen;
  }
  return total;
}

console.log(stringHash("test", 10));