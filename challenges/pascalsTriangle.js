// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it
// ex
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

const generate = numRows => {
    // set empty array variable to push arrays into
    let returnedArray = []

    // if numRows is less than 3, make 2 arrays with cooresponding amount of 1s
    if (numRows < 3) {
        for (let i = 1; i <= numRows; i++) {
            let array = new Array(i).fill(1)
            returnedArray.push(array)
        }
    }

    return returnedArray
}