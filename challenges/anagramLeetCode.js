var isAnagram = function(s, t) {
    // if s and t are different lengths return false
    if (s.length !== t.length) return false
    
    // set empty objects to populate with characters of s and t
    let obj = {}
    
    for (let i = 0; i < s.length; i++) {
        // key is character, value is # of times character appears
        obj[s[i]] = obj[s[i]] + 1 || 1
    }

    // iterate over t, subtract one each time character occurs
    for (let i = 0; i < t.length; i++) {
        // if current character of t doesn't exist in s object, then strings aren't anagrams
        // and return false
        if (!obj[t[i]]) return false
        // if current character of t does exist subtract 1 from value
        obj[t[i]]--
        // if current character of t in object is 0, then delete the key
        if (obj[t[i]] === 0) delete obj[t[i]]
    }
    
    if (Object.keys(obj).length === 0) return true
    
};

// let sortedS = s.split('').sort().join('')
// let sortedT = t.split('').sort().join('')
// return sortedS === sortedT

//   return s.split('').sort().join('') === t.split('').sort().join('')