// Given an integer, return an integer that is the reverse ordering of numbers.
// ex 51 -> 15
// -10 -> -1

const reverseInteger = n => {
    // use Math.abs to remove possible negative sign
    const absoluteValue = Math.abs(n)
    return parseInt(absoluteValue.toString().split('').reverse().join('') * Math.sign(n))
}

const reverseInteger2 = n => {
    // don't need to use Math.abs because '5-' will become 5 when ran through parseInt
    // also move Math.sign outside of parseInt
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}