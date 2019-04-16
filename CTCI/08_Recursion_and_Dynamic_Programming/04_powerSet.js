/*

Power Set: Write a method to return all subsets of a set.

*/

const powerSet = (array) => {
    /*
    let result = []
    recurse(arr, index) {
        result.push(arr);
        for i=0
            recurse(arr, index + 1);


    }
    recurse([], 0);
    [1,2,3] = [[], [1], [1,2], [1,2,3], [2], [2,3], [3]]
    */
};

console.log(magicIndex([-4, -2, 1, 3, 9]));  // 3
console.log(magicIndex([-2, 1, 11, 13, 19]));  // 1
console.log(magicIndex([-2, -1, 11, 13, 19]));  // -1
console.log(magicIndex([-10, -5, 2, 2, 2, 3, 4, 8, 9, 12, 13]));  // 2

console.log(magicIndex2([-4, -2, 1, 3, 9]));  // 3
console.log(magicIndex2([-2, 1, 11, 13, 19]));  // 1
console.log(magicIndex2([-2, -1, 11, 13, 19]));  // -1
console.log(magicIndex2([-10, -5, 2, 2, 2, 3, 4, 8, 9, 12, 13]));  // -1, Incorrect, work work with non-distinct values.

console.log(magicIndex3([-10, -5, 2, 2, 2, 3, 4, 8, 9, 12, 13]));  // 2
console.log(magicIndex3([4, 4, 4, 4, 4, 4]));  // 4