/*

There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.

Example:
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false

*/

const oneAway = (string1, string2) => {

    let editTotal = 0;
    let i = 0;
    let j = 0;

    if (Math.abs(string1.length - string2.length) > 1) {
        return false;
    }

    // if character was removed
    if (string1.length > string2.length) {
        while (i < string1.length && j < string2.length) {
            if (string1[i] !== string2[j]) {
                editTotal++;
                j--;
            }
            if (editTotal > 1) {
                return false;
            }
            i++;
            j++;
        }
    }
    // if character was added 
    else if (string1.length < string2.length) {
        while (i < string1.length && j < string2.length) {
            if (string1[i] !== string2[j]) {
                editTotal++;
                j++;
            }
            if (editTotal > 1) {
                return false;
            }
            i++;
            j++;
        }
    }
    // if character was replaced
    else {
        while (i < string1.length && j < string2.length) {
            if (string1[i] !== string2[j]) {
                editTotal++;
            }
            if (editTotal > 1) {
                return false;
            }
            i++;
            j++;
        }
    }
    return true;
};

const oneAway2 = (string1, string2) => {
    if (Math.abs(string1.length - string2.length) > 1) {
        return false;
    }

    // determines if character was removed, added, or replaced
    var operation = string1.length - string2.length;

    let i = 0;
    let j = 0;
    let editTotal = 0;

    while (i < string1.length && j < string2.length) {
        if (string1[i] !== string2[j]) {
            editTotal++;

            // if character was removed
            if (operation === -1) {
                j++;
            }

            // if character was added
            if (operation === 1) {
                j--;
            }
        }
        if (editTotal > 1) {
            return false;
        }
        i++;
        j++;
    }
    return true;
};

console.log(oneAway2('pale', 'ple'), true);
console.log(oneAway2('pales', 'ple'), false);
console.log(oneAway2('pale', 'bale'), true);
console.log(oneAway2('pale', 'bake'), false);
console.log(oneAway2('', ''), true);
console.log(oneAway2('pale', 'pxle'), true);
console.log(oneAway2('pale', 'pate'), true);
console.log(oneAway2('pale', 'pald'), true);
console.log(oneAway2('answer', 'answers'), true);
console.log(oneAway2('technology', 'etechnology'), true);
console.log(oneAway2('pale', 'pl'), false);
console.log(oneAway2('paless', 'pale'), false);
console.log(oneAway2('pale', 'bales'), false);
console.log(oneAway2('1122334455667788', '9911223344556677'), false);
console.log(oneAway2('45678', '1239'), false);
console.log(oneAway2('abcd', 'dcba'), false);


