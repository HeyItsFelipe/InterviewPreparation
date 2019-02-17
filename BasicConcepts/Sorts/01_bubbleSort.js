/*

Bubble sort  "bubbles" larger values to end of array.
It is not an optimal sort, but a good teaching tool.
Sorts array in place.

***Psuedocode***
input1: array of values

declare a swap boolean variable to null
declare a temp variable to null
do
    set swap to false
    for loop over array, ending at array.length-1
        if current array element is greater than the element after it
            set temp to current array element
            set current array element to value of element after it
            set value of element after it to temp
            set swap to true
while swap is true
return array

***Things To Note***
Bubblesort uses a swap boolean variable, used for do-while loop.
Bubblesort uses a temp variable, used for swapping.
Bubblesort uses a do while loop.

***Complexity***
Bubble sort has a quadratic time complexity, O(n^2), as it is a
nested loop.
Bubble sort has a constant space complexity, O(1), as only one pointer is
needed to traverse the array.

*/


const bubbleSort = (array) => {
    let swap = null;
    let temp = null;
    do {
        swap = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap);

    return array;
};

let arr = [1, -4, 6, 3, 2];
bubbleSort(arr);
console.log(arr);