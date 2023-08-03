/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const values = [];
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        values.push([...arr].splice(i * size, size));
    }
    return values;
};