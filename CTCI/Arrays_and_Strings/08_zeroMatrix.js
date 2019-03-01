/*

Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to O.

*/

const zeroMatrix = (array) => {
    let rowZero = [];
    let colZero = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (array[i][j] === 0) {
                rowZero.push(i);
                colZero.push(j);
            }
        }
    }

    for (let i = 0; i < rowZero.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            array[rowZero[i]][j] = 0;
        }
    }

    for (let i = 0; i < colZero.length; i++) {
        for (let j = 0; j < array.length; j++) {
            array[j][colZero[i]] = 0;
        }
    }

    return array;
};

console.log(zeroMatrix([[1, 0], [1, 1]]));
console.log(zeroMatrix([[1, 0, 3], [4, 5, 6], [7, 0, 9]]));
console.log(zeroMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
console.log(zeroMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 0, 11, 12], [13, 14, 15, 0], [17, 18, 19, 20]]));
console.log(zeroMatrix([[0, 2, 3, 4], [5, 6, 7, 8], [9, 0, 11, 12], [13, 14, 15, 0], [17, 18, 19, 20]]));