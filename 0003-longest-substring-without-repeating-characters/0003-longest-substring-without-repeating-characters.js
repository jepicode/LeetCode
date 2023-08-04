/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const arrString = s.split('');
    let maxSubString = 0;

    for (let i=0; i<arrString.length; i++) {
        let tempString = {};
        let isProsessStopped = false;
        for (let j=i; j<arrString.length; j++) {
            if (!tempString[arrString[j]] && !isProsessStopped) {
                tempString[arrString[j]] = arrString[j];
            } else {
                isProsessStopped = true;
            }
        }
        const totalString = Object.values(tempString).length;
        if (totalString > maxSubString) maxSubString = totalString;
    }
    return maxSubString;
};