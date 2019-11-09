/**
 * Write an function called
 * bubbleSort that sorts an
 * array of numbers
 */
const bubbleSort = (arr) => {
 for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr.length; j++) {
     if (arr[j] > arr[j + 1]) {
       let temp = arr[j];
       arr[j] = arr[j + 1];
       arr[j + 1] = temp;
     }
   }
 }
 return arr;
}

console.log(bubbleSort([2,8,4,14,11,5,7,22,23,6]));