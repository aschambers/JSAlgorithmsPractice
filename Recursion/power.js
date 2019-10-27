/**
 * write a function called power which
 * accepts a base and an exponent. This
 * function should return the power of
 * the base to the exponent
 */
const power = (base, exp) => {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base * 1;
  }

  return base * power(base, exp - 1);

}

console.log(power(2, 4));