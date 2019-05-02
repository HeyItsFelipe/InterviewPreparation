/*

This shows simple Undirected Graph Depth First Search algorithms.

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

    depthFirstSearchDoesPathExist(value1 = null, value2 = null) {
        if (value1 === null || value2 === null) {
            return false;
        }
        if (this.vertices[value1] === undefined || this.vertices[value2] === undefined) {
            return false;
        }

        let seen = {};

        const isValidPath = (value) => {
            if (seen[value]) {
                return false;
            }
            if (value === value2) {
                return true;
            }

            let vertex = this.vertices[value];
            seen[value] = value;

            for (let i = 0; i < vertex.children.length; i++) {
                if (isValidPath(vertex.children[i])) {
                    return true;
                }
            }

            return false;

        };

        return isValidPath(value1);
    }

    depthFirstSearchPath(value1 = null, value2 = null) {
        if (value1 === null || value2 === null) {
            return [];
        }
        if (this.vertices[value1] === undefined || this.vertices[value2] === undefined) {
            return [];
        }

        let seen = {};
        let path = [];

        const isCorrectPath = (value) => {
            if (seen[value]) {
                return false;
            }

            path.push(value);

            if (value === value2) {
                return true;
            }

            let vertex = this.vertices[value];
            seen[value] = value;

            for (let i = 0; i < vertex.children.length; i++) {
                if (isCorrectPath(vertex.children[i])) {
                    return true;
                }
            }

            path.pop();

            return false;

        };

        isCorrectPath(value1);
        return path;
    }

    depthFirstSearchListVerticesFromVertex(startValue = null) {
        if (startValue === null) {
            return [];
        }
        if (this.vertices[startValue] === undefined) {
            return [];
        }

        let seen = {};
        let list = [];

        const shouldTraversePath = (value) => {
            if (seen[value]) {
                return false;
            }

            list.push(value);

            if (value === startValue && list.length > 1) {
                return true;
            }

            let vertex = this.vertices[value];
            seen[value] = value;

            for (let i = 0; i < vertex.children.length; i++) {
                if (shouldTraversePath(vertex.children[i])) {
                    return true;
                }
            }

            return false;

        };

        shouldTraversePath(startValue);
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

console.log(g.depthFirstSearchDoesPathExist(2, 1));
console.log(g.depthFirstSearchPath(7, 5));

console.log(g.depthFirstSearchDoesPathExist(9, 9));
console.log(g.depthFirstSearchPath(9, 2));

console.log(g.depthFirstSearchDoesPathExist(7, 1));
console.log(g.depthFirstSearchPath(7, 1));

console.log(g.depthFirstSearchListVerticesFromVertex(5));
console.log(g.depthFirstSearchListVerticesFromVertex(9));
console.log(g.depthFirstSearchListVerticesFromVertex(2));