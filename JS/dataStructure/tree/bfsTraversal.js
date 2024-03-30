/**
 * [Breadth First Search (BFS)]: Visit every node in the same level from left to right. 
 */
import { BinarySearchTree } from "./binarySearchTree.js";

export function bfsTraversal() {
  const queue = [];
  queue.push(this.root);
  while (queue.length) {
    let node = queue.shift();
    this.values[this.values.length] = node.value;
    if (node.left) {
        queue.push(node.left);
    }
    if (node.right) {
        queue.push(node.right)
    }
  }
}

function runTree() {
    const bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    console.log('BFS-Traversal')
    bst.bfsTraversal(bst.root);
    console.log(bst.values); // [10, 5, 15, 3, 7]
}

// runTree();