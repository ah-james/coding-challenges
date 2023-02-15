// given an array, return the first repeating number
// ex. [2,5,1,2,3,5,1,2,4] return 2
// [2,1,1,2,3,5,1,2,4] return 1
// [2,3,4,5] return undefined

const firstRecurringCharacter = array => {
    const obj = {} // set an empty object

    for (let i = 0; i < array.length; i++) { // loop through array
        if (obj[array[i]]) { // check if array[i] exists in the object
            return array[i]
        }
        obj[array[i]] = 1 // if array[i] doesn't exist add it to the object
    }
}

firstRecurringCharacter([2,5,5,2,3,5,1,2,4])