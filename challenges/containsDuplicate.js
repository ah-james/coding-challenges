// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// ex Input: nums = [1,2,3,1]
// Output: true

const containsDuplicate = nums => {
    let array = nums.sort((a, b) => a - b) // sort array to place values appearing twice next to each other

    for (let i = 0; i < array.length; i++) { // loop through array
        if (array[i] === array[i + 1]) { // if current element is the same as the next one return true
            return true
        }
    }

    return false
}