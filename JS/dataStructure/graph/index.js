export function Graph() {
    this.adjacencyList = {};
    this.addVertex = addVertex;
    this.addEdge = addEdge;
    this.removeEdge = removeEdge;
    this.removeVertex = removeVertex;

    function addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }

    function addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    function removeEdge (vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    function removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return;
        for (const adjacencyVertex of this.adjacencyList[vertex]) {
            this.removeVertex(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
console.log(graph.adjacencyList);