/*

This shows simple Binary Search Tree Depth First Search algorithms.

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

    addNode(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {

            const recurse = (node) => {
                if (value <= node.value) {
                    if (node.left === null) {
                        node.left = new Node(value);
                    } else {
                        recurse(node.left);
                    }
                } else {
                    if (node.right === null) {
                        node.right = new Node(value);
                    } else {
                        recurse(node.right);
                    }
                }
            };

            recurse(this.root);
        }
    }

    depthFirstSearchDoesValueExist(value) {
        let startNode = this.root;
        if (startNode.value === value) {
            return true;
        }

        const recurse = (node) => {
            if (node === null) {
                return false;
            }
            if (value === node.value) {
                return true;
            }
            if (value < node.value) {
                return recurse(node.left);
            } else {
                return recurse(node.right);
            }
        };
        return recurse(startNode);
    }

    depthFirstSearchReturnNode(value) {
        let startNode = this.root;
        if (startNode.value === value) {
            return startNode;
        }

        const recurse = (node) => {
            if (node === null) {
                return null;
            }
            if (value === node.value) {
                return node;
            }
            if (value < node.value) {
                return recurse(node.left);
            } else {
                return recurse(node.right);
            }
        };
        return recurse(startNode);
    }

    depthFirstSearchPath(value1, value2) {
        let startNode = this.depthFirstSearchReturnNode(value1);

        const recurse = (node, path = []) => {
            if (node === null) {
                return [];
            }

            path.push(node.value);
            if (value2 === node.value) {
                return path;
            }
            if (value2 < node.value) {
                return recurse(node.left, path);
            } else {
                return recurse(node.right, path);
            }
        };
        return recurse(startNode);
    }

    depthFirstSearchListValuesInOrder() {
        let startNode = this.root;
        let list = [];

        const recurse = (node) => {
            if (node === null) {
                return;
            }
            recurse(node.left);
            list.push(node.value);
            recurse(node.right);
            return;
        };

        recurse(startNode);
        return list;
    }

    depthFirstSearchListValuesPreOrder() {
        let startNode = this.root;
        let list = [];

        const recurse = (node) => {
            if (node === null) {
                return;
            }
            list.push(node.value);
            recurse(node.left);
            recurse(node.right);
            return;
        };

        recurse(startNode);
        return list;
    }

    depthFirstSearchListValuesPostOrder() {
        let startNode = this.root;
        let list = [];

        const recurse = (node) => {
            if (node === null) {
                return;
            }
            recurse(node.left);
            recurse(node.right);
            list.push(node.value);
            return;
        };

        recurse(startNode);
        return list;
    }

}

let b = new BST();
b.addNode(5);
b.addNode(3);
b.addNode(8);
b.addNode(1);
b.addNode(6);
b.addNode(0);
b.addNode(2);

console.log(b.depthFirstSearchDoesValueExist(9), false);
console.log(b.depthFirstSearchReturnNode(9), null);
console.log(b.depthFirstSearchPath(3, 6), []);

console.log(b.depthFirstSearchDoesValueExist(1), true);
console.log(b.depthFirstSearchReturnNode(6), "returns a node");
console.log(b.depthFirstSearchPath(5, 6), [5, 8, 6]);

console.log(b.depthFirstSearchDoesValueExist(5), true);
console.log(b.depthFirstSearchReturnNode(5), "returns a node");
console.log(b.depthFirstSearchPath(4, 5), []);

console.log(b.depthFirstSearchListValuesInOrder(), [0, 1, 2, 3, 5, 6, 8]);
console.log(b.depthFirstSearchListValuesPreOrder(), [5, 3, 1, 0, 2, 8, 6]);
console.log(b.depthFirstSearchListValuesPostOrder(), [0, 2, 1, 3, 6, 8, 5]);