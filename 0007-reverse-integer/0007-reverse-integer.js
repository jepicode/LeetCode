/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = x.toString().split('').reverse().join('');
    if (x < 0) str = str.replace('-', '');
    let reverse = x < 0 ? 0 - Number(str) : Number(str);
    if (reverse < ((0 - 2) ** 31) || reverse > ((2 ** 31) - 1)) reverse = 0;
    return reverse;
};