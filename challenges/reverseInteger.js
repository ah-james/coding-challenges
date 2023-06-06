// Given an integer, return an integer that is the reverse ordering of numbers.
// ex 51 -> 15
// -10 -> -1

const reverseInteger = n => {
    // use Math.abs to remove possible negative sign
    const absoluteValue = Math.abs(n)
    return parseInt(absoluteValue.toString().split('').reverse().join('') * Math.sign(n))
}