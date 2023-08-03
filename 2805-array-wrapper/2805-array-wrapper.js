/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.value = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    let total = 0;
    this.value.forEach((value) => total += value);
    return total;
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.value.join(',')}]`
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */