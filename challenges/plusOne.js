const plusOne = digits => {
    let num = digits.join('')
    let returnedNum = Number(num) + 1
    return Array.from(String(returnedNum), number => Number(number))
}