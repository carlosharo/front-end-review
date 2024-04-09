
/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * @param {Array} nums 
 * @param {number} target 
 * @returns 
 */

const CASE_ONE = {
    nums: [2,7,11,15], 
    target: 9,
} // Result [0, 1]

const CASE_TWO = {
    nums: [3,2,4], 
    target: 6
} // Result [1, 2]

const CASE_THREE = {
    nums: [3,3], 
    target: 6
} // Result [0, 1]

var twoSum = function({nums, target}) {
    let numsMap = {};
     for (let x = 0; x < nums.length; x++) {
        const index = numsMap[target - nums[x]];
        if(index !== undefined){
            return[index, x];
        }
        numsMap[nums[x]] = x;
     }
  return [];
};

console.log(twoSum(CASE_THREE));