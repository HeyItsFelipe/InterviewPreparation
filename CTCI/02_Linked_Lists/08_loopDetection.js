/*

Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
beginning of the loop.
DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
as to make a loop in the linked list.
EXAMPLE
Input: A -> B -> C -> D -> E -> C  [the same C as earlier]
Output: C

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

const loopDetection = (linkedList) => {
    let slow = linkedList.head.next;
    let fast = linkedList.head.next.next;
    while ((slow !== null && fast !== null) && slow !== fast) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (slow === null || fast === null) {
        return null;
    }
    fast = linkedList.head;
    while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};

let corruptNode = new Node(2);

let l1 = new LinkedList();
let node1 = new Node(1);
let node2 = new Node(0);
let node3 = new Node(1);
l1.addNode(node1);
l1.addNode(node2);
l1.addNode(node3);
l1.addNode(corruptNode);

let node4 = new Node(8);
let node5 = new Node(7);
let node6 = new Node(1);
let node7 = new Node(4);
l1.addNode(node4);
l1.addNode(node5);
l1.addNode(node6);
l1.addNode(node7);
node7.next = corruptNode;
console.log(loopDetection(l1));

let l2 = new LinkedList();
let corruptNode2 = new Node(4);
let node8 = new Node(9);
l2.addNode(corruptNode2);
l2.addNode(node8);
node8.next = corruptNode2;
console.log(loopDetection(l2));
