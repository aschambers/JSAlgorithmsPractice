/**
 * determine if two words are anagrams,
 * two words that have same characters rearranged
 * @param {string} first 
 * @param {string} second 
 */
const validAnagramFirst = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  let firstWord = first.split('').sort().join('');
  let secondWord = second.split('').sort().join('');

  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] !== secondWord[i]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagramFirst('aazab', 'azbaa'));

/**
 * determine if two words are anagrams,
 * two words that have same characters rearranged
 * @param {string} first 
 * @param {string} second 
 */
const validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    lookup[first[i]] ? lookup[first[i]] += 1 : lookup[first[i]] = 1;
  }

  for (let j = 0; j < second.length; j++) {
    if (!lookup[second[j]]) {
      return false;
    } else {
      lookup[second[j]] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('aazab', 'azbaa'));