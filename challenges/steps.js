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