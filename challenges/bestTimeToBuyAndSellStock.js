// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// prices = [7,1,5,3,6,4] output = 5
// buy date 2 sell date 5 so 6 - 1 = 5

const maxProfit = prices => {
    // buyDate variable, updates as smaller number is found
    let buyDate = prices[0]
    // profit variable, becomes iteration price - buyDate
    let profit = 0

    for (let i = 0; i < prices.length; i++) {
        // if current iteration is less than buyDate, reset buyDate
        if (prices[i] < buyDate) {
            buyDate = prices[i]
        } else if (profit < prices[i] - buyDate) { // if the difference between current iteration and buyDate is greater than the current profit, save profit to that value
            profit = prices[i] - buyDate
        }
    }
    return profit
}

// leetcode: best time to buy and sell stock 2
// same problem as first, but you can buy and sell multiple times

// since you can buy multiple times, we can just check if i + 1 is greater than i, add that to the profit variable to return

const maxProfitTwo = prices => {
    let profit = 0 // set return variable

    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i]
        }
    }

    return profit
}