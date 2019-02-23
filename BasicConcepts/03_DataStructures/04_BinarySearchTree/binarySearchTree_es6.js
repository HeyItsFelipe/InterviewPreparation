/*

A binary search tree is a data structure that you can add data nodes to form a tree-like structure.
This is a simple implementation of a binary search tree using ES6 javascript.
Searching for items in a binary search tree is faster compared to other data structures 
such as arrays, stacks, and queues.

***Things To Note***
Two data structures are used here to create the BST, the Node and the actual binary search tree, BST.
For adding a node, you will use recursion.
Adding a node involves a couple of nested if/else statements.

*/

class Node {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value = null) {
        this.root = null;
        if (value !== null) {
            this.root = new Node(value);
        }
    }

    addNode(value, node = this.root) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            if (value < node.value) {
                if (node.left === null) {
                    node.left = new Node(value);
                } else {
                    this.addNode(value, node.left);
                }
            } else {
                if (node.right === null) {
                    node.right = new Node(value);
                } else {
                    this.addNode(value, node.right);
                }
            }
        }
        return;
    }
}

let bst = new BST();
console.log(bst);
bst.addNode(3);
console.log(bst);
bst.addNode(10);
console.log(bst);