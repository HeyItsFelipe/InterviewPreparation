/*

Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays.

*/

const flatten = (array) => {
    let flattenedArray = array.reduce((total, element, index, array) => {
        total = total.concat(element);
        return total;
    }, []);

    return flattenedArray;
};

console.log(flatten([[1, 2, 3], [4, 5, 6]]));