/**
 * Write a function that takes a two strings and
 * determines whether characters in the first
 * string form a subsequence of characters in
 * the second string, order matters, but don't
 * need to be in succession
 * @param {string} first
 * @param {string} second
 */
const isSubsequence = (first, second) => {
  if (!first || !second) {
    return false;
  } else if (first.length > second.length) {
    return false;
  }

  let i = 0;
  for (let j = 0; j < second.length; j++) {
    if (first[j] === second[j]) i++;
    if (i === first.length) return true;
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world'));