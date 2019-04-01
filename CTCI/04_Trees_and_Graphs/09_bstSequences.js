/*

BST Sequences: A binary search tree was created by traversing through an array from left to right
and inserting each element. Given a binary search tree with distinct elements, print all possible
arrays that could have led to this tree.

EXAMPLE
Input:
Output: {2, 1, 3}, {2, 3, 1}

*/

// TODO: NEED TO STUDY THIS MORE!!!  APPEARS TO BE NESTED RECURSION!!!

class BSTNode {
    constructor(value = null) {
        if (value !== null) {
            this.value = value;
            this.left = null;
            this.right = null;

        }
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    addNode(newNode, node = this.root) {
        if (this.root === null) {
            this.root = new BSTNode(newNode);
        } else {
            if (newNode <= node.value) {
                if (node.left === null) {
                    node.left = new BSTNode(newNode);
                } else {
                    this.addNode(newNode, node.left);
                }
            } else {
                if (node.right === null) {
                    node.right = new BSTNode(newNode);
                } else {
                    this.addNode(newNode, node.right);
                }
            }
        }
    }

}


const weave = (array1, array2) => {
    let result = [];
    const recurse = (array1, array2, prefix) => {
        // console.log(array1);
        // console.log(array2);
        // console.log(prefix);
        // console.log("--------------------");
        if (array1.length === 0 || array2.length === 0) {
            result.push(prefix.concat(array1, array2));
            // console.log(result);
            // console.log('----------------------');
            return;
        }

        let prefix1 = prefix.slice();
        let prefix2 = prefix.slice();
        let carray1 = array1.slice();
        let carray2 = array2.slice();

        prefix1.push(carray1.shift());
        recurse(carray1, carray2, prefix1);

        prefix2.push(carray2.shift());
        recurse(array1.slice(), carray2, prefix2);
    }
    recurse(array1, array2, []);
    return result;
};

const weaveArrayPerms = (nodeValue, leftSequence, rightSequence) => {
    const permsResult = [];

    if (leftSequence[0] && rightSequence[0]) {
        for (const leftSeq of leftSequence) {
            for (const rightSeq of rightSequence) {
                const weaved = weave(leftSeq, rightSeq);
                for (const perm of weaved) {
                    permsResult.push([nodeValue, ...perm]);
                }
            }
        }
    }
    else { // Any remaining sequence
        for (const perm of [...leftSequence, ...rightSequence]) {
            permsResult.push([nodeValue, ...perm]);
        }
    }

    return permsResult;
};

const bstSequences = (bst) => {

    const recurse = (node) => {
        if (node === null) {
            return [[]];
        }
        console.log(node.value);
        console.log(node.left);
        if (node.left === null && node.right === null) {
            console.log('return' + node.value);
            return [[node.value]];
        }
        let left = recurse(node.left);
        let right = recurse(node.right);
        return weaveArrayPerms(node.value, left, right);
    };
    return recurse(bst.root);

};

let bst1 = new BST();
[2, 1, 3].forEach(node => {
    bst1.addNode(node);
});



let bst2 = new BST();
[4, 2, 3, 1, 5].forEach(node => {
    bst2.addNode(node);
});


let bst3 = new BST();
[1, 2, 2, 1, 1, 1].forEach(node => {
    bst3.addNode(node);
});

/*

Zoom Link: https://zoom.us/j/6703196599
https://www.youtube.com/channel/UCKTSy3Jsa2zczjAptE7isyQ/videos?view_as=subscriber
*/



// let a = [1, 2];
// let b = [3, 4];
// console.log(weave(a, b));
// let c = [1];
// let d = [3];
// console.log(weave(c, d));
// let e = [1, 2, 3];
// let f = [4];
// console.log(weave(e, f));

// console.log(weaveArrayPerms(2, [[1]], [[3]]));

// console.log(bstSequences(bst1));
// console.log(bstSequences(bst2));
console.log(bstSequences(bst3));