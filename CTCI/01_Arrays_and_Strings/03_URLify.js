/*

Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters.

Example:
Input: "Mr John Smith   "
Output: "Mr%20John%Smith"

*/

const urlify = (string) => {
    let s = string.slice().trim();
    return s.split(' ').join('%20');
};

console.log(urlify('Mr John Smith   '));