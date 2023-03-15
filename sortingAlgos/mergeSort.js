const mergeSort = array => {
    if (array.length === 1) {
        return array
    }

    // split array into left and right
    const half = halved(array)
    const left = array.slice(0, half)
    const right = array.slice(half)

    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    // sort both sides of left and right
    for (let i = 0; i < left.length; i++) {

    }
}

const halved = array => Math.ceil(array.length / 2)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87]
mergeSort(numbers)
console.log(numbers)