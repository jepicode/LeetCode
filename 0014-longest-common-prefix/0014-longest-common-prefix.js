/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let maxLength = strs[0].length;
    strs.forEach((str) => {
        if (str.length < maxLength) maxLength = str.length;
    });
    
    let str = '';
    let isStop = false;

    for (let i=0; i < maxLength; i++) {
        if (!isStop) {
            let currentStr = strs[0][i];
            let isSame = true;
            for (let j=1; j < strs.length; j++) {
                if (strs[j][i] !== currentStr) {
                    isSame = false;
                    isStop = true;
                }
            }
            if (isSame && !isStop) str+= currentStr;
        }
    }
    return str;
};