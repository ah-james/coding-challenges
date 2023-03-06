class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            previous: null,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new DoubleNode(value) // create a new node

        this.tail.previous = this.tail
        this.tail.next = newNode // make the next value of previous tail into the new node  
        this.tail = newNode // now that this.tail.next is reset, this.tail can be changed to the new node
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new DoubleNode(value)

        newNode.next = this.head // new node should have a next of the rest of the linked list
        this.head.previous = newNode
        this.head = newNode
        this.length++
        return this
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        if (index >= this.length) { // if the index is higher than the length the value should just be appended
            this.append(value)
        }

        const newNode = new DoubleNode(value)

        const leader = this.traverseToIndex(index - 1) // use helper method to find the node directly before where new node should be entered
        const holdingPointer = leader.next // opposite side of where newNode should be inserted
        leader.next = newNode // now that leader.next has been saved as a separate variable, newNode can be inserted and connected to leader
        newNode.previous = leader
        newNode.next = holdingPointer // to tie newNode to holdingPointer, just make newNode.next from null to holdingPointer
        holdingPointer.previous = newNode
        this.length++
        return this.printList()
    }

    remove(index) {
        // take in given index and remove the node from that spot
        const nodeToDelete = this.traverseToIndex(index) // use traverseToIndex to find the node that needs to be removed
        const nextNode = nodeToDelete.next
        nodeToDelete.next = nextNode.next
        nodeToDelete.previous = nextNode.previous
        nodeToDelete.value = nextNode.value
        this.length--
        return this.printList()
    }

    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head // start iteration at beginning
        while (counter !== index) { // as long as the counter isn't the same as the index passed in
            currentNode = currentNode.next // set the currentNode to the next ex. [1,10,5,16] for insert at i=2 currentNode starts as 1, then counter becomes 1 and currentNode becomes 10
            counter++
        }
        return currentNode
    }

    printList() {
        const nextArray = []
        let currentNode = this.head
        while (currentNode !== null) {
            nextArray.push(currentNode.value)
            currentNode = currentNode.next
        }
        return nextArray
    }
}