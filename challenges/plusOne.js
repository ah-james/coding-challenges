const plusOne = digits => {
    // let num = digits.join('')
    // let returnedNum = Number(num) + 1
    // return Array.from(String(returnedNum), number => Number(number))

    let length = digits.length
    if (digits[length - 1] === 9) {
        digits.pop()
        digits.push(1)
        digits.push(0)
        return digits
    }
    
    digits[length - 1] = digits[length - 1] + 1
    return digits
}