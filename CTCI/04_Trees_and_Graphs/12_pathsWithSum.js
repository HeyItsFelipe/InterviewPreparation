/*

Paths with Sum: You are given a binary tree in which each node contains an integer value (which
might be positive or negative). Design an algorithm to count the number of paths that sum to a
given value. The path does not need to start or end at the root or a leaf, but it must go downwards
(traveling only from parent nodes to ch ild nodes).

*/

class BTNode {
    constructor(value = null) {
        if (value !== null) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }
}

class BT {
    constructor() {
        this.root = null;
    }
}

const countPathsWithSumFromNode = (node, targetSum, currentSum = 0) => {
    if (node === null) {
        return 0;
    }
    currentSum += node.value;
    let totalPaths = 0;
    if (currentSum === targetSum) {
        totalPaths++;
    }
    totalPaths += countPathsWithSumFromNode(node.left, targetSum, currentSum);
    totalPaths += countPathsWithSumFromNode(node.right, targetSum, currentSum);
    return totalPaths;
};

const pathsWithSum = (tree, value) => {
    if (tree.root === null) {
        return 0;
    }
    let total = 0;
    const recurse = (node) => {
        if (node === null) {
            return;
        }
        total += countPathsWithSumFromNode(node, value);
        recurse(node.left);
        recurse(node.right);
    }
    recurse(tree.root);
    return total;
};

const pathsWithSum2 = (tree, value) => {
    if (tree.root === null) {
        return 0;
    }
    let hash = {};
    let total = 0;
    const recurse = (node, runningTotal = 0) => {
        if (node === null) {
            return;
        }

        runningTotal += node.value;

        if (hash[runningTotal] === undefined) {
            hash[runningTotal] = 1;
        } else {
            hash[runningTotal]++;
        }

        if (hash[runningTotal - value]) {
            total += hash[runningTotal - value];
        }

        if (runningTotal === value) {
            total++;
        }

        recurse(node.left, runningTotal);
        recurse(node.right, runningTotal);
        hash[runningTotal]--;
        return;
    };
    recurse(tree.root);
    return total;
};

let bt = new BT();
let node1 = new BTNode(10);
let node2 = new BTNode(5);
let node3 = new BTNode(-3);
let node4 = new BTNode(3);
let node5 = new BTNode(2);
let node6 = new BTNode(11);
let node7 = new BTNode(3);
let node8 = new BTNode(-2);
let node9 = new BTNode(1);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;
node4.left = node7;
node4.right = node8;
node5.right = node9;

bt.root = node1;

console.log(pathsWithSum(bt, 11));
console.log(pathsWithSum2(bt, 11));