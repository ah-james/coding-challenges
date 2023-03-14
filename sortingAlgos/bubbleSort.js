// given an array of numbers, create a function to bubble sort them

const bubbleSort = array => {
    // set count
    let count = 0
    let first = 0
    let second = 1

    while (count <= array.length) {
        if (array[first] > array[second]) { // if first pointers is higher than second
            let temp = array[second]
            array[second] = array[first] // move the first pointer to second pointer position
            array[first] = temp // move second pointer to first's position
            first++ // make first and second 1 higher to check next
            second++ 
        } else if (array[first] < array[second]) { // if first pointer is already lower than second just increment first and second variables
            first++
            second++
        } else { // reset first and second if we've reached the end of the array
            count++
            first = 0
            second = 1
        }
    }

    return array
}

const bubbleSort2 = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = temp
            }
        }
    }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
bubbleSort2(numbers)
console.log(numbers)
