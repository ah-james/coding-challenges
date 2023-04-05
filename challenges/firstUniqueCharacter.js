// leetcode Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// ex. "leetcode" return 0

const firstUniqChar = s => {
    // use an object, each character in string is 1 or +1 if already exists
    let obj = {}

    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = obj[s[i]] + 1 || 1
    }

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === 1) {
            return i
        }
    }
    return -1
}