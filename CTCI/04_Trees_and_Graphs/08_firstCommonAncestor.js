/*

First Common Ancestor: Design an algorithm and write code to find the first common ancestor
of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not
necessarily a binary search tree.

*/

class BTNode {
    constructor(value = null) {
        if (value !== null) {
            this.value = value;
            this.left = null;
            this.right = null;
            this.parent = null;
        }
    }
}

class BT {
    constructor() {
        this.root = null;
    }
}

const isAncestor = (node1, node2) => {
    if (node1 === null || node2 === null) {
        return false;
    }
    if (node1 === node2) {
        return true;
    }
    let answer1 = false;
    let answer2 = false;
    if (node1.left !== null) {
        answer1 = isAncestor(node1.left, node2);
    }
    if (node1.right !== null) {
        answer2 = isAncestor(node1.right, node2);
    }
    return answer1 || answer2;
};

const firstCommonAncestor = (node1, node2) => {
    let node = node1;
    while (!isAncestor(node, node2)) {
        if (node === null) {
            return null;
        }
        node = node.parent;
    }
    return node.value;
};

let bt = new BT();
let node1 = new BTNode(1);
let node2 = new BTNode(2);
let node3 = new BTNode(3);
let node4 = new BTNode(4);
let node5 = new BTNode(5);
let node6 = new BTNode(6);
let node7 = new BTNode(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node2.parent = node1;
node3.parent = node1;
node4.parent = node2;
node5.right = node6;
node5.parent = node2;
node6.parent = node5;

bt.root = node1;

console.log(firstCommonAncestor(node1, node1));  // 1
console.log(firstCommonAncestor(node1, node2));  // 1
console.log(firstCommonAncestor(node2, node1));  // 1
console.log(firstCommonAncestor(node6, node3));  // 1
console.log(firstCommonAncestor(node3, node6));  // 1
console.log(firstCommonAncestor(node4, node2));  // 2
console.log(firstCommonAncestor(node4, node6));  // 2
console.log(firstCommonAncestor(node5, node3));  // 1
console.log(firstCommonAncestor(node5, node4));  // 2
console.log(firstCommonAncestor(node5, node7));  // null


let a = new BTNode('a');
let b = new BTNode('b');
let c = new BTNode('c');
let d = new BTNode('d');
let e = new BTNode('e');
let f = new BTNode('f');
let g = new BTNode('g');
let h = new BTNode('h');
let i = new BTNode('i');
let j = new BTNode('j');
let k = new BTNode('k');
let l = new BTNode('l');

let bt2 = new BT();
bt2.root = a;

a.left = b;
b.parent = a;
a.right = c;
c.parent = a;
b.left = d;
d.parent = b;
d.left = g;
g.parent = d;
d.right = h;
h.parent = d;
h.right = k;
k.parent = h;
k.left = l;
l.parent = k;
c.left = e;
e.parent = c;
c.right = f;
f.parent = c;
f.left = i;
i.parent = f;
f.right = j;
j.parent = f;

console.log(firstCommonAncestor(g, k));  // d
console.log(firstCommonAncestor(b, i));  // a