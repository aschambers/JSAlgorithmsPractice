/**
 * write a function to check if a
 * single value in an array returns
 * true when passed to the callback
 * @param {string} str 
 */
const flatten = (array) => {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(flatten(array[i]));
    } else {
      newArray.push(array[i])
    }
  } 
  return newArray;
}

console.log(flatten([1,2,[3, 4], [5, 6], 7]));
