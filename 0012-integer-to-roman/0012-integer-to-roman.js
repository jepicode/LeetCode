/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(nums) {
    let str = '';
    const transformNumber = (num) => {
        console.log(num);
        if (num <= 0) return str;
        if (num / 1000 >= 1) {
            str += 'M';
            return transformNumber(num - 1000);
        }
        if (num / 100 >= 1) {
            const hundred = Math.floor(num / 100);
            console.log(hundred);
            if (hundred === 9) {
                str += 'CM';
                return transformNumber(num - 900);
            }
            if (hundred >= 5) {
                str += 'D';
                return transformNumber(num - 500);
            }
            if (hundred === 4) {
                str += 'CD';
                return transformNumber(num - 400);
            }
            str += 'C';
            return transformNumber(num - 100);
        }
        if (num / 10 >= 1) {
            const dozens = Math.floor(num / 10);
            console.log('dozens', dozens);
            if (dozens === 9) {
                str += 'XC';
                return transformNumber(num - 90);
            }
            if (dozens >= 5) {
                str += 'L';
                return transformNumber(num - 50);
            }
            if (dozens === 4) {
                str += 'XL';
                return transformNumber(num - 40);
            }
            str += 'X';
            return transformNumber(num - 10);
        }
        if (num === 9) {
            str += 'IX';
            return transformNumber(num - 9);
        }
        if (num >= 5) {
            str += 'V';
            return transformNumber(num - 5);
        }
        if (num === 4) {
            str += 'IV';
            return transformNumber(num - 4);
        }
        str += 'I';
        return transformNumber(num - 1);
    };

    return transformNumber(nums);
};