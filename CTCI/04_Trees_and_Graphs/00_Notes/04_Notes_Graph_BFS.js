/*

This shows simple Binary Search Tree Breadth First Search algorithms.

*/

class Vertex {
    constructor(value = null) {
        if (value !== null) {
            this.value = value;
            this.children = [];
        }
    }
}

class UndirectedGraphOfUniqueValues {
    constructor() {
        this.vertices = {};
    }

    addVertex(value) {
        this.vertices[value] = new Vertex(value);
    }

    addEdge(value1, value2) {
        this.vertices[value1].children.push(value2);
        this.vertices[value2].children.push(value1);
    }

    search(value) {
        if (this.vertices[value] !== undefined) {
            return true;
        }
        return false;
    }

    breadthFirstSearchDoesPathExist(value1 = null, value2 = null) {
        if (value1 === null || value2 === null) {
            return false;
        }
        if (this.vertices[value1] === undefined || this.vertices[value2] === undefined) {
            return false;
        }

        let seen = {};
        let queue = [];
        queue.push(value1);
        let dequeuedValue = null;

        while (queue.length) {
            dequeuedValue = queue.shift();

            if (seen[dequeuedValue] === undefined) {
                seen[dequeuedValue] = dequeuedValue;
                if (dequeuedValue === value2) {
                    return true;
                }

                let vertex = this.vertices[dequeuedValue];
                for (let i = 0; i < vertex.children.length; i++) {
                    if (seen[vertex.children[i]] === undefined) {
                        queue.push(vertex.children[i]);
                    }
                }
            }
        }

        return false;
    }

    breadthFirstSearchPath(value1 = null, value2 = null) {

        if (value1 === null || value2 === null) {
            return [];
        }
        if (this.vertices[value1] === undefined || this.vertices[value2] === undefined) {
            return [];
        }

        let seen = {};
        let queue = [];
        let queueObj = null;
        let dequeuedObj = null;
        let vertex = null;
        let pathToAdd = null;

        queueObj = { value: value1, path: [value1] };
        queue.push(queueObj);

        while (queue.length) {
            dequeuedObj = queue.shift();

            if (seen[dequeuedObj.value] === undefined) {

                seen[dequeuedObj.value] = dequeuedObj.value;
                if (dequeuedObj.value === value2) {
                    return dequeuedObj.path;
                }

                vertex = this.vertices[dequeuedObj.value];

                for (let i = 0; i < vertex.children.length; i++) {
                    if (seen[vertex.children[i]] === undefined) {
                        pathToAdd = dequeuedObj.path.slice();
                        pathToAdd.push(vertex.children[i]);
                        queueObj = { value: vertex.children[i], path: pathToAdd };
                        queue.push(queueObj);
                    }
                }

            }
        }

        return [];

    }

    breadthFirstSearchListVerticesFromVertex(startValue = null) {
        if (startValue === null) {
            return [];
        }
        if (this.vertices[startValue] === undefined) {
            return [];
        }

        let seen = {};
        let queue = [];
        queue.push(startValue);
        let dequeuedValue = null;
        let list = [];

        while (queue.length) {
            dequeuedValue = queue.shift();

            if (seen[dequeuedValue] === undefined) {

                seen[dequeuedValue] = dequeuedValue;
                list.push(dequeuedValue);

                let vertex = this.vertices[dequeuedValue];
                for (let i = 0; i < vertex.children.length; i++) {
                    if (seen[vertex.children[i]] === undefined) {
                        queue.push(vertex.children[i]);
                    }
                }
            }
        }

        return list;
    }
}


let g = new UndirectedGraphOfUniqueValues();
g.addVertex(2);
g.addVertex(4);
g.addVertex(7);
g.addVertex(5);
g.addVertex(1);
g.addVertex(9);

g.addEdge(2, 4);
g.addEdge(2, 7);
g.addEdge(4, 7);
g.addEdge(4, 5);
g.addEdge(1, 5);
g.addEdge(2, 1);

console.log(g.vertices);

console.log(g.breadthFirstSearchDoesPathExist(7, 5), true);
console.log(g.breadthFirstSearchPath(7, 5), [7, 4, 5]);

console.log(g.breadthFirstSearchDoesPathExist(9, 2), false);
console.log(g.breadthFirstSearchPath(9, 2), []);

console.log(g.breadthFirstSearchDoesPathExist(7, 1), true);
console.log(g.breadthFirstSearchPath(7, 1), [7, 2, 1]);

console.log(g.breadthFirstSearchListVerticesFromVertex(2));
console.log(g.breadthFirstSearchListVerticesFromVertex(9));
console.log(g.breadthFirstSearchListVerticesFromVertex(1));
console.log(g.breadthFirstSearchListVerticesFromVertex(5));
console.log(g.breadthFirstSearchListVerticesFromVertex(4));
console.log(g.breadthFirstSearchListVerticesFromVertex(7));

