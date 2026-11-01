class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let minPrice = prices[0]

        let maxProfit = 0 

        for (let i = 0; i < prices.length; i++) {

            if (prices[i] < minPrice) {
                 minPrice = prices[i]   
            }

            const profit = prices[i] - minPrice

            if (profit > maxProfit) {
                maxProfit = profit
            }

        }

        if (maxProfit < 0) return 0

        return maxProfit

    }
}
