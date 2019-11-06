/**
 * Write an algorithm that loops through
 * an array and returns the index if found
 * and -1 if not found
 * @param {array} array 
 * @param {any} search 
 */
const linearSearch = (array, search) => {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === search) {
          return i;
      }
  }
  return -1;
}

console.log(linearSearch([1,2,"test",4,"alan"], 2));
