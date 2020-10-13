/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    const memo = []
    const dfs = (n) => {
        if (memo[n]) return memo[n]
        let res = 0
        for (let i = 1; i <= n - 1; i++) {
            res = Math.max(res, i * (n - i), i * dfs(n - i))
        }

        return memo[n] = res
    }

    return dfs(n)
};

var integerBreak = function (n) {
    const dp = new Array(n + 1).fill(0)

    dp[1] = 1
    dp[2] = 1

    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i - j; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
        }
    }

    return dp[n]
};
// @lc code=end

