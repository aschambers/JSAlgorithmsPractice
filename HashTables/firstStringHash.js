/**
 * Write a function that will
 * hash a string only. This is
 * not constant time, scales along
 * with the size of the input.
 * @param {string} key 
 * @param {number} arrayLen 
 */
const stringHash = (key, arrayLen) => {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

console.log(stringHash("test", 10));