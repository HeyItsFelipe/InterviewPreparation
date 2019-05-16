/*

Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, an update function, and a body
function. Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the
current value. Finally, it calls the update function to create a new value and
starts from the beginning.

When defining the function, you can use a regular loop to do the actual
looping.

*/

function yourOwnLoop(value, test, update, body) {
    for (value; test(value); value = update(value)) {
        body(value);
    }
}

const isLessThan3 = (value) => {
    if (value < 3) {
        return true;
    }
    return false;
};

const executeCode = (value) => {
    console.log(value);
};

const incrementByOne = (value) => {
    value++;
    return value;
};

yourOwnLoop(0, isLessThan3, incrementByOne, executeCode);