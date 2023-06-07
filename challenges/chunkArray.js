// Given an array and chunk size, divide the array into many subarrays where each subarray is of the provided size.
// ex chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]

const chunk = (array, size) => {
    // empty array to hold chunks
    const chunkedArray = []

    for (let element of array) {
        // is there an element in chunkedArray
        const last = chunkedArray[chunkedArray.length - 1]
        // if last element in chunked doesn't exist or is equal to size of each chunk
        if (!last || last.length === size) {
            // push a new array into chunked of current element
            chunkedArray.push([element])
        } else {
            // if a previous iteration created a new array in chunked, then push current element into that last array
            last.push(element)
        }
    }

    return chunkedArray
}

const chunkTwo = (array, size) => {
    // empty array to hold chunks
    const chunkedArray = []
    let i = 0

    // while loop, when i is less than array length
    while (i < array.length) {
        // slice off chunk of array, starting at i, ending at i + required size of the chunk 
        const slice = array.slice(i, i + size)
        chunkedArray.push(slice)
        // i needs to be increased by size to make sure it doesn't duplicate elements
        i += size
    }

    return chunkedArray
}