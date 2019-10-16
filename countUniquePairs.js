/**
 * determine how many values are unique
 * in an array
 * @param {string} first 
 * @param {string} second 
 */
const countUniqueValues = (array) => {
  const map = {};
  let count = 0;

  if (array.length < 2) {
    return 1;
  }

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] === undefined) {
      map[array[i]] = 1;
      count += 1;
    }
  }

  return count;
}

console.log(countUniqueValues([-2, -2, 1,2,3,3,4,4,3,3,5,5,9,9,6,6, -2, 1]));
