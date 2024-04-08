/**
 * Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
 * The same letter cell may not be used more than once.
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const MOCK_TRUE = {
    board: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "X", "E", "E"]
    ],
    word: "ABCCED",
}

const MOCK_FALSE = {
    board: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"]
    ],
    word: 'ABCB',
}

const MOCK_SEE = {
    board: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"]
    ],
    word: 'SEE',
}

const MOCK_ABCD = {
    board: [
        ["a","b"],
        ["c","d"]
    ],
    word: 'abcd',
};

const MOCK_AAB ={
    board: [
        ["C","A","A"],
        ["A","A","A"],
        ["B","C","D"]
    ],
    word: 'AAB' 
}

var findWord = function ({ board = [], word = ''}) {
    const directions = [[0 , 1], [1, 0], [0, -1], [-1, 0]]
    
    // search in four directions (right, down, left, up)
    function nextChar (pointer, x, y) {
        for (const coord of directions) {
            pointer = searchPath(pointer, x + coord[0], y + coord[1]);
            if (pointer === word.length) return pointer
        }
        return pointer;
    }

    // search for the existing caracter 
    function searchPath(wordPointer, x, y) {
        if (!board[x] || !board[x][y]) return wordPointer;
        if (wordPointer === word.length) return wordPointer;
        if (board[x][y] === word[wordPointer]) {
            wordPointer++;
            if (wordPointer === word.length) return wordPointer;
            const tempChar = board[x][y]
            board[x][y] = 0;
            wordPointer = nextChar(wordPointer, x, y);
            board[x][y] = tempChar;
            if(wordPointer !== word.length ) wordPointer--;
        }
        return wordPointer;
    }

    // search the position of the initial char, if exist
    function findInitialPath(x, y) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === word[0]) {
                    if(searchPath(0, i, j) === word.length ){
                        return true;
                    }
                }
            }
        }
        return false;
    }
   
    return findInitialPath(0,0);
};

console.log(findWord(MOCK_AAB));