/*

Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3
steps at a time. Implement a method to count how many possible ways the child can run up the
stairs.

*/

const tripleStep = (n) => {
    if (n === 0) {
        return 1;
    }
    let sum = 0;
    if (n >= 1) {
        sum += tripleStep(n - 1);
    }
    if (n >= 2) {
        sum += tripleStep(n - 2);
    }
    if (n >= 3) {
        sum += tripleStep(n - 3);
    }
    return sum;

};

// Assuming initial amount of steps is greater than zero
console.log(tripleStep(1));  // 1
console.log(tripleStep(2));  // 2
console.log(tripleStep(3));  // 4
console.log(tripleStep(4));  // 7