// leetCode getSum problem
// Given two integers a and b, return the sum of the two integers without using the operators + and -.
// ex, input a = 1 b = 2 output 3

const getSum = (a, b) => {
    let arrayA = new Array(a)
    let arrayB = new Array(b)
    let combinedArrays = arrayA.concat(arrayB)
    return combinedArrays.length   
}