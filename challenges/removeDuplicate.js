const removeDuplicates = nums => {
    let i = 0;
    while (i < nums.length) { // iterate through array
        if (nums[i] === nums[i + 1]) { // if current number is equal to the next number
            nums.splice(i, 1); // remove that bad boi
        } else {
            i++; // if current number is different from next number move on
        }
    }
    return nums.length // return solution
}