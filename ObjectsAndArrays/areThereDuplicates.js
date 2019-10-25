/**
 * check if there are any duplicates
 * among the arguments passed in
 */
const areThereDuplicates = (...args) => {
  let map = {}
  for(let val in args) {
    if (map[args[val]] === undefined) {
      map[args[val]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates('a', 'b', 'c', 'g', 1, 2, 12, 'd'));

const oneLineAreThereDuplicates = (...args) => {
  return new Set(args).size !== args.length;
}

console.log(oneLineAreThereDuplicates('a', 'b', 'c', 'g', 1, 2, 12, 'd'));
