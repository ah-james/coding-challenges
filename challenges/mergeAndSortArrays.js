const mergeSortedArrays = (arr1, arr2) => {
    // error handling, make sure arrays have values
    if (arr1.length === 0 || arr2.length === 0) {
        return 'make sure arrays are opoulated'
    }

    // set iteration for while loop and empty array to return
    let i = 0
    let j = 0
    const mergedArray = []

    // while the returned array is shorter than the combined length of 2 passed in arrays
    while (mergedArray.length < (arr1.length + arr2.length)) {
        // if current iteration of array 1 is less than array 2 push array 1 element into mergedArray
        if (arr2[j] === undefined || arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i])
            i++
        } else { // if array2 is less than 1 push array 2 element instead
            mergedArray.push(arr2[j])
            j++
        }
    }

}

const mergeSort2 = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b)


