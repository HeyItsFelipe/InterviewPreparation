/*

Assume you have a method isSubstring which checks if one word is a substring
of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one
call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").

*/

const isSubstring = (string1, string2) => {
    return string1.includes(string2);
};

const stringRotation = (s1, s2) => {
    if (s1.length !== s2.length) {
        return false;
    }
    return isSubstring(s1 + s1, s2);
};


console.log(stringRotation("waterbottle", "erbottlewat"), true);
console.log(stringRotation("waterbottlea", "erbottlewat"), false);
console.log(stringRotation("", ""), true);
console.log(stringRotation("a", ""), false);
console.log(stringRotation("cat", "atc"), true);
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);
