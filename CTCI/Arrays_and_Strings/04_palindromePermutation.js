/*

Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

Example:
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cta", etc.)

*/

const palindromePermutation = (string) => {
    let str = string.toLowerCase().split(' ').join('');
    let store = {};
    let length = 0;
    for (let i = 0; i < str.length; i++) {
        if (store[str[i]]) {
            store[str[i]]--;
            if (store[str[i]] === 0) {
                delete store[str[i]];
                length--;
            }
        } else {
            store[str[i]] = 1;
            length++;
        }
    }
    return length <= 1;
};

console.log(palindromePermutation("Tact Coa"), true);
console.log(palindromePermutation(""), true);
console.log(palindromePermutation("   "), true);
console.log(palindromePermutation("a"), true);
console.log(palindromePermutation("ab ab b"), true);
console.log(palindromePermutation("A man a plan a canal panama"), true);
console.log(palindromePermutation("abcedf"), false);
console.log(palindromePermutation("a b"), false);
console.log(palindromePermutation("aabbcd"), false);