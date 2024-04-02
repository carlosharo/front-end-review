/**
 * A tree is a hierarchical data structure that consists of nodes connected by edges.
 * A tree is a non-linear data structure, compared to arrays, linked lists, stack and queues which are linear data structures.
 * 
 * Usage: [ Directory structure, Family tree, Organization tree, DOM, Searching, Sorting ]
 * Operations: [Insertion, Search, DFS, BFS, Delition] (DFS, BFS: To visit all nodes)
 * Logic: The left child is lower than the parent and the right child is bigger than the parent.
 * 
 * Tree traversal: Visiting every node in the tree 
 * A hierarchical data structure like a tree can be traversed in different ways:
 *  [Depth First Search (DFS)]: Types: [Preorder, Inorder, Postorder]
 *  [Breadth First Search (BFS)]
 */

import { dfsPreOrder as DFSPreorder } from './dfsPreorder.js';
import { dfsInOrder as DFSInOrder } from './dfsInorder.js';
import { dfsPostOrder as DFSPostOrder} from './dfsPostorder.js';
import { bfsTraversal as BFSTraversal } from './bfsTraversal.js';

export function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

export function BinarySearchTree() {
    this.root = null;
    this.isEmpty = isEmpty;
    this.insert = insert;
    this.search = search;
    this.dfsPreOrder = DFSPreorder;
    this.dfsInOrder = DFSInOrder;
    this.dfsPostOrder = DFSPostOrder;
    this.bfsTraversal = BFSTraversal;
    this.min = min;
    this.max = max;
    this.values = [];

    const LOG = {
        INSERT_SUCCESS: 'was inserted with success',
        EMPTY_TREE: 'Binary node is empty',
        NOT_EMPTY_TREE: 'Binary node is not empty',
        FOUND: 'was found in the tree',
        NOT_FOUND: 'was not found in the tree',
    }

    function isEmpty() {
        if (this.root === null) {
            logAction(LOG.EMPTY_TREE);
            return true;
        }else{
            logAction(LOG.NOT_EMPTY_TREE);
            return false;
        }
        
    }

    function logAction(message, value = '') {
        console.log(`LOG: ${value} ${message}`);
    }

    function insertNode(root, newNode) {
        // To find the correct direction (left/right)
        if (newNode.value < root.value) {
            // smaller - left
            if (root.left === null) {
                root.left = newNode;
                logAction(LOG.INSERT_SUCCESS, newNode.value);
            } else {
                insertNode(root.left, newNode);
            }
        } else {
            // bigger - right
            if (root.right == null) {
                root.right = newNode;
                logAction(LOG.INSERT_SUCCESS, newNode.value);
            } else {
                insertNode(root.right, newNode);
            }
        }
    }

    function insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
            logAction(LOG.INSERT_SUCCESS, value)
        } else {
            insertNode(this.root, newNode)
        }

    }

    function search(root, value) {
        if (!root) {
            logAction(LOG.NOT_FOUND, value)
            return false;
        } else {
            if (root.value === value) {
                logAction(LOG.FOUND, value)
                return true;
            } else if (value < root.value) {
                search(root.left, value);
            } else {
                search(root.right, value);
            }
        }
    }

    function min(root = this.root){
        if (!root.left) {
            return root.value;
        }else{
            return this.min(root.left);
        }
    }

    function max(root = this.root){
        if (!root.right) {
            return root.value;
        }else{
            return this.min(root.right);
        }
    }
}

function runTree() {
    const bst = new BinarySearchTree();
    bst.isEmpty(); // true
    bst.insert(10);
    bst.isEmpty(); // false
    bst.insert(5); 
    bst.insert(15); 
    bst.search(bst.root, 5); // LOG: 5 was found in the tree
    bst.search(bst.root, 11); // LOG: 11 was not found in the tree
    bst.dfsInOrder();
    console.log(`Min value from: [${bst.values}] is: ${bst.min()}`);
    console.log(`Max value from: [${bst.values}] is: ${bst.max()}`);
}

  runTree();






