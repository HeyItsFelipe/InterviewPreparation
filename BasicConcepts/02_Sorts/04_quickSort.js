/*

Quick sort uses a "partition" element, which is this example uses the last element.
Other quick sort examples have the beginning element or middle element as the partition.
Values greater than the partition are placed in one array and values less than the
partition are placed in another array.
This is a divide and conquer algorithm, so recursion will be used.
Quick sort is not efficient if elements are already sorted.

***Psuedocode***
input1: an array of values

base case:
if array length less than or equal to one, return array
recursive case:
declare partition variable as value of last element in array
declare lesserThanPartition as an empty array which will hold elements less than partition value
declare greaterThanPartition as an empty array which will hold elements greater than partition value
for loop through array as long as iterator, i, is less than array.length-1
    if array[i] is less than partition value
        push array[i] into lesserThanPartition array
    else
        push array[i] into greaterThanPartition array
declare sortedLesserThanPartition variable and set it to result of quickSort(lesserThanPartition)
declare sortedGreaterThanPartition variable and set it to result of quickSort(greaterThanPartition)
return [...sortedLesserThanPartition, partition, ...sortedGreaterThanPartition]

***Things To Note***
The quickSort function has a base case that returns array if array.length is less than or equal to one.
For this quickSort example, partition is value at end of array.
The quickSort function uses a for loop to separate values greater and lesser than partition in two different arrays.
The quickSort function returns the concatenation of the sortedLesserThanPartition, partition, and 
sortedGreaterThanPartition variables.

***Complexity***
Quick sort has a time complexity of O(n^2).
Quick sort has a space complexity of O(log(n)).

*/


const quickSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let partition = array[array.length - 1];
    let lesserThanPartition = [];
    let greaterThanPartition = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < partition) {
            lesserThanPartition.push(array[i]);
        } else {
            greaterThanPartition.push(array[i]);
        }
    }
    let sortedLesserThanPartition = quickSort(lesserThanPartition);
    let sortedGreaterThanPartition = quickSort(greaterThanPartition);
    return [...sortedLesserThanPartition, partition, ...sortedGreaterThanPartition];
};


let arr = [1, -4, 6, 3, 2];
console.log(quickSort(arr));
console.log(quickSort([]));
console.log(quickSort([-5, -14]));