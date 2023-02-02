// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
    // should use two pointers here, set left to 0 and right to length
    let first = 0
    let second = 1

    while (nums[first] + nums[second] !== target) {
        // if sum is lower, increase left
        console.log('indices: ' + first, second)
        console.log('numbers: ' + nums[first], nums[second])
        console.log('sum: ' + (nums[first] + nums[second]))

        if (nums[first] + nums[second] !== target) {
            second++
        }

        if (second >= nums.length - 1) {
            first++
            second = first + 1
        }
    }
    return [first, second]
}

console.log(twoSum([150,24,79,50,88,345,3], 200))