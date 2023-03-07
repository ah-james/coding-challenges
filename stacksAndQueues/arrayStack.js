class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        this.array = []
    }

    peek() {
        return this.array[this.array.length - 1] // want to see the end of the array, which is the last one added
    }

    push(value) {
        this.array.push(value)
        return this
    }

    pop() {
        this.array.pop()
        return this
    }

    isEmpty() {
        if (this.array.length === 0) {
            return 'Stack is empty'
        }

        return `the stack length is ${this.array.length}`
    }
}

const myStack = new Stack()
console.log(myStack.peek())
// myStack.pop()
// console.log(myStack)