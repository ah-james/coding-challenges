// Given a string, return the character that is most commonly used in the string.
// ex maxChar("abcccccccd") === "c"

const maxChar = str => {
    let obj = {}
    let maxValue = 0
    let returnedCharacter = ''

    for (const char of str) {
        obj[char] = obj[char] + 1 || 1
    }

    for (const char in obj) {
        if (obj[char] > maxValue) {
            maxValue = obj[char]
            returnedCharacter = char
        }
    }

    return returnedCharacter
}