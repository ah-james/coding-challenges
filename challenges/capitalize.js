// Write a function that accepts a string. The function should capitalize the first letter of each word in the string and return the result.
// ex capitalize('a short sentence') --> 'A Short Sentence'

const capitalize = (str) => {
    // split string into words and create array for return
    const split = str.split(' ')
    const joinArray = []
    
    for (let word of split) {
        // split individual word, splice out first character in array
        let array = word.split('')
        const upper = array.splice(0, 1)
        // spliced character gets put back on front with toUpperCase
        array.unshift(upper[0].toUpperCase())
        // push completed word into joinArray
        joinArray.push(array.join(''))
    }
    
    return joinArray.join(' ')
}

const capitalizeTwo = str => {
    const words = []
    const split = str.split(' ')

    for (let word of split) {
        // word[0] is first character, word.slice(1) gives rest of the word, starting at index of 1
        let capitalized = word[0].toUpperCase() + word.slice(1)
        // push capitalized word onto the end
        words.push(capitalize)
    }

    words.join(' ')
}