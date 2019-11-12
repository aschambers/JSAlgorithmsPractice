/**
 * Write a function that will take an array
 * of numbers and sort it using merge sort
 * @param {array} arr 
 */
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  // midpoint of the array
  const middle = Math.floor(arr.length / 2);
  
  // used to divide the array into two arrays
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // recursively combine left and right using the 
  // merge helper function until the array is sorted
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * helper function to take two arrays as
 * parameters, and sort them in order
 * @param {array} first
 * @param {array} second
 */
const merge = (first, second) => {
  const results = [];
  let i = 0, j = 0;

  while (i < first.length && j < second.length) {
    if (second[j] > first[i]) {
      results.push(first[i]);
      i++;
    } else {
      results.push(second[j]);
      j++;
    }
  }

  for (i; i < first.length; i++) {
    results.push(first[i]);
  }

  for (j; j < second.length; j++) {
    results.push(second[j]);
  }

  return results;
}

console.log(mergeSort([4,2,11,9,14,23,7,10,22,5]));