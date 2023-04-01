// leetcode Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
// ex. a = 1, b = 2, c = 3, aa = 27, ab = 28

const titleToNumber = columnTitle => {
    let returnedNumber = 0
    for (let i = 0; i < columnTitle.length; i++) {
        const currentLetter = columnTitle[i] // current Letter
        const currentNumber = currentLetter.charCodeAt() - 64 // corresponding number to letter, subtract 64 because 65 is beginning of capital letters in ASCII
        returnedNumber = currentNumber * Math.pow(26, columnTitle.length - i - 1)
    }
    return returnedNumber
}