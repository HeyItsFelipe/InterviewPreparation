/*

The Heavy Pill: You have 20 bottles of pills. 19 bottles have 1.0 gram pills, but one has pills of weight
1.1 grams. Given a scale that provides an exact measurement, how would you find the heavy bottle?
You can only use the scale once.

*/

const theHeavyPill = (numberOfBottles, weight) => {

    if (numberOfBottles < 1 || weight < 1) {
        return null;
    }

    let expectedWeight = numberOfBottles * (numberOfBottles + 1) / 2;

    if (expectedWeight > weight) {
        return null;
    }

    let result = (weight - expectedWeight) / 0.1;
    return Math.round(result);
};

console.log(theHeavyPill(20, 211.3));  // 13
console.log(theHeavyPill(20, 210.1));  // 1
console.log(theHeavyPill(20, 210));  // 0
console.log(theHeavyPill(2, 3.1));  // 1