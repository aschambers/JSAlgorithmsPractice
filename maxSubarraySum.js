/**
 * Write a function that takes an array of numbers,
 * and a value, and return the highest sum in the array
 * where the value determines how many numbers you will
 * add together to get the sum
 * @param {array} arr
 * @param {string} num
 */
maxSubarraySum = (arr, num) => {
  if (num > arr.length) {
    return 'The array must have a length of ' + num + ' or greater.';
  }

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let compare = 0;
    for (let j = 0; j < num; j++) {
      compare += arr[i + j];
    }
    if (compare > max) {
      max = compare;
    }
  }
  return max;
}

console.log(maxSubarraySum([1,2,5,2,8,1,11,5,13], 3));


/**
 * Write a function that takes an array of numbers,
 * and a value, and return the highest sum in the array
 * where the value determines how many numbers you will
 * add together to get the sum
 * @param {array} arr
 * @param {string} num
 */
maxSubarraySum2 = (arr, num) => {
  if (num > arr.length) {
    return 'The array must have a length of ' + num + ' or greater.';
  }

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    // subtract first number in sequence, then
    // add the current number to sequence and get
    // the total sum
    tempSum = tempSum - arr[j - num] + arr[j];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}

console.log(maxSubarraySum2([1,2,5,2,8,1,11,5,13], 3));
