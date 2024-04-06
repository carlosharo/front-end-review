/**
 * 
 * @param {Array<number>} nums 
 * @returns sorted array
 */

const NUMS = [-6, 20, 8, -2, 4];

function quickSort(nums) {
    if (nums.length === 1 || !nums.length) return nums; 
    let pivot = nums[nums.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    console.log(`Left: ${left} - Pivot: ${pivot} - Right: ${right}`);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(NUMS));