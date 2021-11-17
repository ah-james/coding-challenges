var removeElement = function(nums, val) {
    // iterate over nums array
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
    
    return nums.length
};