// leetcode Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
// ex. a = 1, b = 2, c = 3, aa = 27, ab = 28

const titleToNumber = columnTitle => {
    let returnedNumber = 0
    for (let i = 0; i < columnTitle.length; i++) {
        const currentLetter = columnTitle[i] // current Letter
        const currentNumber = currentLetter.charCodeAt() - 64 // corresponding number to letter, subtract 64 because 65 is beginning of capital letters in ASCII
        returnedNumber += currentNumber * Math.pow(26, columnTitle.length - i - 1) // first number to the 2nd number power, so if columnTitle length is 2, second number would be 
        // 2-0-1=1 for the first iteration, so if currentletter is B, full equation is 2 * 26^1 = 52
        // then use += so that next iteration is added to the first
    }
    return returnedNumber
}