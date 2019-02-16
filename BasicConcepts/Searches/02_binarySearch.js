/*

If elements in an array are sorted, a binary search is a more efficient method to find an element.

***Psuedocode***
input1: item that equals some value
input2: a sorted array that contains a list of values

declare left pointer as 0, representing the start of array
declare right pointer as the value that represents the end of array (array.length - 1)
declare a mid point and set it to null
while loop while left pointer value is less than or equal to right pointer value
    set mid pointer to the halfway point of the left and right pointer
    if item equals array[mid]
        return true
    else
        if item is less than array[mid]
            set right pointer to equal mid - 1
        else 
            set left pointer to equal mid + 1
return false

***Things To Note***
Array input must be sorted, if not then sort it at the start of the function.
Three pointers, left, right and mid, are declared.
A while loop is used.
An if/else statement is nested in the else of a parent if/else statement.

***Complexity***
The binary search has a time complexity of O(logn).

*/


const binarySearch = (item, array) => {
    let left = 0;
    let right = array.length - 1;
    let mid = null;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (item === array[mid]) {
            return true;
        } else {
            if (item < array[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return false;
};


// sorted arrays
let arr1 = [-2, 1, 5, 8];
let arr2 = [-5, 0, 1, 12, 23, 140];

console.log(binarySearch(2, arr1));  // false
console.log(binarySearch(0, arr2));  // true