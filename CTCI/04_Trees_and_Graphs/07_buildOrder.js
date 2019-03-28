/*

Build Order: You are given a list of projects and a list of dependencies (which is a list of pairs of
projects, where the second project is dependent on the first project). All of a project's dependencies
must be built before the project is. Find a build order that will allow the projects to be built. If there
is no valid build order, return an error.

EXAMPLE
Input:
projects: a, b, c, d, e, f
dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
Output: f, e, a, b, d, c

*/

const buildOrder = (projects, dependencies) => {

    let result = [];

    for (let i = 0; i < projects.length; i++) {
        found = false;
        let j = 0;
        while (j < dependencies.length && !found) {
            if (dependencies[j][1] === projects[i]) {
                found = true;
            }
            j++;
        }
        if (!found) {
            result.push(projects[i]);
        }
    }

    let doNotPush = [];
    for (let i = 0; i < result.length && result.length <= projects.length; i++) {
        for (let j = 0; j < dependencies.length; j++) {
            if (dependencies[j][0] === result[i]) {
                if (doNotPush.indexOf(dependencies[j][1]) !== -1) {
                    throw Error;
                }
                if (result.indexOf(dependencies[j][1]) === -1) {
                    result.push(dependencies[j][1]);
                }
            }
        }
        doNotPush.push(result[i]);
    }
    return result;
};


let project1 = ['a', 'b', 'c', 'd', 'e', 'f'];
let dependencies1 = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
console.log(buildOrder(project1, dependencies1));  // ['e', 'f', 'b', 'a', 'd', 'c']

let project2 = ['a'];
let dependencies2 = [[]];
console.log(buildOrder(project2, dependencies2));  // ['a']

let project3 = [9, 1, 5, 6];
let dependencies3 = [[]];
console.log(buildOrder(project3, dependencies3));  // [9, 1, 5, 6]

let project4 = [9, 1, 5, 6];
let dependencies4 = [[5, 6], [1, 5], [9, 1]];
console.log(buildOrder(project4, dependencies4));  // [9, 1, 5, 6]

let project5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let dependencies5 = [[1, 2], [1, 3], [2, 4], [2, 6], [3, 5], [3, 7], [4, 8], [8, 11],
[8, 12], [6, 10], [5, 10], [7, 9], [10, 13], [9, 13], [13, 14]];
console.log(buildOrder(project5, dependencies5));  // [1, 15, 2, 3, 4, 6, 5, 7, 8, 10, 9, 11, 12, 13, 14]

let project6 = [9, 1, 5, 6];
let dependencies6 = [[6, 5], [5, 1], [1, 9], [9, 5]];
console.log(buildOrder(project6, dependencies6));  // Throws Error
