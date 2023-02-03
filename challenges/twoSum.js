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

const twoSumTwo = (nums, target) => {
    // use an object here
    const obj = {}

    // loop through nums array
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i] // find the difference between target number and the current number being checked from array
        if (obj[diff] !== undefined) { // if the difference currently exists in the object, return the value of diff in object and current i
            return [obj[diff], i] // ex. if trying to find 9, 2 checked first, doesn't exist, added to array. 7 checked second, 9-7=2, obj[2] exists with value of 0, returns [0,1]
        }

        obj[nums[i]] = i // add key: nums element with value: index of element to object
    }
};

console.log(twoSumTwo([2, 7, 11, 15], 9))