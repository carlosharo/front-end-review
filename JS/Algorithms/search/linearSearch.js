/**
 * Linear search: It compares every element from the array one by one until it founds the correct value or it finish with the array length.
 */
const LIST = [-5, 2, 10, 4, 6];
const NUM = 10;

// Find the number from the array and returns the index 
const findIndex = function (list, n) {
    let pointer = 0;
    while (pointer < list.length) {
        console.log(`NUM: ${n} === ${list[pointer]}, ${list[pointer] === n}`);
        if (list[pointer] === n) {
            console.log('return: ', pointer);
            return pointer;
        }
        pointer++;
    }
    return -1;
}

console.log(`Find index of ${NUM}: `, findIndex(LIST, NUM));