/*

The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.

*/

const min1 = (x, y) => {
    return Math.min(x, y);
};

const min2 = (x, y) => {
    if (x < y) {
        return x;
    } else {
        return y;
    }
};

console.log(min1(1, 2));
console.log(min1(1, -2));

console.log(min2(1, 2));
console.log(min2(1, -2));