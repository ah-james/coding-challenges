// leetcode Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// - Open brackets must be closed by the same type of brackets.
// - Open brackets must be closed in the correct order.
// - Every close bracket has a corresponding open bracket of the same type.

const validParenthesis = s => {
    if (s.length % 2 !== 0 ) return false;
    
    var stack = [];
    for (let c of s) {
        if (c === ')' && stack[stack.length -1] === '('){
            stack.pop()
        } else if (c === '}' && stack[stack.length -1] === '{'){
            stack.pop()
        } else if (c === ']' && stack[stack.length -1] === '['){
            stack.pop()
        } else {
            stack.push(c)
        }
        
    }
    
    return !stack.length
}