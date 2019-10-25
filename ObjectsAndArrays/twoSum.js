// attempt number 1, iterate over the array twice, and check
const twoSum = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
        return result;
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));

// if the current array item exists in the map object as a key,
// then we know that we found a pair that adds up to the target,
// so we want to return array as [key value, index], otherwise,
// keep add key value pairs to the map object as target value minus
// the array index value to be the index
const twoSumPartTwo = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] >= 0) {
      return [map[nums[i]], i];
    }
    map[target - nums[i]] = i;
  }
}

console.log(twoSumPartTwo([3, 2, 4], 6));