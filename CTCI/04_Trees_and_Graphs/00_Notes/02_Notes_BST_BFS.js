/*

This shows simple Binary Search Tree Breadth First Search algorithms.

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
            return;
        }

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

    breadthFirstSearchDoesValueExist(value) {
        let startNode = this.root;
        if (startNode.value === value) {
            return true;
        }

        let queue = [];
        let dequeuedNode = null;
        queue.push(startNode);

        while (queue.length !== 0) {

            dequeuedNode = queue.shift();
            if (value === dequeuedNode.value) {
                return true;
            }
            if (dequeuedNode.left !== null) {
                queue.push(dequeuedNode.left);
            }
            if (dequeuedNode.right !== null) {
                queue.push(dequeuedNode.right);
            }
        }

        return false;
    }

    breadthFirstSearchReturnNode(value) {
        let startNode = this.root;
        if (startNode.value === value) {
            return startNode;
        }

        let queue = [];
        let dequeuedNode = null;
        queue.push(startNode);

        while (queue.length !== 0) {

            dequeuedNode = queue.shift();
            if (dequeuedNode.value === value) {
                return dequeuedNode;
            }
            if (dequeuedNode.left !== null) {
                queue.push(dequeuedNode.left);
            }
            if (dequeuedNode.right !== null) {
                queue.push(dequeuedNode.right);
            }
        }

        return null;
    }

    breadthFirstSearchPath(value1, value2) {
        let startNode = this.breadthFirstSearchReturnNode(value1);

        if (startNode === null) {
            return [];
        }
        if (startNode.value === value2) {
            return [value2];
        }

        let queue = [];
        let dequeuedNode = null;
        startNode.path = [startNode.value];
        queue.push(startNode);

        while (queue.length !== 0) {

            dequeuedNode = queue.shift();
            if (value2 === dequeuedNode.value) {
                return dequeuedNode.path;
            }
            if (dequeuedNode.left !== null) {
                dequeuedNode.left.path = dequeuedNode.path.slice();
                dequeuedNode.left.path.push(dequeuedNode.left.value);
                queue.push(dequeuedNode.left);
            }
            if (dequeuedNode.right !== null) {
                dequeuedNode.right.path = dequeuedNode.path.slice();
                dequeuedNode.right.path.push(dequeuedNode.right.value);
                queue.push(dequeuedNode.right);
            }
        }
        return null;
    }

    breadthFirstSearchListValues() {
        let startNode = this.root;

        if (startNode === null) {
            return [];
        }

        let queue = [];
        let list = [];
        let dequeuedNode = null;

        queue.push(startNode);

        while (queue.length !== 0) {
            dequeuedNode = queue.shift();
            list.push(dequeuedNode.value);
            if (dequeuedNode.left !== null) {
                queue.push(dequeuedNode.left);
            }
            if (dequeuedNode.right !== null) {
                queue.push(dequeuedNode.right);
            }
        }

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

console.log(b.breadthFirstSearchDoesValueExist(1), true);
console.log(b.breadthFirstSearchReturnNode(1), "returns a node");
console.log(b.breadthFirstSearchPath(5, 2), [5, 3, 1, 2]);

console.log(b.breadthFirstSearchDoesValueExist(4), false);
console.log(b.breadthFirstSearchReturnNode(4), null);
console.log(b.breadthFirstSearchPath(4, 2), []);

console.log(b.breadthFirstSearchListValues(), [5, 3, 8, 1, 6, 0, 2]);