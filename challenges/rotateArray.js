// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

const rotateArray = (nums, k) => {

    // loop while i < number of steps
    for (let i = 0; i < k; i++) {
        let end = nums.pop()
        nums.unshift(end)
    }

    return nums
}

const rotateArray2 = (nums, k) => {
    let returned = []
    for (let i = 1; i < k + 1; i++) {
        returned.unshift(nums[nums.length - i])
        console.log(returned)
    }
    
    for (let i = 0; i < nums.length - k; i++) {
        returned.push(nums[i])
        console.log(returned)
    }

    return returned
}   

console.log(rotateArray([1,2,3,4,5,6,7], 3))