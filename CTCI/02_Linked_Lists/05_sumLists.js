/*

Sum Lists: You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a
function that adds the two numbers and returns the sum as a linked list.

EXAMPLE
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
Output: 2 -> 1 -> 9. That is, 912.

FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem.

EXAMPLE
Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
Output: 9 -> 1 -> 2. That is, 912.

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

const sumLists = (linkedList1, linkedList2) => {

    let node1 = linkedList1.head;
    let node2 = linkedList2.head;
    let i = 0;
    let total1 = 0;
    let total2 = 0;

    while (node1 !== null || node2 !== null) {
        if (node1 !== null) {
            total1 += Math.pow(10, i) * node1.value;
            node1 = node1.next;
        }
        if (node2 !== null) {
            total2 += Math.pow(10, i) * node2.value;
            node2 = node2.next;
        }
        i++;
    }

    let total = total1 + total2;
    let resultLinkedList = new LinkedList();
    let node = resultLinkedList.head;
    let digit = null;
    while (total > 0) {
        digit = total % 10;
        total = Math.floor(total / 10);
        if (node === null) {
            resultLinkedList.addNode(new Node(digit));
        } else {
            node.next = new Node(digit);
            node = node.next;
        }
    }

    return resultLinkedList;
};

const sumListsForwardOrder = (linkedList1, linkedList2) => {

    let node1 = linkedList1.head;
    let node2 = linkedList2.head;
    let total1 = 0;
    let total2 = 0;

    while (node1 !== null || node2 !== null) {
        if (node1 !== null) {
            total1 = total1 * 10 + node1.value;
            node1 = node1.next;
        }
        if (node2 !== null) {
            total2 = total2 * 10 + node2.value;
            node2 = node2.next;
        }
    }

    let total = total1 + total2;
    let resultLinkedList = new LinkedList();
    let node = null;
    let digit = null;
    while (total > 0) {
        digit = total % 10;
        total = Math.floor(total / 10);
        if (resultLinkedList.head === null) {
            resultLinkedList.addNode(new Node(digit));
        } else {
            node = new Node(digit);
            node.next = resultLinkedList.head;
            resultLinkedList.head = node;
        }
    }

    return resultLinkedList;
};

let l1 = new LinkedList(new Node(1));
let node2 = new Node(0);
let node3 = new Node(1);
l1.addNode(node2);
l1.addNode(node3);
printLinkedList(l1);

let l2 = new LinkedList(new Node(9));
let node4 = new Node(8);
let node5 = new Node(7);
let node6 = new Node(1);
l2.addNode(node4);
l2.addNode(node5);
l2.addNode(node6);
printLinkedList(l2);

printLinkedList(sumLists(l1, l2));


let l3 = new LinkedList(new Node(1));
let node7 = new Node(0);
let node8 = new Node(1);
l3.addNode(node7);
l3.addNode(node8);
printLinkedList(l3);

let l4 = new LinkedList(new Node(9));
let node9 = new Node(8);
let node10 = new Node(7);
let node11 = new Node(1);
l4.addNode(node9);
l4.addNode(node10);
l4.addNode(node11);
printLinkedList(l4);

printLinkedList(sumListsForwardOrder(l3, l4));