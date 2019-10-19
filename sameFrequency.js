/**
 * Write a function that takes two numbers and
 * returns true if they have the same frequency
 * @param {number} a
 * @param {number} b
 */
const sameFrequency = (a, b) => {
  if (a === b) return true;
  if (!a || !b) return false;

  const first = a.toString();
  const second = b.toString();
  const firstMap = {};
  const secondMap = {};

  if (first.length !== second.length) {
    return false;
  }

  // since we already checked if both values
  // have the same length, we can simply check
  // if the object has a value, and if not, set
  // to 1 and later compare both object values
  for (let i = 0; i < first.length; i++) {
    if (firstMap[first[i]] === undefined) {
      firstMap[first[i]] = 1;
    }
  }

  for (let j = 0; j < second.length; j++) {
    if (secondMap[second[j]] === undefined) {
      secondMap[second[j]] = 1;
    }
  }

  for (let item in firstMap) {
    if (firstMap[item] !== secondMap[item]) return false;
  }

  return true;
}

console.log(sameFrequency(7585155005, 1500555758));