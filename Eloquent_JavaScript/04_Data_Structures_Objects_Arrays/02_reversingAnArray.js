/*

Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.

*/

const reverseArray = (array) => {
    let newArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
};

const reverseArrayInPlace = (array) => {
    let i = 0;
    let j = array.length - 1;
    let temp = null;

    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return array;
};


console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([1]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1]));