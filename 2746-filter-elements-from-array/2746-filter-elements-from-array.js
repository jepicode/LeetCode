/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const values = [];
    arr.forEach((value, index) => {
        if (fn(value, index)) {
            values.push(value);
        }
    })
    return values;
};