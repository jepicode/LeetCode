/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;

    let str = Math.abs(x).toString().split('').reverse().join('');
    let reversed = Number(str) * Math.sign(x);

    if (reversed < INT_MIN || reversed > INT_MAX) {
        return 0;
    }
    return reversed;
};