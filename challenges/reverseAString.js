// take a string of characters and reverse it 
// ex. 'hello' becomes 'olleh'

const reverse = string => {
    // add error handling
    if (!string || typeof string !== 'string') {
        return 'the entered value was not a string'
    }
    // take initial string and split into array of single characters
    // save second array to join and return at end
    let array = [...string]
    const reversed = []
  
    // loop over array, take each element and push onto FRONT of reversed array (important)
    for (let i = 0; i < array.length; i++) {
      let char = array[i]
      reversed.unshift(char)
    }
  
    return reversed.join('')
}

// coward's way out (simpler way)
const reverseTwo = string => [...string].reverse().join('')