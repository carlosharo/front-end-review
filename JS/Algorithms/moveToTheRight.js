/**
 * Move the array elements to right position and the last one to first position k number of times.
 * When k equals to 3:
 * 
 * [1,2,3,4,5,6,7] - original 
 * [7,1,2,3,4,5,6] - 1 move
 * [6,7,1,2,3,4,5] - 2 move
 * [5,6,7,1,2,3,4] - Final move 
 */

let NUMS = [1, 2, 3, 4, 5, 6, 7];
const K = 3;

function moveElements(nums, k) {
    const copy = [...nums];

    const getPosition = (p, k) => {
        return (p + k) % nums.length;
    }

    for (let x = 0; x < nums.length; x++) {
        nums[getPosition(x, k)] = copy[x];
    }
    return nums;
}

moveElements(NUMS, K);
console.log('result ', NUMS);