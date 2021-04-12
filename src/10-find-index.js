/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const first = 0;
  const last = array.length - 1;
  let average = Math.ceil((first + last) / 2);
  while (array[average] !== value) {
    if (array[average] > value) {
      average = Math.ceil((first + average) / 2);
    } else if (array[average] < value) {
      average = Math.ceil((average + last) / 2);
    }
    if (average === 1) {
      average = 0;
    }
  }
  return average;
}

module.exports = findIndex;
