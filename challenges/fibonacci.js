// given number n return the index value of the Fibonacci sequence

// ex 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 etc
// n = 8 return 21

const fibonacci = num => {
    if (num === 0) {
        return 0
    }

    if (num === 1) {
        return 1
    }
    let count = 2
    let fibonacciNumber = 1
    let previousNumber = 0
    while (count <= num) {
        let temp = fibonacciNumber
        fibonacciNumber = fibonacciNumber + previousNumber
        previousNumber = temp
        count++
    }

    return fibonacciNumber
}

console.log(fibonacci(5))