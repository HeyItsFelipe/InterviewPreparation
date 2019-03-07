/*

Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
to be after the elements less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right partitions.

EXAMPLE
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

*/

class Node {
    constructor(value = null) {
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

const partition = (partition, linkedList) => {
    let leastHead = null;
    let leastTail = null;
    let greatestHead = null;
    let greatestTail = null;
    let node = linkedList.head;
    while (node !== null) {
        if (node.value < partition) {
            if (leastHead === null) {
                leastHead = node;
                leastTail = node;
            } else {
                leastTail.next = node;
                leastTail = leastTail.next;
            }
        } else {
            if (greatestHead === null) {
                greatestHead = node;
                greatestTail = node;
            } else {
                greatestTail.next = node;
                greatestTail = greatestTail.next;
            }
        }
        node = node.next;
    }
    if (leastTail === null || greatestTail === null) {
        return linkedList;
    }
    leastTail.next = greatestHead;
    greatestTail.next = null;
    linkedList.head = leastHead;
};


let l = new LinkedList(new Node(4));
console.log(l);

let node2 = new Node(17);
let node3 = new Node(53);
let node4 = new Node(21);
let node5 = new Node(12);
l.addNode(node2);
l.addNode(node3);
l.addNode(node4);
l.addNode(node5);
console.log(l);
printLinkedList(l);
partition(18, l);
printLinkedList(l);