/**
 * [Depth First Search (DFS)] - Inorder Traversal: Get the value from last left then from right 
 *
 * Visit the root
 * Visit all the left nodes as far as possible 
 * Visit all the right nodes
 */
import { BinarySearchTree } from "./binarySearchTree.js";

export function dfsInOrder(root = this.root) {
    if (root) {
        this.dfsInOrder(root.left);
        this.values[this.values.length] = root.value; // get and save value 
        this.dfsInOrder(root.right);
    }
}

function runTree() {
    const bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    console.log('DFS-In-Order')
    bst.dfsInOrder();
    console.log(bst.values); // [3, 5, 7, 10, 15]
}

// runTree();