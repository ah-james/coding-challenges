const selectionSort = array => {
    for (let i = 0; i < array.length; i++) {
        let min = i // index of lowest number in iteration
        for (let j = i + 1; j < array.length; j++) { // second for loop always starts 1 element after i
            if (array[j] < array[min]) { // if current iteration of j is less than what i starts as
                min = j // make min index equal to index of the lower number
            }
        }
        let temp = array[i] // save current element as temp
        array[i] = array[min] // use min index to change value in i spot to the smallest number
        array[min] = temp // switch smallest number with the first in i
    }
    return array
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
selectionSort(numbers)
console.log(numbers)