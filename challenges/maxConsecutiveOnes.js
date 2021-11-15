var findMaxConsecutiveOnes = function(nums) {
    // join and split array to remove 0s, each set of 1s will be individual elements
    let array = nums.join('').split('0').sort()
    // when array is sorted the final element will be largest, so that can be returned
    return array[array.length - 1].length
};