/**
 * It moves the sheeps (A) from the left to the right and the sheeps (N) from the left to the right.
 * Rules: 
 * A sheep is able to move the empty space (_)
 * A sheeps is able to jump one sheep to a free space: AN_ -> _NA
 * @param {String} sheeps 
 * @returns 
 */

let SHEEPS_ONE = 'NNNN_AAAA';

function moveSheeps(sheeps) {
    const arrSheeps = sheeps.split('');

    function findSpace() {
        for (let index = 0; index < arrSheeps.length; index++) {
            if (arrSheeps[index] === '_') {
                return index;
            }
        }
        return 0;
    }

    const space = findSpace();

    function isDone() {
        let temp;
        for (const char of arrSheeps) {
            if (temp === '_') {
                temp = char;
            }
            if (!temp || char === '_') {
                temp = char;
            }
            else if(char !== temp && char !== '_'){
                return false;
            }
        }
        return true;
    }

    function order(char, pointer) {
        while (arrSheeps[pointer + 1] !== char) {
            arrSheeps[pointer] = arrSheeps[pointer + 1];
            arrSheeps[pointer + 1] = '_';
            pointer ++;
            console.log(arrSheeps);
        }
        return pointer + 1;
    }

    function jump(pointer) {

        if (!arrSheeps[pointer - 1] || arrSheeps[pointer -1] === arrSheeps[pointer]) {
            pointer = order(arrSheeps[pointer], pointer+1);
        } else if (arrSheeps[pointer - 1] === '_') {
            arrSheeps[pointer - 1] = arrSheeps[pointer];
            arrSheeps[pointer] = '_';
            pointer--;
            console.log(arrSheeps);
        } else if (arrSheeps[pointer - 1] !== arrSheeps[pointer]) {
            arrSheeps[pointer + 1] = arrSheeps[pointer - 1];
            arrSheeps[pointer - 1] = '_';
            console.log(arrSheeps);
        }
        if (!isDone(space)) {
            jump(pointer);
        }

    }
    console.log(arrSheeps);
    jump(space + 1);

    return;
}

moveSheeps(SHEEPS_ONE);