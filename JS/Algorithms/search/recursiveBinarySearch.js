/**
 * Binary Search: It only works on a sorted array.
 */

const LIST = [-5, 2, 4, 6, 10];
const EMPTY_LIST = [];
const NUM = 6;

// Find the number from the array and returns the index 
const search = function (list, n, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }
    let middleIndex = Math.round((leftIndex + rightIndex) / 2);
    if (list[middleIndex] === n) {
        return middleIndex;
    }
    if (list[middleIndex] < n) {
       return search(list, n, middleIndex + 1, rightIndex);
    }else{
       return search(list, n, leftIndex, middleIndex -1);
    }
}

const recursiveBinarySearch = function (list, n){
   return search(list, n, 0, list.length - 1);
}

console.log(`Find index of ${NUM}: `, recursiveBinarySearch(LIST, NUM));