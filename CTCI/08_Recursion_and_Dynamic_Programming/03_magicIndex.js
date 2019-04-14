/*

Magic Index: A magic index in an array A [0 ... n-1] is defined to be an index such that A[i] =
i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in
array A.
FOLLOW UP
What if the values are not distinct?

*/

const magicIndex = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === i) {
            return i;
        }
    }
    return -1;
};

const magicIndex2 = (array) => {
    let midIndex = null;
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        midIndex = Math.floor((left + right) / 2);
        if (midIndex === array[midIndex]) {
            return midIndex;
        }
        if (midIndex > array[midIndex]) {
            left = midIndex + 1;
        } else {
            right = midIndex - 1;
        }
    }
    return -1;
};

const magicIndex3 = (arr) => {
    let start = 0;
    let end = arr.length - 1;

    const recurse = (start, end) => {
        if (end < start) {
            return -1;
        }

        let midIndex = Math.floor((start + end) / 2);
        let midValue = arr[midIndex];

        if (midIndex === midValue) {
            return midIndex;
        }

        let leftIndex = Math.min(midIndex - 1, midValue);
        let left = recurse(start, leftIndex);

        if (left >= 0) {
            return left;
        }

        let rightIndex = Math.max(midIndex + 1, midValue);
        return recurse(rightIndex, end);
    };

    return recurse(start, end);

};

console.log(magicIndex([-4, -2, 1, 3, 9]));  // 3
console.log(magicIndex([-2, 1, 11, 13, 19]));  // 1
console.log(magicIndex([-2, -1, 11, 13, 19]));  // -1
console.log(magicIndex([-10, -5, 2, 2, 2, 3, 4, 8, 9, 12, 13]));  // 2

console.log(magicIndex2([-4, -2, 1, 3, 9]));  // 3
console.log(magicIndex2([-2, 1, 11, 13, 19]));  // 1
console.log(magicIndex2([-2, -1, 11, 13, 19]));  // -1
console.log(magicIndex2([-10, -5, 2, 2, 2, 3, 4, 8, 9, 12, 13]));  // -1, Incorrect, won't work with non-distinct values.

console.log(magicIndex3([-10, -5, 2, 2, 2, 3, 4, 8, 9, 12, 13]));  // 2
console.log(magicIndex3([4, 4, 4, 4, 4, 4]));  // 4