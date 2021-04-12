/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return names;
  const arr = [];
  let count = 0;
  arr.splice(0, 1, names[0]);
  for (let i = 1; i < names.length; i++) {
    if (arr[0] === names[i]) {
      count++;
      const newFile = `${names[i]}(${count})`;
      arr.splice(i, 1, newFile);
    } else if (names[i].includes('(1)')) {
      arr.splice(i, 1, `${names[i]}(1)`);
    } else {
      arr.splice(i, 1, names[i]);
    }
  }
  return arr;
}

module.exports = renameFiles;
