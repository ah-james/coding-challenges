// recursive functions wildily inefficient (fibonacci O(2^n)), but dynamic programming can make it O(n)

const fibonacci = n => {
    if (n < 2) {
        return n
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

fibonacci(4)