/**
 * write a function to check if a
 * single value in an array returns
 * true when passed to the callback
 * @param {string} str 
 */
const someRecursive = (array, callback) => {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}

console.log(someRecursive([4,6,8], val => val > 10));
