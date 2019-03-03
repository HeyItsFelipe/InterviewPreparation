/*

Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed?

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(value) {
        this.head = null;
        if (value !== null) {
            this.head = new Node(value);
        }
    }

    add(value) {
        if (this.head === null) {
            this.head = new Node(value);
        } else {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = new Node(value);
        }
    }
}

const removeDups = (linkedList) => {
    let store = {};
    let previousNode = linkedList.head;
    let currentNode = linkedList.head.next;

    store[previousNode.value] = 1;

    while (currentNode !== null) {
        if (store[currentNode.value]) {
            previousNode.next = currentNode.next;
            currentNode = currentNode.next;
        } else {
            store[currentNode.value] = 1;
            currentNode = currentNode.next
            previousNode = previousNode.next;
        }
    }
};

const removeDupsNoBuffer = (linkedList) => {
    let node = linkedList.head;

    while (node !== null) {
        previousNode = node;
        currentNode = node.next;

        while (currentNode !== null) {
            if (currentNode.value === node.value) {
                previousNode.next = currentNode.next;
                currentNode = currentNode.next;
            } else {
                currentNode = currentNode.next
                previousNode = previousNode.next;
            }
        }
        node = node.next;
    }
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

let l = new LinkedList(1);
console.log(l);
l.add(3);
l.add(3);
l.add(4);
l.add(4);

console.log(l);
printLinkedList(l);
removeDups(l);
printLinkedList(l);