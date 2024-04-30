/**
 * code = 1 1 2 1 3 1 4 1
 * result = ABCD
 * 
 * code = 16 7
 * result = PPPPPPP
 * 
 * code = 8 1 5 1 12 2 15 1 23 1 15 1 18 1 12 1 4 1
 * result = HELLOWORLD
 */

const code = '8 1 5 1 12 2 15 1 23 1 15 1 18 1 12 1 4 1';
const result = 'HELLOWORLD';

/**
 * It gets a coded message in it has to return the correct decoded message
 * @param {String} code 
 * @returns decoded message 
 */

function decodeMessage(code) {
    code = code.split(' ');
    let result = '';
    const mapChars = {
        '1': 'A',
        '2': 'B',
        '3': 'C',
        '4': 'D',
        '5': 'E',
        '6': 'F',
        '7': 'G',
        '8': 'H',
        '9': 'I',
        '10': 'J',
        '11': 'K',
        '12': 'L',
        '13': 'M',
        '14': 'N',
        '15': 'O',
        '16': 'P',
        '17': 'Q',
        '18': 'R',
        '19': 'S',
        '20': 'T',
        '21': 'U',
        '22': 'V',
        '23': 'W',
        '24': 'X',
        '25': 'Y',
        '26': 'Z',
    }
    function addChars(n, value) {
        let result = '';
        for (let x = 0; x < n; x++) {
            result = result + value;
        }
        return result;
    }
    for (let i = 0; i < code.length; i += 2) {
        result = result + addChars(code[i + 1], mapChars[code[i]]);
    }
    return result;
}

console.log(decodeMessage(code));
