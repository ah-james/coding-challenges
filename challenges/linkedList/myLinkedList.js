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
        // create a new node
        const newNode = {
            value: value,
            next: null
        }

        // make the next value of previous tail into the new node
        this.tail.next = newNode
        // now that this.tail.next is reset, this.tail can be changed to the new node
        this.tail = newNode
        this.length++
        return this
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)

console.log(myLinkedList)