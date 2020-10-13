/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    if (prices.length <= 1) {
        return 0
    }
    const dp = new Array() // 定义depTable 备忘录
    // 定义base
    dp[0] = 0
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        // 状态转移方程：前i天的最大收益 = max{前i-1天的最大收益，第i天的价格-前i-1天中的最小价格}
        // min表示前i-1天的最小价格
        // Math.max(dp[i - 1], prices[i] - min)就是我们的状态转移方程了
        dp[i] = Math.max(dp[i - 1], prices[i] - min)
        //  这里写在最下面表示前i-1天中的最小价格
        min = Math.min(min, prices[i])
    }
    return dp[prices.length - 1] // prices.length - 1表示前prices.length - 1天
}

/**
 * 
 * 使用贪心算法, 遍历prices每日价格, 保存价格最低的那个, 每天比较和最低价的差值, 保存起来, 如果明天差值更大, 覆盖掉旧差值, 最后拿到的就是最高的盈利.
 * 
 * @param {*} prices 
 */
var maxProfit = function (prices) {
    if (prices.length <= 1) {
        return 0
    }

    let profit = 0
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - min)
        min = Math.min(min, prices[i])
    }
    return profit
}
// @lc code=end
console.log(maxProfit([7,1,5,3,6,4]))
