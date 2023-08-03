/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return [];
    let rowsArray = [];
    for (let i = 0; i < rowsCount; i++) {
        let listData = [];
        for (let j = 0; j < colsCount; j++) {
            if (j % 2 === 0) {
                listData.push(this[(j * rowsCount) + i]);
            } else {
                listData.push(this[((j + 1) * rowsCount) - (i + 1)])
            }
        }
        rowsArray[i] = listData;
    }
    return rowsArray;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */