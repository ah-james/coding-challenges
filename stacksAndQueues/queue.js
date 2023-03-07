class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }

    dequeue() {
        this.first = this.first.next
        this.length--
        return this
    }

    isEmpty() {
        if (this.length === 0) {
            return 'Stack is empty'
        }
        return `the stack length is ${this.length}`
    }
}

const myQueue = new Queue()
myQueue.enqueue('Calvin')
myQueue.enqueue('Trent')
myQueue.enqueue('Gabe')
console.log(myQueue.peek())
console.log(myQueue)