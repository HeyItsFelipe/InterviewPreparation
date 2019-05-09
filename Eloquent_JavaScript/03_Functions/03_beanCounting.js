/*

Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.

Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.

*/

const countBs = (string) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'B') {
            count++;
        }
    }
    return count;
};

console.log(countBs('aBcabcABC'));



const countChar = (string, character) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count++;
        }
    }
    return count;
};

console.log(countChar('aBcabcABC', 'c'));
console.log(countChar('aBcabcABC', 'a'));
console.log(countChar('aBcabcABC', 'E'));
console.log(countChar('aBcabcABC', 'A'));