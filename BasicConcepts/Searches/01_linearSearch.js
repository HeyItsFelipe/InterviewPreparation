/*

A basic linear search is to loop over an array and find the requested element.

***Psuedocode***
input1: item that equals some value
input2: an array that contains a list of values

for loop over each element in array
    if item equals element
        return true
return false

***Complexity***
The linear search has a linear time complexity, O(n).

*/


const linearSearch = (item, array) => {
    for (let i = 0; i < array.length; i++) {
        if (item === array[i]) {
            return true;
        }
    }
    return false;
};

// We can use the native indexOf to linear search.
const linearSearch2 = (item, array) => {
    return (array.indexOf(item) !== -1);
};


console.log(linearSearch2(2, [1, 5, 2, 7]));  // true
console.log(linearSearch2(0, [1, 5, 2, 7]));  // false