class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        return this.top
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }

    pop() {
        this.top = this.top.next
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

const myStack = new Stack()
myStack.push('first')
myStack.push('second')
myStack.push('third')
console.log(myStack.peek())
// myStack.pop()
// console.log(myStack)