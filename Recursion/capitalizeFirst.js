/**
 * recursive function which will
 * capitalize the first letter of
 * every word in the array
 * @param {array} arr
 */
const capitalizeFirst = (array) => {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeFirst(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}

console.log(capitalizeFirst(['car','taco','banana']));