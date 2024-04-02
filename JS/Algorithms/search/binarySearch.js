/**
 * Binary Search: It only works on a sorted array.
 */

const LIST = [-5, 2, 4, 6, 10];
const EMPTY_LIST = [];
const NUM = 4;

// Find the number from the array and returns the index 
const findIndex = function (list, n) {
    if (!list) {
        return -1;
    }
    let leftIndex = 0;
    let rightIndex = list.length - 1;
    
    while(leftIndex <= rightIndex){
        const middleIndex = Math.round(leftIndex + rightIndex / 2);
        console.log(leftIndex, rightIndex, middleIndex);
        if (list[middleIndex] === n) {
            return middleIndex;
        }else{
            if(list[middleIndex] < n){
                leftIndex = middleIndex + 1;
            }else{
                rightIndex = middleIndex - 1;
            }
        }
    } 
    return -1;
}

console.log(`Find index of ${NUM}: `, findIndex(LIST, NUM));