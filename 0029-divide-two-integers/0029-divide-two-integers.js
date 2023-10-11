/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const hasil = dividend / divisor;
    if (hasil < -2147483648) return -2147483648;
    if (hasil > 2147483647) return 2147483647;
    if (hasil < 0) {
      return Math.ceil(hasil);
    } else {
      return Math.floor(hasil);
    }
};