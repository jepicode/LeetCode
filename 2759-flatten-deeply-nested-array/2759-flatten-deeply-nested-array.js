/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    if (n === 0) return arr;
    let depthArray = 0;
    const listArray = [];
    
    const checkDepth = (arrayObject, level) => {
        return arrayObject.forEach((value) => {
            if (Array.isArray(value)) {
                if (level + 1 > n) {
                    listArray.push(value);
                } else {
                    if (level + 1 > depthArray) {
                        depthArray = level + 1;
                    }
                    return checkDepth(value, level + 1);
                }
            } else {
                listArray.push(value);
            }
        });
    }

    checkDepth(arr, depthArray);
    console.log({ depthArray })
    return listArray;
};