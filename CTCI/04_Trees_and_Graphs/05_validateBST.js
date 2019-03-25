/*

Validate BST: Implement a function to check if a binary tree is a binary search tree.

*/

class BSTNode {
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
            if (newNode.value <= node.value) {
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

}

const validateBST = (tree) => {

    const validatingBST = (node) => {
        if (node === null) {
            return null;
        }
        if (node.left === null && node.right === null) {
            return node.value
        }

        let leftValue = validatingBST(node.left);
        if (leftValue === false) {
            return false;
        }
        let rightValue = validatingBST(node.right);
        if (rightValue === false) {
            return false;
        }
        if ((leftValue !== null && leftValue > node.value) || (rightValue !== null && rightValue <= node.value)) {
            return false;
        }
        return node.value;
    }

    let value = validatingBST(tree.root);
    if (value === false) {
        return false;
    }
    return true;

};


let bst1 = new BST();
[20, 10, 5, 1, 2, 3, 7, 8, 9, 15, 35, 25, 30, 45].forEach(v => bst1.addNode(new BSTNode(v)));
console.log(validateBST(bst1), true);
bst1.root.value = 50;
console.log(validateBST(bst1), false);

let bst2 = new BST();
[11].forEach(v => bst2.addNode(new BSTNode(v)));
console.log(validateBST(bst2), true);

let bst3 = new BST();
[100, 20, 10, 5, 1, 2, 3, 7, 8, 9, 15, 35, 25, 30, 45].forEach(v => bst3.addNode(new BSTNode(v)));
console.log(validateBST(bst3), true);

let bst4 = new BST();
[10, 10, 15].forEach(v => bst4.addNode(new BSTNode(v)));
console.log(validateBST(bst4), true);

let bst5 = new BST();
[5, 10, 15, 20, 0, 5].forEach(v => bst5.addNode(new BSTNode(v)));
console.log(validateBST(bst5), true);

let bst6 = new BST();
[2, 1, 3].forEach(v => bst6.addNode(new BSTNode(v)));
bst6.root.left.value = 4;
console.log(validateBST(bst6), false);

let bst7 = new BST();
[200, 150, 120, 115, 145, 130, 135, 160, 180, 175, 170, 165, 190].forEach(v => bst7.addNode(new BSTNode(v)));
bst7.root.left.left.value = 200;
console.log(validateBST(bst7), false);

