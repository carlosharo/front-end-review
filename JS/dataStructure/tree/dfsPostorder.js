/**
 * [Depth First Search (DFS)] - Postorder Traversal: Get the value from right then from left 
 *
 * Visit the root
 * Visit all the left nodes as far as possible 
 * Visit all the right nodes
 */
import { BinarySearchTree } from "./binarySearchTree.js";

export function dfsPostOrder(root = this.root) {
    
    if(root){
        this.dfsPostOrder(root.left);
        this.dfsPostOrder(root.right);
        this.values[this.values.length] = root.value; // get and save value 
    }
}

function runTree() {
    const bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    console.log('DFS-POST-Order')
    bst.dfsPostOrder();
    console.log(bst.values); // [3, 7, 5, 15, 10]
}

// runTree();