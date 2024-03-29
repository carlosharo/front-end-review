/*
 Create a stack with functional classes
*/

const EIGHT = 8;

function Stack(stack = []) {
    this.stack = stack;
    this.printStack = printStack;
    this.getLength = getLength;
    this.addElement = addElement;
    this.removeElement = removeElement;
    
     function addElement(newElement) {
      this.stack[this.getLength()] = newElement;
    }
  
    function removeElement(newElement) {
      this.stack.pop();
    }
    
    function printStack() {
      console.log("-Stack-Start-");
      for (let x = this.getLength(); x > 0; x--) {
        console.log("-", this.stack[x - 1], "-");
      }
    }
    
    function getLength() {
      return this.stack.length;
    }
  }
  
  const stack = new Stack([1,2,3,4]);
  stack.printStack(); // 4,3,2,1
  stack.addElement(EIGHT);
  console.log('New element added: ', EIGHT)
  stack.printStack(); // 8,4,3,2,1
  stack.removeElement();
  console.log('Element removed from stack: ', EIGHT)
  stack.printStack(); // 4,3,2,1