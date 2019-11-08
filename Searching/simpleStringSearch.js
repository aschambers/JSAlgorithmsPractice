/**
 * Write an algorithm that will return the number
 * of times a string is contained in a longer string
 * @param {string} long
 * @param {string} short
 */
const simpleStringSearch = (long, short) => {
  let matches = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      // if no match, break out of inner loop
      if (short[j] !== long[i + j]) break;
      // if the string length match j, we are
      // on the last iteration, so increase the
      // total number of matches
      if (j === short.length - 1) matches++;
    }
  }
  return matches;
}

console.log(simpleStringSearch('testlongstringsome','gs'));
