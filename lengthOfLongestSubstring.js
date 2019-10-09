/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstringPartOne = (s) => {
  let map = {};
  let start = 1;
  let curr = 0;
  let maxLength = 0;

  if (s.length < 2) {
    return s.length;
  }

  const array = s.split('');
  const unique = [];
  for (let i = 0; i < array.length; i++) {
    if (!unique.includes(array[i])) {
      unique.push(array[i]);
    }
  }

  for (let j = 0; j < array.length + 1; j++) {
    if (curr === unique.length) {
      return unique.length;
    }

    if (curr > maxLength) {
      maxLength = curr;
    }

    if (map[array[j]] >= 0) {
      map = {};
      j = start;
      start++;
      curr = 1;
    } else {
      curr++;
    }
    map[array[j]] = j;
  }
  return maxLength;
};


// === is faster than ==, because you don't have to do type casting,
// so check for !== undefined rather than != null.
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  const arr = s.split('');
  const map = {};
  let start = 0;
  let current = 0;
  let maxLength = 0;
  let currentLength = 0;

  for (let i = 0; i < s.length; i++) {
    current = map[arr[i]];
    currentLength = i - start + 1;
    if (current !== undefined && start <= current) {
      start = current + 1;
    } else if (currentLength > maxLength) {
      maxLength = currentLength;
    }

    map[arr[i]] = i;
  }

  return maxLength;
}

console.log('longest substring length: ' + lengthOfLongestSubstring("abcabcbb"));