var twoSum = function(nums, target) {
    // create hash table of nums array through iteration, each key is an element with value of i
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] = i
    }
    
    // create a second loop to check if current iteration + another key is equal
    // to the target number
    for (let i = 0; i < nums.length; i++) {
      // create variable to find if a key exists in object of target minus current iteration in nums
      let found = obj[target - nums[i]];
      // if that number exists and the number doesn't equal current iteration
      // return array of current iteration and the found number
      if(found !== undefined && found != i) return [i, found];
    }
    return [0, 0]
  };
  
    // // create solution array to push solution into
    // const solution = []
    // // O(n^2) solution: iterate over nums, then double loop to check all other elements
    // // if outer loop + inner loop = target, push the indexes of those loops into solution
    // // array
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             solution.push(i, j)
    //             return solution
    //         }
    //     }
    // }