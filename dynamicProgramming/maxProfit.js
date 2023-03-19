const maxProfit = prices => {
    // save buyDate variable to update as we loop
    let buyDate = prices[0]
    // save profit variable to update when prices[i] - buyDate > current profit
    let profit = 0

    // loop through prices array
    for (let i = 1; i < prices.length; i++) {
        // when i + 1 > buyDate, we want to update buyDate to prices[i]
        if (prices[i] < buyDate) {
            buyDate = prices[i]
        } else if (prices[i] - buyDate > profit) {
            // if prices[i] - buyDate is greater than profit, update that variable
            profit = prices[i] - buyDate
        }
    }

    return profit
}