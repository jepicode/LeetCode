/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
    let result;
    
    const sanityArray = (arr) => {
        const tempArray = [];
        arr.forEach((value) => {
            if (value) {
                if (typeof value !== 'object') {
                    tempArray.push(value);
                } else if (Array.isArray(value)) {
                    tempArray.push(sanityArray(value));
                } else if (typeof value === 'object') {
                    tempArray.push(sanityObject(value));
                }
            }
        });
        return tempArray;
    }

    const sanityObject = (objs) => {
        const tempObject = {};
        Object.keys(objs).forEach((keys) => {
            if (objs[keys]) {
                if (typeof objs[keys] !== 'object') {
                    tempObject[keys] = objs[keys];
                } else if (Array.isArray(objs[keys])) {
                    tempObject[keys] = sanityArray(objs[keys]);
                } else if (typeof objs === 'object') {
                    tempObject[keys] = sanityObject(objs[keys]);
                }
            }
        });
        return tempObject;
    }
    
    if (Array.isArray(obj)) {
        result = sanityArray(obj);
    } else if (typeof obj === 'object') {
        result = sanityObject(obj);
    }
    return result;
};