// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
    // should use two pointers here, set first to 0 and second to 1
    let first = 0
    let second = 1

    // iterate through nums while the two elements don't add to the target
    while (nums[first] + nums[second] !== target) {
        second++ // every iteration add one to second

        if (second >= nums.length - 1) { // if second is greater than the last element of nums array
            first++ // add one to first
            second = first + 1 // restart second at element after first
        }
    }
    return [first, second]
}