/*

List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

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

class LinkedListNode {
    constructor(value = null) {
        if (value !== null) {
            this.value = value;
            this.next = null;
        }
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addLink(newNode) {
        if (this.head === null) {
            this.head = newNode;
        } else {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = newNode;
        }
    }
}

const listOfDepths = (tree, displayAsArray = false) => {
    let resultArray = [];

    const assembleListOfDepths = (node, depth) => {
        if (node === null) {
            return;
        }
        if (resultArray[depth] === undefined) {
            let newLinkedList = new LinkedList();
            newLinkedList.addLink(new LinkedListNode(node.value));
            resultArray.push(newLinkedList);
        } else {
            resultArray[depth].addLink(new LinkedListNode(node.value));
        }

        assembleListOfDepths(node.left, depth + 1);
        assembleListOfDepths(node.right, depth + 1);
    };
    assembleListOfDepths(tree.root, 0);

    if (displayAsArray) {
        resultArray = resultArray.map((element) => {
            return createArrayFromLinkedList(element);
        });
    }
    return resultArray;
};

const createArrayFromLinkedList = (linkedList) => {
    let node = linkedList.head;
    let result = [];
    while (node !== null) {
        result.push(node.value);
        node = node.next;
    }
    return result;
};

let node1 = new BSTNode(1);
let node2 = new BSTNode(2);
let node3 = new BSTNode(3);
let node4 = new BSTNode(4);
let node5 = new BSTNode(5);
let node6 = new BSTNode(6);
let node7 = new BSTNode(7);

let bst1 = new BST();
bst1.addNode(node5);
bst1.addNode(node2);
bst1.addNode(node1);
bst1.addNode(node7);
bst1.addNode(node6);
bst1.addNode(node4);

console.log(bst1);
console.log(listOfDepths(bst1));
console.log(listOfDepths(bst1, true));

