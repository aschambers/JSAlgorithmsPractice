/**
 * write a recursive function that will
 * capitalize words in the array
 */
const capitalizeWords = (array) => {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeWords(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));