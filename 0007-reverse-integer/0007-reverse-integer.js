/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;

    let reversed = 0;

    while (x !== 0) {
        const digit = x % 10;
        x = (x / 10) | 0;  // Membuang digit terakhir
        // Memeriksa batasan integer sebelum mengalikan dengan 10
        if (reversed > INT_MAX / 10 || (reversed === INT_MAX / 10 && digit > 7)) return 0;
        if (reversed < INT_MIN / 10 || (reversed === INT_MIN / 10 && digit < -8)) return 0;
        reversed = reversed * 10 + digit;
    }

    return reversed;
};