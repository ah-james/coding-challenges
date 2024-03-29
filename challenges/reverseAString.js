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

const recursiveReverse = string => {
  if (string === '') {
    return ''
  } else {
    return recursiveReverse(string.substring(1)) + string.charAt(0)
  }
}

// leetcode solutions

const reverseString = s => {
  return s.reverse()
}

const reverseString2 = s => {
  let left = 0
  let right = s.length - 1

  while (left <= right) {
    let temp = s[left] 
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
}