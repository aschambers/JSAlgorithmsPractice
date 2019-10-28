/**
 * write a function called productOfArray
 * which takes in an array of numbers and
 * returns the product of them all
 */
const productOfArray = (arr) => {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([16,2,3,10,7]));