/*

Given two strings, write a method to decide if one is a permutation of the other.

*/

const checkPermutation = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false;
    }

    let store = {};
    let length = 0;

    for (let i = 0; i < string1.length; i++) {
        if (store[string1[i]]) {
            store[string1[i]]++;
        } else {
            store[string1[i]] = 1;
            length++;
        }
    }

    for (let j = 0; j < string2.length; j++) {
        if (store[string2[j]]) {
            store[string2[j]]--;
            if (store[string2[j]] === 0) {
                delete store[string2[j]];
                length--;
            }
        } else {
            return false;
        }
    }

    return length === 0;

};

const checkPermutation2 = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false;
    }
    let s1 = string1.slice().split('').sort().join('');
    let s2 = string2.slice().split('').sort().join('');
    return s1 === s2;
};

console.log(checkPermutation('cat', 'tac'), true);
console.log(checkPermutation('cwer', 'cwet'), false);
console.log(checkPermutation('', ''), true);
console.log(checkPermutation('ccc', 'ccc'), true);
console.log(checkPermutation('aba', 'aab'), true);
console.log(checkPermutation('aba', 'aaba'), false);
console.log(checkPermutation('aba', 'aa'), false);