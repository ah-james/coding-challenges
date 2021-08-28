var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^0-9a-z]/g, "").split('')
    return string.every((char, i) =>  char === string[string.length - i - 1])
};

// var isPalindrome = function(s) {
    // empty array to pass backwards string into, returned at the end
    // set string to lowercase and loop through, skipping to next iteration if current item isn't a letter
    // check if reversed string is the same as passed in string, then true
//     let string = s.toLowerCase().replace(/[^0-9a-z]/g, "")
    
//     if (string.length === 1) {
//         return 'Choose a longer string!'
//     }
    
//     let solution = []
//     for (let i = 0; i < string.length; i++) {
//         solution.unshift(string[i])
//     }
    
//     if (solution.join('') === string) {
//         return true
//     }
//     return false
    
//     let string = s.toLowerCase().replace(/[^0-9a-z]/g, "")
//     let reversed = string.split('').reverse().join('')
//     return string === reversed
// }