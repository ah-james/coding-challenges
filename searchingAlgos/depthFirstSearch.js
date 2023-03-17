class Node {
    constructor(value) {
        this.right = null
        this.left = null
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)

        if (!this.root) {
            this.root = newNode
            return this
        }
        let tempNode = this.root
        while (tempNode.left || tempNode.right) { // while the temporary node doesn't have null in either of the left or right values
            // check if newNode value is greater than tempNode value AND if tempNode.right exists
            if (value > tempNode.value && tempNode.right) {
                tempNode = tempNode.right // if value > temNode value and tempNode.right exists, then move tempNode to start from scratch
            } else if (value < tempNode.value && tempNode.left) { // same as above happens with left, but use less than
                tempNode = tempNode.left
            } else {
                break // if this isn't here it's an infinite loop
            }
        }

        // if the current value is greater than the tempNode's value, set tempNode.right to newNode, otherwise it's less and set tempNode.left to newNode
        if (value > tempNode.value) {
            tempNode.right = newNode
        } else {
            tempNode.left = newNode
        }
    }

    lookup(value) { // returns full node or null
        let tempNode = this.root
        while (tempNode) { // while tempNode isn't null
            if (value < tempNode.value) { // check if value is less than current node's value, if so make tempNode the previous left
                tempNode = tempNode.left
            } else if (value > tempNode.value) { // check if value is greater than current node's value, if so make tempNode the previous right
                tempNode = tempNode.right
            } else if (tempNode.value === value) { // if tempNode value is the same as value return the full node
                return tempNode
            }
        }
        return false 
    }

    remove(value) {
        if (!this.root) {
            return false // return false if the tree is empty
        }

        let currentNode = this.root //change this as search for the removed value goes on
        let parentNode = null

        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode // moves parentNode to the parent of what the currentNode will be
                currentNode = currentNode.left // currentNode is now the leftward child (lower) node of parentNode
            } else if (value > currentNode.value) { // same as above but greater instead of less/right instead of left
                parentNode = currentNode
                currentNode = currentNode.right
            } else if (currentNode.value === value) {
                if (currentNode.right === null) { // if a right node doesn't exist
                    if (parentNode === null) { // if we need to update the root node
                        this.root = currentNode.left
                    } else {
                        if (currentNode.value < parentNode.value) { // if parent greater than current node, 
                            parentNode.left = currentNode.left // make current left child a child of parent
                        } else if (currentNode.value > parentNode.value) { // if parent less than current
                            parentNode.right = currentNode.left // make left child a right child of parent
                        }
                    }
                } else if (currentNode.right.left === null) { // right child doesn't have a left child
                    if (parentNode === null) {
                        this.root = currentNode.left
                    } else {
                        currentNode.right.left  = currentNode.left
                        if (currentNode.value < parentNode.value) { // if parent > current
                            parentNode.left = currentNode.right // make right child of the left the parent
                        } else if (currentNode.value > parentNode.value) { // if parent < current
                            parentNode.right = currentNode.right // right child a right child of parent
                        }
                    } 
                } else { // right child that has a left child
                    let leftmost = currentNode.right.left
                    let leftmostParent = currentNode.right
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost
                        leftmost = leftmost.left
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right
                    leftmost.left = currentNode.left
                    leftmost.right = currentNode.right

                    if (parentNode === null) {
                        this.root = leftmost
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost
                        } else if (currentNode,value > parentNode.value) {
                            parentNode.right = leftmost
                        }
                    }
                }
                return true
            }
        }
    }

    DFSInOrder() {
        return traverseInOrder(this.root, [])
    }

    DFSPostOrder() {
        return traversePostOrder(this.root, [])
    }

    DFSPreOrder() {
        return traversePreOrder(this.root, [])
    }
}

const traverseInOrder = (node, list) => {
    if (node.left) {
        traverseInOrder(node.left, list) // if the current node still has values on the left, this moves one level down in the tree
    }
    list.push(node.value) // when traversed to the bottom, push the node's value into the list
    if (node.right) {
        traverseInOrder(node.right, list) // if the current node still has values on the right, this moves one level down in the tree
    }
    return list
}

const traversePreOrder = (node, list) => {
    list.push(node.value) // in preorder the parent is pushed first
    if (node.left) {
        traversePreOrder(node.left, list) // if the current node still has values on the left, this moves one level down in the tree
    }
    
    if (node.right) {
        traversePreOrder(node.right, list) // if the current node still has values on the right, this moves one level down in the tree
    }
    return list
}

const traversePostOrder = (node, list) => {    
    if (node.left) {
        traversePostOrder(node.left, list) // if the current node still has values on the left, this moves one level down in the tree
    }
    
    if (node.right) {
        traversePostOrder(node.right, list) // if the current node still has values on the right, this moves one level down in the tree
    }
    list.push(node.value) // in postorder the last checked is pushed first
    return list
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.DFSInOrder())