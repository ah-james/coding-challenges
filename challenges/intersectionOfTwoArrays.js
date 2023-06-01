// Given two integer arrays nums1 and nums2, return an array of their intersection. 
//Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
// ex Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

const intersect = (nums1, nums2) => {
    // create variables: empty object to push 1 array into and empty array for return statement
    const obj = {}
    const array = []
    // want to create an object with the first nums array, increment value by 1 
    // with every instance of each number
    for (let i = 0; i < nums1.length; i++) {
        obj[nums1[i]] = obj[nums1[i]] + 1 || 1
    }
    // loop through nums2 array use object to check if each number that existed in nums1 array is in nums2 array
    for (let i = 0; i < nums2.length; i++) {
        // when object has key of same value as nums2 element, push that number into the return array
        // and decrement value of that key by 1
        if (obj[nums2[i]] >= 1) {
            array.push(nums2[i])
            obj[nums2[i]]--
        }
    }
    return array
};