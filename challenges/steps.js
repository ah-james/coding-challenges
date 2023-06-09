// Write a function that accepts a positive number N. 
// The function should console log a step shape with N levels using the # character.  
// Make sure the step has spaces on the right hand side!
// ex. steps(3);
//    '#  '
//    '## '
//    '###'

const steps = n => {
    //   create string variable to log and variable to count length of string
    let string = ''

    // loop
    for (let i = 1; i <= n; i++) {
        // add # until string length is equal to the loop iteration
        while (string.length < i) {
            string += '#'
        }
        // add whitespace until string length is equal to n
        while (string.length < n) {
            string += ' '
        }

        console.log(string)
        // reset string length for next loop
        string = ''
    }
}

const stepsRecursive = (n, row = 0, stair = '') => { // need to pass in other variables with defaults to handle recursion
    if (n === row) { // if current row is the same as the given length return and end the function
        return
    }

    if (n === stair.length) { /// if current string is the same length as given n, console log the string and recursive call while adding 1 to row
        console.log(stair)
        return steps(n, row++)
    }

    // actually add the characters to string here
    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }

    // recursive call
    steps(n, row, stair)
}