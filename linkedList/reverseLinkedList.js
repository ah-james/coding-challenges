// leetcode solution

const reverseList = head => {
    let prev = null
    let curr = head
    let next = null

    while (curr !== null) {
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev;
}

console.log(reverseList([1,2,3,4,5]))