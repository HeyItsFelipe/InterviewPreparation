/*

Successor: Write an algorithm to find the "next" node (i .e., in-order successor) of a given node in a
binary search tree. You may assume that each node has a link to its parent.

*/

class BSTNode {
    constructor(value = null) {
        if (value !== null) {
            this.value = value;
            this.left = null;
            this.right = null;
            this.parent = null;
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
                    newNode.parent = node;
                    node.left = newNode;
                } else {
                    this.addNode(newNode, node.left);
                }
            } else {
                if (node.right === null) {
                    newNode.parent = node;
                    node.right = newNode;
                } else {
                    this.addNode(newNode, node.right);
                }
            }
        }
    }

}

const successor = (node) => {

    // Traverses up if left branch doesn't exist and may or may not have a right branch
    if (node.left === null) {
        let traversingNode = node.parent;
        // Returns null if only a one node tree
        if (traversingNode === null) {
            return null;
        }
        while (node.value < traversingNode.value) {
            traversingNode = traversingNode.parent;
            if (traversingNode === null) {
                return null;
            }
        }
        return traversingNode;
    }
    //Traverses downward left and then all the way downward right if left branch exists
    if (node.left !== null) {
        let traversingNode = node.left;
        while (node.value > traversingNode.value) {
            if (traversingNode.right === null) {
                return traversingNode;
            } else {
                traversingNode = traversingNode.right;
            }
        }
    }

};


let bst1 = new BST();
[20, 10, 5, 1, 2, 3, 7, 8, 9, 15, 35, 25, 30, 45].forEach(v => bst1.addNode(new BSTNode(v)));
console.log(successor(bst1.root.left.right).value); // 15 returns 10
console.log(successor(bst1.root.left.left.left));  // 1 returns null
console.log(successor(bst1.root).value);  // 20 returns 15
console.log(successor(bst1.root.left.left.right.right.right).value);  // 9 returns 8
console.log(successor(bst1.root.left.left.left.right).value);  // 2 returns 1
console.log(successor(bst1.root.left).value);  // 10 returns 9
console.log(successor(bst1.root.right.left.right).value);  // 30 returns 25
console.log(successor(bst1.root.right.left).value);  // 25 returns 20
console.log(successor(bst1.root.right).value);  // 35 returns 30


let bst2 = new BST();
[11].forEach(v => bst2.addNode(new BSTNode(v)));
console.log(successor(bst2.root));  // 11 returns null

let bst3 = new BST();
[100, 20].forEach(v => bst3.addNode(new BSTNode(v)));
console.log(successor(bst3.root.left));  // 20 returns null

let bst4 = new BST();
[100, 200].forEach(v => bst4.addNode(new BSTNode(v)));
console.log(successor(bst4.root.right).value);  // 200 returns 100

let bst5 = new BST();
[10, 11, 9].forEach(v => bst5.addNode(new BSTNode(v)));
console.log(successor(bst5.root.left));  // 9 returns null
console.log(successor(bst5.root.right).value);  // 11 returns 10

