/* 

Calculate the time complexity of the function below.

*/

function someFunction(n) {
    for (var i = 0; i < 1000; i++) {
        console.log("hi");
    }
}

someFunction(2);

/*

This function contains one for loop, which iterates 1000 times.
This for loop is not dependent on the parameter n.
This means it will always run the same amount of times regardless of
what n is.
Therefore, the time complexity is O(1000), which reduces to O(1).

*/