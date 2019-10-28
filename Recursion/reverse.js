/**
 * write a function which will reverse
 * a string using recursion
 * @param {string} str 
 */
const reverse = (str) => {
  if (str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

console.log(reverse('reverse'));