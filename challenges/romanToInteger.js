const numerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

const romanToInt = s => {
    let total = 0

    // loop through string
    for (let i = 0; i < s.length; i++) {
        // if the next character is greater than the current character
        if (numerals[s[i + 1]] > numerals[s[i]]) {
            // subtract that character from the total
            total -= numerals[s[i]]
        } else { // if the next character is the same or less than, add that character value from total
            total += numerals[s[i]]
        }
    }

    return total
}