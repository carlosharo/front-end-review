
/* 
My mom is convinced she is being hunted by the FBI, thus she uses a code when she sends me messages.
She told me to use this conversion table :

a -> c         A -> C
b -> d         B -> D
c -> e         C -> E
.    .         .    .
.    .         .    .
x -> z         X -> Z
y -> a         Y -> A
z -> b         Z -> B
*/

const message = 'abc' // Expected: cde
const messageII = 'Fcjjm Umpjb' //Hello World

const decodeMessage = (message) => {
    const map = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const mapUp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let result = '';
    for (const m of message) {
        if (/[A-Z]/g.test(m)) result = result + mapUp[(mapUp.findIndex(c => c === m) % 26) + 2]
        else if (/[a-z]/g.test(m)) result = result + map[(map.findIndex(c => c === m) % 26) + 2]
        else result = result + m;
    }
    return result;
}

console.log(decodeMessage(messageII));
