/**
 * Write a function that takes an array of sorted numbers
 * and determine if any pair of numbers average equal the
 * target average
 * @param {array} array
 * @param {number} average
 */
const targetAverage = (array, num) => {
  let start = 0
  let end = array.length-1;
  while (start < end) {
    let average = (array[start]+array[end]) / 2 
    if (average === num) return true;
    else if(average < num) start++
    else end--;
  }
  return false;
}

console.log(targetAverage([1,2,5,6,7,8,11,13,15], 6));