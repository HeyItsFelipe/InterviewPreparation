/*

Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
node never differ by more than one.

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

}

const checkBalanced = (tree) => {
    if (tree.root === null || (tree.root.left === null && tree.root.right === null)) {
        return true;
    }
    const checkingBalanced = (node, depth) => {
        if (node === null) {
            return depth - 1;
        }
        let leftDepth = checkingBalanced(node.left, depth + 1);
        if (leftDepth === false) {
            return false;
        }
        let rightDepth = checkingBalanced(node.right, depth + 1);
        if (rightDepth === false) {
            return false;
        }
        if (Math.abs(leftDepth - rightDepth) > 1) {
            return false;
        }
        return Math.max(leftDepth, rightDepth);

    };
    let result = checkingBalanced(tree.root, 0);
    if (result) {
        return true;
    }
    return false;

};

let node1 = new BSTNode(1);
let node2 = new BSTNode(2);
let node3 = new BSTNode(3);
let node4 = new BSTNode(4);
let node5 = new BSTNode(5);
let node6 = new BSTNode(6);
let node7 = new BSTNode(7);
let node8 = new BSTNode(8);
let node9 = new BSTNode(9);
let node10 = new BSTNode(10);

let bst1 = new BST();
bst1.addNode(node5);
bst1.addNode(node3);
bst1.addNode(node1);
bst1.addNode(node7);
bst1.addNode(node8);
bst1.addNode(node9);
bst1.addNode(node6);

console.log(checkBalanced(bst1), true);

let bst2 = new BST();
bst2.addNode(new BSTNode(10));
bst2.addNode(new BSTNode(9));
bst2.addNode(new BSTNode(8));
console.log(checkBalanced(bst2), false);

let bst3 = new BST();
bst3.addNode(new BSTNode(10));
bst3.addNode(new BSTNode(11));
bst3.addNode(new BSTNode(12));
bst3.addNode(new BSTNode(13));
bst3.addNode(new BSTNode(9));
bst3.addNode(new BSTNode(8));
bst3.addNode(new BSTNode(7));
console.log(checkBalanced(bst3), false);

let bst4 = new BST();
bst4.addNode(new BSTNode(8));
bst4.addNode(new BSTNode(4));
bst4.addNode(new BSTNode(12));
bst4.addNode(new BSTNode(2));
bst4.addNode(new BSTNode(6));
bst4.addNode(new BSTNode(10));
bst4.addNode(new BSTNode(14));
bst4.addNode(new BSTNode(1));
bst4.addNode(new BSTNode(3));
bst4.addNode(new BSTNode(5));
bst4.addNode(new BSTNode(7));
bst4.addNode(new BSTNode(9));
bst4.addNode(new BSTNode(11));
bst4.addNode(new BSTNode(13));
bst4.addNode(new BSTNode(15));
bst4.addNode(new BSTNode(16))
console.log(checkBalanced(bst4), true);

let bst5 = new BST();
bst5.addNode(new BSTNode(10));
console.log(checkBalanced(bst5), true);