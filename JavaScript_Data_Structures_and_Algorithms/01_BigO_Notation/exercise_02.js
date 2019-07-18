/* 

Calculate the time complexity of the function below.

*/

function someFunction(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            for (var k = 0; k < n; k++) {
                for (var l = 0; l < 10; l++) {
                    console.log(i + j + k + l);
                }
            }
        }
    }
}

someFunction(2);

/*

This function contains for loops that are nested.
By inspection, we initially see the time
complexity as O(n * n * n * 10), or O(10n^3).
Removing the coefficient, the complexity ends up being O(n^3).

*/