/*

A linked list is a data structure that you can add data node onto the end of the list.
This is a simple implementation of a linked list.
Linked lists have a constant time insertion and deletion as compared to arrays, which have
a linear time insertion and deletion.

***Things To Note***
Linked list data structure implementation can be divided into a node object and a linked list object.
For adding a node, you can use a while loop.
For removing the tail node, you can use a previous node and current node pointer, and a while loop.

*/

function Node(value = null) {
    this.value = value;
    this.next = null;
}

function LinkedList(value = null) {
    this.head = null;
    this.length = 0;
    if (value !== null) {
        this.head = new Node(value);
        this.length++;
    }
}

LinkedList.prototype.add = function (value) {
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

LinkedList.prototype.removeTail = function () {
    if (this.head === null) {
        return null;
    }
    if (this.head.next === null) {
        this.head = null;
    } else {
        let previousNode = this.head;
        let currentNode = this.head.next;
        while (currentNode.next !== null) {
            previousNode = previousNode.next;
            currentNode = currentNode.next;
        }
        previousNode.next = null;
    }
    this.length--;
}

let links = new LinkedList(3);
console.log(links);
links.add(5);
console.log(links);
links.removeTail();
console.log(links);
let links2 = new LinkedList();
console.log(links2);
links2.add(4);
links2.add(7);
links2.removeTail();
links2.removeTail();
links2.removeTail();
console.log(links2);