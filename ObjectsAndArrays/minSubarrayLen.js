/**
 * Write a function that takes an array of positive numbers,
 * and a number, and return the lowest amount of array elements 
 * whose sum is greater than or equal to the number given
 * @param {array} arr
 * @param {string} num
 */
minSubarrayLen = (nums, sum) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if (total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if (total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubarrayLen([1,2,5,2,8,1,11,5,13], 10));