/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  let number = 0;
  const example = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        example.push(arr[j]);
      }
    }
    if (Number(example.join('')) > number) {
      number = Number(example.join(''));
    }
    example.length = 0;
  }
  return number;
}

module.exports = deleteDigit;
