/*
    Mapping characters
    Given a string of character return the number of character of each one 
*/
const MESSAGE = 'text message';

const countCharacters = (message) => {
    const mapping = {}
    for (let char of message) {
        console.log('Char: ', char)
        mapping[char] = mapping[char] + 1 || 1;
        console.log('mapping ', mapping[char])
    }
    return mapping;
}

console.log('Result: ',countCharacters(MESSAGE));