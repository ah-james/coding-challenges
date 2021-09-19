var firstUniqChar = function(s) {
    // create an object with keys of letters in s and value of integer
    let obj = {}
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = obj[s[i]] + 1 || 1
    }
    
    // loop through new object, if value of current key in object is 1 then
    // return i
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === 1) {
            return i
        }
    }
    
    // if all characters repeat, return -1 instead
    return -1
};

    // // iterate over string s, can use nested loop to check all pairs
    // for (let i = 0; i < s.length; i++) {
    //     for (let j = 0; j < s.length; j++) {
    //         // if s[i] is equal to s[j] continue loop
    //         if (s[i] === s[j]) {
    //             continue
    //         } else if ()
    //     }
    // }
    // return -1