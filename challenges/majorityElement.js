// leetcode givern an array nums of size n, return the majority element
// ex. nums = [3,2,3] output = 3

const majorityelement = nums => {
    let obj = {} // create object to loop through

    for (let i = 0; i < nums.length; i++) {
        // loop through nums array, if nums[i] doesn't exist in object add
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1
        } else {
            obj[nums[i]]++
        }
    }
    let saved = 0
    let returned

    for (const number in obj) { // for in loop to check largest number
        if (obj[number] > saved) {
            saved = obj[number]
            returned = number
        }
    }

    return returned
}