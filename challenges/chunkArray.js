// Given an array and chunk size, divide the array into many subarrays where each subarray is of the provided size.
// ex chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]

const chunk = (array, size) => {
    // empty array to hold chunks
    const chunkedArray = []

    for (let element of array) {
        const last = chunkedArray[chunkedArray.length - 1]
        // if last element in chunked doesn't exist or is equal to size
        if (!last || last.length === size) {
            chunkedArray.push([element])
        } else {
            last.push(element)
        }
    }

    return chunkedArray
}