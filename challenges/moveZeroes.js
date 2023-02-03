// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

const moveZeroes = nums => {
    let i = 0
    let totalZeroes = 0 // save these two to add up for how many loops there have been, 
    while (i + totalZeroes < nums.length) { // loop through nums array
        if (nums[i] === 0) {
            nums.push(...nums.splice(i, 1)) // if current nums element is 0, remove it with splice and push it onto the end of nums
            totalZeroes++ // add one to how many zeroes loop has seen
        } else {
            i++ // if it's any other number, increment i
        }
    }
}

console.log(moveZeroes([0,1,0,3,12]))