// take array of arrays and merge them into a single sorted array

const mergeSortedArray = (arrays) => {
    // chain methods, use flat() to make all arrays into single array
    // use sort to sort array
    return arrays.flat().sort((a, b) => a - b)
}