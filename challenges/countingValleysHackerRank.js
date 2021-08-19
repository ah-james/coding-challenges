function countingValleys(steps, path) {
    // save new variables set to 0 for the current level and the amount of times a
    // valley has been exited
    let currentLevel = 0
    let valleysExited = 0
    // add one to current level if steps is "U", subtract if "D"
    // if the current level is 0 and the next character in the steps string is U
    // add one to the valleys variable
    for (let i = 0; i < path.length; i++) {
        if (path[i] === "U") {
            currentLevel++
        } else if (path[i] === "D") {
            currentLevel--
        }
        if (currentLevel === 0 && path[i] === "U") {
            valleysExited++
        }
    }
    // return the filled out exited valley variable
    return valleysExited
}