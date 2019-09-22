/* 

Calculate the time complexity of the function below.

*/

function someFunction(n) {
    for (var i = 0; i < n * 1000; i++) {
        for (var j = 0; j < n * 20; j++) {
            console.log(i + j);
        }
    }
}

someFunction(2);

/*

This function contains a nested for loop.
Just looking at the nested for loop, we initially see the time
complexity as O(1000n * 20n).
Removing the coefficients, the complexity is O(n^2).

*/