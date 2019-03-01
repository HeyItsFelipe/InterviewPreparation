/*

Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

*/

const rotateMatrix = (array) => {
    if (array.length !== array[0].length) {
        return null;
    }
    let temp = null;
    for (let i = 0; i < Math.floor(array.length / 2); i++) {

        for (let j = 0; j < array[0].length - 1 - (2 * i); j++) {

            temp = array[i][i + j];
            array[i][i + j] = array[i + j][array.length - 1 - i];
            array[i + j][array.length - 1 - i] = temp;

            temp = array[i][i + j];
            array[i][i + j] = array[array.length - 1 - i][array.length - 1 - j - i];
            array[array.length - 1 - i][array.length - 1 - j - i] = temp;

            temp = array[i][i + j];
            array[i][i + j] = array[array.length - 1 - j - i][i];
            array[array.length - 1 - j - i][i] = temp;

        }

    }
    return array;
};

const rotateMatrix2 = (matrix) => {
    if (matrix.length !== matrix[0].length) {
        return null;
    }

    for (let layer = 0; layer < Math.floor(matrix.length / 2); layer++) {
        let first = layer;
        let last = matrix.length - 1 - layer;

        for (let rotation = first; rotation < last; rotation++) {
            let offset = rotation - layer;
            let start = matrix[first][rotation];

            matrix[first][rotation] = matrix[last - offset][first];
            matrix[last - offset][first] = matrix[last][last - offset];
            matrix[last][last - offset] = matrix[rotation][last];
            matrix[rotation][last] = start;

        }
    }
    return matrix;
};

console.log(rotateMatrix([[0, 1, 2], [3, 4, 5], [6, 7, 8]]));
console.log(rotateMatrix([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]]));
console.log(rotateMatrix([[2]]));
console.log(rotateMatrix([[]]));
console.log(rotateMatrix([[[1, 2], [3, 4]], [[3, 1], [4, 2]], [[4, 3], [2, 1]], [[2, 4], [1, 3]]]));

