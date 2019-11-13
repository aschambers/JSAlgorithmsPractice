/**
 * Write a helper function called pivot
 * which takes a starting index and puts
 * all elements lower then the starting
 * index value, on the left side
 * @param {array} arr 
 * @param {number} start 
 */
const pivot = (arr, start) => {
  const pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      // swap element at the pivot index
      // with the current element
      swap(arr, swapIndex, i);
    }
  }
  // swap starting element with pivot index
  swap(arr, start, swapIndex);
  return arr;
}

/**
 * helper function used to swap 
 * elements in an array
 * @param {array} arr 
 * @param {number} i 
 * @param {number} j 
 */
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(pivot([4,8,3,2,1,6,7,5], 0));