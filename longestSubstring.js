/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (string) => {
  let maxLength = 0;
  let found = {};
  let start = 0;

  for (let i = 0; i < string.length; i++) {
    if (found[string[i]] !== undefined) {
      start = Math.max(start, found[string[i]]);
    }
    console.log(start);

    maxLength = Math.max(maxLength, i - start + 1);

    found[string[i]] = i + 1;
  }

  return maxLength;
}

console.log('longest substring length: ' + lengthOfLongestSubstring("abcabcbb"));