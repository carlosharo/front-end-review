/**
 * [Depth First Search (DFS)] - Preorder Traversal: Visit left and get the value 
 * 
 * Visit the root
 * Visit all the left nodes as far as possible 
 * Visit all the right nodes
 */
import { BinarySearchTree } from "./binarySearchTree.js";

export function dfsPreOrder(root = this.root) {
    if (root) {
        this.values[this.values.length] = root.value; // get and save value 
        this.dfsPreOrder(root.left);
        this.dfsPreOrder(root.right);
    }
}

function runTree() {
    const bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);
    console.log('DFS-Pre-Order')
    bst.dfsPreOrder();
    console.log(bst.values); // [10, 5, 3, 7, 15]
}

// runTree();