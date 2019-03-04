/*

Implement an algorithm to find the kth to last element of a singly linked list.

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
        this.length = 0;
        if (value !== null) {
            this.head = new Node(value);
            this.length++;
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
        this.length++;
    }
}

const kthToLast = (k, linkedList) => {
    if (k === 0) {
        return null;
    }
    let store = [];
    let node = linkedList.head;
    while (node !== null) {
        store.push(node.value);
        node = node.next;
    }

    if (store[store.length - k] !== undefined) {
        return store[store.length - k];
    }
    return null;
};

const kthToLast2 = (k, linkedList) => {
    if (k === 0 || k > linkedList.length) {
        return null;
    }
    let index = linkedList.length - k;
    let node = linkedList.head;
    for (let i = 0; i < index; i++) {
        node = node.next;
    }
    return node.value;
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
l.add(2);
l.add(3);
l.add(4);
l.add(5);

console.log(l);
printLinkedList(l);
console.log(kthToLast2(6, l));
printLinkedList(l);