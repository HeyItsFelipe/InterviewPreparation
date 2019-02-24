/*

Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?

*/

const isUnique = (string) => {
    for (let i = 0; i < string.length - 1; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                return false;
            }
        }
    }
    return true;
};

console.log(isUnique('dog'), true);
console.log(isUnique('a'), true);
console.log(isUnique('rabbit'), false);
console.log(isUnique(''), true);