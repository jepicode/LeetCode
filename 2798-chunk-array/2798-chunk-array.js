/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const values = [];
    let tempCounter = 0;
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        values.push([...arr].splice(i * size, size));
    }
    return values;
};