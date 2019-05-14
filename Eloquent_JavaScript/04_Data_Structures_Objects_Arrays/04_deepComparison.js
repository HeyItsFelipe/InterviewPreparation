/*

Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties
of objects to compare them.

*/

const deepEqual = (value1, value2) => {
    if (typeof value1 !== typeof value2) {
        return false;
    }
    if (typeof value1 === "object" && typeof value2 === "object") {
        let keys = Array.from(new Set(Object.keys(value1).concat(Object.keys(value2))));

        for (let i = 0; i < keys.length; i++) {
            if (value1[keys[i]] === undefined || value2[keys[i]] === undefined) {
                return false;
            }
            if (deepEqual(value1[keys[i]], value2[keys[i]]) === false) {
                return false;
            }
        }
    }

    if (typeof value1 !== "object" && typeof value2 !== "object" && value1 !== value2) {
        return false;
    }

    return true;
};

console.log(deepEqual(1, 1));
let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));