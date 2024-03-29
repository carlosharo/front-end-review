/**
 * Merge n number of elements from one array and keep n number of elements in the first array
 */

const array1 = [1, 2, 3, 0, 0, 0];
const n1 = 3;
const array2 = [2, 5, 6];
const n2 = 3;

const merge = function (nums1, n1, nums2, n2) {
    for (let x = n1, y = 0; y < n2; x++, y++) {
        array1[x] = array2[y]
    }
};

merge(array1, n1, array2, n2);
console.log('array1: ', array1);

