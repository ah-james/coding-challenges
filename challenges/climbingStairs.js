// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// ex. Input n = 2, output 2 (1 + 1 or 2)
// ex. n = 3, output 3 (1 + 1 + 1, 1 + 2, 2 + 1)

const climbingStairs = n => {
    if (n < 4) return n

    let fibonacci = [1, 1] // create array, each answer will be pushed into this

    for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2] // fibonacci element at current step is set equal to the sum of the two preceeding elements ex. fibonacci[3] is equal to 1 + 1
    }

    return fibonacci[n]
}