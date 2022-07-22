
module.exports = function towelSort (matrix) {
  if(matrix) {
    let arrSort = [];

    for( let i = 0; i < matrix.length; i++) {
      for( let j = 0; j < matrix[i].length; j++) {
        let colIdx = i % 2 === 0 ? j : (matrix[i].length - 1 - j);
        arrSort.push(matrix[i][colIdx]);
      }
    }
    return arrSort;
  } else {
    return []
  }
}
