/*

Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a
route between two nodes.

*/

class Vertex {
    constructor(value = null) {
        if (value !== null) {
            this.value = value;
            this.pointsTo = [];
            this.pointsFrom = [];
        }
    }
}

class DirectedGraph {
    constructor() {
        this.graph = {};
    }

    addVertex(value = null) {
        if (value !== null) {
            let vertex = new Vertex(value);
            this.graph[value] = vertex;
        }
    }

    addEdge(vertexFrom, vertexTo) {
        if (vertexFrom !== null && vertexTo !== null) {
            this.graph[vertexFrom].pointsTo.push(vertexTo);
            this.graph[vertexTo].pointsFrom.push(vertexFrom);
        }
    }

    routePointedToExists(vertex1 = null, vertex2 = null) {
        if (vertex1 === null || vertex2 === null) {
            return null;
        }
        let pointsTo = this.graph[vertex1].pointsTo;
        for (let i = 0; i < pointsTo.length; i++) {
            if (pointsTo[i] === vertex2) {
                return true;
            }
        }
        return false;
    }

    routePointedFromExists(vertex1 = null, vertex2 = null) {
        if (vertex1 === null || vertex2 === null) {
            return null;
        }
        let pointsFrom = this.graph[vertex1].pointsFrom;
        for (let i = 0; i < pointsFrom.length; i++) {
            if (pointsFrom[i] === vertex2) {
                return true;
            }
        }
        return false;
    }
}


let g = new DirectedGraph();
g.addVertex(2);
g.addVertex(4);
g.addVertex(8);
g.addVertex(3);
g.addVertex(1);
console.log(g);

g.addEdge(2, 4);
g.addEdge(8, 3);
g.addEdge(1, 2);
console.log(g);
console.log(g.graph[2].pointsTo);

console.log(g.routePointedToExists(1, 2));
console.log(g.routePointedToExists(2, 1));
console.log(g.routePointedFromExists(1, 2));
console.log(g.routePointedFromExists(2, 1));