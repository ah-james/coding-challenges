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

// what if string has punctuation and capitals we want to get rid of?
const isAnagramTwo = (s, t) => {
    // use regex to get rid of punctuation, .toLowerCase to change capitals
    const lowerS = s.toLowerCase().replace(/[^a-z]/g, '')
    const lowerT = t.toLowerCase().replace(/[^a-z]/g, '')

    const obj = createObject(lowerS, lowerT)

    // loop through the object, since each character should occur once in each string, must be divisible by 2
    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
            return false
        }
    }

    return true
}

const createObject = (stringA, stringB) => {
    // create object to push both strings into
    const obj = {}

    for (let char of lowerS) {
        obj[char] = obj[char] + 1 || 1
    }

    for (let char of lowerT) {
        obj[char] = obj[char] + 1 || 1
    }

    return obj
}