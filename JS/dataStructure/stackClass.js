/*
    stack data structure using js class
*/

const SEVEN = 7;

class Stack {
    constructor(storage = []) {
      this.storage = storage;
    }
  
    addElement(newElement) {
      this.storage[this.getLength()] = newElement;
    }
  
    removeElement(newElement) {
      this.storage.pop();
    }   
  
    printStack() {
      console.log("-Stack-");
      for (let x = this.getLength(); x > 0; x--) {
        console.log("-", this.storage[x - 1], "-");
      }
    }
  
    getLength() {
      return this.storage.length;
    }
  }
  
  const stack = new Stack([1, 2, 3, 4]);
  stack.printStack(); // 4,3,2,1
  stack.addElement(SEVEN);
  console.log('New element added: ', SEVEN)
  stack.printStack(); // 7,4,3,2,1
  stack.removeElement();
  console.log('Element removed from stack: ', SEVEN)
  stack.printStack(); // 4,3,2,1
  