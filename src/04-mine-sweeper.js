/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr.push([]);
    for (let j = 0; j < matrix[0].length; j++) {
      arr[i].push(0);
    }
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === true) {
        if (arr[row][col + 1] !== undefined) {
          arr[row][col + 1] += 1;
        }
        if (arr[row][col - 1] !== undefined) {
          arr[row][col - 1] += 1;
        }
        if (row + 1 < arr.length) { 
          arr[row + 1][col] += 1;
        }
        if (row - 1 >= 0) { 
          arr[row - 1][col] += 1;
        }
        if (row + 1 < arr.length && col + 1 < arr[0].length) {
          arr[row + 1][col + 1] += 1;
        }
        if (row + 1 < arr.length && col - 1 >= 0) { 
          arr[row + 1][col - 1] += 1;
        }
        if (row - 1 >= 0 && col + 1 < arr[0].length) {
          arr[row - 1][col + 1] += 1;
        }
        if (row - 1 >= 0 && col - 1 >= 0) { 
          arr[row - 1][col - 1] += 1;
        }
      }
    }
  }
  return arr;
}

module.exports = minesweeper;
