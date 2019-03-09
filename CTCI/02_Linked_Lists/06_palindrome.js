/*

Palindrome: Implement a function to check if a linked list is a palindrome.

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

const palindrome = (linkedList) => {
    let store = [];
    let node = linkedList.head;
    while (node !== null) {
        store.push(node.value);
        node = node.next;
    }
    let end = store.length - 1;
    node = linkedList.head;
    while (node !== null) {
        if (node.value !== store[end]) {
            return false;
        }
        node = node.next;
        end--;
    }
    return true;
};


let l1 = new LinkedList(new Node(1));
let node2 = new Node(0);
let node3 = new Node(1);
l1.addNode(node2);
l1.addNode(node3);
printLinkedList(l1);
console.log(palindrome(l1), true);

let l2 = new LinkedList(new Node(9));
let node4 = new Node(8);
let node5 = new Node(7);
let node6 = new Node(1);
l2.addNode(node4);
l2.addNode(node5);
l2.addNode(node6);
printLinkedList(l2);
console.log(palindrome(l2), false);

let l3 = new LinkedList(new Node(9));
let node7 = new Node(9);
// let node8 = new Node(1);
l3.addNode(node7);
// l3.addNode(node8);
printLinkedList(l3);
console.log(palindrome(l3), true);

let l4 = new LinkedList(new Node(9));
let node9 = new Node(9);
let node10 = new Node(7);
let node11 = new Node(1);
l4.addNode(node9);
l4.addNode(node10);
l4.addNode(node11);
printLinkedList(l4);
console.log(palindrome(l4), false);