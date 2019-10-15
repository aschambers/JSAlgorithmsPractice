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

  let firstWord = first.split('').sort().join('');
  let secondWord = second.split('').sort().join('');

  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] !== secondWord[i]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('aazab', 'azbaa'));