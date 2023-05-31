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

const missingNumber2 = nums => {
    // create dummy array of array length +1 (for missing number) and fill with -1, since that number won't exist in array
    let array = Array(nums.length + 1).fill(-1)

    // loop through nums array, add each element to cooresponding index of array replacing -1
    for (let i = 0; i < nums.length; i++) {
        array[nums[i]] = nums[i]
    }

    // loop over array, when array[i] === -1, return index
    for (let i = 0; i < array.length; i++) {
        if (array[i] === -1) {
            return i
        }
    }
}