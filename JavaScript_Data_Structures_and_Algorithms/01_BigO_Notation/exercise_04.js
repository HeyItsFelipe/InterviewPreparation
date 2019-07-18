/* 

Calculate the time complexity of the function below.

*/

function someFunction(n) {
    for (var i = 0; i < n * 10; i++) {
        console.log(n);
    }
}

someFunction(2);

/*

The amount of times this for loop is iterated depends on n.
The time complexity is O(n * 10), or O(10n).
Removing the coefficient, time complexity is O(n).

*/