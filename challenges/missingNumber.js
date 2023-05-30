// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// ex. nums = [3,0,1] output = 2

var missingNumber = function(nums) {
    let sortedNums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length + 1; i++) {
        if (i !== sortedNums[i]) {
            return i
        }
    }
};