/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(nums) {
    let str = '';
    const transformNumber = (num) => {
        console.log('num', num);
        if (num <= 0) return str;
        if (num >= 1000) {
            while (num >= 1000) {
                str += 'M';
                num -= 1000;
            }
            return transformNumber(num);
        }
        if (num >= 100) {
            while (num >= 100) {
                if (num >= 900) {
                    str += 'CM'; num -= 900;
                }
                if (num >= 500) {
                    str += 'D'; num -= 500;
                }
                if (num >= 400) {
                    str += 'CD'; num -= 400;
                }
                if (num >= 100) {
                    str += 'C'; num -= 100;
                }
            }
            return transformNumber(num);
        }
        if (num >= 10) {
            while (num >= 10) {
                if (num >= 90) {
                    str += 'XC'; num -= 90;
                }
                if (num >= 50) {
                    str += 'L'; num -= 50;
                }
                if (num >= 40) {
                    str += 'XL'; num -= 40;
                }
                if (num >= 10) {
                    str += 'X'; num -= 10;
                }
            }
            return transformNumber(num);
        }
        if (num >= 9) {
            str += 'IX'; num -= 9;
        }
        if (num >= 5) {
            str += 'V'; num -= 5;
        }
        if (num >= 4) {
            str += 'IV'; num -= 4;
        }
        if (num >= 1) {
            str += 'I'; num -= 1;
        }
        return transformNumber(num);
    };

    return transformNumber(nums);
};