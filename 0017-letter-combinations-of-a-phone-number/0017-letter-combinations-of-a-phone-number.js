/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) return [];
    
    const mapping = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    const splittedDigit = digits.split('');
    const listData = new Array(splittedDigit.reduce((accumulator, currentValue) => accumulator * mapping[currentValue].length, 1)).fill('');
    splittedDigit.forEach((digit, index) => {
        let counter = 1;
        let totalDataAppear = 1;
        for (let i = 0; i < splittedDigit.length; i += 1) {
            if (i !== index) {
                totalDataAppear *= mapping[splittedDigit[i]].length;
            }
            if (i > index) {
                counter *= mapping[splittedDigit[i]].length;
            }
        }
        
        mapping[digit].forEach((value, indexString) => {
            let indexArray = counter * indexString;
            let currentCounter = 0;
            for (let i = 0; i < totalDataAppear; i += 1) {
                listData[indexArray] += value;
                currentCounter += 1;
                indexArray += 1;
                if (currentCounter === counter) {
                    indexArray += (mapping[digit].length - 1) * counter;
                    currentCounter = 0;
                }
            }
        })
    });
    return listData;
};