/*

Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #

When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.

*/

let board1 = "";
let size1 = 8;
let shiftedRow = true;
for (let i = 1; i < size1 * size1 + 1; i++) {
    if (shiftedRow) {
        if (i % 2 === 0) {
            board1 += "#"
        } else {
            board1 += " "
        }
    } else {
        if (i % 2 === 0) {
            board1 += " "
        } else {
            board1 += "#"
        }
    }
    if (i % size1 === 0) {
        board1 += "\n";
        shiftedRow = !shiftedRow;
    }
}
console.log(board1);


let board2 = "";
let size2 = 6;
for (let i = 0; i < size2; i++) {
    for (let j = 0; j < size2; j++) {
        if ((i + j) % 2 === 0) {
            board2 += " ";
        } else {
            board2 += "#";
        }
    }
    board2 += "\n";
}

console.log(board2);