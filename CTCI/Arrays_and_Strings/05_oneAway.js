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
    } else if (string1.length < string2.length) {
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
    } else {
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

console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'ple'), false);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
console.log(oneAway('', ''), true);
console.log(oneAway('pale', 'pxle'), true);
console.log(oneAway('pale', 'pate'), true);
console.log(oneAway('pale', 'pald'), true);
console.log(oneAway('answer', 'answers'), true);
console.log(oneAway('technology', 'etechnology'), true);
console.log(oneAway('pale', 'pl'), false);
console.log(oneAway('paless', 'pale'), false);
console.log(oneAway('pale', 'bales'), false);
console.log(oneAway('1122334455667788', '9911223344556677'), false);
console.log(oneAway('45678', '1239'), false);
console.log(oneAway('abcd', 'dcba'), false);


