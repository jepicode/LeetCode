/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => a -b);
    const arrSize = arr.length;
    if (arrSize % 2 === 0) {
        const med = arrSize / 2;
        return (arr[med - 1] + arr[med]) / 2
    } else {
        return arr[Math.floor(arrSize / 2)];
    }
};