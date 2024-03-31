const MESSAGE = 'aaabbbcca';

const textEncoding = function (message) {
    let encoding = '';
    let temp = '';
    let counter = '';
    if (!message) {
        return 'message not found';
    }
    function encode() {
        encoding = temp ? encoding + counter + temp : '';
    }
    for (const char of message) {
        if (temp === char) {
            counter++;
        } else {
            encode();
            temp = char;
            counter = 1;
        }
    }
    encode();
    return encoding;
}

console.log(textEncoding(MESSAGE)); // 3a2b2c1a