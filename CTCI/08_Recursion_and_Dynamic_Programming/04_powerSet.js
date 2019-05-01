/*

Power Set: Write a method to return all subsets of a set.

*/

const powerSet = (set) => {

    let subsets = [];

    const recurse = (currentSet, remainingSet) => {
        console.log("[" + currentSet + "]" + ' ' + "[" + remainingSet + "]");

        subsets.push(currentSet);
        let arg1 = null;
        let arg2 = null;

        for (let i = 0; i < remainingSet.length; i++) {
            arg1 = currentSet.concat([remainingSet[i]]);
            arg2 = remainingSet.slice(i + 1);
            recurse(arg1, arg2);
        }
    };

    recurse([], set);
    return subsets;

};

console.log(powerSet([1, 2]));
console.log(powerSet([1, 2, 3]));