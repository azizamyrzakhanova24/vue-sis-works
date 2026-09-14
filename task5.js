/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return [];
    }

    const result = Array.from({ length: rowsCount }, () => []);

    for (let i = 0; i < this.length; i++) {
        const col = Math.floor(i / rowsCount);
        const isEvenCol = col % 2 === 0;
        const row = isEvenCol ? (i % rowsCount) : (rowsCount - 1 - (i % rowsCount));
        
        result[row][col] = this[i];
    }

    return result;
};