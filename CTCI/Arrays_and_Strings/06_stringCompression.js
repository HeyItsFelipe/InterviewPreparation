/*

Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).

*/

const stringCompression = (string) => {
    let letter = string[0];
    let count = 1;
    let compressedString = '';
    for (let i = 1; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        } else {
            compressedString = compressedString + letter + count;
            count = 1;
            letter = string[i];
        }
        if (compressedString.length >= string.length) {
            return string;
        }
    }
    compressedString = compressedString + letter + count;
    if (compressedString.length >= string.length) {
        return string;
    }
    return compressedString;
};

console.log(stringCompression('aabcccccaaa'), 'a2b1c5a3');
console.log(stringCompression('a'), 'a');
console.log(stringCompression('aa'), 'aa');
console.log(stringCompression('abc'), 'abc');
console.log(stringCompression('aabbcc'), 'aabbcc');
console.log(stringCompression('ababababccab'), 'ababababccab');
console.log(stringCompression('aaa'), 'a3');
console.log(stringCompression('bbbbbb'), 'b6');
console.log(stringCompression('abbbbbbc'), 'a1b6c1');
console.log(stringCompression('aaabccc'), 'a3b1c3');
console.log(stringCompression('hhellllllllooooo!'), 'h2e1l8o5!1');
console.log(stringCompression('woorrrllllddddd'), 'w1o2r3l4d5');
