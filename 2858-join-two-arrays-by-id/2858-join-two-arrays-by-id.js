/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const values = {};
    [...arr1, ...arr2].forEach((value) => {
        if (!values[value.id]) values[value.id] = value;
        else {
            Object.keys(value).forEach((keyValue) => {
                values[value.id][keyValue] = value[keyValue];
            })
        }
    });
    return Object.values(values);
};