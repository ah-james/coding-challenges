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

        if (tempNode.value === value) {
            return this.root
        }

        while (tempNode.value !== value) {
            if (value > tempNode.value) {
                if (tempNode.right === null) {
                    break
                }
                tempNode = tempNode.right
                if (tempNode.value === value) {
                    return tempNode
                }
            } else if (value < tempNode.value) {
                if (tempNode.right === null) {
                    break
                }
                tempNode = tempNode.left
                if (tempNode.value === value) {
                    return tempNode
                }
            } else {
                break
            }
        }

        return false
    }
}

const tree = new BinarySearchTree()
tree.insert(5)
tree.insert(7)
tree.insert(1)
tree.insert(2)
tree.insert(10)
tree.insert(6)
console.log(tree.lookup(11))