// this is very ugly return to later

var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false
    }
    let peak = 0
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
            peak++
        }
        
        if (peak === 1 && arr[i + 1] > arr[i]) {
            return false
        }
        
        if (arr[i + 1] === arr[i]) {
            return false
        }
    }

    if (peak === 1) {
        return true
    } 
    
    return false
};