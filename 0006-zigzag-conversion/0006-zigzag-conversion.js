/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const arrString = s.split('');
    let n = numRows;
    let str = '';
    if (n === 1) return s;
    for (let i = 1; i <= numRows; i++) {
        for (let j = 1; j <= arrString.length; j++) {
            const keyField = (j * 2) - 3 + i;
            const getValue = () => arrString[keyField] || '';
            if (j !== 1 && j !== n) {
                if (n - j + 1 === i) {
                    str += getValue();
                } 
            } else {
                str += getValue();
                if (j === n) {
                    n += numRows - 1;
                }
            }
        }
        n = numRows;
    }
    return str;
};