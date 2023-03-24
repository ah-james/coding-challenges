// given an array return the single number

const singleNumber = array => {
    const obj = {}

    for (let i = 0; i < array.length; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = 1
        } else {
            obj[array[i]]++
        }
    }

    for (const num in obj) {
        if (obj[num] === 1) {
            return num
        }
    }
}

console.log(singleNumber([1, 2, 2, 3, 3, 4, 4]))