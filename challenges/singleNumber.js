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

const singleNumber2 = nums => {
    // use sort method to make sure array is sorted
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i+=2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }
}

console.log(singleNumber([1, 1, 2, 3, 3, 4, 4]))