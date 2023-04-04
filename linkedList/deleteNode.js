// leetcode problem, There is a singly-linked list head and we want to delete a node node in it.
// ex input: head = [4,5,1,9], node = 5
// Output: [4,1,9]

const deleteNode = node => {
    node.val = node.next.val
    node.next = node.next.next
}