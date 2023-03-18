// recursive functions wildily inefficient (fibonacci O(2^n)), but dynamic programming can make it O(n)

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
const slowFibonacci = n => { // if n = 35 this will take 29860703 calculations
    if (n < 2) {
        return n
    }
    return slowFibonacci(n - 1) + slowFibonacci(n - 2)
}

const fibonacciRecursive = () => { // if n = 35 this will take 69 calculations
    let cache = {}
    return fib = (n) => {
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n
            }
            cache[n] = fib(n - 1) + fib(n - 2)
            return cache[n]
        }
    }
}

const fibonacci = fibonacciRecursive()

console.log(fibonacci(1))