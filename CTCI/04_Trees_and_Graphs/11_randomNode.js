/*

Check Subtree: T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an
algorithm to determine if T2 is a subtree of T1.

A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2 .
That is, if you cut off the tree at node n, the two trees would be identical.

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

const constructBSTArray = (t) => {
    let result = [];

    const recurse = (node) => {
        if (node === null) {
            return;
        }
        if (node.left === null && node.right === null) {
            result.push(node.value);
            return;
        }
        recurse(node.left);
        result.push(node.value);
        recurse(node.right);
        return;
    };

    recurse(t.root);
    return result;
};

const randomNode = (tree) => {
    let bstArray = constructBSTArray(tree);
    let randomIndex = Math.floor(Math.random() * bstArray.length);
    return bstArray[randomIndex];
};


let bst1 = new BST();
[4, 2, 5, 1, 3].forEach(v => bst1.addNode(new BSTNode(v)));
console.log(randomNode(bst1));  // random node value


