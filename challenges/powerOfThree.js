// Given an integer n, return true if it is a power of three. Otherwise, return false.
// An integer n is a power of three, if there exists an integer x such that n == 3x.
// ex
// Input: n = 27  Output: true  Explanation: 27 = 3^3

const isPowerOfThree = n => {
    // if number is valid it will be able to be simplified down to 1
    while (n > 1) {
        // if n is greater than one, divide that n by 3
        n = n / 3
    }

    return n === 1 // return true if n is equal to 1, but false if it isn't
}