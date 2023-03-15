const mergeSort = array => {
    if (array.length === 1) {
        return array
    }

    // split array into left and right
    const half = Math.ceil(array.length / 2)
    const left = array.slice(0, half)
    const right = array.slice(half)

    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    const result = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87]
console.log(mergeSort(numbers))