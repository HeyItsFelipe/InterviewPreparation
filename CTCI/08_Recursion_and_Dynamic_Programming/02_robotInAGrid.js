/*

Robot in a Grid: Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
The robot can only move in two directions, right and down, but certain cells are "off limits" such that
the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to
the bottom right.

*/

const robotInAGrid = (grid) => {

    let path = [];
    let done = false;

    const findPath = (row, col) => {
        if (row === grid.length - 1 && col === grid[0].length - 1) {
            done = true;
            return 0;
        }

        if (row > grid.length - 1 || col > grid[0].length - 1) {
            path.pop();
            return 1;
        }

        if (grid[row][col] === 'X') {
            path.pop();
            return 1;
        }

        path.push([row + 1, col]);
        let noPath1 = findPath(row + 1, col);
        let noPath2 = 0;

        if (!done) {
            path.push([row, col + 1]);
            noPath2 = findPath(row, col + 1);
        }

        if (noPath1 + noPath2 === 2) {
            path.pop();
        }

        return 0;
    };
    path.push([0, 0]);
    findPath(0, 0);
    return path;
};


let g = [
    [0, 0, 0, 'X'],
    ['X', 0, 0, 0],
    ['X', 0, 'X', 0]
];
console.log(robotInAGrid(g));

var grid = [
    ['0', '0', '0', '0'],
    ['0', 'X', '0', 'X'],
    ['X', '0', '0', '0'],
];
console.log(robotInAGrid(grid));