/*

Merge sort takes a divide and conquer approach to sort an array, which indicates recursion.
The merge sort function is the divide.
The merge function is the conquer.

***Psuedocode***
merge function takes in a leftSorted array and a rightSorted array
    declare a result variable as an empty array
    declare a variable i and set to 0, representing the starting index of the leftSorted array
    declare a variable j and set to 0, representing the starting index of the rightSorted array
    while loop while i is less than leftSorted.length and j is less than rightSorted.length
        if leftSorted[i] value is less than rightSorted[j] value
            push leftSorted[i] value into result variable array
            increment i by 1
        else
            push rightSorted[j] value into result variable array
            increment j by 1
    return result concatted with leftSorted.slice(i) concatted with rightSorted(j)

mergeSort function takes in an array of values
    base case: if array length is less than one, array is returned
    recursive case:
    declare mid variable as half the array length
    declare leftHalf variable and set it to left half of the array by using slice(0, mid)
    declare rightHalf variable and set it to right half of the array by using slice(mid)
    declare sortedLeft variable and set it to result of mergeSort(leftHalf)
    declare sortedRight variable and set it to result of mergeSort(rightHalf)
    return merge(sortedLeft, sortedRight)


***Things To Note***
The merge function declares an empty result array to push values into.
The merge function uses a while loop.
The merge function concatenates leftover elements at the end.
The mergeSort function has a base case that returns when the length of array is one.
The mergeSort function uses javascript's native slice function to separate left and right half.
The mergeSort function invokes and returns the merge function, taking in the sorted left and right halves as arguments.

***Complexity***
Merge sort has a time complexity of O(nlog(n)).
Merge sort has a space complexity of O(n).

*/


const merge = (leftSorted, rightSorted) => {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < leftSorted.length && j < rightSorted.length) {
        if (leftSorted[i] < rightSorted[j]) {
            result.push(leftSorted[i]);
            i++;
        } else {
            result.push(rightSorted[j]);
            j++;
        }
    }
    return result.concat(leftSorted.slice(i)).concat(rightSorted.slice(j));
};

const mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    let mid = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, mid);
    let rightHalf = array.slice(mid);
    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);
    return merge(sortedLeft, sortedRight);
};

let arr = [1, -4, 6, 3, 2];
console.log(mergeSort(arr));
console.log(mergeSort([]));
console.log(mergeSort([-5, -14]));