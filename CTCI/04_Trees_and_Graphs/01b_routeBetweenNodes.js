/*

Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
route between two nodes.

*/

class Vertex {
    constructor(value = null) {
        if (value !== null) {
            this.value = value;
            this.children = [];
        }
    }
}

class Graph {
    constructor() {
        this.vertices = [];
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
    }

    addEdge(fromVertex, toVertex) {
        for (let i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i] === fromVertex) {
                this.vertices[i].children.push(toVertex);
                return true;
            }
        }
        return false;
    }
}

const routeBetweenNodes = (vertexStart, vertexEnd) => {
    if (vertexStart === vertexEnd) {
        return true;
    }
    let queue = [];
    queue.unshift(vertexStart);
    let vertex = null;
    while (queue.length > 0) {
        vertex = queue.shift();
        for (let i = 0; i < vertex.children.length; i++) {
            if (vertex.children[i] === vertexEnd) {
                return true;
            } else {
                queue.unshift(vertex.children[i]);
            }
        }
    }
    return false;
};

let g = new Graph();
let vertex1 = new Vertex(1);
let vertex2 = new Vertex(2);
let vertex3 = new Vertex(3);
let vertex4 = new Vertex(4);
g.addVertex(vertex1);
g.addVertex(vertex2);
g.addVertex(vertex3);
g.addVertex(vertex4);
g.addEdge(vertex1, vertex2);
g.addEdge(vertex2, vertex4);
g.addEdge(vertex3, vertex1);
console.log(g);
console.log(vertex1);
console.log(routeBetweenNodes(vertex1, vertex4));
console.log(routeBetweenNodes(vertex2, vertex4));
console.log(routeBetweenNodes(vertex3, vertex3));
console.log(routeBetweenNodes(vertex1, vertex3));
console.log(routeBetweenNodes(vertex3, vertex1));