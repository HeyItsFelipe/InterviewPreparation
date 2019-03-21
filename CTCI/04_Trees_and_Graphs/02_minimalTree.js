/*

Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm
to create a binary search tree with minimal height.

*/

class Node {
    constructor(value = null) {
        if (value !== null) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    addNode(newNode, node = this.root) {
        if (this.root === null) {
            this.root = newNode;
        } else {
            if (newNode.value < node.value) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    this.addNode(newNode, node.left);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.addNode(newNode, node.right);
                }
            }
        }
    }

    getHeight() {
        let maxHeight = 0;
        let currentLevel = 0;
        const recurse = (currentLevel, node) => {
            if (node === null) {
                return;
            }
            currentLevel++;
            if (currentLevel > maxHeight) {
                maxHeight++;
            }
            recurse(currentLevel, node.left);
            recurse(currentLevel, node.right);
        };

        recurse(currentLevel, this.root);
        return maxHeight;
    }
}

const minimalTree = (array) => {
    let bst = new BST();

    if (array.length === 1 && bst.root === null) {
        bst.addNode(new Node(array[0]));
        return bst;
    }

    const createMinimalTree = (array) => {
        if (array.length <= 0) {
            return null;
        }
        if (array.length === 1) {
            return new Node(array[0]);
        }
        let mid = Math.floor(array.length / 2);
        let node = new Node(array[mid]);
        bst.addNode(node);
        node.left = createMinimalTree(array.slice(0, mid));
        node.right = createMinimalTree(array.slice(mid + 1));
        return node;
    };

    createMinimalTree(array);
    return bst;

};


let array1 = [4, 9, 11, 14, 21, 37, 42, 51];
let bst1 = minimalTree(array1);
console.log(bst1);
console.log(bst1.getHeight());

let array2 = [4];
let bst2 = minimalTree(array2);
console.log(bst2);
console.log(bst2.getHeight());

let array3 = [4, 9];
let bst3 = minimalTree(array3);
console.log(bst3);
console.log(bst3.getHeight());