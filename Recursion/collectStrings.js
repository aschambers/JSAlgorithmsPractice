/**
 * Write a function that accepts an object and
 * finds all keys with type of string and adds
 * them into an array and returns that array
 */
const collectStrings = () => {
  const stringsArr = [];
 
  gatherStrings = (o) => {
    for(let key in o) {
      if (typeof o[key] === 'string') {
        stringsArr.push(o[key]);
      }
      else if (typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])