// leetcode Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ex. input s = 'anagram' t = 'nagaram' output = true

const isAnagram = (s, t) => {
    // if the strings are different lengths return false
    if (s.length !== t.length) return false

    // easiest with objects, make s into an object, each time a letter appears add it or increment value by 1
    let obj = {}

    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = obj[s[i]] + 1 || 1
    }

    for (let i = 0; i < t.length; i++) {
        // if obj doesn't contain t[i] return false
        if (!obj[t[i]]) return false
        obj[t[i]]--
    }

    return true
}