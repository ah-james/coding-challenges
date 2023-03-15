const mergeSort = array => {
    if (array.length === 1) {
        return array
    }

    // split array into left and right
    const half = halved(array)
    const left = array.slice(0, half)
    const right = array.slice(half)

    const smallerLeft = halved(left)
    const leftArray = [left.slice(0, smallerLeft), left.slice(smallerLeft)]

    const smallerRight = halved(right)
    const rightArray = [right.slice(0, smallerRight), right.slice(smallerRight)]

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (left, right) => {

}

const halved = array => Math.ceil(array.length / 2)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87]
mergeSort(numbers)
console.log(numbers)