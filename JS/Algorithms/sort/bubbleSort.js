/**
 * Bubble Sort: If element is bigger than element to right, swap elements. 
 * Traverse and compare all the elements. 
 * Repeat the comparison from begining is needed.
 */

/*
->  (5) [8, 20, -2, 4, -6]
->  (5) [8, -2, 20, 4, -6]
->  (5) [8, -2, 4, 20, -6]
->  (5) [8, -2, 4, -6, 20]
->  (5) [-2, 8, 4, -6, 20]
->  (5) [-2, 4, 8, -6, 20]
->  (5) [-2, 4, -6, 8, 20]
->  (5) [-2, 4, -6, 8, 20]
->  (5) [-2, 4, -6, 8, 20]
->  (5) [-2, -6, 4, 8, 20]
->  (5) [-2, -6, 4, 8, 20]
->  (5) [-2, -6, 4, 8, 20]
->  (5) [-6, -2, 4, 8, 20]
->  (5) [-6, -2, 4, 8, 20]
->  (5) [-6, -2, 4, 8, 20]
->  (5) [-6, -2, 4, 8, 20]
->  (5) [-6, -2, 4, 8, 20]
->  (5) [-6, -2, 4, 8, 20]
->  (5) [-6, -2, 4, 8, 20]
->  (5) [-6, -2, 4, 8, 20]
*/

const NUMS = [8, 20, -2, 4, -6];

function bubbleSort(nums) {
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
                swapped = true;
            }
            console.log('-> ', nums);
        }
    } while (swapped);
    return nums;
}

console.log(bubbleSort(NUMS));