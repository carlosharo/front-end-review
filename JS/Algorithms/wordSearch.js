/**
 * TODO: Finis it
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

 /**
   board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
  ]; 
  word = "ABCB"
  Result: false
*/

 const board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
  ] ;
  const word = "ABCCED"
// Result: true


  var exist = async function(board, word) {
    let pointerX = 0;
    let pointerY = 0;
    const usedChars = [];

    const searchChar = (char, x, y) => {
        console.log('Search-Char');
        const value = board[x][y];
        console.log('Search-Char ', value);
        if (value === char) {
            pointerX = x;
            pointerY = y;
        }else{
            searchChar(char, pointerX, pointerY + 1);
        }
    }

   for(let char of word){
        searchChar(char, pointerX + 1, pointerY);
   }
 console.log(usedChars);
};

console.log(exist(board, word));