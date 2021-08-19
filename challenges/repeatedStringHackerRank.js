function repeatedString(s, n) {
    // edge case: if s doesn't include 'a', return 0
    if (!s.includes('a')) {
        return 0
    }
    
    // count number of times 'a' appears in original string s
    // save number of times s repeats in entirety in repeated string of length n
    // save remainder of repeated string
    const totalAInS = s.match(/a/g).length
    const whole = Math.floor(n / s.length)
    const remainder = n % s.length
    
    // save variable of total number of 'a's to return
    // initial value is totalAInS multiplied by whole
    let solution = totalAInS * whole
    
    // find portion of string used by remainder of s
    const substring = s.substring(0, remainder)
    // loop through substring to add to solution variable
    for (let i = 0; i < substring.length; i++) {
        if (substring[i] === 'a') {
            solution += 1
        }
    }
    
    return solution
}