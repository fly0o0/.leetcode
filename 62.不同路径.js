/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * 思路：
 * 通过动态规划解决，首行和首列，都是只有1条路径。所以先初始化。
 * 然后dp[i][j]，定义为到这个点所有可能的路径之和。
 * 状态方程为：dp[i][j] = dp[i - 1][j] + dp[i][j - 1] 
 * 
 * 时间复杂度：O (N^2)
 * 空间复杂度：O (N^2)
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = Array.from({length: m}, () => new Array(n).fill(0))

    for (let i = 0; i < m; i++) {
        dp[i][0] = 1
    }

    for (let j = 0; j < n; j++) {
        dp[0][j] = 1
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }

    return dp[m - 1][n - 1]
};
// @lc code=end

console.log(uniquePaths(3, 2))