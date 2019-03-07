/*

Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
that node.

EXAMPLE
Input: the node c from the linked list a->b->c->d->e->f
Result: nothing is returned, but the new linked list looks like a->b->d->e->f

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(nodeHead = null) {
        this.head = null;
        if (nodeHead !== null) {
            this.head = nodeHead;
        }
    }

    addNode(nodeToAdd) {
        if (this.head === null) {
            this.head = nodeToAdd;
        } else {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = nodeToAdd;
        }
    }
}

const deleteMiddleNodeWithValue = (value, linkedList) => {

    let previousNode = linkedList.head;
    let currentNode = linkedList.head.next;

    while (currentNode.next !== null) {
        if (currentNode.value === value) {
            previousNode.next = currentNode.next;
            return;
        }
        previousNode = previousNode.next;
        currentNode = currentNode.next;
    }
    return;
};

const deleteMiddleNodeWithNode = (node) => {
    if (node.next === null) {
        return;
    }
    node.value = node.next.value;
    node.next = node.next.next;
    return;
};

const printLinkedList = (linkedList) => {
    let node = linkedList.head;
    let result = [];
    while (node !== null) {
        result.push(node.value);
        node = node.next;
    }
    console.log(result);
};

let l = new LinkedList(new Node(1));
console.log(l);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
l.addNode(node2);
l.addNode(node3);
l.addNode(node4);
l.addNode(node5);
console.log(l);
printLinkedList(l);
deleteMiddleNodeWithValue(2, l);
printLinkedList(l);
deleteMiddleNodeWithNode(node4, l);
printLinkedList(l);