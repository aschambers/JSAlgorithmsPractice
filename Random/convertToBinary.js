/**
 * Write an function that will return
 * the parameter passed in to binary
 */
const convertToBinary = (item) => {
  const type = typeof item;

  if (type === "string") {
    let length = item.length;
    let output = [];

    for (let i = 0; i < length; i++) {
      let current = item[i].charCodeAt().toString(2);
      output.push(Array(8 - current.length + 1).join("0") + current);
    }
    return output.join("");
  } else if (type === "number") {
    return item.toString(2);
  }

  return "You must pass in a number or string to this function."
}

console.log(convertToBinary(9));