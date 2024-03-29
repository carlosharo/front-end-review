/*
  Linked list 
*/

function Node (value) {
  this.value = value;
  this.next = null;
 }

function LinkedList () {
  this.length = 0;
  this.head = null;
  this.size = size;
  this.isEmpty = isEmpty;
  this.prepend = prepend;
  this.append = append;
  this.printList = printList;
  this.printObject = printObject;
  this.deleteAt = deleteAt;
  
  function size(){
   return this.length; 
  }
  
  function isEmpty() {
    return this.size() === 0;
  }
  
  function prepend(element){
    const node = new Node(element);
    if(!this.isEmpty()) node.next = this.head;
    this.head = node;
    this.length++;
  }
  
  function append(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.head = node;
    }else{
      let pointer = this.head;
      while(pointer.next){
        pointer = pointer.next;
      }
      pointer.next = node;
    }
    this.length++;
  }
  
  function deleteAt(position){
    let pointer = this.head;
    let prevNode = null;
    if(position === 0){
      this.head = this.head.next;
      return;
    }
    for(let x = 1; x<=position; x++){
      if(!pointer.next) { 
        console.log('Node not found'); 
        return;
      }
        prevNode = pointer;
        pointer = pointer.next;
    }
    prevNode.next = pointer.next;
  }
  
  function printList(){
    if(this.isEmpty()){
      console.log('List is empty')
    }else{
      let pointer = this.head;
      let listValues = '';
      while(pointer){
        listValues += `${pointer.value} `;
        pointer = pointer.next;
      }
      console.log(listValues);
    }
  }
  
  function printObject(){
    console.log(this.head);
  }
}

const listNodes = new LinkedList();
console.log('-- Is list empty -- ', listNodes.isEmpty()); // true
console.log('List size: ', listNodes.size()); // 0
listNodes.prepend(10);
listNodes.prepend(20);
listNodes.prepend(30);
console.log('List size: ', listNodes.size()); // 3
listNodes.printList(); // 30 20 10
// listNodes.printObject();
listNodes.prepend(40);
listNodes.deleteAt(3);
listNodes.printList(); // 40 30 20
listNodes.append(50);
listNodes.printList(); // 40 30 20 50