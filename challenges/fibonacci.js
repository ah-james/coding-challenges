// given number n return the index value of the Fibonacci sequence

// ex 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 etc
// n = 8 return 21

const fibonacci = num => {
    if (num < 2) {
        return num
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

const fibonacciRecursive = num => {
    if (num < 2) {
        return num
    }

    return fibonacciRecursive(num - 2) + fibonacciRecursive(num - 1)
}

console.log(fibonacciRecursive(5))