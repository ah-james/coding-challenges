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
        if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
            return 'Please enter 2 existing nodes!'
        }
        this.adjacentList[node1].push(node2) // the adjacent list for each node will be adjusted to include the other node in the array
        this.adjacentList[node2].push(node1)
    }
}

const myGraph = new Graph()
myGraph.addVertex(1)
myGraph.addVertex(2)
console.log(myGraph)