var duplicateZeros = function(arr) {
    // iterate through array, when current element is 0
    // use splice to add an extra 0
    let array = arr.length
    for (let i = 0; i < array; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0)
            i++
        }
    }
    
    while (arr.length > array) {
        arr.pop()
    }
};