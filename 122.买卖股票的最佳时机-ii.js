/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * 贪心法
 * 
 * 本道题可以使用贪心法的一个原因是收益只能是0或负数或正数，而且不限制交易次数。
 * 贪心策略：只加正数
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        let diff = prices[i + 1] - prices[i]
        if (diff > 0) maxProfit += diff
    }

    return maxProfit
};
// @lc code=end

