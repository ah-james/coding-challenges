const findFactorial = (num) => {
    let factorial = 1
    for (let i = num; i > 1; i--) {
        factorial = factorial * i
    }

    return factorial
}

// console.log(findFactorial(5))

const recursiveFactorial = (num) => {
    if (num === 2) {
        return 2
    }
    return num * recursiveFactorial(num - 1)
}

console.log(recursiveFactorial(5))