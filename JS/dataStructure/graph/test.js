import { Graph } from './index.js';

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(1, 2);
graph.addEdge(1, 'Exit');
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 3);
graph.addEdge(4, 'Exit');

console.log(graph.adjacencyList)
