/*

Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting
node. Note that the intersection is defined based on reference, not value. That is, if the kth
node of the first linked list is the exact same node (by reference) as the jth node of the second
linked list, then they are intersecting.

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

const printLinkedList = (linkedList) => {
    let node = linkedList.head;
    let result = [];
    while (node !== null) {
        result.push(node.value);
        node = node.next;
    }
    console.log(result);
};

const intersection = (linkedList1, linkedList2) => {
    let node1 = linkedList1.head;
    let node2 = null;
    while (node1 !== null) {
        node2 = linkedList2.head;
        while (node2 !== null) {
            if (node1 === node2) {
                return node2;
            }
            node2 = node2.next;
        }
        node1 = node1.next;
    }
    return null;
};

const intersection2 = (linkedList1, linkedList2) => {
    let node1 = linkedList1.head;
    let node2 = linkedList2.head;
    let length1 = 1;
    let length2 = 1;
    let longerListNode = linkedList1.head;
    let shorterListNode = linkedList2.head;

    while (node1.next !== null || node2.next !== null) {
        if (node1.next === null && node2.next !== null) {
            shorterListNode = linkedList1.head;
            longerListNode = linkedList2.head;
        } else {
            shorterListNode = linkedList2.head;
            longerListNode = linkedList1.head;
        }
        if (node1.next !== null) {
            length1++;
            node1 = node1.next;
        }
        if (node2.next !== null) {
            length2++;
            node2 = node2.next;
        }
    }

    for (let i = 1; i <= Math.abs(length1 - length2); i++) {
        longerListNode = longerListNode.next;
    }

    while (longerListNode !== null || shorterListNode !== null) {
        if (longerListNode === shorterListNode) {
            return longerListNode;
        }
        longerListNode = longerListNode.next;
        shorterListNode = shorterListNode.next;
    }

    return null;
}

let sameNode = new Node(1);

let l1 = new LinkedList();
// let node1 = new Node(1);
// let node2 = new Node(0);
// let node3 = new Node(1);
// l1.addNode(node1);
// l1.addNode(node2);
l1.addNode(sameNode);
// l1.addNode(node3);
// printLinkedList(l1);


let l2 = new LinkedList();
let node4 = new Node(8);
let node5 = new Node(7);
let node6 = new Node(1);
let node7 = new Node(4);
l2.addNode(node4);
l2.addNode(sameNode);
l2.addNode(node5);
l2.addNode(node6);
l2.addNode(node7);
printLinkedList(l1);
printLinkedList(l2);


console.log(intersection(l1, l2));
console.log(intersection2(l1, l2));
