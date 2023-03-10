class Graph {
    constructor() {
        this.numberNodes = 0
        this.adjacentList = {}
    }

    addVertex(node) {
        this.adjacentList[node] = [] // add the node to the adjacentList, this will be filled when an edge is added
        this.numberNodes++
    }

    addEdge(node1, node2) {

    }
}

const myGraph = new Graph()
myGraph.addVertex(1)
myGraph.addVertex(2)
console.log(myGraph)