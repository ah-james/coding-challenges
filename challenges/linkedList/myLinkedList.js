class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    // construct append method
    append(value) {
    const newNode = new Node(value) // create a new node

        this.tail.next = newNode // make the next value of previous tail into the new node  
        this.tail = newNode // now that this.tail.next is reset, this.tail can be changed to the new node
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value) // create a new node

        newNode.next = this.head // new node should have a next of the rest of the linked list
        this.head = newNode
        this.length++
        return this
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)

console.log(myLinkedList)