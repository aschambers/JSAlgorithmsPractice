/**
 * Write an function called
 * mergeSortedArrays that sorts an
 * array of numbers
 */
const mergeSortedArrays = (first, second) => {
  const results = [];
  let i = 0, j = 0;

  while(i < first.length && j < second.length) {
    if (second[j] > first[i]) {
      results.push(first[i]);
      i++;
    } else {
      results.push(second[j]);
      j++;
    }
  }

  for (i; i < first.length; i++) {
    results.push(first[i]);
  }

  for(j; j < second.length; j++) {
    results.push(second[j]);
  }

  return results;
}

console.log(mergeSortedArrays([2,4,8,14],[5,7,22,23]));