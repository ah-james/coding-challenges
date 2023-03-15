const insertionSort = array => {
    // loop through array
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[0]) { // if current element of array is less than the first element of the array
            let newFirst = array.splice(i, 1)[0]
            array.unshift(newFirst)
        } else {
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) { // if current i element is greater than the 
                    let newElement = array.splice(i, 1)[0]
                    array.splice(j, 0, newElement)
                }
            }
        }
    }
    return array
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
insertionSort(numbers)
console.log(numbers)