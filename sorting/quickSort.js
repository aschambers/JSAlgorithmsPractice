/**
 * Write a function called quick sort
 * that will sort an array of numbers
 * recursively, using a pivot point
 * @param {array} arr
 * @param {number} start
 * @param {number} end
 */
const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let swapIndex = pivot(arr, start, end);
   
    quickSort(arr, start, swapIndex - 1);
    quickSort(arr, swapIndex + 1, end);
  }
  
  return arr;
}

/**
 * @param {array} arr 
 * @param {number} pivot
 * @param {number} start
 * @param {number} end
 */
const pivot = (arr, start, end) => {
  const pivot = arr[end];
  let swapIndex = start;

  for (let i = start; i < end; i++){
    if (pivot > arr[i]) {
      swap(arr, i, swapIndex);
      swapIndex++;
    }
  }
  swap(arr, end, swapIndex);
  return swapIndex;
}

/**
 * @param {array} arr 
 * @param {number} i 
 * @param {number} j 
 */
const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(quickSort([11,8,-3,14,3,-5,6,22,2,1,7]));