/*

Insertion sort has a "barrier" that splits the array.
The left side is assumed to be sorted and values are spliced in from the right side.
It is a good sort for almost sorted arrays.

***Psuedocode***
input1:  array of values

declare a spliced variable and set it to null
for loop over array, but begin iterator i at index of 1
    for loop over array, begin at index of 0, and have condition where iterator j be less than i
        if array[j] is greater than array[i]
            set spliced equal to result of splicing out value at index i
            splice in spliced[0] at index j
return array

***Things To Note***
Insertion sort uses native javascript splice.
Know that using javascript splice returns an array, so use spliced[0] to splice value back into array.

***Complexity***
Insertion sort has a quadratic time complexity, O(n^2), as it is a nested loop.
Insertion sort has a constant space complexity, O(1), as it needs a variable to contain spliced value.

*/


const insertionSort = (array) => {
    let spliced = null;
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[i]) {
                spliced = array.splice(i, 1);
                array.splice(j, 0, spliced[0]);
            }
        }
    }
    return array;
};

let arr = [1, -4, 6, 3, 2];
insertionSort(arr);
console.log(arr);